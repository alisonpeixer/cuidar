import { getDefaultPaciente, Paciente } from "../../paciente/interface/paciente";

export interface Anamnese {
  paciente: Paciente;
  data_registro: Date;
  queixa_principal: string;
  historico_doencas: string;
  uso_medicamentos: string;
  sintomas_atuais: string;
  observacoes: string;
}


export const getDefaultAnamnese = () => ({
  paciente: getDefaultPaciente(),
  data_registro: new Date(),
  queixa_principal: '',
  historico_doencas: '',
  uso_medicamentos: '',
  sintomas_atuais: '',
  observacoes: ''
})
