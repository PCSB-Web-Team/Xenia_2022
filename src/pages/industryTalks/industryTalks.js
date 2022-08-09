import BlockchainSession from "../../assets/images/industry-talk-cover-blockchain-session.jpg";
import CloudSession from "../../assets/images/industry-talk-cover-blockchain-session.jpg";
import InternshipSession from "../../assets/images/industry-talk-cover-blockchain-session.jpg";
import "./industryTalks.css";

function IndustryTalks() {
    const isLive = false; //? test values

    const importedCoverImages = [BlockchainSession, CloudSession, InternshipSession] //*we'll need to save all the cover images in advance, that means we may need to get the cover images for all possible session in advance and then send the talkData according the actual session planning

    const talksData = [
        {
            title: "Blockchain, Web3.0: How to start!",
            date: "22th August 2022",
            time: "4:30 pm",
            place: "IT Seminar Hall",
            domains: "Blockchain, Web3.0, NFT",
            points: ["Introducing Blockchain Concepts.", "Market Trends and Opportunities.", "Industry Applications and Use cases.", "Q&A"],
            registrationURL: "https://forms.google.com",
            coverImage: 0
        },
        {
            title: "Blockchain, Web3.0: How to start!",
            date: "22th August 2022",
            time: "4:30 pm",
            place: "IT Seminar Hall",
            domains: "Blockchain, Web3.0, NFT",
            points: ["Introducing Blockchain Concepts.", "Market Trends and Opportunities.", "Industry Applications and Use cases.", "Q&A"],
            registrationURL: "https://forms.google.com",
            coverImage: 1
        },
        {
            title: "Blockchain, Web3.0: How to start!",
            date: "22th August 2022",
            time: "4:30 pm",
            place: "IT Seminar Hall",
            domains: "Blockchain, Web3.0, NFT",
            points: ["Introducing Blockchain Concepts.", "Market Trends and Opportunities.", "Industry Applications and Use cases.", "Q&A"],
            registrationURL: "https://forms.google.com",
            coverImage: 2
        }
    ]

    return (
        <div className="industry-talks-page">
            <h1 className="industry-talks-title">INDUSTRY TALKS</h1>
            <h3 className="events-status" style={{ "color": isLive ? "#16d616" : "#f63535" }}>Registrations {isLive ? "Open" : "Closed"}</h3>
            <h5 className="common-info">All attendees will be provided with an Industry Verified LinkedIn Sharable E-Certificate</h5>
            {talksData.map((talkData) => (
                <div className="talk_card">
                    <div className="info_section">
                        <div className="talk_header">
                            <img className="talk-cover-image" src={importedCoverImages[talkData.coverImage]} alt="session-cover" />
                            <h1>{talkData.title}</h1>
                            <h4>{talkData.date}, {talkData.place}</h4>
                            <span className="session-time">{talkData.time}</span>
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
                    <div className="blur_back card_back" style={{ "backgroundImage": `url(${importedCoverImages[talkData.coverImage]})` }}></div>
                </div>
            ))}
            <div className="industry-talks-bottom-image"></div>
        </div>
    )
}

export default IndustryTalks;