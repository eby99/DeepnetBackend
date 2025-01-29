import express from 'express';
import menuRoutes from './routes/menuRoutes';
import menuItemRoutes from './routes/menuItemRoutes';

const app = express();

app.use(express.json());
app.use('/api', menuRoutes);
app.use('/api', menuItemRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});