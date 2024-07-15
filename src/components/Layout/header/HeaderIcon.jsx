import logo from '../../.././assets/logo.svg'
import { Link } from 'react-router-dom'

function HeaderIcon() {
    return (
        <Link className="text-decoration-none" to="/streameo/">
            <div className="text-uppercase silkscreen-regular text-white">
                <img src={logo} className="logo logo--header" alt="logo" />
                Streameo
            </div>
        </Link>
        
    );
}

export default HeaderIcon;