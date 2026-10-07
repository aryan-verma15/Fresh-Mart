import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './db/index.js';

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 7000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is online on PORT ${PORT}`);
            console.log(`URL : http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Server failed to start!!');
        console.log(`Error : ${error}`);
    });
