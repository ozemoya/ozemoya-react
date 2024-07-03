import React from 'react';

const Window = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="window bg-gray-400 shadow-lg p-5 transform scale-150 rotate-6 absolute">
      <div className="title-bar flex justify-between items-center bg-gradient-to-b from-gray-200 to-orange-400 p-2 relative z-10 h-[27px] w-[200px] border border-black">
        <div className="title-bar-text absolute top-0 left-1 z-20 text-center font-bold text-black">Contacts</div>
        <button id="WindowClose" className="text-xl absolute top-0 right-0 p-0" aria-label="Close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="window-body bg-gray-100 p-2 border border-black overflow-auto w-[12.5em] h-[100px] bg-gradient-to-b from-gray-200 to-[#d6d5b9] bg-[url('images/papertexture.jpg')]">
        <p className="text-sm m-0">Email: myleskmiller@gmail.com</p>
        <p className="text-sm m-0"><a href="https://www.linkedin.com/in/myles-miller-669516263/">LinkedIn</a></p>
        <p className="text-sm m-0">Phone number: 678-559-2304</p>
      </div>
    </div>
  );
};

export default Window;