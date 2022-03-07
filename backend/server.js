const app = require('./src/app');
const db = require('./src/database');

const port = process.env.PORT || 9000;

// Create missing tables in the database and start the server
// NOTE: sequelize.sync does not update the table schema
db.sequelize.sync().then(() => {
  // Start the Koa HTTP server
  app.listen(port);
  console.log(`App listening on port ${port}`);
});
