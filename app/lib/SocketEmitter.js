/*

# SOCKET EMITTER

Use this class if you need to broadcast an event through remote socket.io
server. The message will be published directly to Redis instance, the socket.io
server will grab it from there and then send it to all connected clients.

```js
SocketEmitter.emit('event', {room: '/locations', payload: 'Hello World!'});
```
*/

import Emitter from 'socket.io-emitter';
import config from '../../config';

let emitter = Emitter({host: config.socketServerHost, port: config.socketServerHost});

class SocketEmitter {
  emit(name, options) => {
    let pub = emitter;
    if (options.room) pub = pub.of(options.room);
    pub.emit(name, options.payload);
    return this;
  };
}

export default new SocketEmitter();
