import { Router } from "express";
import { addImageMessage, addMessage, addVoiceMessage, getInitialContactswithMessages, getMessages } from "../controllers/MessageController.js";
import multer from "multer";

const router = Router()
const uploadAudio = multer({dest: "uploads/recordings"})
const uploadImage = multer({dest: "uploads/images"})

router.post("/add-message", addMessage)
router.get("/get-messages/:from/:to", getMessages)
router.post("/add-image-message", uploadImage.single('image'), addImageMessage)
router.post("/add-voice-message", uploadAudio.single('audio'), addVoiceMessage)
router.get("/get-initial-contacts/:from", getInitialContactswithMessages)

export default router