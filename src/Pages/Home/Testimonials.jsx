import data from '../../data/index.json';

const Testimonials = () => {
    return (
        <section className="testimonial--section" id="Testimonial">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="sections--heading">Testimonials</h2>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.testimonial?.map((item, index) => (
                    <div key={index} className="testimonial--section--card">
                        <div className="testimonial--section--card--review">
                            {Array.from({ length: 5 }, (reviews, index) => (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="26"
                                    viewBox="0 0 27 26"
                                    fill="none"
                                >
                                    <path
                                        d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                                        fill="#006B6A"
                                    />
                                </svg>
                            ))}
                        </div>
                        <p className="text-md">{item.description}</p>
                        <a href={item.link} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                        <div className="testimonial--section--card--author--detail">
                            <img src={item.src} alt="Avatar" />
                            <div>
                                <p className="text-md testimonial--author--name">
                                    {item.author_name}
                                </p>
                                <p className="text-md testimonial--author--designation">
                                    {item.author_designation}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials