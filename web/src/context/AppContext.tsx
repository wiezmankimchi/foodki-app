import { createContext, useContext, useState } from 'react'
export type GlobalContentType = {
  dark: boolean
  setDark?: (b: boolean) => void
}
export const AppContext = createContext<GlobalContentType>({
  dark: false,
  setDark: () => {},
})

type ContextProviderProps = {
  children: React.ReactNode
}
export const AppContextProvider = ({ children }: ContextProviderProps) => {
  const [dark, setDark] = useState(false)
  const value = {
    dark,
    setDark,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
