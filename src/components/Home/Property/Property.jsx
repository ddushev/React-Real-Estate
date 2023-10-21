import { Link } from 'react-router-dom';
import './Property.css';

export default function Property() {
    return (
        <Link className="homepage-featured__property">
            <div className="homepage-featured__img-container">
                <img className="homepage-featured__img" src="/properties/property1.jpg" alt="black and white living room" />
            </div>
            <div className="homepage-featured__body">
                <h3 className="homepage-featured__title">Presidental Towers</h3>
                <p className="homepage-featured__address">Sofia, Mladost 3, Jordan Kasabov 2</p>
                <p className="homepage-featured__type">2 Bedroom appartment</p>
            </div>
        </Link>
    );
}