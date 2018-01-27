var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContractorSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  slug: { type: String, required: true },
  website: { type: String, required: true }
})

ContractorSchema.pre('save', function(next){
  // SET createdAt AND updatedAt
  var now = new Date()
  this.updatedAt = now
  if ( !this.createdAt ) {
    this.createdAt = now
  }
  next()
})

module.exports = mongoose.model('Contractor', ContractorSchema);
