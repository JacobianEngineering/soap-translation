# soap translation

Calls a SOAP endpoint and returns the response. Nothing fancy here. By default expects SOAP endpoint to be located at: `http://localhost:9393/wsdl`.

## quickstart

To get up and running do this:

    npm install -g node-lambda
    node-lambda run -j event.json

## deploying
To deploy to a specific environment, run this:

    $ AWS_PROFILE=jeng node-lambda deploy -f development.env

*NOTE*: specififing the `development.env` will set all the proper lambda environment variables.