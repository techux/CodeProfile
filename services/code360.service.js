const questions = async (username) => {
    try {
        const data = await fetch(`https://www.naukri.com/code360/api/v3/public_section/profile/user_details?uuid=${username}`, {
            "headers": { "accept": "application/json, text/plain, */*" },
            "body": null,
            "method": "GET"
        });        
        const userData = (await data.json())

        if (userData.message == "Not found"){
            return "User Not found"
        }
        
        return userData.data.dsa_domain_data.problem_count_data
    } catch (error) {
        console.error(`Error in fetching Naukri Code360 data: ${error.stack || error.message}`)
    }
}

module.exports = {
    questions
}