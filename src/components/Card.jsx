import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Card(props) {
    return (
        <div className="card--container">
            <img className="card--image" src={props.imageUrl} alt={props.title}/>
            <div>
                <div className="card--location-container">
                    <FontAwesomeIcon icon={faLocationDot}  className='card--location-dot'/>
                    <span className="card--location">{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h2 className="card--dates">{props.startDate} - {props.endDate}</h2>
                <p className="card--desc">{props.description}</p>
            </div>
        </div>
    )
}