const uniqid = require("uniqid");
class Blog {
  constructor(author, title, content, links, imageUrl) {
    this.id = uniqid();
    this.author = author;
    this.title = title;
    this.content = content;
    this.links = links;
    this.imageUrl = imageUrl;
  }
}
module.exports = Blog;
