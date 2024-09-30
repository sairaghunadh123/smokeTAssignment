const mysql = require('mysql2');
require('dotenv').config();

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server.');

    // Create the database and tables
    const sql = `
        CREATE DATABASE IF NOT EXISTS user_address_db;
        USE user_address_db;

        CREATE TABLE IF NOT EXISTS User (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Address (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            address TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
        );
    `;

    connection.query(sql, (err, results) => {
        if (err) throw err;
        console.log('Database and tables created successfully.');
        connection.end();
    });
});
