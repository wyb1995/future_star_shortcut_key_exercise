import express from 'express';
import shortcutController from './shortcutController';

const router = express.Router();
router.use('/shortcut', shortcutController);

export default router;
