import React, { createContext, useContext, useEffect, useState } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export type Language = 'en' | 'fr' | 'es';

const translations: Record<Exclude<Language, 'en'>, Record<string, string>> = {
  fr: {
    Home: 'Accueil',
    'About Us': 'À propos',
    Leadership: 'Direction',
    Gallery: 'Galerie',
    Blog: 'Blog',
    Contact: 'Contact',
    'Donate & Partner': 'Faire un don et soutenir',
    'Primary navigation': 'Navigation principale',
    'Mobile navigation': 'Navigation mobile',
    'Open navigation menu': 'Ouvrir le menu de navigation',
    'Close navigation menu': 'Fermer le menu de navigation',
    'Select language': 'Choisir la langue',
    'Gospel Mission Int’l': 'Mission évangélique internationale',
    'A Gospel Mission to the Nations': 'Une mission évangélique pour les nations',
    'Taking the Gospel to the nations. Bringing hope to every generation.':
      'Porter l’Évangile aux nations. Apporter l’espérance à chaque génération.',
    'From rural communities to cross-border mission fields, Harvest Field Gospel Mission Int’l equips believers to share Christ, serve people and strengthen local communities.':
      'Des communautés rurales aux champs missionnaires transfrontaliers, Harvest Field Gospel Mission International équipe les croyants pour annoncer Christ, servir les populations et fortifier les communautés locales.',
    Explore: 'Découvrir',
    'Discover Our Mission': 'Découvrir notre mission',
    Partner: 'Soutenir',
    'Pray, Give & Partner': 'Prier, donner et soutenir',
    'Rural & Foreign Missions': 'Missions rurales et internationales',
    'Our work, from Omoku to the mission fields.':
      'Notre œuvre, d’Omoku jusqu’aux champs missionnaires.',
    'What We Do': 'Nos activités',
    'Expressions of one Great Commission mandate.':
      'Les différentes facettes d’un même mandat : la Grande Mission.',
    'Filter mission programs': 'Filtrer les programmes missionnaires',
    'Meet the Founder': 'Rencontrer le fondateur',
    'Active Mission Field Dispatches': 'Missions actuellement sur le terrain',
    'Explore Our Mission': 'Découvrir notre mission',
    'Support This Ministry Track': 'Soutenir ce ministère',
    'Show Less': 'Afficher moins',
    'Read Program Details': 'Lire les détails du programme',
    'Reaching the lost. Equipping believers. Serving communities.':
      'Atteindre les personnes perdues. Équiper les croyants. Servir les communautés.',
    'Our Gospel Outreach': 'Notre évangélisation',
    'Practical ways we serve': 'Nos actions concrètes',
    'Beyond Evangelism': 'Au-delà de l’évangélisation',
    'Community objectives': 'Nos objectifs communautaires',
    'Our Home & Registration': 'Notre siège et notre statut',
    'Rooted in Omoku, Rivers State': 'Ancrés à Omoku, dans l’État de Rivers',
    'Contact the Mission': 'Contacter la mission',
    'Three Ways to Participate': 'Trois façons de participer',
    'Fulfill your mission mandate for the nations.':
      'Accomplissez votre mission auprès des nations.',
    'Step Into Rural & Foreign Fields': 'Partir en mission dans les zones rurales et à l’étranger',
    'Uphold the Nations in Intercession': 'Porter les nations dans la prière',
    'Send Regular Kingdom Support': 'Apporter un soutien régulier au Royaume',
    'Connect With Our Team': 'Contacter notre équipe',
    'Taking the Nations for Christ Via': 'Gagner les nations à Christ par',
    'Ministry tracks & Harvest Field Academy (HFA)':
      'Nos ministères et la Harvest Field Academy (HFA)',
    'Sponsor This Track': 'Soutenir ce ministère',
    'Archival Publications': 'Publications d’archives',
    'Original Mission Flyers': 'Documents officiels de la mission',
    'Inspect or reference our official printed flyers in full detail. Click any flyer to enlarge.':
      'Consultez nos documents imprimés officiels en détail. Cliquez sur un document pour l’agrandir.',
    'Inspect Full Flyer': 'Voir le document en entier',
    'Close flyer preview': 'Fermer l’aperçu',
    'Mission Galleries': 'Galeries de la mission',
    'The Work, Through Our Eyes': 'Notre œuvre, vue de l’intérieur',
    'Authentic field documentation from school outreaches, rural crusades, discipleship classes, and foreign missions across Cameroon, Tchad Republic, and Côte d’Ivoire.':
      'Des témoignages authentiques de nos actions dans les écoles, campagnes rurales, formations de disciples et missions au Cameroun, au Tchad et en Côte d’Ivoire.',
    'Filter gallery by mission field': 'Filtrer la galerie par champ missionnaire',
    All: 'Tout',
    Cameroon: 'Cameroun',
    'Tchad Republic': 'République du Tchad',
    'Nigeria & Schools': 'Nigeria et écoles',
    'Official Flyers': 'Documents officiels',
    'Close lightbox': 'Fermer l’image',
    'Previous photograph': 'Photo précédente',
    'Next photograph': 'Photo suivante',
    "We're here to connect.": 'Nous sommes à votre écoute.',
    'Contact Harvest Field Gospel Mission for prayer, counselling, outreach invitations, or questions about the mission. We look forward to hearing from you.':
      'Contactez Harvest Field Gospel Mission pour une prière, un conseil, une invitation à intervenir ou toute question sur la mission. Nous serons heureux de vous répondre.',
    'Counseling & Enquiries': 'Conseil et renseignements',
    'Reach the mission team': 'Contacter l’équipe missionnaire',
    'Visit Us': 'Nous rendre visite',
    'Rooted in Omoku': 'Ancrés à Omoku',
    'Head Office': 'Siège principal',
    'Fellowship Venue': 'Lieu de réunion',
    'Office Hours': 'Heures d’ouverture',
    'Nations Reached': 'Pays concernés',
    'Find us on Facebook': 'Retrouvez-nous sur Facebook',
    'Your email draft is ready': 'Votre courriel est prêt',
    'Please send the draft from your email app to complete your message. If it did not open, contact our office directly using the details on this page.':
      'Veuillez envoyer le courriel depuis votre messagerie pour terminer votre demande. S’il ne s’est pas ouvert, contactez directement notre bureau avec les coordonnées indiquées sur cette page.',
    'Send another message': 'Envoyer un autre message',
    'Send a Message': 'Envoyer un message',
    'How can we help?': 'Comment pouvons-nous vous aider ?',
    "Complete the form and we'll prepare a message to the mission office.":
      'Remplissez le formulaire et nous préparerons un message à l’attention de la mission.',
    'Your name': 'Votre nom',
    'Full name': 'Nom complet',
    'Phone or email': 'Téléphone ou courriel',
    'How can we reply?': 'Comment pouvons-nous vous répondre ?',
    'What is your message about?': 'Quel est l’objet de votre message ?',
    Message: 'Message',
    'Tell us how we can help...': 'Dites-nous comment nous pouvons vous aider…',
    'Prepare Email': 'Préparer le courriel',
    'Your email app must be set up to send the message. You can also call the office directly.':
      'Votre messagerie doit être configurée pour envoyer le message. Vous pouvez également appeler directement le bureau.',
    'General enquiry': 'Demande générale',
    'Prayer and counselling': 'Prière et accompagnement',
    'Mission or outreach invitation': 'Invitation à une mission ou une action',
    'Partnership and giving': 'Partenariat et don',
    'Join Us': 'Rejoignez-nous',
    'Serve with Harvest Field': 'Servir avec Harvest Field',
    'Tell us a little about yourself, where you are based, and what inspires you to serve with the mission.':
      'Parlez-nous un peu de vous, de votre lieu de résidence et de ce qui vous inspire à servir la mission.',
    'Full name *': 'Nom complet *',
    'Your full name': 'Votre nom complet',
    'Phone / WhatsApp *': 'Téléphone / WhatsApp *',
    'Email (optional)': 'Courriel (facultatif)',
    'you@example.com': 'vous@exemple.com',
    'State *': 'État *',
    'e.g., Rivers State': 'par ex. État de Rivers',
    'Local Government Area *': 'Zone de gouvernement local *',
    'e.g., ONELGA': 'par ex. ONELGA',
    'Area of interest *': 'Domaine d’intérêt *',
    'Choose an area': 'Choisir un domaine',
    'Evangelism & Outreach': 'Évangélisation et actions de terrain',
    'Youth & Student Ministry': 'Ministère auprès des jeunes et étudiants',
    'Prayer & Discipleship': 'Prière et formation de disciples',
    'Foreign Missions': 'Missions à l’étranger',
    Other: 'Autre',
    'What inspires you to join the mission? *': 'Qu’est-ce qui vous inspire à rejoindre la mission ? *',
    'Share what inspires you and how you hope to serve...':
      'Expliquez ce qui vous inspire et comment vous souhaitez servir…',
    'Please complete all required fields before continuing.':
      'Veuillez remplir tous les champs obligatoires avant de continuer.',
    'Review and send it from your email app to complete your request. The mission will receive your details only after you send the email.':
      'Vérifiez et envoyez le courriel depuis votre messagerie pour terminer votre demande. La mission ne recevra vos coordonnées qu’après l’envoi.',
    'Edit my details': 'Modifier mes informations',
    'This form opens an email draft to the mission office. Your request is sent only when you send that email.':
      'Ce formulaire ouvre un brouillon de courriel destiné au bureau de la mission. Votre demande sera envoyée uniquement lorsque vous transmettrez ce courriel.',
    'Open Email Draft': 'Ouvrir le brouillon de courriel',
    'Stories from the Mission Field': 'Témoignages du terrain missionnaire',
    'Harvest Field Blog': 'Blog Harvest Field',
    'Field reports from Northern Cameroon, Tchad Republic, and Côte d’Ivoire alongside youth outreach stories, discipleship notes, and devotional calls.':
      'Des récits du nord du Cameroun, du Tchad et de la Côte d’Ivoire, ainsi que des témoignages auprès des jeunes, des réflexions sur la formation de disciples et des méditations.',
    'Search articles or fields...': 'Rechercher des articles ou des missions…',
    'Search blog articles': 'Rechercher dans les articles',
    'Field Reports': 'Témoignages de terrain',
    Discipleship: 'Formation de disciples',
    Devotional: 'Méditation',
    Saved: 'Enregistrés',
    'No matching dispatches found': 'Aucun article correspondant',
    Share: 'Partager',
    'Share Article': 'Partager l’article',
    'Article shared.': 'Article partagé.',
    'Article link copied to clipboard.': 'Lien de l’article copié.',
    'Unable to share the article. Copy its URL from the address bar.':
      'Impossible de partager l’article. Copiez son adresse depuis la barre d’adresse.',
    'You have not saved any dispatches yet. Open any article to bookmark it for later reading.':
      'Vous n’avez pas encore enregistré d’article. Ouvrez un article pour le garder en favori.',
    'Try clearing your search filter or switching to All Articles.':
      'Essayez d’effacer votre recherche ou de choisir Tous les articles.',
    'Reset Filters': 'Réinitialiser les filtres',
    'Read Full Dispatch': 'Lire le témoignage complet',
    'Open Dispatch': 'Ouvrir le témoignage',
    'Read Article': 'Lire l’article',
    'Bookmark article': 'Enregistrer l’article',
    'Back to Harvest Field Blog': 'Retour au blog Harvest Field',
    'Saved to Reading List': 'Enregistré dans la liste de lecture',
    'Save Dispatch': 'Enregistrer l’article',
    'Related Articles': 'Articles associés',
    By: 'Par',
    'Interactive Giving Desk': 'Espace de dons',
    'Prepare Your Mission Gift': 'Préparer votre don pour la mission',
    'One-Time Gift': 'Don ponctuel',
    'Monthly Support': 'Soutien mensuel',
    'This page prepares bank-transfer details but does not process payments. Monthly support is arranged through repeat transfers; no automatic payment is scheduled.':
      'Cette page prépare les informations de virement, mais ne traite pas les paiements. Le soutien mensuel se fait par virements répétés ; aucun paiement automatique n’est programmé.',
    'Select or Enter Amount (': 'Choisir ou saisir un montant (',
    'Mission Invitations': 'Invitations missionnaires',
    'Leadership · Harvest Field Gospel Mission': 'Direction · Harvest Field Gospel Mission',
    'Leadership Team · Sample Profiles': 'Équipe de direction · Profils de démonstration',
    'Meet the Mission Leaders': 'Rencontrez les responsables de la mission',
    'These are clearly marked placeholders. Replace them with verified names, roles, and photographs before presenting them as ministry leaders.':
      'Ces éléments sont clairement indiqués comme exemples. Remplacez-les par des noms, fonctions et photos vérifiés avant de les présenter comme responsables du ministère.',
    'Sample profile': 'Profil de démonstration',
    'Sample Leader 1': 'Responsable exemple 1',
    'Sample Leader 2': 'Responsable exemple 2',
    'Sample Leader 3': 'Responsable exemple 3',
    'Sample Leader 4': 'Responsable exemple 4',
    'Sample Leadership Role 1': 'Fonction de direction exemple 1',
    'Sample Leadership Role 2': 'Fonction de direction exemple 2',
    'Sample Leadership Role 3': 'Fonction de direction exemple 3',
    'Sample Leadership Role 4': 'Fonction de direction exemple 4',
    'Demo links only. Replace these with the ministry’s official social accounts.':
      'Liens de démonstration uniquement. Remplacez-les par les comptes officiels du ministère.',
    'Founder & President': 'Fondateur et président',
    'Support Our Foreign Missions': 'Soutenir nos missions à l’étranger',
    'See Field Photographs': 'Voir les photos de mission',
    'A Life Poured Out for Rural & Foreign Harvests':
      'Une vie consacrée aux missions rurales et internationales',
    'Teaching & Evangelism': 'Enseignement et évangélisation',
    'Sharing the Gospel through preaching': 'Annoncer l’Évangile par la prédication',
    Invite: 'Inviter',
    'View Our Ministry Tracks →': 'Découvrir nos ministères →',
    'Invitation Email Prepared': 'Courriel d’invitation préparé',
    'Contact the Mission Office': 'Contacter le bureau de la mission',
    'Submit Another Invitation': 'Envoyer une autre invitation',
    'Ministry Invitations': 'Invitations au ministère',
    'Back to top': 'Retour en haut',
    'Explore Mission': 'Découvrir la mission',
    'Home & What We Do': 'Accueil et nos activités',
    'President & Founder': 'Président et fondateur',
    'Field Galleries': 'Galeries de mission',
    'Blog & Articles': 'Blog et articles',
    'Contact Us': 'Nous contacter',
    'Partner, Give & Pray': 'Soutenir, donner et prier',
    'Office details, hours, and enquiry lines are available on our Contact page.':
      'Les coordonnées, horaires et lignes de renseignement figurent sur notre page Contact.',
    'Follow the Mission': 'Suivre la mission',
    'Official social links are not connected yet. Please use the contact details on this page to reach us.':
      'Les liens officiels des réseaux sociaux ne sont pas encore disponibles. Veuillez utiliser les coordonnées de cette page pour nous contacter.',
    'Staff sign in': 'Connexion du personnel',
    'President / Founder: Evang. David Abrebor': 'Président / fondateur : Évang. David Abrebor',
    'Choose hero image': 'Choisir une image de couverture',
    'Pause slideshow': 'Mettre le diaporama en pause',
    'Resume slideshow': 'Reprendre le diaporama',
    'Visual Witness': 'Témoignages en images',
    'Pictures from the field.': 'Images du terrain.',
    'View Photo': 'Voir la photo',
    'From the Blog': 'Dans le blog',
    'Stories, testimonies & teaching from the mission field.':
      'Récits, témoignages et enseignements du terrain missionnaire.',
    'Explore All Articles': 'Voir tous les articles',
    'Open Article': 'Ouvrir l’article',
    'An Open Invitation': 'Une invitation à tous',
    'Have you met Jesus?': 'Avez-vous rencontré Jésus ?',
    'Need someone to pray with you right now?':
      'Souhaitez-vous que quelqu’un prie avec vous maintenant ?',
    'Call our counseling desk Monday–Friday (9:00 AM – 3:00 PM) or send your prayer request directly using this form.':
      'Appelez notre service d’accompagnement du lundi au vendredi (9 h–15 h) ou envoyez votre demande de prière avec ce formulaire.',
    'Your email request is ready.': 'Votre courriel est prêt.',
    'Your email application should open with your request addressed to Harvest Field Gospel Mission Int’l. Please send that email to complete your request. If it does not open, contact our office directly.':
      'Votre messagerie devrait s’ouvrir avec votre demande adressée à Harvest Field Gospel Mission International. Envoyez ce courriel pour terminer votre demande. Si elle ne s’ouvre pas, contactez directement notre bureau.',
    'Send Another Request': 'Envoyer une autre demande',
    'Salvation Decision': 'Décision de suivre Jésus',
    'Prayer Request': 'Demande de prière',
    'Mission Inquiry': 'Renseignement sur la mission',
    'We would be honoured to walk with you as you begin following Jesus.':
      'Nous serions honorés de vous accompagner dans vos premiers pas avec Jésus.',
    'Share what is on your heart. Our team will be glad to pray with you.':
      'Confiez-nous ce qui vous tient à cœur. Notre équipe priera volontiers avec vous.',
    'Tell us how you would like to connect with the mission.':
      'Dites-nous comment vous souhaitez participer à la mission.',
    'Enter your name': 'Saisissez votre nom',
    'Phone or Email (Optional)': 'Téléphone ou courriel (facultatif)',
    'How would you like to get involved?': 'Comment souhaitez-vous participer ?',
    'Your Note or Prayer': 'Votre message ou votre prière',
    'Your Prayer Request': 'Votre demande de prière',
    Submit: 'Envoyer',
    'Support the Harvest': 'Soutenir la mission',
    'Official Mission Banking Channels': 'Coordonnées bancaires officielles',
    'Open Giving & Pledge Desk': 'Ouvrir l’espace de don et d’engagement',
    'Harvest Field Gospel Mission photographs': 'Photos de Harvest Field Gospel Mission',
    'Donate, Partner & Connect': 'Donner, soutenir et nous contacter',
    'Stand with the harvest through going, prayer, or regular support.':
      'Soutenez la mission en partant, en priant ou en apportant une aide régulière.',
    'Your prayers, service and financial support help strengthen rural and foreign missions across Omoku, Northern Cameroon, Tchad Republic, Côte d’Ivoire, and Harvest Field Academy.':
      'Vos prières, votre service et votre soutien financier renforcent les missions à Omoku, dans le nord du Cameroun, au Tchad, en Côte d’Ivoire et à la Harvest Field Academy.',
    'NGN (₦)': 'NGN (₦)',
    'USD ($) Domiciliary': 'USD ($) compte en devises',
    'Transfer Summary': 'Récapitulatif du virement',
    Copied: 'Copié',
    'Copy Number': 'Copier le numéro',
    'Transfer Reference Prepared — Not a Payment Receipt':
      'Référence de virement préparée — ceci n’est pas un reçu',
    'This reference is for your own transfer note only. It does not confirm that a payment was made or received. After making a transfer, notify the mission office using the details on our Contact page.':
      'Cette référence sert uniquement à noter votre virement. Elle ne confirme pas qu’un paiement a été effectué ou reçu. Après le virement, informez le bureau de la mission avec les coordonnées de notre page Contact.',
    'Contact the mission office': 'Contacter le bureau de la mission',
    'Your Name (optional)': 'Votre nom (facultatif)',
    'Donor Name': 'Nom du donateur',
    'Phone or Email for receipt note (optional)': 'Téléphone ou courriel (facultatif)',
    'Donor Phone or Email': 'Téléphone ou courriel du donateur',
    'Prepare Bank Transfer Reference': 'Préparer la référence du virement',
    'All Official Mission Bank Accounts': 'Tous les comptes bancaires officiels',
    'Tap “Copy” on any account number to copy directly to your clipboard.':
      'Appuyez sur « Copier » à côté d’un numéro de compte pour le copier.',
    'Mission Team, Counseling & Prayer Desk': 'Équipe missionnaire, accompagnement et prière',
    'Your email draft is ready to send to the mission office. Please press Send in your email app to complete your request. For immediate follow-up, use the contact details on our Contact page.':
      'Votre courriel destiné au bureau de la mission est prêt. Appuyez sur Envoyer dans votre messagerie pour terminer votre demande. Pour une réponse rapide, utilisez les coordonnées de notre page Contact.',
    'Submit Another Note': 'Envoyer un autre message',
    'Phone or Email': 'Téléphone ou courriel',
    'City / Country (Optional)': 'Ville / pays (facultatif)',
    'Message, Support Pledge, or Prayer Need': 'Message, engagement de soutien ou demande de prière',
    'Send Partnership & Prayer Note': 'Envoyer un message de partenariat ou de prière',
    'This Browser’s Recent Giving & Partnership Log': 'Historique récent des dons et partenariats sur ce navigateur',
    'Clear Log': 'Effacer l’historique',
    'Need help with your gift?': 'Besoin d’aide pour votre don ?',
    'For transfer questions, prayer requests, or counselling, contact the mission office through our Contact page.':
      'Pour toute question sur un virement, une demande de prière ou un accompagnement, contactez le bureau de la mission depuis notre page Contact.',
    'View Contact Details': 'Voir les coordonnées',
    'Program Details': 'Détails du programme',
    'Send Ministry Invitation': 'Envoyer une invitation au ministère',
    'Church, School, or Organization': 'Église, école ou organisme',
    'Coordinator Phone or Email': 'Téléphone ou courriel du coordinateur',
    'Program Type': 'Type de programme',
    'Proposed City / Country & Dates': 'Ville / pays et dates proposés',
    'Share theme, expected audience, or special ministry focus...':
      'Indiquez le thème, le public attendu ou l’objectif particulier du ministère…',
    'Churches, secondary schools, campus fellowships, and mission agencies can submit invitations for crusades, youth conferences, labourers retreats, or revival meetings.':
      'Les églises, écoles secondaires, groupes universitaires et organismes missionnaires peuvent inviter notre équipe à des campagnes, conférences de jeunes, retraites de missionnaires ou réunions de réveil.',
    'Harvest Field Gospel Mission International, Omoku, is a Christian interdenominational ministry committed to fulfilling the Great Commission by reaching the lost with the gospel of salvation through the Lord Jesus Christ.':
      'Harvest Field Gospel Mission International, à Omoku, est un ministère chrétien interconfessionnel engagé à accomplir la Grande Mission en annonçant aux personnes perdues l’Évangile du salut par le Seigneur Jésus-Christ.',
    'We also equip believers with knowledge and practical skills for effective soul-winning. Our goal is to awaken believers to their role in standing for the Gospel in their workplaces, neighbourhoods, and communities, and to help them practically engage people with the Gospel so that more may come to Christ.':
      'Nous formons également les croyants et leur transmettons des compétences pratiques pour annoncer efficacement l’Évangile. Nous voulons les encourager à témoigner dans leur travail, leur quartier et leur communauté, afin que davantage de personnes découvrent Christ.',
    'Practical one-on-one evangelism': 'Évangélisation individuelle et concrète',
    'School outreach programmes': 'Actions d’évangélisation dans les écoles',
    Conferences: 'Conférences',
    'Community evangelism': 'Évangélisation communautaire',
    'Church evangelism awareness programmes': 'Sensibilisation à l’évangélisation dans les églises',
    Counselling: 'Accompagnement',
    'Prayer and deliverance ministry': 'Prière et ministère de délivrance',
    'Educational development and rehabilitation of young people in rural communities.':
      'Soutenir l’éducation et la réinsertion des jeunes dans les communautés rurales.',
    'Girl-child education advocacy.': 'Défendre l’accès des filles à l’éducation.',
    'Poverty eradication in rural communities.': 'Lutter contre la pauvreté dans les communautés rurales.',
    'Agricultural and vocational skills development for young people.':
      'Développer les compétences agricoles et professionnelles des jeunes.',
    'Headquartered in Omoku, Rivers State, Nigeria, Harvest Field Gospel Mission International is registered with the Corporate Affairs Commission of Nigeria.':
      'Basée à Omoku, dans l’État de Rivers au Nigeria, Harvest Field Gospel Mission International est enregistrée auprès de la Commission des affaires des sociétés du Nigeria.',
    '01. Going': '01. Partir en mission',
    '02. Praying': '02. Prier',
    '03. Regular Support': '03. Soutenir régulièrement',
    'Account Name': 'Nom du titulaire',
    'Account Number': 'Numéro de compte',
    Recommended: 'Recommandé',
    Copy: 'Copier',
    'A fellowship of kingdom-minded believers equipped for rural and foreign missions across Nigeria, Northern Cameroon, Tchad Republic, and Côte d’Ivoire.':
      'Une communauté de croyants engagés pour le Royaume, formés aux missions rurales et internationales au Nigeria, dans le nord du Cameroun, au Tchad et en Côte d’Ivoire.',
    'Linde-Massa, Northern Cameroon': 'Linde-Massa, nord du Cameroun',
    'Tchad Republic Missions': 'Missions en République du Tchad',
    "Les Porteurs de Gloire · Côte d'Ivoire": "Les Porteurs de Gloire · Côte d'Ivoire",
    'Omoku & Rivers State, Nigeria': 'Omoku et État de Rivers, Nigeria',
    'Evang. David Abrebor during rural foreign mission outreach.':
      'Évang. David Abrebor lors d’une mission rurale à l’étranger.',
    'Cross-border congregational praise and gospel impartation.':
      'Louange communautaire et partage de l’Évangile au-delà des frontières.',
    'Prayer, teaching, and mission impartation conferences.':
      'Conférences de prière, d’enseignement et de mobilisation missionnaire.',
    'Intensive school outreaches and personal prayer with students.':
      'Actions intensives dans les écoles et prière individuelle avec les élèves.',
    'Rural & Urban Evangelism Outreach': 'Évangélisation en milieu rural et urbain',
    'Intensive School & Youth Outreaches': 'Actions intensives dans les écoles et auprès des jeunes',
    'Christian Counseling & Discipleship': 'Accompagnement chrétien et formation de disciples',
    'Mission Mobilisation & Labourers Retreat': 'Mobilisation missionnaire et retraite des ouvriers',
    'Community Crusades & Revival Meetings': 'Campagnes communautaires et réunions de réveil',
    'Harvest Field Academy (HFA) & Foreign Missions': 'Harvest Field Academy (HFA) et missions à l’étranger',
    Evangelism: 'Évangélisation',
    Training: 'Formation',
    'Global Missions': 'Missions internationales',
    'Youth & Schools': 'Jeunesse et écoles',
    'Frontier Cross-Border Missions': 'Missions transfrontalières pionnières',
    'Next-Generation Mobilisation': 'Mobilisation de la nouvelle génération',
    'Labourers Equipping & HFA': 'Formation des ouvriers et HFA',
    'Linde-Massa Field Expedition': 'Mission de terrain à Linde-Massa',
    'Les Porteurs de Gloire — Côte d’Ivoire': 'Les Porteurs de Gloire — Côte d’Ivoire',
    'Tchad Republic Praise & Worship': 'Louange et adoration en République du Tchad',
    'Intensive School Outreach & Prayer': 'Action intensive et prière dans une école',
    'Maroua Mission Field': 'Champ missionnaire de Maroua',
    'Student & Youth Outreach': 'Actions auprès des étudiants et des jeunes',
    'Foreign Mission': 'Mission à l’étranger',
    'Missions & Revival Conference': 'Conférence missionnaire et de réveil',
    'Intensive School Outreaches': 'Actions intensives dans les écoles',
    'Harvest Field Student Conference': 'Conférence étudiante Harvest Field',
    'Footsteps in Linde-Massa and Maroua: Advancing the Gospel in Northern Cameroon':
      'Sur les traces de Linde-Massa et Maroua : annoncer l’Évangile dans le nord du Cameroun',
    'Reaching Classrooms Before the World Does: Inside Our Intensive School Outreaches':
      'Toucher les élèves avant le monde : au cœur de nos actions dans les écoles',
    'Les Porteurs de Gloire: Partnering Across Francophone West & Central Africa':
      'Les Porteurs de Gloire : partenaires en Afrique de l’Ouest et centrale francophone',
    'Going, Praying, or Supporting: Equipping Labourers at Harvest Field Academy':
      'Partir, prier ou soutenir : former des ouvriers à la Harvest Field Academy',
    'Have You Met Jesus? An Open Invitation to Peace and New Beginning':
      'Avez-vous rencontré Jésus ? Une invitation à la paix et à une vie nouvelle',
    'From the Mission Field': 'Du terrain missionnaire',
    'Field Coordinates': 'Repères sur le terrain',
    'Program Track': 'Programme',
    'Regional Reach': 'Présence régionale',
    'Join short-term outreach expeditions or long-term missionary deployments to unreached communities across Rivers State, Northern Cameroon (Linde-Massa & Maroua), Tchad Republic, and Côte d’Ivoire.':
      'Participez à des missions ponctuelles ou de longue durée auprès de communautés peu évangélisées dans l’État de Rivers, le nord du Cameroun (Linde-Massa et Maroua), au Tchad et en Côte d’Ivoire.',
    'Every open door in Linde-Massa, Maroua, Tchad, and our secondary schools is preceded by faithful prayer. Stand on the watch with our intercessory network.':
      'Chaque porte ouverte à Linde-Massa, Maroua, au Tchad et dans nos écoles est précédée d’une prière fidèle. Rejoignez notre réseau d’intercession.',
    'Consistent monthly or seasonal giving fuels transport, Bibles, crusade logistics, student outreach materials, and missionary welfare across West and Central Africa.':
      'Les dons réguliers, mensuels ou saisonniers, financent le transport, les Bibles, l’organisation des campagnes, le matériel pour les élèves et le soutien des missionnaires en Afrique de l’Ouest et centrale.',
    'Pre-deployment equipping through Harvest Field Academy (HFA)': 'Formation avant le départ à la Harvest Field Academy (HFA)',
    'Cross-cultural evangelism, school ministry, and rural crusades': 'Évangélisation interculturelle, ministère scolaire et campagnes rurales',
    'Mentorship under seasoned field evangelists and leaders': 'Accompagnement par des évangélistes et responsables expérimentés',
    'Weekly intercession focus for rural and foreign field teams': 'Prière hebdomadaire pour les équipes rurales et internationales',
    'Prayer backing for revival meetings and evangelistic conferences': 'Prière pour les réunions de réveil et les conférences d’évangélisation',
    'Spiritual covering for new converts and Harvest Field Academy trainees': 'Prière pour les nouveaux convertis et les élèves de la Harvest Field Academy',
    'Transparent stewardship through official mission bank accounts': 'Gestion transparente grâce aux comptes bancaires officiels de la mission',
    'Direct support for rural and foreign mission expeditions': 'Soutien direct aux missions rurales et internationales',
    'Regular field dispatches and testimonies sent to partners': 'Envoi régulier de nouvelles et de témoignages aux partenaires',
    'From the streets of Omoku to remote rural settlements, our evangelism teams bring the clear message of salvation, personal prayer, and practical compassion directly to communities longing for hope.':
      'Des rues d’Omoku aux villages reculés, nos équipes annoncent clairement le salut, prient avec les habitants et apportent une aide concrète aux communautés en quête d’espérance.',
    'We partner with schools and student fellowships to hold intensive assemblies, classroom ministry, and youth conferences that anchor young lives in godly purpose and moral clarity.':
      'Nous collaborons avec les écoles et les groupes d’étudiants pour organiser des rassemblements, des actions en classe et des conférences qui aident les jeunes à s’ancrer dans la foi et des valeurs solides.',
    'True mission work does not stop at conversion. Through weekday office counseling in Omoku and structured discipleship classes, we strengthen families, new converts, and emerging workers.':
      'La mission ne s’arrête pas à la conversion. Grâce à l’accompagnement en semaine à Omoku et aux formations de disciples, nous fortifions les familles, les nouveaux convertis et les futurs responsables.',
    'We gather intercessors, pastors, and kingdom-minded believers for Labourers Retreats and mobilisation summits—equipping labourers for rural and foreign harvest fields.':
      'Nous réunissons intercesseurs, pasteurs et croyants engagés lors de retraites et de rencontres missionnaires afin de préparer les ouvriers aux missions rurales et internationales.',
    'In partnership with local assemblies, we organize evangelistic crusades, Missions/Evangelistic Conferences, and revival meetings that stir spiritual renewal across entire districts.':
      'Avec les églises locales, nous organisons des campagnes d’évangélisation, des conférences missionnaires et des réunions de réveil pour renouveler la foi dans toute la région.',
    'Harvest Field Academy equips believers for cross-cultural ministry—preparing sent-out teams who serve in Northern Cameroon (Linde-Massa & Maroua), the Republic of Tchad, and Côte d’Ivoire.':
      'La Harvest Field Academy forme les croyants au ministère interculturel et prépare les équipes envoyées dans le nord du Cameroun (Linde-Massa et Maroua), au Tchad et en Côte d’Ivoire.',
    'What We Do, Office Hours, Omoku Head Office, Salvation Call, and Zenith Domiciliary Account.':
      'Nos activités, horaires, siège d’Omoku, appel au salut et compte en devises Zenith.',
    'Vision call, Cameroon, Tchad Republic, Côte d’Ivoire missions, and Naira/Domiciliary accounts.':
      'Vision, missions au Cameroun, au Tchad et en Côte d’Ivoire, comptes en nairas et en devises.',
    'Evang. David Abrebor directory, 8 ministry avenues, Harvest Field Academy, and contact lines.':
      'Coordonnées de l’Évang. David Abrebor, huit ministères, Harvest Field Academy et contacts.',
    'Core Mandate & Contact Bulletin': 'Mandat principal et coordonnées',
    'Foreign Missions & Partnership Broadsheet': 'Missions à l’étranger et partenariats',
    'President & Founder Official Ministry Card': 'Carte officielle du président et fondateur',
    'Mon – Fri · 9:00 AM – 3:00 PM': 'Lun – ven · 9 h–15 h',
    'Nigeria · Cameroon · Tchad · Côte d’Ivoire': 'Nigeria · Cameroun · Tchad · Côte d’Ivoire',
    'Nigeria · Cameroon · Tchad · Côte d\'Ivoire': 'Nigeria · Cameroun · Tchad · Côte d’Ivoire',
    "Contact Us": "Nous contacter",
    "Contact Harvest Field Gospel Mission for prayer, counselling, outreach invitations or questions about the mission.": "Contactez Harvest Field Gospel Mission pour une demande de prière, un accompagnement, une invitation missionnaire ou toute question sur la mission.",
    "Reach the mission team": "Contacter l’équipe missionnaire",
    "Visit Us": "Nous rendre visite",
    "Head Office": "Siège principal",
    "Please contact the mission team before visiting so we can confirm the appropriate meeting location and arrangements.": "Veuillez contacter l’équipe missionnaire avant votre visite afin de confirmer le lieu et les modalités du rendez-vous.",
    "Send a message": "Envoyer un message",
    "How can we help?": "Comment pouvons-nous vous aider ?",
    "Complete this form and your message will be submitted securely through our website.": "Remplissez ce formulaire ; votre message sera envoyé de manière sécurisée par notre site.",
    "Do not fill this out:": "Ne remplissez pas ce champ :",
    "Your name *": "Votre nom *",
    "Phone or email *": "Téléphone ou e-mail *",
    "What is your message about?": "Quel est l’objet de votre message ?",
    "General enquiry": "Demande générale",
    "Prayer and counselling": "Prière et accompagnement",
    "Mission or outreach invitation": "Invitation missionnaire ou évangélisation",
    "Partnership and giving": "Partenariat et dons",
    "Message *": "Message *",
    "Tell us how we can help...": "Dites-nous comment nous pouvons vous aider…",
    "Submit message": "Envoyer le message",
    "Please do not include passwords, financial account details or other highly sensitive information.": "Veuillez ne pas inclure de mots de passe, de coordonnées bancaires ni d’autres informations hautement sensibles.",
    "Prayer & Pastoral Care": "Prière et accompagnement pastoral",
    "How can we pray with you?": "Comment pouvons-nous prier avec vous ?",
    "Share a prayer request with the Harvest Field team. You may keep your request brief and share only what you are comfortable sharing.": "Partagez votre sujet de prière avec l’équipe Harvest Field. Vous pouvez rester bref et ne communiquer que ce que vous souhaitez partager.",
    "For urgent pastoral support, you can also call the mission office:": "Pour un accompagnement pastoral urgent, vous pouvez également appeler le bureau de la mission :",
    "Name (optional)": "Nom (facultatif)",
    "Email or phone (optional)": "E-mail ou téléphone (facultatif)",
    "Prayer request *": "Sujet de prière *",
    "Share your request...": "Partagez votre sujet de prière…",
    "I am happy for the mission team to contact me about this request.": "J’accepte que l’équipe missionnaire me contacte au sujet de cette demande.",
    "Send prayer request": "Envoyer la demande de prière",
    "Please avoid including sensitive medical, financial or identifying information. Share only what is necessary for the team to pray with you.": "Évitez de communiquer des informations médicales, financières ou identifiantes sensibles. Partagez uniquement ce qui est nécessaire pour que l’équipe puisse prier avec vous.",
    "Join Us": "Rejoignez-nous",
    "Serve with Harvest Field": "Servir avec Harvest Field",
    "Tell us a little about yourself, where you are based, and what inspires you to serve with the mission.": "Présentez-vous brièvement, indiquez où vous résidez et dites-nous ce qui vous motive à servir avec la mission.",
    "Full name *": "Nom complet *",
    "Phone / WhatsApp *": "Téléphone / WhatsApp *",
    "Email (optional)": "E-mail (facultatif)",
    "State *": "État *",
    "Local Government Area *": "Zone de gouvernement local *",
    "Area of interest *": "Domaine d’intérêt *",
    "Choose an area": "Choisissez un domaine",
    "Evangelism & Outreach": "Évangélisation et actions de terrain",
    "Youth & Student Ministry": "Ministère auprès des jeunes et étudiants",
    "Prayer & Discipleship": "Prière et formation de disciples",
    "Foreign Missions": "Missions internationales",
    "Other": "Autre",
    "What inspires you to join the mission? *": "Qu’est-ce qui vous motive à rejoindre la mission ? *",
    "Share what inspires you and how you hope to serve...": "Dites-nous ce qui vous motive et comment vous souhaitez servir…",
    "Submit interest": "Envoyer ma candidature",
    'All rights reserved.': 'Tous droits réservés.',
    'Thank you for reaching out.': 'Merci de nous avoir contactés.',
    'Your message has been received, and we are grateful you took the time to connect with us.': 'Nous avons bien reçu votre message et vous remercions d’avoir pris le temps de nous contacter.',
    'Our team will review your message and reach out to you as soon as possible.': 'Notre équipe examinera votre message et vous contactera dès que possible.',
    'With grace and peace,': 'Avec grâce et paix,',
    'Return to our website': 'Retourner sur notre site',
    'We look forward to connecting with you.': 'Nous nous réjouissons de pouvoir échanger avec vous.',
  },
  es: {
    Home: 'Inicio',
    Leadership: 'Liderazgo',
    Gallery: 'Galería',
    Blog: 'Blog',
    Contact: 'Contacto',
    'Donate & Partner': 'Donar y colaborar',
    'Primary navigation': 'Navegación principal',
    'Mobile navigation': 'Navegación móvil',
    'Open navigation menu': 'Abrir menú de navegación',
    'Close navigation menu': 'Cerrar menú de navegación',
    'Select language': 'Seleccionar idioma',
    'Gospel Mission Int’l': 'Misión Evangélica Internacional',
    'A Gospel Mission to the Nations': 'Una misión evangélica para las naciones',
    'Taking the Gospel to the nations. Bringing hope to every generation.':
      'Llevamos el Evangelio a las naciones y esperanza a cada generación.',
    'From rural communities to cross-border mission fields, Harvest Field Gospel Mission Int’l equips believers to share Christ, serve people and strengthen local communities.':
      'Desde comunidades rurales hasta campos misioneros transfronterizos, Harvest Field Gospel Mission International capacita a creyentes para compartir a Cristo, servir a las personas y fortalecer las comunidades.',
    Explore: 'Explorar',
    'Discover Our Mission': 'Conoce nuestra misión',
    Partner: 'Colaborar',
    'Pray, Give & Partner': 'Ora, dona y colabora',
    'Rural & Foreign Missions': 'Misiones rurales e internacionales',
    'Our work, from Omoku to the mission fields.':
      'Nuestra labor, desde Omoku hasta los campos misioneros.',
    'What We Do': 'Lo que hacemos',
    'Expressions of one Great Commission mandate.':
      'Formas de cumplir un mismo mandato: la Gran Comisión.',
    'Filter mission programs': 'Filtrar programas misioneros',
    'Meet the Founder': 'Conoce al fundador',
    'Active Mission Field Dispatches': 'Misiones activas en el campo',
    'Explore Our Mission': 'Conoce nuestra misión',
    'Support This Ministry Track': 'Apoya este ministerio',
    'Show Less': 'Mostrar menos',
    'Read Program Details': 'Leer detalles del programa',
    'About Us': 'Quiénes somos',
    'Contact Us': 'Contáctanos',
    'Reaching the lost. Equipping believers. Serving communities.':
      'Alcanzar a quienes no conocen a Cristo. Capacitar a creyentes. Servir a las comunidades.',
    'Our Gospel Outreach': 'Nuestra labor evangelística',
    'Practical ways we serve': 'Cómo servimos',
    'Beyond Evangelism': 'Más allá de la evangelización',
    'Community objectives': 'Objetivos comunitarios',
    'Our Home & Registration': 'Nuestra sede y registro',
    'Rooted in Omoku, Rivers State': 'Con raíces en Omoku, estado de Rivers',
    'Contact the Mission': 'Contactar con la misión',
    'Three Ways to Participate': 'Tres formas de participar',
    'Fulfill your mission mandate for the nations.':
      'Cumple tu misión en favor de las naciones.',
    'Step Into Rural & Foreign Fields': 'Sirve en zonas rurales y otros países',
    'Uphold the Nations in Intercession': 'Intercede por las naciones',
    'Send Regular Kingdom Support': 'Aporta apoyo regular al Reino',
    'Connect With Our Team': 'Contacta con nuestro equipo',
    'Taking the Nations for Christ Via': 'Alcanzamos a las naciones para Cristo mediante',
    'Ministry tracks & Harvest Field Academy (HFA)':
      'Áreas ministeriales y Harvest Field Academy (HFA)',
    'Sponsor This Track': 'Patrocinar este ministerio',
    'Archival Publications': 'Publicaciones de archivo',
    'Original Mission Flyers': 'Folletos oficiales de la misión',
    'Inspect or reference our official printed flyers in full detail. Click any flyer to enlarge.':
      'Consulta nuestros folletos impresos oficiales. Haz clic en uno para ampliarlo.',
    'Inspect Full Flyer': 'Ver folleto completo',
    'Close flyer preview': 'Cerrar vista previa',
    'Mission Galleries': 'Galerías de la misión',
    'The Work, Through Our Eyes': 'Nuestra labor, desde nuestra perspectiva',
    'Authentic field documentation from school outreaches, rural crusades, discipleship classes, and foreign missions across Cameroon, Tchad Republic, and Côte d’Ivoire.':
      'Imágenes auténticas de actividades escolares, campañas rurales, formación de discípulos y misiones en Camerún, Chad y Costa de Marfil.',
    'Filter gallery by mission field': 'Filtrar galería por campo misionero',
    All: 'Todo',
    Cameroon: 'Camerún',
    'Tchad Republic': 'República del Chad',
    'Nigeria & Schools': 'Nigeria y escuelas',
    'Official Flyers': 'Folletos oficiales',
    'Close lightbox': 'Cerrar imagen',
    'Previous photograph': 'Foto anterior',
    'Next photograph': 'Foto siguiente',
    "We're here to connect.": 'Estamos aquí para escucharte.',
    'Contact Harvest Field Gospel Mission for prayer, counselling, outreach invitations, or questions about the mission. We look forward to hearing from you.':
      'Contacta con Harvest Field Gospel Mission para pedir oración, orientación, invitarnos a una actividad o resolver tus dudas sobre la misión. Esperamos saber de ti.',
    'Counseling & Enquiries': 'Orientación y consultas',
    'Reach the mission team': 'Contacta con el equipo misionero',
    'Visit Us': 'Visítanos',
    'Rooted in Omoku': 'Con sede en Omoku',
    'Head Office': 'Oficina central',
    'Fellowship Venue': 'Lugar de reunión',
    'Office Hours': 'Horario de oficina',
    'Nations Reached': 'Países donde servimos',
    'Find us on Facebook': 'Encuéntranos en Facebook',
    'Your email draft is ready': 'El borrador de tu correo está listo',
    'Please send the draft from your email app to complete your message. If it did not open, contact our office directly using the details on this page.':
      'Envía el borrador desde tu aplicación de correo para completar el mensaje. Si no se abrió, contacta directamente con nuestra oficina usando los datos de esta página.',
    'Send another message': 'Enviar otro mensaje',
    'Send a Message': 'Enviar un mensaje',
    'How can we help?': '¿Cómo podemos ayudarte?',
    "Complete the form and we'll prepare a message to the mission office.":
      'Completa el formulario y prepararemos un mensaje para la oficina de la misión.',
    'Your name': 'Tu nombre',
    'Full name': 'Nombre completo',
    'Phone or email': 'Teléfono o correo electrónico',
    'How can we reply?': '¿Cómo podemos responderte?',
    'What is your message about?': '¿Sobre qué trata tu mensaje?',
    Message: 'Mensaje',
    'Tell us how we can help...': 'Cuéntanos cómo podemos ayudarte…',
    'Prepare Email': 'Preparar correo',
    'Your email app must be set up to send the message. You can also call the office directly.':
      'Tu aplicación de correo debe estar configurada para enviar el mensaje. También puedes llamar directamente a la oficina.',
    'General enquiry': 'Consulta general',
    'Prayer and counselling': 'Oración y orientación',
    'Mission or outreach invitation': 'Invitación a una misión o actividad',
    'Partnership and giving': 'Colaboración y donaciones',
    'Join Us': 'Únete a nosotros',
    'Serve with Harvest Field': 'Sirve con Harvest Field',
    'Tell us a little about yourself, where you are based, and what inspires you to serve with the mission.':
      'Cuéntanos un poco sobre ti, dónde vives y qué te inspira a servir con la misión.',
    'Full name *': 'Nombre completo *',
    'Your full name': 'Tu nombre completo',
    'Phone / WhatsApp *': 'Teléfono / WhatsApp *',
    'Email (optional)': 'Correo electrónico (opcional)',
    'you@example.com': 'tu@ejemplo.com',
    'State *': 'Estado *',
    'e.g., Rivers State': 'p. ej., estado de Rivers',
    'Local Government Area *': 'Área de gobierno local *',
    'e.g., ONELGA': 'p. ej., ONELGA',
    'Area of interest *': 'Área de interés *',
    'Choose an area': 'Elige un área',
    'Evangelism & Outreach': 'Evangelización y actividades de alcance',
    'Youth & Student Ministry': 'Ministerio juvenil y estudiantil',
    'Prayer & Discipleship': 'Oración y discipulado',
    'Foreign Missions': 'Misiones internacionales',
    Other: 'Otro',
    'What inspires you to join the mission? *': '¿Qué te inspira a unirte a la misión? *',
    'Share what inspires you and how you hope to serve...':
      'Cuéntanos qué te inspira y cómo esperas servir…',
    'Please complete all required fields before continuing.':
      'Completa todos los campos obligatorios antes de continuar.',
    'Review and send it from your email app to complete your request. The mission will receive your details only after you send the email.':
      'Revisa y envía el correo desde tu aplicación para completar la solicitud. La misión recibirá tus datos solo cuando lo envíes.',
    'Edit my details': 'Editar mis datos',
    'This form opens an email draft to the mission office. Your request is sent only when you send that email.':
      'Este formulario abre un borrador de correo para la oficina de la misión. Tu solicitud se envía solo cuando envíes ese correo.',
    'Open Email Draft': 'Abrir borrador de correo',
    'Stories from the Mission Field': 'Historias del campo misionero',
    'Harvest Field Blog': 'Blog de Harvest Field',
    'Field reports from Northern Cameroon, Tchad Republic, and Côte d’Ivoire alongside youth outreach stories, discipleship notes, and devotional calls.':
      'Informes desde el norte de Camerún, Chad y Costa de Marfil, junto con historias de actividades juveniles, formación de discípulos y reflexiones devocionales.',
    'Search articles or fields...': 'Buscar artículos o campos misioneros…',
    'Search blog articles': 'Buscar artículos del blog',
    'Field Reports': 'Informes de campo',
    'Youth & Schools': 'Jóvenes y escuelas',
    Discipleship: 'Discipulado',
    Devotional: 'Devocional',
    Saved: 'Guardados',
    'No matching dispatches found': 'No se encontraron artículos',
    Share: 'Compartir',
    'Share Article': 'Compartir artículo',
    'Article shared.': 'Artículo compartido.',
    'Article link copied to clipboard.': 'Enlace del artículo copiado.',
    'Unable to share the article. Copy its URL from the address bar.':
      'No se pudo compartir el artículo. Copia su dirección desde la barra del navegador.',
    'You have not saved any dispatches yet. Open any article to bookmark it for later reading.':
      'Aún no has guardado ningún artículo. Abre uno para guardarlo y leerlo más tarde.',
    'Try clearing your search filter or switching to All Articles.':
      'Prueba a borrar la búsqueda o a seleccionar Todos los artículos.',
    'Reset Filters': 'Restablecer filtros',
    'Read Full Dispatch': 'Leer el informe completo',
    'Open Dispatch': 'Abrir informe',
    'Read Article': 'Leer artículo',
    'Bookmark article': 'Guardar artículo',
    'Back to Harvest Field Blog': 'Volver al blog de Harvest Field',
    'Saved to Reading List': 'Guardado en tu lista de lectura',
    'Save Dispatch': 'Guardar informe',
    'Related Articles': 'Artículos relacionados',
    By: 'Por',
    'Donate, Partner & Connect': 'Dona, colabora y ponte en contacto',
    'Interactive Giving Desk': 'Espacio de donaciones',
    'Prepare Your Mission Gift': 'Prepara tu donación misionera',
    'One-Time Gift': 'Donación única',
    'Monthly Support': 'Apoyo mensual',
    'This page prepares bank-transfer details but does not process payments. Monthly support is arranged through repeat transfers; no automatic payment is scheduled.':
      'Esta página facilita los datos para una transferencia bancaria, pero no procesa pagos. El apoyo mensual se realiza mediante transferencias periódicas; no se programa ningún pago automático.',
    'Select or Enter Amount (': 'Elige o introduce una cantidad (',
    'Mission Invitations': 'Invitaciones ministeriales',
    'Leadership · Harvest Field Gospel Mission': 'Liderazgo · Harvest Field Gospel Mission',
    'Leadership Team · Sample Profiles': 'Equipo directivo · Perfiles de muestra',
    'Meet the Mission Leaders': 'Conoce a los líderes de la misión',
    'These are clearly marked placeholders. Replace them with verified names, roles, and photographs before presenting them as ministry leaders.':
      'Estos son marcadores de posición claramente identificados. Sustitúyelos por nombres, cargos y fotos verificados antes de presentarlos como líderes del ministerio.',
    'Sample profile': 'Perfil de muestra',
    'Sample Leader 1': 'Líder de muestra 1',
    'Sample Leader 2': 'Líder de muestra 2',
    'Sample Leader 3': 'Líder de muestra 3',
    'Sample Leader 4': 'Líder de muestra 4',
    'Sample Leadership Role 1': 'Cargo de liderazgo de muestra 1',
    'Sample Leadership Role 2': 'Cargo de liderazgo de muestra 2',
    'Sample Leadership Role 3': 'Cargo de liderazgo de muestra 3',
    'Sample Leadership Role 4': 'Cargo de liderazgo de muestra 4',
    'Demo links only. Replace these with the ministry’s official social accounts.':
      'Enlaces de demostración únicamente. Sustitúyelos por las cuentas oficiales del ministerio.',
    'Founder & President': 'Fundador y presidente',
    'Support Our Foreign Missions': 'Apoya nuestras misiones internacionales',
    'See Field Photographs': 'Ver fotografías de las misiones',
    'A Life Poured Out for Rural & Foreign Harvests':
      'Una vida dedicada a las misiones rurales e internacionales',
    'Teaching & Evangelism': 'Enseñanza y evangelización',
    'Sharing the Gospel through preaching': 'Compartir el Evangelio mediante la predicación',
    Invite: 'Invitar a',
    'View Our Ministry Tracks →': 'Conoce nuestras áreas ministeriales →',
    'Invitation Email Prepared': 'Correo de invitación preparado',
    'Contact the Mission Office': 'Contactar con la oficina de la misión',
    'Submit Another Invitation': 'Enviar otra invitación',
    'Back to top': 'Volver arriba',
    'Explore Mission': 'Conoce la misión',
    'Home & What We Do': 'Inicio y nuestra labor',
    'President & Founder': 'Presidente y fundador',
    'Field Galleries': 'Galerías de las misiones',
    'Blog & Articles': 'Blog y artículos',
    'Partner, Give & Pray': 'Colabora, dona y ora',
    'Office details, hours, and enquiry lines are available on our Contact page.':
      'Encontrarás los datos, horarios y teléfonos en nuestra página de contacto.',
    'Follow the Mission': 'Sigue a la misión',
    'Official social links are not connected yet. Please use the contact details on this page to reach us.':
      'Los enlaces oficiales a redes sociales aún no están disponibles. Usa los datos de esta página para contactarnos.',
    'Staff sign in': 'Acceso del personal',
    'President / Founder: Evang. David Abrebor': 'Presidente / fundador: Evang. David Abrebor',
    'Choose hero image': 'Elegir imagen principal',
    'Pause slideshow': 'Pausar presentación',
    'Resume slideshow': 'Reanudar presentación',
    'Visual Witness': 'Imágenes que dan testimonio',
    'Pictures from the field.': 'Imágenes del campo misionero.',
    'View Photo': 'Ver foto',
    'From the Blog': 'En el blog',
    'Stories, testimonies & teaching from the mission field.':
      'Historias, testimonios y enseñanzas del campo misionero.',
    'Explore All Articles': 'Ver todos los artículos',
    'Open Article': 'Abrir artículo',
    'An Open Invitation': 'Una invitación abierta',
    'Have you met Jesus?': '¿Has conocido a Jesús?',
    'Need someone to pray with you right now?':
      '¿Necesitas que alguien ore contigo ahora?',
    'Call our counseling desk Monday–Friday (9:00 AM – 3:00 PM) or send your prayer request directly using this form.':
      'Llama a nuestro servicio de orientación de lunes a viernes (9:00–15:00) o envía tu petición de oración con este formulario.',
    'Your email request is ready.': 'Tu correo está listo.',
    'Your email application should open with your request addressed to Harvest Field Gospel Mission Int’l. Please send that email to complete your request. If it does not open, contact our office directly.':
      'Tu aplicación de correo debería abrirse con la solicitud dirigida a Harvest Field Gospel Mission International. Envía ese correo para completar la solicitud. Si no se abre, contacta directamente con nuestra oficina.',
    'Send Another Request': 'Enviar otra solicitud',
    'Salvation Decision': 'Decisión de seguir a Jesús',
    'Prayer Request': 'Petición de oración',
    'Mission Inquiry': 'Consulta sobre la misión',
    'We would be honoured to walk with you as you begin following Jesus.':
      'Será un honor acompañarte en tus primeros pasos siguiendo a Jesús.',
    'Share what is on your heart. Our team will be glad to pray with you.':
      'Cuéntanos qué te preocupa. Nuestro equipo orará contigo.',
    'Tell us how you would like to connect with the mission.':
      'Cuéntanos cómo te gustaría colaborar con la misión.',
    'Enter your name': 'Escribe tu nombre',
    'Phone or Email (Optional)': 'Teléfono o correo electrónico (opcional)',
    'How would you like to get involved?': '¿Cómo te gustaría participar?',
    'Your Note or Prayer': 'Tu mensaje u oración',
    'Your Prayer Request': 'Tu petición de oración',
    Submit: 'Enviar',
    'Support the Harvest': 'Apoya la misión',
    'Official Mission Banking Channels': 'Cuentas bancarias oficiales de la misión',
    'Open Giving & Pledge Desk': 'Abrir donaciones y compromisos',
    'Harvest Field Gospel Mission photographs': 'Fotografías de Harvest Field Gospel Mission',
    'Stand with the harvest through going, prayer, or regular support.':
      'Apoya la misión yendo, orando o colaborando regularmente.',
    'Your prayers, service and financial support help strengthen rural and foreign missions across Omoku, Northern Cameroon, Tchad Republic, Côte d’Ivoire, and Harvest Field Academy.':
      'Tus oraciones, servicio y apoyo económico fortalecen las misiones rurales e internacionales en Omoku, el norte de Camerún, Chad, Costa de Marfil y Harvest Field Academy.',
    'NGN (₦)': 'NGN (₦)',
    'USD ($) Domiciliary': 'USD ($) cuenta en divisas',
    'Transfer Summary': 'Resumen de la transferencia',
    Copied: 'Copiado',
    'Copy Number': 'Copiar número',
    'Transfer Reference Prepared — Not a Payment Receipt':
      'Referencia de transferencia preparada — no es un recibo de pago',
    'This reference is for your own transfer note only. It does not confirm that a payment was made or received. After making a transfer, notify the mission office using the details on our Contact page.':
      'Esta referencia es solo para tus notas. No confirma que se haya realizado o recibido un pago. Después de transferir, avisa a la oficina de la misión usando los datos de nuestra página de contacto.',
    'Contact the mission office': 'Contactar con la oficina de la misión',
    'Your Name (optional)': 'Tu nombre (opcional)',
    'Donor Name': 'Nombre del donante',
    'Phone or Email for receipt note (optional)': 'Teléfono o correo para el comprobante (opcional)',
    'Donor Phone or Email': 'Teléfono o correo del donante',
    'Prepare Bank Transfer Reference': 'Preparar referencia de transferencia',
    'All Official Mission Bank Accounts': 'Todas las cuentas bancarias oficiales',
    'Tap “Copy” on any account number to copy directly to your clipboard.':
      'Pulsa «Copiar» junto a cualquier número para copiarlo.',
    'Mission Team, Counseling & Prayer Desk': 'Equipo misionero, orientación y oración',
    'Your email draft is ready to send to the mission office. Please press Send in your email app to complete your request. For immediate follow-up, use the contact details on our Contact page.':
      'El borrador para la oficina de la misión está listo. Pulsa Enviar en tu correo para completar la solicitud. Para recibir una respuesta rápida, usa los datos de nuestra página de contacto.',
    'Submit Another Note': 'Enviar otro mensaje',
    'City / Country (Optional)': 'Ciudad / país (opcional)',
    'Message, Support Pledge, or Prayer Need': 'Mensaje, compromiso de apoyo o petición de oración',
    'Send Partnership & Prayer Note': 'Enviar mensaje de colaboración y oración',
    'This Browser’s Recent Giving & Partnership Log': 'Historial reciente de donaciones y colaboraciones en este navegador',
    'Clear Log': 'Borrar historial',
    'Need help with your gift?': '¿Necesitas ayuda con tu donación?',
    'For transfer questions, prayer requests, or counselling, contact the mission office through our Contact page.':
      'Para preguntas sobre transferencias, peticiones de oración u orientación, contacta con la oficina de la misión desde nuestra página de contacto.',
    'View Contact Details': 'Ver datos de contacto',
    'Program Details': 'Detalles del programa',
    'Send Ministry Invitation': 'Enviar invitación ministerial',
    'Church, School, or Organization': 'Iglesia, escuela u organización',
    'Coordinator Phone or Email': 'Teléfono o correo del coordinador',
    'Program Type': 'Tipo de programa',
    'Proposed City / Country & Dates': 'Ciudad / país y fechas propuestas',
    'Share theme, expected audience, or special ministry focus...':
      'Indica el tema, el público previsto o el enfoque especial del ministerio…',
    'Churches, secondary schools, campus fellowships, and mission agencies can submit invitations for crusades, youth conferences, labourers retreats, or revival meetings.':
      'Las iglesias, escuelas secundarias, grupos universitarios y agencias misioneras pueden invitarnos a campañas, encuentros juveniles, retiros de obreros o reuniones de avivamiento.',
    'Harvest Field Gospel Mission International, Omoku, is a Christian interdenominational ministry committed to fulfilling the Great Commission by reaching the lost with the gospel of salvation through the Lord Jesus Christ.':
      'Harvest Field Gospel Mission International, en Omoku, es un ministerio cristiano interdenominacional comprometido con la Gran Comisión y con llevar el Evangelio de salvación del Señor Jesucristo a quienes aún no lo conocen.',
    'We also equip believers with knowledge and practical skills for effective soul-winning. Our goal is to awaken believers to their role in standing for the Gospel in their workplaces, neighbourhoods, and communities, and to help them practically engage people with the Gospel so that more may come to Christ.':
      'También capacitamos a los creyentes con conocimientos y habilidades prácticas para compartir el Evangelio. Queremos animarlos a dar testimonio en el trabajo, el vecindario y la comunidad, para que más personas conozcan a Cristo.',
    'Practical one-on-one evangelism': 'Evangelización personal y práctica',
    'School outreach programmes': 'Actividades evangelísticas en escuelas',
    Conferences: 'Conferencias',
    'Community evangelism': 'Evangelización comunitaria',
    'Church evangelism awareness programmes': 'Programas de sensibilización evangelística en iglesias',
    Counselling: 'Orientación',
    'Prayer and deliverance ministry': 'Ministerio de oración y liberación',
    'Educational development and rehabilitation of young people in rural communities.':
      'Promover la educación y rehabilitación de jóvenes en comunidades rurales.',
    'Girl-child education advocacy.': 'Defender la educación de las niñas.',
    'Poverty eradication in rural communities.': 'Combatir la pobreza en las comunidades rurales.',
    'Agricultural and vocational skills development for young people.':
      'Desarrollar habilidades agrícolas y profesionales entre los jóvenes.',
    'Headquartered in Omoku, Rivers State, Nigeria, Harvest Field Gospel Mission International is registered with the Corporate Affairs Commission of Nigeria.':
      'Con sede en Omoku, estado de Rivers, Nigeria, Harvest Field Gospel Mission International está registrada ante la Comisión de Asuntos Corporativos de Nigeria.',
    '01. Going': '01. Ir de misión',
    '02. Praying': '02. Orar',
    '03. Regular Support': '03. Apoyar regularmente',
    'Account Name': 'Nombre de la cuenta',
    'Account Number': 'Número de cuenta',
    Recommended: 'Recomendada',
    Copy: 'Copiar',
    'A fellowship of kingdom-minded believers equipped for rural and foreign missions across Nigeria, Northern Cameroon, Tchad Republic, and Côte d’Ivoire.':
      'Una comunidad de creyentes comprometidos con el Reino y preparados para misiones rurales e internacionales en Nigeria, el norte de Camerún, Chad y Costa de Marfil.',
    'Linde-Massa, Northern Cameroon': 'Linde-Massa, norte de Camerún',
    'Tchad Republic Missions': 'Misiones en la República del Chad',
    "Les Porteurs de Gloire · Côte d'Ivoire": "Les Porteurs de Gloire · Costa de Marfil",
    'Omoku & Rivers State, Nigeria': 'Omoku y estado de Rivers, Nigeria',
    'Evang. David Abrebor during rural foreign mission outreach.':
      'Evang. David Abrebor durante una misión rural en el extranjero.',
    'Cross-border congregational praise and gospel impartation.':
      'Alabanza comunitaria y enseñanza del Evangelio más allá de las fronteras.',
    'Prayer, teaching, and mission impartation conferences.':
      'Conferencias de oración, enseñanza y formación misionera.',
    'Intensive school outreaches and personal prayer with students.':
      'Actividades intensivas en escuelas y oración personal con estudiantes.',
    'Rural & Urban Evangelism Outreach': 'Evangelización rural y urbana',
    'Intensive School & Youth Outreaches': 'Actividades intensivas en escuelas y con jóvenes',
    'Christian Counseling & Discipleship': 'Orientación cristiana y discipulado',
    'Mission Mobilisation & Labourers Retreat': 'Movilización misionera y retiro de obreros',
    'Community Crusades & Revival Meetings': 'Campañas comunitarias y reuniones de avivamiento',
    'Harvest Field Academy (HFA) & Foreign Missions': 'Harvest Field Academy (HFA) y misiones internacionales',
    Evangelism: 'Evangelización',
    Training: 'Formación',
    'Global Missions': 'Misiones internacionales',
    'Frontier Cross-Border Missions': 'Misiones transfronterizas pioneras',
    'Next-Generation Mobilisation': 'Movilización de la próxima generación',
    'Labourers Equipping & HFA': 'Capacitación de obreros y HFA',
    'Harvest Field Student Conference': 'Conferencia estudiantil Harvest Field',
    'Linde-Massa Field Expedition': 'Misión de campo en Linde-Massa',
    'Les Porteurs de Gloire — Côte d’Ivoire': 'Les Porteurs de Gloire — Costa de Marfil',
    'Tchad Republic Praise & Worship': 'Alabanza y adoración en la República del Chad',
    'Intensive School Outreach & Prayer': 'Actividad intensiva y oración en una escuela',
    'Maroua Mission Field': 'Campo misionero de Maroua',
    'Student & Youth Outreach': 'Actividades con estudiantes y jóvenes',
    'Foreign Mission': 'Misión internacional',
    'Missions & Revival Conference': 'Conferencia misionera y de avivamiento',
    'Intensive School Outreaches': 'Actividades intensivas en escuelas',
    'Footsteps in Linde-Massa and Maroua: Advancing the Gospel in Northern Cameroon':
      'Tras los pasos de Linde-Massa y Maroua: el Evangelio avanza en el norte de Camerún',
    'Reaching Classrooms Before the World Does: Inside Our Intensive School Outreaches':
      'Llegar a las aulas antes que el mundo: nuestras actividades intensivas en escuelas',
    'Les Porteurs de Gloire: Partnering Across Francophone West & Central Africa':
      'Les Porteurs de Gloire: colaboración en África occidental y central francófona',
    'Going, Praying, or Supporting: Equipping Labourers at Harvest Field Academy':
      'Ir, orar o apoyar: preparando obreros en Harvest Field Academy',
    'Have You Met Jesus? An Open Invitation to Peace and New Beginning':
      '¿Has conocido a Jesús? Una invitación a la paz y a una nueva vida',
    'From the Mission Field': 'Desde el campo misionero',
    'Field Coordinates': 'Ubicación del campo misionero',
    'Program Track': 'Programa',
    'Regional Reach': 'Presencia regional',
    'Join short-term outreach expeditions or long-term missionary deployments to unreached communities across Rivers State, Northern Cameroon (Linde-Massa & Maroua), Tchad Republic, and Côte d’Ivoire.':
      'Participa en misiones breves o de largo plazo en comunidades con poca presencia del Evangelio en el estado de Rivers, el norte de Camerún (Linde-Massa y Maroua), Chad y Costa de Marfil.',
    'Every open door in Linde-Massa, Maroua, Tchad, and our secondary schools is preceded by faithful prayer. Stand on the watch with our intercessory network.':
      'Cada oportunidad en Linde-Massa, Maroua, Chad y nuestras escuelas está precedida por la oración. Únete a nuestra red de intercesión.',
    'Consistent monthly or seasonal giving fuels transport, Bibles, crusade logistics, student outreach materials, and missionary welfare across West and Central Africa.':
      'Las donaciones mensuales o periódicas financian transporte, Biblias, campañas, materiales para estudiantes y el bienestar de misioneros en África occidental y central.',
    'Pre-deployment equipping through Harvest Field Academy (HFA)': 'Preparación misionera en Harvest Field Academy (HFA)',
    'Cross-cultural evangelism, school ministry, and rural crusades': 'Evangelización intercultural, ministerio escolar y campañas rurales',
    'Mentorship under seasoned field evangelists and leaders': 'Mentoría de evangelistas y líderes con experiencia',
    'Weekly intercession focus for rural and foreign field teams': 'Oración semanal por los equipos rurales e internacionales',
    'Prayer backing for revival meetings and evangelistic conferences': 'Oración por reuniones de avivamiento y conferencias evangelísticas',
    'Spiritual covering for new converts and Harvest Field Academy trainees': 'Apoyo espiritual para nuevos creyentes y alumnos de Harvest Field Academy',
    'Transparent stewardship through official mission bank accounts': 'Gestión transparente mediante las cuentas bancarias oficiales',
    'Direct support for rural and foreign mission expeditions': 'Apoyo directo a las misiones rurales e internacionales',
    'Regular field dispatches and testimonies sent to partners': 'Envío periódico de noticias y testimonios a los colaboradores',
    'From the streets of Omoku to remote rural settlements, our evangelism teams bring the clear message of salvation, personal prayer, and practical compassion directly to communities longing for hope.':
      'Desde las calles de Omoku hasta aldeas remotas, nuestros equipos anuncian claramente la salvación, oran con las personas y ayudan a comunidades que necesitan esperanza.',
    'We partner with schools and student fellowships to hold intensive assemblies, classroom ministry, and youth conferences that anchor young lives in godly purpose and moral clarity.':
      'Colaboramos con escuelas y grupos estudiantiles para organizar asambleas, actividades en las aulas y encuentros juveniles que ayudan a los jóvenes a vivir con fe y valores.',
    'True mission work does not stop at conversion. Through weekday office counseling in Omoku and structured discipleship classes, we strengthen families, new converts, and emerging workers.':
      'La misión no termina con la conversión. Mediante orientación en Omoku y formación de discípulos, fortalecemos a familias, nuevos creyentes y futuros obreros.',
    'We gather intercessors, pastors, and kingdom-minded believers for Labourers Retreats and mobilisation summits—equipping labourers for rural and foreign harvest fields.':
      'Reunimos a intercesores, pastores y creyentes comprometidos en retiros y encuentros misioneros para preparar obreros para los campos rurales e internacionales.',
    'In partnership with local assemblies, we organize evangelistic crusades, Missions/Evangelistic Conferences, and revival meetings that stir spiritual renewal across entire districts.':
      'Junto con iglesias locales, organizamos campañas evangelísticas, conferencias misioneras y reuniones de avivamiento que renuevan la fe en toda la región.',
    'Harvest Field Academy equips believers for cross-cultural ministry—preparing sent-out teams who serve in Northern Cameroon (Linde-Massa & Maroua), the Republic of Tchad, and Côte d’Ivoire.':
      'Harvest Field Academy prepara a creyentes para servir en otras culturas y envía equipos al norte de Camerún (Linde-Massa y Maroua), Chad y Costa de Marfil.',
    'What We Do, Office Hours, Omoku Head Office, Salvation Call, and Zenith Domiciliary Account.':
      'Nuestra labor, horario, sede de Omoku, invitación a la salvación y cuenta en divisas de Zenith.',
    'Vision call, Cameroon, Tchad Republic, Côte d’Ivoire missions, and Naira/Domiciliary accounts.':
      'Visión, misiones en Camerún, Chad y Costa de Marfil, cuentas en nairas y divisas.',
    'Evang. David Abrebor directory, 8 ministry avenues, Harvest Field Academy, and contact lines.':
      'Datos de Evang. David Abrebor, ocho áreas ministeriales, Harvest Field Academy y contactos.',
    'Core Mandate & Contact Bulletin': 'Mandato principal y contacto',
    'Foreign Missions & Partnership Broadsheet': 'Misiones internacionales y colaboración',
    'President & Founder Official Ministry Card': 'Tarjeta oficial del presidente y fundador',
    'Mon – Fri · 9:00 AM – 3:00 PM': 'Lun – vie · 9:00–15:00',
    'Nigeria · Cameroon · Tchad · Côte d’Ivoire': 'Nigeria · Camerún · Chad · Costa de Marfil',
    'Nigeria · Cameroon · Tchad · Côte d\'Ivoire': 'Nigeria · Camerún · Chad · Costa de Marfil',
    'Thank you for reaching out.': 'Gracias por ponerse en contacto con nosotros.',
    'Your message has been received, and we are grateful you took the time to connect with us.': 'Hemos recibido su mensaje y agradecemos que haya dedicado tiempo a ponerse en contacto con nosotros.',
    'Our team will review your message and reach out to you as soon as possible.': 'Nuestro equipo revisará su mensaje y se pondrá en contacto con usted lo antes posible.',
    'With grace and peace,': 'Con gracia y paz,',
    'Return to our website': 'Volver a nuestro sitio web',
    'We look forward to connecting with you.': 'Esperamos poder comunicarnos con usted.',

    "Contact Us": "Contáctanos",
    "We're here to connect.": "Estamos aquí para escucharte.",
    "Contact Harvest Field Gospel Mission for prayer, counselling, outreach invitations or questions about the mission.": "Contacta con Harvest Field Gospel Mission para oración, orientación, invitaciones evangelísticas o consultas sobre la misión.",
    "Reach the mission team": "Contacta con el equipo misionero",
    "Visit Us": "Visítanos",
    "Head Office": "Oficina principal",
    "Please contact the mission team before visiting so we can confirm the appropriate meeting location and arrangements.": "Contacta con el equipo misionero antes de visitarnos para confirmar el lugar y los detalles de la reunión.",
    "Send a message": "Envía un mensaje",
    "How can we help?": "¿Cómo podemos ayudarte?",
    "Complete this form and your message will be submitted securely through our website.": "Completa este formulario y tu mensaje se enviará de forma segura a través de nuestro sitio web.",
    "Do not fill this out:": "No rellenes este campo:",
    "Your name *": "Tu nombre *",
    "Phone or email *": "Teléfono o correo electrónico *",
    "What is your message about?": "¿Cuál es el motivo de tu mensaje?",
    "General enquiry": "Consulta general",
    "Prayer and counselling": "Oración y orientación",
    "Mission or outreach invitation": "Invitación misionera o evangelística",
    "Partnership and giving": "Colaboración y donaciones",
    "Message *": "Mensaje *",
    "Tell us how we can help...": "Cuéntanos cómo podemos ayudarte…",
    "Submit message": "Enviar mensaje",
    "Please do not include passwords, financial account details or other highly sensitive information.": "No incluyas contraseñas, datos de cuentas financieras ni otra información altamente confidencial.",
    "Prayer & Pastoral Care": "Oración y atención pastoral",
    "How can we pray with you?": "¿Cómo podemos orar contigo?",
    "Share a prayer request with the Harvest Field team. You may keep your request brief and share only what you are comfortable sharing.": "Comparte tu petición de oración con el equipo de Harvest Field. Puedes escribir brevemente y compartir solo lo que te resulte cómodo.",
    "For urgent pastoral support, you can also call the mission office:": "Para recibir atención pastoral urgente, también puedes llamar a la oficina de la misión:",
    "Name (optional)": "Nombre (opcional)",
    "Email or phone (optional)": "Correo electrónico o teléfono (opcional)",
    "Prayer request *": "Petición de oración *",
    "Share your request...": "Comparte tu petición…",
    "I am happy for the mission team to contact me about this request.": "Acepto que el equipo misionero se ponga en contacto conmigo sobre esta petición.",
    "Send prayer request": "Enviar petición de oración",
    "Please avoid including sensitive medical, financial or identifying information. Share only what is necessary for the team to pray with you.": "Evita incluir información médica, financiera o personal confidencial. Comparte solo lo necesario para que el equipo pueda orar contigo.",
    "Join Us": "Únete a nosotros",
    "Serve with Harvest Field": "Sirve con Harvest Field",
    "Tell us a little about yourself, where you are based, and what inspires you to serve with the mission.": "Cuéntanos un poco sobre ti, dónde resides y qué te motiva a servir con la misión.",
    "Full name *": "Nombre completo *",
    "Phone / WhatsApp *": "Teléfono / WhatsApp *",
    "Email (optional)": "Correo electrónico (opcional)",
    "State *": "Estado *",
    "Local Government Area *": "Área de Gobierno Local *",
    "Area of interest *": "Área de interés *",
    "Choose an area": "Elige un área",
    "Evangelism & Outreach": "Evangelización y actividades de alcance",
    "Youth & Student Ministry": "Ministerio juvenil y estudiantil",
    "Prayer & Discipleship": "Oración y discipulado",
    "Foreign Missions": "Misiones internacionales",
    "Other": "Otro",
    "What inspires you to join the mission? *": "¿Qué te motiva a unirte a la misión? *",
    "Share what inspires you and how you hope to serve...": "Cuéntanos qué te inspira y cómo esperas servir…",
    "Submit interest": "Enviar interés",
    'All rights reserved.': 'Todos los derechos reservados.',
  },
};


