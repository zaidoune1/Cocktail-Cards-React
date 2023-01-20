import { useEffect, useRef } from "react";
import { HookContext } from "../context/ContextProvider";
import "../styles/searchStyle.css";
const Search = () => {

    const {setSearch} = HookContext();
    const onRef = useRef();

    useEffect(() => {
        onRef.current.focus();
    }, [])

    const handelRef = () => {

        setSearch(onRef.current.value)
    }

        const handelSubmit = (e) => {

            e.preventDefault(e)

        }


    return (

    <div className="container-input">
        <form onSubmit={handelSubmit} className="serach-form">
            <p className="title-search"> Search your favart coktails</p>
            <input className="inp" type="text" id="name" placeholder="Search your favorite cocktail..."
            ref={onRef} onChange={handelRef}
            />
        </form>
    </div>

    )

    }

export default Search