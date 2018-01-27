var amazon = require('amazon-product-api')

module.exports = (app) => {

  // LOOKUP
  app.get('/ingredients/:search', (req, res) => {
    // res.json({message: "Success!"});
    const text = req.params.search

    var awsClient = amazon.createClient({
      awsId: process.env.AWSAccessKeyId,
      awsSecret: process.env.AWSSecretKey,
      awsTag: process.env.AWSTag
    });

    // BrowseNode: 11091801

    // awsClient.itemLookup({
    // idType: 'UPC',
    // itemId: '884392579524',
    // responseGroup: "ItemAttributes,BrowseNodes"
    awsClient.itemSearch({
      keywords: text,
      browseNodeId: '11965861',
      searchIndex: 'MusicalInstruments',
      responseGroup: "ItemAttributes,Images,BrowseNodes"
    }).then(function(results){
      const cleaned = results.map(item => item.ItemAttributes[0].Title[0])
      res.json(cleaned)
    }).catch(function(err){
      console.log("There was an error: ", err.Error[0].Message)
      res.status(500).send('Something broke!', err)
    });
  })



}
