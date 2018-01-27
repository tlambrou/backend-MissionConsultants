var search = require('youtube-search');
const API_KEY = process.env.YouTubeKey

module.exports = (app) => {

  // Preview Youtube Search
  app.get('/preview/search/:term', (req, res) => {
    console.log("Here is the term: ",req.params.term)
    const term = req.params.term
    var opts = {
      maxResults: 20,
      key: API_KEY,
      type: 'video'
    };

    search(term, opts, function(err, results) {
      if(err) return console.log(err);

      console.dir(results);
      res.json(results)
    });
  })

}
