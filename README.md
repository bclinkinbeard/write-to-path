write-to-path
=============

Give a path, get a function that will write to it

```
var writer = require('write-to-path')
var path = require('path')

var write = writer('./bundle.js', {debug: true})

write(null, src) // writes the file
```
