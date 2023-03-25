import { createContext, useContext} from "react";
import LoaderContainer from "../containers/LoaderContainer";
import useInitialLoad from "../hooks/useInitialLoad";

const FirebaseContext = createContext();

const FirebaseContextProvider = ({children}) => {
  const { firebaseData, setFirebaseData, isAppLoaded } = useInitialLoad();

  return (
    <FirebaseContext.Provider value={{ firebaseData, setFirebaseData }}>
      {!isAppLoaded ? children :  <LoaderContainer width="80" height="80" />
      }
    </FirebaseContext.Provider>
  );
}

export const useFirebaseContext = () => useContext(FirebaseContext);

export default FirebaseContextProvider;