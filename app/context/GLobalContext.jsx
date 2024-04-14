"use client";
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const initialState = {
  data: [],
  categoryId: null,
};

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const router = useRouter();

  const pathname = usePathname();

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA":
        console.log("enter in set data");
        return { ...state, data: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [catid, setCatId] = useState(null);

  const setCategoryId = (id) => {
    setCatId(id);
    if (pathname !== "/") {
      router.push("/");
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getAllCategories = async () => {
      try {
        const response = await fetch(
          "https://developnators.azurewebsites.net/api/LookUp/GetAllCategories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        if (isMounted) {
          dispatch({ type: "SET_DATA", payload: data });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAllCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{ state, dispatch, setCategoryId, catid }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
