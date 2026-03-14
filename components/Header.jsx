import React from 'react';

function Header() {
  return (
    <h1 className="text-4xl font-bold my-8 flex items-center " style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
      To-do List
      <img src="https://imgur.com/Vp2uUK1.png" className="w-12 h-12 ml-2" alt="Background Image" />
    </h1>
  );
}

export default Header;