const semanticResources = {
  en: {
    "metadata.home.title": "Harvest Field Gospel Mission Int'l — Taking the Nations for Christ",
    "metadata.home.description": "Harvest Field Gospel Mission equips believers for evangelism, discipleship, and rural and foreign missions.",
    "metadata.mission.title": "Our Mission | Harvest Field Gospel Mission",
    "metadata.mission.description": "Learn about our outreach, discipleship, and community work.",
    "metadata.academy.title": "Harvest Field Academy | Harvest Field Gospel Mission",
    "metadata.academy.description": "Discover our vision for equipping believers for discipleship, evangelism and cross-cultural ministry.",
    "metadata.impact.title": "Impact & Stories | Harvest Field Gospel Mission",
    "metadata.impact.description": "Explore field photographs and stories from our outreach and mission work.",
    "metadata.leadership.title": "Leadership | Harvest Field Gospel Mission",
    "metadata.leadership.description": "Learn about the founder and leadership of the ministry.",
    "metadata.gallery.title": "Mission Gallery | Harvest Field Gospel Mission",
    "metadata.gallery.description": "View photographs from school outreaches, rural evangelism, and foreign missions.",
    "metadata.journal.title": "Mission Journal | Harvest Field Gospel Mission",
    "metadata.journal.description": "Read field reports, youth outreach stories, and ministry articles.",
    "metadata.partner.title": "Partner with Us | Harvest Field Gospel Mission",
    "metadata.partner.description": "Learn how to pray, give, and partner with our mission.",
    "metadata.contact.title": "Contact | Harvest Field Gospel Mission",
    "metadata.contact.description": "Contact us for prayer, counselling, outreach invitations, or enquiries.",
    "metadata.join.title": "Join Us | Harvest Field Gospel Mission",
    "metadata.join.description": "Apply to serve with our mission and tell us what inspires you.",
    "metadata.prayer.title": "Prayer Request | Harvest Field Gospel Mission",
    "metadata.prayer.description": "Share a prayer request with our team.",
    "metadata.admin.title": "Staff Sign In | Harvest Field Gospel Mission",
    "metadata.admin.description": "Staff sign-in for the mission blog editor.",
    "metadata.thankYou.title": "Thank You | Harvest Field Gospel Mission",
    "metadata.thankYou.description": "Thank you for contacting Harvest Field Gospel Mission.",
    'nav.groups.about': 'About', 'nav.groups.work': 'Our Work', 'nav.groups.stories': 'Stories', 'nav.groups.connect': 'Connect',
    'nav.home': 'Home', 'nav.about': 'About the Mission', 'nav.leadership': 'Founder & Leadership',
    'nav.academy': 'Harvest Field Academy', 'nav.impact': 'Impact & Stories', 'nav.gallery': 'Field Gallery',
    'nav.journal': 'Journal & Articles', 'nav.prayer': 'Prayer Request', 'nav.join': 'Join the Mission',
    'nav.contact': 'Contact Us', 'nav.support': 'Support the Mission', 'nav.explore': 'Explore the Mission',
    'nav.exploreHint': 'Find a page or get involved', 'nav.close': 'Close navigation', 'nav.open': 'Open navigation menu',
    'nav.selectLanguage': 'Select language', 'nav.supportShort': 'Support Mission',
    'footer.label': 'Site footer', 'footer.description': 'A fellowship of kingdom-minded believers equipped for rural and foreign missions across Nigeria, Northern Cameroon, Tchad Republic, and Côte d’Ivoire.',
    'footer.quickLinks': 'Quick Links', 'footer.about': 'About Us', 'footer.academy': 'Academy',
    'footer.impact': 'Impact & Stories', 'footer.prayer': 'Prayer Request', 'footer.leadership': 'Leadership',
    'footer.gallery': 'Gallery', 'footer.journal': 'Blog', 'footer.join': 'Join Us', 'footer.partner': 'Partner',
    'footer.contactFollow': 'Contact & Follow', 'footer.contact': 'Contact Us', 'footer.whatsapp': 'Message Harvest Field on WhatsApp',
    'footer.whatsappTitle': 'Message us on WhatsApp', 'footer.staff': 'Staff sign in'
  },
  fr: {
    "metadata.home.title": "Harvest Field Gospel Mission — Porter l’Évangile aux nations",
    "metadata.home.description": "Harvest Field Gospel Mission forme les croyants à l’évangélisation, au discipulat et aux missions rurales et internationales.",
    "metadata.mission.title": "Notre mission | Harvest Field Gospel Mission",
    "metadata.mission.description": "Découvrez nos actions d’évangélisation, la formation de disciples et notre engagement communautaire.",
    "metadata.academy.title": "Harvest Field Academy | Harvest Field Gospel Mission",
    "metadata.academy.description": "Découvrez notre vision pour former les croyants au discipulat, à l’évangélisation et au ministère interculturel.",
    "metadata.impact.title": "Impact et témoignages | Harvest Field Gospel Mission",
    "metadata.impact.description": "Découvrez des photos et des récits de nos actions missionnaires.",
    "metadata.leadership.title": "Direction | Harvest Field Gospel Mission",
    "metadata.leadership.description": "Découvrez le fondateur et la direction du ministère.",
    "metadata.gallery.title": "Galerie missionnaire | Harvest Field Gospel Mission",
    "metadata.gallery.description": "Découvrez des photos des actions dans les écoles, de l’évangélisation rurale et des missions internationales.",
    "metadata.journal.title": "Journal missionnaire | Harvest Field Gospel Mission",
    "metadata.journal.description": "Lisez des récits de terrain, des témoignages auprès des jeunes et des articles.",
    "metadata.partner.title": "Soutenir la mission | Harvest Field Gospel Mission",
    "metadata.partner.description": "Découvrez comment prier, donner et soutenir notre mission.",
    "metadata.contact.title": "Contact | Harvest Field Gospel Mission",
    "metadata.contact.description": "Contactez-nous pour une prière, un accompagnement, une invitation missionnaire ou un renseignement.",
    "metadata.join.title": "Rejoindre la mission | Harvest Field Gospel Mission",
    "metadata.join.description": "Proposez votre aide à notre mission et expliquez ce qui vous motive à servir.",
    "metadata.prayer.title": "Demande de prière | Harvest Field Gospel Mission",
    "metadata.prayer.description": "Partagez votre demande de prière avec notre équipe.",
    "metadata.admin.title": "Connexion du personnel | Harvest Field Gospel Mission",
    "metadata.admin.description": "Connexion du personnel à l’éditeur du blog de la mission.",
    "metadata.thankYou.title": "Merci | Harvest Field Gospel Mission",
    "metadata.thankYou.description": "Merci d’avoir contacté Harvest Field Gospel Mission.",
    'nav.groups.about': 'À propos', 'nav.groups.work': 'Nos activités', 'nav.groups.stories': 'Actualités', 'nav.groups.connect': 'Nous contacter',
    'nav.home': 'Accueil', 'nav.about': 'À propos de la mission', 'nav.leadership': 'Fondateur et direction',
    'nav.academy': 'Harvest Field Academy', 'nav.impact': 'Impact et témoignages', 'nav.gallery': 'Galerie de terrain',
    'nav.journal': 'Journal et articles', 'nav.prayer': 'Demande de prière', 'nav.join': 'Rejoindre la mission',
    'nav.contact': 'Nous contacter', 'nav.support': 'Soutenir la mission', 'nav.explore': 'Découvrir la mission',
    'nav.exploreHint': 'Choisissez une page ou engagez-vous', 'nav.close': 'Fermer la navigation', 'nav.open': 'Ouvrir le menu de navigation',
    'nav.selectLanguage': 'Choisir la langue', 'nav.supportShort': 'Soutenir la mission',
    'footer.label': 'Pied de page du site', 'footer.description': 'Une communauté de croyants animés par le Royaume et préparés pour les missions rurales et internationales au Nigeria, dans le nord du Cameroun, en République du Tchad et en Côte d’Ivoire.',
    'footer.quickLinks': 'Liens rapides', 'footer.about': 'À propos', 'footer.academy': 'Académie',
    'footer.impact': 'Impact et témoignages', 'footer.prayer': 'Demande de prière', 'footer.leadership': 'Direction',
    'footer.gallery': 'Galerie', 'footer.journal': 'Blog', 'footer.join': 'Nous rejoindre', 'footer.partner': 'Partenariat',
    'footer.contactFollow': 'Contact et réseaux', 'footer.contact': 'Nous contacter', 'footer.whatsapp': 'Écrire à Harvest Field sur WhatsApp',
    'footer.whatsappTitle': 'Nous écrire sur WhatsApp', 'footer.staff': 'Connexion du personnel'
  },
  es: {
    "metadata.home.title": "Harvest Field Gospel Mission — Llevando las naciones a Cristo",
    "metadata.home.description": "Harvest Field Gospel Mission capacita a creyentes para la evangelización, el discipulado y las misiones rurales e internacionales.",
    "metadata.mission.title": "Nuestra misión | Harvest Field Gospel Mission",
    "metadata.mission.description": "Conoce nuestra labor evangelística, el discipulado y nuestro servicio a las comunidades.",
    "metadata.academy.title": "Harvest Field Academy | Harvest Field Gospel Mission",
    "metadata.academy.description": "Descubre nuestra visión para capacitar a creyentes en discipulado, evangelización y ministerio intercultural.",
    "metadata.impact.title": "Impacto e historias | Harvest Field Gospel Mission",
    "metadata.impact.description": "Explora fotografías e historias de nuestras actividades evangelísticas y misioneras.",
    "metadata.leadership.title": "Liderazgo | Harvest Field Gospel Mission",
    "metadata.leadership.description": "Conoce al fundador y el liderazgo del ministerio.",
    "metadata.gallery.title": "Galería misionera | Harvest Field Gospel Mission",
    "metadata.gallery.description": "Mira fotografías de actividades escolares, evangelización rural y misiones internacionales.",
    "metadata.journal.title": "Diario misionero | Harvest Field Gospel Mission",
    "metadata.journal.description": "Lee informes de campo, historias juveniles y artículos ministeriales.",
    "metadata.partner.title": "Colabora con nosotros | Harvest Field Gospel Mission",
    "metadata.partner.description": "Descubre cómo orar, donar y colaborar con nuestra misión.",
    "metadata.contact.title": "Contacto | Harvest Field Gospel Mission",
    "metadata.contact.description": "Contáctanos para oración, orientación, invitaciones evangelísticas o consultas.",
    "metadata.join.title": "Únete a nosotros | Harvest Field Gospel Mission",
    "metadata.join.description": "Ofrece tu servicio a nuestra misión y cuéntanos qué te motiva a participar.",
    "metadata.prayer.title": "Petición de oración | Harvest Field Gospel Mission",
    "metadata.prayer.description": "Comparte tu petición de oración con nuestro equipo.",
    "metadata.admin.title": "Acceso del personal | Harvest Field Gospel Mission",
    "metadata.admin.description": "Acceso del personal al editor del blog de la misión.",
    "metadata.thankYou.title": "Gracias | Harvest Field Gospel Mission",
    "metadata.thankYou.description": "Gracias por contactar con Harvest Field Gospel Mission.",
    'nav.groups.about': 'Acerca de', 'nav.groups.work': 'Nuestra labor', 'nav.groups.stories': 'Historias', 'nav.groups.connect': 'Conectar',
    'nav.home': 'Inicio', 'nav.about': 'Acerca de la misión', 'nav.leadership': 'Fundador y liderazgo',
    'nav.academy': 'Harvest Field Academy', 'nav.impact': 'Impacto e historias', 'nav.gallery': 'Galería misionera',
    'nav.journal': 'Diario y artículos', 'nav.prayer': 'Petición de oración', 'nav.join': 'Únete a la misión',
    'nav.contact': 'Contáctanos', 'nav.support': 'Apoya la misión', 'nav.explore': 'Explora la misión',
    'nav.exploreHint': 'Encuentra una página o participa', 'nav.close': 'Cerrar navegación', 'nav.open': 'Abrir menú de navegación',
    'nav.selectLanguage': 'Seleccionar idioma', 'nav.supportShort': 'Apoyar la misión',
    'footer.label': 'Pie de página del sitio', 'footer.description': 'Una comunidad de creyentes comprometidos con el Reino y preparados para misiones rurales e internacionales en Nigeria, el norte de Camerún, la República del Chad y Costa de Marfil.',
    'footer.quickLinks': 'Enlaces rápidos', 'footer.about': 'Sobre nosotros', 'footer.academy': 'Academia',
    'footer.impact': 'Impacto e historias', 'footer.prayer': 'Petición de oración', 'footer.leadership': 'Liderazgo',
    'footer.gallery': 'Galería', 'footer.journal': 'Blog', 'footer.join': 'Únete', 'footer.partner': 'Colaborar',
    'footer.contactFollow': 'Contacto y redes', 'footer.contact': 'Contáctanos', 'footer.whatsapp': 'Escribir a Harvest Field por WhatsApp',
    'footer.whatsappTitle': 'Escríbenos por WhatsApp', 'footer.staff': 'Acceso del personal'
  }
} as const;

