import "./card.styles.css";

const Card = ({ monster }) => {
  const { name, email, id, username } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2 className="monster-name">{name}</h2>
      <p className="monster-email">{email}</p>
      <p className="monster-cp">{username}</p>
    </div>
  );
};

export default Card;
