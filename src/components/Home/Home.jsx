import './Home.css';
import Property from './Property/Property';

export default function Home() {
    return (
        <div className="homepage-featured">
                {/* TODO Add 4 top properties or less. If no properties display another screen to create one */}
            <h2 className="homepage-featured__heading">Explore our top Properties</h2>
            <div className="homepage-featured__properties">
                <Property />
                <Property />
                <Property />
                <Property />
            </div>
        </div>
    );
}