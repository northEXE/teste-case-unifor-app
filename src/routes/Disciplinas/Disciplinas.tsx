import { useDisciplina } from "../../hooks/useDisciplina";
import { DiscipinaCard } from "../../components/disciplina/DisciplinaCard/DisciplinaCard";
import "./Disciplinas.css"
import { Link } from "react-router-dom";

export function Disciplinas(){
  const { data } = useDisciplina();
  return (
    <div className="container">
      <h1 className='titulo-pagina'>Disciplinas</h1>
      <div className="card-grid">
        {data?.map(d => <DiscipinaCard disciplina={d} />)}
      </div>
      <div className="add-disciplina-area">
        <Link to="/adicionar-disciplina" reloadDocument={true} className="add-button">Adicionar disciplina</Link>
      </div>
    </div>
  )
}
