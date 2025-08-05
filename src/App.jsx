import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import './App.css'
import { Suspense } from 'react'
import Posts from './Posts'

import TaskCounter from './TaskCounter'
import TaskUsers from './TasksUsers'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())

// const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fetchPosts = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

//for task
const fetchTaskUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

// const fetchTaskUsers2 = async() =>{
//   const res = await fetch ('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

function App() {
  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPosts();
  // const fetchTaskUsers = fetchTaskUsers2();


  function handleClick(){
    alert('I am clicked.')
  }

  const handleClick3 = () =>{
    alert("Im click 3")
  }

  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

      <h1>Vite + React</h1>



      {/* this is task */}
      {/* <TaskCounter></TaskCounter> */}

      <Suspense fallback = {<h3>Loading User Info...</h3>}>
          <TaskUsers fetchTaskUsers = {fetchTaskUsers}></TaskUsers>
      </Suspense>

      

      
      {/* <Suspense fallback={<h4>Posts are comming...</h4>}>
          <Posts postsPromise = {postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback = {<h3 className='card'>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback = {<h5 className='card'>Friends are comming for treat...</h5>} >
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense> */}
      
      {/* <Batsman></Batsman> */}
      {/* <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('Click 2')
      }}>Click Me 2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={()=> alert('click 4')}>Click me 4</button>
      <button onClick={()=> handleAdd5(10)}>Add 5</button>
       */}
    </>
  )
}

export default App
