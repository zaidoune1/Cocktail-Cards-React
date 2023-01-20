import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { HookContext } from "../context/ContextProvider";
import Loading from "./Loading";
import "../styles/singalCoktailStyle.css"

    const SingalCoktailDetails = () => {

        const {setLoading, loading } = HookContext();

        const urlId = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

        const {id} = useParams();

        const [idCoktail, setCoktail] = useState([])

        const fetchUrlById = async () => {
            
            setLoading(true)

            const fetchUrlId = await fetch(`${urlId}${id}`)
            const fetchUrlIdJson = await fetchUrlId.json();

            const {drinks} = fetchUrlIdJson;

            try {

                if(drinks) {

                        const {
                            idDrink: id,
                            strDrink: name,
                            strAlcoholic: info,
                            strGlass: glass,
                            strDrinkThumb: images,
                            strInstructions:instruc,
                            dateModified: date,
                            strIngredient1,
                            strIngredient2,
                            strIngredient3,
                        } = fetchUrlIdJson.drinks[0]

                        const newIngredient = [

                            strIngredient1,
                            strIngredient2,
                            strIngredient3,
                        ]

                        const newObj = {
                            id, name, info, glass, images, instruc, date
                        }

                        setCoktail(newObj);

                        setLoading(false)
                    
                    }else {
                        setLoading(false)
                        setCoktail([]);                        
                    }

            } catch (error) {
                setLoading(false)
                console.log(error)
            }


        }

        useEffect(() => {
            fetchUrlById();
        }, [id])


        if(loading) {
            return <div className="container">
                <Loading/>
            </div>
        }
        
        const {name, info, glass, images, instruc, date} = idCoktail
        
    return (
        <>

            
                    <div className="container-singalCoktail">
                        <img className="img-SingalCoktail" src={images} alt={name} />
                        <div className="singal-main-container">
                            <h2> {name} </h2>
                            <h3> {info} </h3>
                            <h4> {glass} </h4>
                            <h5> {instruc} </h5>

                            {/* {
                                newIngredient.map((gredient, index) => {

                                    return gredient ? <div key={index} className="gredient-container">  
                                    <p> {gredient} </p>
                                    </div> : null
                                })

                            } */}

                                <p> {date} </p>

                        </div>
                    </div>
            
        
        </>
    )
    }

    export default SingalCoktailDetails