import React from 'react'

function Admin(props) {
    const {username} = props.usuario;
    return (
        <div>
            <h1>  Usuario: {username}</h1>
        </div>
    )
}

export default Admin
