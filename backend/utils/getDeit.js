const getDietRecommendation = (bmi, activityLevel, healthGoal, foodOption) => {
    let dietPlan = [];
    
    // Define basic diet options
    const dietOptions = {
      weightLoss: ['Low carb foods', 'High protein', 'Fruits', 'Vegetables'],
      weightGain: ['High-calorie foods', 'Healthy fats', 'Protein shakes'],
      muscleGain: ['Protein-rich foods', 'Carbs for energy', 'Healthy fats'],
      muscleLoss: ['Calorie reduction', 'Lean proteins', 'Vegetables'],
    };
  
    // Filter diet based on health goal
    switch (healthGoal) {
      case 'Weight Loss':
        dietPlan = dietOptions.weightLoss;
        break;
      case 'Weight Gain':
        dietPlan = dietOptions.weightGain;
        break;
      case 'Muscle Gain':
        dietPlan = dietOptions.muscleGain;
        break;
      case 'Muscle Loss':
        dietPlan = dietOptions.muscleLoss;
        break;
      default:
        dietPlan = ['Balanced Diet'];
    }
  
    // Adjust diet based on food options
    if (foodOption === 'Vegetarian') {
      dietPlan = dietPlan.filter(item => item !== 'Protein-rich foods');
      dietPlan.push('Plant-based proteins');
    } else if (foodOption === 'Vegan') {
      dietPlan.push('Vegan supplements');
    } else if (foodOption === 'Gluten-free') {
      dietPlan.push('Gluten-free grains');
    }
  
    return dietPlan;
  };
  
  // API to get diet recommendation
  app.post('/get-diet-recommendation', (req, res) => {
    const { bmi, activityLevel, healthGoal, foodOption } = req.body;
  
    try {
      const dietPlan = getDietRecommendation(bmi, activityLevel, healthGoal, foodOption);
      res.status(200).json({ dietPlan });
    } catch (err) {
      res.status(500).json({ message: 'Error getting diet recommendation', err });
    }
  });
  