import mongoose from "mongoose";

const deitPlanSchema = new mongoose.Schema({
    breakfast:{type:String,required:true},
    lunch: {type:String,required:true},
    dinner:{type:String,required:true},
    snacks:{type:String, required:true},
    totalCalories:{type:Number,required:true},
    protein:{type:Number,required:true},
    carbs:{type:Number,required:true},
    fats:{type:Number,required:true}
});

module.exports=mongoose.model('DeitPlan',deitPlanSchema);