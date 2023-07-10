
import { useRef } from 'react';
import './App.css';
import Test from './Test';



function App() {
  
  //  const nameField = useRef(null)
  //  const nameField2 = useRef(null)

  //  const send = () => {
  //   const inputElement = nameField.current;
  //   console.log(inputElement.value);
  //   const inputElement2 = nameField2.current;
  //   console.log(inputElement2.value);
  //  }

   const data = [
    {
      title: "Test-1",
      price: 200,
      date: "2022",
      // d: new Date()
      id: Math.random()
    },
    {
      title: "Test-2",
      price: 300,
      date: "2021",
      // d: new Date()
      id: Math.random()
    },
    {
      title: "Test-3",
      price: 400,
      date: "2023",
      // d: new Date()
      id: Math.random()
    },
    {
      title: "Test-4",
      price: 500,
      date: "2020",
      id: Math.random()
    },
  ]
    
  
  return (
    <div className="App">
      {data.map((el) => {
        // {el.date === 2023 ? el.date : el.date}
return(
        <Test title={el.title} price={el.price} date={el.date} id={el.id}/>
)
})}
      {/* <input type='text' ref={nameField} ></input>
      <input type='text' ref={nameField2} ></input>
      <button onClick={send}>ADD</button> */}
    </div>
  );
}

export default App;
