import './App.css';
import AutoCompleteFieldComponent from './components/AutoCompleteFieldComponent'
import TableComponent from './components/TableComponent'
import Body from './components/Body';
import { Provider } from 'react-redux';
import CountriesStore from './util/CountriesStore';

function App() {
  return (
    <div>
      <Provider store={CountriesStore} >
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
