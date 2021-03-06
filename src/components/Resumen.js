import React, {Fragment} from 'react';
import styled from '@emotion/styled'
import { primeraMayuscula } from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem; 
`

const Resumen = ({datos}) => {

    //extraer datos
    const {marca, year, plan} = datos

    if(marca ==='' || year === '' || plan === ''){
        return null
    }

    return (
      <ContenedorResumen>
        <h2>Resumen de Cotización</h2>
        <ul>
          <li>
            Marca: <span>{primeraMayuscula(marca)}</span>
          </li>
          <li>
            Año: <span>{year}</span>
          </li>
          <li>
            Plan: <span>{primeraMayuscula(plan)}</span>
          </li>
        </ul>
      </ContenedorResumen>
    );
}
 
export default Resumen;