import HeaderIcon from './HeaderIcon';
import Navbar from './Navbar';


function Header() {
    return (
        <header className="navbar navbar-expand-xl bg-black--gradient-down">
            <div className="container">
                <HeaderIcon/>
                <Navbar/>
            </div>
        </header>
  );
}

export default Header;