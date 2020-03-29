import dotenv from 'dotenv'

export default class Configuration {
  PORT!: number;
  dbURI!: string;
  constructor() {
    this.initFun();
  }
  private initFun() {
    dotenv.config();
    this.PORT = Number(process.env.PORT);
    this.dbURI = String(process.env.DB_URI)
  }
}
