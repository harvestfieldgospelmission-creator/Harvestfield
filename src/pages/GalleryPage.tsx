import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { LocalizedContent, useLanguage } from '../i18n';
import { localizeGalleryPhoto } from '../data/galleryTranslations';

interface GalleryPageProps {
  initialPhotoId?: string | null;
  onClearInitialPhoto?: () => void;
}

const REGIONS: { label: string; value: 'All' | GalleryPhoto['region'] }[] = [
  { label: 'All', value: 'All' },
  { label: 'Nigeria', value: 'Nigeria & Schools' },
  { label: 'Cameroon', value: 'Cameroon' },
  { label: 'Tchad', value: 'Tchad Republic' },
  { label: "Côte d’Ivoire", value: "Côte d'Ivoire" },
  { label: 'Kenya', value: 'Kenya' },
  { label: 'Flyers', value: 'Official Flyers' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({
  initialPhotoId = null,
  onClearInitialPhoto,
}) => {
  const { language } = useLanguage();
  const localizedPhotos = GALLERY_PHOTOS.map((photo) => localizeGalleryPhoto(photo, language));
  const [selectedRegion, setSelectedRegion] = useState<'All' | GalleryPhoto['region']>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(() => {
    if (!initialPhotoId) return null;
    const idx = GALLERY_PHOTOS.findIndex((p) => p.id === initialPhotoId);
    return idx >= 0 ? idx : null;
  });

  useEffect(() => {
    if (!initialPhotoId) return;
    setSelectedRegion('All');
    const idx = GALLERY_PHOTOS.findIndex((p) => p.id === initialPhotoId);
    if (idx >= 0) {
      setLightboxIndex(idx);
    }
  }, [initialPhotoId]);

  const filteredPhotos =
    selectedRegion === 'All'
      ? localizedPhotos
      : localizedPhotos.filter((p) => p.region === selectedRegion);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
        onClearInitialPhoto?.();
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredPhotos.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filteredPhotos.length, onClearInitialPhoto]);

  const closeLightbox = () => {
    setLightboxIndex(null);
    onClearInitialPhoto?.();
  };

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <LocalizedContent>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 space-y-8">
      {/* Header & Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-stone-200">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-harvest-600">
            The Work, Through Our Eyes
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest-950">
            Mission Galleries
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Authentic field documentation from school outreaches, rural crusades, discipleship
            classes, and foreign missions across Cameroon, Tchad Republic, and Côte d&apos;Ivoire.
          </p>
        </div>

        <div
          className="flex max-w-full items-center gap-1.5 overflow-x-auto p-1 pb-2 bg-stone-100 rounded-lg self-start"
          role="tablist"
          aria-label="Filter gallery by mission field"
        >
          {REGIONS.map((region) => (
            <button
              key={region.value}
              type="button"
              role="tab"
              aria-selected={selectedRegion === region.value}
              onClick={() => {
                setSelectedRegion(region.value);
                closeLightbox();
              }}
              className={`shrink-0 px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedRegion === region.value
                  ? 'bg-white text-forest-950 shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>

      {/* Media-First Bento / Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-5">
        {filteredPhotos.map((photo, idx) => {
          return (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`View ${photo.title} — ${photo.location}`}
              className="gallery-card group relative block aspect-[4/3] overflow-hidden rounded-xl bg-stone-200 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
            >
              <SafeImage
                src={photo.src}
                alt={photo.title}
                className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-105 ${
                  photo.region === 'Official Flyers'
                    ? 'object-contain bg-stone-100'
                    : 'object-cover'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                <span className="text-xs font-medium text-white">{photo.location}</span>
                <span className="w-8 h-8 rounded-lg bg-black/60 text-white inline-flex items-center justify-center">
                  <Expand className="w-4 h-4" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Fullscreen Lightbox */}
      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 text-white flex flex-col justify-between p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={closeLightbox}
        >
          <div
            className="flex items-center justify-between gap-4 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-0">
              <p className="text-xs text-harvest-400">
                {activePhoto.location} <span aria-hidden="true">·</span> {activePhoto.program}
              </p>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-white truncate">
                {activePhoto.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="flex-1 flex items-center justify-center gap-2 sm:gap-4 my-4 max-w-6xl w-full mx-auto min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
                )
              }
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0 cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 h-full flex items-center justify-center min-w-0">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] max-w-full object-contain rounded-lg"
              />
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)}
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0 cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div
            className="max-w-3xl w-full mx-auto text-center space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-stone-200 leading-relaxed">{activePhoto.caption}</p>
            <p className="text-xs text-stone-400 tabular-nums">
              {lightboxIndex + 1} / {filteredPhotos.length}
            </p>
          </div>
        </div>
      )}
    </div>
    </LocalizedContent>
  );
};
