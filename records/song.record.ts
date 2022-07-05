import {ValidationError} from "../utils/errors";
import {v4 as uuid} from 'uuid';
import {pool} from '../utils/db';
import {FieldPacket} from 'mysql2';
import {SongEntity} from "../types";

type SongRecordResults = [SongRecord[], FieldPacket[]];

export class SongRecord implements SongEntity {
  public id?: string;
  public readonly title: string;
  public readonly url: string;

  constructor(obj: SongEntity) {
    const {id, title, url} = obj;

    if (title.length < 3) {
      throw new ValidationError('Title should have at least 3 characters');
    }

    if (url.length < 10) {
      throw new ValidationError('Url should have at least 10 characters');
    }

    if (!(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(url))) {
      console.log('url is incorrect');
      throw new ValidationError('Url is not valid');
    }

    this.id = id ?? uuid();
    this.title = title;
    this.url = url;
  }

  async addSong(): Promise<string> {
    await pool.execute("INSERT INTO `songs`(`id`, `title`, `url`) VALUES (:id, :title, :url)", {
      id: this.id,
      title: this.title,
      url: this.url
    })

    return this.id;
  }

  static async getAllSongs(): Promise<SongRecord[]> {
    const [results] = (await pool.execute("SELECT * FROM `songs` ORDER BY `date` DESC")) as SongRecordResults;
    console.log('results', results);
    return results.map(obj => new SongRecord(obj));
  }

  // async getLatest(): Promise<SongsRecord | null> {
  //   await
  // }

}
