const router = require('express').Router()
const ScrapeController = require('../controllers/ScrapeController')

router.post('/salve_info', ScrapeController.saveInfo)
router.post('/get_info', ScrapeController.getInfo)
router.get('/get_info/:id', ScrapeController.getInfo)

module.exports = router
