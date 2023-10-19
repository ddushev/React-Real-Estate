import './Navbar.css';
import NavigationLink from '../NavigationLink/NavigationLink';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [navLinks, setNavLinks] = useState([
        { text: 'Catalog', href: '/catalog', selected: false },
        { text: 'Create', href: '/create', selected: false },
        { text: 'Logout', href: '/logout', selected: false },
        { text: 'Login', href: '/login', selected: false },
        { text: 'Register', href: '/register', selected: false }
    ]);

    function onSelect(text) {
        setNavLinks(state => state.map(link => {
            return link.text == text ? {...link, selected: true} : {...link, selected: false}
        }));
    }

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/" className="header__nav-logo">
                    <img className="header__logo-img" src="/logo.png" alt="House logo" />
                </Link>
            </div>
            <nav className="header__navigation">
                {navLinks.map(link =>
                    <NavigationLink
                        key={link.text}
                        text={link.text}
                        selected={link.selected}
                        href={link.href}
                        onSelect={onSelect}
                    />)}
            </nav>
        </header>
    );
}