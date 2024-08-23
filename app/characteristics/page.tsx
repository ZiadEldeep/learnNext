import React from 'react';
import { FaUserMd, FaUsers, FaClock, FaAward } from 'react-icons/fa';

const Characteristics = () => {
  const data = [
    {
      title: 'Doctors',
      value: '20',
      description: 'Experienced professionals in various specialties.',
      icon: <FaUserMd className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: 'Visitors',
      value: '1,000+',
      description: 'Satisfied patients who trust our services.',
      icon: <FaUsers className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: 'Years of Experience',
      value: '15+',
      description: 'Providing top-notch healthcare services.',
      icon: <FaClock className="w-12 h-12 text-blue-600 mx-auto" />,
    },
    {
      title: 'Awards',
      value: '10',
      description: 'Recognized for excellence in medical care.',
      icon: <FaAward className="w-12 h-12 text-blue-600 mx-auto" />,
    },
  ];

  return (
<section className="py-12 bg-gray-500">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Characteristics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
              {item.icon}
              <h3 className="text-2xl font-semibold text-blue-600 mt-4">{item.value}</h3>
              <p className="text-xl font-medium text-gray-700 mt-2">{item.title}</p>
              <p className="text-gray-500 mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
