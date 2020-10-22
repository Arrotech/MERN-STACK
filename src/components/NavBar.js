import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import '../assets/css/NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link className="navbar__links navbar__menuIcon" to="/"><MenuIcon /></Link>
                <Link className="navbar__links" to="/">MyTodo</Link>
            </div>
            <div className="navbar__center">
                <input type="text" placeholder="Search Todo..." />
                <SearchIcon/>
            </div>
            <div className="navbar__right">
                <Link className="navbar__links" to="/">Todos</Link>
                <Link className="navbar__links" to="/create">Create Todo</Link>
            </div>
        </div>
    )
}

export default NavBar
