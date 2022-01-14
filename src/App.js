import './App.css';
import Navigation from './components/navigation';
import ThemeContextWrapper from './components/themeprovider-wrapper';
import { ToggleFabIcon } from './components/theme-toggler-fab';
import Form from './components/form';

function App() {
  return (
    <ThemeContextWrapper>
      <Navigation />
      <Form />
      <ToggleFabIcon />
    </ThemeContextWrapper>
  );
}

export default App;
