import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './routes/ AppRoutes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '/webapps/lms_react/src/App.css'
function App() {

  return (
    <>
    <Router>
      <AppRoutes />
    </Router>
    </>
  )
}

export default App
