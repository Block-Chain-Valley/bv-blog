const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulPost(sort: { createdAt: DESC }) {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your posts.`, result.errors);
    return;
  }

  const postTemplate = path.resolve(`src/templates/Post.tsx`);
  result.data.allContentfulPost.nodes.forEach((node) => {
    createPage({
      path: `/post/${node.slug}`,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
