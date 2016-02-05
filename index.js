var collections = require('metalsmith-collections');
var dateFormatter = require('metalsmith-date-formatter');
var drafts = require('metalsmith-drafts');
var layouts = require('metalsmith-layouts');
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var prism = require('metalsmith-prism');
var sass = require('metalsmith-sass');


Metalsmith(__dirname)
  .use(sass({
    outputStyle: 'compressed'
  }))

  .use(drafts())
  .use(collections({
    blogPosts: {
      pattern: 'posts/*'
      , sortBy: 'published'
      , reverse: true
    },
    portfolioPieces: {
      pattern: 'portfolio/*'
      , sortBy: 'order'
      , reverse: true
    }
  }))
  .use(dateFormatter({
    dates: [
      {
        key: 'published'
        , format: 'MMMM Do, YYYY'
      }
    ]
  }))
  .use(markdown())
  .use(prism())
  .use(permalinks({
    linksets: [{
      match: { collection: 'blogPosts' },
      pattern: 'posts/:title'
    }]
  }))
  .use(layouts('jade'))

  .build(function(err) {
    if (err) throw err;
  });
