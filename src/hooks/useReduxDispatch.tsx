import { useDispatch } from "react-redux"

export default function useReduxDispatch() {
    const dispatch = useDispatch()
    return { dispatch }
}
