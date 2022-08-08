import BlockchainSession from "../../assets/images/industry-talk-cover-blockchain-session.jpg";
import "./industryTalks.css";

function IndustryTalks() {
    return (
        <div className="industry-talks-page">
            <div className="talk_card">
                <div className="info_section">
                    <div className="talk_header">
                        <img className="locandina" src={BlockchainSession} alt="blockchain-session-cover" />
                        <h1>Blockchain, Web3.0: How to start!</h1>
                        <h4>22th August 2022, IT Seminar Hall</h4>
                        <span className="session-time">4:30 pm</span>
                        <p className="type">Blockchain, Web3.0, NFT</p>
                    </div>
                    <div className="talk_desc">
                        <ul className="text">
                            <li>Introducing Blockchain Concepts.</li>
                            <li>Market Trends and Opportunities.</li>
                            <li>Industry Applications and Use cases.</li>
                            <li>Q&A</li>
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
                <div className="blur_back card_back"></div>
            </div>
            <div className="talk_card">
                <div className="info_section">
                    <div className="talk_header">
                        <img className="locandina" src={BlockchainSession} alt="blockchain-session-cover" />
                        <h1>Blockchain, Web3.0: How to start!</h1>
                        <h4>22th August 2022, IT Seminar Hall</h4>
                        <span className="session-time">4:30 pm</span>
                        <p className="type">Blockchain, Web3.0, NFT</p>
                    </div>
                    <div className="talk_desc">
                        <ul className="text">
                            <li>Introducing Blockchain Concepts.</li>
                            <li>Market Trends and Opportunities.</li>
                            <li>Industry Applications and Use cases.</li>
                            <li>Q&A</li>
                        </ul>
                    </div>
                    <div className="talk_social">
                        <ul>
                            <li><i className="material-icons">share</i></li>
                            <li><i className="material-icons"></i></li>
                            <li><i className="material-icons">chat_bubble</i></li>
                        </ul>
                    </div>
                </div>
                <div className="blur_back card_back"></div>
            </div>
            <div className="talk_card">
                <div className="info_section">
                    <div className="talk_header">
                        <img className="locandina" src={BlockchainSession} alt="blockchain-session-cover" />
                        <h1>Blockchain, Web3.0: How to start!</h1>
                        <h4>22th August 2022, IT Seminar Hall</h4>
                        <span className="session-time">4:30 pm</span>
                        <p className="type">Blockchain, Web3.0, NFT</p>
                    </div>
                    <div className="talk_desc">
                        <ul className="text">
                            <li>Introducing Blockchain Concepts.</li>
                            <li>Market Trends and Opportunities.</li>
                            <li>Industry Applications and Use cases.</li>
                            <li>Q&A</li>
                        </ul>
                    </div>
                    <div className="talk_social">
                        <ul>
                            <li><i className="material-icons">share</i></li>
                            <li><i className="material-icons"></i></li>
                            <li><i className="material-icons">chat_bubble</i></li>
                        </ul>
                    </div>
                </div>
                <div className="blur_back card_back"></div>
            </div>
        </div>
    )
}

export default IndustryTalks;