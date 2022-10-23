import {Link} from "react-router-dom"

export const About = () => {
    return (
        <div className="bg-slate-300">
            <h2>About</h2>
            <p>Hello About page! This is where it's all about!</p>
            <p>Type in a word in the url to create a page with that word on it!</p>
            <Link className="hover:text-blue-500 hover:underline" to={"/"}>Home</Link>
        </div>
    )
}
