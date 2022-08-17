import React from "react";
import { Link } from "react-router-dom";
import bgimg from "../../../assets/images/industry-talk-cover-blockchain-session.jpg";
import "./industryTalkDetail.css";

const IndustryTalkDetail = () => {
  return (
    <div className="industry-talk-detail">
      <div className="wrapper">
        <div className="heading flex flex-col md:flex-row">
          <Link to={"/industry-talks"}>
            Industry Talks &nbsp;&nbsp;&gt;&nbsp;&nbsp;
          </Link>
          <span> Industry Talk</span>
        </div>
        <div className="talk-details flex flex-col md:flex-row mb-16">
          <div className="left">
            <div className="img-container">
              <img src={bgimg} alt="industry talk" />
            </div>
          </div>
          <div className="right">
            <h1 className="text-4xl mb-8">Talk Title</h1>
            <p className="mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate numquam nihil porro possimus veritatis. Eius blanditiis
              animi dicta consequatur, error, minus recusandae eos magnam ipsum
              ratione necessitatibus illo sapiente architecto. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Quam maiores libero
              tempora dolorem dignissimos fugiat, harum, aperiam nihil
              architecto quibusdam illum sit praesentium magnam officiis dicta
              obcaecati. Soluta, magni commodi.
            </p>
            <button>Enroll Now</button>
          </div>
        </div>
        <div className="talk-schedule">
          <div className="talk-schedule-items">
            <div className="talk-schedule-item">
              <div className="title">Date</div>
              <div className="desc">20 August</div>
            </div>
            <div className="vertical-line"></div>
            <div className="talk-schedule-item">
              <div className="title">Time</div>
              <div className="desc">6pm - 8pm</div>
            </div>
          </div>
          <div className="middle-line vertical-line"></div>
          <div className="talk-schedule-items">
            <div className="talk-schedule-item">
              <div className="title">Venue</div>
              <div className="desc">Auditorium</div>
            </div>
          </div>
        </div>
        <div className="company-details">
          <h1 className="text-4xl font-bold mb-6">About Company</h1>
          <div className="company-container flex flex-col md:flex-row">
            <div className="company-left">
              <img src={bgimg} alt="company" />
            </div>
            <div className="company-right">
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, accusamus aliquid exercitationem dolorum consequuntur
                eligendi, commodi ullam perferendis dolorem deleniti possimus
                nam asperiores repudiandae distinctio cupiditate minus quas,
                itaque quibusdam!
              </p>
              <div className="company-links flex flex-row">
                <a href="https://db.com" target={"_blank"} className="mr-4">
                  <i className="fas fa-globe"></i>
                </a>
                <a href="https://www.linkedin.com/company/deutsche-bank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="agenda">
          <h1 className="text-4xl font-bold mb-6">Agenda</h1>
          <ul className="agenda-list list-disc px-4">
            <li>Agenda1</li>
            <li>Agenda1</li>
            <li>Agenda1</li>
            <li>Agenda1</li>
            <li>Agenda1</li>
          </ul>
        </div>
        <div className="speakers">
          <h1 className="text-4xl font-bold mb-6">Our Speakers</h1>
          <div className="speakers-wrapper">
            <div className="cards-wrapper">
              <div className="speaker-card">
                <div className="speaker-img">
                  <img src={bgimg} alt="speaker" />
                </div>
                <div className="speaker-info">
                  <div className="mb-4">
                    <div className="text-2xl font-semibold">Speaker Name</div>
                    <div className="text-xl font-medium">Speaker Post</div>
                  </div>
                  <div className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptas praesentium cupiditate laborum tempore
                    dolorem corrupti voluptates accusantium, molestias, esse
                    eaque veritatis laudantium quos placeat culpa, dicta officia
                    sunt natus?
                  </div>
                </div>
                <div className="speaker-name">
                  <h1>Speaker Name</h1>
                  <p>Speaker Post</p>
                </div>
              </div>
              <div className="speaker-card">
                <div className="speaker-img">
                  <img src={bgimg} alt="speaker" />
                </div>
                <div className="speaker-info">
                  <div className="mb-4">
                    <div className="text-2xl font-semibold">Speaker Name</div>
                    <div className="text-xl font-medium">Speaker Post</div>
                  </div>
                  <div className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptas praesentium cupiditate laborum tempore
                    dolorem corrupti voluptates accusantium, molestias, esse
                    eaque veritatis laudantium quos placeat culpa, dicta officia
                    sunt natus?
                  </div>
                </div>
                <div className="speaker-name">
                  <h1>Speaker Name</h1>
                  <p>Speaker Post</p>
                </div>
              </div>
              <div className="speaker-card">
                <div className="speaker-img">
                  <img src={bgimg} alt="speaker" />
                </div>
                <div className="speaker-info">
                  <div className="mb-4">
                    <div className="text-2xl font-semibold">Speaker Name</div>
                    <div className="text-xl font-medium">Speaker Post</div>
                  </div>
                  <div className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptas praesentium cupiditate laborum tempore
                    dolorem corrupti voluptates accusantium, molestias, esse
                    eaque veritatis laudantium quos placeat culpa, dicta officia
                    sunt natus?
                  </div>
                </div>
                <div className="speaker-name">
                  <h1>Speaker Name</h1>
                  <p>Speaker Post</p>
                </div>
              </div>
              <div className="speaker-card">
                <div className="speaker-img">
                  <img src={bgimg} alt="speaker" />
                </div>
                <div className="speaker-info">
                  <div className="mb-4">
                    <div className="text-2xl font-semibold">Speaker Name</div>
                    <div className="text-xl font-medium">Speaker Post</div>
                  </div>
                  <div className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus voluptas praesentium cupiditate laborum tempore
                    dolorem corrupti voluptates accusantium, molestias, esse
                    eaque veritatis laudantium quos placeat culpa, dicta officia
                    sunt natus?
                  </div>
                </div>
                <div className="speaker-name">
                  <h1>Speaker Name</h1>
                  <p>Speaker Post</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryTalkDetail;
