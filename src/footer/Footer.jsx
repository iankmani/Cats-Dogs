import "./Footer.css";
import today from "../Utils/date";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {today()} Ian Kimani. All rights reserved</p>
    </div>
  );
};

export default Footer;