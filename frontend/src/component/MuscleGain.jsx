import React from 'react';
import Card from './Cards'; // Import the Card component
import Footer from '../component/footer';
import '../component/Musclegain.css'

const cardData = [
  {
    imagePath: 'd26.jpeg',
    type: 'Veg',
    date: '30.11.2022',
    description: 'Protein smoothies with banana and almond milk ',
  },
  {
    imagePath: 'd27.jpeg',
    type: 'Veg',
    date: '30.11.2022',
    description: 'Rajma.',
  },
  {
    imagePath: 'd28.jpeg',
    type: 'Veg',
    date: '30.11.2022',
    description: 'Paneer.',
  },
  {
    imagePath: 'd29.jpg',
    type: 'Veg',
    date: '30.11.2022',
    description: 'Masoor Dal.',
  },
  {
    imagePath: 'pr11.jpeg',
    type: 'Veg',
    title: 'Chole(Chickpeas)',
    date: '30.11.2022',
    description: 'Chole(Chickpeas)',
  },
  {
    imagePath: 'pr12.jpg',
    type: 'Veg',
    title: ' Beans',
    date: '30.11.2022',
    description: 'Beans',
  }
];

const MuscleGain = () => (
  <div>
    <div className="avoid-text">
        <img src="/bibimbap.png" alt="Avoid Icon" className="avoid-icon"  />
        <p> Real Food, Real Gains </p>
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

export default MuscleGain;
