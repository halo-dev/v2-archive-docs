const darkCodeTheme = require("prism-react-renderer/themes/palenight");
const VersionsArchived = require("./versionsArchived.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Halo 2.x 已归档文档",
  tagline: "Halo 2.x 已归档的文档站点",
  url: "https://v2-archive-docs.halo.run",
  baseUrl: "/",
  favicon: "img/favicon-96x96.png",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  organizationName: "halo-dev", // Usually your GitHub org/user name.
  projectName: "halo", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/halo-dev/v2-archive-docs/edit/main/",
          routeBasePath: "/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          lastVersion: "2.15",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Halo 2.x 已归档文档",
        logo: {
          alt: "Halo Logo",
          src: "https://halo.run/upload/2021/03/Adaptive256-463ca9b92e2d40268431018c07735842.png",
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "tutorial",
            label: "使用指南",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "developer",
            label: "开发者指南",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsBefore: [
              {
                label: "Halo 2.x 最新版本文档",
                href: "https://docs.halo.run",
              },
            ],
            dropdownItemsAfter: [
              ...Object.entries(VersionsArchived).map(
                ([versionName, versionUrl]) => ({
                  label: versionName,
                  href: versionUrl,
                })
              ),
              {
                to: "https://v1.legacy-docs.halo.run",
                label: "1.x",
              },
              {
                to: "/versions",
                label: "All versions",
              },
            ],
          },
          {
            href: "https://halo.run",
            label: "官网",
            position: "right",
          },
          {
            href: "https://bbs.halo.run",
            label: "论坛",
            position: "right",
          },
          {
            href: "https://github.com/halo-dev/halo",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://gitee.com/halo-dev/halo",
            label: "Gitee",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © 2023 凌霞软件. Built with Docusaurus.`,
        links: [
          {
            title: "关于",
            items: [
              {
                label: "官网",
                href: "https://halo.run",
              },
              {
                label: "应用市场",
                href: "https://halo.run/store/apps",
              },
              {
                label: "GitHub 组织",
                href: "https://github.com/halo-dev",
              },
              {
                label: "Gitee 组织",
                href: "https://gitee.com/halo-dev",
              },
              {
                label: "Server Status",
                href: "https://status.halo.run",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "官方论坛",
                href: "https://bbs.halo.run",
              },
              {
                label: "微信公众号",
                href: "https://halo.run/upload/2021/03/B3C27F16-4890-4633-81CC-20BA4B28F94F-2415126255c749b290312ca22d9bdeb0.jpeg",
              },
              {
                label: "GitHub Issues",
                href: "https://github.com/halo-dev/halo/issues",
              },
              {
                label: "Telegram Channel",
                href: "https://t.me/halo_dev",
              },
              {
                label: "Telegram Group",
                href: "https://t.me/HaloBlog",
              },
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java"],
      },
      zoom: {
        selector: ".markdown :not(a) > img",
      },
    }),
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath) {
          if (existingPath.startsWith("/next/")) {
            return [
              existingPath.replace("/next/", "/2.0.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.1.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.2.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.3.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.4.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.5.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.6.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.7.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.8.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.9.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.10.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.11.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.12.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.13.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.14.0-SNAPSHOT/"),
              existingPath.replace("/next/", "/2.15.0-SNAPSHOT/"),
            ];
          }
          return undefined;
        },
      },
    ],
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
};

module.exports = config;
