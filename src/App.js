import {Button} from "./components/Button"

function App(){
  return(
    <div>
      <Button variant = "primary" size="sm">Add</Button>
      <Button variant = "primary" >Add</Button>
      <Button variant = "primary" size="lg">Add</Button>
      

      <Button variant = "bordered" size="sm">Cancel</Button>
      <Button variant = "bordered">Cancel</Button>
      <Button variant = "bordered" size="lg">Cancel</Button>
    </div>
    
  )
}

export default App;