import React from 'react';
import Card from './Cards'; // Import the Card component
import Footer from '../component/footer';
import '../component/Weightloss.css'
const cardData = [
  {
    imagePath: 'd17.jpg',
    type: 'Veg',
    date: '30.11.2022',
    title: 'Bananas.',
    description: 'Bananas',
    height:"100%", // Adjust as needed
    width:"500px",
  },
  {
    imagePath: 'd14.jpeg',
    type: 'Veg',
    title: 'Milk.',
    date: '30.11.2022',
    description: 'Milk.',
    height:"250px", // Adjust as needed
    width:"300px",
  },
  {
    imagePath: 'd6.jpeg',
    type: 'Veg',
    date: '30.11.2022',
    title: 'Mustards Pork Chops & Carrots.',
    description: 'Sheet-Pan Maple-Mustard Pork Chops & Carrots.',
    height:"250px", // Adjust as needed
    width:"300px",
  },
  {
    imagePath: 'd8.jpeg',
    type: 'Veg',
    title: 'Paneer Bhurji',
    date: '30.11.2022',
    description: 'Paneer bhurji.',
    height:"250px", // Adjust as needed
    width:"300px",
  },
  {
    imagePath: 'd9.jpeg',
    title: 'Chana masala.',
    type: 'Veg',
    date: '30.11.2022',
    description: 'Chana masala',
    height:"250px", // Adjust as needed
    width:"300px",
  },
  {
    imagePath: 'd10.jpeg',
    title: 'Mixed vegetable curry',
    type: 'Veg',
    date: '30.11.2022',
    description: 'Mixed vegetable curry.',
    height:"250px", // Adjust as needed
    width:"300px",
  },
  {
    imagePath: 'd11.jpeg',
    title: 'Paneer Tikka',
    type: 'Veg',
    date: '30.11.2022',
    description: 'Paneer Tikka.',
    height:"250px", // Adjust as needed
    width:"300px",
  },
  {
    imagePath: 'd12.jpeg',
    title: 'Dal Makhani',
    type: 'Veg',
    date: '30.11.2022',
    description: 'Dal Makhani.',
    height:"250px", // Adjust as needed
    width:"300px",
  },{
    imagePath: 'd13.jpeg',
    title: 'Paratha',
    type: 'Veg',
    date: '30.11.2022',
    description: 'Paratha.',
    height:"250px", // Adjust as needed
    width:"300px",
  },{
    imagePath: 'd5.jpeg',
    title: 'Vegetable & Tuna Pasta Salad',
    date: '30.11.2022',
    type: 'Veg',
    description: 'Vegetable & Tuna Pasta Salad.',
    height:"250px", // Adjust as needed
    width:"300px",
  }
  // Add more card data as needed
];

const WeightGain = () => (
  <div>
    <div className="avoid-text">
        <img src="/muscle.png" alt="Avoid Icon" className="avoid"  style={{ height: '65px', width: '75px' }}/>
        <p>Muscles Are Made in the Gym, Fed in the Kitchen!</p>
    </div>
    <div className="cards-container">
    {cardData.map((card, index) => (
      <Card
        key={index}
        imagePath={card.imagePath}
        title={card.title ||""}
        type={card.type ||""}
        description={card.description}
      />
    ))}
    </div>
    <Footer />
  </div>
);

export default WeightGain;
