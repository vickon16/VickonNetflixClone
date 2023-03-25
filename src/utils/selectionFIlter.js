
export const Slides = (firebaseData, category) => {
  if (category === "series") {
    return [
        { title: 'Documentaries', data: firebaseData?.series?.filter((item) => item.genre === 'documentaries') },
      { title: 'Comedies', data: firebaseData?.series?.filter((item) => item.genre === 'comedies') },
      { title: 'Children', data: firebaseData?.series?.filter((item) => item.genre === 'children') },
      { title: 'Crime', data: firebaseData?.series?.filter((item) => item.genre === 'crime') },
      { title: 'Feel Good', data: firebaseData?.series?.filter((item) => item.genre === 'feel-good') },
      ]
  } else if (category === "films" ) {
    return [
      { title: 'Drama', data: firebaseData?.films?.filter((item) => item.genre === 'drama') },
      { title: 'Thriller', data: firebaseData?.films?.filter((item) => item.genre === 'thriller') },
      { title: 'Children', data: firebaseData?.films?.filter((item) => item.genre === 'children') },
      { title: 'Suspense', data: firebaseData?.films?.filter((item) => item.genre === 'suspense') },
      { title: 'Romance', data: firebaseData?.films?.filter((item) => item.genre === 'romance') },
    ]
  }
  else {
    return []
  }
}