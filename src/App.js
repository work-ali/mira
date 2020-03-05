import React from 'react';
import { app_Styles } from './App_style';
import Header from './components/header/header';
import Selection from './components/selection/selection';
import Footer from './components/footer/footer';


export default function App() {
  const classes = app_Styles();

  return (
    <div className={classes.root}>
      <Header/>
      <Selection/>
      <Footer/>
    </div>
  )

}



