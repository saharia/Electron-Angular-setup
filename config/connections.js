module.exports.connections = {

	/***************************************************************************
  *                                                                          *
  * SQLlite is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/SQLlite                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
	sqlitedb: {
    /**
     * Database instance type. Specify whether to store the database on disk
     * or in memory.
     */
    adapter: 'waterline-sqlite3', // or 'memory' 
 
    /**
     * Location of file if type='disk'
     */
    filename: './tmp/db.sqlite',
 
    /**
     * Set to true to output SQL queries
     */
    debug: false
  }

  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};
