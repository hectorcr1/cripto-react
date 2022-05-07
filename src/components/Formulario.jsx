import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    width: 100%;
    height: 60px;
    border: none;
    background-color: #66a1fe;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
        background-color: #5a9dfb;
    }
`


const Formulario = ({ setMonedas }) => {

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [criptos, setCriptos] = useState([])
    const [cripto, SelectCriptos] = useSelectMonedas('Elige tu Criptomoneda', criptos)
    const [error, setError] = useState(false)


    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const arrayCriptos = resultado.Data.map(cripto => {
                return {
                    id: cripto.CoinInfo.Name,
                    nombre: `${cripto.CoinInfo.FullName} - (${cripto.CoinInfo.Name})`
                }
            })
            setCriptos(arrayCriptos)
        }


        consultarAPI()
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        console.log("enviando formulario")
        console.log(moneda + " - " + cripto)

        if ([moneda, cripto].includes("")) {
            console.log("faltan datos")
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            cripto
        })
    }
    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}

            <form onSubmit={handleSubmit}>

                <SelectMonedas />
                <SelectCriptos />
                <InputSubmit
                    type="submit"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario