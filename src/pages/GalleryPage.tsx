import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/missionData';
import { SafeImage } from '../components/SafeImage';
import { LocalizedContent } from '../i18n';

interface GalleryPageProps {
  initialPhotoId?: string | null;
  onClearInitialPhoto?: () => void;
}

const REGIONS: ('All' | GalleryPhoto['region'])[] = [
  'All',
  'Cameroon',
  'Tchad Republic',
  "Côte d'Ivoire",
  'Nigeria & Schools',
  'Official Flyers',
];

export const GalleryPage: React.FC<GalleryPageProps> = ({
  initialPhotoId = null,
  onClearInitialPhoto,
}) => {
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
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.region === selectedRegion);

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
          className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/75 rounded-lg self-start"
          role="tablist"
          aria-label="Filter gallery by mission field"
        >
          {REGIONS.map((region) => (
            <button
              key={region}
              type="button"
              role="tab"
              aria-selected={selectedRegion === region}
              onClick={() => {
                setSelectedRegion(region);
                closeLightbox();
              }}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedRegion === region
                  ? 'bg-white text-forest-950 shadow-sm'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              {region}
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
              className="gallery-card group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white text-left transition-shadow duration-200 hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800"
            >
              <div
                className={`relative w-full bg-stone-200 overflow-hidden ${
                  photo.region === 'Official Flyers'
                    ? 'aspect-[3/4]'
                    : photo.aspect === 'wide'
                    ? 'aspect-[16/9]'
                    : 'aspect-[4/3]'
                }`}
              >
                <SafeImage
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-xs font-medium text-white">
                    {photo.location}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-black/60 text-white inline-flex items-center justify-center">
                    <Expand className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-1.5">
                <p className="text-xs text-stone-500">
                  {photo.location} <span aria-hidden="true">·</span> {photo.program}
                </p>
                <h2 className="font-serif text-lg font-semibold text-forest-950 group-hover:text-forest-800 transition-colors leading-snug">
                  {photo.title}
                </h2>
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                  {photo.caption}
                </p>
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
