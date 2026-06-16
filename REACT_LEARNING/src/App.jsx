import React from 'react'
import Card from './components/Card'

const App = () => {
 const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    city: "Delhi",
    age: 25,
    profession: "Software Developer",
    profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Priya Verma",
    city: "Mumbai",
    age: 28,
    profession: "UI/UX Designer",
    profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Rohan Gupta",
    city: "Bangalore",
    age: 30,
    profession: "Data Analyst",
    profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    city: "Pune",
    age: 26,
    profession: "Digital Marketer",
    profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Kabir Singh",
    city: "Chandigarh",
    age: 32,
    profession: "Product Manager",
    profilePhoto: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];


  return (
    <div>
      <div className='p-6'>
       {users.map(function(elem,idx){
        return <Card key={idx} username={elem.name} city={elem.city} age={elem.age} profession={elem.profession} photo={elem.profilePhoto} />
       })}
      </div>
    </div>
  )
}

export default App
