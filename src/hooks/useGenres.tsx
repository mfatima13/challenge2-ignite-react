import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface GenresContextData {
    genre: number;
    setGenre: (genre: number) => void;
}

interface GenresProviderProps {
    children: ReactNode;
}

export const GenresContext = createContext<GenresContextData>(
    {} as GenresContextData,
);

export function GenresProvider({children}: GenresProviderProps) {
    const [genre, setSelectedGenre] = useState<number>(1);

    useEffect(() => {
        api.get<GenreResponseProps>(`genres/${genre}`).then(response => {
            setSelectedGenre(response.data.id);
            console.log(response.data)
        })
    }, [])

    function setGenre(genre: number) {
        setSelectedGenre(genre);
    }
    
    return (
        <GenresContext.Provider value={{genre, setGenre}}>
            {children}
        </GenresContext.Provider>
    );
}

export function useGenres() {
    const context = useContext(GenresContext);
    return context;
}