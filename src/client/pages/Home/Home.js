 import React from "react"
 import MyComponent from '../../components/MyComponent/MyComponent'

 const Home = () => {
   return (
     <div>
       <MyComponent/>
       <button onClick={() => console.log("hi im a button that worked")}>Press me</button>
     </div>
   )
 }

 export default {
   component: Home,
 }