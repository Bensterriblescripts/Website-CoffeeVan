export default function About() {
    return (
        <div className="flex justify-center items-center mt-10 text-amber-900">
            <table>
                <tbody>
                    <tr className="font-bold text-5xl sm:text-6xl font-titlefont text-center">
                        <td>
                            My Details
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <u>Email</u><br />souyi@paradisecoffee.co.nz
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            <u>Mobile</u><br />021 400 257
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}