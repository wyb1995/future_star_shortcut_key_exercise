import express from 'express';
import ShortcutController from './shortcutController';

const router = express.Router();
router.use('/shortcut', ShortcutController);

export default router;
