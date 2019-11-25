import CMS from "netlify-cms-app"

/**
 * Optionally pass in a config object. This object will be merged into `config.yml` if it exists
 */

CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "rogermparent/Gatsby-NetlifyCMS-MDX-component-test"
    },

    media_folder: "static/assets",
    public_folder: "assets",

    collections: [
      {
        name: "blog",
        label: "Blog",
        label_singular: "Post",
        folder: "content/blog",
        extension: "mdx",
        format: "frontmatter",
        create: true,
        fields: [
          { name: "path", label: "Path" },
          { name: "date", label: "Date", widget: "date" },
          { name: "title", label: "Title" },
          { name: "description", label: "Description" },
          { name: "body", label: "Body", widget: "markdown" },
        ]
      }
    ]
  },
})

