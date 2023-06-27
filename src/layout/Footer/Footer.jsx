import "./Footer.css";
import facebook from "assets/icon-facebook.png";
import twitter from "assets/icon-twitter.png";
import linkedIn from "assets/icon-linkedin.png";
import awsPartnerBadge from "assets/aws-partner-badge.png";
export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10">
            <p style={{ marginTop: 0, lineHeight: "24px" }}>
              <span className="orange">
                {" "}
                <h1>
                  <span className="white">Evg</span>
                  <span className="orange">Soft</span>
                </h1>
              </span>
              <br />
              Chicago, IL
            </p>
          </div>
          <div className="col-lg-2">
            <ul className="social">
              <li>
                <a href="#placeholder" target="_blank">
                  <img alt="Facebook logo" src={facebook} width="10" />{" "}
                </a>
              </li>
              <li>
                <a href="#placeholder" target="_blank">
                  <img alt="Twitter logo" src={twitter} width="21" />
                </a>
              </li>
              <li>
                <a href="#placeholder" target="_blank">
                  <img alt="Linkedin logo" src={linkedIn} width="19" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-10">
            <p style={{ margin: 0, lineHeight: "24px" }}>
              <div>Copyright © 2014-{new Date().getFullYear()}</div> EvgSoft,
              All rights reserved.
              <br />
              <a href="#placeholder" target="_blank">
                Privacy
              </a>
              <span> | </span>
              <a href="#placeholder" target="_blank">
                Terms of Use
              </a>
            </p>
          </div>
          <div className="col-lg-2" style={{ textAlign: "right" }}>
            <img
              src={awsPartnerBadge}
              alt=""
              style={{ display: "inline-block", width: "80px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
