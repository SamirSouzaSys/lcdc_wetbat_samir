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
            <CardMain />
          </div>
          <div className="row">
            <Card
              headerText={"Quick quote"}
              widthSize={37.2}

              headerIcon={getImageUrl("icon_quickQuote.png")}
              headerExtraIcon1={getImageUrl("icon_expand.png")}
              // contentCard={}
            />
            <Card
              headerText={"Pending quotes"}
              widthSize={37.2}
              headerIcon={getImageUrl("icon_pendingQuotes.png")}

              headerExtraIcon1={getImageUrl("icon_refresh.png")}
              headerExtraIcon2={getImageUrl("icon_expand.png")}
            />
            <Card
              headerText={"New Leads"}
              widthSize={25.5}
              headerIcon={getImageUrl("icon_newLeads.png")}

              headerExtraIcon1={getImageUrl("icon_refresh.png")}
              headerExtraIcon2={getImageUrl("icon_expand.png")}
            />
          </div>
          <div className="row">
            <Card
              headerText={"Popular destinations & packages"}
              widthSize={75}
              headerIcon={getImageUrl("icon_popularDestinations&Packages.png")}
            />
            <Card
              widthSize={25}
              headerText={"Teams chat"}
              headerIcon={getImageUrl("icon_teamsChat.png")}
            />
          </div>
          <div className="row">
            <Card
              widthSize={37.2}
              headerText={"Revenue"}
              headerIcon={getImageUrl("icon_revenue.png")}
            />
            <Card
              widthSize={37.2}
              headerText={"Potential revenue"}
              headerIcon={getImageUrl("icon_potentialRevenue.png")}
            />
            <Card
              widthSize={25.5}
              headerText={"Close ratios"}
              headerIcon={getImageUrl("icon_closeRatios.png")}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>
      </div>
      <GlobalStyle />
    </>
  );
}

// function getIcon(name) {
//   const [category, filename] = name.split(":");

//   if (filename) {
//     return require(`one_directory/icons/${category}/${filename}.svg`);
//   } else {
//     return require(`two_directory/icons/${name}.svg`);
//   }
// }

function getImageUrl(headerIcon: string) {

  // return require(`../../assets/${headerIcon}`);
  return require(`./assets/${headerIcon}`);
}
