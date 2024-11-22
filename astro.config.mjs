// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://burokrat-site.github.io/",
  integrations: [
    starlight({
      title: "Burokrat Docs",
      social: {
        github: "https://github.com/orgs/burokrat-site/repositories",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Local Development", slug: "guides/local-development" },
            { label: "Setting up VPS", slug: "guides/setup" },
            { label: "Installing Coolify", slug: "guides/coolify" },
            { label: "Deployment", slug: "guides/deployment" },
            { label: "Domain", slug: "guides/domain" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
