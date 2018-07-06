const fs = require('fs')
const { join } = require('path')

fs.closeSync(fs.openSync(join(__dirname, 'docs', '.nojekyll'), 'w'))
console.log('> Added .nojekyll to /docs')

const path = join(__dirname, 'docs')
fs.readdirSync(join(path, 'static'))
  .filter(item => !item.startsWith('.'))
  .forEach(item => fs.renameSync(
    join(path, 'static', item), join(path, item)
  ))
console.log('> Moved /docs/static files to /docs')
