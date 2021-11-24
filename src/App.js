import './App.css';
import React,{useState} from 'react';
import { Header } from './components/header/Header';
import { Review } from './components/Review';

import Data from './components/Data';
import {Button} from 'react-bootstrap'
function App() {

  let [person,setPerson]=useState(Data)
  return (
    <div className="App">

      <Header />
      <h3 className='text-success p-3'>Reviews</h3>
      <Review person={person}/>

     
      
    </div>
  );
}

export default App;
