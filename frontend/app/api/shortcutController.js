import express from 'express';

import superAgent from 'superagent';

const router = express.Router();

router.get('/', (err, res) => {
    superAgent.get('http://localhost:8080/api/shortcut', (err, res)=> {
        console.log(res);
    })

});

export default router;