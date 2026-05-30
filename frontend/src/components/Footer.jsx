import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <span>© {new Date().getFullYear()} BookMyBriks. All rights reserved.</span>
                    <span className="dot">·</span>
                    <a href="#privacy">Privacy</a>
                    <span className="dot">·</span>
                    <a href="#terms">Terms</a>
                    <span className="dot">·</span>
                    <a href="#sitemap">Sitemap</a>
                </div>
                <div className="footer-right">
                    <div className="footer-utility">
                        <i className="fa-solid fa-globe"></i>
                        <span>English (IN)</span>
                    </div>
                    <div className="footer-utility">
                        <span>₹ INR</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;