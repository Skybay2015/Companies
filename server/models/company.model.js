const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
   company: {
      name: { type: String, required: true },
      website: { type: String, required: true },
      video: { type: String, required: true },
   },
   users: [
      {
         name: String,
         surname: String,
         email: String,
         position: String,
      },
   ],
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
