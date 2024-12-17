import React from "react"

const ContentHeader = ({title, descricao}) => (
    <section className="content-header">
        <h1>{title} <small>{descricao}</small></h1>
    </section>
)

export default ContentHeader 