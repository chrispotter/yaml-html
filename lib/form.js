//generate form .initForm(array generated from yaml)
//generate input
//generate checkbox
//generate radio
//generate select
//generate multiple select
var yaml = require("js-yaml");

var exports = module.exports = {};

exports.generateForm = function(yamlObject){
    var formHtml = "<form>";
    for (var key in yamlObject) {
        if (yamlObject.hasOwnProperty(key)) {
            var element = yamlObject[key];
            switch(element.type){
                case "checkbox":
                    formHtml += this.generateCheckbox(key, element);
                    break;
                case "radio":
                    formHtml += this.generateRadio(key, element);
                    break;
                case "select":
                    formHtml += this.generateSelect(key, element);
                    break;
                case "multiple":
                    formHtml += this.generateMultiple(key, element);
                    break;
                default:
                    formHtml += this.generateInput(key, element);
                    break;

            }
        }
    };
    formHtml += "</form>";

    return formHtml;
};

exports.generateInput = function(label, yamlInput){
    if(yamlInput.hasOwnProperty('label')&&yamlInput.hasOwnProperty('type')){

        inputHtml = "<label for=\""+label+"_input\">"+yamlInput.label+"</label>" +
        "<input type=\""+yamlInput.type+"\" id=\""+label+"_input\" />";
        return inputHtml
    }

};

exports.generateCheckbox = function(label, yamlCheckbox){
    return yamlCheckbox;
};

exports.generateRadio = function(label, yamlCheckbox){
    return yamlCheckbox;
};

exports.generateSelect = function(label,yamlSelect){
    return yamlSelect;
};

exports.generateMultiple = function(label, yamlMultiple){
    return yamlMultiple;
};