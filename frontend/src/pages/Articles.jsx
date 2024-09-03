import React from 'react'
import Navbar from "../component/Navbar"
import './ArticalePage.css';

const articles = [
  {
    title: "The Benefits of a Balanced Diet",
    date: "August 22, 2024",
    content: "A balanced diet provides the nutrients your body needs to work effectively. Without balanced nutrition, your body is more prone to disease, infection, fatigue, and low performance."
  },
  {
    title: "Understanding Macros: Protein, Carbs, and Fats",
    date: "August 20, 2024",
    content: "Macros are the three main categories of nutrients you eat: protein, carbohydrates, and fats. Understanding how to balance these macros can help you maintain a healthy diet."
  },
  {
    title: "How to Start Eating Healthy",
    date: "August 18, 2024",
    content: "Starting to eat healthy can seem overwhelming, but it doesn't have to be. Begin with small changes, like adding more fruits and vegetables to your meals and cutting back on processed foods."
  },
  {
    title: "The Importance of Hydration",
    date: "August 16, 2024",
    content: "Staying hydrated is crucial for overall health. Water plays a key role in maintaining body functions, such as regulating temperature and flushing out toxins."
  },
  {
    title: "Vitamins and Minerals: What You Need to Know",
    date: "August 14, 2024",
    content: "Vitamins and minerals are essential nutrients that the body needs to function properly. They support a wide range of body functions, from strengthening bones to healing wounds."
  },
  {
    title: "The Role of Fiber in a Healthy Diet",
    date: "August 12, 2024",
    content: "Fiber is important for digestive health and can help prevent certain diseases. Including enough fiber in your diet can improve digestion and reduce the risk of heart disease."
  },
  {
    title: "Healthy Snacking: Tips and Ideas",
    date: "August 10, 2024",
    content: "Healthy snacking can help manage hunger and provide energy between meals. Choose snacks that are nutrient-dense, such as fruits, nuts, and yogurt, to keep your energy levels up."
  },
  {
    title: "Understanding Portion Control",
    date: "August 8, 2024",
    content: "Portion control is key to maintaining a healthy weight. By eating the right amount of food, you can enjoy your favorite meals without overeating."
  },
  {
    title: "The Impact of Sugar on Your Health",
    date: "August 6, 2024",
    content: "Excessive sugar consumption can lead to various health issues, including obesity, diabetes, and heart disease. Reducing sugar intake can improve your overall health."
  },
  {
    title: "Meal Planning for a Healthy Week",
    date: "August 4, 2024",
    content: "Meal planning can help you stick to a healthy diet by ensuring you have nutritious meals ready throughout the week. It also saves time and reduces the temptation to eat unhealthy foods."
  },
  {
    title: "Incorporating Superfoods into Your Diet",
    date: "August 2, 2024",
    content: "Superfoods are nutrient-rich foods that are particularly beneficial for health and well-being. Examples include berries, leafy greens, and fatty fish."
  },
  {
    title: "The Benefits of Plant-Based Diets",
    date: "July 31, 2024",
    content: "Plant-based diets can provide all the necessary nutrients while reducing the risk of chronic diseases. They emphasize whole grains, fruits, vegetables, and legumes."
  } 
];

const Articles = () => {
  return (
    <>
      <Navbar />
    
      <div className="article-page">
        <br /><br /><br /><br />
      <h1 className='ff'>Health Diet Articles</h1>
      <div className="articles">
      
        {articles.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p className="date">{article.date}</p>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Articles
