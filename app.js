
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3001);
    app.set('views', __dirname + '/sencha');
    app.engine('html', require('ejs').renderFile);

    //    app.set('view engine', 'jade');
    // disable layout
//    app.set("view options", {layout: false});
//    // make a custom html template
//    app.register('.html', {
//        compile: function(str, options) {
//            return function(locals) {
//                return str;
//            };
//        }
//    });
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
//    app.use(express.static(path.join(__dirname, 'public', 'sencha')));
    app.use(express.static(__dirname + '/sencha'));
    //app.use('/touch', express.static(__dirname + "/sencha/touch"));
});

//app.register('.html', require('jade'));

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
