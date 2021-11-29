import "./TwoColGrid.css";

const TwoColGrid = (props) => {
  const renderComponents = () => {
    const gridComponents = props.children?.map((element, i) => {
      return (
        <div key={i} className="grid__element">
          {element}
        </div>
      );
    });
    return gridComponents;
  };

  return <div className="grid__content">{renderComponents()}</div>;
};

export default TwoColGrid;
