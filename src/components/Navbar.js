import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-2">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-600 animate-bounce">KBC Game</h1>
        <p className="mt-1">
          Project done by{' '}
          <a 
            href="https://priyanshugour.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800"
          >
            Priyanshu Gour
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
