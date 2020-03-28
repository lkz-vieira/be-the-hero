const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);


routes.post("/sessions", SessionController.create);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);
module.exports = routes;
