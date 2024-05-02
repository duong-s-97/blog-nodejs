const newsRoute = require("./newsRoute");
const siteRoute = require("./siteRoute");
const courseRoute = require("./courseRoute");

function route(app) {
  app.use("/news", newsRoute);
  app.use("/courses", courseRoute);
  app.use("/", siteRoute);
}

module.exports = route;
