import server from './server';
import { ConnectDB } from './database'; 

async function main() {
    try {
        ConnectDB.initialize().then(()=> {
            console.log('Connect database');
        }).catch(
            (err) => console.error(err)
        );
        server.listen(3000);
        console.log('Server listening on port');
    } catch (error) {
        console.error(error);
    }
}

main();

