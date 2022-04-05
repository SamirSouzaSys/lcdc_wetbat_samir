import { Header } from "./components/default/Header";
import { Sidebar } from "./components/default/Sidebar";
import { Card } from "./components/Card";
import { CardMain } from "./components/CardMain";
import { GlobalStyle } from "./styles/global";

// import { library } from '@fortawesome/fontawesome-free'
//  '. @fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// library.add(fab);

export function App() {
  return (
    <>
      <Header />
      <div className="mainContent">
        <Sidebar />
        <main>
          <div className="row">
            <CardMain/>
          </div>
          <div className="row">
            <Card
              header={"Quick quote"}
              width={35}
              />
            <Card
              header={"Pending quotes"}
              width={35}
              />
            <Card
              header={"New Leads"}
              width={35}
            />
          </div>
          <div className="row">
            <Card
              header={"Popular destinations & packages"}
            />
            <Card
              header={"Teams chat"}
            />
          </div>
          <div className="row">
            <Card
              header={"Revenue"}
            />
            <Card
              header={"Potential revenue"}
            />
            <Card
              header={"Close ratios"}
            />
          </div>
        </main>
      </div>
      <GlobalStyle />
    </>
  );
}
