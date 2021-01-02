const fs = require("fs");
const path = require("path");
const Blogs = require("../models/blogModel.js");
const uniqid = require("uniqid");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const fileName = path.join(__dirname, "..", "data", "blogs.json");
const blogs = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const upload = require("../controllers/imageMulter");

//get all blogs
const getAllBlogs = (req, res, next) => {
  let result = blogs.filter((blog) => {
    return Object.keys(req.query).every((param) => {
      return blog[param] == req.query[param];
    });
  });
  if (result) {
    sendResponse(200, "Successful", result, req, res);
  } else {
    sendErrorMessage(
      new AppError(404, "Not Found", "Request Failed"),
      req,
      res
    );
  }
};

//get a blog by id
const getById = (req, res) => {
  const result = blogs.find((blog) => {
    return blog.id == req.params.id;
  });
  if (result) {
    sendResponse(200, "Successful", [result], req, res);
  } else {
    sendErrorMessage(
      new AppError(404, "Not Found", "task not available"),
      req,
      res
    );
  }
};

Create New Blog
const createBlog = (req, res) => {
  const result = path.join(__dirname, "..", req.file.path);
  let newBlog = new Blogs(
    req.body.author,
    req.body.title,
    req.body.content,
    req.body.links,
    result
  );
  blogs.push(newBlog);
  fs.writeFile(fileName, JSON.stringify(blogs, null, 2), (err) => {
    if (err) {
      sendErrorMessage(
        new AppError(500, "Internal Error", "Error in Completing Request"),
        req,
        res
      );
      return err;
    }
    sendResponse(201, "Successful", newBlog, req, res);
  });
};

//delete blog by id
const deleteById = (req, res) => {
  const result = blogs.indexOf(blogs.id == req.param.id);

  if (result) {
    blogs.splice(result, 1);
    fs.writeFile(fileName, JSON.stringify(blogs, null, 2), (err) => {
      sendResponse(200, "Successfull", [result], req, res);
    });
  } else {
    sendErrorMessage(new AppError(404, "Not Found", "No such blog"), req, res);
  }
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getById = getById;
module.exports.createBlog = createBlog;
module.exports.deleteById = deleteById;
