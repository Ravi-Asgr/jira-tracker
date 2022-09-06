import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

            <ul className="footer-list">

                <li className="footer-item">
                <a href="#" className="footer-link">About</a>
                </li>

                <li className="footer-item">
                <a href="#" className="footer-link">Privacy</a>
                </li>

                <li className="footer-item">
                <a href="#" className="footer-link">Terms</a>
                </li>

                <li className="footer-item">
                <a href="#" className="footer-link">Developers</a>
                </li>

                <li className="footer-item">
                <a href="#" className="footer-link">Support</a>
                </li>

                <li className="footer-item">
                <a href="#" className="footer-link">Careers</a>
                </li>

            </ul>

            <p className="copyright">
                &copy; 2022 <a href="#" className="copyright-link">codewithsadee</a>. All Rights Reserved
            </p>

            </div>
        </footer>
    );
}

export default Footer;