import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import DetailProductScreen from './Screens/DetailProductScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/detail-product" element={<DetailProductScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
