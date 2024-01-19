"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define the types for your state
type State = {
	isRouteChanged: boolean;
	menuActive: boolean;
};

// Define the types for your actions
type Action = {
	type: string;
	payload: any;
};

// Define the initial state
const initialState: State = {
	isRouteChanged: false,
	menuActive: false,
};

// Create a reducer function to handle state changes
const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "SET_ROUTE_CHANGED":
			return { ...state, isRouteChanged: action.payload };
		case "TOGGLE_MENU":
			return { ...state, menuActive: action.payload };
		default:
			return state;
	}
};

// Create the context
const RouteChangeContext = createContext<
	| {
			state: State;
			dispatch: React.Dispatch<Action>;
	  }
	| undefined
>(undefined);

// Create a custom hook to access the context
export const useRouteChange = () => {
	const context = useContext(RouteChangeContext);
	if (!context) {
		throw new Error("useRouteChange must be used within a RouteChangeProvider");
	}
	return context;
};

// Create the context provider component
type RouteChangeProviderProps = {
	children: ReactNode;
};

export const RouteChangeProvider: React.FC<RouteChangeProviderProps> = ({
	children,
}: RouteChangeProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<RouteChangeContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</RouteChangeContext.Provider>
	);
};
