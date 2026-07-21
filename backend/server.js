import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cyber_sentinel_ai')
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Basic API Routes structure
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Cyber Sentinel AI Backend is running' });
});

// Import Routes (Placeholders for where controllers will map)
// import callRoutes from './routes/callRoutes.js';
// import entityRoutes from './routes/entityRoutes.js';
// import mapRoutes from './routes/mapRoutes.js';

// app.use('/api/calls', callRoutes);
// app.use('/api/entities', entityRoutes);
// app.use('/api/heatmap', mapRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Cyber Sentinel API running on http://localhost:${PORT}`);
});
