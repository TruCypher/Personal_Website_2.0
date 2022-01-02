import type { NextPage } from 'next'
import {
  Container,
  Center,
  Text,
  VStack,
} from '@chakra-ui/react'

import AnimationCircle from '../components/AnimationCircle'
import core_shell from '../media/core_shell_journey.png'
import inner_shell from '../media/inner_shell_journey.png'
import hard_shell from '../media/hard_shell_journey.png'
import shell from '../media/shell_journey.png'


const Home: NextPage = () => {
  return (
    <> 
      {/* Declaration container */}
      <Container mt='10vh' mb='10vh'>
        <VStack>
          <Center>
            <Text letterSpacing='1px' fontSize='xl'>I am a</Text>
          </Center>
          <Center>
            <Text letterSpacing='1px' color='#F4A261' fontSize='xl'>Software Engineer</Text>
          </Center>
        </VStack>
      </Container>

      {/* Circle Description */}
      <Container mt='10vh' mb='10vh' maxW='container.lg'>
        <Center>
          <AnimationCircle shells={[core_shell, hard_shell, inner_shell, shell]} />
        </Center>
      </Container>
    </>
  )
}

export default Home
