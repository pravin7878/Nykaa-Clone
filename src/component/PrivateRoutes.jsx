import { Authcontext } from '../context/AuthContextProvider'
import { useContext } from 'react'

export default function PrivateRoutes({children}) {
    const {authState: { isLogned },openModal} = useContext(Authcontext)

//   if(!isLogned){
//     openModal()
//   }
//   else{
//     return children
//   }
}
