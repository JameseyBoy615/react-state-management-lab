const ZombieFighters = (props) => {
  const { id, name, price, strength, agility, img, handleAddFighter } = props;

  return (
    <li>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      <button
        onClick={() =>
          handleAddFighter({ id, name, price, strength, agility, img })
        }
      >
        Add
      </button>
    </li>
  );
};

export default ZombieFighters;
