import { useEffect, useState } from 'react';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { GenresProvider } from './hooks/useGenres';
import './styles/global.scss';

import './styles/sidebar.scss';


export function App() {
 
  
  return (
    <GenresProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </GenresProvider>
  )
}