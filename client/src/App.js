import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Sequelize Example
        </p>
        <a
          className="App-link"
          href="/admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin
        </a>
      </header>
    </div>
  );
}

export default App;
