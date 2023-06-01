import React from 'react'

const CustomForm = ({setUser, handleSubmit}) => {


    return (
        <>
            <form onSubmit={handleSubmit} className='customForm'>
                <input className='formElement' type="text" name="name" id="name" onChange={event => setUser((prevState) => ({ ...prevState, name: event.target.value }))} />
                <input className='formElement' type="text" name="email" id="email" onChange={event => setUser((prevState) => ({ ...prevState, email: event.target.value }))} />
                <select className='formElement' name="generoSelect" id="generoSelect" onChange={event => setUser((prevState) => ({ ...prevState, genero: event.target.value }))}>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="No binario">No Binario</option>
                </select>
                <button className='formElement' >Enviar</button>
            </form>
        </>
    )
}





export default CustomForm