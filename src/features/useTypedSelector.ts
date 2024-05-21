import { useSelector, TypedUseSelectorHook } from "react-redux";
import RootState from "./root-state";

// Create a custom typed useSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
