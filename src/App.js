import './App.css';
import AutoCompleteFieldComponent from './components/AutoCompleteFieldComponent'
import TableComponent from './components/TableComponent'
import Body from './components/Body';
import { Provider } from 'react-redux';
import CountriesStore from './util/CountriesStore';
import { createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import WhetherPage from './Pages/WhetherPage'


const appRouter = createBrowserRouter([

  {
    path:'/',
    element:<Body/>
  },
  {
    path:'/WhetherPage/:geoname_id',
    element:<WhetherPage />
  }
])

function App() {
  return (
    <div>
      <Provider store={CountriesStore} >
      {/* <Body/> */}
      <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
