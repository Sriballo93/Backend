const express = require('express');
const router = express.Router();
const shows = require('../domain/services/service-show');
const characters = require('../domain/services/service-character');

router.get('/shows', shows.getAll);
router.post('/shows', shows.Create);
router.get('/characters', characters.getAll);
router.post('/characters', characters.Create);
router.delete('/characters/:id', characters.DeleteId);

module.exports = router;
