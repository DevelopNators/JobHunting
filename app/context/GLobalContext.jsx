'use client'
import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';

const initialState = {
  data: [],
  categoryId: undefined 
};

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {


  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        console.log("enter in set data")
        return { ...state, data: action.payload };
       case 'CAT_ID':
        console.log("enter in Cat Id" , action.payload)
        return {...state,  categoryId:  action.payload}
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    
    const getAllCategories = async () => {
      try {
        const response = await fetch("https://developnators.azurewebsites.net/api/LookUp/GetAllCategories");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        dispatch({ type: 'SET_DATA', payload: data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getAllCategories();
  }, []);

  
 

  return (
    <GlobalStateContext.Provider value={{ state, dispatch   }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
