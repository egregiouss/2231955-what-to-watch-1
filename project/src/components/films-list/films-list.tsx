import {FilmInfo} from "../../types/film-page";
import FilmCard from "../film-card/film-card";
import {useMemo} from "react";
import {useAppSelector} from "../../hooks";
import {getCount} from "../../store/main-data/selectors";


export type FilmsListProps = {
  films: FilmInfo[];
  count: number
}

function FilmsList(props: FilmsListProps): JSX.Element {
  // const count = useAppSelector(getCount);

  const getFilmCards = (count: number, films: FilmInfo[]) =>{
    const filmCards = films.map((film) => (
      <FilmCard key={film.id} film={film}/>))
    return count ? filmCards.slice(0, count): filmCards
  }

  const filmsList = useMemo(() => getFilmCards(props.count, props.films), [props.films, props.count]);

  return (
    <>
    <div className="catalog__films-list">
      {
        filmsList
      }
    </div>
    </>
  )

}

export default FilmsList;

