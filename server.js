const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'students.json');

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve all static files (index.html, style.css, script.js, etc.)
app.use(express.static(__dirname));

// Serve index.html on root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// GET all students
app.get('/students', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading student data');
        }
        res.json(JSON.parse(data));
    });
});

// POST new student
app.post('/students', (req, res) => {
    const newStudent = req.body;
    
    // Basic validation
    if (!newStudent['Student ID'] || !newStudent['Full Name']) {
        return res.status(400).send('Missing required fields');
    }

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading student data');
        }
        
        const students = JSON.parse(data);
        students.push(newStudent);
        
        fs.writeFile(DATA_FILE, JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving student data');
            }
            res.status(201).send('Student added successfully');
        });
    });
});

// DELETE student by ID
app.delete('/students/:id', (req, res) => {
    const studentId = req.params.id;
    
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading student data');
        }
        
        let students = JSON.parse(data);
        const initialLength = students.length;
        students = students.filter(student => student['Student ID'] !== studentId);
        
        if (students.length === initialLength) {
            return res.status(404).send('Student not found');
        }
        
        fs.writeFile(DATA_FILE, JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving student data');
            }
            res.send('Student deleted successfully');
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
