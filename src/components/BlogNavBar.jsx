import React from 'react'
import { NavLink } from 'react-router-dom';


const BlogNavBar = () => {
    const navStyles = {
        display: 'flex',
        justifyContent: 'center',
    };

    const ulStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        listStyleType: 'none',
        gap: '5rem',
        padding: '1.5rem'

    };

    const linkStyles = {
        color: 'rgb(102, 186, 247)',
        textDecoration: 'none',
        fontWeight:'600'
    };

    return (
        <nav style={navStyles}>
            <ul style={ulStyles}>
                {/* <li>
                    <NavLink exact to="/" style={linkStyles}>
                        Home
                    </NavLink>
                </li> */}
                <li>
                    <NavLink to="/blogs" style={linkStyles}>
                        Blogs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="https://medium.com/@abrarhussain-00" style={linkStyles}>
                        Medium
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default BlogNavBar