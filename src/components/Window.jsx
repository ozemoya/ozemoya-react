import React from 'react';

const Window = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Contacts</div>
        <button id="WindowClose" className="position-absolute top-0 end-0 row-md-0 p-0" aria-label="Close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="window-body">
        <p className="user-select-none">Email: myleskmiller@gmail.com</p>
        <p className="user-select-none">
          <a href="https://www.linkedin.com/in/myles-miller-669516263/">LinkedIn</a>
        </p>
        <p className="user-select-none">Phone number: 678-559-2304</p>
      </div>
    </div>
  );
};

export default Window;
