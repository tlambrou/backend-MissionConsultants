var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContractorSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String, required: true },
  email: { type: String, required: true },
  linkedIn: { type: String, unique: true },
  github: { type: String, unique: true },
  instagram: { type: String, unique: true },
  dribbble: { type: String, unique: true },
  facebook: { type: String, unique: true },
  twitter: { type: String, unique: true },
  about: { type: String, unique: true },
  bio: { type: String, unique: true },
  photoURL: { type: String, unique: true },

  slug: { type: String, unique: true },
  website: { type: String, unique: true }
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
