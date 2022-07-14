import {Router} from "express";
import {check, validationResult} from 'express-validator';
import {SongRecord} from "../records/song.record";
import {ValidationError} from "../utils/errors";

export const addSongRouter = Router();

addSongRouter
  .post('/add',
    check('title')
      .isLength({min: 3})
      .withMessage('Title should have at leat 3 characters'),
    check('videoUrl')
      .matches(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/)
      .withMessage('Provided url does not match youtube url'),
    async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())  {
      return res.status(422).json({
        success: false,
        errors: errors.mapped()
      })
    }
    const {title, videoUrl: url} = req.body;
    const song = new SongRecord({
      title,
      url
    })
    await song.addSong();
    res.json({
      success: true,
      message: 'You have added your song successfully'
    })
  })
