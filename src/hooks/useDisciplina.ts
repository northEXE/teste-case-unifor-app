import axios, { AxiosPromise } from "axios";
import { Disciplina } from '../interface/Disciplina';
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<Disciplina[]> => {
    const response = axios.get(API_URL + '/disciplinas');
    return response;
}

export function useDisciplina(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['disciplina-Data'],
        retry: 2    
    })
    return{
        ...query,
        data: query.data?.data
    }
}