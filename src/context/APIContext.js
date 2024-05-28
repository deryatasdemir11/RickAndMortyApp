import React, { useEffect, useContext, useState, createContext } from "react";
import axios from 'axios'

const APIContext = createContext();

export const APIProvider = ({ children }) => {
    const [APICharacters, setAPICharacters] = useState(null);
    const [APILocations, setAPILocations] = useState(null);

    useEffect(() => {

        /**  Rick And Morty Characters */

        const fetchDataC = async () => {
            try {


                const responseC = await axios.get("https://rickandmortyapi.com/api/character");

                setAPICharacters(responseC.data.results)

            } catch (error) {
                console.error("Karakterlerin verisi maalesef alınamadı, İşte Hatanız:", error)
            }
        };

        fetchDataC();

    }, []);


    useEffect(() => {


        /** Rick And Morty Characters Locations */

        const fetchDataL = async () => {
            try {



                const responseL = await axios.get("https://rickandmortyapi.com/api/location");

                setAPILocations(responseL.data.results)

            } catch (error) {
                console.error("Lokasyonların verisi maalesef alınamadı, İşte Hatanız:", error)
            }
        };

        fetchDataL();

    }, [])

    return (
        <APIContext.Provider value={{ APICharacters, APILocations }}>
            {children}
        </APIContext.Provider>
    )
}


export const useAPICharacters = () => {
    const { APICharacters } = useContext(APIContext);
    return APICharacters;
};

export const useAPILocations = () => {
    const { APILocations } = useContext(APIContext);
    return APILocations;
};