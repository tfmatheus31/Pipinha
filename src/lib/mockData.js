/**
 * Mock Data - Projeto Percurso Pipa
 * Dados fictícios para todas as seções da aplicação.
 * Preparado para futura substituição por integração com Google Sheets API.
 */

// ==========================================
// DASHBOARD - Indicadores Gerais
// ==========================================
export const dashboardData = {
  valorContrato: 4850000.00,
  valorExecutado: 2182500.00,
  saldo: 2667500.00,
  percentualFisico: 42.5,
  percentualFinanceiro: 45.0,
  dataAtualizacao: '2025-02-20',
  prazoInicio: '2024-06-01',
  prazoFim: '2025-12-31',
  diasDecorridos: 264,
  diasRestantes: 314,
};

// ==========================================
// CURVA S - Dados Acumulados por Mês
// ==========================================
export const curvaSData = [
  { mes: 'Jun/24', previstoAcumulado: 2.0, executadoAcumulado: 1.5 },
  { mes: 'Jul/24', previstoAcumulado: 6.0, executadoAcumulado: 4.8 },
  { mes: 'Ago/24', previstoAcumulado: 12.0, executadoAcumulado: 10.2 },
  { mes: 'Set/24', previstoAcumulado: 18.0, executadoAcumulado: 16.5 },
  { mes: 'Out/24', previstoAcumulado: 25.0, executadoAcumulado: 22.0 },
  { mes: 'Nov/24', previstoAcumulado: 32.0, executadoAcumulado: 28.5 },
  { mes: 'Dez/24', previstoAcumulado: 38.0, executadoAcumulado: 34.0 },
  { mes: 'Jan/25', previstoAcumulado: 45.0, executadoAcumulado: 39.0 },
  { mes: 'Fev/25', previstoAcumulado: 52.0, executadoAcumulado: 42.5 },
  { mes: 'Mar/25', previstoAcumulado: 60.0, executadoAcumulado: null },
  { mes: 'Abr/25', previstoAcumulado: 68.0, executadoAcumulado: null },
  { mes: 'Mai/25', previstoAcumulado: 76.0, executadoAcumulado: null },
  { mes: 'Jun/25', previstoAcumulado: 82.0, executadoAcumulado: null },
  { mes: 'Jul/25', previstoAcumulado: 88.0, executadoAcumulado: null },
  { mes: 'Ago/25', previstoAcumulado: 92.0, executadoAcumulado: null },
  { mes: 'Set/25', previstoAcumulado: 95.0, executadoAcumulado: null },
  { mes: 'Out/25', previstoAcumulado: 97.5, executadoAcumulado: null },
  { mes: 'Nov/25', previstoAcumulado: 99.0, executadoAcumulado: null },
  { mes: 'Dez/25', previstoAcumulado: 100.0, executadoAcumulado: null },
];

// ==========================================
// EVOLUÇÃO FÍSICA - Etapas da Obra
// ==========================================
export const evolucaoFisicaData = [
  { id: 1, etapa: 'Serviços Preliminares', peso: 3.0, previsto: 100.0, executado: 100.0, desvio: 0.0, status: 'Concluído' },
  { id: 2, etapa: 'Fundações', peso: 12.0, previsto: 100.0, executado: 95.0, desvio: -5.0, status: 'Em andamento' },
  { id: 3, etapa: 'Estrutura', peso: 22.0, previsto: 80.0, executado: 72.0, desvio: -8.0, status: 'Atrasado' },
  { id: 4, etapa: 'Alvenaria', peso: 15.0, previsto: 50.0, executado: 48.0, desvio: -2.0, status: 'Em andamento' },
  { id: 5, etapa: 'Instalações Elétricas', peso: 10.0, previsto: 30.0, executado: 25.0, desvio: -5.0, status: 'Em andamento' },
  { id: 6, etapa: 'Instalações Hidráulicas', peso: 8.0, previsto: 25.0, executado: 20.0, desvio: -5.0, status: 'Atrasado' },
  { id: 7, etapa: 'Revestimentos', peso: 12.0, previsto: 10.0, executado: 8.0, desvio: -2.0, status: 'Em andamento' },
  { id: 8, etapa: 'Cobertura', peso: 6.0, previsto: 0.0, executado: 0.0, desvio: 0.0, status: 'Não iniciado' },
  { id: 9, etapa: 'Pintura', peso: 5.0, previsto: 0.0, executado: 0.0, desvio: 0.0, status: 'Não iniciado' },
  { id: 10, etapa: 'Acabamentos e Limpeza', peso: 7.0, previsto: 0.0, executado: 0.0, desvio: 0.0, status: 'Não iniciado' },
];

// ==========================================
// EVOLUÇÃO FINANCEIRA - Por Mês
// ==========================================
export const evolucaoFinanceiraData = [
  { id: 1, mes: 'Jun/2024', previsto: 145500.00, executado: 121250.00, percentual: 83.3, saldo: 24250.00 },
  { id: 2, mes: 'Jul/2024', previsto: 242500.00, executado: 218250.00, percentual: 90.0, saldo: 24250.00 },
  { id: 3, mes: 'Ago/2024', previsto: 339500.00, executado: 315250.00, percentual: 92.9, saldo: 24250.00 },
  { id: 4, mes: 'Set/2024', previsto: 388000.00, executado: 363750.00, percentual: 93.8, saldo: 24250.00 },
  { id: 5, mes: 'Out/2024', previsto: 436500.00, executado: 388000.00, percentual: 88.9, saldo: 48500.00 },
  { id: 6, mes: 'Nov/2024', previsto: 412250.00, executado: 375375.00, percentual: 91.1, saldo: 36875.00 },
  { id: 7, mes: 'Dez/2024', previsto: 363750.00, executado: 327375.00, percentual: 90.0, saldo: 36375.00 },
  { id: 8, mes: 'Jan/2025', previsto: 412250.00, executado: 339500.00, percentual: 82.4, saldo: 72750.00 },
  { id: 9, mes: 'Fev/2025', previsto: 436500.00, executado: 133750.00, percentual: 30.6, saldo: 302750.00 },
];

