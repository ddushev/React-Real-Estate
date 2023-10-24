import { Link } from 'react-router-dom';
import './Listing.css';

export default function Listing() {
    return (
        <Link className="buy-section__property">
            <div className="buy-section__img-container">
                <img className="buy-section__img" src="/properties/property2.jpg" alt="black and white living room" />
            </div>
            <div className="buy-section__body">
                <h3 className="buy-section__title">Presidental Towers</h3>
                <p className="buy-section__address">Sofia, Mladost 3, Jordan Kasabov 2</p>
                <p className="buy-section__type">2 Bedroom appartment</p>
            </div>
        </Link>
    );
}