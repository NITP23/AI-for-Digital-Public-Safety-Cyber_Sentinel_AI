import mongoose from 'mongoose';

const heatmapDataSchema = new mongoose.Schema({
  city: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  riskLevel: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'VERY HIGH', 'CRITICAL'] },
  activeCases: { type: Number, default: 0 },
  officersDeployed: { type: Number, default: 0 },
  aiRecommendation: { type: String },
  predictions: [
    {
      fraudType: String,
      trend: String,
      period: String,
      projectedRisk: String
    }
  ],
  lastUpdated: { type: Date, default: Date.now }
});

export default mongoose.model('HeatmapData', heatmapDataSchema);
