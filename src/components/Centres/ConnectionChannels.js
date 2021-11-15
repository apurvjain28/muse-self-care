import classes from "./ConnectionChannels.module.css";

const ConnectionChannels = () => {
  return (
    <div className="container">
      <h5
        style={{
          margin: "20px auto",
          color: "#4f005f",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Connection Channels
      </h5>
      <div className="col-2">
        <p style={{ color: "#4f005f" }}>Definition</p>
        <ul className="nav flex-column ">
          <li>Split</li>
        </ul>
      </div>

      <div className="col-2.5">
        <p style={{ color: "#4f005f" }}>Personal Channels</p>
        <ul className="nav flex-column ">
          <li>Channel of Awareness (24-61)</li>
          <li>Channel of Mutation (3-60</li>
          <li>Channel of Concentration (9-52)</li>
        </ul>
      </div>

      <div className="col-2">
        <p style={{ color: "#4f005f" }}>Educational Channels</p>
        <ul className="nav flex-column ">
          <li>Channel of Emoting (39-55)</li>
        </ul>
      </div>
      <div className="col-3">
        <p style={{ color: "#4f005f" }}>Birth Channels</p>
        <ul className="nav flex-column ">
          <li>Channel of Structuring (23-43)</li>
          <li>Channel of Struggle (28-38)</li>
        </ul>
      </div>
      <div className="col-2">
        <p style={{ color: "#4f005f" }}>Predictor Keys</p>
        <div>
          <table style={{ border: "1px solid black" }}>
            <tr style={{ margin: "2px" }}>
              <td>Ed-Dev</td>
              <td>Educational Developmental</td>
            </tr>
            <tr>
              <td>Ed-Dir</td>
              <td>Educational Directional</td>
            </tr>
            <tr>
              <td>Ed-Pn</td>
              <td>Educational Person</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConnectionChannels;
