'use client'

import React from 'react';
import "./Landing.modules.css"
import TerminalView from '../terminal/terminal';
import Route from '@/data/routes/routes';
import Link from 'next/link'

function commandPrint(command: string) {
    return <p>
        <span style={{ color: '#4AF626' }}>joshrowl@desktop</span>
        <span style={{ color: "white" }}>:</span>
        <span style={{ color: 'rgb(85,85,255)' }}>~/workspace/home</span>
        <span style={{ color: 'rgb(187,187,187)' }}>$ {command}</span>
    </p>
}


function outputPrint(output: string, onClickCallback?: any) {
    return <p className='clickable' style={{
        color: "gray",
    }} onClick={onClickCallback}>{output}</p>
}

const renderClickableRoutes = (routes: Route[]) => {
    const dirLine = "drwxr-xr-x   5 joshrowl joshrowl   4096 Nov 17 04:23"

    return routes.map(route => {
        return <p key={route.uri} style={{ color: "gray" }}>
            <span>{dirLine + " "}</span>
            <span className='clickable'>
                <Link href={route.uri}>{
                    route.name.toLowerCase()}
                </Link>
            </span>
        </p>
    })
}

interface LandingPageViewProps { routes: Route[] }

const LandingPageView: React.FC<LandingPageViewProps> = ({ routes }) => {

    return <TerminalView>
        {commandPrint("ls -la")}
        {renderClickableRoutes(routes)}
        {commandPrint("")}
        {commandPrint("whoami")}
        {outputPrint("joshrowl")}
        {commandPrint("cat /etc/os-release")}
        {outputPrint("PRETTY_NAME=\"Josh Rowley\"")}
        {outputPrint("ROLE=\"Software Engineer (DevOps)\"")}
        {outputPrint("CURRENT_COMPANY=\"Schweitzer Engineering Laboratories\"")}
        {outputPrint("LINKEDIN_URL=\"linkedin.com/in/joshualrowley\"")}
        {outputPrint("GITHUB_URL=\"github.com/CrossStratos\"")}
        {commandPrint("")}
    </TerminalView>
}

export default LandingPageView;