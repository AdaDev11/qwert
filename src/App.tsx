import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { MantineProvider } from '@mantine/core';
import Demo from './component/simpleComponent.tsx';

function App() {

  return (
    <>
      <MantineProvider>
        <Demo />
      </MantineProvider>
    </>
  )
}

export default App;
