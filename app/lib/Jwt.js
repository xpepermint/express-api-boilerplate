/*

# TOKEN

Use this class for creating, read and verifying JSON Web Tokens.

```js
let options = {audience: 'admin'};
let token = Token.generate({userId: 1}, options);
let payload = Token.verify(token, options);
console.log(payload);
```
*/

import jwt from 'jsonwebtoken';
import config from '../../config';

class Jwt {
  generate(payload, options) {
    return jwt.sign(payload, config.appSecret, options);
  }

  decode(token, options) {
    return jwt.decode(token, config.appSecret, options);
  }

  verify(token, options) {
    try {
      return jwt.verify(token, config.appSecret, options);
    } catch(err) {
      return null;
    }
  }

  parseHeader(header) {
    if (!header) return null;
    let [kind, token] = header.split(' ');
    return kind === 'Bearer' ? token : null;
  }
}

export default new Jwt();
