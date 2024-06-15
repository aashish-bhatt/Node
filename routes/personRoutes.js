const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// now we should not use callbacks

// router.post("/person",(req,res)=>{
//     const person = new Person(req.body);
//     person.save((error,person)=>{
//         if(error){
//             res.status(400).json({error:"Error in saving person"});
//         }
//         else{
//             res.status(200).json({message:"Person saved successfully"});
//         }
//     })
// })

router.post("/", async (req, res) => {
  try {
    const person = new Person(req.body);
    const response = await person.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: "Error in saving person" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      workType == "Student" ||
      workType == "Employee" ||
      workType == "Businessman" ||
      workType == "Unemployed"
    ) {
      const response = await Person.find({ work: workType });
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const person = req.body;
    const response = await Person.findByIdAndUpdate(id, person, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      res.status(400).json({ error: "Invalid Id" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Person.findByIdAndDelete(id);
    if (!response) {
      res.status(400).json({ error: "Invalid Id" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
