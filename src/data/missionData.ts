export type PageId =
  | 'home'
  | 'mission'
  | 'academy'
  | 'impact'
  | 'leadership'
  | 'gallery'
  | 'journal'
  | 'partner'
  | 'contact'
  | 'join'
  | 'prayer'
  | 'admin';

export const SITE_ORIGIN = 'https://harvestfieldgospelmisson.pages.dev';

export interface MandateItem {
  id: string;
  index: string;
  title: string;
  category: 'Evangelism' | 'Youth & Schools' | 'Training' | 'Global Missions';
  summary: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  region: 'Kenya' | 'Cameroon' | 'Tchad Republic' | "Côte d'Ivoire" | 'Nigeria & Schools' | 'Official Flyers';
  location: string;
  program: string;
  caption: string;
  aspect: 'wide' | 'portrait' | 'landscape';
}

export interface JournalPost {
  id: string;
  slug: string;
  category: 'Field Reports' | 'Youth & Schools' | 'Discipleship' | 'Devotional';
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  region: string;
  featured?: boolean;
  coverImage: string;
  coverCaption: string;
  excerpt: string;
  body: string[];
  bodyBlocks?: Array<{
    _type: 'block' | 'image';
    _key?: string;
    style?: string;
    markDefs?: Array<{ _key: string; _type: string; href?: string }>;
    children?: Array<{ _type: string; text?: string; marks?: string[] }>;
    asset?: { url?: string };
    alt?: string;
    caption?: string;
  }>;
  marginNote: {
    heading: string;
    detail: string;
  };
}

export interface BankAccount {
  id: string;
  type: 'Domiciliary Account (USD / International)' | 'Naira Current Account';
  bank: string;
  accountName: string;
  accountNumber: string;
  note: string;
}

export const MISSION_INFO = {
  name: "Harvest Field Gospel Mission Int'l",
  shortName: 'Harvest Field',
  tagline: 'Kingdom-minded believers, taking the nations for Christ.',
  headOffice: 'No. 17 Rev. Dr. Okoroma St, Omoku, Rivers State',
  fellowshipVenue:
    'All Power Liberation Church Hall, behind Osere Dengo Petrol Station, Ikiri Road, Omoku, Rivers State',
  officeHours: 'Mon – Fri · 9:00 AM – 3:00 PM',
  nationsReached: ['Nigeria', 'Cameroon', 'Tchad', "Côte d'Ivoire"],
  phones: ['+234 813 288 6893'],
  emails: ['info@harvestfieldgospelmission.org'],
  facebook: [
    { label: 'Abrebor David', handle: 'Personal Ministry Page' },
    { label: "Harvest Field Gospel Missions Int'l", handle: 'Official Mission Page' },
  ],
  salvationCall: {
    headline: 'Have you met Jesus?',
    body: 'He is willing to accept you just as you are. Accept Jesus today; confess your sins to Him, and follow Him.',
    closing: 'Pray now — the harvest begins in a surrendered heart.',
  },
};

export const MISSION_ABOUT = {
  introduction:
    'Harvest Field Gospel Mission International, Omoku, is a Christian interdenominational ministry committed to fulfilling the Great Commission by reaching the lost with the gospel of salvation through the Lord Jesus Christ.',
  equipping:
    'We also equip believers with knowledge and practical skills for effective soul-winning. Our goal is to awaken believers to their role in standing for the Gospel in their workplaces, neighbourhoods, and communities, and to help them practically engage people with the Gospel so that more may come to Christ.',
  outreachMethods: [
    'Practical one-on-one evangelism',
    'School outreach programmes',
    'Conferences',
    'Community evangelism',
    'Church evangelism awareness programmes',
    'Counselling',
    'Prayer and deliverance ministry',
  ],
  communityObjectives: [
    'Educational development and rehabilitation of young people in rural communities.',
    'Girl-child education advocacy.',
    'Poverty eradication in rural communities.',
    'Agricultural and vocational skills development for young people.',
  ],
  registration:
    'Headquartered in Omoku, Rivers State, Nigeria, Harvest Field Gospel Mission International is registered with the Corporate Affairs Commission of Nigeria.',
};

