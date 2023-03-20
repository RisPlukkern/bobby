import "./App.css";
import Button from "./Components/Button";
import Form from "./Components/Form";
import Steps from "./Components/Steps";
import '@gjensidige/nci-core-global-css';

function App() {
  return (
    <div className="App">
      <Steps />
      <Button />
      <Form />
    </div>
  );
}

export default App;
