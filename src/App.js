import './App.css';
import Navebar from './Navebar';
import data from './data';
import Card from './Card';
import Carousel from './Carousel';
import Carousel_Data from './Carousel_Data.json';
import { useState } from 'react';
import Footer from './Footer';

function App() {
  // const a=10;
  // const [a, setA] = useState(100);
  // const handleclick = () => {
  //   setA(a - 1);
  // }
  // const [first, setFirst] = useState(100);
  // const increase1=()=>{
  //   setFirst(first+2);
  // }

  return (
    <>

      {/* <p className='mx-2 text-white'>a: {a} </p>
      <button onClick={handleclick}>subtract by 1</button>
      <p className='ms-2 text-white'>first is : {first}</p>
      <button onClick={increase1}>Add +2</button> */}
      <Navebar />
      <div className='Carousel_top text-center p-1'>
        <h2>TRENDING MOVIES</h2>
      </div>
      <Carousel data1={Carousel_Data[0]} data2={Carousel_Data[1]} data3={Carousel_Data[2]} />
      
      {
        data.map((e, i) =>
          <Card data1={e} key={i} />
        )
      }
      <Footer/>
    </>
  );
}

export default App;
