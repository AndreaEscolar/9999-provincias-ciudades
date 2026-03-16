import { useState } from "react"
import arbol from "../data/arbol.json"
import type { AutonomousCommunity, SubmittedResult } from "../types/location"

export default function ProvinceTownSelector () {

    const [selectedProvince, setSelectedProvince] = useState<string>("")
    const [selectedTown, setSelectedTown] = useState<string>("")
    const [result, setResult] = useState<SubmittedResult | null>(null)

    const data = arbol as AutonomousCommunity[]
    const provinces = data.flatMap((community) => community.provinces)
    
    const currentProvince = provinces.find(
        (province) => province.label === selectedProvince
    )

    const availableTowns = currentProvince ? currentProvince.towns : []

    console.log("selectedProvince:", selectedProvince)
    console.log("currentProvince:", currentProvince)
    console.log("availableTowns:", availableTowns)

    function handleProvinceChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedProvince(event.target.value)
        setSelectedTown("")
    }

    function handleTownChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedTown(event.target.value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!selectedProvince || !selectedTown) {
            return
        }

        setResult ({
            province: selectedProvince,
            town: selectedTown
        })
    } 
    
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="province">Provincia</label>
                <select id="province" value={selectedProvince} onChange={handleProvinceChange}>
                    <option value=""> Escoge una provincia</option>

                    {provinces.map((province) => (
                        <option key={province.code} value={province.label}>
                            {province.label}
                        </option>
                    ))}
                </select>

                <label htmlFor="town">Ciudad</label>
                <select 
                    key={selectedProvince}
                    id="town" 
                    value={selectedTown} 
                    onChange={handleTownChange} 
                    disabled={!selectedProvince}
                >
                    <option value=""> Escoge una ciudad</option>

                    {availableTowns.map((town) => (
                        <option key={town.code} value={town.label}>
                            {town.label}
                        </option>
                    ))}
                </select>
                <button type="submit">Enviar</button>
            </form>
            {result && (
                <p>Has escogido la provincia <strong>{result.province}</strong> y la ciudad <strong>{result.town}</strong></p>
            )
                
            }
        </section>
    )
} 