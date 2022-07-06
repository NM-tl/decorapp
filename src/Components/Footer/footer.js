import React from "react";
import {Social} from "../Info/Social/social";
import {BackToTop} from "../Buttons/BackToTop/backtotop";
import {CallToAction} from "../Buttons/CallToAction/calltoaction";

export function Footer() {
    return (
      <div className="footer">
              <div className="footer-container">
                  <h1 className="call-action">Lets calculate your project</h1>
                  <CallToAction />
              </div>
              <div className="footer-grid">
                  <div className="credits">
                      <div className="dev">
                          <h4 className="footer-tags">Developed by:</h4>
                          <p>Nik</p>
                      </div>
                  </div>
                  <div className="footer-social">
                      <h4 className="footer-tags">Our social media:</h4>
                      <Social />
                  </div>
                  <div className="btn">
                      <BackToTop />
                  </div>
              </div>
      </div>
    );
}