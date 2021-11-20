import React, { useEffect, useState } from "react";
import MainMenu from "./components/MainMenu/MainMenu";
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
    <>
      <MainMenu />
    </>
  );
};

export default App;
