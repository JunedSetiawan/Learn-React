import { useState } from "react";

function ChangeBackground() {
    const [color, setColor] = useState('')

    const handleChangeBackground = (e) => {
       setColor(e.target.value)
    } 

    return (
        <div className="flex flex-col space-y-3">
            <h2 className="text-2xl font-medium">Pencarian Warna</h2>
            <div className="max-w-xs max-h-xs bg-neutral flex self-center p-20 break-all sm:p-28" style={{ backgroundColor : color }}>
                <span className={color === 'white' ? 'text-black font-medium' : 'text-white font-medium' }>{color}</span>
            </div>
            <input
                type="text"
                placeholder="masukkan kata warna.."
                className="p-3 input input-bordered input-primary"
                onChange={handleChangeBackground}
                value={color}
                maxLength='50'
            />
        </div>
    )
    
}

export default ChangeBackground;