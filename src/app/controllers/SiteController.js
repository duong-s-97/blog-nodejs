const Course = require("../../models/Course");
const { mutipleMongooseToObect } = require("../../util/mongoose");

class SiteController {
  // [GET] /news
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: mutipleMongooseToObect(courses) });
      })
      .catch(next);
  }

  // [GET] /news/:slug
  search(req, res) {
    // console.log("get /news/slug");
    res.render("search");
  }
}

module.exports = new SiteController();
