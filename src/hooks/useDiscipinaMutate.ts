import axios, { AxiosPromise } from "axios";
import { Disciplina } from '../interface/Disciplina';
import { useMutation, useQueryClient } from "react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: Disciplina): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/disciplinas/salvar', data);
    return response;
}

export function useDisciplinaMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['disciplina-Data'])
        }
    })

    return mutate;
}