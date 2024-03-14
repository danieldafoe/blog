const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function(eleventyConfig) {
  // Copypasta CSS
  // eleventyConfig.addPassthroughCopy("css.css");

  // Copypasta JS
  eleventyConfig.addPassthroughCopy("js.js");

  // Copypasta assets
  eleventyConfig.addPassthroughCopy("assets/**.*");

  // Inclusive language
  eleventyConfig.addPlugin(inclusiveLangPlugin);

  // Watchers
  eleventyConfig.addWatchTarget("./css/");

  // Collections
  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./posts/*.md')
    .filter(draftPosts)
    .reverse();
  });

  // Filters
  eleventyConfig.addFilter("prettyDate", (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const newDate = new Date(date);

    return `${months[newDate.getMonth()]} ${newDate.getDate()+1}, ${newDate.getFullYear()}`;
  });

  eleventyConfig.addFilter("limit", (arr) => {
    return arr.slice(0, 4);
  });

  // {
  //  page: { date } // Eleventy.page
  //  data: { title, tags, date } // data in frontmatter
  //  content: { } // string of html
  // }
  eleventyConfig.addFilter("sortCollection", (posts) => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  });
};

function draftPosts(post) {
  return !(post.url).includes('drafts');
}