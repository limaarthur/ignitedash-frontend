import { Router } from 'react-router';
import { History } from 'history';
import { useLayoutEffect, useState } from 'react';

type CustomRouterProps = {
  history: History;
  children: React.ReactNode;
};

export const CustomRouter = ({ history, children }: CustomRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    const unlisten = history.listen(({ location, action }) => {
      setState({ location, action });
    });
    return unlisten;
  }, [history]);

  return (
    <Router
      navigator={history}
      location={state.location}
    >
      {children}
    </Router>
  );
};