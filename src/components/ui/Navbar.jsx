import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4'>

        <span className='navbar-brand'>Mincho</span>
        <button className='btn btn-outline-danger'>
        <FontAwesomeIcon icon={faRightFromBracket} />
            <span> Salir</span>
        </button>
    </div>
  )
}

export default Navbar