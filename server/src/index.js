const express = require("express");
const session = require("express-session");
const store = require("express-mysql-session");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const Http = require("http");
const router = require('./router');
const db = require('./database/index');

const MySQLStore = store(session);
const sessionStore = new MySQLStore({}, db);

const app = express();
const http = Http.Server(app);

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true
  })
);

// session store
app.use(
  session({
    key: "saperiumweb",
    secret: "saperiumweb",
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
    createDatabaseTable: true,
    checkExpirationInterval: 9000000,
    expiration: 86400000
  })
);
app.use('/api', router);
// listen to port
const port = process.env.PORT || 3001;
http.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});