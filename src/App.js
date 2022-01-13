import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import ThemeContextWrapper from './components/themeprovider-wrapper';
import { ToggleFabIcon } from './components/theme-toggler-fab';

function App() {
  return (
    <ThemeContextWrapper>
      <Navigation />
      <ToggleFabIcon />
    </ThemeContextWrapper>
  );
}

export default App;
