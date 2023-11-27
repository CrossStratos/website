'use client'

import React from 'react';

import GithubImage from '../../../../public/github.png'
import LinkedinImage from '../../../../public/linkedin.svg'
import Image from 'next/image'
import Link from 'next/link'
import Route from '@/data/routes/routes';
import "./Navbar.modules.css"

export interface NavBarCustomIcon {
    source: string | any
    redirectUrl: string
}

const NavBarIcon = ({ source, redirectUrl }: NavBarCustomIcon) => {
    return <button onClick={() => {
        window.open(redirectUrl, "_blank", "noreferrer");
    }} title={redirectUrl} className='clickable'>
        <Image
            src={source}
            alt='Icon'
            width={26}
            height={10}
        />
    </button>
}

interface NavbarViewProps { routes: Route[] }

const NavBarView: React.FC<NavbarViewProps> = ({ routes }) => {
    const icons: NavBarCustomIcon[] = [
        { source: LinkedinImage, redirectUrl: "https://www.linkedin.com/in/joshualrowley" },
        { source: GithubImage, redirectUrl: "https://github.com/CrossStratos" },
    ]

    return <div className='Navbar-container'>
        <ul className='Navbar-ul'>
            {routes.map(route => {
                return <li key={route.uri} className='Navbar-li-routes'>
                    <Link
                        href={route.uri}> <p>{route.name}</p>
                    </Link>
                </li>
            })}
            {icons.map(entry => {
                return <li className='Navbar-li-icons' key={entry.redirectUrl}>
                    <NavBarIcon
                        source={entry.source}
                        redirectUrl={entry.redirectUrl} />
                </li>
            })
            }
        </ul>
    </div>
}



export default NavBarView