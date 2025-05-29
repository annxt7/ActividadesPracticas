import Nav from './navegador.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='Header'>
                <Link to='/'>
                    <img src={Nav} />
                </Link>
            </div>
        </>
    )
}
export default Header