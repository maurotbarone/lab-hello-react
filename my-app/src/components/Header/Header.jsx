
import './Header.css';
import IronHackLogo from '../../images/IronHackLogo.png';
import Hamburger from '../../images/Hamburger.png';

function Header(){
    return (
        <header className='navbar'>
       
        <img src={IronHackLogo} alt='IHL'></img>
        <img src={Hamburger} alt='H'></img>

     
        </header>
    )
}

export default Header;
