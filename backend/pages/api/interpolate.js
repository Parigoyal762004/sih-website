import multer from 'multer';
import nextConnect from 'next-connect';
import { processFrames } from '../../models/aiModel';

const upload = multer({ dest: 'uploads/' });

const handler = nextConnect()
  .use(upload.array('images'))
  .post(async (req, res) => {
    const images = req.files; // Array of images
    const frameInterval = parseInt(req.body.frameInterval, 10);

    try {
      const outputVideoUrl = await processFrames(images, frameInterval);
      res.status(200).json({ videoUrl: outputVideoUrl });
    } catch (error) {
      res.status(500).json({ error: 'Processing failed' });
    }
  });

export default handler;
