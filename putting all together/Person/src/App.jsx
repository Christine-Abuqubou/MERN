
import './App.css'
import Person from './Components/Person'
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
import './Css/style.modules.css'
function App() {
  

  return (
    <>
     {/* <Person firstName="chris" lastName="bsharah" />
     <Person firstName="chris" lastName="bsharah" /> */}

     <div className="app">
      <Header />
      <div className="bshh">
      <Navigation />
      <Main>
        <div className='sub'>
        <SubContents />
        <SubContents />
        <SubContents />
        </div>
        <Advertisement />
        
      </Main>
      </div>
    </div>


         </>
  )
}

export default App
