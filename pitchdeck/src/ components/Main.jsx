import React from "react";

const Main = () => {
  return (
    <div className="about-page">
      <div>
        <h1 className="heading">About the Website:</h1>
      </div>
      <p className="ct">The Website is a tool which serves two purposes:</p>
      <div className="ct">
        <ul>
          <li>
            <h4>
              This Website is the official place through which you can play our
              game,{" "}
              <a
                className="main-btn"
                href="https://exun-2022-dps-fbd.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Exit Armageddon!
              </a>{" "}
            </h4>
          </li>
          <li>
            <h2 className="ct">
              This Website also offers the functionality of a MarketPlace
              through which you can learn about and play different kinds of
              retro games.
            </h2>
          </li>
        </ul>
      </div>

      {/*<hr style={{ "margin-top": "50px" }} />*/}

      <center>
        <div style={{ paddingTop: "0px" }} className="ct created">
          <h4 className="ct created">Created by:</h4>
          <div className="ct created">
            <ul>
              <li>
                <h4>
                  <a
                    className="main-btn"
                    href="https://github.com/sz05"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shreyans Jain
                  </a>{" "}
                </h4>
              </li>
              <li>
                <h4>
                  <a
                    className="main-btn"
                    href="https://github.com/ART3MISTICAL"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Devansh Arora
                  </a>{" "}
                </h4>
              </li>
              <li>
                <h4>
                  <a
                    className="main-btn"
                    href="https://github.com/P-seudonymous"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Aryan Saraf
                  </a>{" "}
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </center>

      <p className="ct">
        We, the students of Delhi Public School, Faridabad developed this
        website in less than 3 days as a hackathon project. We all have great
        interest in coding and believe that the future ahead truly depends on
        code and Tech.
      </p>
    </div>
  );
};

export default Main;
