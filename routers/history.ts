import {Router} from "express";
import {SongRecord} from "../records/song.record";
import {ValidationError} from "../utils/errors";

export const historyRouter = Router();

historyRouter
  .get('/history', async (req, res) => {
    const songs = await SongRecord.getAllSongs()
    console.log('songs', songs);
    res.json({
      success: true,
      data: songs
    })
  })
