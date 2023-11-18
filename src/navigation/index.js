import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css";

function Navigation() {
    const links = ["home", "signin", "signup", "search", "profile"];
    const {pathname} = useLocation();

    return (
        <div className="list-group" style={{width: 150, backgroundColor: "red"}}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/FoodPilot/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    <div className="wd-itemText">{link}</div>
                </Link>
            ))}
        </div>
    );
}

export default Navigation;