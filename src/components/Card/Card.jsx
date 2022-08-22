import "./Card.css";

const Card = (props) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}.png?set=set2&size=250x250`} alt="" />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

export default Card;