import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/notification-yellow.svg"
import { BASE_URL } from "../../utils/request";
import "./styles.css"

type Props = {
    saleId: number;
}

function hancleClick(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS enviado com sucesso")
        });
}

function NotificationButton( {saleId} : Props) {
    return (
        <div className="brown-btn" onClick={() => hancleClick(saleId)}>
            <img src={icon} alt="notificar" width="25px" />
        </div>
    )
}

export default NotificationButton