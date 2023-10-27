import { Link } from 'react-router-dom';
import { Disciplina } from '../../../interface/Disciplina';
import "./DisciplinaModal.css"

export interface DisciplinaModalProps {
    disciplina: Disciplina,
    isOpen: boolean,
    closeModal: () => void
}

export function DisciplinaModal({disciplina, isOpen, closeModal}: DisciplinaModalProps){
    if(isOpen){
        return(
            <div className="background">
                <div className="container-modal">
                    <h3 className="titulo-modal-disciplina">Detalhes da disciplina</h3>
                    <p>ID da Disciplina: {disciplina?.idDisciplina}</p>
                    <p>Nome: {disciplina?.nomeDisciplina}</p>
                    <p>Carga horária: {disciplina?.cargaHoraria} hrs</p>
                    <p>Horário de aulas: {disciplina?.horario}</p>
                    <p>Dias de aula: {disciplina?.diasSemana}</p>
                    <p>Periodo: {disciplina?.periodo}</p>
                    <p>Local: {disciplina?.localizacao}</p>
                    <p>Professor(a): {disciplina?.professorResponsavel}</p>
                    <p>Descrição: {disciplina?.descricao}</p>
                    <div className="button-area">
                        <Link to={"/editar-disciplina"} className='edit-button'>Editar</Link>
                        <button className='delete-button'>Excluir</button>
                    </div>
                </div>
                <button className="close-button" onClick={closeModal}>X</button>
            </div>
        )
    }
}