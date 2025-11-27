// ---------- Object to interact with the login data
export class Login_Backend {

    constructor() {}

    // Function to get the file
    async getLoginData(username) {
        let resObj = await fetch('https://library-backend.emiliedubief.workers.dev/api/data_login');
        const resJSON = await resObj.json();

        const login_data = resJSON[username] || "";

        console.log(login_data);
        return login_data
    }

    // Save data in the backend
    async saveLoginData(username, password, email) {
        let resObj = await fetch('https://library-backend.emiliedubief.workers.dev/api/data_login');
        const resJSON = await resObj.json();

        resJSON[username] = {"email":email, "password":password};

        await fetch(`https://library-backend.emiliedubief.workers.dev/api/save_login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resJSON)
        });

        console.log("Account for user " + username + " has been saved");
    }
}