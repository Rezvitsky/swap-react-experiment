import React, { useEffect, useState } from 'react'

const useDarkMode: any = () => {
    
    const [theme, setTheme ] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement
        
        localStorage.setItem('mode', theme)
        root.classList.remove(colorTheme)
        root.classList.add(theme)
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}

export default useDarkMode