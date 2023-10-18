import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/" className="header__nav-logo">
                    <img className="header__logo-img" src="/logo.png" alt="House logo" />
                </a>
            </div>
            <nav className="header__navigation">
                <ul className="header__nav-list">
                    <li>
                        <a className="header__nav-link" href="/catalog">Catalog</a>
                    </li>
                    <li>
                        <a className="header__nav-link" href="/catalog">Create</a>
                    </li>
                    <li>
                        <a className="header__nav-link" href="/logout">Logout</a>
                    </li>
                    <li>
                        <a className="header__nav-link" href="/login">Login</a>
                    </li>
                    <li>
                        <a className="header__nav-link" href="/register">Register</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}