
    import { Link } from "react-router-dom";
import "../styles/coktailsStyle.css";

        const CoktailsList = ({id, image, name, info, glass}) => {

        return (
            <div className="main-container">

                    <img className="imgs" src={image} alt={name}/>
                    <h1> {name} </h1>
                    <h2> {info} </h2>
                    <h3> {glass} </h3>
                    <Link to={`/details/${id}`} className="btn-details">Details</Link>
            </div>
    
        )
        }

        export default CoktailsList