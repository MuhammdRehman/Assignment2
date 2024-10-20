const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const csvParser = require('csv-parser');

const app = express();
const port = 3001;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors());

// Multer setup for file upload
const upload = multer({ dest: 'uploads/' });

// CORS setup for specific routes
const corsOptions = {
  origin: 'http://localhost:3001'
};

function setCorsHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // , PUT, PATCH, DELETE
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}

app.use(setCorsHeaders);

// Task 1: Handle /hello/amjad (GET request)
app.get('/hello/amjad', (req, res) => {
  res.send('Hello, Amjad');
});

// Task 2: Handle POST request for professional profile
app.post('/api/professionalProfile', (req, res) => {
  const { Name, Title, TargetedKeywords, Education, Certification, Contact } = req.body;

  // Validate that all required fields are provided
  if (!Name || !Title || !TargetedKeywords || !Education || !Certification || !Contact) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: Name, Title, TargetedKeywords, Education, Certification, or Contact.'
    });
  }

  // Save or append the profile to the JSON file
  const profileData = {
    Name,
    Title,
    TargetedKeywords,
    Education,
    Certification,
    Contact,
    timestamp: new Date().toISOString()
  };

  const profilesPath = path.join(__dirname, 'profiles.json');
  let profiles = [];

  // Check if the profiles.json file exists
  if (fs.existsSync(profilesPath)) {
    profiles = JSON.parse(fs.readFileSync(profilesPath, 'utf8'));
  }

  profiles.push(profileData);

  // Save updated profiles list to the JSON file
  fs.writeFileSync(profilesPath, JSON.stringify(profiles, null, 2));

  res.json({ success: true, message: 'Profile saved successfully!' });
});

app.get('/api/profiles', (req, res) => {
    const profilesPath = path.join(__dirname, 'profiles.json');
  
    // Read the profiles.json file
    fs.readFile(profilesPath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error reading profiles file.' });
      }
  
      try {
        const profilesList = JSON.parse(data); // Parse the JSON data
        res.json(profilesList); // Send the profiles data as a JSON response
      } catch (parseErr) {
        return res.status(500).json({ success: false, message: 'Error parsing profiles data.' });
      }
    });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
