// =============================================================
// SITE CONTENT — edit everything in this file to personalise
// the portfolio. No coding knowledge needed.
// =============================================================

export const site = {

  // ----------------------------------------------------------
  // BASICS
  // ----------------------------------------------------------
  name: 'Gareth Clifford',           // e.g. 'Alex Morgan'
  initials: 'GC',              // used in the nav logo, e.g. 'AM'
  role: 'Content Marketing and Brand Leader',

  // One bold line that sums up what you do and the value you bring
  positioning: 'An experienced content marketing and brand leader.\nCombining audience needs with compelling stories underpinned by business objectives.',

  // Your single strongest credential — a stat, a claim, a fact
  heroCredential: '100M+ content views delivered across three continents',

  // ----------------------------------------------------------
  // CONTACT LINKS  (replace # with your real URLs)
  // ----------------------------------------------------------
  email: 'gareth.clifford85@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gareth-clifford-26bb1255/',
  twitter: null,  // set to null to hide
  instagram: null,                              // set to a URL or null
  cvUrl: null,  // e.g. '/cv.pdf' — add your CV to the public/ folder

  // ----------------------------------------------------------
  // SHOWREEL VIDEOS  (three videos shown side by side)
  // For each video replace the url with your embed link:
  //   YouTube:  https://www.youtube.com/embed/VIDEO_ID
  //   Vimeo:    https://player.vimeo.com/video/VIDEO_ID
  // ----------------------------------------------------------
  showreelTitle: 'Brand and content showreel',
  showreelSubtitle: 'A selection of campaigns, launches and editorial work.',
  showreelVideos: [
    {
      url: 'https://www.youtube.com/embed/lojYRX8qC9o',  // replace VIDEO_ID
      title: 'Campaign showreel 2024',
      description: 'Brand campaigns and large-scale content launches.',
    },
    {
      url: 'https://www.youtube.com/embed/KXpyky-NLyY',  // replace VIDEO_ID
      title: 'Editorial and storytelling',
      description: 'Long-form editorial work and documentary content.',
    },
    {
      url: 'https://www.youtube.com/embed/iquQBqD2Gs4',  // replace VIDEO_ID
      title: 'Social-first series',
      description: 'Short-form and social video — LinkedIn, YouTube, TikTok.',
    },
  ],

  // ----------------------------------------------------------
  // ABOUT
  // Write two or three short paragraphs. Each is a separate string.
  // ----------------------------------------------------------
  about: {
    bio: [
      'I\'m a content and brand leader with over a decade of experience building audiences and shaping how organisations are perceived. I\'ve worked across the full range, from startups to global brands. The throughline has always been the same: people remember a good story long after they\'ve forgotten a good campaign plan.',
      'At English Heritage I grew the YouTube channel from 1,000 subscribers to 1.5 million, mostly on the strength of The Victorian Way, a series I created, wrote and directed that turned a Victorian cook into an unlikely global star and has now passed 100 million views. The same approach, pairing genuine history with whatever audiences were already searching for, took a run of history-inspired makeup tutorials past 14 million views.',
      'I bring that same thinking to every brief: what\'s the story here and how do we tell it better than anyone expects?',
    ],
    portraitAlt: 'Portrait of Gareth',
    // /images/portrait.png
    // e.g. '/images/portrait.jpg'
    // Leave as null to show a styled placeholder
    portraitSrc: '/images/Portrait.png',

    skills: [
      'Brand Strategy',
      'Content Strategy',
      'Editorial Direction',
      'Campaign Development',
      'Audience Growth',
      'Team Leadership',
      'Copywriting',
      'Storytelling',
      'Creative Direction',
      'Social and Digital',
    ],
  },

  // ----------------------------------------------------------
  // SELECTED WORK
  // Add 6–8 projects. Each has:
  //   title      — project name
  //   result     — one punchy result-led line (what happened)
  //   detail     — one or two sentences revealed on hover
  //   ctaLabel   — button label, e.g. 'View case study'
  //   ctaUrl     — URL the button links to (set to null to hide the button)
  //   gradient   — CSS gradient used as placeholder until you add an image
  //   imageSrc   — path to your image, e.g. '/images/project1.jpg'
  //                leave as null to keep the gradient
  //   imageAlt   — descriptive alt text for accessibility
  //   tags       — array of short category labels
  // ----------------------------------------------------------
  projects: [
    {
      title: 'Video Series Creation & Direction',
      result: 'Writing, producing and directing content built to scale',
      detail: 'I create, write, produce and direct episodic video series shaped by audience demand and trending search. For English Heritage, The Victorian Way turned a Victorian cook into a viral star and passed 100 million views, redefining how a national charity brand could reach new audiences.',
      ctaLabel: 'Watch The Victorian Way',
      ctaUrl: 'https://youtube.com/playlist?list=PLx2QMoA1Th9deXXbo7htq21CUPqEPPGuc&si=F_dWjxdzqvuLXk1T',  // replace null with your URL, e.g. 'https://...'
      gradient: 'linear-gradient(135deg, #1a0533 0%, #c6ff00 100%)',
      imageSrc: '/images/global-brand-relaunch.png',
      imageAlt: 'Woman in period costume viewed through shelves of ceramics',
      tags: ['Brand Strategy', 'Campaign'],
    },
    {
      title: 'Interactive Digital Storytelling',
      result: 'Editorial, video and community brought together as campaign assets',
      detail: 'I build interactive digital platforms that combine editorial storytelling, video, user submissions and live engagement. A Map of Myths, Legends & Folklore mapped English folklore into a central campaign asset that drove acquisition and built brand awareness.',
      ctaLabel: 'Explore the Map of Legends',
      ctaUrl: 'https://mythsmap.english-heritage.org.uk/',
      gradient: 'linear-gradient(135deg, #0d2d3d 0%, #ff4d6a 100%)',
      imageSrc: '/images/map-of-myths.png',
      imageAlt: 'A hand-illustrated fantasy map of myths and legends across Britain',
      tags: ['Editorial', 'Audience Growth'],
    },
    {
      title: 'Trend-Led Social Content',
      result: 'Turning cultural curiosity into viral reach',
      detail: 'I spot cultural trends and turn them into content that travels, without compromising brand heritage. A series of history-inspired makeup tutorials tapped a trending appetite for beauty content and grew to over 14 million views by pairing authentic history with audience demand.',
      ctaLabel: 'Watch Historical Makeup Tutorials',
      ctaUrl: 'https://youtube.com/playlist?list=PLx2QMoA1Th9dyD5zTlnkvOVZuFYKFXYT9&si=51CU8bX3285c90kH',
      gradient: 'linear-gradient(135deg, #0a1628 0%, #c6ff00 100%)',
      imageSrc: '/images/makeup-tutorials.png',
      imageAlt: 'Close-up of red lipstick being applied with a brush',
      tags: ['Campaign', 'Creative Direction'],
    },
    {
      title: 'Brand Photography & Creative Direction',
      result: 'Building in-house content production studios',
      detail: 'I creative-direct and shoot food, product and lifestyle photography, and build the systems that keep it flowing. At Fothergills I developed an in-house studio from scratch, plus a shared asset system giving every team self-serve access to new, on-brand imagery.',
      ctaLabel: 'View gallery sample',
      ctaUrl: null,
      // Place images in public/images/content-system/ named 01.jpg, 02.jpg … 22.jpg
      gallery: [
        '/images/content-system/01.jpg',
        '/images/content-system/02.jpg',
        '/images/content-system/03.jpg',
        '/images/content-system/04.jpg',
        '/images/content-system/05.jpg',
        '/images/content-system/06.jpg',
        '/images/content-system/07.jpg',
        '/images/content-system/08.jpg',
        '/images/content-system/09.jpg',
        '/images/content-system/10.jpg',
        '/images/content-system/11.jpg',
        '/images/content-system/12.jpg',
        '/images/content-system/13.jpg',
        '/images/content-system/14.jpg',
        '/images/content-system/15.jpg',
        '/images/content-system/16.jpg',
        '/images/content-system/17.jpg',
        '/images/content-system/18.jpg',
        '/images/content-system/19.jpg',
        '/images/content-system/20.jpg',
        '/images/content-system/21.jpg',
      ],
      gradient: 'linear-gradient(135deg, #1e0a28 0%, #ffb800 100%)',
      imageSrc: '/images/content-system.jpg',
      imageAlt: 'Berry and yoghurt pot with fresh fruit on a green tiled surface',
      tags: ['Strategy', 'Leadership'],
    },
    {
      title: 'Copywriting & Brand Voice',
      result: 'Over a decade writing and defining brand voices',
      detail: 'For more than ten years I have written copy that flexes brand tone of voice, from playful to premium, across the full conversion funnel. I also set the standard, authoring the brand and tone of voice guidelines that keep teams consistent. I have a knack for translating complex subjects, from science and history to Stonehenge and horticulture, into accessible copy that works for audiences, builds campaign awareness and drives action.',
      ctaLabel: 'View case study',
      ctaUrl: null,
      gradient: 'linear-gradient(135deg, #0d2d1b 0%, #c6ff00 100%)',
      imageSrc: '/images/copywriting.jpg',
      imagePosition: 'center 75%',
      imageAlt: 'Aerial view of Stonehenge at golden hour',
      tags: ['Social', 'Video'],
    },
    {
      title: 'Event-Led Content Production',
      result: 'Maximising shoots to bank content at scale',
      detail: 'I turn live events into high-volume content opportunities, planning and directing on-the-ground capture that banks weeks of assets in a single day. I\'ve run lean shoots that gather photography, video and social content across multiple brands at once, keeping costs low and output high.',
      ctaLabel: 'Watch Chelsea Flower Show highlights',
      ctaUrl: 'https://youtu.be/KXpyky-NLyY?si=796i4Z2F-E4VCIyf',
      gradient: 'linear-gradient(135deg, #1a0d3d 0%, #ff4d6a 100%)',
      imageSrc: '/images/Joanna.png',
      imageFlip: true,
      imageAlt: 'Woman at the RHS Chelsea Flower Show',
      tags: ['Events', 'Content Production'],
    },
  ],

  // ----------------------------------------------------------
  // TICKER (scrolling strip below the hero name)
  // Short phrases separated by ·  — edit or extend as you like
  // ----------------------------------------------------------
  ticker: [
    'Brand Strategy',
    'Content Leadership',
    'Creative Direction',
    'Editorial Vision',
    'Audience Growth',
    'Storytelling',
    'Campaign Development',
    'Team Building',
  ],
};
