import './App.css'
import Nevbar from './component/Nevbar'
import AllRoutes from './component/AllRoutes'
import Footer from './pagas/Footer/Footer'

import { Box } from '@chakra-ui/react'
import ErrorIndicator from './pagas/ErrorIndicator'

function App() {

  return (
    <>
    <Box bg={'rgb(255,255,255)'} pos={'fixed'} top={0} right={0} left={0} zIndex={10}>
    <Nevbar/>
    </Box>
    <Box pt={'150px'} >
    <AllRoutes/>
    </Box>
    <Footer/>
    </>
  )
}

export default App
