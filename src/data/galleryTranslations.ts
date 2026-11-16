import type { GalleryPhoto } from '../data/missionData';
import type { Language } from '../i18n';

type GalleryCopy = Partial<Pick<GalleryPhoto, 'title' | 'program' | 'caption'>>;

const galleryCopy: Record<'fr' | 'es', Record<string, GalleryCopy>> = {
  fr: {
    g20: { title: 'Les étudiants arrivent pour la conférence', program: 'Évangélisation scolaire et auprès des étudiants', caption: 'Le bus de la mission arrive avec les étudiants pour une conférence scolaire de Harvest Field.' },
    g21: { title: 'Les étudiants se réunissent pour la conférence', program: 'Évangélisation scolaire et auprès des étudiants', caption: 'Des étudiants de plusieurs écoles se réunissent pour l’enseignement et la communion fraternelle.' },
    g22: { title: 'Enseignement lors de la conférence des étudiants', program: 'Évangélisation scolaire et auprès des étudiants', caption: 'Un orateur s’adresse aux étudiants lors d’une activité scolaire de Harvest Field.' },
    g23: { title: 'Équipe d’évangélisation de Harvest Field', program: 'Communion de l’équipe missionnaire', caption: 'Les membres de l’équipe Harvest Field se réunissent après avoir servi ensemble sur le terrain.' },
    g24: { title: 'Encouragement individuel d’un étudiant', program: 'Accompagnement et formation des étudiants', caption: 'Un étudiant reçoit des conseils personnels lors d’une activité scolaire de Harvest Field.' },
    g17: { title: 'Conférence des étudiants de Harvest Field', program: 'Évangélisation auprès des jeunes et des étudiants', caption: 'Les étudiants lèvent les mains dans la prière pendant une conférence de Harvest Field.' },
    g18: { title: 'Prédication de l’évangéliste David Abrebor', program: 'Prédication et enseignement', caption: 'L’évangéliste David Abrebor prêche lors d’une rencontre du ministère.' },
    g19: { title: 'Conférence des étudiants de Harvest Field', program: 'Évangélisation auprès des jeunes et des étudiants', caption: 'Prédication devant les étudiants réunis pour une conférence de Harvest Field.' },
    g1: { title: 'Expédition missionnaire à Linde-Massa', program: 'Mission à l’étranger', caption: 'L’évangéliste David Abrebor sur le terrain missionnaire à Linde-Massa, dans le nord du Cameroun, pour annoncer l’Évangile dans les villages.' },
    g2: { title: 'Les Porteurs de Gloire — Côte d’Ivoire', program: 'Conférence missionnaire et de réveil', caption: 'Rencontre francophone de réveil missionnaire sur le thème « Les Porteurs de Gloire : Prière • Enseignement • Impartation », avec l’évangéliste David Abrebor et le ministre Clement.' },
    g3: { title: 'Louange et adoration en République du Tchad', program: 'Mission à l’étranger', caption: 'Louange collective et communion fraternelle lors d’une mission transfrontalière de Harvest Field en République du Tchad.' },
    g4: { title: 'Évangélisation scolaire intensive et prière', program: 'Évangélisation scolaire intensive', caption: 'Prière individuelle et encouragement spirituel auprès d’élèves du secondaire lors d’une campagne intensive.' },
    g5: { title: 'Champ missionnaire de Maroua', program: 'Missions rurales et internationales', caption: 'Évangélisation en plein air et communion communautaire à Maroua, dans le nord du Cameroun.' },
    g6: { title: 'Ministère auprès des étudiants et des jeunes', program: 'Conférences pour les jeunes et les étudiants', caption: 'De jeunes étudiants réunis dans la joie et la communion lors d’une activité de Harvest Field.' },
    g7: { title: 'Cours de formation et de discipulat', program: 'Harvest Field Academy (HFA)', caption: 'Des croyants engagés pour le Royaume sont formés dans les Écritures et les stratégies missionnaires.' },
    g8: { title: 'Accompagnement chrétien individuel', program: 'Accompagnement chrétien', caption: 'Prière fraternelle et conseils bibliques pour les personnes qui recherchent la restauration et la paix.' },
    g9: { title: 'Ministère de réveil et de guérison', program: 'Réunions de réveil', caption: 'Moments de prière fervente et de percée spirituelle lors de réunions communautaires de réveil.' },
    g10: { title: 'Assemblée de jeunes et d’élèves', program: 'Évangélisation auprès des étudiants et des jeunes', caption: 'Un enseignement adressé aux étudiants réunis sur le but, la foi et un leadership selon Dieu.' },
    g11: { title: 'Rencontre au village de Linde-Massa', program: 'Évangélisation rurale', caption: 'Des familles et des enfants du village se réunissent en plein air pour écouter l’Évangile à Linde-Massa.' },
    g12: { title: 'Campagne d’évangélisation communautaire transfrontalière', program: 'Campagnes d’évangélisation communautaire', caption: 'Des campagnes de jour et de soirée mobilisent les croyants au-delà des frontières régionales.' },
    g13: { title: 'Prêcher la Parole dans les zones rurales', program: 'Missions et conférences d’évangélisation', caption: 'L’enseignement des Écritures aux nouvelles assemblées établies grâce à l’évangélisation rurale.' },
    g14: { title: 'Dépliant officiel de la mission — mandat et contacts', program: 'Publication de la mission', caption: 'Publication de Harvest Field Gospel Mission International présentant les priorités d’évangélisation et les coordonnées du ministère.' },
    g15: { title: 'Dépliant officiel — missions internationales et partenariats', program: 'Mobilisation missionnaire', caption: 'Document de mobilisation présentant les missions à Linde-Massa, Maroua, au Tchad et en Côte d’Ivoire.' },
    g16: { title: 'Fiche d’information du fondateur et du ministère', program: 'Bureau du fondateur', caption: 'Fiche d’information présentant le fondateur, l’évangéliste David Abrebor, et les activités du ministère.' },
  },
  es: {
    g20: { title: 'Los estudiantes llegan a la conferencia', program: 'Alcance escolar y estudiantil', caption: 'El autobús de la misión llega con los estudiantes para una conferencia escolar de Harvest Field.' },
    g21: { title: 'Los estudiantes se reúnen para la conferencia', program: 'Alcance escolar y estudiantil', caption: 'Estudiantes de varias escuelas se reúnen para recibir enseñanza y compartir.' },
    g22: { title: 'Enseñanza en la conferencia estudiantil', program: 'Alcance escolar y estudiantil', caption: 'Un orador comparte un mensaje con los estudiantes durante una actividad escolar de Harvest Field.' },
    g23: { title: 'Equipo de alcance de Harvest Field', program: 'Compañerismo del equipo misionero', caption: 'Los miembros del equipo de Harvest Field se reúnen después de servir juntos en el campo.' },
    g24: { title: 'Ánimo personal para un estudiante', program: 'Acompañamiento y discipulado estudiantil', caption: 'Un estudiante recibe orientación personal durante una actividad escolar de Harvest Field.' },
    g17: { title: 'Conferencia estudiantil de Harvest Field', program: 'Alcance a jóvenes y estudiantes', caption: 'Los estudiantes levantan sus manos en oración durante una conferencia de Harvest Field.' },
    g18: { title: 'Predicación del evangelista David Abrebor', program: 'Predicación y enseñanza', caption: 'El evangelista David Abrebor predica en una reunión del ministerio.' },
    g19: { title: 'Conferencia estudiantil de Harvest Field', program: 'Alcance a jóvenes y estudiantes', caption: 'Predicación a los estudiantes reunidos para una conferencia de Harvest Field.' },
    g1: { title: 'Expedición misionera en Linde-Massa', program: 'Misión internacional', caption: 'El evangelista David Abrebor en el campo misionero de Linde-Massa, en el norte de Camerún, compartiendo el evangelio en comunidades rurales.' },
    g2: { title: 'Les Porteurs de Gloire — Costa de Marfil', program: 'Conferencia misionera y de avivamiento', caption: 'Encuentro francófono de avivamiento misionero con el lema «Les Porteurs de Gloire: Prière • Enseignement • Impartation», con el evangelista David Abrebor y el ministro Clement.' },
    g3: { title: 'Alabanza y adoración en la República del Chad', program: 'Misión internacional', caption: 'Alabanza congregacional y compañerismo durante la misión transfronteriza de Harvest Field en la República del Chad.' },
    g4: { title: 'Alcance escolar intensivo y oración', program: 'Alcance escolar intensivo', caption: 'Oración personal y ánimo espiritual para estudiantes de secundaria durante una actividad escolar intensiva.' },
    g5: { title: 'Campo misionero de Maroua', program: 'Misiones rurales e internacionales', caption: 'Evangelización al aire libre y compañerismo comunitario en Maroua, al norte de Camerún.' },
    g6: { title: 'Ministerio con jóvenes y estudiantes', program: 'Conferencias de jóvenes y estudiantes', caption: 'Jóvenes estudiantes reunidos en un ambiente de alegría y compañerismo durante una actividad de Harvest Field.' },
    g7: { title: 'Clase de formación y discipulado', program: 'Harvest Field Academy (HFA)', caption: 'Creyentes comprometidos con el Reino reciben formación bíblica y preparación para la misión.' },
    g8: { title: 'Orientación cristiana personal', program: 'Consejería cristiana', caption: 'Oración cercana y orientación bíblica para quienes buscan restauración y paz.' },
    g9: { title: 'Ministerio de avivamiento y sanidad', program: 'Reuniones de avivamiento', caption: 'Momentos de oración ferviente y renovación espiritual durante reuniones comunitarias de avivamiento.' },
    g10: { title: 'Encuentro de jóvenes y escolares', program: 'Actividades para estudiantes y jóvenes', caption: 'Un mensaje dirigido a estudiantes sobre propósito, fe y liderazgo conforme a Dios.' },
    g11: { title: 'Encuentro en la aldea de Linde-Massa', program: 'Evangelización rural', caption: 'Familias y niños de la localidad se reúnen al aire libre para escuchar el evangelio en Linde-Massa.' },
    g12: { title: 'Cruzada comunitaria transfronteriza', program: 'Cruzadas de evangelización comunitaria', caption: 'Actividades de evangelización diurnas y nocturnas que reúnen a creyentes de distintas regiones.' },
    g13: { title: 'Predicación de la Palabra en zonas rurales', program: 'Misiones y conferencias evangelísticas', caption: 'Enseñanza clara de las Escrituras a nuevas congregaciones formadas mediante el alcance rural.' },
    g14: { title: 'Folleto oficial de la misión — objetivos y contacto', program: 'Publicación de la misión', caption: 'Publicación de Harvest Field Gospel Mission International que presenta sus objetivos de alcance y datos de contacto.' },
    g15: { title: 'Folleto oficial — misiones internacionales y colaboración', program: 'Movilización misionera', caption: 'Documento de movilización que presenta las misiones en Linde-Massa, Maroua, Chad y Costa de Marfil.' },
    g16: { title: 'Tarjeta informativa del fundador y del ministerio', program: 'Oficina del fundador', caption: 'Tarjeta informativa con el fundador, el evangelista David Abrebor, y detalles del trabajo del ministerio.' },
  },
};

export function localizeGalleryPhoto(photo: GalleryPhoto, language: Language): GalleryPhoto {
  if (language === 'en') return photo;
  return { ...photo, ...galleryCopy[language][photo.id] };
}
