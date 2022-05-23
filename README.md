# Example

```shell
$ npm install sensitive-words
```

```javascript
const {sensitiveWords} = require('sensitive-words')
// ES2015 modules 
import {sensitiveWords} from 'sensitive-words'

const filtered = sensitiveWords('My macbook pro has a touchbar', ['pro', 'touchbar'])

console.log(filtered);
// My macbook ***** has a ***
```
