'use client'

import useDarkMode from "@/hooks/use-dark-mode"

const nextModeIcons = { 'light': '🌚', 'dark': '🌝' }

export default function DarkMode({ defaultTheme }) {
    const { theme, toggleTheme } = useDarkMode(defaultTheme)

    return (
        <button onClick={toggleTheme}>{nextModeIcons[theme]}</button>
    )
}