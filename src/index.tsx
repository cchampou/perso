import React from 'react';
import './index.css';
import {createRoot} from "react-dom/client";

const App = () => {

  return (
    <section className="m-4">
      <h1 className="text-xl font-black">Pomodoro application - Privacy policy</h1>
      <p>The application is strictly respecting your privacy. There is no data collected.</p>
    </section>
  )
}


const rootHTMLElement = document.getElementById('root');
if (rootHTMLElement) createRoot(rootHTMLElement).render(<App />);
