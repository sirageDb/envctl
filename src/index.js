import {program} from 'commander';

program
  .version('1.0.0')
  .description('Control .env files')
  .option('-u, --use <env>', 'Environment to use')
  .option('-l, --list', 'List all environments')
  .option('-a, --add <env>', 'Add a new environment')
  .option('-d, --delete <env>', 'Delete an environment')
  .option('-r, --rename <oldEnv> <newEnv>', 'Rename an environment')
  .parse(process.argv);

if (process.argv.length <= 2) {
  program.help();
}

if(program.opts().use){
    console.log("use a new environment");
    console.log("Environment:", program.opts().use);
}