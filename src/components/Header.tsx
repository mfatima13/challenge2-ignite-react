import { useEffect, useState } from "react";
import { useGenres } from "../hooks/useGenres";
import { api } from "../services/api";


interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export function Header() {
    const {genre} = useGenres();
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    useEffect(() => {
        api.get<GenreResponseProps>(`genres/${genre}`).then(response => {
            setSelectedGenre(response.data);
          })
    }, [genre])

    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    );
}