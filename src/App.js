import "./App.css";
import InputGroup from "./components/InputGroup";
function App() {
  return (
    <div className="App">
      <h1>Inputs</h1>
      <section id="container">
        <div className="container">
          <div className="sub-containers">
            <InputGroup
              ds="<Input />"
              placeholder="Placeholder"
              cname="defult"
            ></InputGroup>
          </div>
          <div className="sub-containers">
            <InputGroup
              ds="& :hover"
              placeholder="Placeholder"
              cname="default-hover"
            ></InputGroup>
          </div>
          <div className="sub-containers">
            <InputGroup
              ds="& :focus"
              placeholder="Placeholder"
              cname="default-focus"
              lcname="default-focus-label"
            ></InputGroup>
          </div>
          {/*  */}
        </div>
        <div className="container">
          <div className="sub-containers">
            <InputGroup
              ds="<Input error/>"
              placeholder="Placeholder"
              lcname="error-focus-label"
              cname="error"
            ></InputGroup>
          </div>
          <div className="sub-containers">
            <InputGroup
              ds="& :hover"
              placeholder="Placeholder"
              cname="error-hover"
            ></InputGroup>
          </div>
          <div className="sub-containers">
            <InputGroup
              ds="& :focus"
              placeholder="Placeholder"
              cname="error-focus"
              lcname="error-focus-label"
            ></InputGroup>
          </div>
        </div>
        {/*  */}
        <div className="container-disable">
            <div className="sub-containers">
            <InputGroup
              ds="<Input disable/>"
              placeholder="Placeholder"
              lcname=""
              cname="disable"
            ></InputGroup>
          </div>
        </div>
        {/*  */}
        <div className="container">
          <div className="sub-containers">
            <InputGroup
              ds="<Input helperText='Someintresting text'/>"
              placeholder="Placeholder"
              lcname=""
              cname="defult"
              itext="some intresting text"

            ></InputGroup>
          </div>
          
          <div className="sub-containers">
            <InputGroup
              ds="<Input helperText='Someintresting text error!'/>"
              placeholder="Placeholder"
              cname="error-focus"
              lcname="error-focus-label"
              itext="some intresting text"
            ></InputGroup>
          </div>
        </div>
        {/*  */}
        <div className="container-icons">
        <div className="sub-containers">
            <InputGroup
              ds="<Input startIcon/>"
              placeholder="📞 Placeholder"
              lcname=""
              cname="defult"

            ></InputGroup>
          </div>
          <div className="sub-containers">
            <InputGroup
              ds="<Input endIcon/>"
              placeholder="Placeholder 🔒"
              lcname=""
              cname="defult"

            ></InputGroup>
          </div>
        </div>
        {/*  */}
        <div className="container-disable">
            <div className="sub-containers">
            <InputGroup
              ds="<Input value='text'/>"
              placeholder="Text"
              lcname=""
              cname=""
            ></InputGroup>
          </div>
        </div>
        {/*  */}
        <div className="container-fullwidth">
            <div className="sub-containers">
            <InputGroup
              ds="<Input fullwidth/>"
              placeholder="Text"
              lcname=""
              cname="full-width"
            ></InputGroup>
          </div>
        </div>
        {/*  */}
        <div className="container-fullwidth">
            <div className="sub-containers">
            <InputGroup
              ds="<Input multiline row='4'/>"
              placeholder="Placeholder"
              lcname=""
              cname="multipleRow"
            ></InputGroup>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
