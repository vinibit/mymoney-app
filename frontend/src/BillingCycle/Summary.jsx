import React from "react"

import Grid from "../Common/Layout/Grid"
import Row from "../Common/Layout/Row"
import ColorPanel from "../Common/Widget/ColorPanel"

const Summary = ({ totalCredit, totalDebt }) => (

    <Grid cols="12">

        <fieldset>

            <legend>Resumo</legend>
            <Row>
                <ColorPanel sizes="12 4" color="green" icon="bank"
                    value={`R$ ${totalCredit}`} text="Total de Créditos" />
                
                <ColorPanel sizes="12 4" color="red" icon="credit-card"
                    value={`R$ ${totalDebt}`} text="Total de Débitos" />

                <ColorPanel sizes="12 4" color="blue" icon="money"
                    value={`R$ ${totalCredit - totalDebt}`} text="Valor Consolidado" />
            </Row>
        
        </fieldset>
    </Grid>
)

export default Summary