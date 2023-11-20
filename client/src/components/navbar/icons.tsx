'use react'

import React from 'react';
import Image from 'next/image'

export default function NavBarIcon({ newTabUrl, imageSourceUrl } : { newTabUrl: string, imageSourceUrl: string }) {
    return <button onClick={() => {
        window.open(newTabUrl, "_blank", "noreferrer");
    }}>
        <Image
            src={imageSourceUrl}
            alt='Landscape picture'
            width={30}
            height={20}
        />
    </button>
}