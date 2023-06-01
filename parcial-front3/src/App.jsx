import { useState } from 'react'
import './App.css'
import CustomForm from './components/CustomForm'
import Card from './components/Card'
function App() {

  const [show, setShow] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    genero: ''
  })
  const [alert, setAlert] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(false)
    if (user.name[0] !== " " && user.name.length > 3 && user.email.length > 5) {
      setShow(true)
    } else {
      setAlert("Por favor chequea que la información sea correcta")
    }
  }

  return (
    <>
      <div className='app'>
        <CustomForm setUser={setUser} setShow={setShow} handleSubmit={handleSubmit} />
        {console.log(user, alert)}
        {show ? <Card user={user} /> : <h2 style={{ color: "red" }}>{alert}</h2>}
      </div>
    </>
  )
}

export default App
