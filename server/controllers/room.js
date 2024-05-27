import Room from '../models/Room.js';
import tryCatch from './utils/tryCatch.js';

export const createRoom = tryCatch(async (req, res) => {
  //id,name,photo wagera sab hume req.user me mil jata hai,baaki apna data req.body me aata hai,and we have already done validation in the schema
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;  //req.user we have already added in our auth middleware,you know very well after verifying the token
  const newRoom = new Room({ ...req.body, uid, uName, uPhoto });
  await newRoom.save();
  res.status(201).json({ success: true, result: newRoom });
});

export const getRooms = tryCatch(async (req, res) => {
  const rooms = await Room.find().sort({ _id: -1 });  //new to old
  res.status(200).json({ success: true, result: rooms });
});