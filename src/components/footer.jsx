import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm md:text-base">
          Thank you for visiting my portfolio! I appreciate your interest and hope you found everything you were looking for.
        </p>
        <p className="text-xs md:text-sm mt-2">© {new Date().getFullYear()} Abinanthanan.A - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;