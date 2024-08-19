import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
            <h1>404 not found</h1>
            <Link
                className="transition ease-in-out hover:scale-105 active:scale-95 flex px-8 py-4 cursor-pointer bg-sky-500 rounded-full text-white"
                to='/'
            >Back to home</Link>
        </div>
    )
}
