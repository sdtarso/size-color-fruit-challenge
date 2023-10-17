import { useState } from "react";
import SizeFruitColor from "./size-fruit-color";

function App() {
  const [challenge, setChallenge] = useState("");
  const components = {
    SizeFruitColor,
  };
  const RenderComponent = components[challenge];

  return (
    <>
      <main>
        <h1>Tech challenges</h1>
        <p>
          Demo site for showcase the challenges on{" "}
          <a
            href="https://github.com/sdtarso/tech-challenge"
            target="_blank"
            rel="noreferrer"
          >
            This Repo
          </a>
        </p>
        <div>
          <label>Select Challenge</label>
          <select onChange={(e) => setChallenge(e.target.value)}>
            <option value=""></option>
            <option value="SizeFruitColor">Size-Fruit-Color</option>
          </select>
        </div>
        <br />
        {challenge && <RenderComponent />}
      </main>
    </>
  );
}

export default App;
