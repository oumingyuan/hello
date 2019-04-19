const xml2js = require('xml2js');
const fs = require('fs');
//创建builder的时候参数说明：
//rootName (default root or the root key name)
//renderOpts (default { 'pretty': true, 'indent': ' ', 'newline': '\n' })
//xmldec (default { 'version': '1.0', 'encoding': 'UTF-8', 'standalone': true }
//headless (default: false)
//cdata (default: false): wrap text nodes in <![CDATA[ ... ]]>
const jsonBuilder = new xml2js.Builder({
    rootName: 'bean',
    xmldec: {
        version: '1.0',
        'encoding': 'GBK',
        'standalone': false
    }
}); // jons -> xml

const xmlParser = new xml2js.Parser({explicitArray: false, ignoreAttrs: true}); // xml -> json

const json = {
    name: 'xxxxxx',
    pass: '111111',
    card: 5252452
};

function nameToUpperCase(name) {
    return name.toUpperCase();
}

// jons -> xml
const json2xml = jsonBuilder.buildObject(json);
console.log('json解析成xml:' + json2xml);

// xml -> json
fs.readFile('E:\\Language\\node\\hello\\script\\test.xml', 'utf-8', function (err, result) {

    xmlParser.parseString(result, function (err, result) {

        console.log('xml解析成json:' + JSON.stringify(result));
    });
});
