import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    fonts: {
        heading: 'GT Walsheim Pro',
        body: 'GT Walsheim Pro'
    },
    styles: {
        global: {
            body: {
                bg: '#202023',
                color: 'white'
            }
        }
    }
})

export default theme