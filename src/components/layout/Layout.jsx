import logo from '../../images/logo.svg';
import Sidbar from '../slidebar/Sidbar';
const Layout = ({children}) => {
  return (
    <>
    <nav
      className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0"
    >
      <img src={logo} alt='logo'/>
    </nav>

    <div className='"max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8"'>
        <Sidbar/>
       {children}
    </div>
    </>
  )
}

export default Layout;
