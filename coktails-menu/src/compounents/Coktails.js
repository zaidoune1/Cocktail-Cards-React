import { HookContext } from "../context/ContextProvider"
import CoktailsList from "./CoktailsList";
import Loading from "./Loading";
import "../styles/coktailsStyle.css";
import Search from "./Search";


const Coktails = () => {

    const {coktails, loading} = HookContext();

    if(loading) {
        return <main>
            <Loading/>
        </main>
    }

    const gg = coktails.length < 1 && <h1 className="not-faound"> Serach not faound </h1>

    return (
    <>
    <div className="container">
    <Search/>

    {gg}

    {
        coktails.map((item) => {
            
            return <div key={item.id} className="coktailsDeltails">
                <CoktailsList {...item} />
            </div>
        })
    }
    </div>
    </>
    )
    }

export default Coktails