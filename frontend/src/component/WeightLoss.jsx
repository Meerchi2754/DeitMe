import React from 'react';
import Card from './Cards'; // Import the Card component
import Footer from '../component/footer';
import '../component/Weightloss.css'

const cardData = [
  {
    imagePath: 'd1.jpg',
    type: 'Non-veg',
    title: 'Healthy Spanish chicken and beans',
    date: '30.11.2022',
    description: 'Healthy Spanish chicken and beans',
  },
  {
    imagePath: 'd18.jpg',
    type: 'Veg',
    title: 'Besan Chilla',
    date: '30.11.2022',
    description: 'Besan Chilla',
  },
  {
    imagePath: 'd19.jpg',
    type: 'Veg',
    title: 'Masala Oats',
    date: '30.11.2022',
    description: 'Masala Oats',
  },
  {
    imagePath: 'd20.jpg',
    type: 'Veg',
    title: 'Quinoa Dosa',
    date: '30.11.2022',
    description: 'Quinoa Dosa.',
  },
  {
    imagePath: 'd21.jpg',
    title: 'Egg Bhurji',
    date: '30.11.2022',
    type: 'Non-Veg',
    description: 'Egg Bhurji',
  },
  {
    imagePath: 'd22.jpg',
    title: 'Chickpea Salad',
    date: '30.11.2022',
    type: 'Veg',
    description: 'Chickpea Salad',
  },
  {
    imagePath: 'd23.jpg',
    title: 'Kala Chana Chaat',
    date: '30.11.2022',
    type: 'Veg',
    description: 'Kala Chana Chaat',
  },
  {
    imagePath: 'd24.jpg',
    title: 'Sprouts Salad',
    date: '30.11.2022',
    type: 'Veg',
    description: 'Sprouts Salad',
  },{
    imagePath: 'd25.jpeg',
    title: 'Vegetable Khichdi',
    date: '30.11.2022',
    type: 'Veg',
    description: 'Vegetable Khichdi',
  }
  // Add more card data as needed
];

const WeightLoss = () => (
  <div>
    <div className="avoid-text">
        <img src="/dont.png" alt="Avoid Icon" className="avoid-icon"  />
        <p>Avoid Processed Food and Sugar Food</p>
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

export default WeightLoss;
