import GenresList from '../../components/genres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';

import {genres} from '../../utils/consts';
import {MainPage} from '../../types/main';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ShowMore} from "../../components/show-more/show-more";
import {useEffect, useState} from "react";
import {FilmInfo} from "../../types/film-page";
import {resetCountFilms} from "../../store/action";

function Main(props: MainPage): JSX.Element {

  const {genre, films, count} = useAppSelector((state) => state)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCountFilms())
  }, []);

  return(
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.promoFilm.background.imageSrc} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

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

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={props.promoFilm.poster.imageSrc} alt="The Grand Budapest Hotel poster" width="218"
                   height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.promoFilm.genre}</span>
                <span className="film-card__year">{props.promoFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${props.promoFilm.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {<GenresList genres={genres.genres} currentActive={genre}/>}
          {<FilmsList films={films} count={count}/>}

          {<ShowMore/>}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
