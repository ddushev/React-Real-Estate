import './NavigationLink.css';


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
            <a onClick={() => onSelect(text)} className={`${initialClass} ${selectedClass}`} href={href}>{text}</a>
        </ul>
    );
}