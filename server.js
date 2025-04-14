const express = require('express');
const cors = require("cors");
const mysql = require("mysql");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());  // Viktigt att använda express.json() för att kunna läsa JSON i POST-anrop

// Connect to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.log("Connection failed: " + err);
        return;
    }
    console.log("Connected to database");
});

// Root route (för /)
app.get("/", (req, res) => {
    res.send("Welcome to the Work Experience API!");
});

// Route för /api/workexperience (GET)
app.get("/api/workexperience", (req, res) => {
    connection.query("SELECT * FROM workexperience", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Route för att lägga till ny arbetserfarenhet (POST)
app.post("/api/workexperience", (req, res) => {
    const { companyname, jobtitle, location, startdate, enddate, description } = req.body;

    // Kontrollera att alla fält är fyllda
    if (!companyname || !jobtitle || !location || !startdate || !description) {
        return res.status(400).json({
            message: "All fields except 'enddate' must be provided."
        });
    }

    // SQL-fråga för att lägga till ny arbetserfarenhet
    const query = `
        INSERT INTO workexperience (companyname, jobtitle, location, startdate, enddate, description)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    // Kör frågan med värdena från body
    connection.query(query, [companyname, jobtitle, location, startdate, enddate, description], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Skicka tillbaka ett meddelande om att datan har lagts till
        res.status(201).json({
            message: "Work experience added successfully",
            workexperience: {
                companyname,
                jobtitle,
                location,
                startdate,
                enddate,
                description
            }
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
