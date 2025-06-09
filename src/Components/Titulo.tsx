import { Heart, Youtube } from "lucide-react"

function Titulo() {

    return (
        <div className="fixed top-0 left-0 bg-gradient-to-b from-violet-950 to-transparent w-full h-[100px] flex items-center px-4 gap-4 justify-between">
            <div className="flex items-center gap-4">
                <Heart className="h-[100px]x w-[100px]"/>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-rose-500 bg-clip-text text-transparent">AdriancitoXlp</h1>
            </div>
            <nav>
                <a className="text-red px-4 py-2 hover:text-fuchsia-600 transition-colors text-2xl cursor-pointer">Videos</a>
                <a className="text-red px-4 py-2 hover:text-fuchsia-600 transition-colors text-2xl cursor-pointer">Juegos</a>
                <a className="text-red px-4 py-2 hover:text-fuchsia-600 transition-colors text-2xl cursor-pointer">Comunidad</a>
                <a className="text-red px-4 py-2 hover:text-fuchsia-600 transition-colors text-2xl cursor-pointer">Acerca de</a>
            </nav>
            <button className="bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors cursor-pointer" >
                <div className="flex items-center gap-2 px-4 py-2">
                    <Youtube className="h-6 w-6 inline-block mr-2" />
                    Suscribirse
                </div>
            </button>
        </div>
    )
}


export default Titulo