/* TODO : collection mongodb */
var apiList = [
{"type" : "article", "name" : "getArticleAll", "url" : "/api/article" },
{"type" : "article", "name" : "getArticleById", "url" : "/api/article/1" },
];

exports.getApiList = function(req, res) {
	console.log("getApiList");
	res.render('index', {items : apiList});
};
