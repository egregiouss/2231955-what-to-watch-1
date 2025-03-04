import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignIn} from '../../pages/sign-in/sign-in';
import {FavoriteFilmsList} from '../../pages/favorite-list/favorite-films-list';
import {Film} from '../../pages/film/film';
import {AddReview} from '../../pages/add-review/add-review';
import {MediaPlayer} from '../../pages/player/media-player';
import Page404 from '../../pages/404/404';
import PrivateRoute from '../private-routes/private-routes';
import {Urls} from '../../types/urls';
import {MediaFileStates} from '../../types/media-player-state';
import {useAppSelector} from "../../hooks";
import {Spinner} from "../spinner/spinner";
import React from "react";
import HistoryRouter from "../history-route/history-route";
import browserHistory from "../../browser-history";
import {getIsLoading} from "../../store/main-data/selectors";

function App(): JSX.Element {
  const isFilmsLoaded = useAppSelector(getIsLoading);
  console.log(isFilmsLoaded)

  return isFilmsLoaded ? (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={Urls.Home} element=
          {
            <Main/>
          }
        />
        <Route path={Urls.Login} element={<SignIn/>}/>
        <Route path={Urls.MyList} element=
          {
            <PrivateRoute>
              <FavoriteFilmsList/>
            </PrivateRoute>
          }
        />
        <Route path={Urls.Film} element=
          {
            <Film/>
          }
        />
        <Route path={Urls.AddReview} element={<AddReview />}/>
        <Route path={Urls.MediaPlayer} element={<MediaPlayer time={'0.00.00'} state={MediaFileStates.Paused}/>}/>
        <Route path={Urls.NotFound} element={<Page404/>}/>
      </Routes>
    </HistoryRouter>
  ): <Spinner/>;
}

export default App;
