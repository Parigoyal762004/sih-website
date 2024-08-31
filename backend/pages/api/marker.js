import nextConnect from 'next-connect';
import { getMarkerData } from '../../models/markerModel';

const handler = nextConnect()
  .get((req, res) => {
    try {
      const markers = getMarkerData();
      res.status(200).json(markers);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch marker data' });
    }
  });

export default handler;
