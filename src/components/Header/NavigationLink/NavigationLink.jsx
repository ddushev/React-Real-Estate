import './NavigationLink.css';
import { Link } from 'react-router-dom';


export default function NavigationLink({
    text,
    selected,
    href,
    onSelect
}) {

    const initialClass = 'header__link-item header__link-item--hover';
    const selectedClass = selected ? 'header__link-item--selected' : '';

    return (
        <ul className="header__nav-list">
            <Link onClick={() => onSelect(text)} className={`${initialClass} ${selectedClass}`} to={href}> {text} </Link>
        </ul>
    );
}