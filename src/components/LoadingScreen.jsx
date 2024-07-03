import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="dot" id="dot1"></div>
      <div className="dot" id="dot2"></div>
      <div className="dot" id="dot3"></div>
      <span className="catdance position-absolute bottom-30 start-50 translate-middle-x">
        <img src="/catdancegif.gif" alt="Loading" />
      </span>
    </div>
  );
};

export default LoadingScreen;