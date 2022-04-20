import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Post } from './post';

const App = () => {
  return (
    <Post title="TITULEK" content='Lorem ipsum dolosr sit amet, consectetuer adipiscing elit. Fusce consectetuer risus a nunc. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Mauris metus. In dapibus augue non sapien. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quisque tincidunt scelerisque libero.' date='20.4.2022'/>
  );
};

export default App;
