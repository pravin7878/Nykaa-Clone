import { Box, Button, VStack,PinInput,PinInputField } from '@chakra-ui/react'


// from phone input react
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



export default function Login() {
  const [phone, setphone] = useState("")
  return (
    <Box >

      <PhoneInput
        country={'us'}
        value={this.state.phone}
        onChange={phone => this.setState({ phone })}
      />
      <Button>Sent Otp</Button>
      <HStack>
        <PinInput otp>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </Box>
  )
}
