import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { InfoBlock } from "./components/InfoBlock/InfoBlock";
import { StartedLink } from "./components/StartedLink/StartedLink";
import { StatisticsBlock } from "./components/StatisticsBlock/StatisticsBlock";
import { UrlForm } from "./components/UrlForm/UrlForm";
import "./index.scss";

function App() {
  return <div className="App">
    <Header />
    <InfoBlock />
    <UrlForm />
    <StatisticsBlock />
    <StartedLink />
    <Footer />
  </div>;
}

export default App;
