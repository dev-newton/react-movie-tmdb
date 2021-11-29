import "./LoadMoreBtn.css";

const LoadMoreBtn = ({ text, onClick }) => {
  return (
    <div className="loadmorebtn" onClick={() => onClick(true)}>
      <p>{text}</p>
    </div>
  );
};

export default LoadMoreBtn;
