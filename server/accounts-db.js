import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

export class AccountDatabase {
  constructor(dburl) {
    this.dburl = dburl;
  }

  async connect() {
    this.pool = new Pool({
      connectionString: this.dburl,
      ssl: { rejectUnauthorized: false }, 
    });

    this.client = await this.pool.connect();

    await this.init();
  }

  async init() {
    const queryText = `
      create table if not exists accountTable(
          email varchar(30),
          password varchar(30),
          address varchar(50),
          city varchar(30),
          state varchar(30),
          zip varchar(10),
          name varchar(30),
          job varchar(30),
          rent integer,
          income integer,
          spending integer,
          saving integer,
          primary key(email)
      );

      create table if not exists spendingTable(
          email varchar(30),
          expenseName varchar(50),
          spending integer,
          date varchar(30)
      );
    `;
    const res = await this.client.query(queryText);
  }

  // Close the pool.
  async close() {
    this.client.release();
    await this.pool.end();
  }
  
  async createAccount(email, password, address, city, state, zip, name, job, rent, income, spending, saving) {
    const queryText =
      'INSERT INTO accountTable (email, password, address, city, state, zip, name, job, rent, income, spending, saving) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
    const res = await this.client.query(queryText, [email, password, address, city, state, zip, name, job, rent, income, spending, saving]);
    return res.rows;
  }

  async removeAccount(email) {
      const queryText = 'DELETE FROM accountTable WHERE email = $1 RETURNING *';
      const res = await this.client.query(queryText, [email]);
      return res.rows;
  }
  
  async readAccount(email) {
      const queryText =
        'SELECT * FROM accountTable where email = $1';
      const res = await this.client.query(queryText, [email]);
      return res.rows;
  }

  async updateAccount(email, name, job, rent, income, spending, saving) {
    const queryText =
      'UPDATE accountTable SET name = $2, job = $3, rent = $4, income = $5, spending = $6, saving = $7 WHERE email = $1 RETURNING *';
    const res = await this.client.query(queryText, [email, name, job, rent, income, spending, saving]);
    return res.rows;
  }

  async spending(email, expenseName, spending){
    let date = new Date();
    const queryText = 
      'INSERT INTO spendingTable (email, expenseName, spending, date)';
    const res = await this.client.query(queryText, [email, expenseName, spending, date]);
  }

  async getSpending(email){
    let date = new Date();
    const queryText = 
      'SELECT * FROM spendingTable WHERE email = $1';
    const res = await this.client.query(queryText, [email]);
  }
}