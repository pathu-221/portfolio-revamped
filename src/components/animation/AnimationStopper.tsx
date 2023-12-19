"use client";

import { useRouteChange } from "@/contexts/RouteChangedContext";
import { useEffect, type FC } from "react";

interface AnimationStopperProps {}

const AnimationStopper: FC<AnimationStopperProps> = () => {
	const { dispatch } = useRouteChange();

	useEffect(() => {
		dispatch({ type: "SET_ROUTE_CHANGED", payload: false });
	}, []);
	return <></>;
};

export default AnimationStopper;
