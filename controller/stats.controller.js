const leetcode = require("../services/leetcode.service");
const gfg = require("../services/gfg.service");
const code360 = require("../services/code360.service");
const codeforces = require("../services/codeforces.service");
const codechef = require("../services/codechef.service");

const lcQuestionController = async (req, res) => {
    try {
        const username = req.params.username;
        if (!username){
            return res.status(404).json({
                status: "error",
                message: "Please send the username"
            });
        }
        const data = await leetcode.questions(username);
        return res.status(200).json({
            status: "ok",
            data: data
        })
    } catch (error) {
        console.error(`Error in lcQuestionController : ${error.stack || error.message}`);
        return res.status(500).json({
            status:"error", 
            message: "Internal Server Error" 
        });
    }
}


// geeksforgeeks submissions only
const gfgSubmissionController = async (req, res) => {
    try {
        const username = req.params.username;
        if (!username){
            return res.status(404).json({
                status: "error",
                message: "Please send the username"
            });
        }
        const data = await gfg.submissions(username);
        return res.status(200).json({
            status: "ok",
            data: data
        })
    } catch (error) {
        console.error(`Error in gfgSubmissionController : ${error.stack || error.message}`);
        return res.status(500).json({
            status:"error", 
            message: "Internal Server Error" 
        });
    }
}


const code360Controller = async (req, res) => {
    try {
        const username = req.params.username;
        if (!username){
            return res.status(404).json({
                status: "error",
                message: "Please send the username"
            });
        }
        const data = await code360.questions(username);
        return res.status(200).json({
            status: "ok",
            data: data
        })
    } catch (error) {
        console.error(`Error in code360Controller : ${error.stack || error.message}`);
        return res.status(500).json({
            status:"error", 
            message: "Internal Server Error" 
        });
    }
}


// codeforces profile
const codeforcesController = async (req, res) => {
    try {
        const username = req.params.username;
        if (!username){
            return res.status(404).json({
                status: "error",
                message: "Please send the username"
            });
        }
        const data = await codeforces.questionsCount(username);
        return res.status(200).json({
            status: "ok",
            data: data
        })
    } catch (error) {
        console.error(`Error in codeforcesController : ${error.stack || error.message}`);
        return res.status(500).json({
            status:"error", 
            message: "Internal Server Error" 
        });
    }
}


// codechef profile
const codechefController = async (req, res) => {
    try {
        const username = req.params.username;
        if (!username){
            return res.status(404).json({
                status: "error",
                message: "Please send the username"
            });
        }
        const data = await codechef.profile(username);

        if (!data) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            })
        }

        return res.status(200).json({
            status: "ok",
            data: data
        })
    } catch (error) {
        console.error(`Error in codechefController : ${error.stack || error.message}`);
        return res.status(500).json({
            status:"error", 
            message: "Internal Server Error" 
        });
    }
}


module.exports = {
    lcQuestionController,
    gfgSubmissionController,
    code360Controller,
    codeforcesController,
    codechefController
}