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

<img className='header-logo' src='https://cdn.pixabay.com/photo/2023/01/12/21/43/paw-7714934_1280.png' alt='logo'></img>
            
            <BiMenu 
                className="BiMenu"
                onClick={handleMenu}
                size={35} 
                style={{zIndex: 3}}>
            </BiMenu>

            <nav className={showMenu ? 'menu-show' : 'menu-hide'}>

                <Link to="/">
                    <button className="header-btn" onClick={handleMenu}>Home</button>
                </Link>

                <Link to="/profile">
                    <button className="header-btn" onClick={handleMenu}>Profile</button>
                </Link>

                

            </nav>

        </header>
    )

}

export default Header 