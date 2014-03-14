

/* API Articles */

exports.getApiArticleAll = function(req, res) {
	console.log("getApiArticleAll");
	res.send(articles);
};

exports.getApiArticleById = function(req, res) {
	var id = req.params.id;
	console.log('getApiArticleById : ' + id);
	res.send(articles[id]);
};

exports.getArticleAll = function(req, res) {
	console.log("getArticleAll");
	res.render('articles', {items : articles});
};

exports.getArticleById = function(req, res) {
	var id = req.params.id;
	console.log('getArticleById : ' + id);
	res.render('article', {item : articles[id]});
};






/*
* 	Données : todo : mise en place de mongodb
*	http://www.json-generator.com/
[
    '{{repeat(2, 9)}}',
    {
        id: '{{index}}',
        title: '{{lorem(1, sentences)}}',
        picture: 'http://placehold.it/600x300',
        resume: '{{lorem(3,sentences)}}',
        content: '{{lorem(4,paragraphs)}}',
        published: '{{date(dd-MM-YYYY hh:mm)}}',
        author : '{{firstName(male)}} {{surname}}',
        tags: [
            '{{repeat(3)}}',
            '{{lorem(1)}}'
        ]
    }
]

*/
var articles = [
    {
        "id": 0,
        "title": "Amet esse voluptate aliqua cillum do est ut aute fugiat dolor amet et ipsum amet",
        "picture": "http://lorempixel.com/g/600/350/technics/",
        "resume": "Laborum nostrud sit eiusmod exercitation dolore eiusmod. Nisi anim sunt labore incididunt labore laborum in labore. Reprehenderit ea qui ullamco sint et Lorem mollit eiusmod tempor est incididunt fugiat.",
        "content": "Incididunt eiusmod anim dolor proident exercitation ad. Commodo irure cupidatat ad mollit aute non anim eiusmod anim sit. Culpa consequat enim est ad id laboris. Dolor excepteur dolore pariatur duis aute nulla pariatur. Fugiat aliquip excepteur eiusmod ullamco commodo et deserunt non est minim tempor laboris. Dolor cillum duis eu laborum. Enim deserunt sunt ullamco consectetur veniam esse aliqua sunt et consectetur magna nisi.\r\nAdipisicing mollit adipisicing est amet. Cupidatat pariatur pariatur ullamco ea sunt Lorem. Laborum culpa commodo consequat laborum.\r\nNon ex mollit ad deserunt laborum duis velit nulla laboris fugiat occaecat. Aliqua exercitation et excepteur velit adipisicing do qui nostrud est consequat. Non aliquip aliquip veniam eu nisi ut adipisicing irure aliquip incididunt Lorem cupidatat. Culpa cillum voluptate veniam enim do et ea exercitation deserunt. Commodo ad ullamco irure ipsum. Laborum ex laborum minim in Lorem velit culpa enim eu exercitation magna quis sit proident. Duis Lorem laboris nulla proident sit elit.\r\nDolor aliqua ullamco labore nulla est. Cupidatat excepteur cupidatat tempor magna enim in ullamco ullamco et. Eu reprehenderit commodo reprehenderit occaecat laborum. Ex nisi aliqua velit aliquip ullamco anim fugiat Lorem velit tempor exercitation anim aute. Commodo dolore aute non commodo ex magna. Ad anim dolore cillum ea proident magna ex duis quis dolore est.\r\n",
        "published": "10-07-1995 02:24",
        "author": "Le Scott",
        "tags": [
            "Lorem",
            "ex",
            "velit"
        ]
    },
    {
        "id": 1,
        "title": "Anim mollit cillum amet ut incididunt pariatur adipisicing ad exercitation",
        "picture": "http://lorempixel.com/g/600/350/technics/",
        "resume": "Sint eiusmod officia dolor aliqua anim aliqua dolor voluptate cupidatat. Non et eu proident do irure et dolor deserunt quis nulla eu enim reprehenderit. Proident mollit officia voluptate veniam nostrud.",
        "content": "Non tempor Lorem voluptate amet reprehenderit nostrud officia. Voluptate mollit labore cupidatat in aliquip sit laboris labore dolore ullamco. Enim magna ad qui officia id sunt cupidatat duis.\r\nEnim enim labore ea minim. Laboris ea aliquip id dolore. Mollit consectetur do eu excepteur et eiusmod ut et aute occaecat deserunt quis ex. Est do proident tempor reprehenderit.\r\nCillum proident amet eiusmod laboris excepteur. Nulla do incididunt aliquip anim. Minim labore labore eu sit culpa do cillum id sint eiusmod. Adipisicing culpa elit nostrud culpa proident ullamco consectetur. Do magna aute occaecat cupidatat duis eiusmod sunt in.\r\nExcepteur reprehenderit aute veniam proident minim irure ut voluptate. Laborum eu culpa exercitation deserunt aute ea. Fugiat sit ut quis tempor est nisi Lorem.\r\n",
        "published": "11-03-1988 06:33",
        "author": "Small Parks",
        "tags": [
            "duis",
            "eu",
            "duis"
        ]
    },
    {
        "id": 2,
        "title": "Exercitation velit irure et tempor in voluptate ullamco do quis in commodo laborum",
        "picture": "http://lorempixel.com/g/600/350/technics/",
        "resume": "Proident deserunt ad tempor ex duis enim amet mollit dolor cillum do ea veniam labore. Ullamco ullamco do do sit laborum irure magna cillum laboris. Cupidatat aliqua anim magna reprehenderit officia amet ut consectetur.",
        "content": "Qui dolore consequat pariatur veniam voluptate sit aliquip eu proident proident mollit. Sunt nisi enim nulla in. In sint deserunt aute reprehenderit dolore quis voluptate consectetur adipisicing anim officia ex officia. Dolor sit non commodo aliquip.\r\nCupidatat dolor exercitation eu tempor. Esse do quis non aute minim et incididunt sit id quis est aliquip veniam. Irure qui laboris voluptate commodo reprehenderit ipsum proident. Reprehenderit exercitation in reprehenderit nisi ad do sint pariatur sint dolore.\r\nAute sit consequat duis nisi deserunt irure amet in excepteur incididunt deserunt officia nostrud nostrud. Veniam dolore eiusmod consectetur pariatur non ut officia nisi labore. Ex excepteur Lorem adipisicing veniam. Et non commodo occaecat anim mollit et deserunt ea consequat aute et voluptate id. Duis do sunt eu consequat ex irure amet aute officia.\r\nLaboris exercitation quis deserunt veniam. Ipsum ad qui irure elit aliqua. Laborum do do aute magna nostrud eiusmod culpa. Id incididunt consequat consequat exercitation non ullamco eiusmod. Laboris mollit magna quis eu.\r\n",
        "published": "04-01-2012 14:45",
        "author": "Dominguez Delaney",
        "tags": [
            "duis",
            "ea",
            "dolor"
        ]
    },
    {
        "id": 3,
        "title": "Magna nisi nulla minim laboris officia elit Lorem dolore aliquip",
        "picture": "http://lorempixel.com/g/600/350/technics/",
        "resume": "Pariatur laborum laborum qui Lorem incididunt esse anim id consequat proident laborum occaecat quis excepteur. Velit nisi excepteur anim non commodo quis duis culpa deserunt magna voluptate ea. Non officia aute tempor ex consectetur laboris enim id fugiat ex excepteur enim proident quis.",
        "content": "Irure sunt ea id consequat do quis ipsum minim est proident minim anim eu. Pariatur sint non ipsum magna duis tempor elit sit aliquip. Proident voluptate voluptate commodo occaecat consectetur esse consectetur.\r\nNisi qui tempor amet minim sit id id nulla aliqua. Dolore quis eu dolor amet ullamco qui velit amet elit sunt laborum eu aliqua. Aliquip adipisicing cupidatat labore cillum proident voluptate eu ullamco. Nulla dolore laboris veniam duis minim occaecat pariatur pariatur pariatur cupidatat laboris.\r\nIpsum id occaecat fugiat minim. Do nulla sit ullamco culpa culpa qui anim velit sint reprehenderit amet. Exercitation officia ex occaecat cillum velit id esse nostrud ipsum laboris dolor ex.\r\nPariatur deserunt mollit ad aute commodo. Enim aute ut quis velit ad amet aliquip. Aute sint do ad cupidatat dolor commodo voluptate nostrud ut in magna consectetur cupidatat adipisicing.\r\n",
        "published": "23-05-1990 09:31",
        "author": "Williams Kaufman",
        "tags": [
            "minim",
            "laboris",
            "excepteur"
        ]
    },
    {
        "id": 4,
        "title": "Quis occaecat qui duis commodo ipsum Lorem quis mollit",
        "picture": "http://lorempixel.com/g/600/350/technics/",
        "resume": "Non eu occaecat ea consequat eu eu enim. Fugiat irure aliqua quis anim officia magna reprehenderit nostrud aliquip quis qui consectetur. Velit officia officia ea tempor veniam proident.",
        "content": "Commodo proident veniam culpa ullamco irure adipisicing dolore esse voluptate aliqua est. Velit magna est esse deserunt pariatur dolore voluptate ipsum ad minim. Magna magna pariatur ullamco irure et occaecat ad est aliquip qui sit. Cupidatat laboris tempor nostrud deserunt laboris et.\r\nCommodo eiusmod nostrud sunt dolore excepteur cupidatat cillum tempor. Pariatur mollit consectetur proident id minim qui. Sunt dolore laborum nulla labore excepteur occaecat proident. Lorem est incididunt in consectetur id eiusmod Lorem nostrud ex labore sint dolore et. Tempor consequat mollit nostrud sit in sunt ullamco laborum eiusmod tempor. Tempor cupidatat sunt enim in in laborum fugiat veniam esse duis excepteur.\r\nExercitation velit Lorem incididunt qui. Esse aliquip incididunt in magna qui ipsum culpa incididunt incididunt incididunt proident ipsum. Quis ut anim incididunt aute nulla ea. Proident veniam reprehenderit fugiat do cillum nisi voluptate. Anim laborum Lorem amet officia reprehenderit voluptate quis ullamco. Velit officia ad quis tempor aute ut incididunt duis laboris esse cupidatat consectetur.\r\nDeserunt nostrud dolor cillum anim duis eu deserunt ullamco ex quis est officia minim. Dolor esse tempor adipisicing excepteur ipsum nostrud. Commodo ex consequat tempor fugiat do esse ut nostrud sit est mollit pariatur id reprehenderit. Tempor dolore duis amet duis occaecat eiusmod Lorem aliquip sunt duis proident id nostrud. Do est pariatur dolor qui velit qui ad velit dolor elit est est. Voluptate quis dolore culpa sint irure voluptate est dolor qui veniam dolor ipsum.\r\n",
        "published": "28-04-2002 16:33",
        "author": "Rollins Best",
        "tags": [
            "eu",
            "labore",
            "minim"
        ]
    },
    {
        "id": 5,
        "title": "Dolore ea enim excepteur dolor est proident qui ea qui consequat irure ipsum irure",
        "picture": "http://lorempixel.com/g/600/350/technics/",
        "resume": "Nulla consectetur labore excepteur nostrud consequat labore ipsum culpa amet. Id amet tempor cupidatat aliquip consequat qui ea enim incididunt dolor proident fugiat minim. Mollit laboris amet excepteur ad culpa cillum deserunt ad.",
        "content": "Velit labore enim cupidatat et enim labore in velit. Mollit mollit veniam consectetur Lorem. Nulla exercitation enim ullamco occaecat nulla tempor dolor nostrud.\r\nNulla aute esse nostrud exercitation. Elit sit ad ea laboris. Proident voluptate voluptate nisi aliqua officia aute proident. Velit nostrud veniam irure quis in esse sunt ullamco pariatur est do. Est nisi dolore cupidatat eiusmod fugiat labore.\r\nConsequat proident quis ut non dolor. Laborum Lorem aliquip laboris aute exercitation laboris. Consectetur incididunt eu ea ullamco reprehenderit consectetur fugiat excepteur et dolore dolor in. Ea do aliqua eiusmod aliqua duis consectetur enim exercitation. Ullamco et nisi aliquip laborum exercitation voluptate. In excepteur commodo adipisicing non.\r\nUllamco pariatur minim mollit occaecat consequat ullamco. Sint velit id dolore id velit cupidatat sunt incididunt pariatur veniam qui tempor do pariatur. Deserunt nisi esse nulla aliqua cillum adipisicing laboris fugiat deserunt ex voluptate id nisi.\r\n",
        "published": "30-04-2011 03:42",
        "author": "Long Washington",
        "tags": [
            "cillum",
            "fugiat",
            "aute"
        ]
    },
    {
        "id": 6,
        "title": "Ex veniam voluptate est qui exercitation",
        "picture": "http://lorempixel.com/g/600/350/technics/",
        "resume": "Sunt cupidatat labore magna id ex enim fugiat sint consequat ipsum ad. Tempor consequat consectetur fugiat velit est deserunt esse deserunt velit ex dolore sunt incididunt cillum. Amet quis sunt laboris quis ad esse et aliquip ipsum reprehenderit.",
        "content": "Sint anim nulla esse ad incididunt nulla excepteur aute quis Lorem est ad. Quis anim veniam occaecat consequat est cupidatat excepteur pariatur excepteur anim non amet magna cupidatat. Dolor proident enim velit ea voluptate eiusmod amet laboris. Irure esse exercitation dolor id ipsum cupidatat nostrud do. Nisi adipisicing qui labore non exercitation est adipisicing nisi laborum ea duis.\r\nLaborum ex officia dolore aliquip dolore do amet magna elit nostrud anim veniam aliqua elit. Cillum mollit minim dolore laborum id voluptate excepteur amet magna laboris. Aute quis quis ex qui cupidatat et consectetur qui quis esse velit non nostrud dolore.\r\nId veniam minim commodo laborum. Excepteur eu officia sint Lorem officia dolore. Aliqua nisi dolor est quis laboris. Exercitation eiusmod fugiat ullamco adipisicing officia laboris nostrud ad excepteur eiusmod ullamco reprehenderit. Voluptate ullamco ad ut labore. Elit esse sit do fugiat in qui id anim. Elit aliqua eu ad deserunt est consectetur in.\r\nIpsum nostrud consequat culpa commodo ut id quis enim incididunt commodo in reprehenderit aliqua. Veniam commodo tempor voluptate cupidatat magna et veniam ea aliquip. Cupidatat occaecat laboris irure aliqua aliqua culpa dolore nulla pariatur. Dolor fugiat enim exercitation culpa labore laborum eiusmod.\r\n",
        "published": "15-01-1992 10:03",
        "author": "Rhodes Ruiz",
        "tags": [
            "elit",
            "sit",
            "ad"
        ]
    }
];
