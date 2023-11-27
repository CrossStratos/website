import React from 'react';
import Image from 'next/image'
import { NavBarCustomIcon } from './container';

export default function Icon(icon: NavBarCustomIcon) {
    return <button onClick={() => {
        window.open(icon.redirectUrl, "_blank", "noreferrer");
    }}>
        <Image
            src={icon.imageSource}
            alt='Icon'
            width={35}
            height={20}
        />
    </button>
}