import { NavLink } from "react-router-dom";
import { Posts } from "@/lib/types";



interface Props {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>)=> void;
  searchItem: Posts[]
}

const SearchInput = ({ handleSearch, searchItem}: Props) => {

  return ( 
    <section className="relative">
      <div className="w-full py-2 bg-white rounded-lg px-3 mb-4">
        <input
          type="search"
          className="w-full border-none bg-inherit text-black"
          placeholder="Search by title"
          onChange={handleSearch}
        />
      </div>
      {searchItem.length !== 0 &&
        <div className="search__content">
          <div className="p-4">
            {searchItem.map(item => (
              <NavLink key={item.id} to={`${item.id}`} className="text-black py-2 block">
                <span>{ item.title }</span>
              </NavLink>
            ))
            }
          </div>
        </div>
      }
    </section>
   );
}
 
export default SearchInput;