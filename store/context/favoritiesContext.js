import { createContext, useState } from 'react';

export const FavoritiesContext = createContext({
  ids:[],
  addFavorite: (id)=>{},
  removeFavorite: (id)=>{}
}); //variable que accede a los metodos de createContext

//componente funcional provider
function FavoritiesContextProvider({ children }) {
  //children representa los componentes que estaran contenidos en el provider

  const [mealIds, setMealIds] = useState([]);

  const addFavorite = (id) => {
    setMealIds((actualFavoritiesIds) => [...actualFavoritiesIds, id]); //devuelve los anteriores favoritos y el nuevo a agregar
  };


  const removeFavorite = (id) => {
    setMealIds((actualFavoritiesIds) =>
      actualFavoritiesIds.filter((mealId) => mealId.id !== id)
    );
  };

  const value = {
    ids:mealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  }

  return (
    <FavoritiesContext.Provider value={value}>
      {children}
    </FavoritiesContext.Provider>
  );
}

export default FavoritiesContextProvider;
