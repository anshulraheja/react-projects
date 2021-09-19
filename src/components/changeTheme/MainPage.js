import React from 'react'
import ChangeTheme from './ChangeTheme'
import {ThemeProvider} from './ChangeThemeContext'

const MainPage = () => {
    return (
        <div>
            <ThemeProvider>
                <ChangeTheme />
            </ThemeProvider>
        </div>
    )
}

export default MainPage
