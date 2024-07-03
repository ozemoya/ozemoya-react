import React from 'react';

export const DesktopApps = ({ onContactsClick, onMusicClick }) => {
  return (
    <section className="desktop-apps">
      <div className="dapp dapp1">
        <img src="/Projects.png" alt="Projects" />
        <p className="text-black-50">Projects</p>
      </div>
      <div className="dapp dapp2">
        <img src="/Services.png" alt="Services" />
        <p className="text-black-50">Services</p>
      </div>
      <div className="dapp dapp3" onClick={onContactsClick}>
        <img src="/Contacts.png" alt="Contacts" />
        <p className="text-black-50">Contacts</p>
      </div>
      <div className="dapp dapp4" onClick={onMusicClick}>
        <img src="/Music.png" alt="Music" />
        <p className="text-black-50">Music</p>
      </div>
    </section>
  );
};

export default DesktopApps;
