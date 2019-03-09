import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3">
        <div className="container">
          <div className="text-center text-white mb-3 social-links">
            <a
              href="https://github.com/emigdio821"
              className="text-white p-2 h3 social-icon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="https://twitter.com/emigdio821"
              className="text-white p-2 h3 social-icon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a
              href="https://linkedin.com/in/emigdio821/"
              className="text-white p-2 h3 social-icon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </div>
          <div className="text-center text-white text-monospace">
            &copy;2019 — <strong>WeatherApp</strong>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
