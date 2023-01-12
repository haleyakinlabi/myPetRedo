import React, {useState} from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";


const Header = () => {

     //showMenu
    const [showMenu, setShowMenu] = useState(false)

    //handleMenu Function
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (

        
        <header>


            <h2>MyPet</h2>
            
            <BiMenu 
                onClick={handleMenu}
                size={35} 
                style={{zIndex: 3}}>
            </BiMenu>

            <nav className={showMenu ? 'menu-show' : 'menu-hide'}>

                <Link to="/">
                    <button onClick={handleMenu}>Home</button>
                </Link>

                <Link to="/profile">
                    <button onClick={handleMenu}>Profile</button>
                </Link>

                <Link to="/login">
                    <button onClick={handleMenu}>Login</button>
                </Link>

                <Link to="/register">
                    <button onClick={handleMenu}>Register</button>
                </Link>

            </nav>

        </header>
    )

}

export default Header 