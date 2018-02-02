var Contractor = require('../models/contractor')
var axios = require('axios')

module.exports = (app) => {

  // Return's Make School Profile
  app.get('/mslink/:slug', (req, res) => {
    axios.get('https://www.makeschool.com/portfolios/' + req.params.slug +'.json')
    .then(response => {
      console.log("Loaded portfolio: ",response)
      if (response.status === 200) {
        res.json(response.data)
      }
    })
    .catch(error => {
      console.log('error!', error)
      console.log(error);
    })
  })

  // Make School Portfolios INDEX
  app.get('/allmspf', (req, res) => {
    axios.get('https://www.makeschool.com/portfolios.json')
    .then(response => {
      console.log("--- Collected",response.data.length, "profiles from MakeSchool.com. ---")
    response.data.map((profile) => {
      process.stdout.write(" | " + profile.first_name + " " + profile.last_name)
    })
      if (response.status === 200) {
        res.json(response.data)
      }
    })
    .catch(error => {
      console.log('error!', error)
      console.log(error);
    })
  })

  // CREATE
  app.post('/contractors/create', (req, res) => {

    var contractor = new Contractor(req.body)
    contractor.save((err, contractor) => {
      if (err) {
        console.log("Server Error:" + err)
      } else {
        console.log("Response from Contractor/Create: ", contractor)
        res.status(200)
        return res.json({
          msg: 'Contractor added successfully!',
          contractor
        }
      )}
    })
  })

  // INDEX
  app.get('/contractors', (req, res) => {
    db.Contractor.findAll()
    .then((contractors) => {
      console.log("Response from Contractor/Index: ", contractors)
      res.json(contractors)
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })

  // SHOW
  app.get('/contractors/:id', (req, res) => {
    const contractorId = req.params.id
    db.Contractor.findById(contractorId)
    .then((contractor) => {
      console.log("Response from Contractor/Show: ", contractor)
      res.json(contractor)
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })

  // UPDATE
  app.put('/contractors/:id/update', (req, res) => {
    const contractorId = req.params.id
    const contractor = req.body
    db.Contractor.update(contractor, { where: { id: contractorId } })
    .then((contractor) => {
      console.log("Response from Contractor/Update: ", contractor)
      res.status(200)
      res.json({
        msg: 'Contractor updated successfully!',
        contractor
      })
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })

  // DELETE
  app.delete('/contractors/:id', (req, res) => {
    const contractorId = req.params.id
    db.Contractor.destroy({ where: { id: contractorId } })
    .then((response) => {
      console.log("Response from Contractor/Delete: ", response)
      res.status(200)
      res.json({
        msg: 'Contractor deleted successfully!',
        qty: response
      })
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })


}
