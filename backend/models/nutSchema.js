import mongoose from "mongoose";
import validator from "validator";

const nutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensure each food item is unique
  },
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  carbohydrates: {
    type: Number,
    required: true,
  },
  foodType: {
    type: String,
    enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Gluten-Free', 'Other'], // Define food types
    default: 'Other',
  },
  servingSize: {
    type: String, // E.g., "100g", "1 cup"
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Timestamp for when the food item was added
  },
});

export  const Nutrient = mongoose.model("Nutrient", nutSchema);
