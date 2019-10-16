import app from './app';
import '@babel/polyfill';

require('./database/database');
require('dotenv').config()

async function main(){
    await app.listen(app.get('port'));
    console.log('Server Listening on port', app.get('port') )
}

main();