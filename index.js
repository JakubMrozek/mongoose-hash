var crypto = require('crypto');

module.exports = exports = function (schema, options) {
  if (!options.field) throw new Error('field option is required!');
  var size = options.size || 256;

  schema.pre('validate', function (next) {
    var col = this[options.field];
    if (col) return next();

    crypto.randomBytes(size, function(err, result) {
      if (err) return next(err);
      this[options.field] = result.toString('hex');
      next();
    }.bind(this));
  });
}
