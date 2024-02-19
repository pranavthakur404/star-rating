import { FaStar } from "react-icons/fa";

const Star = ({ id, checked, setRating }) => {
  function handleClick() {
    setRating(id);
  }

  const color = {
    color: checked ? "yellow" : "black",
  };

  return (
    <div className="star-box">
      <FaStar onClick={handleClick} className="star-icon" style={color} />
    </div>
  );
};

export default Star;
