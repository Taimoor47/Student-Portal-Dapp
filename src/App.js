import StudntPortal from './components/StudntPortal';
import './App.css';
// import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CheckResult from './components/CheckResult';
import Layout from './Layout';
import StudentInfo from './components/StudentInfo';
import { ConnectWallet } from './components/ConnectWallet';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="/" element={<StudntPortal/>} />
      <Route path="/checkResult" element={<CheckResult/>} />
      <Route path="/studentInfo" element={<StudentInfo/>} />
      <Route path="/connect" element={<ConnectWallet/>} />

        
      </Route>
     </Routes>
    
  );
}

export default App;
