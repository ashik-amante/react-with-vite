import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Todo
        task="Learn React" isDone={true}></Todo>
      <Todo
        task="Explore core Concepts" isDone={false}></Todo>
      <Todo
        task="Try JS " isDone={true}></Todo>
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
