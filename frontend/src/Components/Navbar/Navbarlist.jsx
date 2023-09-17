import {
  faBalanceScale,
  faFileAlt,
  faHome,
  faInfoCircle,
  faQuestionCircle,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";


const Navbarlist = () => {
  const location = useLocation();

  const navbarList = [
    // {
    //   title: "Chatbot",
    //   url: "/chatbot",
    //   cName: "Navlinks",
    //   icon: faHome,
    // },
    {
<<<<<<< HEAD
      title: "Home",
      url: "/",
      cName: "Navlinks",
      icon: faHome,
=======
      title: "DocMaker",
      url: "/docum",
      cName: "Navlinks",
      icon: faInfoCircle,
>>>>>>> 54bb50dffad90d8bb5d8156247255314c904b482
    },
    {
      title: "Summarizer",
      url: "/textsum",
      cName: "Navlinks",
      icon: faVideo,
    },
    {
      title: "Resources",
      url: "/resource",
      cName: "Navlinks",
      icon: faQuestionCircle,
    },
    {
      title : "Advocates",
      url:"/lawyers",
      cName :"Navlinks",
      icon: faBalanceScale,
    }
  ];
  return (
    <>
    <li>
      <a href='https://www.amazon.in' target="_blank" style={{textDecoration:'none', color:'black'}}>ChatBot</a>
    </li>
      {navbarList.map((item, index) => {
        const isActive = location.pathname === item.url;
        const iconClass = isActive ? "active-icon" : "";
        const linkClass = isActive ? "active" : "";
        return (
<<<<<<< HEAD
          <>
=======
          <div>
>>>>>>> 54bb50dffad90d8bb5d8156247255314c904b482
          <li key={index} className={linkClass}>
            <Link to={item.url} className={`${item.cName}`}>
              <FontAwesomeIcon icon={item.icon} className={iconClass} />
              {item.title}
            </Link>
          </li>
<<<<<<< HEAD
          </>
=======
          </div>
>>>>>>> 54bb50dffad90d8bb5d8156247255314c904b482
        );
      })}
    </>
  );
};

export default Navbarlist;
