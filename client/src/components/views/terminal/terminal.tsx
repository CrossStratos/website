import React from 'react';

export default function TerminalView(props:any) {
    return <div style={{
        border: "solid 2px black",
        width: "60%",
        height: "400px",
        position: "absolute",
        top: "50%",
        backgroundColor: "black",
        opacity: .85,
        padding: "5px"
    }}>
        {props.children}
    </div >
}