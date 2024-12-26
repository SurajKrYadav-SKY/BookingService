const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const app = express();
const apiRoutes = require("./routes/index");
const db = require("./models/index");

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log("Server started at port:", PORT);

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
