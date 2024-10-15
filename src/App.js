import { Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from './components/fistpage/FirstPage';
import Newjobfrom from './components/from/Newjobfrom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
    <Layout>
     <Routes>
      <Route path='/' element = {<FirstPage/>}/>
      <Route path='/jobs' element = { <Newjobfrom/>}/>
     </Routes>
    </Layout>
    </>
  );
}

export default App;
