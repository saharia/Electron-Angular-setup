import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { DB } from './model/db/database';

if (environment.production) {
  enableProdMode();
}

const storage = window.require('electron-json-storage');
console.log(DB.db)

let sql = `SELECT name age FROM USERS
           ORDER BY name`;

DB.db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

DB.db.close();
/*storage.set('auth-user', { foo: 'bar' }, function(error) {
  if (error) throw error;
});*/

storage.get('auth-user', function(error, data) {
  if (error) {
    //throw error;
    //console.log(error)
  } 
   if (data) {
    console.log(data);
   }
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
