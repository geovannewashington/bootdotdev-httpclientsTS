async function updateUser(baseURL, id, data, apiKey) {
    const fullURL = `${baseURL}/${id}`;
    const res = await fetch(fullURL, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "applicattion/json",
            "X-API-Key": apiKey
        },
        body: JSON.stringify(data)
    });
    const newData = await res.json();
    return newData;
}
async function getUserById(baseURL, id, apiKey) {
    const fullURL = `${baseURL}/${id}`;
    const res = await fetch(fullURL, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "applicattion/json",
            "X-API-Key": apiKey
        },
    });
    const data = await res.json();
    return data;
}
// don't touch below this line
const userId = "2f8282cb-e2f9-496f-b144-c0aa4ced56db";
const generatedKey = generateKey();
const baseURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";
function generateKey() {
    const characters = "ABCDEF0123456789";
    let result = "";
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
function logUser(user) {
    console.log(`User name: ${user.user.name}, Role: ${user.role}, experience: ${user.experience}, Remote: ${user.remote}`);
}
const userData = await getUserById(baseURL, userId, generatedKey);
logUser(userData);
console.log(`Updating user with id: ${userId}`);
userData.experience = 2;
userData.role = "Junior Developer";
userData.remote = true;
userData.user.name = "Dan";
const updatedUser = await updateUser(baseURL, userId, userData, generatedKey);
logUser(updatedUser);
export {};
//# sourceMappingURL=main.js.map