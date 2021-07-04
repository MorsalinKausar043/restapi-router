const express = require("express");
const router = new express.Router();
const MensList = require("./models/conn")

router.get("/", (req, res) => res.status(201).send("hello world"));

router.post("/mens", async (req, res) => {
    try {
        const postdata = new MensList(req.body);
        const postresult = await postdata.save();
        res.status(201).send(postresult);
        console.log(postresult);
    } catch (error) {
        res.status(404).send(error)
    }
})

router.get("/mens", async (req, res) => {
    try {
        const getdata = await MensList.find({}).sort({"ranking" : 1});
        res.status(201).send(getdata);
        console.log(getdata);
    } catch (error) {
        res.status(404).send(error)
    }
})

router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getdatasid = await MensList.findById(_id);
        res.status(201).send(getdatasid);
        console.log(getdatasid);

    } catch (error) {
        res.status(404).send(error)
    }
})


router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const patchdatasid = await MensList.findByIdAndUpdate(_id , req.body , { new : true});
        res.status(201).send(patchdatasid);
        console.log(patchdatasid);

    } catch (error) {
        res.status(404).send(error)
    }
})


router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedatasid = await MensList.findByIdAndDelete(_id);
        res.status(201).send(deletedatasid);
        console.log(deletedatasid);

    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;