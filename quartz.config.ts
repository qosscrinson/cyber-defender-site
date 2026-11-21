import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Киберзащитник",
        pageTitleSuffix: " | Киберзащитник",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "qosscrinson.github.io/cyber-defender-site",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Oswald",
        body: "Inter",
        code: "JetBrains Mono",
      },
            colors: {
        lightMode: {
          light: "#f4f6f4",
          lightgray: "#dde2dd",
          gray: "#9ba89e",
          darkgray: "#2e3630",
          dark: "#141b16",
          secondary: "#1d7a3e",
          tertiary: "#2c9455",
          highlight: "rgba(29, 122, 62, 0.12)",
          textHighlight: "#39d35355",
        },
        darkMode: {
          light: "#0d120e",
          lightgray: "#26332a",
          gray: "#4d5c51",
          darkgray: "#c8d3ca",
          dark: "#eaf2ec",
          secondary: "#39d353",
          tertiary: "#6ee7a0",
          highlight: "rgba(57, 211, 83, 0.12)",
          textHighlight: "#39d35355",
        },
      },

    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
