import express, { Express, Request, Response } from 'express';
import userRouter from "./routers/userRouter";

const app: Express = express();
const port: number = 3000;

// Middleware to parse JSON body
app.use(express.json());
app.use("/api/user", userRouter)

// Define User interface
interface User {
  id: number;
  name: string;
}

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Express server!');
});

// GET endpoint
app.get('/api/users', (req: Request, res: Response) => {
  // This is just a mock response. In a real app, you'd typically fetch this from a database.
  const users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  res.json(users);
});

// POST endpoint
app.post('/api/users', (req: Request, res: Response) => {
  const newUser: User = req.body;
  // In a real app, you'd typically save this to a database
  console.log('New user:', newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});