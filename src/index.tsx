import React from 'react';
import ReactDOM from 'react-dom/client';
import {NormalButton, RightIconButton, LeftIconButton} from './buttons';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NormalButton />
    <RightIconButton />
    <LeftIconButton />
  </React.StrictMode>
);
