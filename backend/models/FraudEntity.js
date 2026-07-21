import mongoose from 'mongoose';

const fraudEntitySchema = new mongoose.Schema({
  entityType: { type: String, enum: ['Phone', 'SIM', 'UPI', 'BankAccount', 'Website', 'IP', 'IMEI'], required: true },
  value: { type: String, required: true, unique: true }, // e.g., '+9198765XXXXX' or 'scammer@okaxis'
  riskScore: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, enum: ['Active', 'Blocked', 'Frozen', 'Takedown Requested'], default: 'Active' },
  associatedCluster: { type: String }, // e.g., '#OP-PHANTOM-99'
  metadata: {
    state: String,
    bankName: String,
    domainAge: String,
    victimsAffected: { type: Number, default: 0 },
    totalAmountStolen: { type: Number, default: 0 }
  },
  connectedEntities: [
    {
      entityId: { type: mongoose.Schema.Types.ObjectId, ref: 'FraudEntity' },
      relationshipType: String // e.g., 'Linked', 'Receives funds', 'Hosted on'
    }
  ],
  lastUpdated: { type: Date, default: Date.now }
});

export default mongoose.model('FraudEntity', fraudEntitySchema);
