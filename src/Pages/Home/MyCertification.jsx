import data from "../../data/index.json";

export default function MyCertification() {
    return (
        <section className="certification--section" id="MyCertification">
            <div className="certification--container-box">
                <div className="certification--container">
                    <h2 className="section--heading">My Certifications</h2>
                </div>
            </div>
            <div className="certification--section--container">
                {data?.certifications?.map((item, index) => (
                    <div key={index} className="certification--section--card">
                        <div className="certification--section--img">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                        <div className="certification--section--card--content">
                            <div>
                                <h3 className="certification--section--title">{item.title}</h3>
                            </div>
                            <a className="text-sm certification--link" href={item.link} target="_blank" rel="noopener noreferrer">
                                Check Validity
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}
