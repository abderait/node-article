var mongo = require('mongodb')
  , Server = mongo.Server
  , Db = mongo.Db
  , BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('articledb', server);
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'articledb' db !");
        db.collection('articles', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'articledb' collection doesn't exist. creating it with sample data...");
               // populateDB();
            }
        });
    }
});


/*FRONT*/
exports.getHome = function(req, res) {
    res.render("index");
};
exports.getArticleAll = function(req, res) {
    db.collection('articles', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.render("articles", {items : items});
        });
    });
};

exports.getArticleById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving article : ' + id);
    db.collection('articles', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.render("article", {item : item});
        });
    });
};
  
/*API*/
exports.apiGetArticleAll = function(req, res) {
    db.collection('articles', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.apiGetArticleById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving article : ' + id);
    db.collection('articles', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};


/*ADMIN*/
exports.adminGetHome = function(req, res) {
    res.render("admin/index");
};

exports.adminGetArticleAll = function(req, res) {
    db.collection('articles', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.render("admin/articles", {articles : items} );
        });
    });
};

exports.adminArticleAdd = function(req, res) {
    res.render("admin/addArticle");
};

exports.adminArticleAdded = function(req, res) {
    var article = req.body;
    console.log('Adding article : ' + JSON.stringify(article));
    db.collection('articles', function(err, collection) {
        collection.insert(article, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
               //res.send(result[0]);
               res.redirect('/admin/article');
            }
        });
    });
};


exports.adminArticleUpdate = function(req, res) {
    var id = req.params.id;
    db.collection('articles', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.render("admin/updateArticle", {article : item});
        });
    });
};

exports.adminArticleUpdated = function(req, res) {
    var id = req.params.id;
    var article = req.body;
    console.log('Updating articles: ' + id);
    console.log(JSON.stringify(article));
    db.collection('articles', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, article, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating articles: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.redirect("/admin/article");
            }
        });
    });
}

exports.adminDeleteArticle = function(req, res) {
    var id = req.params.id;
    console.log('Deleting articles: ' + id);
    db.collection('articles', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.redirect("/admin/article");
            }
        });
    });
};


/*
var populateDB = function() {
    var articles = [
    {
        title: "Laborum nostrud sit eiusmod exercitation dolore",
        resume: "Fugiat aliquip excepteur eiusmod ullamco commodo et deserunt non est minim tempor laboris. Dolor cillum duis eu laborum. ",
        content: "Cupidatat pariatur pariatur ullamco ea sunt Lorem. Laborum culpa commodo consequat laborum.\r\nNon ex mollit ad deserunt laborum duis velit nulla laboris fugiat occaecat. Aliqua exercitation et excepteur velit adipisicing do qui nostrud est consequat. Non aliquip aliquip veniam eu nisi ut adipisicing irure aliquip incididunt Lorem cupidatat. Culpa cillum voluptate veniam enim do et ea exercitation deserunt.",
        picture: "http://lorempixel.com/g/600/350/technics/",
        published: "09/03 08:48",
        author: "Lee Scott",
        _id: "532b7c6b328e0458251761e9"
    },
    {
        title: "Laborum nostrud sit eiusmod exercitation dolore",
        resume: "Fugiat aliquip excepteur eiusmod ullamco commodo et deserunt non est minim tempor laboris. Dolor cillum duis eu laborum. ",
        content: "Cupidatat pariatur pariatur ullamco ea sunt Lorem. Laborum culpa commodo consequat laborum.\r\nNon ex mollit ad deserunt laborum duis velit nulla laboris fugiat occaecat. Aliqua exercitation et excepteur velit adipisicing do qui nostrud est consequat. Non aliquip aliquip veniam eu nisi ut adipisicing irure aliquip incididunt Lorem cupidatat. Culpa cillum voluptate veniam enim do et ea exercitation deserunt.",
        picture: "http://lorempixel.com/g/600/350/technics/",
        published: "09/03 08:48",
        author: "Lee Scott",
        _id: "532b7c6b328e0458251761e9"
    }
    ];
    db.collection('articles', function(err, collection) {
        collection.insert(articles, {safe:true}, function(err, result) {});
    });
};*/