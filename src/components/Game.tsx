import Canvas from "./Canvas";
import Header from "./Header";
import Menu from "./Menu";

export default function Game() {
    return (
        <div className="max-w-[600px] max-h-[700px] flex flex-col bg-white gap-3 items-center justify-center">
            <Header />
            <Canvas />
            <Menu />
        </div>
    )
}