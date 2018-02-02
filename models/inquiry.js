var mongoose = require('mongoose')
var Schema = mongoose.Schema

var InquirySchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  firstName: { type: String },
  lastName: { type: String },
  company: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String }
})

InquirySchema.pre('save', function(next){
  // SET createdAt AND updatedAt
  var now = new Date()
  this.updatedAt = now
  if ( !this.createdAt ) {
    this.createdAt = now
  }
  next()
})

module.exports = mongoose.model('Inquiry', InquirySchema);
