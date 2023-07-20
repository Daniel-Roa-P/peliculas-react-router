import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {

      try{

        console.log('use Effect');
        const getStorage = async () => {

          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){

            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;

          } else {

            parsedItem = JSON.parse(localStorageItem);

          }

          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
          console.log('actual: ' + item);

        }

        getStorage();

      } catch (error){
      
        setError(error);

      }

  }, [sincronizedItem]);
  
  const saveItem = (newItem) => {
    
    try {
    
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    
    } catch(error) {
    
      setError(error);
    
    }
  };

  const sincronizeItem = () => {
  
    console.log('antes: ' + item);
    setLoading(true);
    setSincronizedItem(false);
    console.log('despues: ' + item);
  
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };

}

export { useLocalStorage };