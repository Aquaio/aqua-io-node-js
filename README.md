# aqua-io-node-js

Official Aqua-io API library client for node.js/io.js. Currently covers Aqua.io's ICD-9 and ICD-10 APIs.

## Getting Started

To use the Aqua.io API, you need to have proper API credentials, which you can get for free by [signing up](https://aqua.io/developers/sign_up).

You may also want to read up on [the API documentation](https://aqua.io/codes).

## Installation

Make sure you have [npm](https://npmjs.org) installed.

```bash
$ npm install aqua-io
```

#### Versions

Works with [ 0.8 / 0.9 / 0.10 / 0.11 ]

## Usage

```js
var aquaIo = require('aqua-io');

// Then we instantiate a client (as shown below)
```

### Build a client

##### Get an access token using your aqua.io credentials

```js
var client = aquaIo.client({
    client_id: '09a8b7',
    client_secret: '1a2b3'
}, clientOptions);

var token = client.accessToken().retrieve()
```

##### All other API calls require an access token

```js
var client = aquaIo.client({
    acess_token: token.body.access_token
}, clientOptions);
```

### Client Options

The following options are available while instantiating a client:

 * __base__: Base url for the api
 * __user_agent__: Default user-agent for all requests
 * __headers__: Default headers for all requests
 * __request_type__: Default format of the request body

### Response information

__All the callbacks provided to an api call will receive the response as shown below__

```js
// You can also omit the 'methodOptions' param below
client.klass('args').method('args', methodOptions, function (err, response) {
    if (err) console.log(err);

    response.code;
    // >>> 200

    response.headers;
    // >>> {'x-server': 'apache'}
}
```

##### JSON response

When the response sent by server is __json__, it is decoded into a hash

```js
response.body;
// >>> [{"short_description": "INFECTIOUS AND PARASIT...", "api_path": "icd9/001-139", "name": "001-139", "description": "INFECTIOUS AND PARASITIC DISEASES (001-139)"},  ... ]
```

### Method Options

The following options are available while calling a method of an api:

 * __headers__: Headers for the request
 * __query__: Query parameters for the url
 * __body__: Body of the request
 * __request_type__: Format of the request body

### Request body information

Set __request_type__ in options to modify the body accordingly

##### RAW request

When the value is set to __raw__, don't modify the body at all.

##### JSON request

When the value is set to __json__, JSON encode the body.

### ICD-9 api

Returns an ICD-9 code.

```js
var icd9 = client.icd9();
```

##### All top-level codes (GET codes/v1/icd9)

Returns all top-level ICD-9 codes. Useful for helping a user navigate down the ICD-9 hierarchy to find a code.

```js
icd9.topLevelCodes(options, callback);
```

##### Retrieve a single code. (GET codes/v1/icd9/:code_name)

Returns a single code matching the name, if any exists. Replace periods with hypens (e.g. '066-4' for '066.4')

The following arguments are required:

 * __code_name__: name of code

```js
icd9.singleCode("066-4", options, callback);
```

##### Search for codes by name. (GET codes/v1/icd9?q[name_cont]=:query)

Returns all codes whose name contains the search string.

The following arguments are required:

 * __query__: the search query string

```js
icd9.searchByName("082-2", options, callback);
```

##### Search for codes by description. (GET codes/v1/icd9?q[description_cont]=:query)

Returns all codes whose description contains the search string.

The following arguments are required:

 * __query__: the search query string

```js
icd9.searchByDescription("eastern equine", options, callback);
```

##### Search for codes by name or description. (GET codes/v1/icd9?q[name_or_description_cont]=:query)

Returns all codes whose name or description contains the search string.

The following arguments are required:

 * __query__: the search query string

```js
icd9.searchByNameOrDescription("west nile", options, callback);
```

### ICD-10 api

Returns an ICD-10 code.

```js
var icd10 = client.icd10();
```

##### All top-level codes (GET codes/v1/icd10)

Returns all top-level ICD-10 codes. Useful for helping a user navigate down the ICD-10 hierarchy to find a code.

```js
icd10.topLevelCodes(options, callback);
```

##### Retrieve a single code. (GET codes/v1/icd10/:code_name)

Returns a single code matching the name, if any exists. Replace periods with hypens (e.g. 'R50-9' for 'R50.9')

The following arguments are required:

 * __code_name__: name of code

```js
icd10.singleCode("R50-9", options, callback);
```

##### Search for codes by name. (GET codes/v1/icd10?q[name_cont]=:query)

Returns all codes whose name contains the search string.

The following arguments are required:

 * __query__: the search query string

```js
icd10.searchByName("b05", options, callback);
```

##### Search for codes by description. (GET codes/v1/icd10?q[description_cont]=:query)

Returns all codes whose description contains the search string.

The following arguments are required:

 * __query__: the search query string

```js
icd10.searchByDescription("mumps", options, callback);
```

##### Search for codes by name or description. (GET codes/v1/icd10?q[name_or_description_cont]=:query)

Returns all codes whose name or description contains the search string.

The following arguments are required:

 * __query__: the search query string

```js
icd10.searchByNameOrDescription("rubella", options, callback);
```

## Contributors
Here is a list of [Contributors](https://github.com/aquaio/aqua-io-node-js/contributors)

### TODO

## License
MIT

## Bug Reports
Report [here](https://github.com/aquaio/aqua-io-node-js/issues).

## Contact
Michael Carroll at Aqua.io

michael@aqua.io

@aqua_io

__This library initially generated by [alpaca](https://github.com/pksunkara/alpaca).__

