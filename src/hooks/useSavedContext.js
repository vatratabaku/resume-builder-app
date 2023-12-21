import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

function useSavedContext() {
    return useContext(InfoContext)
}

export default useSavedContext;