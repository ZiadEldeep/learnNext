// components/Card.tsx
import Image from 'next/image';
// import styles from './Card.module.css';

interface Card {
  title: string;
  content: string;
  gh?: string;
}
const Card: React.FC<Card> = ({ title, content ,gh }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-40 pb-5 bg-white border-2 border-red-500 rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image 
              src="/image/chefs-1.jpg" 
              alt="It's a chef" 
              layout="responsive" 
              width={100} 
              height={100} 
              className="object-contain" 
            />
            <div className="absolute inset-x-0 bottom-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320" 
                className="w-full text-gray-200 fill-current"
              >
                <path fillOpacity="1" d="M0,256L48,213.3C96,171,192,85,288,64C384,43,480,85,576,133.3C672,181,768,235,864,234.7C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
          <ul className="flex justify-around p-4 bg-gray-100 rounded-lg">
            <li><i className="fab fa-twitter text-gray-400 hover:text-gray-600"></i></li>
            <li><i className="fab fa-facebook-f text-gray-400 hover:text-gray-600"></i></li>
            <li><i className="fab fa-instagram text-gray-400 hover:text-gray-600"></i></li>
            <li><i className="fab fa-linkedin text-gray-400 hover:text-gray-600"></i></li>
          </ul>
        </div>
  
        {/* Duplicate the above card as needed */}
        <div className="w-40 pb-5 bg-white border-2 border-red-500 rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Image 
              src="/image/chefs-2.jpg" 
              alt="It's a chef" 
              layout="responsive" 
              width={100} 
              height={100} 
              className="object-contain" 
            />
            <div className="absolute inset-x-0 bottom-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320" 
                className="w-full text-gray-200 fill-current"
              >
                <path fillOpacity="1" d="M0,256L48,213.3C96,171,192,85,288,64C384,43,480,85,576,133.3C672,181,768,235,864,234.7C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
          <ul className="flex justify-around p-4 bg-gray-100 rounded-lg">
            <li><i className="fab fa-twitter text-gray-400 hover:text-gray-600"></i></li>
            <li><i className="fab fa-facebook-f text-gray-400 hover:text-gray-600"></i></li>
            <li><i className="fab fa-instagram text-gray-400 hover:text-gray-600"></i></li>
            <li><i className="fab fa-linkedin text-gray-400 hover:text-gray-600"></i></li>
          </ul>
        </div>
  
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Card;
