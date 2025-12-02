# Sending JSON

When working with APIs it's very common to send JSON in the request's body.
In JavaScript we an convert a normal JavaScript object to json an vice-versa.

e.g.:

```JavaScript
// Fake JSON
const jsonData = `
[
    {
        "id": 220033,
        "title": "TposeProgramer",
        "username": "tpose_programmer"
    },
    {
        "id": 220044,
        "title": "John Doe",
        "username": "john_doe"
    }
]

`;

const objData = JSON.parse(jsonData);

for (const field of objData) {
    console.log(`id - ${field.id}, title - ${field.title}, username - ${field.username}`);
}
```
