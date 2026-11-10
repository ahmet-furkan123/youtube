import { MdMenu, MdMic, MdApps, MdOutlineAccountCircle } from "react-icons/md";
import { Link,useNavigate,useSearchParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { useState } from "react";

const Header = ({ toggleSidebar }) => {
  const navigate= useNavigate()
  const [searchParams]=useSearchParams()

  const query = searchParams.get("search_query");
  const [text, setText] = useState(query || "");


  const handleSubmit=(e)=>{
    e.preventDefault()

    const query=text.trim()
    if(!query) return;

    navigate(`/results?search_query=${query}`);
     
  }
  return (
    <div className="flex justify-between gap-6 md:gap-8 px-4 h-14">
      {/* sol */}

      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray">
          <MdMenu className="text-xl md:2xl" />
        </button>
        <Link to="/" className="flex gap-1 items-center ">
          <img src="/youtube.png" alt="youtube" className="w-8" />
          <span className="text-xl font-bold tracking-tight max-sm:hidden">
            Youtube
          </span>
        </Link>
      </div>

      {/* orta */}

      <div className="flex-1 max-w-182 flex-center">
        <form onSubmit={handleSubmit} className="flex w-full max-w-160 items-center">
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Ara" onChange={(e)=>setText(e.target.value)} value={text}
              className="w-full bg-[#121212] border border-gray h-10 px-4 text-white focus:border-blue-600 outline-none rounded-l-full"
            />
            <button type="submit" className="w-16 h-10 bg-[#222222] border border-gray rounded-r-full flex-center hover:bg-gray">
              <CiSearch className="text-xl" />
            </button>
          </div>
          <button className="ml-2 p-2 bg-[#181818] hover:bg-gray rounded-full max-sm:hidden">
            <MdMic />
          </button>
        </form>
      </div>

      {/* sağ */}
      <div className="flex items-center gap-2">
        <button className="icon max-sm:hidden">
          <IoIosVideocam />
        </button>
        <button className="icon max-sm:hidden">
          <MdApps />
        </button>

        <button className="icon relative">
          <FaBell />
          <span className="absolute -right-1 -top-1 bg-red-600 size-5 rounded-full text-xs font-bold flex-center">
            3
          </span>
        </button>

        <button className="icon">
          <MdOutlineAccountCircle className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
