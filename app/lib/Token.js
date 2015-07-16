/*

# TOKEN

Use this class for creating and verifying JSON Web Tokens.

```js
let options = {audience: 'admin'};
let token = Token.generate({userId: 1}, options);

Token.verify(token, options).then((payload) => {
  console.log(payload.userId);
}).catch(console.log);
```
*/

import Bluebird from 'bluebird';
import jwt from 'jsonwebtoken';
import config from '../../config';

class Token {
  generate(payload, options) {
    return jwt.sign(payload, config.appSecret, options);
  }

  decode(token, options) {
    return jwt.decode(token, config.appSecret, options);
  }

  verify(token, options) {
    return Bluebird.promisify(jwt.verify)(token, config.appSecret, options);
  }

  parseHeader(header) {
    if (!header) return null;
    let [kind, token] = header.split(' ');
    return kind === 'Bearer' ? token : null;
  }
}

export default new Token();
