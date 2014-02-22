write-to-path
=============

Given a file path, return a function that will synchronously write to it

```
var writer = require('write-to-path')

var write = writer('./bundle.js', {debug: true})

write(null, src) // writes the file
```
