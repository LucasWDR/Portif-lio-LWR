import "./css/styles.css";
import "./images/node.svg";
import TechsComponent from "./components/TechsComponent";

function App() {
  return (
    <body>
      <section id="person">
        <div class="person-content">
          <div class="person-name">
            <h1>
              Olá, <span></span>
            </h1>
            <h1>
              Meu nome é <span></span>
            </h1>
            <h1>
              Lucas Witt da Rosa <span></span>
            </h1>
          </div>
        <TechsComponent/>
        </div>
      </section>
    </body>
  );
}

export default App;
