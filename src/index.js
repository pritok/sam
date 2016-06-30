/**
 * Created by sm on 21/06/16.
 */

import Core from './core';
import Server from './server';

import model from './model';
import util from './util';

import 'file?name=index.html!./index.html';

module.exports = {
  Core,
  Server,
  model,
  util
};

const server = new Server();
