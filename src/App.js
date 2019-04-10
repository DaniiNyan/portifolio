import React from 'react';
//importar componentes aqui:
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Bio from "./Components/Bio/Bio";
// import Timeline from "./Components/Timeline/Timeline";
// import Projects from "./Components/Projects/Projects";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
import './App.css';

const app = () => {



  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Bio></Bio>
      {/* <Timeline></Timeline>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer> */}
    </div>
  )
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default app;