import express from 'express';

const router = express.Router();

// GET endpoint
router.get('/', (req, res) => {
    // This is just a mock response. In a real app, you'd typically fetch this from a database.
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
    ];
    res.json(users);
});

// POST endpoint
router.post('/', (req, res) => {
    const newUser = req.body;
    // In a real app, you'd typically save this to a database
    console.log('New user:', newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
});

export default router;