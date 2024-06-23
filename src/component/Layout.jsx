import PropTypes from 'prop-types'
import Header from "./Header"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
        <Header />
            <div className='w-full min-h-screen'> {children}</div>
        <Footer/>
    </div>
  )
}
Layout.propTypes = {
    children: PropTypes.node
}

export default Layout

