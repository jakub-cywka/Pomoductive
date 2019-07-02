import * as Express from 'express';

import * as Dotenv from 'dotenv';

import { ApiStatuses } from '../shared/enums/apiStatuses';

import { ApiResponse } from '../shared/interfaces/apiResponse';
import { FirebaseCredentials } from '../shared/interfaces/firebaseCredentials';

Dotenv.config({
    path: './credentials.env'
});

const app = Express();
const router = Express.Router();
const port = 1000;

app.get('/', ({}, res) => res.redirect('/api'));

app.use(({}, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Content-Type, Origin');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
});
app.use('/api', router);

router.get('/', (req, res) => {
    res.json({
        status: ApiStatuses.Success,
        message: 'A Pomoductive backend API is working properly!'
    } as ApiResponse);
});

router.route('/credentials').get(({}, res) => {
    res.json({
        status: ApiStatuses.Success,
        message: 'Credentials fetched successfully!',
        response: {
            apiKey: process.env.apiKey,
            authDomain: process.env.authDomain,
            databaseURL: process.env.databaseUrl,
            projectId: process.env.projectId,
            storageBucket: process.env.storageBucket,
            messagingSenderId: process.env.messagingSenderId,
            appId: process.env.appId
        }
    } as ApiResponse<FirebaseCredentials>);
});

app.listen(port, () => console.log(`A backend Pomoductive server is listening on port ${port}.`));