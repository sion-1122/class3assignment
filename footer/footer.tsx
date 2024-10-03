import image from "next/image"
import link from "next/link"

export default function Home(){
    return(
        <><h1>Homepage</h1>
        <link href={"/navbar"}><h1>Go to Navbar</h1></link>
        </>
    )

}