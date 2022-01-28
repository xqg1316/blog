const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://xqg1316.github.io', // 修改为Github Pages地址
  baseUrl: '/', // Web界面显示时URL后面的"/xxx/"路径, 这里是个人是配置为"/"
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xqg1316', // github的用户名, https://github.com/xqg1316/blog
  projectName: 'blog', // github的项目名称, https://github.com/xqg1316/blog

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // 文档
	docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // 请把这个远程仓库换成自己的远程仓库, 默认为"editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',"
	  // 项目放到gitee可以快速访问
	  //editUrl: 'https://github.com/xqg1316/blog/tree/master/docs/',
          editUrl: 'https://gitee.com/xqg1316/blog/tree/master/docs/',
        }, 
	// 博客
        blog: {
          showReadingTime: true,
          // 请把这个远程仓库换成自己的远程仓库, 默认为"editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',"
	  // 项目放到gitee可以快速访问
          //editUrl: 'https://github.com/xqg1316/blog/tree/master/blog/',
	  editUrl: 'https://gitee.com/xqg1316/blog/tree/master/blog/',
        },
	// API, 格式如下
	/** api: {
	  editUrl: 'https://gitee.com/xqg1316/blog/tree/master/api/',
	}, */
	// 主题
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
