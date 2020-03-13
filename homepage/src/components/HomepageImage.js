import React from 'react';

function HomepageImage() {
  const url = 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/p960x960/29339909_1891006314307312_2423718133249343488_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=tE2LGZlNePQAX9adRuK&_nc_ht=scontent-hel2-1.xx&_nc_tp=6&oh=6493611438af8f665f6dbdbcddb7d43f&oe=5E8FCA58';
  return (
    <img src={url} style={{width: 350}} alt='Me!' />
  );
}

export default HomepageImage;