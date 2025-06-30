// Detail.jsx
import React from 'react';
import '../component/Detail.css';
import { useNavigate} from 'react-router'; 

const Detail = ({ card= {}, onClose }) => {
  if (!card) return null; 
  const navigate= useNavigate();


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="card1">
          <div className="left">
          {card.imagePath ? (
          <img src={card.imagePath} alt={card.title} />
          ) : (
          <p>No image available</p>
          )}
          </div>
          <div className="right">
            <div className="product-info">
              <div className="product-name">
                <h1>{card.title}</h1>
              </div>
              <div className="details">
                <h3>{card.type}</h3>
                <h2>{card.description}</h2>
                {/* <h4><span className="fa fa-dollar"></span>{card.price || '150'}</h4>
                <h4 className="dis"><span className="fa fa-dollar"></span>{card.originalPrice || '200'}</h4> */}
              </div>
              {/* <span className="foot"><i className="fa fa-shopping-bag"></i>Buy Now</span>
              <span className="foot"><i className="fa fa-shopping-cart"></i>Add TO Cart</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
