'use client'
import React from 'react';
import "./Landing.modules.css"
import TerminalView from '../terminal/terminal';

function commandPrint(command: string) {
    return <p onClick={logOnClick}>
        <span style={{color: '#4AF626'}}>joshrowl@desktop</span>
        <span style={{color: "white"}}>:</span>
        <span style={{color: 'rgb(85,85,255)'}}>~/workspace/home</span>
        <span style={{color: 'rgb(187,187,187)'}}>$ {command}</span>
    </p>
}

function logOnClick() {
    console.log("Clicked!")
}

function outputPrint(output: string, onClickCallback?: any) {
    return <p style={{
        color: "gray",
    }} onClick={onClickCallback}>{output}</p>
}

export default function LandingPageView() {
    return <TerminalView>
        {commandPrint("ls -la")}
        {outputPrint("drwxr-xr-x   5 joshrowl joshrowl   4096 Nov 17 04:23 resume", logOnClick)}
        {outputPrint("drwxr-xr-x   5 joshrowl joshrowl   4096 Nov 17 04:23 projects")}
        {outputPrint("drwxr-xr-x   5 joshrowl joshrowl   4096 Nov 17 04:23 about")}
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