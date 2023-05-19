import { Link } from 'react-router-dom';

const Navbar = () => {
return (
    <nav>
    <ul>
        <div>
        <Link to="/">Halaman Utama</Link>
        </div>
        <div>
        <Link to="/halaman1">Halaman 1</Link>
        </div>
        <div>
        <Link to="/halaman2">Halaman 2</Link>
        </div>
        <div>
        <Link to="/halaman3">Halaman 3</Link>
        </div>
    </ul>
    </nav>
);
};

export default Navbar;
