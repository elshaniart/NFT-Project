import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState({ data: null });

  useEffect(() => {
    callBackendAPI()
      .then((res) => setState({ data: res.express }))
      .catch((err) => console.log(err));
  }, []);

  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  return (
    <div className="App">
      <header>
        <h1 className="App-title">
          Welcome to the NFT Project/ MyHeritage clone thingy
        </h1>
      </header>
      <button>Go to next Pag</button>
      <p className="App-intro">{state.data}</p>
    </div>
  );
};

export default App;
