var express = require('express'), 
article = require('./routes/article'),
home = require('./routes/home');

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
	app.get('/', home.getApiList);
/* Api article json  */
	app.get('/api/article', article.getApiArticleAll);
	app.get('/api/article/:id', article.getApiArticleById);


/*Front*/
	app.get('/article', article.getArticleAll);
	app.get('/article/:id', article.getArticleById);

app.listen(3000);
console.log('localhost:3000');
