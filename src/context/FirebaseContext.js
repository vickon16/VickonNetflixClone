import { createContext, useContext} from "react";
import LoaderContainer from "../containers/LoaderContainer";
import useInitialLoad from "../hooks/useInitialLoad";

const FirebaseContext = createContext();

const FirebaseContextProvider = ({children}) => {
  const { firebaseData, setFirebaseData, isAppLoaded, dataLoading } = useInitialLoad();
  console.log(firebaseData.user)

  return (
    <FirebaseContext.Provider value={{ firebaseData, setFirebaseData, dataLoading }}>
      {!isAppLoaded ? children :  <LoaderContainer width="80" height="80" />
      }
    </FirebaseContext.Provider>
  );
}

export const useFirebaseContext = () => useContext(FirebaseContext);

export default FirebaseContextProvider;