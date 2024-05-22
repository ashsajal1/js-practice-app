import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../app/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;