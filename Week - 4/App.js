// =======================================
// TypeScript-like Interface (for understanding)
// interface User {
//    id: number;
//    name: string;
//    email: string;
// }
// =======================================
// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "Madhu", email: "Madhu123@gmail.com" },
                        { id: 2, name: "Meena", email: "Meena23@gmail.com" },
                        { id: 3, name: "Manas", email: "Manas@gmail.com" },
                         { id: 4, name: "Raj", email: "Raj34@gmail.com" },
                          { id: 5, name: "Reena", email: "Reena9@gmail.com" },
                           { id: 6, name: "Nihal", email: "Nihal987@gmail.com" },
                            { id: 7, name: "Abhi", email: "Abhi0@gmail.com" },
                             { id: 8, name: "Anu", email: "Anu76@gmail.com" },
                              { id: 9, name: "Sriraj", email: "Sriraj@gmail.com" },
                               { id: 10, name: "Ahaan", email: "Ahaan678@gmail.com" }

                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
