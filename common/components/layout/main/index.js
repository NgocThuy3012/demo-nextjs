import CHeader from '../CHeader'
import CNavbar from '../CNavbar'
import CFooter from '../CFooter'

const MainLayout = ({children}) => {
    return (
        <>
            <CHeader/>
            <CNavbar/>
            {children}
            <CFooter/>
        </>
    )
}

export default MainLayout