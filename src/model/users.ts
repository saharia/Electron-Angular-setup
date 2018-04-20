import { TheDb } from './db/thedb';

export class Users {
  constructor () {

  }

  insert (params) {
    let sql = "INSERT INTO USERS (name, age, address) values ( " + params['name'] + ", " + params['age'] + ", " + params['address'] + ")";
    TheDb.insert(sql);
    return true;
  }

  update (params) {
    let sql = "UPDATE USERS SET name = " + params['name'] + " age = " + params['name'] + " address = " + params['name'] + " WHERE id = " + params['id'];
    DB.db.run(sql);
    return true; 
  }

  deleteById (id) {
    let sql = "UPDATE USERS SET is_active = 0 WHERE id = " + id;
    DB.db.run(sql);
    return true; 
  }

  fetchById (id) {
    let sql = "SELECT name, age, address FROM USERS WHERE is_active = 1 AND id = " + id;
    DB.db.run(sql);
    return true; 
  }

  fetchALL (id) {
    let sql = "SELECT name, age, address FROM USERS";
    DB.db.run(sql);
    return true; 
  }

  fetchActiveUsers (id) {
    let sql = "SELECT name, age, address FROM USERS WHERE is_active = 1";
    DB.db.run(sql);
    return true; 
  }
}