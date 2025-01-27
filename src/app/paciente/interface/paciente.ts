export interface Paciente {
    id: number | undefined;
    nomeCompleto: string;
    dataNascimento: Date | undefined; 
    genero: string;
    estadoCivil: string;
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
    planoCuidadosMedicos: string;
    tratamentosEspecificos: string;
    acompanhamentoMedico: string;
    medicoResponsavel: string;
    convenioMedico: string;
    condicaoSaudeAtual: string;
    historicoDoencas: string;
    alergias: string;
    medicamentosEmUso: string;
    historicoCirurgias: string;
    ultimaVacina: string;
    examesRecentes: string;
    necessidadesNutricionais: string;
    nivelDependencia: string;
    fisioterapia: boolean;
    equipamentosAuxiliares: boolean;
    terapiaOcupacional: boolean;
    ajudaLocomocao: boolean;
    fraldasCuidadores: boolean;
    cuidadosPessoais: string;
    historicoFamiliar: string;
    comportamentoAgressivo: boolean;
    tratamentoPsicologico: boolean;
    diagnosticoPsicologico: string;
    comportamentoEmocional: string;
    preferenciasHabitos: string;
    dataAdmissao: Date | undefined;
    dataAlta: Date | undefined;
    pagamento: number | null; // ou poderia ser string dependendo da necessidade
    dataPagamento: string;
    responsavelPagamento: string;
    documentoResponsavel: string;
}
  
export const getDefaultPaciente = ():Paciente => ({
    id: undefined,
    nomeCompleto: '',
    dataNascimento: undefined,
    genero: '',
    estadoCivil: '',
    nacionalidade: '',
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
    planoCuidadosMedicos: '',
    tratamentosEspecificos: '',
    acompanhamentoMedico: '',
    medicoResponsavel: '',
    convenioMedico: '',
    condicaoSaudeAtual: '',
    historicoDoencas: '',
    alergias: '',
    medicamentosEmUso: '',
    historicoCirurgias: '',
    ultimaVacina: '',
    examesRecentes: '',
    necessidadesNutricionais: '',
    nivelDependencia: '',
    fisioterapia: false,
    equipamentosAuxiliares: false,
    terapiaOcupacional: false,
    ajudaLocomocao: false,
    fraldasCuidadores: false,
    cuidadosPessoais: '',
    historicoFamiliar: '',
    comportamentoAgressivo: false,
    tratamentoPsicologico: false,
    diagnosticoPsicologico: '',
    comportamentoEmocional: '',
    preferenciasHabitos: '',
    dataAdmissao: new Date(),
    dataAlta: undefined,
    pagamento: 0,
    dataPagamento: '',
    responsavelPagamento: '',
    documentoResponsavel: '' 
});



export interface PacienteLista {
    codigo: string;
    nomeCompleto: string;
    genero: string;
    dataNascimento: Date;
    dataAdmissao: Date;
}

export const getDefaultPacienteLista = (): PacienteLista => ({
    codigo: '',
    nomeCompleto: '',
    genero: '',
    dataNascimento: new Date(),
    dataAdmissao: new Date()
});