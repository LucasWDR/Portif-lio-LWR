import "./css/styles.css";
import "./images/node.svg";
import image_node from './images/nodejs-original.svg';
import image_typescript from './images/typescript-original.svg';

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

          <div class="stacks-content">
            <h3>Techs :</h3>
            <div class="stacks">
              <ul>
                <li>
                  <img src={image_node} alt="html-icon" />
                </li>
                <li>
                  <img src={image_typescript} alt="html-icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
