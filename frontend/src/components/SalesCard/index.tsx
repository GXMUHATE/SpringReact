import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton"
import "./styles.css"

function SalesCard() {

    const min =  new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date()

    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(max);

    useEffect(()=> {
        axios.get("http://localhost:8080/sales")
        .then(response => {
            console.log(response.data)
        })
    }, []);

    return (
        <div className="tsutsu-card">
            <h2 className="sales-title">Vendas</h2>
            <div>
                <div className="form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#433</td>
                            <td className="show576">02/09/2022</td>
                            <td>Lopes</td>
                            <td className="show992">12</td>
                            <td className="show992">33</td>
                            <td>Mt$ 56411,00</td>
                            <td>
                                <div className="brown-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#253</td>
                            <td className="show576">01/09/2022</td>
                            <td>Greo</td>
                            <td className="show992">96</td>
                            <td className="show992">65</td>
                            <td>Mt$ 26411,00</td>
                            <td>
                                <div className="brown-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#103</td>
                            <td className="show576">28/08/2022</td>
                            <td>Brun</td>
                            <td className="show992">126</td>
                            <td className="show992">75</td>
                            <td>Mt$ 12411,00</td>
                            <td>
                                <div className="brown-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard