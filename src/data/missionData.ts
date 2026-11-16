export type PageId =
  | 'home'
  | 'mission'
  | 'impact'
  | 'leadership'
  | 'gallery'
  | 'journal'
  | 'partner'
  | 'contact'
  | 'join'
  | 'admin';

export const SITE_ORIGIN = 'https://harvestfieldgospelmission.netlify.app';

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
  region: 'Cameroon' | 'Tchad Republic' | "Côte d'Ivoire" | 'Nigeria & Schools' | 'Official Flyers';
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
  phones: ['+234 813 288 6893', '+234 805 179 4743', '+234 906 148 1462'],
  emails: ['davidabrebor001@gmail.com', 'davidabrebor4christ@gmail.com'],
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
  role: "President & Founder (CEO), Harvest Field Gospel Mission Int'l",
  portrait: '/assets/field/founder-portrait.jpg',
  ministryPhoto: '/assets/field/founder-speaking.jpg',
  summary:
    'Called to ignite a passion for unreached rural communities and cross-border gospel missions, Evang. David Abrebor leads Harvest Field Gospel Mission Int’l from its headquarters in Omoku, Rivers State across West and Central Africa.',
  biography: [
    'Evang. David Abrebor serves as the President and Founder of Harvest Field Gospel Mission Int’l, headquartered in Omoku, Rivers State, Nigeria. Driven by an unwavering conviction that God’s heart desire must become the believer’s heart desire, his ministry bridges local discipleship in the Niger Delta with frontier evangelism across neighbouring nations.',
    'Under his leadership, Harvest Field has grown into a disciplined fellowship of kingdom-minded believers trained specifically for rural and foreign missions. Rather than limiting ministry to comfortable city pulpits, Evang. Abrebor personally leads field teams into remote settlements—from Linde-Massa and Maroua in Northern Cameroon to outreach stations in the Republic of Tchad and francophone revival conferences such as Les Porteurs de Gloire in Côte d’Ivoire.',
    'Closer to home, his passion for the next generation shapes intensive school outreaches, student and youth conferences, labourers retreats, and structured training through the Harvest Field Academy (HFA)—ensuring every believer who feels the call to the nations is equipped in Scripture, character, and practical evangelism.',
  ],
  pillars: [
    {
      title: 'Frontier Cross-Border Missions',
      detail: 'Direct field campaigns in Northern Cameroon (Linde-Massa, Maroua), Tchad Republic, and Côte d’Ivoire.',
    },
    {
      title: 'Next-Generation Mobilisation',
      detail: 'Intensive secondary school outreaches, campus conferences, and youth discipleship cohorts.',
    },
    {
      title: 'Labourers Equipping & HFA',
      detail: 'Training missionaries and Christian workers through Harvest Field Academy and seasonal retreats.',
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
    image: '/assets/field/student-conference.jpg',
    imageAlt: 'Students raising their hands in prayer at a Harvest Field student conference',
  },
  {
    id: 'christian-counseling',
    index: '03',
    title: 'Christian Counseling & Discipleship',
    category: 'Training',
    summary: 'Walking alongside believers through biblical guidance, spiritual growth, and life challenges.',
    description:
      'True mission work does not stop at conversion. Through weekday office counseling in Omoku and structured discipleship classes, we strengthen families, new converts, and emerging workers.',
    highlights: [
      'Confidential biblical counseling (Mon–Fri, 9:00 AM – 3:00 PM)',
      'Foundational discipleship and Scripture study tracks',
      'Pastoral care for missionaries and field families',
    ],
    image: '/assets/field/counseling-ministry.jpg',
    imageAlt: 'Personal Christian counseling and prayer ministry',
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
      'Annual and seasonal Labourers Retreats',
      'Intercessory prayer networks for unreached nations',
      'Church partnership mobilization for foreign fields',
    ],
    image: '/assets/field/discipleship-training.jpg',
    imageAlt: 'Mission mobilisation and training session for believers',
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
    image: '/assets/field/revival-impartation.jpg',
    imageAlt: 'Community revival and impartation service',
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
      'Harvest Field Academy (HFA) missionary curriculum',
      'Cross-border expeditions to Cameroon, Tchad & Côte d’Ivoire',
      'Bilingual and francophone outreach collaboration',
    ],
    image: '/assets/field/tchad-republic-mission.jpg',
    imageAlt: 'Foreign mission congregation in Tchad Republic',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
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
    title: 'Linde-Massa Field Expedition',
    region: 'Cameroon',
    location: 'Linde-Massa, Northern Cameroon',
    program: 'Foreign Mission',
    caption: 'Evang. David Abrebor on the mission field in Linde-Massa, Northern Cameroon, bringing the gospel to rural settlements.',
    aspect: 'portrait',
  },
  {
    id: 'g2',
    src: '/assets/field/cote-divoire-conference.jpg',
    title: 'Les Porteurs de Gloire — Côte d’Ivoire',
    region: "Côte d'Ivoire",
    location: "Côte d'Ivoire",
    program: 'Missions & Revival Conference',
    caption: 'Francophone mission revival themed "Les Porteurs de Gloire: Prière • Enseignement • Impartation" with Evang. David Abrebor and Minister Clement.',
    aspect: 'landscape',
  },
  {
    id: 'g3',
    src: '/assets/field/tchad-republic-mission.jpg',
    title: 'Tchad Republic Praise & Worship',
    region: 'Tchad Republic',
    location: 'Tchad Republic',
    program: 'Foreign Mission',
    caption: 'Joyful congregational worship and fellowship during Harvest Field’s cross-border mission outreach in the Republic of Tchad.',
    aspect: 'wide',
  },
  {
    id: 'g4',
    src: '/assets/field/school-prayer-outreach.jpg',
    title: 'Intensive School Outreach & Prayer',
    region: 'Nigeria & Schools',
    location: 'Omoku, Rivers State, Nigeria',
    program: 'Intensive School Outreaches',
    caption: 'One-on-one prayer and spiritual encouragement for secondary school students during an intensive campus outreach.',
    aspect: 'landscape',
  },
  {
    id: 'g5',
    src: '/assets/field/maroua-cameroon.jpg',
    title: 'Maroua Mission Field',
    region: 'Cameroon',
    location: 'Maroua, Far North Cameroon',
    program: 'Rural & Foreign Missions',
    caption: 'Open-air evangelism and community fellowship in Maroua, Northern Cameroon.',
    aspect: 'landscape',
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
    title: 'Training & Discipleship Class',
    region: 'Nigeria & Schools',
    location: 'Omoku, Rivers State, Nigeria',
    program: 'Harvest Field Academy (HFA)',
    caption: 'Equipping kingdom-minded believers in Scripture and mission strategy inside a local training hall.',
    aspect: 'landscape',
  },
  {
    id: 'g8',
    src: '/assets/field/counseling-ministry.jpg',
    title: 'Personal Christian Counseling',
    region: 'Nigeria & Schools',
    location: 'Omoku Head Office & Field',
    program: 'Christian Counseling',
    caption: 'Compassionate one-on-one prayer and biblical counsel for individuals seeking restoration and peace.',
    aspect: 'landscape',
  },
  {
    id: 'g9',
    src: '/assets/field/revival-impartation.jpg',
    title: 'Revival & Healing Ministry',
    region: 'Nigeria & Schools',
    location: 'Rivers State, Nigeria',
    program: 'Revival Meetings',
    caption: 'Moments of fervent prayer and spiritual breakthrough during community revival meetings.',
    aspect: 'wide',
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
    title: 'Linde-Massa Village Gathering',
    region: 'Cameroon',
    location: 'Linde-Massa, Cameroon',
    program: 'Rural Evangelism',
    caption: 'Local families and children gathered under the open sky to hear the gospel in Linde-Massa.',
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
    id: 'g13',
    src: '/assets/field/rural-teaching.jpg',
    title: 'Preaching the Word in Rural Fields',
    region: 'Tchad Republic',
    location: 'Cross-Border Station',
    program: 'Missions / Evangelistic Conferences',
    caption: 'Teaching the Scriptures clearly to new congregations established through rural outreach.',
    aspect: 'landscape',
  },
  {
    id: 'g14',
    src: '/assets/aistudio/IMG-20261115-WA0003_39450dde.jpg',
    title: 'Official Mission Flyer — Core Mandate & Contact',
    region: 'Official Flyers',
    location: 'Omoku Head Office',
    program: 'Mission Publication',
    caption: 'Official Harvest Field Gospel Mission Int’l print bulletin detailing core outreach areas, office hours, salvation call, and Zenith domiciliary account.',
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
    title: 'President & Founder Official Ministry Card',
    region: 'Official Flyers',
    location: 'Omoku Head Office',
    program: 'Executive Office',
    caption: 'Official directory card for Evang. David Abrebor (President/Founder), listing ministry tracks, Harvest Field Academy, and partnership channels.',
    aspect: 'portrait',
  },
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'post-1',
    slug: 'linde-massa-maroua-northern-cameroon-dispatch',
    category: 'Field Reports',
    title: 'Footsteps in Linde-Massa and Maroua: Advancing the Gospel in Northern Cameroon',
    subtitle: 'How kingdom-minded believers from Omoku carried hope across borders into rural settlements',
    author: 'Evang. David Abrebor',
    authorRole: 'President & Founder',
    date: 'October 2026',
    readTime: '5 min read',
    region: 'Northern Cameroon',
    featured: true,
    coverImage: '/assets/field/founder-linde-massa.jpg',
    coverCaption: 'Fig. 1 — Evang. David Abrebor during rural missionary outreach in Linde-Massa, Northern Cameroon.',
    excerpt:
      'When God places a burden for unreached rural settlements upon your heart, geography stops being a barrier. A firsthand dispatch from our ongoing field work in Linde-Massa and Maroua.',
    body: [
      'Every foreign expedition begins long before a suitcase is packed or a border is crossed. It begins in the quiet place of prayer when God’s longing becomes your longing, and His will becomes your will. Over successive seasons of ministry, Harvest Field Gospel Mission Int’l has stepped out from our base in Omoku, Rivers State into the rural communities of Northern Cameroon, including Linde-Massa and Maroua.',
      'In villages where mud-brick homes and thatched roofs line dusty footpaths, the hunger for authentic gospel hope is unmistakable. Families gather eagerly—not for spectacle, but to hear the timeless truth that Christ receives every person just as they are. Through open-air crusades, household visits, and patient personal prayer, many heard the message of salvation with clarity for the very first time.',
      'Our approach in Northern Cameroon has always prioritized lasting spiritual fruit over fleeting visits. Alongside evangelistic outreach, we invest in strengthening local believers and encouraging emerging workers so that each community continues growing in the Scriptures long after the team travels onward.',
      'Whether you feel called to go into rural fields yourself, to uphold our cross-border teams in daily intercession, or to send regular financial support, you share directly in every soul reached across Linde-Massa and Maroua.',
    ],
    marginNote: {
      heading: 'Field Coordinates',
      detail: 'Linde-Massa & Maroua sit in Cameroon’s Far North region—focal points of Harvest Field’s rural foreign mission corridor alongside Tchad Republic.',
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
    coverCaption: 'Fig. 2 — Personal prayer and mentorship with students during an intensive school outreach in Rivers State.',
    excerpt:
      'Students today navigate intense academic, social, and spiritual pressures. Our Youth and Student Outreach teams bring biblical counsel and living faith directly onto school grounds.',
    body: [
      'Across Omoku and surrounding communities in Rivers State, secondary schools and student fellowships represent one of the most decisive harvest fields of our generation. Young people are forming the convictions, friendships, and habits that will steer their adult lives.',
      'During our Intensive School Outreaches, Harvest Field teams engage students through assemblies, interactive mentoring, and dedicated Christian counseling. Rather than speaking down to young people, our evangelists listen closely—praying with individual students facing family hardship, academic anxiety, or spiritual confusion.',
      'Beyond single-day school visits, our Youths and Students Conferences create a sustained fellowship environment where teenagers and university students discover how to walk with Christ boldly among their peers and step into discipleship through Harvest Field Academy.',
    ],
    marginNote: {
      heading: 'Program Track',
      detail: 'Includes Intensive School Outreaches, Youths/Students Conferences, and weekly Christian Counseling.',
    },
  },
  {
    id: 'post-3',
    slug: 'cote-divoire-tchad-republic-francophone-harvest',
    category: 'Field Reports',
    title: 'Les Porteurs de Gloire: Partnering Across Francophone West & Central Africa',
    subtitle: 'Reflections from Tchad Republic missions and prayer-and-impartation gatherings in Côte d’Ivoire',
    author: 'Evang. David Abrebor',
    authorRole: 'President & Founder',
    date: 'August 2026',
    readTime: '5 min read',
    region: "Côte d'Ivoire & Tchad Republic",
    coverImage: '/assets/field/cote-divoire-conference.jpg',
    coverCaption: 'Fig. 3 — Conference invitation for "Les Porteurs de Gloire" (Prayer, Teaching, and Impartation) in Côte d’Ivoire.',
    excerpt:
      'Language and national lines never limit the Great Commission. A look at how Harvest Field builds prayer, teaching, and impartation bridges into Tchad Republic and Côte d’Ivoire.',
    body: [
      'From Anglophone Nigeria into Francophone Côte d’Ivoire and the Republic of Tchad, the call to take the nations for Christ requires humility, cultural sensitivity, and genuine partnership with local servants of God.',
      'During the Les Porteurs de Gloire gatherings in Côte d’Ivoire—centered on Prière, Enseignement, and Impartation—ministers and believers gathered to seek fresh renewal for mission work. In Tchad Republic, vibrant congregations lifted praises and opened their doors to teaching and revival ministry.',
      'These cross-border friendships remind us that Harvest Field Gospel Mission Int’l is part of a vast, interconnected body of believers committed to seeing God’s kingdom advance across every tongue and nation.',
    ],
    marginNote: {
      heading: 'Regional Reach',
      detail: 'Active ministry partnerships spanning Nigeria, Northern Cameroon, Tchad Republic, and Côte d’Ivoire.',
    },
  },
  {
    id: 'post-4',
    slug: 'equipping-kingdom-labourers-harvest-field-academy',
    category: 'Discipleship',
    title: 'Going, Praying, or Supporting: Equipping Labourers at Harvest Field Academy',
    subtitle: 'How Training, Discipleship, and Labourers Retreats prepare believers for lasting ministry impact',
    author: 'Harvest Field Academy Faculty',
    authorRole: 'Training & Discipleship',
    date: 'July 2026',
    readTime: '4 min read',
    region: 'Omoku Headquarters',
    coverImage: '/assets/field/discipleship-training.jpg',
    coverCaption: 'Fig. 4 — Classroom discipleship and missionary training at Harvest Field Gospel Mission Int’l.',
    excerpt:
      'Passion without preparation burns out quickly. Inside Harvest Field Academy (HFA) and our Labourers Retreats in Omoku.',
    body: [
      'The harvest is plentiful, yet Jesus specifically instructed His disciples to pray for labourers—workers who understand both the message of the cross and the discipline required to carry it faithfully.',
      'Through Harvest Field Academy (HFA), Training and Discipleship classes, and seasonal Labourers Retreats held in Omoku, believers are grounded in Scripture, prayer endurance, Christian counseling principles, and cross-cultural outreach readiness.',
      'Not everyone boards a bus to Cameroon or Tchad on the same day, yet every kingdom-minded believer has a vital assignment: Going as a missionary, Praying faithfully on the intercessory watch, or Sending regular support so the work never stalls.',
    ],
    marginNote: {
      heading: 'Fellowship Venue',
      detail: 'All Power Liberation Church Hall, behind Osere Dengo Petrol Station, Ikiri Road, Omoku.',
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
    coverCaption: 'Fig. 5 — Personal prayer and pastoral care for those responding to the call of Christ.',
    excerpt:
      'Before programs, conferences, or travels, our mission begins with one personal question: Have you met Jesus? He is willing to accept you just as you are.',
    body: [
      'In the midst of daily responsibilities, quiet regrets, or unanswered questions about life’s direction, it is easy to assume that God waits for you to fix yourself before approaching Him. Yet the gospel announces the exact opposite.',
      'Jesus Christ is willing to accept you just as you are today. You do not need to wait for a special calendar date or walk through a church door alone first. Wherever you are reading these words, you can confess your sins honestly to Him, ask Him to wash your heart clean, and choose to follow Him as Lord and Saviour.',
      'If you have prayed that prayer today—or if you would like someone to pray with you and counsel you from the Scriptures—our team at Harvest Field Gospel Mission Int’l is ready to walk beside you. Call our office lines or visit us in Omoku Monday through Friday.',
    ],
    marginNote: {
      heading: 'Counseling Line',
      detail: 'Weekdays, 9:00 AM – 3:00 PM · Contact the mission office for details.',
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
