import './Sell.css';

export default function Sell() {
    return (
        <section className="sell-section">
            <div className="sell-section__img-container">
                <img className="sell-section__img" src="./dark-skyscraper.jpg" alt="dark-skyscraper" />
            </div>
            <div className="sell-section__form-container">
                <form method="POST" className="sell-section__form">
                    <label className="sell-section__title-label sell-section__label" htmlFor="title">Title</label>
                    <input className="sell-section__title-input sell-section__input" type="text" id="title" name="title" placeholder="Presidental Towers"/>
                    <label className="sell-section__address-label sell-section__label" htmlFor="address">Address</label>
                    <input className="sell-section__address-input sell-section__input" type="text" id="address" name="address" placeholder="Sofia, Mladost 3, Jordan Kasabov 2"/>
                    <label className="sell-section__type-label sell-section__label" htmlFor="type">Type</label>
                    <input className="sell-section__type-input sell-section__input" type="text" id="type" name="type" placeholder="2 Bedroom apartment"/>
                    <label className="sell-section__price-label sell-section__label" htmlFor="price">Starting price</label>
                    <input className="sell-section__price-input sell-section__input" type="number" name="price" id="price" placeholder="100000"/>
                    <label className="sell-section__description-label sell-section__label" htmlFor="description">Description</label>
                    <textarea className="sell-section__description-input" name="description" id="description" cols="30" rows="10" placeholder="Cozy luxury 2 bedroom apartment...">
                    </textarea>
                    <input type="submit" value="List" className="sell-section__submit-input"/>
                </form>
            </div>
        </section>
    );
}