import { NavLink } from "react-router";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-logo-container">
          <img
            className="footer-logo"
            src="/images/logo-white.png"
            alt="Logo of the Movie App"
          />
          <img
            className="footer-logo-name"
            src="/images/logo-name-white.png"
            alt="Name of Logo of the Movie App"
          />
        </div>
        <div className="footer-info">
          <div className="about">
            <span className="title">About</span>
            <div className="about-info">
              Welcome to Movie Appp, your go-to destination for discovering and
              exploring movies from different genres and eras.
            </div>
            <div className="about-info">
              Our app allows users to browse a curated collection of movies,
              view detailed information such as plots, ratings, release dates,
              and cast members, and find their next favorite film with ease.
            </div>
          </div>
          <div className="channel">
            <span className="title">Channel</span>
            <div className="channel-link">
              <ul>
                <li>
                  <NavLink
                    to="https://www.netflix.com/"
                    target="_blank"
                    title="www.netflix.com"
                    className="channel-nav-link"
                  >
                    <span>Netflix</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.primevideo.com/"
                    target="_blank"
                    title="www.primevideo.com"
                    className="channel-nav-link"
                  >
                    <span>Prime Video</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.apps.disneyplus.com/"
                    target="_blank"
                    title="www.apps.disneyplus.com"
                    className="channel-nav-link"
                  >
                    <span>Disney</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.hbomax.com/"
                    target="_blank"
                    title="www.hbomax.com"
                    className="channel-nav-link"
                  >
                    <span>HBO Max</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
