import React from 'react';
import Card from './Cards'; 
import Footer from './footer';
import '../component/Maintenancedeit.css'

const cardData = [
  { 
    imagePath: 'd1.jpg',
    type: 'Non-veg',
    date: '30.11.2022',
    description: 'Healthy Spanish chicken and beans',
  },
  {
    imagePath: 'd1.jpg',
    type: 'Non-veg',
    date: '30.11.2022',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imagePath: 'd1.jpg',
    type: 'Non-veg',
    date: '30.11.2022',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imagePath: 'd1.jpg',
    type: 'Non-veg',
    date: '30.11.2022',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imagePath: 'd1.jpg',
    title: 'Card 2',
    date: '30.11.2022',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imagePath: 'd1.jpg',
    title: 'Card 2',
    date: '30.11.2022',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imagePath: 'd1.jpg',
    title: 'Card 2',
    date: '30.11.2022',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imagePath: 'd1.jpg',
    title: 'Card 2',
    date: '30.11.2022',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },{
    imagePath: 'd1.jpg',
    title: 'Card 2',
    date: '30.11.2022',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },{
    imagePath: 'd1.jpg',
    title: 'Card 2',
    date: '30.11.2022',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  }
  // Add more card data as needed
];

const MaintaingHealth = () => (
  <div>
    <div className="avoid-text">
        <img src="/salad.png" alt="Avoid Icon" className="avoid-icon"  />
        <p> Healthy Habits, Healthy Life! </p>
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

export default MaintaingHealth;
