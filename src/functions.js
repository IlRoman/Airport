import React from 'react'

export const getPicture = (airline) => {
    switch (airline) {
        case 'Belavia':
            return 'https://api.iev.aero/media/airline/files/5b556c04c49dd067143201.png'
        case 'LOT':
            return 'https://api.iev.aero/media/airline/files/5b796cfc8c435285152565.png'
        case 'Wizz Air':
            return 'https://api.iev.aero/media/airline/files/5b556bea9e8d9364778468.png'
        case 'Motor Sich':
            return 'https://api.iev.aero/media/airline/files/5b556c813c99a330362586.png'
        case 'Alitalia':
            return 'https://api.iev.aero/media/airline/files/5b571cb018a35499200101.png'
        case 'Etihad':
            return 'https://api.iev.aero/media/airline/files/5b556ceadb76d708246327.png'
        case 'Air Serbia':
            return 'https://api.iev.aero/media/airline/files/5b556dd70d58c151412294.png'
        case 'Royal Air Maroc':
            return 'https://api.iev.aero/media/airline/files/5e3a9a36b17e4024214108.png'
        default:
            return ''
    }
}

export const getTerminalLogo = (name) => {
    switch (name) {
        case 'A':
            return <span className="terminal terminal-a">{name}</span>
        case 'D':
            return <span className="terminal terminal-d">{name}</span>
    }
}