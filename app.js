const express 	= require('express');
var proxy 		= require('http-proxy-middleware');
const app 		= express();
const path 		= require('path');
const request 	= require('request');

app.use('/assets', proxy({target:'http://klubba.dev2.gipl.inet/front/dist/klubba/', changeOrigin: true}));
app.use('/*.ttf', proxy({target:'http://klubba.dev2.gipl.inet/front/dist/klubba/assets/fonts/', changeOrigin: true}));
app.use('**/*.js', proxy({target:'http://klubba.dev2.gipl.inet/front/dist/klubba/', changeOrigin: true}));
app.use('**/*.css', proxy({target:'http://klubba.dev2.gipl.inet/front/dist/klubba/', changeOrigin: true}));


/* -- if we need to send data */
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/dist/klubba/');
app.get('*', function(req, res) {

/* res.render('index', { metadata: metadata})*/
	res.render('index')
});


/* -- if we need to not send data */
// End before filter.
app.listen(21015, () => {
	console.log("Port is running 21015");
});






