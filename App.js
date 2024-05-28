import React from "react";
import { APIProvider } from "./src/context/APIContext";
import Home from "./src/pages/Home";


export default function App() {
  
  return (
    <APIProvider>
      <Home />
    </APIProvider>
    
  )
}