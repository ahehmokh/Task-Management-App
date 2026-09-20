import { useContext, useEffect } from "react";
import { myTool } from "../Context/DataTransferringtool";

const UseFetch = (url) => {
    const myData = useContext(myTool)
    useEffect(() => {
        fetch(url)
        .then((data) => {
            return data.json()
        })
        .then((res) => {
            myData.setTasks(res)
        })
        .catch((err) => {
            console.log(err);
            
        })
    },[url])
}
export default UseFetch;