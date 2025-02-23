export interface Paciente {
  id: number | undefined;
  codigo: string | undefined;
  nome_completo: string;
  data_nascimento: Date | undefined;
  genero: string;
  estado_civil: string;
  cadastro_ativo: boolean;
  nacionalidade: string;
  cgc: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  fixo: string;
  celular: string;
  whatsapp: string;
  email: string;
  plano_cuidados_medicos: string;
  tratamentos_especificos: string;
  acompanhamento_medico: string;
  medico_responsavel: string;
  convenio_medico: string;
  condicao_saude_atual: string;
  historico_doencas: string;
  alergias: string;
  medicamentos_em_uso: string;
  historico_cirurgias: string;
  ultima_vacina: string;
  exames_recentes: string;
  historico_internacao: string;
  necessidades_nutricionais: string;
  nivel_dependencia: string;
  fisioterapia: boolean;
  equipamentos_auxiliares: boolean;
  terapia_ocupacional: boolean;
  ajuda_locomocao: boolean;
  fraldas_cuidadores: boolean;
  cuidados_pessoais: string;
  historico_familiar: string;
  comportamento_agressivo: boolean;
  tratamento_psicologico: boolean;
  diagnostico_psicologico: string;
  comportamento_emocional: string;
  preferencias_habitos: string;
  data_admissao: Date | undefined;
  data_alta: Date | undefined;
  pagamento: number | null; // ou poderia ser string dependendo da necessidade
  data_pagamento: string;
  responsavel_pagamento: string;
  documento_responsavel: string;
}

export const getDefaultPaciente = ():Paciente => ({
  id: undefined,
  codigo: '',
  nome_completo: '',
  data_nascimento: undefined,
  genero: '',
  estado_civil: '',
  nacionalidade: '',
  cadastro_ativo: true,
  cgc: '',
  cep: '',
  endereco: '',
  numero: '',
  bairro: '',
  cidade: '',
  estado: '',
  fixo: '',
  celular: '',
  whatsapp: '',
  email: '',
  plano_cuidados_medicos: '',
  tratamentos_especificos: '',
  acompanhamento_medico: '',
  medico_responsavel: '',
  convenio_medico: '',
  condicao_saude_atual: '',
  historico_doencas: '',
  alergias: '',
  medicamentos_em_uso: '',
  historico_cirurgias: '',
  ultima_vacina: '',
  exames_recentes: '',
  historico_internacao: '',
  necessidades_nutricionais: '',
  nivel_dependencia: '',
  fisioterapia: false,
  equipamentos_auxiliares: false,
  terapia_ocupacional: false,
  ajuda_locomocao: false,
  fraldas_cuidadores: false,
  cuidados_pessoais: '',
  historico_familiar: '',
  comportamento_agressivo: false,
  tratamento_psicologico: false,
  diagnostico_psicologico: '',
  comportamento_emocional: '',
  preferencias_habitos: '',
  data_admissao: new Date(),
  data_alta: undefined,
  pagamento: 0,
  data_pagamento: '',
  responsavel_pagamento: '',
  documento_responsavel: ''
});

export interface PacienteLista {
  codigo: string;
  nome_completo: string;
  genero: string;
  data_nascimento: Date;
  data_admissao: Date;
}

export const getDefaultPacienteLista = (): PacienteLista => ({
  codigo: '',
  nome_completo: '',
  genero: '',
  data_nascimento: new Date(),
  data_admissao: new Date()
});

export interface PacienteDto {
items: Array<Paciente>;
hasNext: boolean;
}
