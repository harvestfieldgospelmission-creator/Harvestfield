import type { JournalPost } from './missionData';
import type { Language } from '../i18n';

type JournalCopy = Partial<Pick<JournalPost,
  'category' | 'title' | 'subtitle' | 'authorRole' | 'readTime' |
  'coverCaption' | 'excerpt' | 'body' | 'marginNote'
>>;

const journalCopy: Record<'fr' | 'es', Record<string, JournalCopy>> = {
  fr: {
    'post-1': {
      category: 'Récits de mission' as JournalPost['category'],
      title: 'Sur les traces de Linde-Massa et Maroua : faire avancer l’Évangile dans le nord du Cameroun',
      subtitle: 'Un aperçu des champs missionnaires déclarés par le ministère dans le nord du Cameroun',
      authorRole: 'Fondateur',
      readTime: '5 min de lecture',
      coverCaption: 'Fig. 1 — Un rassemblement communautaire dans le champ missionnaire du nord du Cameroun.',
      excerpt: 'Une présentation de la présence missionnaire du ministère et des photographies prises à Linde-Massa et Maroua, dans le nord du Cameroun.',
      body: [
        'Harvest Field Gospel Mission International est basée à Omoku, dans l’État de Rivers, au Nigeria. Les documents de terrain du ministère mentionnent également Linde-Massa et Maroua, dans le nord du Cameroun, parmi ses lieux de mission.',
        'Le ministère décrit son travail comme une œuvre de proclamation de l’Évangile, d’encouragement des croyants et de service aux communautés. Les photographies de la galerie de terrain témoignent visuellement de certaines activités et rencontres du ministère.',
        'L’approche déclarée du ministère comprend l’évangélisation et la formation des croyants à la pratique du témoignage chrétien. Les calendriers précis des programmes et les résultats locaux ne sont pas détaillés ici.',
        'Toute personne souhaitant en savoir plus sur le travail du ministère ou sur les possibilités de participation peut contacter directement la mission.',
      ],
      marginNote: { heading: 'Repères de terrain', detail: 'Linde-Massa et Maroua, dans le nord du Cameroun, figurent parmi les lieux mentionnés dans les documents de terrain du ministère.' },
    },
    'post-2': {
      category: 'Jeunesse et écoles' as JournalPost['category'],
      title: 'Toucher les élèves avant que le monde ne le fasse : au cœur de nos actions scolaires',
      subtitle: 'Pourquoi les établissements secondaires et les conférences d’étudiants restent au cœur du mandat de Harvest Field',
      authorRole: 'Mobilisation des jeunes et des étudiants',
      readTime: '4 min de lecture',
      coverCaption: 'Fig. 2 — Prière personnelle et accompagnement des élèves lors d’une action scolaire intensive dans l’État de Rivers.',
      excerpt: 'Les élèves d’aujourd’hui font face à de fortes pressions scolaires, sociales et spirituelles. Nos équipes jeunesse et étudiants apportent des conseils bibliques et une foi vivante directement dans les établissements.',
      body: [
        'Harvest Field Gospel Mission International compte les actions auprès des écoles et des jeunes parmi ses activités ministérielles. Le ministère est basé à Omoku, dans l’État de Rivers, au Nigeria.',
        'L’approche déclarée du ministère comprend des programmes d’évangélisation scolaire et des échanges pratiques autour de l’Évangile. Son travail comprend également le conseil et le ministère de prière.',
        'Le ministère mentionne aussi les conférences et la formation des croyants parmi ses activités. Pour obtenir les informations actuelles sur les programmes, veuillez contacter la mission.',
      ],
      marginNote: { heading: 'Axe du programme', detail: 'Les activités déclarées du ministère comprennent l’évangélisation scolaire, les conférences pour les jeunes et le conseil.' },
    },
    'post-3': {
      category: 'Récits de mission' as JournalPost['category'],
      title: 'Les Porteurs de Gloire : bâtir des liens missionnaires en Afrique francophone',
      subtitle: 'Regards sur les missions en République du Tchad et les rencontres de prière et d’édification en Côte d’Ivoire',
      authorRole: 'Fondateur',
      readTime: '5 min de lecture',
      coverCaption: 'Fig. 3 — Invitation à la conférence « Les Porteurs de Gloire » (Prière, Enseignement et Impartation) en Côte d’Ivoire.',
      excerpt: 'La langue et les frontières nationales ne limitent pas la Grande Mission. Découvrez l’engagement de Harvest Field dans la prière, l’enseignement et les rencontres en République du Tchad et en Côte d’Ivoire.',
      body: [
        'Harvest Field Gospel Mission International mentionne le Nigeria, le Cameroun, le Tchad et la Côte d’Ivoire dans ses documents missionnaires. Son travail est centré sur l’annonce de l’Évangile et la formation des croyants.',
        'Les photographies et publications du ministère comprennent une conférence en Côte d’Ivoire intitulée Les Porteurs de Gloire, ainsi que des rencontres missionnaires et de louange au Tchad. Ces documents reflètent l’intérêt déclaré du ministère pour l’évangélisation, la prière et l’enseignement.',
        'Le ministère accueille les demandes de renseignements des églises et des personnes qui souhaitent découvrir son travail missionnaire et les possibilités d’y participer.',
      ],
      marginNote: { heading: 'Présence régionale', detail: 'Les documents du ministère mentionnent le Nigeria, le Cameroun, le Tchad et la Côte d’Ivoire.' },
    },
    'post-4': {
      category: 'Formation de disciples' as JournalPost['category'],
      title: 'Partir, prier ou soutenir : former des ouvriers à la Harvest Field Academy',
      subtitle: 'Présentation de l’engagement du ministère à former et équiper les croyants',
      authorRole: 'Ministère',
      readTime: '4 min de lecture',
      coverCaption: 'Fig. 4 — Formation biblique et préparation missionnaire à Harvest Field Gospel Mission International.',
      excerpt: 'Découvrez la Harvest Field Academy et l’engagement du ministère à équiper les croyants pour une évangélisation efficace.',
      body: [
        'La moisson est abondante, mais Jésus a expressément demandé à ses disciples de prier pour des ouvriers : des personnes qui comprennent le message de la croix et la discipline nécessaire pour le transmettre fidèlement.',
        'La Harvest Field Academy s’inscrit dans l’engagement du ministère à équiper les croyants de connaissances utiles à l’évangélisation. Le ministère organise également des conférences et des activités de formation de disciples.',
        'Le ministère accueille les demandes de personnes qui souhaitent en savoir plus sur ses activités de formation et son travail missionnaire.',
      ],
      marginNote: { heading: 'Lieu de rencontre', detail: 'Pour obtenir des informations actuelles sur les activités de la Harvest Field Academy et les modalités de rencontre, veuillez contacter la mission.' },
    },
    'post-5': {
      category: 'Méditation' as JournalPost['category'],
      title: 'As-tu rencontré Jésus ? Une invitation ouverte à la paix et à une vie nouvelle',
      subtitle: 'Une parole pastorale de notre mission à toute personne en quête de pardon, de sens et de grâce',
      authorRole: 'Président et fondateur',
      readTime: '3 min de lecture',
      coverCaption: 'Fig. 5 — Prière personnelle et accompagnement pastoral pour ceux qui répondent à l’appel du Christ.',
      excerpt: 'Avant les programmes, les conférences et les voyages, notre mission commence par une question personnelle : as-tu rencontré Jésus ? Il est prêt à t’accueillir tel que tu es.',
      body: [
        'Au milieu des responsabilités quotidiennes, des regrets silencieux ou des questions sans réponse sur le sens de la vie, il est facile de penser que Dieu attend que tu te répares avant de t’approcher de lui. Pourtant, l’Évangile annonce exactement le contraire.',
        'Jésus-Christ est prêt à t’accueillir aujourd’hui tel que tu es. Tu n’as pas besoin d’attendre une date particulière ni de franchir seul la porte d’une église. Où que tu lises ces mots, tu peux lui confesser sincèrement tes péchés, lui demander de purifier ton cœur et choisir de le suivre comme Seigneur et Sauveur.',
        'Si tu as fait cette prière aujourd’hui — ou si tu souhaites parler avec quelqu’un et examiner les Écritures ensemble — tu peux contacter Harvest Field Gospel Mission International grâce aux coordonnées figurant sur ce site.',
      ],
      marginNote: { heading: 'Accompagnement pastoral', detail: 'Veuillez contacter la mission pour toute demande de conseil et de soutien dans la prière.' },
    },
  },
  es: {
    'post-1': {
      category: 'Crónicas misioneras' as JournalPost['category'],
      title: 'Huellas en Linde-Massa y Maroua: el avance del Evangelio en el norte de Camerún',
      subtitle: 'Una mirada a los campos misioneros que el ministerio identifica en el norte de Camerún',
      authorRole: 'Fundador',
      readTime: '5 min de lectura',
      coverCaption: 'Fig. 1 — Una reunión comunitaria en el campo misionero del norte de Camerún.',
      excerpt: 'Una introducción a la presencia misionera del ministerio y a las fotografías de campo de Linde-Massa y Maroua, en el norte de Camerún.',
      body: [
        'Harvest Field Gospel Mission International tiene su sede en Omoku, estado de Rivers, Nigeria. Los materiales de campo del ministerio también identifican Linde-Massa y Maroua, en el norte de Camerún, entre sus lugares de misión.',
        'El ministerio describe su labor como compartir el Evangelio, animar a los creyentes y servir a las comunidades. Las fotografías de la galería de campo ofrecen un registro visual de algunas actividades y reuniones del ministerio.',
        'El enfoque declarado del ministerio incluye la evangelización y la preparación de los creyentes para compartir su fe de manera práctica. Aquí no se especifican calendarios de programas ni resultados locales.',
        'Quienes deseen conocer más sobre la labor del ministerio o las formas de participar pueden comunicarse directamente con la misión.',
      ],
      marginNote: { heading: 'Ubicaciones de campo', detail: 'Linde-Massa y Maroua, en el norte de Camerún, figuran entre los lugares identificados en los materiales de campo del ministerio.' },
    },
    'post-2': {
      category: 'Juventud y escuelas' as JournalPost['category'],
      title: 'Llegar a las aulas antes que el mundo: nuestras jornadas intensivas en las escuelas',
      subtitle: 'Por qué las escuelas secundarias y las conferencias estudiantiles siguen siendo fundamentales para la misión de Harvest Field',
      authorRole: 'Movilización juvenil y estudiantil',
      readTime: '4 min de lectura',
      coverCaption: 'Fig. 2 — Oración personal y orientación a estudiantes durante una jornada escolar intensiva en el estado de Rivers.',
      excerpt: 'Los estudiantes de hoy afrontan fuertes presiones académicas, sociales y espirituales. Nuestros equipos juveniles y estudiantiles llevan consejo bíblico y una fe viva directamente a las escuelas.',
      body: [
        'Harvest Field Gospel Mission International incluye las actividades con escuelas y jóvenes entre sus labores ministeriales. El ministerio tiene su sede en Omoku, estado de Rivers, Nigeria.',
        'El enfoque declarado del ministerio incluye programas de alcance escolar y encuentros prácticos para compartir el Evangelio. Su labor también incluye consejería y oración.',
        'El ministerio también identifica las conferencias y la formación de creyentes como parte de su trabajo. Para conocer los detalles actuales de los programas, comuníquese con la misión.',
      ],
      marginNote: { heading: 'Área del programa', detail: 'Las actividades declaradas del ministerio incluyen alcance escolar, conferencias juveniles y consejería.' },
    },
    'post-3': {
      category: 'Crónicas misioneras' as JournalPost['category'],
      title: 'Les Porteurs de Gloire: colaboración misionera en África occidental y central francófona',
      subtitle: 'Reflexiones sobre las misiones en la República del Chad y los encuentros de oración y edificación en Costa de Marfil',
      authorRole: 'Fundador',
      readTime: '5 min de lectura',
      coverCaption: 'Fig. 3 — Invitación a la conferencia «Les Porteurs de Gloire» (Oración, Enseñanza e Impartición) en Costa de Marfil.',
      excerpt: 'El idioma y las fronteras nacionales no limitan la Gran Comisión. Una mirada al trabajo de Harvest Field mediante la oración, la enseñanza y los encuentros en Chad y Costa de Marfil.',
      body: [
        'Harvest Field Gospel Mission International identifica a Nigeria, Camerún, Chad y Costa de Marfil en sus materiales misioneros. Su labor se centra en compartir el Evangelio y capacitar a los creyentes.',
        'Las fotografías y publicaciones del ministerio incluyen una conferencia en Costa de Marfil titulada Les Porteurs de Gloire, así como reuniones misioneras y de adoración en Chad. Estos materiales reflejan el interés declarado del ministerio por la evangelización, la oración y la enseñanza.',
        'El ministerio recibe consultas de iglesias y personas que desean conocer más sobre su labor misionera y las oportunidades de participar.',
      ],
      marginNote: { heading: 'Alcance regional', detail: 'Los materiales del ministerio identifican a Nigeria, Camerún, Chad y Costa de Marfil.' },
    },
    'post-4': {
      category: 'Discipulado' as JournalPost['category'],
      title: 'Ir, orar o apoyar: preparando obreros en Harvest Field Academy',
      subtitle: 'Una introducción al compromiso del ministerio de capacitar y equipar a los creyentes',
      authorRole: 'Ministerio',
      readTime: '4 min de lectura',
      coverCaption: 'Fig. 4 — Formación bíblica y preparación misionera en Harvest Field Gospel Mission International.',
      excerpt: 'Conozca Harvest Field Academy y el compromiso del ministerio de equipar a los creyentes para una evangelización eficaz.',
      body: [
        'La mies es mucha, pero Jesús pidió expresamente a sus discípulos que oraran por obreros: personas que comprendan tanto el mensaje de la cruz como la disciplina necesaria para llevarlo fielmente.',
        'Harvest Field Academy forma parte del compromiso del ministerio de equipar a los creyentes con conocimientos para una evangelización eficaz. El ministerio también realiza conferencias y actividades de discipulado.',
        'El ministerio recibe consultas de quienes desean conocer más sobre sus actividades de formación y su labor misionera.',
      ],
      marginNote: { heading: 'Lugar de reunión', detail: 'Para obtener información actualizada sobre las actividades de Harvest Field Academy y los lugares de reunión, comuníquese con la misión.' },
    },
    'post-5': {
      category: 'Devocional' as JournalPost['category'],
      title: '¿Has conocido a Jesús? Una invitación abierta a la paz y a una vida nueva',
      subtitle: 'Una palabra pastoral de nuestra misión para quienes buscan perdón, propósito y gracia',
      authorRole: 'Presidente y fundador',
      readTime: '3 min de lectura',
      coverCaption: 'Fig. 5 — Oración personal y acompañamiento pastoral para quienes responden al llamado de Cristo.',
      excerpt: 'Antes de los programas, las conferencias o los viajes, nuestra misión comienza con una pregunta personal: ¿has conocido a Jesús? Él está dispuesto a recibirte tal como eres.',
      body: [
        'En medio de las responsabilidades diarias, los remordimientos silenciosos o las preguntas sin respuesta sobre el rumbo de la vida, es fácil pensar que Dios espera que primero arregles tu vida antes de acercarte a Él. Sin embargo, el Evangelio anuncia exactamente lo contrario.',
        'Jesucristo está dispuesto a recibirte hoy tal como eres. No necesitas esperar una fecha especial ni entrar primero en una iglesia por tu cuenta. Dondequiera que estés leyendo estas palabras, puedes confesarle sinceramente tus pecados, pedirle que limpie tu corazón y decidir seguirlo como Señor y Salvador.',
        'Si hoy has hecho esa oración —o deseas hablar con alguien y estudiar las Escrituras— puedes comunicarte con Harvest Field Gospel Mission International mediante los datos de contacto de este sitio web.',
      ],
      marginNote: { heading: 'Acompañamiento pastoral', detail: 'Comuníquese con la misión para solicitar orientación y apoyo en oración.' },
    },
  },
};

export function localizeJournalPost(post: JournalPost, language: Language): JournalPost {
  if (language === 'en') return post;
  const copy = journalCopy[language][post.id];
  return copy ? { ...post, ...copy, category: post.category } : post;
}
