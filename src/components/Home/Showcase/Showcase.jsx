import './Showcase.css';

export default function Showcase() {
    return (
        <>
            <section className="showcase">
                <div className="showcase__headings">
                    <h1 className="showcase__main-heading">Discover Your New Home</h1>
                    <h2 className="showcase__sub-heading">Helping millions of people find their perfect fit.</h2>
                </div>
                <img className="showcase__house-img" src="/showcase.jpg" alt="Awesome house at sunset" />
                <div className="showcase__overlay"></div>
            </section>
        </>
    );
}