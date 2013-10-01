var crypto = require('crypto');

module.exports = exports = function (schema, options) {
  if (!options.salt) throw new Error('salt option is required!');
  var field = options.field || 'password';
  var size = options.size || 256;

  schema.pre('validate', function (next) {
    var col = this[field];
    if (col) return next();

    crypto.randomBytes(size, function(err, result) {
      if (err) return next(err);
      this[field] = result.toString('hex');
      next();
    }.bind(this));
  });
}
