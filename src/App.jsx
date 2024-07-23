import { useState } from 'react'

import './App.css'

import Colors from './Colors'

function App() {
  const [user, setUser] = useState({name:"Mustafa",age:24,school:"Fırat Universty"})
  let friends=["Hüseyin","Mehmet","Doğan","Ömer"];

  return (
    <>
     <p>{user.name}</p>
     <p>{user.age}</p>
     <p>{user.school}</p>


     <button onClick={()=>(setUser({...user,name:"Ahmet"}))}>İsim Değiştir</button>
     <button onClick={()=>(setUser({...user,age:28}))}>Yaş Değiştir</button>
     <button onClick={()=>(setUser({...user,school:"Mezun Artık"}))}>Okul Değiştir</button>

     <hr />
     <h2>Arkadaşlar</h2>
     {friends.map((friend,index)=>( 
      <div key={index}>{friend}</div>
    ))}
    </>
  )
}

export default App
