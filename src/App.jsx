import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AppComp1 from './Components/AppComp/AppComp1';
import AppComp2 from './Components/AppComp/AppComp2';
import AppComp3 from './Components/AppComp/AppComp3';
import AppComp4 from './Components/AppComp/AppComp4';

const App = () => {

  // Write React Component logic/JavaScripts here
  const a = 3;
  const obj = { name: "prapakar", age: 30 };
  const arr = [1, 2, 3, 4];
  const arrObj = [
    {id:1, name: "Prapakar", age: 25},
    {id:2, name: "Govindan", age: 28},
    {id:3, name: "Ramya", age: 22}
  ]

  const handleSubmit = () => {
    //console.log('Button clicked');
    alert('Thanks for submitting...');
  }
  return (
    // props key and values initialize the same as all, ex. a={a}, obj={obj}
    <div>
      <>
      <Header />
      <h1 style={{color: "red"}}>This is my react day {a}!</h1>
      <button onClick={handleSubmit}>Click me</button>
    
      
      <AppComp1 a={a} />
      <AppComp2 obj = {obj} />
      <AppComp3 arr = {arr} />
      <AppComp4 arrObj = {arrObj} />
      <Footer />
      </>
    </div>
  );
};

export default App;