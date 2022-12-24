import {FilmInfo} from "../../types/film-page";
import {Link, Navigate, useParams} from "react-router-dom";
import {Urls} from "../../types/urls";
import {AddReviewForm} from "../../components/add-review-form/add-review-form";
import {useAppSelector} from "../../hooks";

export type AddReviewProps = {
}
export function AddReview(props: AddReviewProps): JSX.Element {
  const {films} = useAppSelector((state) => state);
  const id = Number(useParams().id)
  const filmToShow = films.find((film) => film.id ==id)

  return (filmToShow ?
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmToShow.backgroundImage} alt="back"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="/markup/main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmToShow.id}`} className="breadcrumbs__link">{filmToShow.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmToShow.posterImage} alt="asd" width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm/>
      </div>
    </section> : <Navigate to={Urls.NotFound}/>
  ) ;
}
