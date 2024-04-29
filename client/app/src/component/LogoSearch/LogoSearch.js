import React, { useState } from "react";
import Logo from "../../img/logo.png";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
// import "./LogoSearch.css";



const LogoSearch = () => {

  const [ setLoading] = useState(false);
  const [ setSearchResult] = useState([]);
  const [search, setSearch] = useState("");




  const token = "my_token";
  const toast =useToast();

  const handleSearch = async () =>{
    if(!search){
      toast({
        title: "please Enter something in Search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
        
      });
      return
    }

    try{
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config)
      console.log(data);
      setLoading(false);
      setSearchResult(data);
    }catch(e){
     
      toast({
        title: "Error occured!",
        description: "Failed to Load the search results",
        status:"error",
        duration:5000,
        isClosable:true,
        position: "bottom-left"

      });

    }
  };


  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search">
        <input type="text" placeholder="#Explore"
        onChange={(e)=>setSearch(e.target.value)}
        onKeyDown={handleSearch}
        />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
