import React from 'react';
import company1 from '../../assets/company-1.jpg';
import company2 from '../../assets/company-2.jpg';

const TrustedBySection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-sm font-semibold text-gray-500 mb-8">
          High Performing Teams at Manufacturing companies Use Cata
        </h2>
        <div className="flex justify-center gap-8">
          <img src={company1} alt="Company 1" className="w-48 h-16 object-contain rounded" />
          <img src={company2} alt="Company 2" className="w-48 h-16 object-contain rounded" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection; 