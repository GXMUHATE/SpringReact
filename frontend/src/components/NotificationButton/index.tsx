import icon from "../../assets/img/notification-yellow.svg"
import "./styles.css"

function NotificationButton() {
    return (
        <div className="brown-btn">
            <img src={icon} alt="notificar" width="25px" />
        </div>
    )
}

export default NotificationButton