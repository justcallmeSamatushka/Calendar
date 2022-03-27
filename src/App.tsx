import React, { FC } from 'react';
import AppRouter from "./components/AppRouter";

interface OwnProps {}

type Props = OwnProps;

const App: FC = () => {

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
