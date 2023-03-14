import WorldWide from "@/component/WorldWide";
import Image from "next/image";
import Styles from "../../styles/About.module.css";
const About = () => {
  return (
    <>
      <div className={Styles.banner}>
        <div className="center_wr">
          <h1>About us</h1>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="who_we_are_section">
        <div className="center_wr">
          <div className={Styles.who_we_are}>
            <div className={Styles.who_we_content}>
              <h2>Who We Are</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
                nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
                vitae erat consequat auctor eu in elit.
              </p>
            </div>
            <div className={Styles.who_we_image}>
              <Image
                src={require("../../assets/images/who_we.jpg")}
                alt="who_we_image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.our_team}>
        <div className="center_wr">
          <div className={Styles.our_team_heading}>
            <h4>A Few Words About</h4>
            <h2>Our Team</h2>
            <p>
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
          <div className={Styles.profile_cards_group}>
            <div className={Styles.profile_card}>
              <Image
                src={require("../../assets/images/profile_first.png")}
                alt=""
              />
              <h4>Harvey Spector</h4>
              <p>Founder - CEO</p>
            </div>
            <div className={Styles.profile_card}>
              <Image
                src={require("../../assets/images/profile_first.png")}
                alt=""
              />
              <h4>Harvey Spector</h4>
              <p>Founder - CEO</p>
            </div>
            <div className={Styles.profile_card}>
              <Image
                src={require("../../assets/images/profile_first.png")}
                alt=""
              />
              <h4>Harvey Spector</h4>
              <p>Founder - CEO</p>
            </div>
            <div className={Styles.profile_card}>
              <Image
                src={require("../../assets/images/profile_first.png")}
                alt=""
              />
              <h4>Harvey Spector</h4>
              <p>Founder - CEO</p>
            </div>
            <div className={Styles.profile_card}>
              <Image
                src={require("../../assets/images/profile_first.png")}
                alt=""
              />
              <h4>Harvey Spector</h4>
              <p>Founder - CEO</p>
            </div>
            <div className={Styles.profile_card}>
              <Image
                src={require("../../assets/images/profile_first.png")}
                alt=""
              />
              <h4>Harvey Spector</h4>
              <p>Founder - CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.follow_us_section}>
        <div className="center_wr">
          <div className={Styles.follow_us}>
            <h2>Follow Us</h2>
            <div className={Styles.follow_us_icons}>
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WorldWide />
    </>
  );
};

export default About;
