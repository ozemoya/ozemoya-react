import React from 'react';

const DesktopApps = ({ onContactsClick, onMusicClick }) => {
  return (
    <section className="flex flex-col items-start justify-evenly absolute top-8 left-0 mb-10 ml-8 text-white">
      <div className="dapp flex flex-col mb-2">
        <img src="/Projects.png" alt="Projects" className="w-30 p-5" />
        <p className="text-black-50">Projects</p>
      </div>
      <div className="dapp flex flex-col mb-2">
        <img src="/Services.png" alt="Services" className="w-30 p-5" />
        <p className="text-black-50">Services</p>
      </div>
      <div className="dapp flex flex-col mb-2" onClick={onContactsClick}>
        <img src="/Contacts.png" alt="Contacts" className="w-30 p-5" />
        <p className="text-black-50">Contacts</p>
      </div>
      <div className="dapp flex flex-col mb-2" onClick={onMusicClick}>
        <img src="/Music.png" alt="Music" className="w-30 p-5" />
        <p className="text-black-50">Music</p>
      </div>
    </section>
  );
};

export default DesktopApps;