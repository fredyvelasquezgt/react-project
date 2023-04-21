import Backdrop from './components/Backdrop';
import Todo from './components/Todo';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
     <Todo text='learn react'/>
     <Todo text='master react' />
     <Todo text='do laundry' />
     <Modal />
     <Backdrop />

    </div>

  );
}

export default App;
