import {
    Circle,
    Img,
    Text,
    Box,
} from '@chakra-ui/react'
import {
    motion
} from 'framer-motion'
import Router from 'next/router'

interface Props{
    shells: StaticImageData[]
}

const MotionImg = motion(Img)

function goToJourney() {
    Router.push('/journey')
}

export default function AnimationCircle({shells}: Props) {
    let shellImage = shells.map((sh, i) => 
        <MotionImg 
            animate={{
                rotate: 360
            }}
            transition={{
                duration: (i + 2) * 10,
                repeat: Infinity,
                ease: 'linear',
            }}
            position='absolute' 
            key={i} 
            alt={'shell' + i}
            src={sh.src} 
        />
    );

    return (
        <Box height='500' _hover={{ cursor: 'pointer' }} onClick={goToJourney}>
            <Circle height='500'>
                {shellImage}
                <Text fontSize='xl'> 
                    Journey 
                </Text>
            </Circle>
        </Box>
    )
}