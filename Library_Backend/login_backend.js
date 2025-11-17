// ---------- Object to interact with the login data
export class Library_Backend {
    // Function to get the file
    async getLoginData(username) {
        let resObj = await fetch('https://library-backend-cfjv.onrender.com/api/data_login');
        const resJSON = await resObj.json();

        const login_data = resJSON[username] || "";
        resJSON[username] = login_data;

        await fetch(`https://library-backend-cfjv.onrender.com/api/save_login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resJSON)
        });

        console.log(login_data);
        return login_data
    }

    // Save data in the backend
    async saveLoginData(username, password) {
        let resObj = await fetch('https://library-backend-cfjv.onrender.com/api/data_login');
        const resJSON = await resObj.json();

        resJSON[username] = password;

        await fetch(`https://library-backend-cfjv.onrender.com/api/save_login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resJSON)
        });

        console.log("Password for user " + username + " has been saved");
    }
}