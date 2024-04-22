import express from 'express';

const router = express.Router();

router.post("/", createChat)
router.get("/:userId", userChat)
router.get("/find/:firstId/:secondId", fndChat)


export default router