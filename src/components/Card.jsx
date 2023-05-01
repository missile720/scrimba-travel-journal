import "./Card.css"

function Card(props) {
  return (
    <div>
      <div className="card">
        <img className="cardImage" src={props.imageUrl} alt="" />
        <div className="cardText">
          <div className="cardTextLocation">
            <img className="locationIcon" src="/images/placeholder.png" alt="" />
            <p className="cardLocation">{props.location}</p>
            <a className="linkText" href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
            <h1 className="cardTitle">{props.title}</h1>
            <p className="cardDate">{props.startDate} - {props.endDate}</p>
            <p className="cardDescription">{props.description}</p>
        </div>
      </div>
      <hr className="cardDivider"/>
    </div>
  )
}

export default Card