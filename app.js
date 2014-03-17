var express = require('express')
  , index = require('./routes');

var app = express();
var port = 3000;

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'twig');
    app.set('twig options', {strict_variables: false});

    app.use(express.logger('dev')); 
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
});


/* Api home */
	app.get('/', index.getApiList);
/* Api article json  */
	app.get('/api/article', index.getApiArticleAll);
	app.get('/api/article/:id', index.getApiArticleById);


/*Front*/
	app.get('/article', index.getArticleAll);
	app.get('/article/:id', index.getArticleById);

app.listen(3000);
console.log('localhost:3000');
