import React from 'react';
import Link from 'next/link'
import NavBarIcon from './icons';
import  "./Navbar.modules.css"


const Navbar = () => {
    const hrefStyle = {
        color: "white",
    }

    const liStyle = {
        float: "left",
        outline: "2px solid red",
    }

    return (
        <>
            <div>
                <div>
                    <div>
                        <ul>
                            <li>
                                <Link href="/about" style={hrefStyle}>
                                    <p>About</p>
                                </Link>
                            </li>
                            <li >
                                <Link href="/projects" style={hrefStyle}>
                                    <p>Projects</p>
                                </Link>
                            </li>
                            <li >
                                <Link href="/home" style={hrefStyle}>
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li style={{float: "right"}}>
                                <NavBarIcon
                                    imageSourceUrl='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
                                    newTabUrl='https://www.linkedin.com/in/joshualrowley/' />
                            </li>
                            <li style={{float: "right"}}>
                                <NavBarIcon
                                    imageSourceUrl='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'
                                    newTabUrl='https://github.com/CrossStratos'
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;