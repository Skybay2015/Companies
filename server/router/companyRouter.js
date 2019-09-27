const router = require('express').Router();
const Company = require('../models/company.model');

router.route('/').get((req, res) => {
   Company.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
   const { company } = req.body;
   const { users } = req.body;
   const newCompany = new Company({ company, users });

   newCompany
      .save()
      .then(() => {
         res.send('Saved');
         console.log('Saved');
      })
      .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;
