import useSearchParams from "../hooks/useSearchParams"

export default function Watch() {
    const id = useSearchParams()
    console.log(id)
  return (
    <div>watch</div>
  )
}
