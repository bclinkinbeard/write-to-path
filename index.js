var fs = require('fs')

module.exports = function (path, opts) {
  if (!path) throw new Error('Path must be provided')

  return function (err, src) {
    if (!opts) opts = {}
    if (err) throw err

    fs.writeFileSync(path, src, 'utf8');

    if (opts.debug) console.log('File written to ' + path)
  }
}
