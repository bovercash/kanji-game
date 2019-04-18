var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path')

const PORT = process.env.PORT || 3000

connect().use(serveStatic(path.join(__dirname, 'dist'),
     {'index': ['index.html']})).listen(PORT, function(){
    console.log(`Server running on ${PORT}...`);
});