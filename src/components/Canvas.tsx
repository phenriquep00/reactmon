import Player from "./game_components/Player/Player";

export default function Canvas() {
    return(
        <div className="w-[500px] h-[500px] flex items-center justify-center bg-black">
            <Player />
        </div>
    )
}