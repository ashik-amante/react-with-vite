import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singers'
import Player from './player'
import Bookstore from './Bookstore'

function App() {
  const actors = [
    {name: 'salman ', age:23, salary:35},
    {name: 'balman ', age:65, salary:4333555},
    {name: 'talman ', age:56, salary:3355},
  ]

  const singers = [
    {id:1, name: 'mahfuzur', age:54},
    {id:2, name: 'mjacson', age:86},
    {id:1, name: 'kallu mamma mastan', age:5874},
  ]


  const players =[
    {name:'sakib', age: 43, salary:400000},
    {name:'miraz', age: 44, salary:400000},
    {name:'santo', age: 22, salary:400000},
  ]

  const books = [
    {id:1, name: 'math', price:234 , author:'Josim Uddin'},
    {id:1, name: 'Physics', price:655 , author:'topn mia'},
    {id:1, name: 'chemistry', price:666 , author:'Guho Dado'},
    {id:1, name: 'Biology', price:666 , author:'Azmal vai'},
  ]
  return (
    <>
      <h1>Vite + React</h1>

      <Bookstore books = {books}></Bookstore>
      
      {/* {
        players.map(kheloar => <Player player = {kheloar}></Player>)
      } */}


      {/* <Actor name={'Bapparaz'}></Actor> */}
      {/* <Actor name="kallu mama"></Actor> */}
      {/* {
        actors.map(nayok => 
          <Actor name={nayok}></Actor>
        )
      }
      {
        singers.map(gayok => <Singer singerProp = {gayok}></Singer>)
      } */}
      

      {/* <Todo
        task="Learn React" isDone={true}></Todo>
      <Todo
        task="Explore core Concepts" isDone={false}></Todo>
      <Todo
        task="Try JS " isDone={true}></Todo> */}
      {/* <Device name="Laptop" price= "23000"></Device>
      <Device name="Mobile"></Device>
      <Device name="Watch" price="12000"></Device>
      <Person></Person>
      <Student grade="5" score="45"></Student>
      <Student grade="8" score="77"></Student>
      <Student grade={34} ></Student>
      <Developer></Developer> */}

    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This device: {props.name} Price: {props.price} </h2>
}

// const {grade , score} = {grade: 4, score:55}
function Person() {
  const age = 34;
  const money = 10;
  const person = { name: 'sakib', age: 12, salary: 1000 }
  return <h3>I am {person.name} age of {age}</h3>
}

function Student({ grade, score = 0 }) {
  // console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class:{grade} </p>
      <p>Score:{score} </p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
