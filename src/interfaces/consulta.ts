import { StatusConsulta } from '../types/statusConsulta';
import { Paciente } from './../types/paciente';
import { Medico } from "./medico";

export interface Consulta {
 id: number;
 medico: Medico;
 paciente: Paciente;
 dataHora: string;
 valor: number;
 status: StatusConsulta;
 observacoes?: string;
}