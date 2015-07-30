export default {
  appSecret: process.env.APP_SECRET || 'secret',
  httpServerHost: process.env.HTTP_SERVER_HOST || '127.0.0.1',
  httpServerPort: process.env.HTTP_SERVER_PORT || 3333,
  socketServerHost: process.env.SOCKET_SERVER_HOST || '127.0.0.1',
  socketServerPort: process.env.SOCKET_SERVER_PORT || 5555,
  databaseHost: process.env.DATABASE_HOST || '127.0.0.1',
  databaseName: process.env.DATABASE_NAME || 'api_development',
  databaseUsername: process.env.DATABASE_USERNAME || 'root',
  databasePassword: process.env.DATABASE_PASSWORD || null,
};
