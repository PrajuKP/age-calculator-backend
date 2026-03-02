const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/calculate-age', (req, res) => {
    const { birthDate } = req.body;

    const today = new Date();
    const dob = new Date(birthDate);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    res.json({ age });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});