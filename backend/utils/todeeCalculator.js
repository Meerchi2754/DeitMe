
export const calculateTDEE = (weight, height, age, gender, activityLevel) => {
    let BMR;
  
    // Calculate BMR using the Mifflin-St Jeor Equation
    if (gender === 'male') {
      BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  
    // Calculate TDEE by multiplying BMR with activity level
    const activityMultipliers = {
      sedentary: 1.2,
      'lightly active': 1.375,
      'moderately active': 1.55,
      'very active': 1.725,
      'extra active': 1.9,
    };
  
    const TDEE = BMR * activityMultipliers[activityLevel];
    return TDEE;
  };