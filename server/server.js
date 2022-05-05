import express from 'express';
import { AccountDatabase } from './accounts-db.js';

class AccountServer {
  constructor(dburl) {
    this.dburl = dburl;
    this.app = express();
    this.app.use('/', express.static('client'));
  }

  async initRoutes() {
    // Note: when using arrow functions, the "this" binding is lost.
    const self = this;

    this.app.post('/createAccount', async (req, res) => {
      try {
        const { email, password, address, city, state, zip, name, job, rent, income, spending, saving } = req.query;
        const entry = await self.db.createAccount(email, password, address, city, state, zip, name, job, rent, income, spending, saving);
        res.send(entry);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get('/readAccount', async (req, res) => {
      try {
        const { email } = req.query;
        const entry = await self.db.readAccount(email);
        res.send(entry);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });

    this.app.delete('/removeAccount', async (req, res) => {
      try {
        const { email } = req.query;
        const entry = await self.db.removeAccount(email);
        res.send(entry);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });

    this.app.post('/updateAccount', async (req, res) => {
      try {
        const { email, name, job, rent, income, spending, saving } = req.query;
        const entry = await self.db.updateAccount(email, name, job, rent, income, spending, saving);
        res.send(entry);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.post('/spending', async (req, res) => {
      try {
        const { email, expenseName, spending } = req.query;
        const entry = await self.db.spending(email, expenseName, spending);
        res.send(entry);
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get('/getSpending', async (req, res) => {
      try {
        const { email } = req.query;
        const entry = await self.db.getSpending(email);
        res.send(entry);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
  }

  async initDb() {
    this.db = new AccountDatabase(this.dburl);
    await this.db.connect();
  }

  async start() {
    await this.initRoutes();
    await this.initDb();
    const port = process.env.PORT || 8080;
    this.app.listen(port, () => {
      console.log(`AccountServer listening on port ${port}!`);
    });
  }
}

const server = new AccountServer(process.env.DATABASE_URL);
server.start();