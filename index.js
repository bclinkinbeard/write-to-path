var fs = require('fs')
  , path = require('path')

module.exports = function (filepath, opts) {
  if (!filepath) throw new Error('Path must be provided')

  return function (err, src) {
    if (!opts) opts = {}
    if (err) throw err

    fs.writeFileSync(filepath, src, 'utf8');

    if (opts.debug) console.log('File written to ' + path.relative(process.cwd(), filepath))
  }
}
