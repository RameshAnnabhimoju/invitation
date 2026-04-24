import "./App.css";
import ganeshImage from "./assets/images/ganesh-logo.png";
import BlueCar2 from "./assets/images/car-blue-2.png";
import BlueCar from "./assets/images/car-blue.png";
import InstaIcon from "./assets/images/instagram-icon.png";
import CelciusIcon from "./assets/images/celcius.png";
import Flower1 from "./assets/images/flowers-1.png";
import Flower2 from "./assets/images/flowers-2.png";
import { useEffect, useState, useRef } from "react";
import lanternImage from "./assets/images/lantern.png";

function App() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lanterns = document.querySelectorAll(".lantern");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      lanterns.forEach((lantern) => {
        const el = lantern as HTMLElement;
        const speed = parseFloat(el.dataset.speed || "1");
        el.style.transform = `translateY(${-scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function getTimeLeft(targetDate: string) {
    const total: number = new Date(targetDate).getTime() - new Date().getTime();

    const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
    const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
    const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
    const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);

    return { total, days, hours, minutes, seconds };
  }

  function pad(num: number) {
    return String(num).padStart(2, "0");
  }
  const targetDate = "2026-04-29T00:52:00";

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getTimeLeft(targetDate);

      if (updated.total <= 0) {
        clearInterval(interval);
      }

      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="invitation-container">
      <section
        className="palace-image-section image-section"
        ref={sectionRef}
        style={{ position: "relative", overflow: "clip" }}
      >
        {/* Parallax Lanterns */}
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.08"
          style={{ width: "80px", top: "800px", left: "5%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.13"
          style={{ width: "60px", top: "1200px", left: "15%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.07"
          style={{ width: "100px", top: "600px", left: "25%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.11"
          style={{ width: "70px", top: "1800px", left: "35%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.09"
          style={{ width: "90px", top: "2400px", left: "45%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.14"
          style={{ width: "55px", top: "900px", left: "55%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.06"
          style={{ width: "85px", top: "1500px", left: "65%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.12"
          style={{ width: "65px", top: "3000px", left: "72%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.08"
          style={{ width: "75px", top: "2100px", left: "80%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.10"
          style={{ width: "95px", top: "3600px", left: "88%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.15"
          style={{ width: "50px", top: "4200px", left: "10%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.07"
          style={{ width: "80px", top: "4800px", left: "92%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.11"
          style={{ width: "70px", top: "5400px", left: "30%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.09"
          style={{ width: "60px", top: "5900px", left: "70%" }}
        />
        <img
          src={lanternImage}
          alt=""
          className="lantern"
          data-speed="1.13"
          style={{ width: "90px", top: "6500px", left: "50%" }}
        />

        {/* ... rest of your existing content unchanged ... */}
        <div className="palace-title">
          <div className="palace-title-text">Yadlapalli's Wedding</div>
          {/* <h2 className="palace-title-text-weds">INVITATION</h2> */}
          <div className="palace-title-text-weds">&nbsp;</div>
          <div className="palace-title-text">Invitation</div>
        </div>
        <div style={{ height: "2200px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={ganeshImage} alt="Ganesh Image" />
          <section className="palace-details-text">
            With the heavenly blessings of <br /> Smt. Lata Devi & Sm. Kamal
            Kapoor
          </section>
          <div className="palace-details-text">——</div>
          <section className="palace-details-text">
            Mr. Veera Venkata Satyanarayana & Mrs. Padmavathi (Late)
          </section>
          <section className="palace-details-text palace-details-text-large">
            INVITE
          </section>
          <section className="palace-details-text">
            You to join us in the wedding celebrations of
          </section>
          <section className="palace-details-text palace-details-text-large">
            Ram Kumar
            <br />&<br />
            Dr. Pratyusha{" "}
          </section>
          <section className="palace-details-text">
            Daughter of <br />
            Mr. Venkata Gopala Krishna & Mrs. Venkata Padma Lakshmi Sujatha,
          </section>
          <section className="palace-details-text">
            On the following events
          </section>
        </div>
        <div className="palace-events-container">
          <div className="palace-event-frame">
            <img
              src={Flower1}
              alt="flower 1"
              className="place-evnets-cared-flower-1"
            />
            <div className="palace-event-data">
              <div className="place-event-heading">HALDI</div>
              <div className="place-event-details">
                Saturday, April 25th 2026 <br />
                at Home 10:35 AM Onwards
              </div>
            </div>
            <img
              src={Flower2}
              alt="flower 2"
              className="place-evnets-cared-flower-2"
            />
          </div>
          <div className="palace-event-frame">
            <img
              src={Flower1}
              alt="flower 1"
              className="place-evnets-cared-flower-1"
            />
            <div className="palace-event-data">
              <div className="place-event-heading">SANGEETH</div>
              <div className="place-event-details">
                Wednesday, April 29th 2026 <br />
                Rio vista resorts, Sompalli <br />
                at 06:30 PM
              </div>
            </div>
            <img
              src={Flower2}
              alt="flower 2"
              className="place-evnets-cared-flower-2"
            />
          </div>
          <div className="palace-event-frame">
            <img
              src={Flower1}
              alt="flower 1"
              className="place-evnets-cared-flower-1"
            />
            <div className="palace-event-data">
              <div className="place-event-heading">RECEPTION</div>
              <div className="place-event-details">
                Wednesday, April 29th 2026 <br />
                Rio vista resorts, Sompalli <br />
                at 08:30 PM
              </div>
            </div>
            <img
              src={Flower2}
              alt="flower 2"
              className="place-evnets-cared-flower-2"
            />
          </div>
          <div className="palace-event-frame">
            <img
              src={Flower1}
              alt="flower 1"
              className="place-evnets-cared-flower-1"
            />
            <div className="palace-event-data">
              <div className="place-event-heading">WEDDING</div>
              <div className="place-event-details">
                Wednesday, April 29th 2026 <br />
                Rio vista resorts, Sompalli.
                <br />
                Muhurtham 12:52 AM
              </div>
            </div>
            <img
              src={Flower2}
              alt="flower 2"
              className="place-evnets-cared-flower-2"
            />
          </div>
          {/* <div className='palace-event-frame'></div>
          <div className='palace-event-frame'></div>
          <div className='palace-event-frame'></div>
          <div className='palace-event-frame'></div> */}
          {/* <div className='palace-event-frame'></div> */}
        </div>
        <div className="see-the-route-container">
          <section className="palace-details-text palace-details-text-medium">
            SEE THE <br /> ROUTE
          </section>

          <a
            href="https://maps.app.goo.gl/Q3fSzSU3ZFD6z3nd6"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link-wrapper"
          >
            <section className="palace-details-text palace-details-text-v2">
              Click to open map
            </section>

            <div className="see-the-route-circles-container">
              <div className="outer-ring" />
              <div className="inner-ring" />
            </div>
          </a>
        </div>
        <div className="Blue-care-2-container">
          <img src={BlueCar2} alt="Blue Car" className="Blue-care-2-image" />
        </div>
      </section>
      {/* <section className='pink-image-section image-section'>
      </section> */}
      <section className="yellow-image-section image-section things-to-know-container">
        <div className="things-to-know-heading">
          THINGS TO <br /> KNOW
        </div>
        <div className="things-to-know-text">
          To help you feel at ease and enjoy every moment of the celebrations,
          we’ve gathered a few thoughtful details we’d love for you to know
          before the big day.
        </div>
        <div className="things-to-know-cards-container">
          <div className="things-to-know-card">
            <img
              src={InstaIcon}
              alt="Insta icon"
              className="things-to-know-card-image"
            />
            <div className="things-to-know-card-heading">HASHTAG</div>
            <div className="things-to-know-card-text">
              While posting photos on social media please use the hashtag -
              #abkan
            </div>
          </div>
          <div className="things-to-know-card">
            <img
              src={CelciusIcon}
              alt="Celcius icon"
              className="things-to-know-card-image"
            />
            <div className="things-to-know-card-heading">WEATHER</div>
            <div className="things-to-know-card-text">
              It will be mostly sunny with temperature reaching up to 28 degrees
              at the venue
            </div>
          </div>
          <div className="things-to-know-card">
            <img
              src={InstaIcon}
              alt="Insta icon"
              className="things-to-know-card-image"
            />
            <div className="things-to-know-card-heading">STAFF</div>
            <div className="things-to-know-card-text">
              We recommend the nearby hotel called Bhola Bhawan near the venue
              for the staff members
            </div>
          </div>
          <div className="things-to-know-card">
            <img
              src={InstaIcon}
              alt="Insta icon"
              className="things-to-know-card-image"
            />
            <div className="things-to-know-card-heading">PARKING</div>
            <div className="things-to-know-card-text">
              Valet parking for all our guests will be available at the venue
            </div>
          </div>
        </div>
        <div className="Blue-car-image-container">
          <img src={BlueCar} alt="blue car" className="Blue-car-image" />
        </div>
      </section>
      <section className="night-palace-image-section image-section">
        <div className="night-palace-heading">The Countdown Begins</div>
        <div className="countdown">
          {pad(timeLeft.days)}:{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:
          {pad(timeLeft.seconds)}
        </div>
        <div className="night-palace-text">
          Our families are excited that you are able to join us in celebrating
          what we hope will be one of the happiest days of our lives.
        </div>
      </section>
      {/* <img src={palaceImage} alt="palace image" /> */}
    </div>
  );
}

export default App;