// i18next is the single translation engine. Existing reviewed translations are
// retained while page-by-page semantic-key migration is completed.
i18next.use(initReactI18next).init({
  resources: {
    en: { translation: semanticResources.en },
    fr: { translation: { ...translations.fr, ...semanticResources.fr } },
    es: { translation: { ...translations.es, ...semanticResources.es } },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});


interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => undefined,
});

const TRANSLATABLE_ATTRIBUTES = new Set([
  'alt',
  'aria-label',
  'aria-roledescription',
  'aria-valuetext',
  'placeholder',
  'title',
]);

function translate(text: string, language: Language): string {
  if (language === 'en') return text;
  const trimmed = text.trim();
  const translated = i18next.t(trimmed, { lng: language, defaultValue: trimmed });
  if (!translated) return text;
  return `${text.slice(0, text.indexOf(trimmed))}${translated}${text.slice(text.indexOf(trimmed) + trimmed.length)}`;
}

function localizeNode(node: React.ReactNode, language: Language): React.ReactNode {
  return React.Children.map(node, (child) => {
    if (typeof child === 'string') {
      return translate(child, language);
    }

    if (!React.isValidElement<{ children?: React.ReactNode }>(child)) {
      return child;
    }

    const localizedProps: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(child.props)) {
      if (TRANSLATABLE_ATTRIBUTES.has(key) && typeof value === 'string') {
        localizedProps[key] = translate(value, language);
      }
    }

    return React.cloneElement(child, localizedProps, localizeNode(child.props.children, language));
  });
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLanguage = window.localStorage.getItem('hf_language');
      return savedLanguage === 'fr' || savedLanguage === 'es' ? savedLanguage : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    void i18next.changeLanguage(language);
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem('hf_language', language);
    } catch {
      // The selected language remains active for the current page.
    }
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export const LocalizedContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  return <>{localizeNode(children, language)}</>;
};
