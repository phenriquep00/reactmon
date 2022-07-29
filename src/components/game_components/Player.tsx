import { useEffect, useRef, useState } from 'react'
import player_idle from '../../assets/sprites/player_sprites/10.png'
import player_walking_down from '../../assets/sprites/player_sprites/merged.gif'

export default function Player() {

    const searchInput = useRef<HTMLInputElement>(null);
    const [img, setImg] = useState(player_idle)
    
    const handleMovement = (
        e: React.KeyboardEvent<HTMLElement>
    ) => {
        console.log(e.key);
        setImg(player_walking_down)

    };

    const stopMoving = () => {
        setImg(player_idle)
    }

    useEffect(() => {
        if (searchInput.current != null){
            searchInput.current.focus()
        }
    }, [])



    return (
        <div onKeyDown={handleMovement} onKeyUp={stopMoving} ref={searchInput} tabIndex={0} className="focus:outline-none">
            <img src={img} alt="" className='w-10 h-10' />
        </div>
    )
}