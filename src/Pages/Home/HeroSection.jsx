import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          {/* <p className="section--title">Hey, I'm Abhishek</p> */}
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Software</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section--description">
            8 Years Experienced | Full-stack Specialist | AWS Solutions Architect Associate |
            <br />Enthusiast Coder & Team Leader | Designing Cloud Solutions |
            <br />Ex-Clients: Walmart, Thales, Etisalat | Node JS | Python | Serverless
            <br /><br /> <b>Current Position</b>: Student, MS MIS at SUNY Buffalo
          </p>
        </div>
        <Link className="btn btn-primary hero--section--contact" spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact">Get In Touch</Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/Abhishek_Tyagi.png" alt="Hero Section" />
      </div>
    </section>
  );
}

export default HeroSection;