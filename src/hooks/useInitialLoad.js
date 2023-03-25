/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { auth, collectionFilmsRef, collectionSeriesRef } from '../lib/firebase-config';

const initialState = {
  user: null,
  films: [],
  series: [],
};

const useInitialLoad = () => {
  const [firebaseData, setFirebaseData] = useState(initialState);
  const [isAppLoaded, setIsAppLoaded] = useState(true);
  const [dataLoading, setIsDataLoading] = useState(false);

  //load userdata on authentication change
  useEffect(() => {
    
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) setFirebaseData((prev) => ({ ...prev, user: user }));
      setIsAppLoaded(false);
      setIsDataLoading(true)
    });

    return () => unSub();
  }, []);

  //load films from firestore database
  useEffect(() => {
    const unSub = onSnapshot(collectionFilmsRef, snapshots => {
      const allFilms = snapshots.docs.map(doc => ({
        ...doc.data(),
        id : doc.id
      }))
      setFirebaseData(prev => ({...prev, films : allFilms}))
      setIsDataLoading(false);
    })

    return () => unSub();
  }, [])

  // load all series
  useEffect(() => {
    const unSub = onSnapshot(collectionSeriesRef, (snapshots) => {
      const allSeries = snapshots.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFirebaseData((prev) => ({ ...prev, series: allSeries }));
      setIsDataLoading(false);
    });

    return () => unSub();
  }, []);

  return {firebaseData, isAppLoaded, dataLoading, setFirebaseData, setIsAppLoaded};
}

export default useInitialLoad