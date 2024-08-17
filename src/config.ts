import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config';
import { LinkPreset } from './types/config';

export const siteConfig: SiteConfig = {
  title: `Victor's Blog`,
  subtitle: 'Home',
  lang: 'en', // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: false, // Display the credit text of the banner image
      text: '', // Credit text to be displayed
      url: '', // (Optional) URL link to the original artwork or artist's page
    },
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
    {
      src: '/favicon/Icon.png',
    },
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/Voraes', // Internal links should not include the base path, as it is automatically added
      external: true, // Show an external link icon and will open in a new tab
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/victor-moraes-mendes/', // Internal links should not include the base path, as it is automatically added
      external: true, // Show an external link icon and will open in a new tab
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/me.JPG', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Victor Mendes',
  bio: 'Powered by Coffee, Books, Code, Music and a dash of Curiosity.',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/voraes',
    },
    {
      name: 'Linkedin',
      icon: 'mdi:linkedin',
      url: 'https://www.linkedin.com/in/victor-moraes-mendes/',
    },
    {
      name: 'Email Me',
      icon: 'mdi:email',
      url: 'mailto:victor.inscriptio@gmail.com',
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'MIT',
  url: 'https://choosealicense.com/licenses/mit/',
};
