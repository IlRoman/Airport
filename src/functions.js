import React from 'react'

export const getTerminalLogo = (name) => {
    switch (name) {
        case 'A':
            return <span className="terminal terminal-a">{name}</span>
        case 'D':
            return <span className="terminal terminal-d">{name}</span>
    }
}