export const FOUNDER_PROFILE = {
  name: 'Evang. David Abrebor',
  role: "Founder, Harvest Field Gospel Mission Int'l",
  portrait: '/assets/field/founder-portrait.jpg',
  ministryPhoto: '/assets/field/founder-speaking.jpg',
  summary:
    'Evang. David Abrebor is the President and Founder of Harvest Field Gospel Mission International, headquartered in Omoku, Rivers State, Nigeria. The ministry is committed to fulfilling the Great Commission, equipping believers for effective soul-winning and serving communities.',
  biography: [
    'Evang. David Abrebor is the founder of Harvest Field Gospel Mission International, an interdenominational Christian ministry based in Omoku, Rivers State, Nigeria.',
    'The ministry focuses on proclaiming the Gospel of salvation through the Lord Jesus Christ and equipping believers with biblical knowledge and practical understanding for effective soul-winning. It encourages Christians to take an active role in sharing the Gospel in their workplaces, neighbourhoods and communities.',
    'Its outreach activities include one-on-one evangelism, school outreach programmes, conferences, community evangelism, church evangelism awareness programmes, counselling, and prayer and deliverance ministration. Community development objectives include educational support, girl-child education advocacy, poverty reduction, and agricultural and vocational skills development for young people in rural communities.',
  ],
  pillars: [
    {
      title: 'Gospel Outreach',
      detail: 'Practical one-on-one evangelism, school outreach programmes, conferences and community evangelism.',
    },
    {
      title: 'Believer Equipping',
      detail: 'Awakening and equipping Christians to share the Gospel in everyday settings.',
    },
    {
      title: 'Community Development',
      detail: 'Educational development, girl-child education advocacy, poverty reduction, and youth skills development.',
    },
  ],
};

