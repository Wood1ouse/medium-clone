import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import {CurrentUserContext} from "../contexts/currentUser";

const Header = () => {
    const [currentUserState] = useContext(CurrentUserContext)
    console.log(currentUserState);
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to='/' className='navbar-brand'>Medium</Link>
                <ul className='nav navbar-nav pull-xs-right'>
                    <li className='nav-item'>
                        <NavLink to={'/'} className='navbar-link' exact>Home</NavLink>
                    </li>
                    {currentUserState.isLoggedIn === false && (
                        <>
                            <li className='nav-item'>
                                <NavLink to={'/login'} className='navbar-link'>Sign in</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to={'/register'} className='navbar-link'>Sign up</NavLink>
                            </li>
                        </>
                    )}
                    {
                        currentUserState.isLoggedIn && (
                            <>
                                <li className='nav-item'>
                                    <NavLink to='/articles/new' classname='nav-link'>
                                        <i className='ion-compose'></i>
                                        &nbsp; New Post
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink to={`/profiles/${currentUserState.currentUser.username}`} classname='nav-link'>
                                        <img className="user-pic"
                                             src={currentUserState.currentUser.image}
                                             alt=''
                                        />
                                        &nbsp; {currentUserState.currentUser.username}
                                    </NavLink>
                                </li>
                            </>
                        )
                    }



                </ul>
            </div>
        </nav>
    )
}

export default Header