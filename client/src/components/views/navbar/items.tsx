import React from 'react';
import Link from 'next/link'
import Icon from './icon';
import "./Navbar.modules.css"
import { NavBarCustomIcon } from './container';
import { Routes } from '@/data/routes/routes';

const NavItems = (icons: NavBarCustomIcon[], routes: Routes) => {
    return <ul>
        <li>
            <Link href={routes.aboutRoute}>
                <p>About</p>
            </Link>
        </li>
        <li>
            <Link href={routes.projectsRoute}>
                <p>Projects</p>
            </Link>
        </li>
        <li>
            <Link href={routes.resumeRoute}>
                <p>Resume</p>
            </Link>
        </li>
        {
            icons.map(entry => {
                return <li className='li-icons' key={entry.redirectUrl}>
                    <Icon
                        imageSource={entry.imageSource}
                        redirectUrl={entry.redirectUrl} />
                </li>
            })
        }
    </ul>
};

export default NavItems;