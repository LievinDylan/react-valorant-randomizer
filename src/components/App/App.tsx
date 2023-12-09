import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

function App() {
  return (
    <div className="flex flex-col items-between flex-grow h-screen bg-primary">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
