/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';

const session = require('express-session');
const Keycloak = require('keycloak-connect');
const bodyParser = require('body-parser');
const cors = require('cors');

const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({ store: memoryStore });

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use(
  session({
    secret: 'my-session-secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

app.use(keycloak.middleware());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', keycloak.protect(), (req, res) => {
  res.send({ message: 'Welcome to portfolio-api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
