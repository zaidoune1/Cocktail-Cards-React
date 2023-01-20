import {createContext, useContext, useEffect, useState } from "react"

export const ConntexProvider = createContext();

const ContextProvider = ({children}) => {

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

    const [loading, setLoading] = useState(true);
    const [coktails, setCoktails] = useState([]);
    const [search, setSearch] = useState("");

    const fetchUrl = async () => {

        const fetchData = await fetch(`${url}${search}`)
        const fetchDataJson = await fetchData.json();
        const {drinks} = fetchDataJson;

        console.log(drinks)
        setLoading(true)

        try {
            
            if(fetchDataJson.drinks) {
                const newArray = drinks.map((item) => {

                    const {
                        idDrink, 
                        strDrink,
                        strAlcoholic,
                        strGlass, 
                        strDrinkThumb
                    } = item;
    
                    return {
                        id: idDrink,
                        name: strDrink,
                        info: strAlcoholic,
                        glass: strGlass,
                        image: strDrinkThumb,
                    }
                })
                setLoading(false);
                setCoktails(newArray);
            }else {
                setLoading(false)
                setCoktails([])
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUrl();
    }, [search])

    return (
        <ConntexProvider.Provider value={{setLoading, loading, coktails, setSearch}}> {children} </ConntexProvider.Provider>
    )
    }

export default ContextProvider

export const HookContext = () => {

    return useContext(ConntexProvider)
}

