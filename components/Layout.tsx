import Navbar from './Navbar'
import Footer from './Foother'

interface LayoutProps {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar/>
            <main> {children} </main>
            <Footer/>
        </>
    )
}

export default Layout;