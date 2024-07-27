const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const url = 'https://jsonplaceholder.typicode.com/users';
const outputFilePath = path.join(__dirname, 'users.html');

function createUserCard(user) {
    return `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        </div>
        <hr>
    `;
}

function writeToFile(data) {
    fs.appendFile(outputFilePath, data, (err) => {
        if (err) throw err;
        console.log('Data appended to file!');
    });
}

fetch(url)
    .then(response => response.json())
    .then(users => {
        const htmlHeader = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Users</title>
                <style>
                    .user-card { border: 1px solid #ddd; padding: 10px; margin: 10px; border-radius: 5px; }
                    hr { border: 0; border-top: 1px solid #ddd; }
                </style>
            </head>
            <body>
        `;
        const htmlFooter = `
            </body>
            </html>
        `;

        writeToFile(htmlHeader);

        users.forEach(user => {
            const userCard = createUserCard(user);
            writeToFile(userCard);
        });

        writeToFile(htmlFooter);
    })
    .catch(error => console.error('Error fetching data:', error));

