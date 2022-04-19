import React from 'react';
import {HelmetProvider, Helmet} from "react-helmet-async";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Aside from "./components/Layout/Aside/Aside";
import "./App.css";

function App(){
  return (
    <>
        <HelmetProvider>
            <Helmet>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Helmet>
        </HelmetProvider>
        <Header />
        <Aside />
        
        <Footer />
    </>
  );
}
export default App;
