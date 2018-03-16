var Course = require('../models/course');

// Using app as the param, we can pass this file back to express

module.exports = function(app) {
  app.get("/", function(req, res, next) {
    res.render("main/home");
  });

  app.get('/courses', function(req, res, next) {
    Course.find({}, function(err, courses) {
      res.render('courses/courses', { courses: courses});
    });
  });
};
