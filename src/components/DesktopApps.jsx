import React, { useState } from 'react';

const DesktopApps = ({ onContactsClick, onMusicClick }) => {
  const [isWindowVisible, setIsWindowVisible] = useState(false);

  const handleAppClick = () => {
    setIsWindowVisible(true);
  };

  return (
    <section className="absolute top-8 left-0 flex flex-col items-start justify-evenly text-white mb-10 ml-8">
      <div className="dapp flex flex-col mb-2 hover:transform hover:-translate-y-1 hover:cursor-pointer hover:bg-[#cdb6a0] transition-colors transition-padding duration-500 hover:py-2 rounded">
        <img src="/Projects.png" alt="Projects" className="w-30 p-5" />
        <p className="inline bg-[rgba(104,76,76,0.4)] shadow-[6px_2px_3px_rgba(239,155,60,0.2)] font-['PixelOperatorMono'] mt-[-10px]">Projects</p>
      </div>
      <div className="dapp flex flex-col mb-2 hover:transform hover:-translate-y-1 hover:cursor-pointer hover:bg-[#cdb6a0] transition-colors transition-padding duration-500 hover:py-2 rounded">
        <img src="/Services.png" alt="Services" className="w-30 p-5" />
        <p className="inline bg-[rgba(104,76,76,0.4)] shadow-[6px_2px_3px_rgba(239,155,60,0.2)] font-['PixelOperatorMono'] mt-[-10px]">Services</p>
      </div>
      <div className="dapp flex flex-col mb-2 hover:transform hover:-translate-y-1 hover:cursor-pointer hover:bg-[#cdb6a0] transition-colors transition-padding duration-500 hover:py-2 rounded" onClick={onContactsClick}>
        <img src="/Contacts.png" alt="Contacts" className="w-30 p-5" />
        <p className="inline bg-[rgba(104,76,76,0.4)] shadow-[6px_2px_3px_rgba(239,155,60,0.2)] font-['PixelOperatorMono'] mt-[-10px]">Contacts</p>
      </div>
      <div className="dapp flex flex-col mb-2 hover:transform hover:-translate-y-1 hover:cursor-pointer hover:bg-[#cdb6a0] transition-colors transition-padding duration-500 hover:py-2 rounded" onClick={onMusicClick}>
        <img src="/Music.png" alt="Music" className="w-30 p-5" />
        <p className="inline bg-[rgba(104,76,76,0.4)] shadow-[6px_2px_3px_rgba(239,155,60,0.2)] font-['PixelOperatorMono'] mt-[-10px]">Music</p>
      </div>
      {isWindowVisible && (
        <div className="window bg-white p-4 shadow-lg absolute top-0 left-0">
          <h1>Window Content</h1>
          <button onClick={() => setIsWindowVisible(false)}>Close</button>
        </div>
      )}
    </section>
  );
};

export default DesktopApps;