import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import { useGenres } from '../hooks/useGenres';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {
  // Complete aqui
  const {genre, setGenre} = useGenres();
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
    console.log(genres)
  }, []);

  function handleClickButton(genre: number) {
    console.log(genre)
    setGenre(genre);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genreItem => (
          <Button
            key={String(genreItem.id)}
            title={genreItem.title}
            iconName={genreItem.name}
            onClick={() => handleClickButton(genreItem.id)}
            selected={genre === genreItem.id}
          />
        ))}
      </div>

    </nav>
  );
}