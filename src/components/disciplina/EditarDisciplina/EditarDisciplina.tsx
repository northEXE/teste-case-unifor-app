import { useState } from "react";
import Select from "react-select";
import { Input } from "../../Input/Input";
import { TextArea } from "../../Input/TextArea";
import { useDisciplinaMutate } from "../../../hooks/useDiscipinaMutate";
import { Disciplina } from "../../../interface/Disciplina";
import { Link } from "react-router-dom";
import "./style.css"

export function EditarDisciplina(){

    
const [nomeDisciplina, setNome] = useState("");
const [professorResponsavel, setProfessor] = useState("");
const [horario, setHorario] = useState("");
const [diasSemana, setDias] = useState("");
const [periodo, setPeriodo] = useState("MATUTINO");
const [localizacao, setLocalizacao] = useState("");
const [cargaHoraria, setCargaHoraria] = useState(0);
const [descricao, setDescricao] = useState("");
const { mutate, isLoading } = useDisciplinaMutate();

const submit = () => {
    const disciplina: Disciplina = {
        nomeDisciplina,
        professorResponsavel,
        horario,
        diasSemana,
        localizacao,
        periodo,
        cargaHoraria,
        descricao
    }
    mutate(disciplina);
}

const perioodoSelecionado = (item: any) => {
    setPeriodo(item);
}

const options = [
    {value: "MATUTINO", label: "Matutino"},
    {value: "VESPERTINO", label: "Vespetino"},
    {value: "NOTURNO", label: "Noturno"}
];

    return(
        <div>
            <h2>Editar disciplina</h2>
            <form className="input-container">
                <Input label="Nome da disciplina" value={nomeDisciplina} updateValue={setNome} required={true} />
                <Input label="Professor responsável" value={professorResponsavel} updateValue={setProfessor} required={true} />
                <Input label="Horário" value={horario} updateValue={setHorario} required={true} />
                <Input label="Dias da semana" value={diasSemana} updateValue={setDias} required={true} />
                <label>Período</label>
                <Select options={options} onChange={(item) => perioodoSelecionado(item?.value)} />
                <Input label="Localização" value={localizacao} updateValue={setLocalizacao} required={true} />
                <Input label="Carga horária" value={cargaHoraria} updateValue={setCargaHoraria} required={true} />
                <TextArea label="Descrição" value={descricao} updateValue={setDescricao} required={true} />
            </form>
            <div className="add-disciplina-area">
                <Link to="/" onClick={submit} className="add-button" reloadDocument={true}>{isLoading ? 'Adicionando...' : 'Adicionar'}</Link>
            </div>
        </div>
    )
}