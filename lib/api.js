"use strict";
var https       = require('https');
var querystring = require('querystring');
var pkgjson     = require('../package.json');

var omise_api_version = '2014-07-27';
var auth = null;

function httpAuthorization(config) {
  var base64EncodedPubKey = 'Basic ' + new Buffer(config['publicKey'] + ':').toString('base64');
  return {
    httpBasic: function(){
      return base64EncodedPubKey;
    }
  }
};

function response_handler(req, cb) {
  if (typeof cb !== "function")
    return;
  req.on('response',
  function(res) {
    var resp = '';
    res.setEncoding('utf8');
    res.on('data',
    function(chunk) {
      resp += chunk;
     });
    res.on('end',
    function() {
      try {
        resp = JSON.parse(resp);
        cb(null, resp);
      } catch(err) {
        cb(err, {});
      }
    });
  });
}

function _httpsRequest(method, path, data, callback) {
  var req_data = querystring.stringify(data);
  var request_options = {
    host: 'vault.omise.co',
    path: path,
    method: method,
    headers: {
      'Authorization': auth,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'OmiseNode/'+pkgjson.version+' OmiseAPI/'+omise_api_version,
      'Content-Length': Buffer.byteLength(req_data)
    }
  };

  var req = https.request(request_options);
  response_handler(req, callback);
  req.write(req_data);
  req.end();
}

function post(path, data, callback) {
  _httpsRequest('POST', path, data, callback);
}

var api = module.exports = {
  post: function(path, data, callback) {
    post(path, data, callback);
  },
  configure: function(config) {
    auth = httpAuthorization(config).httpBasic();
  }
};

module.exports = api;