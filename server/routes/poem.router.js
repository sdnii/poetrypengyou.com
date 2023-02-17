const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/:number", (req, res) => {
  console.log("in poetry get router");
  const queryString = `SELECT * FROM "poem" WHERE "number" = $1;`;
  pool
    .query(queryString, [req.params.number])
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
