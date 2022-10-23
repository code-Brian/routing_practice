import {Link, useNavigate} from "react-router-dom"

export const Home = () => {
    // const navigate = useNavigate()
    // navigate("/")
    return (
        <div className="bg-slate-700 text-white">
            <h2>Home</h2>
            <p>Hello, home! Welcome to the home page!</p>
            <Link className="hover:text-blue-500 hover:underline" to={"/about"}>Go to About</Link>
        </div>
    )
}
