const MouseClicker = () => {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  const handleImageClick = (event) => {
    event.stopPropagation(); // Previene la propagazione dell'evento al pulsante
    console.log(event.target.src);
  };

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        Button One
      </button>
      <button name="two" onClick={handleButtonClick}>
        <img
          src="https://via.placeholder.com/50"
          alt="Placeholder"
          onClick={handleImageClick}
        />
      </button>
    </div>
  );
};

export default MouseClicker;
