import server from './server';
import { ConnectDB } from './database'; 
import { PORT } from './config';

async function main() {
    try {
        ConnectDB.initialize().then(()=> {
            console.log('Connect database');
        }).catch(
            (err) => console.error(err)
        );
        server.listen(PORT);
        console.log('Server listening on port');
    } catch (error) {
        console.error(error);
    }
}

main();

