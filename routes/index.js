const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     tags: 
 *       - root
 *     name: Home
 *     summary: Displays a simple message
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Works ok.
 */
router.get("/", (req, res) => {
    res.json({ success:true, message:"hello" });
});

/**
 * @swagger
 * /transaction:
 *   post:
 *     tags: 
 *       - transaction
 *     name: Create transaction
 *     summary: creates a new transaction
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Transaction created successfully
 */
router.post("/transaction", (req, res) => {
    res.json({ success:true, message:"created transaction" });
});

/**
 * @swagger
 * /transaction:
 *   get:
 *     tags: 
 *       - transaction
 *     name: Get Transactions
 *     summary: Displays a list of transactions
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Works ok.
 */
router.get("/transaction", (req, res) => {
    res.json({ 
        success: true, 
        message: [
            { transactionID: 0001, total: 1234.56 },
            { transactionID: 0002, total: 4567.89 },
        ] 
    });
});

module.exports = router;