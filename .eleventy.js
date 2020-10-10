module.exports = function(eleventyConfig) {
// Set default template engines
  htmlTemplateEngine: "njk"
// Add passthroughs
eleventyConfig.addPassthroughCopy("css");
  
}