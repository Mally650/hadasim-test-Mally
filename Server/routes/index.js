const express = require('express');
const router = express.Router();
const patient= require('./Patient');

router.get('/', (req, res) => {
    res.send('wellcome and well health')
})
router.use('/patient', patient);


module.exports = router;