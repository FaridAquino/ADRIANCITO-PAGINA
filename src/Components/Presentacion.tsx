import { Heart, Play, Users } from "lucide-react";

function Presentacion() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-4" >

            <div>
                <img src="SPOILER_Neo_Mini_Mini2_1.png" alt="Presentacion" width={160} height={160} />
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2 w-[400px] h-[100px]">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-rose-500 bg-clip-text text-transparent">Adriancitoxlpv</h1>
                <h2 className="text-center text-lg"> Explorando los mundos pixelados de Undertale y los clásicos que marcaron historia </h2>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="flex gap-2"><Users /> 200 suscriptores</div>
                <div className="flex gap-2"><Play /> + 100 videos</div>
                <div className="flex gap-2"><Heart color="red"/> 2M likes</div>
            </div>

            <div className="flex items-center gap-4">
                <button className="bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors cursor-pointer px-4 py-2">
                    Ver canal
                </button>
                <button className="bg-gray-200 text-black rounded-full hover:bg-red-300 transition-colors cursor-pointer px-4 py-2">
                    Ver videos
                </button>
            </div>
        </div>
    );
}

export default Presentacion;