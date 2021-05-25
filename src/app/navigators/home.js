import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Home from '@screens/Home';
import Menu from '@screens/all/Menu';
import PatronBidMessages from '@screens/patron/PatronBidMessages';
import ChatList from '@screens/all/ChatList';

import PatronNavigator from '@navigators/patron';
import RequestsNavigator from '@navigators/requests';
import RequestsByStorkNavigator from '@navigators/requestsByStork';
import RequestsByPatronNavigator from '@navigators/requestsByPatron';
import PatronRequestsNavigator from '@navigators/patronRequests';

const HomeNavigator = () => {
  const [translateX, setTranslateX] = useState('-translate-x-full');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const match = useRouteMatch();

  const moveSliderRight = () => setTranslateX('translate-x-0');
  const moveSliderLeft = () => setTranslateX('-translate-x-full');

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0]?.clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0]?.clientX);
  };
  const onTouchEnd = () => {
    if (touchEnd - touchStart > 120) {
      moveSliderRight();
    }

    if (touchEnd - touchStart < -120) {
      moveSliderLeft();
    }
  };

  return (
    <div
      className="container mx-auto"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className={`h-screen w-screen fixed left-0 top-0 transform-gpu ${translateX} transition-transform z-20 flex`}
      >
        <Menu dismiss={moveSliderLeft} />
      </div>
      <Switch>
        <Route path={`${match.path}/my-requests/:requestId/storks`}>
          <RequestsByStorkNavigator />
        </Route>
        <Route path={`${match.path}/patron-requests/:requestId/patrons`}>
          <RequestsByPatronNavigator />
        </Route>
        <Route path={`${match.path}/patron`}>
          <PatronNavigator />
        </Route>
        <Route path={`${match.path}/my-requests`}>
          <RequestsNavigator />
        </Route>
        <Route path={`${match.path}/patron-requests`}>
          <PatronRequestsNavigator />
        </Route>
        <Route path={`${match.path}/messages/:userId`}>
          <PatronBidMessages />
        </Route>
        <Route path={`${match.path}/messages`}>
          <ChatList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default HomeNavigator;
