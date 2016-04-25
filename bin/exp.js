#!/usr/bin/env node

var commander = require('commander');
var path = require('path');
var devPlayer = require('../lib/dev-player');

commander.version('0.0.0')

commander.command('play [path]')
  .description('launch a player app in your local browser on a player')
  .option('-p, --port [port]', 'the port to run on', parseInt)
  .action(function (path_, env) {
    var options = {};
    options.path = path.resolve(path_ || './');
    options.port = env.port || 8899;
    devPlayer.start(options);
  });

commander.command('*', '',  { isDefault: true, noHelp: true })
  .action(function () {
    commander.help();
  });

commander.parse(process.argv);

if (!process.argv.slice(2).length) {  
  commander.help();
}