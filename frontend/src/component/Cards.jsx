// Card.jsx
import './Card.css';
import { useNavigate } from "react-router-dom";
import { useState, React } from 'react';
import Detail from './Detail';

const Card = ({ imagePath, description, title, type, price, originalPrice,height, width }) => {
    const navigate = useNavigate();
    const [showDetail, setShowDetail] = useState(false);

    const handleDetail = () => {
        setShowDetail(true); 
    };

    const closeModal = () => {
        setShowDetail(false);
    };

    return (
        <>
            <div className={`card ${showDetail ? 'blur-background' : ''}`}>
                <div className="hero">
                    <img src={imagePath} alt="Card Image" className="image" style={{ height: height || '290px', width: width || '400px', objectFit: 'cover' }} />
                    <div className="text"></div>
                    <div className="main-text">
                        <p>{description}</p>
                    </div>

                    <div className="hero-btn">
                        <button onClick={handleDetail}>Know More</button>
                    </div>
                </div>
            </div>
            {showDetail && (
                <Detail 
                    card={{ imagePath, type, description, title, price, originalPrice }} 
                    onClose={closeModal} 
                />
            )}
        </>
    );
};

export default Card;
