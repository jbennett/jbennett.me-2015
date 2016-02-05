var collections = require('metalsmith-collections');
var drafts = require('metalsmith-drafts');
var layouts = require('metalsmith-layouts');
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var prism = require('metalsmith-prism');
var sass = require('metalsmith-sass');


Metalsmith(__dirname)
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
  .use(markdown())
  .use(prism())
  .use(layouts('jade'))
  .use(sass({
    outputStyle: 'compressed'
  }))
  .build(function(err) {
    if (err) throw err;
  });
