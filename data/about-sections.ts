export interface AboutSection {
  id: string;
  title: string;
  shortTitle: string;
  previewImage: string;
  description: string;
  images: string[];
  video?: {
    type: 'youtube' | 'tiktok' | 'local';
    url: string;
  };
  icon: string;
  color: string;
}

export const aboutSections: AboutSection[] = [
  {
    id: 'food',
    title: 'Our Signature Dishes',
    shortTitle: 'Food',
    previewImage: '/images/about/food-preview.jpg',
    description:
      'From sizzling jollof rice to loaded fries and tender chicken, every dish at Streetman Flames is crafted with passion and quality ingredients. We serve authentic street food that keeps you coming back for more.',
    images: [
      '/images/about/food-1.jpg',
      '/images/about/food-2.jpg',
      '/images/about/food-3.jpg',
      '/images/about/food-4.jpg',
      '/images/about/food-5.jpg',
      '/images/about/food-6.jpg',
    ],
    video: {
      type: 'tiktok',
      url: 'https://vm.tiktok.com/ZMAGCfMak/',
    },
    icon: '🍗',
    color: '#FF9F0D',
  },
  {
    id: 'kitchen',
    title: 'Our Kitchen',
    shortTitle: 'Kitchen',
    previewImage: '/images/about/kitchen-preview.jpg',
    description:
      'Step behind the scenes into our clean, modern kitchen where every meal is prepared fresh daily. We maintain the highest standards of hygiene and quality control to ensure every bite is perfect.',
    images: [
      '/images/about/kitchen-1.jpg',
      '/images/about/kitchen-2.jpg',
      '/images/about/kitchen-3.jpg',
      '/images/about/kitchen-4.jpg',
      '/images/about/kitchen-5.jpg',
      '/images/about/kitchen-6.jpg',
    ],
    video: {
      type: 'tiktok',
      url: 'https://vm.tiktok.com/ZMAGCfMak/',
    },
    icon: '👨‍🍳',
    color: '#8B0000',
  },
  {
    id: 'team',
    title: 'Our Team',
    shortTitle: 'Team',
    previewImage: '/images/about/team-preview.jpg',
    description:
      'Meet the passionate team behind Streetman Flames. From our skilled chefs to our friendly service staff, everyone works together to bring you the best street food experience at UPSA.',
    images: [
      '/images/about/team-1.jpg',
      '/images/about/team-2.jpg',
      '/images/about/team-3.jpg',
      '/images/about/team-4.jpg',
      '/images/about/team-5.jpg',
      '/images/about/team-6.jpg',
    ],
    video: {
      type: 'tiktok',
      url: 'https://vm.tiktok.com/ZMAGCfMak/',
    },
    icon: '👥',
    color: '#FF9F0D',
  },
  {
    id: 'space',
    title: 'Our Location',
    shortTitle: 'Location',
    previewImage: '/images/about/space-preview.jpg',
    description:
      'Find us at UPSA, Behind Hostel C - your convenient stop for amazing street food. Our spot is designed for quick pickup, making it easy for students to grab fresh meals on the go.',
    images: [
      '/images/about/space-1.jpg',
      '/images/about/space-2.jpg',
      '/images/about/space-3.jpg',
      '/images/about/space-4.jpg',
      '/images/about/space-5.jpg',
      '/images/about/space-6.jpg',
    ],
    video: {
      type: 'tiktok',
      url: 'https://vm.tiktok.com/ZMAGCfMak/',
    },
    icon: '📍',
    color: '#8B0000',
  },
  {
    id: 'process',
    title: 'Our Process',
    shortTitle: 'Process',
    previewImage: '/images/about/process-preview.jpg',
    description:
      'Quality starts with fresh ingredients and careful preparation. Watch how we transform raw ingredients into delicious meals through our proven cooking process that prioritizes taste and freshness.',
    images: [
      '/images/about/process-1.jpg',
      '/images/about/process-2.jpg',
      '/images/about/process-3.jpg',
      '/images/about/process-4.jpg',
      '/images/about/process-5.jpg',
      '/images/about/process-6.jpg',
    ],
    video: {
      type: 'tiktok',
      url: 'https://vm.tiktok.com/ZMAGCfMak/',
    },
    icon: '🔥',
    color: '#FF9F0D',
  },
  {
    id: 'story',
    title: 'Our Story',
    shortTitle: 'Story',
    previewImage: '/images/about/story-preview.jpg',
    description:
      'Streetman Flames was born from a simple mission: bring authentic, quality street food to UPSA students at prices they can afford. What started as a small venture has grown into a favorite campus spot.',
    images: [
      '/images/about/story-1.jpg',
      '/images/about/story-2.jpg',
      '/images/about/story-3.jpg',
      '/images/about/story-4.jpg',
      '/images/about/story-5.jpg',
      '/images/about/story-6.jpg',
    ],
    video: {
      type: 'tiktok',
      url: 'https://vm.tiktok.com/ZMAGCfMak/',
    },
    icon: '📖',
    color: '#8B0000',
  },
];

export const getAboutSection = (id: string): AboutSection | undefined => {
  return aboutSections.find((section) => section.id === id);
};

export const getAboutSectionByIndex = (index: number): AboutSection => {
  return aboutSections[index % aboutSections.length];
};