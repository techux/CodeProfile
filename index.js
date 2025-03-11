const express = require('express');
require('dotenv').config();
const cors = require("cors");

const { lcQuestionController,
    gfgSubmissionController,
    code360Controller,
    codeforcesController,
    codechefController
    } = require("./controller/stats.controller");

const PORT = process.env.PORT || 9090 ;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get(["/", "/ping"], (req, res) => {
    const startTime = Date.now();
    return res.status(200).json({
        status: "ok",
        message: "pong",
        app: "CodeProfile",
        developer: "Devesh Singh",
        responseTime: `${Date.now() - startTime}ms`,
        serverTime: new Date().toISOString()
    });
})


app.get("/leetcode/:username", lcQuestionController);
app.get("/gfg/:username", gfgSubmissionController);
app.get("/code360/:username", code360Controller);
app.get("/codechef/:username", codechefController);
app.get("/codeforces/:username", codeforcesController);

app.listen(PORT, ()=>{
    console.log(`[INFO] Server is running on port ${PORT}`)
})