import dotenv from 'dotenv';
dotenv.config(); 
console.log("TEST_VARIABLE:", process.env.TEST_VARIABLE);
import "../config.env"
import axios from 'axios';
import mongoose from 'mongoose';
import { Nutrient as Food } from '../models/nutSchema.js'; // Ensure the path is correct
import { dbConnection } from './dbConnection.js';

dbConnection(); 

const fetchFoodData = async () => {
  const api_id = process.env.API_ID; // Use environment variables
  const api_key = process.env.API_KEY; // Use environment variables
  // const uri = process.env.MONGO_URI;

  if (!uri) { 
    console.error('MONGO_URI is undefined');
    return;
  }

  console.log('MongoDB URI:', uri);
  mongoose.connect(uri);

  try {
    const response = await axios({
      method: "get",
      url: "https://trackapi.nutritionix.com/v2/search/item/?upc=49000000450",
      headers: {
        'x-app-id': api_id,
        'x-app-key': api_key,
        'Content-Type': 'application/json',
      },
    });

    const food = response.data;
    if (!food || !food.foods) {
      throw new Error("No food data found.");
    }

    // Save the fetched food item into MongoDB
    const foodItem = new Food({
      name: food.foods[0].food_name,
      calories: food.foods[0].nf_calories,
      protein: food.foods[0].nf_protein,
      fat: food.foods[0].nf_total_fat,
      carbohydrates: food.foods[0].nf_total_carbohydrate,
      foodType: 'Branded', // Can set based on logic
    });

    await foodItem.save();
    console.log(`Saved: ${food.foods[0].food_name}`);

    console.log('Food data population complete.');
  } catch (error) {
    console.error('Error fetching food data:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

fetchFoodData();
