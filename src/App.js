import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
  const products = [
    
      {name : "Photoshop", price: "$90.99"},
      {name : "Ilustrator", price: "$60.99"},
      {name : "PDF Reader", price: "$10.99"},   
  ]
  
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Todos></Todos>
       
        
        <Product product ={products[0]}></Product>
        <Product product ={products[1]}></Product>
        <Product product ={products[2]}></Product>

        {
          products.map(pd =><Product product ={pd}></Product>)
        }
        

        </header>
        </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () =>  setCount(count + 1);
  const handleDecrese = () => setCount(count -1);
  return(
    <div>
      <h1>Count :{count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = {handleDecrese}>Decrese</button>
    </div>
  )
}



 function Todos(){
   const[todos, setTodos] = useState([])
   useEffect(() =>{
     fetch('https://jsonplaceholder.typicode.com/todos')
     .then(res => res.json())
     .then(data => setTodos(data))
   }, [])
   return(
     <div>
     <h2>Total Todos :{todos.length} </h2>
     <ul>
       {
         todos.map(todo =><li>{todo.title}</li> )
       }
     </ul>


     </div>
     
    
   )
 }



/*function Users(){
  const [users, setUsers] = useState([])
  useEffect(() =>{
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(res => res.json())
   .then(data => setUsers(data))

  },[])
  return(
  <div>
    <h3>Dynamic users : {users.length} </h3>

    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
  </div>
  )
}*/



function Product(props){
  const productstyle ={
    border : "1px solid gray",
    borderRadius : "5px",
    heigth : "100px",
    width : "200px",
    backgroundColor : "hotpink",
    padding : "10px"
  }
  const{name,price}= props.product;
  return(
    <div style = {productstyle}>
      <h3 style ={{color : "black"}}>{name}</h3>
      <h4 style ={{color : "black"}} >{price}</h4>
      <button style ={{backgroundColor : "lightgreen"}}>Buy Now</button>
    </div>
  )
}
      
   





export default App;
