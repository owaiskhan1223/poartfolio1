import Header from "../components/header";
import Image from "next/image"; // Using next/image for better optimization

export default function About() {
  return (
    <div className="aboutResponsive">
      <Header />
      <div className="aboutContainer">
        <h1 className="heading">
          <span className="theme">
            <span className="my">My</span> Self
          </span>
        </h1>
        <p className="aboutPara">
          I am a hard-working and driven individual who <br />
          isn&apos;t afraid to face a challenge. I&apos;m passionate <br />
          about my work and I know how to get the job done. <br />
          I would describe myself as an open and honest person <br />
          who doesn&apos;t believe in misleading other people and tries <br />
          to be fair in everything I do.
        </p>
        <div className="about-pictureContainer">
          <Image src="/my self.png" alt="Self Image" width={400} height={400} />
        </div>
        <div>
          <h2 className="hobbiHeading">
            <span className="theme2">Hobbies</span>
          </h2>
          <div className="hobbiesList">
            <li>Travelling</li>
            <li>Photography</li>
            <li>Gaming</li>
            <li>Sports</li>
          </div>
          <div className="pictureContainer">
            <Image src="/travel.jpg" alt="Travelling" width={200} height={200} />
          </div>
          <div className="picturecounter1">
            <Image src="/photo.jpg" alt="Photography" width={200} height={150} />
          </div>
          <div className="picturecounter2">
            <Image src="/gaming.webp" alt="Gaming" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
