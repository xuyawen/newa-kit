/*
*  @author: xuyawen
*  @version: 1.0.0
*/

const utils = {};
const haveDefault = ['http', 'sentry'];

const modules = require.context('./modules/', true, /.js$/);

modules.keys().forEach(modulesKey => {
  let attr = modulesKey.replace('./', '').replace('.js', '').replace('/index', '');
  if (haveDefault.includes(attr)) {
    utils[attr] = modules(modulesKey).default;
  } else {
    utils[attr] = modules(modulesKey);
  }
});

module.exports = utils;