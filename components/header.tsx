// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 w-full h-15 rounded-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">MyCard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:italic">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
