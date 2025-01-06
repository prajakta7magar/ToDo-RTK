import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
  
function App() {

  return (
    <>
    <h4 className='text-red-500 font-semibold text-4xl text-center pt-10'>To-Do-App</h4>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
