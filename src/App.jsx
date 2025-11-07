import "./App.css";
import Header from "./components/header/Header";
import About from "./pages/about/About";

function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <About />
        {/* <Projects /> */}
      </main>
    </div>
  );
}

export default App;
