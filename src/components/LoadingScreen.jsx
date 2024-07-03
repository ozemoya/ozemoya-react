import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-orange-400 z-50">
      <div className="headline-container w-2/5 text-left">
        <h1 className="text-4xl font-bold">Ozemoya</h1>
      </div>
      <div className="flex space-x-2 mt-5">
        <div className="dot w-5 h-5 bg-white rounded-full animate-bounce"></div>
        <div className="dot w-5 h-5 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="dot w-5 h-5 bg-white rounded-full animate-bounce delay-200"></div>
      </div>
      <span className="catdance absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <img src="/catdancegif.gif" alt="Loading" />
      </span>
    </div>
  );
};

export default LoadingScreen;