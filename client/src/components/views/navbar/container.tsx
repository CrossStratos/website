import React from 'react';

import GithubImage from '../../../../public/github.png'
import LinkedinImage from '../../../../public/linkedin.svg'
import NavItems from './items';
import { Routes } from '@/data/routes/routes';

export interface NavBarCustomIcon {
    imageSource: any
    redirectUrl: string
}

export default function NavBarView(routes: Routes) {
    const linkedinUrl = "https://www.linkedin.com/in/joshualrowley"
    const githubUrl = "https://github.com/CrossStratos"
    const icons: NavBarCustomIcon[] = [
            { imageSource: LinkedinImage, redirectUrl: linkedinUrl },
            { imageSource: GithubImage, redirectUrl: githubUrl },
        ]

        return <div className='navbar-container'>
            {NavItems(icons, routes)}
        </div>
}