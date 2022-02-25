
const Projects = require("../db/models/projects");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
      const projectsResponse = await Projects.findAll();
      console.log(projectsResponse, 'this is the response')
      res.send(projectsResponse)
  } catch (error) {
    next(error)
  }
})


module.exports = router;
