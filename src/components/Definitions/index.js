import "./index.css";

const Definitions = ({ activePOS }) => {
  return (
    <div className="definition-container">
      <h3 className="definition-heading">Definition</h3>
      <ol className="definition">
        {activePOS?.definitions?.map((value, i) => (
          <li key={i}>{value.definition}</li>
        ))}
      </ol>
    </div>
  );
};

export default Definitions;
