import mongoose, { Document, Model, Types } from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const Schema = new mongoose.Schema({
  name: {
    name: String,
    required: true,
    index: true,
  },
  value: {
    type: Number,
    required: true,
    index: true,
  },
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

export interface ITransaction extends Document {
  name: string;
  value: Number;
  id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionModel: Model<ITransaction> = mongoose.model(
  "Transaction",
  Schema
);

export default TransactionModel;
