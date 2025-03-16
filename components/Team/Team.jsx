const Team = (props) => {
  const { id, name, price, strength, agility, img, handleRemoveFighter } =
    props;

  return (
    <li>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      <button
        onClick={() =>
          handleRemoveFighter({ id, name, price, strength, agility, img })
        }
      >
        Remove
      </button>
    </li>
  );
};

export default Team;