export const MANDATES: MandateItem[] = [
  {
    id: 'evangelism-outreach',
    index: '01',
    title: 'Rural & Urban Evangelism Outreach',
    category: 'Evangelism',
    summary: 'Taking the gospel door-to-door and settlement-to-settlement across towns and remote villages.',
    description:
      'From the streets of Omoku to remote rural settlements, our evangelism teams bring the clear message of salvation, personal prayer, and practical compassion directly to communities longing for hope.',
    highlights: [
      'Open-air village evangelism and one-on-one witnessing',
      'Rural and urban gospel penetration initiatives',
      'Follow-up visits connecting new believers to local fellowships',
    ],
    image: '/assets/field/student-conference-preaching.jpg',
    imageAlt: 'Preacher addressing students gathered for a Harvest Field conference',
  },
  {
    id: 'school-youth-outreaches',
    index: '02',
    title: 'Intensive School & Youth Outreaches',
    category: 'Youth & Schools',
    summary: 'Reaching students and young people during formative academic seasons with truth and mentorship.',
    description:
      'We partner with schools and student fellowships to hold intensive assemblies, classroom ministry, and youth conferences that anchor young lives in godly purpose and moral clarity.',
    highlights: [
      'Intensive secondary and tertiary school outreaches',
      'Youths and Students Conferences across Rivers State',
      'Personal prayer and mentorship for students',
    ],
    image: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 5.46.53 PM.jpeg',
    imageAlt: 'Students gathered in an auditorium during a Harvest Field school outreach',
  },
  {
    id: 'christian-counseling',
    index: '03',
    title: 'Christian Counseling & Discipleship',
    category: 'Training',
    summary: 'Walking alongside believers through biblical guidance, spiritual growth, and life challenges.',
    description:
      'True mission work does not stop at conversion. Through counselling, prayer and discipleship activities, the ministry seeks to support believers and individuals facing life challenges.',
    highlights: [
      'Christian counselling and prayer support',
      'Foundational discipleship and Scripture study tracks',
      'Pastoral care for missionaries and field families',
    ],
    image: '/assets/field/school-outreach-counseling.jpeg',
    imageAlt: 'A student receives personal guidance during a Harvest Field school outreach',
  },
  {
    id: 'mission-mobilisation',
    index: '04',
    title: 'Mission Mobilisation & Labourers Retreat',
    category: 'Global Missions',
    summary: 'Awakening churches and believers to fulfill their mandate through going, praying, and giving.',
    description:
      'We gather intercessors, pastors, and kingdom-minded believers for Labourers Retreats and mobilisation summits—equipping labourers for rural and foreign harvest fields.',
    highlights: [
      'Conferences and believer mobilisation gatherings',
      'Intercessory prayer networks for unreached nations',
      'Church partnership mobilization for foreign fields',
    ],
    image: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 5.30.41 PM.jpeg',
    imageAlt: 'Believers worship and pray together with raised hands during a ministry gathering',
  },
  {
    id: 'community-crusades',
    index: '05',
    title: 'Community Crusades & Revival Meetings',
    category: 'Evangelism',
    summary: 'City-wide and village-square gatherings proclaiming Christ with teaching, worship, and healing.',
    description:
      'In partnership with local assemblies, we organize evangelistic crusades, Missions/Evangelistic Conferences, and revival meetings that stir spiritual renewal across entire districts.',
    highlights: [
      'Community Crusade Outreaches and open-air revivals',
      'Missions and Evangelistic Conferences',
      'Corporate worship, impartation, and healing ministry',
    ],
    image: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 6.06.32 PM.jpeg',
    imageAlt: 'Church members gather in prayer around the front of the church during a ministry service',
  },
  {
    id: 'harvest-field-academy',
    index: '06',
    title: 'Harvest Field Academy (HFA) & Foreign Missions',
    category: 'Global Missions',
    summary: 'Structured missionary preparation powering active outreach in Cameroon, Tchad, and Côte d’Ivoire.',
    description:
      'Harvest Field Academy equips believers for cross-cultural ministry—preparing sent-out teams who serve in Northern Cameroon (Linde-Massa & Maroua), the Republic of Tchad, and Côte d’Ivoire.',
    highlights: [
      'Training and equipping through Harvest Field Academy (HFA)',
      'Mission outreach in Cameroon, Tchad and Côte d’Ivoire',
      'Sharing the Gospel across language and cultural contexts',
    ],
    image: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 6.06.31 PM.jpeg',
    imageAlt: 'Harvest Field Academy graduates and ministry leaders stand together in graduation attire',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g35',
    src: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 5.30.41 PM.jpeg',
    title: 'Believers Gather in Worship and Prayer',
    region: 'Nigeria & Schools',
    location: 'Church Gathering',
    program: 'Mission Mobilisation',
    caption: 'Believers worship and pray together during a ministry gathering.',
    aspect: 'wide',
  },
  {
    id: 'g36',
    src: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 6.06.32 PM.jpeg',
    title: 'Church Members Gather for Prayer',
    region: 'Nigeria & Schools',
    location: 'Church Prayer Gathering',
    program: 'Revival Meetings',
    caption: 'Church members gather in prayer at the front of the church during a ministry service.',
    aspect: 'wide',
  },
  {
    id: 'g37',
    src: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 6.06.31 PM.jpeg',
    title: 'Harvest Field Academy Graduation Gathering',
    region: 'Nigeria & Schools',
    location: 'Academy Graduation',
    program: 'Harvest Field Academy (HFA)',
    caption: 'Graduates and ministry leaders stand together in graduation attire.',
    aspect: 'wide',
  },
  {
    id: 'g31',
    src: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 5.46.53 PM.jpeg',
    title: 'Students Gather for a School Outreach',
    region: 'Nigeria & Schools',
    location: 'School Outreach',
    program: 'School & Student Outreach',
    caption: 'Students listen during a Harvest Field school outreach in an auditorium.',
    aspect: 'wide',
  },
  {
    id: 'g32',
    src: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 5.01.52 PM.jpeg',
    title: 'Community Support and Relief Presentation',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Community Outreach',
    program: 'Community Support',
    caption: 'Mission representatives present food items and bottled water prepared for community support.',
    aspect: 'wide',
  },
  {
    id: 'g33',
    src: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 5.46.14 PM.jpeg',
    title: 'Students Gather Outside the School',
    region: 'Nigeria & Schools',
    location: 'School Outreach',
    program: 'School & Student Outreach',
    caption: 'Students gather outside during a Harvest Field school outreach visit.',
    aspect: 'wide',
  },
  {
    id: 'g34',
    src: '/assets/replacement-photos/WhatsApp Image 2026-11-16 at 5.01.54 PM.jpeg',
    title: 'Food and Water Prepared for Distribution',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Community Outreach',
    program: 'Community Support',
    caption: 'Food supplies and drinking water are displayed during a community support presentation.',
    aspect: 'wide',
  },
  {
    id: 'g20',
    src: '/assets/field/school-outreach-bus.jpeg',
    title: 'Students Arrive for the Conference',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Student Conference',
    program: 'School & Student Outreach',
    caption: 'The mission bus arrives with students for a Harvest Field school conference.',
    aspect: 'wide',
  },
  {
    id: 'g21',
    src: '/assets/field/school-outreach-assembly.jpeg',
    title: 'Students Gather for the Conference',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Student Conference',
    program: 'School & Student Outreach',
    caption: 'Students from several schools gather for teaching and fellowship at the conference.',
    aspect: 'portrait',
  },
  {
    id: 'g22',
    src: '/assets/field/school-outreach-students.jpeg',
    title: 'Teaching at the Student Conference',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Student Conference',
    program: 'School & Student Outreach',
    caption: 'A speaker shares with students during a Harvest Field school outreach.',
    aspect: 'wide',
  },
  {
    id: 'g23',
    src: '/assets/field/mission-outreach-team.jpeg',
    title: 'Harvest Field Outreach Team',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Gospel Mission',
    program: 'Mission Team Fellowship',
    caption: 'Members of the Harvest Field team gather after serving together in the field.',
    aspect: 'landscape',
  },
  {
    id: 'g24',
    src: '/assets/field/school-outreach-counseling.jpeg',
    title: 'One-on-One Student Encouragement',
    region: 'Nigeria & Schools',
    location: 'School Outreach',
    program: 'Student Counseling & Discipleship',
    caption: 'A student receives personal guidance during a Harvest Field school outreach.',
    aspect: 'portrait',
  },
  {
    id: 'g17',
    src: '/assets/field/student-conference.jpg',
    title: 'Harvest Field Student Conference',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Student Conference',
    program: 'Student & Youth Outreach',
    caption: 'Students raise their hands in prayer during a Harvest Field student conference.',
    aspect: 'wide',
  },
  {
    id: 'g18',
    src: '/assets/field/founder-speaking.jpg',
    title: 'Evang. David Abrebor Preaching',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Gospel Mission',
    program: 'Preaching & Teaching',
    caption: 'Evang. David Abrebor preaching at a ministry gathering.',
    aspect: 'landscape',
  },
  {
    id: 'g19',
    src: '/assets/field/student-conference-preaching.jpg',
    title: 'Harvest Field Student Conference',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Student Conference',
    program: 'Student & Youth Outreach',
    caption: 'Preaching to students gathered for a Harvest Field conference.',
    aspect: 'landscape',
  },
  {
    id: 'g1',
    src: '/assets/field/founder-linde-massa.jpg',
    title: 'Harvest Field Ministry Team Gathering',
    region: 'Nigeria & Schools',
    location: 'Nigeria',
    program: 'Mission Mobilisation',
    caption: 'Harvest Field ministry members gather in Nigeria for a team meeting.',
    aspect: 'landscape',
  },
  {
    id: 'g2',
    src: '/assets/field/cote-divoire-conference.jpg',
    title: 'Harvest Field Mission Team at the Airport',
    region: "Côte d'Ivoire",
    location: 'International Mission Travel',
    program: 'Foreign Mission',
    caption: 'Harvest Field mission team members gather beside an aircraft before cross-border outreach.',
    aspect: 'landscape',
  },
  {
    id: 'g3',
    src: '/assets/field/tchad-republic-mission.jpg',
    title: 'Harvest Field Mission Team Travels',
    region: 'Tchad Republic',
    location: 'International Mission Travel',
    program: 'Foreign Mission',
    caption: 'Team members prepare for cross-border ministry travel.',
    aspect: 'portrait',
  },
  {
    id: 'g4',
    src: '/assets/field/school-prayer-outreach.jpg',
    title: 'School Assembly Prayer Outreach',
    region: 'Nigeria & Schools',
    location: 'School Outreach',
    program: 'Intensive School Outreaches',
    caption: 'Students gather to pray with a ministry leader during a school assembly.',
    aspect: 'landscape',
  },
  {
    id: 'g5',
    src: '/assets/field/maroua-cameroon.jpg',
    title: 'Mission Team Travels to Maroua',
    region: 'Cameroon',
    location: 'Maroua, Far North Cameroon',
    program: 'Rural & Foreign Missions',
    caption: 'Harvest Field team members prepare for mission travel connected with Maroua, Cameroon.',
    aspect: 'portrait',
  },
  {
    id: 'g6',
    src: '/assets/field/student-fellowship.jpg',
    title: 'Students & Youth Ministry',
    region: 'Nigeria & Schools',
    location: 'Rivers State, Nigeria',
    program: 'Youths / Students Conferences',
    caption: 'Young students gathered in joyful fellowship during a Harvest Field youth outreach.',
    aspect: 'landscape',
  },
  {
    id: 'g7',
    src: '/assets/field/discipleship-training.jpg',
    title: 'Mission Training and Discipleship Gathering',
    region: 'Nigeria & Schools',
    location: 'Omoku, Rivers State, Nigeria',
    program: 'Harvest Field Academy (HFA)',
    caption: 'Harvest Field ministry members gather for training and mission planning in Nigeria.',
    aspect: 'landscape',
  },
  {
    id: 'g8',
    src: '/assets/field/counseling-ministry.jpg',
    title: '50th Wedding Anniversary Celebration',
    region: 'Nigeria & Schools',
    location: 'Community Gathering',
    program: 'Community Fellowship',
    caption: 'A couple celebrates 50 years of marriage at a community gathering.',
    aspect: 'portrait',
  },
  {
    id: 'g9',
    src: '/assets/field/revival-impartation.jpg',
    title: 'Prayer During a School Outreach',
    region: 'Nigeria & Schools',
    location: 'School Outreach',
    program: 'Student Prayer',
    caption: 'Students gather in prayer during a Harvest Field school outreach.',
    aspect: 'landscape',
  },
  {
    id: 'g10',
    src: '/assets/field/youth-conference.jpg',
    title: 'Youth & School Assembly',
    region: 'Nigeria & Schools',
    location: 'Omoku District, Nigeria',
    program: 'Student/Youth Outreaches',
    caption: 'Addressing assembled students on purpose, faith, and godly leadership.',
    aspect: 'landscape',
  },
  {
    id: 'g11',
    src: '/assets/field/linde-massa-village.jpg',
    title: 'Outreach Supplies for Community Distribution',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Outreach',
    program: 'Community Support',
    caption: 'Supplies are prepared for distribution during a Harvest Field community outreach.',
    aspect: 'landscape',
  },
  {
    id: 'g12',
    src: '/assets/field/foreign-mission-crusade.jpg',
    title: 'Cross-Border Community Crusade',
    region: 'Cameroon',
    location: 'Northern Cameroon',
    program: 'Community Crusade Outreaches',
    caption: 'Evening and daytime crusade mobilization uniting believers across regional borders.',
    aspect: 'landscape',
  },
  {
    id: 'g25',
    src: '/assets/field/kenya-community-gathering.jpeg',
    title: 'Community Gathering in Kenya',
    region: 'Kenya',
    location: 'Kenya',
    program: 'Community Fellowship',
    caption: 'Community members gather outdoors for a fellowship in Kenya.',
    aspect: 'landscape',
  },
  {
    id: 'g27',
    src: '/assets/field/kenya-mission-team.jpeg',
    title: 'Harvest Field Team in Kenya',
    region: 'Kenya',
    location: 'Kenya',
    program: 'Mission Visit',
    caption: 'Mission team members gather in Kenya during an outdoor visit.',
    aspect: 'portrait',
  },
  {
    id: 'g26',
    src: '/assets/field/cameroon-indoor-fellowship.jpeg',
    title: 'Indoor Fellowship in Cameroon',
    region: 'Cameroon',
    location: 'Cameroon',
    program: 'Mission Fellowship',
    caption: 'Ministry participants gather indoors during a fellowship in Cameroon.',
    aspect: 'landscape',
  },
  {
    id: 'g28',
    src: '/assets/field/cameroon-rural-community.jpeg',
    title: 'Rural Community Gathering in Cameroon',
    region: 'Cameroon',
    location: 'Cameroon',
    program: 'Rural Community Fellowship',
    caption: 'Community members gather beneath a tree during a mission visit in Cameroon.',
    aspect: 'landscape',
  },
  {
    id: 'g29',
    src: '/assets/field/cameroon-village-gathering.jpeg',
    title: 'Village Fellowship in Cameroon',
    region: 'Cameroon',
    location: 'Cameroon',
    program: 'Rural Community Fellowship',
    caption: 'Village residents and mission participants gather outdoors in Cameroon.',
    aspect: 'landscape',
  },
  {
    id: 'g13',
    src: '/assets/field/rural-teaching.jpg',
    title: 'Teaching During a School Outreach',
    region: 'Nigeria & Schools',
    location: 'School Outreach',
    program: 'School & Student Outreach',
    caption: 'A ministry leader teaches and prays with students during a school assembly.',
    aspect: 'landscape',
  },
  {
    id: 'g30',
    src: '/assets/field/worship-gathering.jpg',
    title: 'Ministry Gathering and Community Support',
    region: 'Nigeria & Schools',
    location: 'Harvest Field Outreach',
    program: 'Community Support',
    caption: 'Ministry leaders stand with supplies prepared for community distribution.',
    aspect: 'landscape',
  },
  {
    id: 'g14',
    src: '/assets/aistudio/IMG-20261115-WA0003_39450dde.jpg',
    title: 'Official Mission Flyer — Core Mandate & Contact',
    region: 'Official Flyers',
    location: 'Omoku Head Office',
    program: 'Mission Publication',
    caption: 'A Harvest Field Gospel Mission International publication outlining the ministry’s outreach focus and contact information.',
    aspect: 'portrait',
  },
  {
    id: 'g15',
    src: '/assets/aistudio/IMG-20261115-WA0005_9836fb01.jpg',
    title: 'Official Foreign Missions & Partnership Flyer',
    region: 'Official Flyers',
    location: 'Cameroon · Tchad · Côte d’Ivoire',
    program: 'Mission Mobilisation',
    caption: 'Mission mobilisation broadsheet showcasing field expeditions across Linde-Massa, Maroua, Tchad Republic, and Côte d’Ivoire.',
    aspect: 'portrait',
  },
  {
    id: 'g16',
    src: '/assets/aistudio/IMG-20261115-WA0004_fbda2947.jpg',
    title: 'Founder Ministry Information Card',
    region: 'Official Flyers',
    location: 'Omoku Head Office',
    program: 'Executive Office',
    caption: 'Ministry information card featuring founder Evang. David Abrebor and details about the ministry’s work.',
    aspect: 'portrait',
  },
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'post-1',
    slug: 'linde-massa-maroua-northern-cameroon-dispatch',
    category: 'Field Reports',
    title: 'Footsteps in Linde-Massa and Maroua: Advancing the Gospel in Northern Cameroon',
    subtitle: 'A look at the ministry’s stated mission fields in Northern Cameroon',
    author: 'Evang. David Abrebor',
    authorRole: 'Founder',
    date: 'October 2026',
    readTime: '5 min read',
    region: 'Northern Cameroon',
    featured: true,
    coverImage: '/assets/field/cameroon-village-gathering.jpeg',
    coverCaption: 'Fig. 1 — A community gathering in the Northern Cameroon mission field.',
    excerpt:
      'An introduction to the ministry’s outreach presence and field photographs from Linde-Massa and Maroua in Northern Cameroon.',
    body: [
      'Harvest Field Gospel Mission International is based in Omoku, Rivers State, Nigeria. The ministry’s field materials also identify Linde-Massa and Maroua in Northern Cameroon among its mission locations.',
      'The ministry describes its work as sharing the Gospel, encouraging believers and serving communities. Photographs in the field gallery provide a visual record of some of the ministry activities and gatherings.',
      'The ministry’s stated approach includes evangelism and equipping believers for practical soul-winning. Specific programme schedules and local outcomes are not stated here.',
      'Those interested in learning more about the ministry’s work or ways to get involved can contact the mission directly.',
    ],
    marginNote: {
      heading: 'Field Coordinates',
      detail: 'Linde-Massa and Maroua, Northern Cameroon, are among the locations identified in the ministry’s field materials.',
    },
  },
  {
    id: 'post-2',
    slug: 'intensive-school-outreaches-shaping-next-generation',
    category: 'Youth & Schools',
    title: 'Reaching Classrooms Before the World Does: Inside Our Intensive School Outreaches',
    subtitle: 'Why secondary schools and student conferences remain a cornerstone of Harvest Field’s mandate',
    author: 'Harvest Field Editorial Desk',
    authorRole: 'Youth & Campus Mobilisation',
    date: 'September 2026',
    readTime: '4 min read',
    region: 'Omoku & Rivers State',
    coverImage: '/assets/field/school-prayer-outreach.jpg',
    coverCaption: 'Fig. 2 — Students join a ministry leader in prayer during a school assembly.',
    excerpt:
      'Students today navigate intense academic, social, and spiritual pressures. Our Youth and Student Outreach teams bring biblical counsel and living faith directly onto school grounds.',
    body: [
      'Harvest Field Gospel Mission International includes school and youth outreach among its ministry activities. The ministry is based in Omoku, Rivers State, Nigeria.',
      'The ministry’s stated approach includes school outreach programmes and practical engagement with people through the Gospel. Its work also includes counselling and prayer ministry.',
      'The ministry also identifies conferences and believer equipping as part of its work. For current programme details, please contact the mission.',
    ],
    marginNote: {
      heading: 'Program Track',
      detail: 'The ministry’s stated activities include school outreach programmes, youth conferences and counselling.',
    },
  },
  {
    id: 'post-3',
    slug: 'cote-divoire-tchad-republic-francophone-harvest',
    category: 'Field Reports',
    title: 'Les Porteurs de Gloire: Partnering Across Francophone West & Central Africa',
    subtitle: 'Reflections from Tchad Republic missions and prayer-and-impartation gatherings in Côte d’Ivoire',
    author: 'Evang. David Abrebor',
    authorRole: 'Founder',
    date: 'August 2026',
    readTime: '5 min read',
    region: "Côte d'Ivoire & Tchad Republic",
    coverImage: '/assets/field/cote-divoire-conference.jpg',
    coverCaption: 'Fig. 3 — Harvest Field mission team members gather beside an aircraft before cross-border outreach.',
    excerpt:
      'Language and national lines never limit the Great Commission. A look at how Harvest Field builds prayer, teaching, and impartation bridges into Tchad Republic and Côte d’Ivoire.',
    body: [
      'Harvest Field Gospel Mission International identifies Nigeria, Cameroon, Tchad and Côte d’Ivoire in its mission materials. Its work is centred on sharing the Gospel and equipping believers.',
      'The ministry’s field photographs and publications include a Côte d’Ivoire conference titled Les Porteurs de Gloire, as well as mission and worship gatherings in Tchad. These materials reflect the ministry’s stated interest in evangelism, prayer and teaching.',
      'The ministry welcomes enquiries from churches and individuals who wish to learn more about its mission work and opportunities to participate.',
    ],
    marginNote: {
      heading: 'Regional Reach',
      detail: 'The ministry identifies Nigeria, Cameroon, Tchad and Côte d’Ivoire in its mission materials.',
    },
  },
  {
    id: 'post-4',
    slug: 'equipping-kingdom-labourers-harvest-field-academy',
    category: 'Discipleship',
    title: 'Going, Praying, or Supporting: Equipping Labourers at Harvest Field Academy',
    subtitle: 'An introduction to the ministry’s believer-equipping work',
    author: 'Harvest Field Gospel Mission International',
    authorRole: 'Ministry',
    date: 'July 2026',
    readTime: '4 min read',
    region: 'Omoku Headquarters',
    coverImage: '/assets/field/discipleship-training.jpg',
    coverCaption: 'Fig. 4 — Harvest Field ministry members gather for training and mission planning in Nigeria.',
    excerpt:
      'Learn about Harvest Field Academy and the ministry’s commitment to equipping believers for effective soul-winning.',
    body: [
      'The harvest is plentiful, yet Jesus specifically instructed His disciples to pray for labourers—workers who understand both the message of the cross and the discipline required to carry it faithfully.',
      'Harvest Field Academy is part of the ministry’s commitment to equipping believers with knowledge for effective soul-winning. The ministry also conducts conferences and discipleship activities.',
      'The ministry welcomes enquiries from people interested in learning more about its training activities and mission work.',
    ],
    marginNote: {
      heading: 'Fellowship Venue',
      detail: 'For current information about Harvest Field Academy activities and meeting arrangements, please contact the mission.',
    },
  },
  {
    id: 'post-5',
    slug: 'have-you-met-jesus-invitation-to-new-life',
    category: 'Devotional',
    title: 'Have You Met Jesus? An Open Invitation to Peace and New Beginning',
    subtitle: 'A pastoral word from our mission desk to every visitor seeking forgiveness, purpose, and grace',
    author: 'Evang. David Abrebor',
    authorRole: 'President & Founder',
    date: 'June 2026',
    readTime: '3 min read',
    region: 'Global Devotional',
    coverImage: '/assets/field/counseling-ministry.jpg',
    coverCaption: 'Fig. 5 — A couple celebrates 50 years of marriage at a community gathering.',
    excerpt:
      'Before programs, conferences, or travels, our mission begins with one personal question: Have you met Jesus? He is willing to accept you just as you are.',
    body: [
      'In the midst of daily responsibilities, quiet regrets, or unanswered questions about life’s direction, it is easy to assume that God waits for you to fix yourself before approaching Him. Yet the gospel announces the exact opposite.',
      'Jesus Christ is willing to accept you just as you are today. You do not need to wait for a special calendar date or walk through a church door alone first. Wherever you are reading these words, you can confess your sins honestly to Him, ask Him to wash your heart clean, and choose to follow Him as Lord and Saviour.',
      'If you have prayed that prayer today—or would like someone to pray with you and discuss the Scriptures—you can contact Harvest Field Gospel Mission International through the contact details on this website.',
    ],
    marginNote: {
      heading: 'Counseling Line',
      detail: 'Please contact the mission to enquire about counselling and prayer support.',
    },
  },
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'domiciliary',
    type: 'Domiciliary Account (USD / International)',
    bank: 'Zenith Bank',
    accountName: 'HARVEST FIELD GOSPEL MISSIONS OMOKU',
    accountNumber: '5076357917',
    note: 'Designated for international mission partners and foreign currency support.',
  },
  {
    id: 'zenith-ngn',
    type: 'Naira Current Account',
    bank: 'Zenith Bank',
    accountName: "Harvest Field Gospel Missions Int'l",
    accountNumber: '1229121864',
    note: 'Local mission support, outreach logistics, and Harvest Field Academy.',
  },
  {
    id: 'uba-ngn',
    type: 'Naira Current Account',
    bank: 'UBA (United Bank for Africa)',
    accountName: "Harvest Field Gospel Missions Int'l",
    accountNumber: '1026677511',
    note: 'Rural evangelism, school outreaches, and crusade mobilization.',
  },
];
