import mongoose from 'mongoose';

const callReportSchema = new mongoose.Schema({
  callerNumber: { type: String, required: true },
  callDuration: { type: Number, required: true }, // in seconds
  transcript: [
    {
      speaker: { type: String, enum: ['Caller', 'Citizen'] },
      text: { type: String },
      timestamp: { type: String },
      flag: { type: String, default: null } // e.g., 'threat', 'money-request'
    }
  ],
  analysis: {
    riskScore: { type: Number, min: 0, max: 100 },
    scamType: { type: String },
    reasons: [
      {
        label: String,
        confidence: Number
      }
    ],
    isDeepfake: { type: Boolean, default: false },
    deepfakeConfidence: { type: Number }
  },
  status: { type: String, enum: ['Pending', 'Alert Sent', 'Investigating', 'Closed'], default: 'Pending' },
  reportedAt: { type: Date, default: Date.now }
});

export default mongoose.model('CallReport', callReportSchema);
