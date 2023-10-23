import './Sell.css';

export default function Sell() {
    return (
        <section className="sell-section">
            <div className="sell-section__img-container">
                <img className="sell-section__img" src="./dark-skyscraper.jpg" alt="dark-skyscraper" />
            </div>
            <div className="sell-section__form-container">
                <form method="POST" className="sell-section__form">
                    <label className="sell-section__title-label" htmlFor="title">Title</label>
                    <input className="sell-section__title-input" type="text" id="title" name="title" placeholder=""/>
                    <label className="sell-section__address-label" htmlFor="address">Address</label>
                    <input className="sell-section__address-input" type="text" id="address" name="address" placeholder=""/>
                    <label className="sell-section__type-label" htmlFor="type">Type</label>
                    <input className="sell-section__type-input" type="text" id="type" name="type" placeholder=""/>
                    <label className="sell-section__price-label" htmlFor="price">Starting price</label>
                    <input className="sell-section__price-input" type="number" name="price" id="price" placeholder=""/>
                    <label className="sell-section__description-label" htmlFor="description">Type</label>
                    <textarea className="sell-section__description-label" name="description" id="description" cols="30" rows="10" placeholder="">
                    </textarea>
                </form>
            </div>
        </section>
    );
}