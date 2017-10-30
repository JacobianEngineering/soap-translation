exports.handler = (event, context, callback) => {
  var soap = require('soap');

  var method = event["context"]["resource-path"].match(/\/(\w+)/)[1] + 'Async'
  var querystring = event["params"]["querystring"]
  var body = event["body-json"]
  
  soap.createClientAsync(process.env.SOAP_URL).then((client) => {
    return client[method](querystring);
  }).then((result) => {
    console.log(result);
    callback(null,result);
  })
  .catch(function(err) {
    console.error(err)
    callback(err);
  });
};