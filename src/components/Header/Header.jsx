
export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/" className="header__nav-logo">
                    <img src="/logo.png" alt="House logo" />
                </a>
            </div>
            <nav className="header__navigation">
                <ul>
                    <li className="header__list-item">
                        <a className="header__nav-link" href="/catalog">Catalog</a>
                    </li>
                    <li className="header__list-item">
                        <a className="header__nav-link" href="/logout">Logout</a>
                    </li>
                    <li className="header__list-item">
                        <a className="header__nav-link" href="/login">Login</a>
                    </li>
                    <li className="header__list-item">
                        <a className="header__nav-link" href="/register">Register</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}