import '../index.css'
import exampleCoffee from './images/examples/stocklatte.png'
import { Link } from "react-router-dom";

export default function Home() {
  return (
  <div className='flex flex-col items-center justify-center mt-40 sm:mt-8'>
    <div id="core">
      <table className='justify-center items-center'>
        <tbody>
          <tr className='font-bold text-5xl sm:text-6xl text-amber-900 font-titlefont text-center'>
            <td>
              Paradise Coffee
            </td>
          </tr>
          <tr>
            <td className='flex items-center justify-center mt-12'>
              
            </td>
          </tr>
          <tr>
            <td className='flex items-center justify-center mb-40 sm:mb-20'>
              <button className='text-lg p-2 border-2 border-amber-900 rounded-lg bg-pink-200 shadow-lg hover:scale-110 transition-transform hover:bg-amber-900 hover:text-white'><CustomLink to="/ordering">Order Before Arriving!</CustomLink></button>
            </td>
          </tr>
          <tr className="col-span-2 text-5xl sm:text-6xl text-amber-900 font-titlefont text-center">
            <td className="mx-auto">
              Check out my work!
            </td>
          </tr>   
        </tbody>
      </table>
    </div>
    <div id="examples">
      <table>
        <tbody>
          <tr>
            <td>
              <img className="scale-50" src={exampleCoffee} alt="coffee1" />
            </td>
          </tr>
          <tr>
            <td>
              <img className="scale-50 " src={exampleCoffee} alt="coffee2" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

function CustomLink({ to, children, ...props }: { to: string, children: React.ReactNode}) {
  return (
    <Link to={ to } style={{ textDecoration: 'none', color: 'var(--coffee)' }} { ...props }>
      { children }
    </Link>
  )
}