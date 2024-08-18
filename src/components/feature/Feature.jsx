import React from 'react'
import "./feature.css"

const Feature = ({ title, content, imageSrc, alt }) => {
    return (
        <div className="feature-item">
          <img className="feature-icon" src={imageSrc} alt={alt} />
          <h2 className="feature-item-title">{title}</h2>
          <p>{content}</p>
        </div>
      );
    };

export default Feature