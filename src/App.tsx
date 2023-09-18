import './App.css'
import { DiscipinaCard } from './components/disciplina/DisciplinaCard';
import { useDisciplina } from './hooks/useDisciplina';

function App() {
  const { data } = useDisciplina();

  return (
    <div className="container">
      <h1 className='titulo-pagina'>Disciplinas</h1>
      <div className="card-grid">
        {data?.map(d => <DiscipinaCard disciplina={d} />)}
      </div>
    </div>
  )
}

export default App
