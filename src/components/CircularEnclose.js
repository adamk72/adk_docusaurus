import React from 'react';

const CircularEnclose = ({ image, alt }) => {
  return (
    <div className='circularEnclosure'>
      <img src={image} width='225px' height='auto' alt={alt} />
    </div>
  );
};
export default CircularEnclose;
