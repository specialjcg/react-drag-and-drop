import React from 'react';

import './App.css';
import Welcome from "./components/Welcome";
import {useStore} from './useStore';
import Containeur from "./components/Containeur";
import  {StoreProvider} from './useStore';
import {StoreProviderBoard} from "./useStoreBoard";


const App: React.FC = () => {

  return (
      <StoreProvider>
      <div style={{ width: '100%' }}>
          {useStore().state.states.map((choix)=><Welcome   key={choix.id}  id={choix.id} />)}



<StoreProviderBoard>

    <Containeur/></StoreProviderBoard>
      </div></StoreProvider>



  );
};


export default App;