// ==========================================
// DIÁRIO DE OBRA - Registros
// ==========================================
export const diarioObraData = [
  {
    id: 1,
    data: '2025-02-20',
    descricao: 'Concretagem da laje do 3° pavimento concluída. Início da montagem de formas do 4° pavimento.',
    clima: 'Ensolarado',
    temperatura: '32°C',
    equipe: '25 operários, 2 engenheiros, 1 mestre de obras',
    observacoes: 'Fornecimento de concreto atrasou 1h. Previsão de chuvas para amanhã.',
  },
  {
    id: 2,
    data: '2025-02-19',
    descricao: 'Prosseguimento da armação da laje do 3° pavimento. Instalação de tubulação hidráulica no 2° pavimento.',
    clima: 'Parcialmente nublado',
    temperatura: '28°C',
    equipe: '22 operários, 2 engenheiros, 1 mestre de obras',
    observacoes: 'Recebimento de aço CA-50 e CA-60. Material conferido conforme nota fiscal.',
  },
  {
    id: 3,
    data: '2025-02-18',
    descricao: 'Assentamento de alvenaria do 2° pavimento. Instalação de eletrodutos no 1° pavimento.',
    clima: 'Chuvoso',
    temperatura: '24°C',
    equipe: '18 operários, 1 engenheiro, 1 mestre de obras',
    observacoes: 'Chuva forte no período da tarde. Trabalhos externos paralisados às 15h.',
  },
  {
    id: 4,
    data: '2025-02-17',
    descricao: 'Desforma de pilares do 3° pavimento. Início da impermeabilização da cisterna.',
    clima: 'Ensolarado',
    temperatura: '30°C',
    equipe: '24 operários, 2 engenheiros, 1 mestre de obras',
    observacoes: 'Visita de fiscalização da prefeitura. Sem pendências identificadas.',
  },
  {
    id: 5,
    data: '2025-02-14',
    descricao: 'Continuação da concretagem de pilares do 3° pavimento. Execução de chapisco em alvenaria do 1° pav.',
    clima: 'Ensolarado',
    temperatura: '33°C',
    equipe: '26 operários, 2 engenheiros, 1 mestre de obras',
    observacoes: 'Produtividade acima do esperado. Adiantamento de 1 dia no cronograma de pilares.',
  },
  {
    id: 6,
    data: '2025-02-13',
    descricao: 'Montagem de formas para pilares do 3° pavimento. Passagem de fiação no térreo.',
    clima: 'Nublado',
    temperatura: '26°C',
    equipe: '20 operários, 1 engenheiro, 1 mestre de obras',
    observacoes: 'Entrega de esquadrias de alumínio. Material armazenado no almoxarifado.',
  },
  {
    id: 7,
    data: '2025-02-12',
    descricao: 'Execução de contrapiso no térreo. Marcação de alvenaria do 2° pavimento.',
    clima: 'Parcialmente nublado',
    temperatura: '27°C',
    equipe: '22 operários, 2 engenheiros, 1 mestre de obras',
    observacoes: 'Reunião com projetista de instalações para ajuste no projeto hidrossanitário.',
  },
  {
    id: 8,
    data: '2025-02-11',
    descricao: 'Concretagem de vigas do 2° pavimento. Limpeza geral do canteiro de obras.',
    clima: 'Ensolarado',
    temperatura: '31°C',
    equipe: '24 operários, 2 engenheiros, 1 mestre de obras',
    observacoes: 'DDS realizado sobre proteção contra quedas. Todos os EPIs em conformidade.',
  },
];

// ==========================================
// RELATÓRIO FOTOGRÁFICO
// ==========================================
export const relatorioFotograficoData = [
  {
    id: 1,
    data: '2025-02-20',
    descricao: 'Vista geral da concretagem da laje do 3° pavimento',
    categoria: 'Estrutura',
    arquivo: '/fotos/obra-01.jpg',
  },
  {
    id: 2,
    data: '2025-02-19',
    descricao: 'Armação montada aguardando concretagem',
    categoria: 'Estrutura',
    arquivo: '/fotos/obra-02.jpg',
  },
  {
    id: 3,
    data: '2025-02-18',
    descricao: 'Alvenaria do 2° pavimento em execução',
    categoria: 'Alvenaria',
    arquivo: '/fotos/obra-03.jpg',
  },
  {
    id: 4,
    data: '2025-02-17',
    descricao: 'Impermeabilização da cisterna',
    categoria: 'Fundações',
    arquivo: '/fotos/obra-04.jpg',
  },
  {
    id: 5,
    data: '2025-02-14',
    descricao: 'Instalações elétricas no 1° pavimento',
    categoria: 'Instalações',
    arquivo: '/fotos/obra-05.jpg',
  },
  {
    id: 6,
    data: '2025-02-13',
    descricao: 'Vista frontal do empreendimento',
    categoria: 'Geral',
    arquivo: '/fotos/obra-06.jpg',
  },
];
