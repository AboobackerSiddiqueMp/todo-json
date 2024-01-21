import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className=" d-flex justify-content-center  ">
      
      <AddTodo></AddTodo>
      <ListTodo></ListTodo>
    </div>
  );
}

export default App;
