import { useState } from "react"
import "./DisciplinaCard.css"
import { DisciplinaModal } from "../DisciplinaModal/DisciplinaModal";
import { Disciplina } from "../../../interface/Disciplina";

interface DisciplinaCardProps{
    disciplina: Disciplina
}

export function DiscipinaCard( {disciplina}: DisciplinaCardProps){

        const [abrirModal, setAbrirModal] = useState(false);

    return(
        <>
            <div className="card">
                <button className="card-button" onClick={() => setAbrirModal(true)}><h2 className="titulo">{disciplina?.nomeDisciplina}</h2></button>
                <p>Carga horária: {disciplina?.cargaHoraria} hrs</p>
                <p>Horário: {disciplina?.horario}</p>
                <p>Dias de aula: {disciplina?.diasSemana}</p>
                <p>Professor: {disciplina?.professorResponsavel}</p>
            </div>
            <DisciplinaModal disciplina={disciplina} isOpen={abrirModal} closeModal={() => setAbrirModal(!abrirModal)} />
        </>
    )
}