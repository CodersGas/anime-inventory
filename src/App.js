import './App.css';
import Navigation from './components/navigation';
import ThemeContextWrapper from './components/themeprovider-wrapper';
import { ToggleFabIcon } from './components/theme-toggler-fab';
import Form from './components/form';
import AllAnimes from './components/allAnimes';
import EditAnime from './components/edit';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeContextWrapper>
        <ReactNotification />
        <Navigation />
        <Routes>
          <Route path="/" element={<AllAnimes />} />
          <Route path="/addNew" element={<Form />} />
          <Route path="/edit/:editId" element={<EditAnime />} />
        </Routes>
        <ToggleFabIcon />
      </ThemeContextWrapper>
    </BrowserRouter>
  );
}

export default App;
