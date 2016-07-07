var form = require('./lib/form.js');
var yaml = require('js-yaml');
var fs = require('fs');

var yamlObject = yaml.load(fs.readFileSync("./html.yaml"));
if(yamlObject.hasOwnProperty('form')){
    var formHtml = form.generateForm(yamlObject.form);
    console.log(formHtml);
}

