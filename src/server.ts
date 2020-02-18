/* eslint-disable import/first */
require('dotenv').config();

import app from './app';
import Logger from './commons/helpers/logger';

const port = process.env.PORT || 3000;

app.listen(port, () => Logger.info(`Server initialized on port: ${port}`));
