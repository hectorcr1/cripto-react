import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Lato', sans-serif;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    display: block;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    padding: 14px;
    font-size: 18px;
    margin-bottom: 20px;    
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

    const SelectMonedas = () => (

        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">--Seleccione--</option>

                {opciones.map(opcion => (
                    <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                ))}
            </Select>
        </>
    )

    return [state, SelectMonedas]
}

export default useSelectMonedas