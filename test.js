var wikia = require('index');

var rainbowsix = new wikia('rainbowsix');

rainbowsix
    .getArticleList('Operators')
    .then(articles => {
        console.log(articles);
    });