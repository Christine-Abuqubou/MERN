
import './App.css'
import UserForm from './Components/HookForms'
import Form from './Components/FormComponent'
import Forms from './Components/Form'
import ColorBoxForm from './Components/boxColor'
import Tabs from './Components/Tabs'

function App() {
  const tabsData = [
    { label: "Tab 1", content: "This is the content for Tab 1." },
    { label: "Tab 2", content: "This is the content for Tab 2." },
    { label: "Tab 3", content: "This is the content for Tab 3." },
    { label: "Tab 4", content: "This is the content for Tab 4." }
  ];

  

  return (
    <>
      
     {/* <UserForm/>
     <br/>

     <Form/>
     <br/>
     <br/>
     <br/>

     <Forms/> */}
<br/>
     <br/>
     <br/>
     <ColorBoxForm/>
     <br/>
     <br/>
     <div>
      <h1>Tabs Component</h1>
      <Tabs tabs={tabsData} />
    </div>


    
    </>
  )
}

export default App
