const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const roomControllers = require("./controllers/roomControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

router.get("/room", roomControllers.browse);
router.get("/room/:id", roomControllers.read);
router.put("/room/:id", roomControllers.edit);
router.post("/room", roomControllers.add);
router.delete("/room/:id", roomControllers.destroy);

// router.get("/location", itemControllers.browse);
// router.get("/location/:id", itemControllers.read);
// router.put("/location/:id", itemControllers.edit);
// router.post("/location", itemControllers.add);
// router.delete("/location/:id", itemControllers.destroy);

module.exports = router;

// router.get("/room", roomControllers.browse);
// find(date) {
//     return this.database.query(`select * from  ${this.table} where date = ?`, [
//       date,
//     ]);
//   }
