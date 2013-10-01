# mongoose-hash

Mongoose plugin to generate a random hash

## Installation

    $ npm install mongoose-hash

## Example

```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hash =require('mongoose-hash');

//user schema
var fields = {
  email: {
    type: String,
    required: true
  },
  randomHash: {
    type: String,
    required: true
  }
};

var UserSchema = new Schema(fields);

UserSchema.plugin(hash, {
  field: 'randomHash',
  salt: 'secret string',
  iterations: 1000,
  keylen: 64
});

module.exports = mongoose.model('User', UserSchema);

```

## License

MIT
