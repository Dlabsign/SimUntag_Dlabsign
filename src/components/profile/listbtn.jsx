export default function ListItem({
  buttonNumber,
  activeButton,
  setActiveButton,
  itemContent,
}) {
  const handleButtonClick = () => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="bio-ul-list text-xs font-medium pl-1 flex items-center mb-2">
      <button
        className={`btn-item ${activeButton === buttonNumber ? "active" : ""}`}
        onClick={handleButtonClick}
      >
        {itemContent}
      </button>
    </div>
  );
}
