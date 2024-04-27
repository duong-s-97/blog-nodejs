const Course = require("../../models/Course");

class SiteController {
  // [GET] /news
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (err) {
      res.status(400).json({ error: "ERROR!!!" });
    }
  }

  // res.render("home");

  // [GET] /news/:slug
  search(req, res) {
    // console.log("get /news/slug");
    res.render("search");
  }
}

module.exports = new SiteController();
