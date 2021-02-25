import React from 'react';
import styled from 'styled-components';

const AppLayout = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const App = (props) => (
  <AppLayout className="appLayout">
    {props.children}
  </AppLayout>
);

export default App;
