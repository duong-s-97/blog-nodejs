const Course = require("../../models/Course");
const { mongooseToObect } = require("../../util/mongoose");

class CourseController {
  // [GET] /courses/:slug
  courseDetail(req, res, next) {
    Course.findOne({})
      .then((course) => {
        // res.json(course);
        res.render("courses/courseDetail", { course: mongooseToObect(course) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
