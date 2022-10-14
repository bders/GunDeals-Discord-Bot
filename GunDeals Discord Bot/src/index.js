'use strict';
const snoowrap = require('snoowrap');

// NOTE: The following examples illustrate how to use snoowrap. However, hardcoding
// credentials directly into your source code is generally a bad idea in practice (especially
// if you're also making your source code public). Instead, it's better to either (a) use a separate
// config file that isn't committed into version control, or (b) use environment variables.

// Create a new snoowrap requester with OAuth credentials.
// For more information on getting credentials, see here: https://github.com/not-an-aardvark/reddit-oauth-helper
const r = new snoowrap({
  userAgent: 'gundeals scraper by u/spartykeys',
  clientId: 'uFfrpfYW6iLK36r5hkSfWw',
  clientSecret: 'sPQSAUEtdaSOgSQVs1xkfL6XSSjTIQ',
  refreshToken: '1745842461875-9fJXF9uQPFRWprDr1oudoUIWuwhJoA'
});

r.getSubreddit('gundeals').Map(post => post.title).then(console.log);