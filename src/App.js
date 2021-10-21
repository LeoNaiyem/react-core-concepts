import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'Photoshop', price: '$90.99', details: 'It is one of the best photo editing software' },
    { name: 'Illustrator', price: '$85.99', details: 'It is one of the best photo editing software' },
    { name: 'Adobe Reader', price: '$6.99', details: 'It is one of the best photo editing software' },
    { name: 'Adobe LightRoom', price: '$9.99', details: 'It is one of the best photo editing software' },
    { name: 'Adobe After Effect', price: '$50.99', details: 'It is one of the best photo editing software' }
  ]


  const friends = [
    { name: 'Messi', age: '33', profession: 'Footballer' },
    { name: 'Jon', age: '56', profession: 'Doctor' },
    { name: 'Abdul', age: '36', profession: 'Business' },
    { name: 'Leo', age: '22', profession: 'Scholar' },
    { name: 'Zakir', age: '60', profession: 'Scholar' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Project</h1>
        <Count></Count>
        <User></User>



        {/* <Product name ={products[0].name} price = {products[0].price} details = {products[0].details} ></Product> */}
        <div style={cards}>
          {
            friends.map( friend => <Friend friend ={friend}></Friend>)
          }
        </div>

        <div style ={cards}>
          {
            products.map(product => <Product  product ={product}></Product>)
          }
          {/* <Product product = {products[0]}></Product>
          <Product product = {products[1]}></Product>
          <Product product = {products[2]}></Product>
          <Product product = {products[3]}></Product>
          <Product product = {products[4]}></Product> */}
        </div>
        <hr />
        <Vip name='Lionel Messi' job='Footballer' country='Argentina'></Vip>
        <Vip name='Naiyem Hossain' job='Web Developer' country='Bangladesh'></Vip>
        <Vip name='Bill Gets' job='Business' country='USA'></Vip>
        <hr />
        <Vip name='Janker Mahabub' job='Web Developer' country='Bangladesh'></Vip>
        <Person></Person>
        <Person2></Person2>
        <Vip name='Zakir Naik' job='Scholar' country='India'></Vip>
        <Person></Person>
        <Person2></Person2>
        <Vip name='Abdul' job='Web Developer' country='Pakistan'></Vip>
        <Person></Person>
        <Person2></Person2>

      </header>
    </div>
  );
}

const cards = {
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
  boxSizing: 'borderBox',
  padding: '2rem'
}

function User (){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      {
        <ul>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </ul>
      }
    </div>
  )
}

function Count (){
  const [count, setCount] = useState(0);
  // const handelCount = () => setCount(count + 1);
  if (count < 0) {
    return setCount(0);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Friend(props){
  console.log(props)
  const friendStyle = {
    border: '1px solid yellow',
    padding: '.5rem',
    margin: '10px',
    backgroundColor: 'gray',
    minHeight: '350px',
    width: '25%',
    borderRadius: '10px'

  }
  const {name, age, profession} = props.friend;
    return(
      <div style = {friendStyle}>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{profession}</p>
      </div>
    )
}

function Product(props) {
  const productStyle = {
    border: '1px solid yellow',
    padding: '.5rem',
    margin: '10px',
    backgroundColor: 'orange',
    minHeight: '350px',
    width: '25%',
    borderRadius: '10px'

  }
  const pdBtn = {
    backgroundColor: 'black',
    padding: '10px 25px',
    color: 'white',
    borderRadius: '6px',
    marginTop: 'auto'
  }
  console.log(props); 
  const { name, price, details } = props.product;
  // const product = props.product;
  return (
    <div style={productStyle} >
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{details}</p>
      <button style={pdBtn}>Buy Now</button>
    </div>
  )
}

function Vip(props) {
  const vipStyle = {
    backgroundColor: 'tomato',
    border: '1px solid yellow',
    borderRadius: '10px',
    margin: '10px',
    padding: '2rem',
    minWidth: '500px',
    minHeight: '200px',
    textAlign: 'left'
  }
  return (
    <div style={vipStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Profession: {props.job} </h2>
      <h3>Nationality: {props.country} </h3>
    </div>
  )
}

function Person() {
  return (
    <div style={{ width: '500px', textAlign: 'left', minHeight: '200px', border: "1px solid cyan", padding: "2rem", margin: "10px", backgroundColor: "green", borderRadius: "10px" }}>
      <h1>Name: Naiyem Hossain</h1>
      <h3>Profession: Web Developer</h3>
    </div>
  )
}


function Person2() {
  const person2Style = {
    width: '500px',
    minHeight: '200px',
    border: '1px solid red',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '2rem',
    margin: '10px',
    color: 'black',
    textAlign: 'left'
  }
  return (
    <div style={person2Style}>
      <h1>Name: Leo Messi</h1>
      <h3>Profession: Footballer</h3>
    </div>
  )
}

export default App;
