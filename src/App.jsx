import React, { useEffect, useState } from "react";
import "./App.css";
import DesktopApps from "./components/DesktopApps";
import Window from "./components/Window";
import SpotifyPlayer from "./components/SpotifyPlayer";
import Taskbar from "./components/Taskbar";
import LoadingScreen from "./components/LoadingScreen";

export const App = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = '3702918983a4465894f86153fcaabf02'; // Replace with your actual API key
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setHeadlines(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        document.body.style.display = 'none';
      } else {
        document.body.style.display = 'block';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <DesktopApps 
        onContactsClick={() => setShowWindow(true)}
        onMusicClick={() => setShowSpotify(true)}
      />
      <Window show={showWindow} onClose={() => setShowWindow(false)} />
      <SpotifyPlayer show={showSpotify} />
      <Taskbar 
        headlines={headlines}
      />
       <LoadingScreen /> 
    </div>
  );
};

export default App;