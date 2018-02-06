var Inquiry = require('../models/inquiry')
var axios = require('axios')

module.exports = (app) => {

  // CREATE
  app.post('/inquiry', (req, res) => {

    var inquiry = new Inquiry(req.body)
    inquiry.save((err, inquiry) => {
      if (err) {
        console.log("Server Error:" + err)
      } else {
        console.log("Response from Inquiry/Create: ", inquiry)
        res.status(200)
        return res.json({
          msg: 'Inquiry added successfully!',
          inquiry
        }
      )}
    })
  })

  // INDEX
  app.get('/inquiry', (req, res) => {
    Inquiry.findAll()
    .then((inquiries) => {
      console.log("Response from Inquiry/Index: ", inquiries)
      res.json(inquiries)
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })

  // SHOW
  app.get('/inquiry/:id', (req, res) => {
    const inquiryId = req.params.id
    Inquiry.findById(inquiryId)
    .then((inquiry) => {
      console.log("Response from Inquiry/Show: ", inquiry)
      res.json(inquiry)
    })
    .catch((err) => {
      if (err) {
        console.log("Uhh oh!! ", err.message)
        res.error(err)
      }
    })
  })

  // UPDATE
  app.put('/inquiry/:id/update', (req, res) => {
    const inquiryId = req.params.id
    const inquiry = req.body
    Inquiry.update(inquiry, { where: { id: inquiryId } })
    .then((inquiry) => {
      console.log("Response from Inquiry/Update: ", inquiry)
      res.status(200)
      res.json({
        msg: 'Inquiry updated successfully!',
        inquiry
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
  app.delete('/inquiries/:id', (req, res) => {
    const inquiryId = req.params.id
    Inquiry.destroy({ where: { id: inquiryId } })
    .then((response) => {
      console.log("Response from Inquiry/Delete: ", response)
      res.status(200)
      res.json({
        msg: 'Inquiry deleted successfully!',
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
