import "./mainanim.scss";
import { mainAnim } from "../../appdata";

function Mainanim() {
  return (
    <div className="mainAnim">
      {mainAnim.map((icon) => {
        return <div className="card">{icon}</div>;
      })}
    </div>
  );
}

export default Mainanim;
