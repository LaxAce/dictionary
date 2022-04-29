import "./index.css";

const Example = ({ activePOS }) => {
  return (
    <div className="example-container">
      <h3 className="example-heading">Examples</h3>
      <ul className="example">
        {activePOS?.definitions?.map((value, i) => (
          <li key={i}>{i < 4 ? value.example : null}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example;
