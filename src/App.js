import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import BookEntry from './Components/BookEntry/BookEntry';
import RecordEntry from './Components/RecordEntry/RecordEntry';
import Query from './Components/Query/Query';
import Userentry from './Components/Userentry/Userentry';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/book-entry' element={<BookEntry></BookEntry>}></Route>
        <Route path='/userentry' element={<Userentry></Userentry>}></Route>
        <Route path='recordentry' element={<RecordEntry></RecordEntry>}></Route>
        <Route path='/query' element={<Query></Query>}></Route>
        {/* <Route path='/login' element={ }></Route> */}
      </Routes>
    </div>
  );
}

export default App;
