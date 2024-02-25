const AboutMe = () => {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/hero_img.png" alt="About Me" />
            </div>
            <div className="hero--section--content--box aboout--section--box">
                <div className="hero--section--content">
                    {/* <p className="section--title">About</p> */}
                    <h1 className="skills--section--heading">About Me</h1>
                    <p className="hero--section-description">
                        Hello, I am Abhishek, a driven professional originating from a small village in Western Uttar Pradesh, Northern India. Raised in a family deeply rooted in agriculture, I am grateful for their steadfast encouragement which enabled me to pursue higher education and embark on diverse professional opportunities spanning the globe.
                    </p>
                    <p className="hero--section-description">
                        I have more than 8 years of work experience and I bring a proven track record in leading impactful projects. At Tata AIG, I led a team in developing and improving a D2C platform for buying and managing Insurance, optimizing AWS costs, and implementing CI/CD tools. At KNNX Group (formerly known as DLT Labs), I led a team to develop the flagship product to manage SCM workflows for Walmart Canada. My telecom data reconciliation work at Etisalat and blockchain development at Sopra Steria showcase my versatility and expertise.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe