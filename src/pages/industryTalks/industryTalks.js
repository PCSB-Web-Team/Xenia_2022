import "./industryTalks.css";
import "swiper/css";
import BlockchainSession from "../../assets/images/industry-talk-cover-blockchain-session.jpg";
import CloudSession from "../../assets/images/industry-talk-cover-blockchain-session.jpg";
import InternshipSession from "../../assets/images/industry-talk-cover-blockchain-session.jpg";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Scrollbar } from "swiper";

function IndustryTalks() {
  const isLive = false; //? test values

  const importedCoverImages = [
    BlockchainSession,
    CloudSession,
    InternshipSession,
  ]; //*we'll need to save all the cover images in advance, that means we may need to get the cover images for all possible session in advance and then send the talkData according the actual session planning

  const talksData = [
    {
      title: "Blockchain, Web3.0: How to start!",
      date: "22th August 2022",
      time: "4:30 pm",
      place: "IT Seminar Hall",
      domains: "Blockchain, Web3.0, NFT",
      points: [
        "Introducing Blockchain Concepts.",
        "Market Trends and Opportunities.",
        "Industry Applications and Use cases.",
        "Q&A",
      ],
      registrationURL: "https://forms.google.com",
      coverImage: 0,
    },
    {
      title: "Blockchain, Web3.0: How to start!",
      date: "22th August 2022",
      time: "4:30 pm",
      place: "IT Seminar Hall",
      domains: "Blockchain, Web3.0, NFT",
      points: [
        "Introducing Blockchain Concepts.",
        "Market Trends and Opportunities.",
        "Industry Applications and Use cases.",
        "Q&A",
      ],
      registrationURL: "https://forms.google.com",
      coverImage: 1,
    },
    {
      title: "Blockchain, Web3.0: How to start!",
      date: "22th August 2022",
      time: "4:30 pm",
      place: "IT Seminar Hall",
      domains: "Blockchain, Web3.0, NFT",
      points: [
        "Introducing Blockchain Concepts.",
        "Market Trends and Opportunities.",
        "Industry Applications and Use cases.",
        "Q&A",
      ],
      registrationURL: "https://forms.google.com",
      coverImage: 2,
    },
  ];

  useEffect(() => {
    const tooltips = document.querySelectorAll(".card_tooltip");
    const talk_cards = document.querySelectorAll(".talk_card"); //returns NodeList, not an common array but iterable

    Array.prototype.map.call(talk_cards, (talk_card, index) =>
      talk_card.addEventListener(
        "mousemove",
        function (e) {
          moveTooltip(e, index);
        },
        false
      )
    );

    function moveTooltip(e, index) {
      const tooltipDimensions = tooltips[index].getBoundingClientRect();
      const actualTopLeftCorner = {
        left: e.x - 370,
        top: e.y - 250,
      };

      if (actualTopLeftCorner.top > 350 + tooltipDimensions.height) {
        //* Additional conditions - ((actualTopLeftCorner.left > tooltipDimensions.width * 0.001 && ... ) && (actualTopLeftCorner.left < 800 - tooltipDimensions.width && actualTopLeftCorner.top > tooltipDimensions.height * 0.001))
        //* but causes stuck rendering
        tooltips[index].style.top = actualTopLeftCorner.top + "px";
      }
      if (
        actualTopLeftCorner.left > 240 - tooltipDimensions.width * 0.5 &&
        actualTopLeftCorner.left < 240 + tooltipDimensions.width * 0.5
      ) {
        tooltips[index].style.left = actualTopLeftCorner.left + "px";
      }
      // tooltips[index].style.display = "flex";
    }
  });

  return (
    <div className="industry-talks-page">
      <h1 className="industry-talks-title">INDUSTRY TALKS</h1>
      <h3
        className="events-status"
        style={{ color: isLive ? "#16d616" : "#f63535" }}
      >
        Registrations {isLive ? "Open" : "Closed"}
      </h3>
      <h5 className="common-info">
        All attendees will be provided with an Industry Verified LinkedIn
        Sharable E-Certificate
      </h5>
      {talksData.map((talkData) => (
        <>
          <div className="talk_card">
            <div className="info_section">
              <div className="talk_header">
                <img
                  className="talk-cover-image"
                  src={importedCoverImages[talkData.coverImage]}
                  alt="session-cover"
                />
                <h1>{talkData.title}</h1>
                {/* <h4>{talkData.date}, {talkData.place}</h4>
                            <span className="session-time">{talkData.time}</span> */}
                <p className="type">{talkData.domains}</p>
              </div>
              <div className="talk_desc">
                <ul className="text">
                  {talkData.points.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="talk_social">
                <ul>
                  {/* <li><i className="material-icons">share</i></li>
                            <li><i className="material-icons"></i></li>
                            <li><i className="material-icons">chat_bubble</i></li> */}
                </ul>
              </div>
            </div>
            <div className="talk_datetime">
              <h1>
                {talkData.date.slice(0, 2)}
                <sup>th</sup>
              </h1>
              <time>{talkData.time}</time>
              <address>📍 {talkData.place}</address>
            </div>
            <div
              className="card_back"
              style={{
                backgroundImage: `url(${
                  importedCoverImages[talkData.coverImage]
                })`,
              }}
            ></div>
            {/* <span className="card_tooltip"> */}
            {/* <Swiper
                className="mySwiper1 swiper-h"
                direction={"vertical"}
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                mousewheel={true}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
              >
                <SwiperSlide>
                  <h2 className="company_tabs_header">Company Details</h2>
                  <a
                    className="company_link"
                    href="https://ethereum.org/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>Blockchain Technology</h3>
                    <p className="company_details">
                      As a blockchain network, Ethereum is a decentralized
                      public ledger for verifying and recording transactions.
                      The network's users can create, publish, monetize, and use
                      applications on the platform, and use its Ether
                      cryptocurrency as payment.
                    </p>
                  </a>
                  <h3 className="company_social_link">Social Links</h3>
                  <a
                    className="social_handle_icon"
                    href="https://ethereum.org/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🌐
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <h2 className="company_tabs_header">Speaker's Info</h2>
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="speaker_img"
                      alt="speaker"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXd6EJkQahFb4SIb7OeTVPTJGIJ8H8R2kRmA&usqp=CAU"
                    />
                    <h3 className="speaker_name">Dr. Awesome Speaker</h3>
                    <h4 className="speaker_designation">
                      Consulting Partner & Digital Solutions Head Wipro Ltd
                    </h4>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <h2 className="company_tabs_header">Speaker's Info</h2>
                  <h3 className="speaker_achievements_experiences">
                    Achievements
                    <p>
                      Patent on dynamic content creation (Patent
                      number:10939143)
                    </p>
                    <p>
                      Built Platforms & Solutions in areas such as Fan
                      engagement platform; Service assurance platform
                    </p>
                    <p>Published thought papers in Wipro site and ICTAA</p>
                  </h3>
                  <h3 className="speaker_achievements_experiences">
                    Experiences
                    <p>
                      26+ years of global IT experience in solution sales,
                      consulting, practice & delivery in key industry verticals
                    </p>
                    <p>Experience in Strategy & Consulting</p>
                  </h3>
                </SwiperSlide>
                <SwiperSlide>
                        <Swiper
                            className="mySwiper2 swiper-v"
                            direction={"vertical"}
                            spaceBetween={30}
                            mousewheel={true}
                            scrollbar={{
                                hide: false,
                            }}
                            modules={[Mousewheel, Scrollbar]}
                        >
                            <SwiperSlide>
                                <h2 className="company_tabs_header">Speaker's Info</h2>
                                <img className="speaker_img" alt="speaker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXd6EJkQahFb4SIb7OeTVPTJGIJ8H8R2kRmA&usqp=CAU" />
                                <h3 className="speaker_name">Awesome Speaker</h3>
                            </SwiperSlide>
                        </Swiper>
                    </SwiperSlide>
              </Swiper> */}
            {/* </span> */}
          </div>
        </>
      ))}
      <div className="industry-talks-bottom-image"></div>
    </div>
  );
}

export default IndustryTalks;
