import { FaSearch } from "react-icons/fa";
import { FaS } from "react-icons/fa6";

const Search = () => {
    return (
        <search className="rounded-md border-2 border-slate-300 px-4 py-2">
            <form>
                <input className="outline-none" name="input" id="search" placeholder="Browse products" />
                <button type="submit"><FaSearch /></button>
            </form>
        </search>
    )
}


export default Search