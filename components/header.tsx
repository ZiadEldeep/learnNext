// components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 w-full h-15 rounded-md mb-9 mt-0" >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold">MyCard</Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="card1" className="hover:italic">card1</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">card2</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">card3</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
