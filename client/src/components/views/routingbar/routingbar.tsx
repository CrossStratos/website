'use client'

import Route from '@/data/routes/routes';
import { usePathname } from 'next/navigation'
import React from 'react';

const renderPaths = (paths: string[]) => {
    if (paths.length == 0) {
        return <span> Home </span>
    }

    return <p>
        {paths.map(path => {
                return <span key={path}>{path} &gt; </span>
            })
        }
    </p>
}

function parsePaths(path: string): string[] {
    const paths = path.split("/")
    paths[0] = "Home"

    return paths
}

interface RoutingBarProps { routes: Route[] }

const RoutingBar = ({ routes }: RoutingBarProps) => {
    // const [ path, setPath ] = useState("");
    const path = usePathname()

    const paths = parsePaths(path)

    return <div className='Routingbar-container' style={{ border: "solid black 2px", height: "30px", backgroundColor: "white" }}>
        <>{renderPaths(paths)}</>
    </div>
}

export default RoutingBar