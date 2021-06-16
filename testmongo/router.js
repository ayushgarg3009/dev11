const express = require('express')

const resumeApi = require('./api')

const router = express.Router()

router.post('/resume', resumeApi.createResume)
// router.put('/resume/:id', resumeApi.updateResume)
// router.delete('/resume/:id', resumeApi.deleteResume)
// router.get('/resume/:id', resumeApi.getResumeById)
// router.get('/resumes', resumeApi.getResumes)

module.exports = router;
