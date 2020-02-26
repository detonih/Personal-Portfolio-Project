const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.render("about");
});

router.get('/skills', (req, res) => {
  return res.render("skills");
});

router.get('/skills/js', (req, res) => {
  return res.render("js")
});

router.get('/skills/node', (req, res) => {
  return res.render("node")
});

router.get('/skills/react', (req, res) => {
  return res.render("react")
});

router.get('/skills/express', (req, res) => {
  return res.render("express")
});

router.get('/skills/html', (req, res) => {
  return res.render("html")
});

router.get('/skills/css', (req, res) => {
  return res.render("css")
});

module.exports = router;