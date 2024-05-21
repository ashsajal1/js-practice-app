import { useSelector, TypedUseSelectorHook } from "react-redux";
import RootState from "../features/root-state";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
