import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "BEST Messina",
  tagline: "Learn. Travel. Connect.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://bestmessina.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
        label: "ᴇɴ",
      },
      it: {
        label: "ɪᴛ",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.png",
    navbar: {
      title: "BEST Messina",
      logo: {
        alt: "BEST Messina Logo",
        src: "img/logomark_best.svg",
      },
      items: [
        {
          label: "Home",
          to: "/",
          position: "right",
        },

        {
          type: "dropdown",
          label: "Discover BEST",
          position: "right",
          items: [
            {
              to: "identity",
              label: "Our identity",
            },

            {
              to: "services",
              label: "Services",
            },

            {
              to: "travel_with_best",
              label: "Travel with BEST",
            },

            {
              to: "the_motivation_letter",
              label: "The Motivation Letter",
            },
          ],
        },

        {
          to: '/blog',
          label: 'News',
          position: 'right'
        },

        {
          type: "dropdown",
          label: "Contact us",
          position: "right",
          items: [
            {
              to: "join_us",
              label: "Join us",
            },

            {
              to: "collaborate_with_us",
              label: "Collaborate with us",
            },
          ],
        },

        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Contact us",
          items: [
            {
              label: "messina@best-eu.org",
              href: "mailto:messina@best-eu.org",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/bestmessina/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/LocalBESTGroupMessina/",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/best-messina",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
