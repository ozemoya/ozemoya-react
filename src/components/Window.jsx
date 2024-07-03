import React from 'react';

const Window = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="window bg-gray-400 shadow-lg p-5 transform scale-150 rotate-6 absolute">
      <div className="title-bar flex justify-between items-center bg-gradient-to-b from-gray-200 to-orange-400 p-2">
        <div className="title-bar-text font-bold text-black">Contacts</div>
        <button id="WindowClose" className="text-xl" aria-label="Close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="window-body bg-gray-100 p-2 border border-black overflow-auto">
        <p className="user-select-none text-sm">Email: myleskmiller@gmail.com</p>
        <p className="user-select-none text-sm">
          <a href="https://www.linkedin.com/in/myles-miller-669516263/">LinkedIn</a>
        </p>
        <p className="user-select-none text-sm">Phone number: 678-559-2304</p>
      </div>
    </div>
  );
};

export default Window;