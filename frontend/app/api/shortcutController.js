import express from 'express';

import superAgent from 'superagent';

const router = express.Router();

router.get('/', (req, res) => {
    superAgent.get('http://localhost:8080/api/shortcut', (err, response)=> {
        let result = response.body;
        return res.status(200).send(result).end();
    })
});

router.get('/:id', (req, res) => {
    superAgent.get('http://localhost:8080/api/shortcut/' + req.params.id, (err, response)=> {
        return res.status(200).send(response.body).end();
    })
});

export default router;