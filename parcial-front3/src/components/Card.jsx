import React from 'react'

const Card = ({user}) => {
  return (
    <div className='card'>
        <h1>Datos usuario</h1>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.genero}</h2>
    </div>
  )
}

export default Card