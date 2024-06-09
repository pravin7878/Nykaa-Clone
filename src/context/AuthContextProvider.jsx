import React, { createContext,useState } from 'react'

export const Authcontext = createContext()
export default function AuthContextProvider({children}) {
  const [authState, setauthState] = useState({isLogned:false,Token:null})

  const login = (token)=>{
    setauthState({isLogned:true,Token:token})
  }

  const logout = ()=>{
setauthState({isLogned:false,Token:null})
  }
  return (
    <Authcontext.Provider value={{authState,login,logout}}>
    {  children}
    </Authcontext.Provider>
  )
}
