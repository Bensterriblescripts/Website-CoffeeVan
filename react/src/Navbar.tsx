import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() { 
    return (
        <nav>
            <div className="md:w-5/6 sm:w-screen bg-pink-300 md:h-20 sm:h-15 mx-auto text-center flex justify-between items-center md:rounded-lg sm:rounded-lg mt-4">
                <Link to="/" className="text-lg md:ml-10 sm:text-5xl text-amber-900 font-titlefont">Tasty,&nbsp;&nbsp;&nbsp;Local,&nbsp;&nbsp;&nbsp;Fresh</Link>
                <div>
                    <ul className="flex md:space-x-4 sm:space-x-0 md:mr-10 sm:mr-0 ">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/ordering">Ordering</CustomLink>
                        <CustomLink to="/pricing">Prices</CustomLink>
                        <CustomLink to="/about">Contact</CustomLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


function CustomLink({ to, children, ...props }: { to: string, children: React.ReactNode}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active bg-yellow-950 text-white rounded-lg p-2" : "md:bg-amber-900 sm:bg-none transition-transform text-white rounded-lg w-auto h-auto p-2 hover:bg-yellow-950 hover:scale-110"}>
            <Link to={ to } { ...props }>
                { children }
            </Link>
        </li>
    )
}