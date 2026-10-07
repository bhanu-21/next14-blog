// import { cookies } from 'next/headers'

const useServerDarkMode = async (defaultTheme = 'dark') => {
    return defaultTheme
    // const cookieStore = await cookies()
    // return cookieStore.get('theme')?.value ?? defaultTheme
}

export default useServerDarkMode