import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="https://images.app.goo.gl/wP3bkRSn3h6jVouFA" alt="Arghyam Logo" className="h-6" />
          <span>India Water Portal is an Arghyam initiative</span>
        </div>
        <div className="text-center">
          <span>© indiawaterportal-demo 2024</span>
          <span className="block">Powered by Quintype</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;