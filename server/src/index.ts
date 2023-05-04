import server from './server';
import { ConnectDB } from './database'; 

async function main() {
    try {
        await ConnectDB();
        server.listen(3000);
        console.log('Server listening on port');
    } catch (error) {
        console.error(error);
    }
}

main();

