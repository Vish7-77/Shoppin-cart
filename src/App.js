import React from "react";
import Main from "./compos/Main/Main.js";
import Header from "./compos/Header/Header";
import Loader from "./Loader.js";
function App() {
  const [load, setload] = React.useState(true);

  setTimeout(() => {
    setload(false);
  }, 2000);
  return (
    <>
      {load && <Loader />}
      {!load && <Header />}
      {!load && <Main />}
    </>
  );
}

export default App;
