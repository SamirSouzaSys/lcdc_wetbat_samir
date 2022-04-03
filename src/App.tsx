import { Header }  from "./components/default/Header";
import { Sidebar } from "./components/default/Sidebar";
import { GlobalStyle } from "./styles/global";

// import { library } from '@fortawesome/fontawesome-free'
//  '. @fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// library.add(fab);

export function App() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <GlobalStyle/>
    </>
  );
}
