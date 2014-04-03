var express = require('express')
  , index = require('./routes')
  , app = express()
  , port = 8080;

app.configure(function(){
    app.set('views', __dirname + '/views'); 
    app.set('view engine', 'twig');
    app.set('twig options', {strict_variables: false});
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
});


/* Front */
app.get('/', index.getHome);
app.get('/article', index.getArticleAll);
app.get('/article/:id', index.getArticleById);

/* API */
app.get('/api/article', index.apiGetArticleAll);
app.get('/api/article/:id', index.apiGetArticleById);
//app.put('/api/article/:id', index.updateArticle);
//app.delete('/api/article/:id', index.deleteArticle);

/*ADMIN*/
app.get('/admin', index.adminGetHome);
app.get('/admin/article', index.adminGetArticleAll);
app.get('/admin/article/add', index.adminArticleAdd);
app.post('/admin/article/add', index.adminArticleAdded);
app.get('/admin/article/update/:id', index.adminArticleUpdate);
app.post('/admin/article/update/:id', index.adminArticleUpdated);
app.get('/admin/article/delete/:id', index.adminDeleteArticle);

app.listen(port);
console.log('localhost:'+port);
