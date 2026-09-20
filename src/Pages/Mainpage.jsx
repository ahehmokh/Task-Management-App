import { useEffect, useState } from "react";
import Loading from "./LoadingPage";
import Start from "./Start";

const MainPage = () => {
  const [isLoadded, setIsLoaded] = useState(false);


  //To show my loading Page the page will take 3 secs to load
  useEffect(() => {
    setTimeout(()=> {
        setIsLoaded(true)
    },3000)
  },[])

  return (
    <>
      {!isLoadded && (
           <Loading/> 
      )}

      {isLoadded && (
            <Start/>
      )}
    </>
  );
};

export default MainPage;
