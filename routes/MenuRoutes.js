const express = require("express");
const router = express.Router();
const menuItem = require("../models/Menu");

router.post("/", async (req, res) => {
  try {
    const menu = new menuItem(req.body);
    const response = await menu.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error in saving menu" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await menuItem.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
