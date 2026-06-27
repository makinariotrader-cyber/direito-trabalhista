import type { Tool } from './types';

export const tools: Tool[] = [
  {
    id: 'rescisao-trabalhista',
    title: 'Calculadora de Rescisão Trabalhista',
    description: 'Calcule o valor exato da sua rescisão contratual: saldo de salário, aviso prévio, férias proporcionais, 13º proporcional e muito mais.',
    longIntro: `Calcular a rescisão trabalhista é um dos momentos mais importantes na vida de qualquer trabalhador brasileiro. Seja por pedido de demissão, dispensa sem justa causa ou término de contrato temporário, é fundamental saber exatamente quais valores você tem direito a receber.

A Consolidação das Leis do Trabalho (CLT) estabelece uma série de verbas rescisórias que devem ser pagas no momento do desligamento. Entre elas estão o saldo de salário dos dias trabalhados, o aviso prévio (trabalhado ou indenizado), as férias vencidas e proporcionais com adicional de 1/3, o 13º salário proporcional, e a multa do FGTS em caso de dispensa sem justa causa.

Nossa calculadora considera todos esses fatores para fornecer um cálculo preciso e detalhado. Basta informar seus dados como salário, data de admissão, data de demissão e o tipo de rescisão para obter o valor estimado de cada verba trabalhista.

Lembre-se que este cálculo é uma estimativa e pode variar dependendo de acordos coletivos, convenções sindicais e particularidades do seu contrato de trabalho. Para valores oficiais, consulte um advogado trabalhista ou o setor de RH da sua empresa.`,
    category: 'Rescisão',
    icon: 'FileText',
    calculatorType: 'rescisao',
    questions: [
      { question: 'Quais são os tipos de rescisão trabalhista?', answer: 'Os principais tipos são: dispensa sem justa causa (mais comum, garante multa de 40% do FGTS), dispensa por justa causa (perde alguns direitos), pedido de demissão (aviso prévio pode ser descontado), rescisão indireta (justa causa do empregador), rescisão por acordo (permite saque de 80% do FGTS) e término de contrato temporário.' },
      { question: 'O que entra no cálculo da rescisão?', answer: 'O cálculo inclui: saldo de salário, aviso prévio (30 a 90 dias), férias vencidas + 1/3, férias proporcionais + 1/3, 13º salário proporcional, multa de 40% do FGTS (dispensa sem justa causa) e saque do FGTS.' },
      { question: 'Como calcular o aviso prévio proporcional?', answer: 'O aviso prévio proporcional é calculado com base no tempo de serviço. São 30 dias para até 1 ano, acrescido de 3 dias por ano adicional trabalhado, limitado a 90 dias no total. Por exemplo: 5 anos de trabalho = 30 + (4×3) = 42 dias de aviso prévio.' },
    ],
    tips: [
      'Guarde todos os documentos: holerites, contrato de trabalho e termo de rescisão para conferência',
      'Verifique se as verbas rescisórias foram pagas no prazo legal de 10 dias corridos após o desligamento',
      'Em caso de dúvidas sobre os valores calculados, procure o sindicato da sua categoria ou um advogado trabalhista'
    ],
    metaDescription: 'Calcule online e gratuitamente o valor da sua rescisão trabalhista. Simule saldo de salário, aviso prévio, férias, 13º e FGTS. Cálculo atualizado com a CLT.',
    keywords: ['rescisão trabalhista', 'calcular rescisão', 'verbas rescisórias', 'cálculo rescisão CLT', 'simulador rescisão'],
  },
  {
    id: 'horas-extras',
    title: 'Calculadora de Horas Extras',
    description: 'Descubra quanto você deve receber por horas extras trabalhadas. Calcule hora extra com adicional de 50%, 100% e noturno.',
    longIntro: `As horas extras são uma realidade na vida de muitos trabalhadores brasileiros. De acordo com a CLT, a jornada de trabalho padrão é de 8 horas diárias e 44 horas semanais. Qualquer hora trabalhada além desse limite deve ser paga como hora extra com adicional mínimo de 50% sobre o valor da hora normal em dias úteis, e 100% em domingos e feriados.

Para calcular corretamente as horas extras, é necessário primeiro saber o valor da sua hora normal de trabalho. Esse valor é obtido dividindo seu salário mensal pela carga horária mensal (geralmente 220 horas para jornada de 44h semanais ou 200 horas para 40h semanais).

Além do adicional legal, muitas convenções coletivas estabelecem percentuais maiores para horas extras, podendo chegar a 80% ou até 100% em alguns setores. Verifique sempre o acordo coletivo da sua categoria para garantir o percentual correto.`,
    category: 'Jornada',
    icon: 'Clock',
    calculatorType: 'hora-extra',
    questions: [
      { question: 'Qual o percentual mínimo de hora extra?', answer: 'O adicional mínimo é de 50% para horas extras em dias úteis e sábados, e 100% para domingos e feriados. Convenções coletivas podem estabelecer percentuais maiores.' },
      { question: 'Como calcular o valor da hora extra?', answer: 'Divida seu salário por 220 (jornada de 44h) para obter o valor da hora normal. Depois multiplique por 1,5 (adicional de 50%) para hora extra em dia útil, ou por 2 (100%) para domingos/feriados.' },
      { question: 'O que diz a lei sobre o limite de horas extras?', answer: 'A CLT limita as horas extras a 2 horas por dia, totalizando no máximo 10 horas diárias. No entanto, acordos de compensação de jornada (banco de horas) podem flexibilizar esses limites.' },
    ],
    tips: [
      'Mantenha um registro pessoal dos horários de entrada e saída, além do ponto eletrônico da empresa',
      'Horas extras habituais podem gerar direito a reflexos em DSR, férias, 13º e FGTS',
      'Verifique se sua convenção coletiva prevê percentuais maiores que os legais para horas extras'
    ],
    metaDescription: 'Calcule horas extras online: adicional de 50%, 100% e noturno. Descubra o valor exato que você tem direito por cada hora extra trabalhada.',
    keywords: ['calcular horas extras', 'hora extra 50%', 'hora extra 100%', 'adicional hora extra', 'cálculo hora extra'],
  },
  {
    id: 'adicional-noturno',
    title: 'Calculadora de Adicional Noturno',
    description: 'Calcule o adicional noturno devido para trabalhadores que atuam entre 22h e 5h. Entenda como funciona a redução da hora noturna.',
    longIntro: `O adicional noturno é um direito fundamental dos trabalhadores que exercem suas atividades durante o período noturno. De acordo com a CLT, considera-se trabalho noturno aquele realizado entre 22h e 5h para trabalhadores urbanos. Para trabalhadores rurais, o período varia conforme a atividade: 21h às 5h na lavoura e 20h às 4h na pecuária.

O adicional noturno tem dois componentes principais: o acréscimo mínimo de 20% sobre o valor da hora normal (urbano) e a redução da hora noturna, que é de 52 minutos e 30 segundos. Isso significa que cada hora "noturna" tem 52,5 minutos, resultando em 7 horas de trabalho remuneradas como 8 horas em um turno noturno de 7 horas.

Este benefício está previsto no artigo 73 da CLT e se aplica a diversos setores como segurança, saúde, indústria, logística e serviços essenciais. O não pagamento do adicional noturno gera direito a reclamação trabalhista.`,
    category: 'Jornada',
    icon: 'Moon',
    calculatorType: 'adicional-noturno',
    questions: [
      { question: 'Qual o percentual do adicional noturno?', answer: 'Para trabalhadores urbanos o adicional é de 20% sobre a hora normal. Para trabalhadores rurais: 25% na lavoura e 30% na pecuária.' },
      { question: 'Como funciona a redução da hora noturna?', answer: 'A hora noturna é reduzida para 52 minutos e 30 segundos. Isso significa que em 7 horas de trabalho noturno (22h às 5h), o trabalhador recebe como se fossem 8 horas, graças à redução da hora ficta.' },
      { question: 'O adicional noturno incide sobre horas extras?', answer: 'Sim. Se a hora extra for realizada em período noturno, o cálculo deve considerar primeiro o adicional noturno e depois o adicional de hora extra, acumulando os dois benefícios.' },
    ],
    tips: [
      'O adicional noturno integra o salário para todos os efeitos legais, incluindo férias, 13º, FGTS e aviso prévio',
      'Trabalhadores que atuam exclusivamente à noite têm direito ao adicional durante todo o período de trabalho',
      'A prorrogação do trabalho noturno além das 5h também gera adicional noturno sobre as horas excedentes'
    ],
    metaDescription: 'Calcule o adicional noturno online: 20% sobre hora normal + redução da hora noturna. Simulador gratuito atualizado com a CLT.',
    keywords: ['adicional noturno', 'calcular adicional noturno', 'hora noturna reduzida', 'adicional noturno CLT'],
  },
  {
    id: 'ferias',
    title: 'Calculadora de Férias',
    description: 'Calcule o valor das suas férias com adicional de 1/3 constitucional. Simule férias vencidas, proporcionais e em dobro.',
    longIntro: `As férias são um direito constitucional de todo trabalhador brasileiro, garantido pelo artigo 7º da Constituição Federal. Após 12 meses de trabalho (período aquisitivo), o empregado tem direito a 30 dias corridos de férias, que devem ser concedidas nos 12 meses seguintes (período concessivo).

O valor das férias corresponde ao salário normal acrescido de 1/3 constitucional. Este adicional de 1/3 é um direito indisponível e deve ser pago independentemente de qualquer outro benefício. As férias podem ser divididas em até 3 períodos, sendo que um deles deve ter no mínimo 14 dias corridos.

Além das férias integrais, existem as férias proporcionais (para contratos com menos de 12 meses) e as férias em dobro (quando o empregador não concede as férias dentro do período concessivo). O cálculo considera salário base, médias de horas extras e adicionais.`,
    category: 'Benefícios',
    icon: 'Umbrella',
    calculatorType: 'ferias',
    questions: [
      { question: 'Como calcular o terço constitucional de férias?', answer: 'O valor do terço constitucional é calculado dividindo seu salário normal por 3. Exemplo: salário de R$ 3.000,00 → terço constitucional de R$ 1.000,00 → total de férias = R$ 4.000,00.' },
      { question: 'As férias podem ser parceladas?', answer: 'Sim, a reforma trabalhista de 2017 permitiu o parcelamento das férias em até 3 períodos. Um período deve ter no mínimo 14 dias corridos e os demais no mínimo 5 dias cada.' },
      { question: 'O que acontece se as férias não forem concedidas no prazo?', answer: 'Se o empregador não conceder as férias dentro do período concessivo (12 meses após o período aquisitivo), as férias deverão ser pagas em dobro, ou seja, o valor em dobro do adicional de 1/3.' },
    ],
    tips: [
      'As férias devem ser pagas até 2 dias antes do início do período de descanso, conforme a CLT',
      'Horas extras habituais e adicionais integram o cálculo das férias',
      'O abono pecuniário (vender 1/3 das férias) é uma opção que dá 30 dias de salário + 1/3 de férias'
    ],
    metaDescription: 'Calcule o valor das suas férias online: 1/3 constitucional, férias proporcionais e em dobro. Simulador gratuito e atualizado.',
    keywords: ['calcular férias', 'terço constitucional de férias', 'férias proporcionais', 'cálculo de férias CLT'],
  },
  {
    id: 'decimo-terceiro',
    title: 'Calculadora de 13º Salário',
    description: 'Calcule o valor do seu 13º salário proporcional ou integral. Simule a primeira e segunda parcela com descontos de INSS e IRRF.',
    longIntro: `O 13º salário, também conhecido como gratificação natalina, é um direito garantido pela Lei 4.090/1962. Todo trabalhador com carteira assinada tem direito a receber o equivalente a 1/12 da remuneração por mês trabalhado, totalizando até um salário adicional por ano.

O 13º é pago em duas parcelas: a primeira entre fevereiro e novembro (geralmente até 30 de novembro) sem descontos, e a segunda até 20 de dezembro com os descontos de INSS e Imposto de Renda (quando aplicável). O valor é calculado proporcionalmente aos meses trabalhados no ano.

Para calcular o 13º proporcional, divide-se o salário por 12 e multiplica-se pelos meses trabalhados no ano (considerando que 15 dias ou mais de trabalho no mês contam como mês cheio). O valor pode incluir médias de horas extras, comissões e adicionais.`,
    category: 'Benefícios',
    icon: 'Gift',
    calculatorType: 'decimo-terceiro',
    questions: [
      { question: 'Quando o 13º salário é pago?', answer: 'A primeira parcela deve ser paga entre 1º de fevereiro e 30 de novembro. A segunda parcela até 20 de dezembro. Se o trabalhador solicitar, a primeira parcela pode ser paga por ocasião das férias.' },
      { question: 'Como calcular o 13º proporcional?', answer: 'Divida seu salário por 12 e multiplique pelos meses trabalhados no ano. Exemplo: salário de R$ 3.600,00 trabalhados 8 meses = R$ 300,00 × 8 = R$ 2.400,00 de 13º proporcional.' },
      { question: 'Quais descontos incidem sobre o 13º?', answer: 'Na segunda parcela incidem descontos de INSS (conforme tabela vigente) e Imposto de Renda (se aplicável). O FGTS também é devido sobre o valor total do 13º.' },
    ],
    tips: [
      'A primeira parcela do 13º é paga sem descontos, correspondendo a metade do salário bruto',
      'A segunda parcela tem descontos de INSS e IRRF, resultando em valor menor que a primeira',
      'Faltas não justificadas acima de 15 dias no mês podem reduzir o valor do 13º proporcional'
    ],
    metaDescription: 'Calcule seu 13º salário online: integral, proporcional, primeira e segunda parcela com descontos de INSS e IRRF.',
    keywords: ['calcular 13º salário', 'décimo terceiro', '13º proporcional', 'primeira parcela 13º', 'segunda parcela 13º'],
  },
  {
    id: 'fgts',
    title: 'Calculadora de FGTS',
    description: 'Calcule o saldo do seu FGTS mês a mês com base no salário e depósitos mensais. Simule o valor total com juros e correção monetária.',
    longIntro: `O Fundo de Garantia do Tempo de Serviço (FGTS) é um direito dos trabalhadores brasileiros regido pela Lei 8.036/1990. Mensalmente, o empregador deposita 8% do salário do funcionário em uma conta vinculada na Caixa Econômica Federal.

O saldo do FGTS é corrigido pela TR (Taxa Referencial) mais juros de 3% ao ano. Embora a correção seja baixa, o FGTS serve como uma poupança forçada que pode ser sacada em situções específicas como demissão sem justa causa, aposentadoria, compra da casa própria, doenças graves ou calamidade pública.

Além dos depósitos mensais de 8%, o FGTS também recebe os depósitos referentes ao 13º salário (8% sobre o 13º) e, em caso de dispensa sem justa causa, o empregador deve pagar multa de 40% sobre todo o saldo do FGTS.`,
    category: 'Benefícios',
    icon: 'PiggyBank',
    calculatorType: 'fgts',
    questions: [
      { question: 'Qual o percentual de depósito mensal do FGTS?', answer: 'O empregador deve depositar 8% do salário bruto do funcionário em conta vinculada do FGTS na Caixa Econômica Federal, além de 8% sobre o 13º salário.' },
      { question: 'Quando posso sacar o FGTS?', answer: 'As principais hipóteses de saque são: demissão sem justa causa, aposentadoria, compra da casa própria, doenças graves (câncer, HIV), calamidade pública, saque-aniversário (com restrições) e rescisão por acordo (80% do saldo).' },
      { question: 'Como funciona o saque-aniversário?', answer: 'O saque-aniversário permite retirar anualmente uma parte do saldo do FGTS no mês do seu aniversário. O valor varia de 5% a 50% do saldo, mais uma parcela adicional fixa. Ao optar pelo saque-aniversário, você abre mão do saque total em caso de demissão.' },
    ],
    tips: [
      'O FGTS rende apenas 3% ao ano + TR, muito abaixo da poupança. Considere outras formas de investimento a longo prazo',
      'A multa de 40% sobre o FGTS em caso de demissão sem justa causa é paga pelo empregador, não descontada do seu saldo',
      'Consulte o saldo do FGTS pelo aplicativo FGTS (Caixa) ou pelo site da Caixa Econômica Federal'
    ],
    metaDescription: 'Calcule o saldo do seu FGTS mês a mês. Simule depósitos, juros de 3% ao ano, multa de 40% e saques. Calculadora online gratuita.',
    keywords: ['calcular FGTS', 'saldo FGTS', 'multa FGTS 40%', 'depósito FGTS 8%', 'simulador FGTS'],
  },
  {
    id: 'multa-fgts',
    title: 'Calculadora de Multa do FGTS (40%)',
    description: 'Calcule a multa rescisória de 40% sobre o saldo do FGTS devida em caso de dispensa sem justa causa ou rescisão por acordo.',
    longIntro: `A multa do FGTS é um dos principais direitos do trabalhador em caso de demissão sem justa causa. Prevista no artigo 18 da Lei 8.036/1990, a multa corresponde a 40% do saldo total do FGTS depositado durante todo o contrato de trabalho.

Em caso de rescisão por acordo (prevista na reforma trabalhista de 2017), a multa é reduzida para 20% sobre o saldo do FGTS. Nessa modalidade, o trabalhador pode sacar 80% do saldo do FGTS, e não tem direito ao seguro-desemprego.

A multa é paga integralmente pelo empregador e deve ser recolhida juntamente com as demais verbas rescisórias. O valor da multa não pode ser descontado do trabalhador ou do saldo da sua conta do FGTS.`,
    category: 'Rescisão',
    icon: 'AlertTriangle',
    calculatorType: 'multa-fgts',
    questions: [
      { question: 'Quando a multa de 40% do FGTS é devida?', answer: 'A multa de 40% é devida exclusivamente em caso de dispensa sem justa causa (imotivada) ou despedida indireta (justa causa do empregador).' },
      { question: 'Qual o valor da multa na rescisão por acordo?', answer: 'Na rescisão por acordo (prevista na reforma trabalhista), a multa do FGTS é reduzida para 20% sobre o saldo. O trabalhador saca 80% do FGTS, mas perde o direito ao seguro-desemprego.' },
      { question: 'A multa do FGTS incide sobre o 13º depositado?', answer: 'Sim. A multa de 40% incide sobre todo o saldo do FGTS, incluindo os depósitos mensais e os depósitos referentes ao 13º salário de todo o período do contrato.' },
    ],
    tips: [
      'A multa de 40% é calculada sobre o saldo TOTAL do FGTS, incluindo os depósitos de 13º salário',
      'Em caso de pedido de demissão, o trabalhador não tem direito à multa de 40% do FGTS',
      'A multa deve ser paga até o 10º dia corrido após o desligamento, junto com as demais verbas rescisórias'
    ],
    metaDescription: 'Calcule a multa rescisória de 40% do FGTS. Simulador para dispensa sem justa causa e rescisão por acordo (20%). Online e gratuito.',
    keywords: ['multa FGTS', 'multa 40% FGTS', 'calcular multa FGTS', 'multa rescisória FGTS'],
  },
  {
    id: 'aviso-previo',
    title: 'Calculadora de Aviso Prévio',
    description: 'Calcule os dias de aviso prévio a que você tem direito, incluindo o proporcional ao tempo de serviço. Simule aviso trabalhado e indenizado.',
    longIntro: `O aviso prévio é um direito garantido pela Constituição Federal e regulamentado pela Lei 12.506/2011. Ele assegura ao trabalhador o recebimento dos dias proporcionais ao tempo de serviço quando é dispensado sem justa causa, ou exige que o empregado comunique com antecedência seu pedido de demissão.

O aviso prévio mínimo é de 30 dias para contratos de até 1 ano. A cada ano adicional trabalhado, acrescentam-se 3 dias, limitado ao máximo de 90 dias (30 dias base + 60 dias adicionais). O aviso pode ser trabalhado (cumprido na empresa) ou indenizado (pago sem necessidade de trabalho).

Na modalidade trabalhada, o empregado tem direito a reduzir 2 horas da jornada diária ou faltar 7 dias corridos sem prejuízo do salário para procurar novo emprego. O período de aviso prévio integra o contrato de trabalho para todos os efeitos legais.`,
    category: 'Rescisão',
    icon: 'Bell',
    calculatorType: 'aviso-previo',
    questions: [
      { question: 'Como calcular o aviso prévio proporcional?', answer: 'São 30 dias para até 1 ano de trabalho. Acrescentam-se 3 dias para cada ano adicional, limitado a 90 dias. Exemplo: 5 anos de trabalho = 30 + (4 × 3) = 42 dias de aviso prévio.' },
      { question: 'Diferença entre aviso prévio trabalhado e indenizado?', answer: 'No aviso trabalhado, o empregado cumpre o período na empresa (com redução de jornada). No indenizado, o empregador paga o valor sem exigir trabalho. O aviso indenizado é mais comum em dispensas sem justa causa.' },
      { question: 'O aviso prévio conta como tempo de serviço?', answer: 'Sim. O período de aviso prévio, seja trabalhado ou indenizado, integra o contrato de trabalho para todos os efeitos legais, incluindo férias, 13º salário e FGTS.' },
    ],
    tips: [
      'No aviso prévio trabalhado, você tem direito a 2 horas de redução diária ou 7 dias corridos de folga para buscar novo emprego',
      'O aviso prévio indenizado integra o tempo de serviço para fins de férias e 13º salário',
      'Se o empregador não cumprir o aviso prévio, os dias devem ser pagos em dobro'
    ],
    metaDescription: 'Calcule o aviso prévio online: dias proporcionais, aviso trabalhado e indenizado. Simulador gratuito atualizado com a Lei 12.506/2011.',
    keywords: ['calcular aviso prévio', 'aviso prévio proporcional', 'aviso prévio indenizado', 'aviso prévio trabalhado'],
  },
  {
    id: 'inss',
    title: 'Calculadora de INSS',
    description: 'Calcule o desconto do INSS sobre seu salário com base na tabela vigente. Descubra o valor da contribuição e o salário líquido.',
    longIntro: `O INSS (Instituto Nacional do Seguro Social) é o órgão responsável pela previdência social dos trabalhadores brasileiros. A contribuição ao INSS garante ao trabalhador acesso a benefícios como aposentadoria, auxílio-doença, salário-maternidade, pensão por morte e auxílio-acidente.

A contribuição dos empregados com carteira assinada é descontada diretamente na folha de pagamento, com alíquotas progressivas conforme a tabela vigente, que variam de 7,5% a 14%. O desconto é aplicado de forma progressiva por faixa salarial.

Para trabalhadores autônomos e MEIs, a alíquota é de 11% sobre o salário mínimo (MEI) ou 20% sobre o valor declarado (autônomos). O valor contribuído impacta diretamente o valor dos benefícios futuros, especialmente a aposentadoria.`,
    category: 'Benefícios',
    icon: 'Shield',
    calculatorType: 'inss',
    questions: [
      { question: 'Quais as alíquotas de INSS para empregados?', answer: 'Tabela progressiva 2024: 1ª faixa até R$ 1.412,00 (7,5%), 2ª faixa até R$ 2.666,68 (9%), 3ª faixa até R$ 4.000,03 (12%), 4ª faixa até R$ 7.786,02 (14%). O desconto é progressivo por faixa.' },
      { question: 'Qual o teto do INSS?', answer: 'O teto do INSS para 2024 é de R$ 7.786,02. Este é o valor máximo que serve de base para cálculo da contribuição e também o valor máximo dos benefícios pagos pelo INSS.' },
      { question: 'MEI precisa contribuir para o INSS?', answer: 'Sim. O MEI contribui com 11% do salário mínimo mensal (R$ 155,32 em 2024) através do DAS. Essa contribuição garante acesso a benefícios como aposentadoria por idade, auxílio-doença e salário-maternidade.' },
    ],
    tips: [
      'O desconto do INSS é progressivo: cada faixa salarial tem sua própria alíquota, não incide a maior sobre todo o salário',
      'O tempo de contribuição ao INSS é essencial para a aposentadoria. Mantenha seu histórico de contribuições regular',
      'Contribuições em atraso podem gerar multa e juros. Mantenha o pagamento em dia para não perder benefícios'
    ],
    metaDescription: 'Calcule o desconto de INSS online com a tabela vigente. Simule contribuição, salário líquido e benefícios previdenciários.',
    keywords: ['calcular INSS', 'tabela INSS', 'desconto INSS', 'contribuição INSS', 'salário líquido'],
  },
  {
    id: 'salario-liquido',
    title: 'Calculadora de Salário Líquido',
    description: 'Calcule seu salário líquido a partir do salário bruto com todos os descontos legais: INSS, IRRF e outros.',
    longIntro: `O salário líquido é o valor que efetivamente cai na conta do trabalhador após todos os descontos legais. Entender a diferença entre salário bruto e líquido é fundamental para o planejamento financeiro pessoal.

Os principais descontos são: INSS (contribuição previdenciária progressiva de 7,5% a 14%), Imposto de Renda Retido na Fonte (IRRF, também progressivo de 0% a 27,5%), vale-transporte (até 6% do salário), contribuição sindical (opcional) e outros descontos como plano de saúde, previdência privada ou pensão alimentícia.

O IRRF leva em conta deduções como dependentes (R$ 189,59 por dependente em 2024) e pensão alimentícia. A base de cálculo do IRRF é o salário bruto menos o desconto do INSS, dependentes e pensão. Conhecer esses descontos ajuda no planejamento financeiro.`,
    category: 'Benefícios',
    icon: 'Wallet',
    calculatorType: 'salario-liquido',
    questions: [
      { question: 'Qual a diferença entre salário bruto e líquido?', answer: 'Salário bruto é o valor total do contrato de trabalho. Salário líquido é o valor que o trabalhador recebe após descontos de INSS, IRRF, vale-transporte, plano de saúde e outros benefícios contratados.' },
      { question: 'Quais descontos são obrigatórios no salário?', answer: 'Os descontos obrigatórios são INSS e IRRF (quando aplicável). Descontos como vale-transporte, plano de saúde, seguro de vida e previdência privada são opcionais e dependem de autorização do funcionário.' },
      { question: 'Como calcular o IRRF na fonte?', answer: 'O IRRF é calculado sobre a base tributável: salário bruto - INSS - dependentes (R$ 189,59 cada) - pensão alimentícia. A alíquota varia de 0% a 27,5% conforme a faixa salarial, com parcela a deduzir.' },
    ],
    tips: [
      'A base de cálculo do IRRF é o salário bruto menos INSS e deduções legais (dependentes, pensão alimentícia)',
      'Vale-transporte pode descontar até 6% do salário, mas é opcional (você pode recusar)',
      'Plano de saúde e previdência privada são descontos facultativos que dependem de adesão voluntária'
    ],
    metaDescription: 'Calcule seu salário líquido online: simule descontos de INSS, IRRF e vale-transporte. Calculadora gratuita e atualizada.',
    keywords: ['salário líquido', 'calcular salário líquido', 'salário bruto para líquido', 'descontos salariais'],
  },
  {
    id: 'seguro-desemprego',
    title: 'Calculadora de Seguro-Desemprego',
    description: 'Calcule quantas parcelas do seguro-desemprego você tem direito e o valor de cada parcela com base no seu salário e tempo trabalhado.',
    longIntro: `O seguro-desemprego é um benefício temporário concedido ao trabalhador dispensado sem justa causa, garantido pela Lei 7.998/1990 e pela Constituição Federal. O objetivo é proporcionar assistência financeira ao trabalhador enquanto ele busca recolocação no mercado de trabalho.

O número de parcelas varia de 3 a 5, dependendo do tempo trabalhado nos últimos 36 meses. Para a primeira solicitação: 4 parcelas (6 a 11 meses), 5 parcelas (12 a 23 meses). Para a segunda solicitação: 3 parcelas (6 a 11 meses), 5 parcelas (12 a 23 meses). Para a terceira solicitação em diante: 3 parcelas (6 a 11 meses), 5 parcelas (12 a 23 meses).

O valor de cada parcela é calculado com base na média dos três últimos salários anteriores à dispensa, seguindo faixas de reajuste estabelecidas pelo governo federal. O benefício não pode ser inferior ao salário mínimo nem superior ao teto legal.`,
    category: 'Rescisão',
    icon: 'Briefcase',
    calculatorType: 'seguro-desemprego',
    questions: [
      { question: 'Quantas parcelas do seguro-desemprego tenho direito?', answer: 'Depende do tempo trabalhado: mínimo 6 meses trabalhados nos últimos 36 meses para ter direito. Parcelas: 3 a 5 parcelas conforme o número de solicitações anteriores e tempo trabalhado.' },
      { question: 'Qual o valor do seguro-desemprego?', answer: 'Calcula-se pela média dos 3 últimos salários: até R$ 2.041,39 multiplica por 0,8; de R$ 2.041,40 a R$ 3.402,65 o excedente multiplica por 0,5; acima de R$ 3.402,65 o valor é fixo de R$ 2.313,74.' },
      { question: 'Quem tem direito ao seguro-desemprego?', answer: 'Trabalhador dispensado sem justa causa, que tenha trabalhado pelo menos 6 meses nos últimos 36 meses, que não possua renda própria para sustento e que não esteja recebendo benefício previdenciário (exceto pensão por morte e auxílio-acidente).' },
    ],
    tips: [
      'O seguro-desemprego é pago em 3 a 5 parcelas mensais consecutivas, depositadas em conta da Caixa ou Poupança Social Digital',
      'Para ter direito, é necessário não ter renda própria e não estar recebendo benefício previdenciário (exceto pensão por morte)',
      'O benefício pode ser sacado também nas agências da Caixa Econômica Federal com documento de identificação'
    ],
    metaDescription: 'Calcule o seguro-desemprego online: número de parcelas e valor de cada uma. Simulador atualizado com as regras vigentes.',
    keywords: ['seguro desemprego', 'calcular seguro desemprego', 'parcelas seguro desemprego'],
  },
  {
    id: 'juros-compostos',
    title: 'Calculadora de Juros Compostos',
    description: 'Calcule juros compostos para investimentos, financiamentos e correção de dívidas trabalhistas. Simule valor futuro com aportes mensais.',
    longIntro: `Os juros compostos, conhecidos como "juros sobre juros", são a base da matemática financeira moderna e essenciais para entender tanto investimentos quanto dívidas. Na justiça trabalhista, os juros compostos (juros de mora) são aplicados sobre os valores devidos ao trabalhador.

A fórmula dos juros compostos é M = C × (1 + i)^t, onde M é o montante final, C é o capital inicial, i é a taxa de juros e t é o tempo. Para a correção de débitos trabalhistas, utiliza-se a TR (Taxa Referencial) acrescida de juros de mora de 1% ao mês.

Entender juros compostos é fundamental para o planejamento financeiro pessoal. Um pequeno investimento mensal pode se transformar em um grande patrimônio ao longo dos anos graças ao poder dos juros compostos. O segredo é começar cedo e ser consistente.`,
    category: 'Finanças',
    icon: 'TrendingUp',
    calculatorType: 'juros-compostos',
    questions: [
      { question: 'Qual a diferença entre juros simples e compostos?', answer: 'Nos juros simples, os juros incidem apenas sobre o valor inicial. Nos juros compostos, os juros incidem sobre o valor acumulado (juros sobre juros), gerando crescimento exponencial ao longo do tempo.' },
      { question: 'Como calcular juros compostos para causas trabalhistas?', answer: 'Na justiça trabalhista, aplica-se juros de mora de 1% ao mês sobre o valor corrigido pela TR. O cálculo é mês a mês, com juros compostos sobre o valor principal atualizado.' },
      { question: 'Como os juros compostos podem me ajudar a investir?', answer: 'Investir R$ 500,00 por mês a 0,8% ao mês (aproximadamente 10% ao ano) resulta em R$ 95.000,00 após 10 anos. Quanto mais cedo você começar, maior o efeito dos juros compostos sobre seu patrimônio.' },
    ],
    tips: [
      'Comece a investir o quanto antes: o tempo é o maior aliado dos juros compostos',
      'Na correção de débitos trabalhistas, os juros de mora de 1% ao mês são aplicados de forma composta',
      'Use a calculadora para simular diferentes cenários de investimento e encontrar a melhor estratégia'
    ],
    metaDescription: 'Calcule juros compostos online: investimentos, financiamentos e correção de débitos. Simulador gratuito com aportes mensais.',
    keywords: ['juros compostos', 'calcular juros compostos', 'simulador juros compostos', 'juros compostos investimentos'],
  },
  {
    id: 'correcao-monetaria',
    title: 'Calculadora de Correção Monetária',
    description: 'Corrija valores monetários pelo INPC, IPCA, TR ou Poupança. Simule a atualização de débitos trabalhistas e outros valores.',
    longIntro: `A correção monetária é um mecanismo essencial para preservar o poder de compra da moeda ao longo do tempo. No âmbito trabalhista, a correção monetária é aplicada sobre os créditos reconhecidos em juízo, utilizando índices oficiais de inflação.

O índice de correção mais comum para débitos trabalhistas é a TR (Taxa Referencial) acrescida de juros de mora de 1% ao mês. No entanto, decisões recentes do STF e TST têm alterado os índices aplicáveis. Para débitos cíveis, utiliza-se o IPCA-E ou o INPC.

Existem diversos índices de correção monetária no Brasil, cada um com sua finalidade específica: IPCA (índice oficial de inflação), INPC (correção de salários), IGPM (aluguéis e contratos), TR (FGTS e débitos trabalhistas) e Poupança. Saber qual índice aplicar é fundamental para o cálculo correto.`,
    category: 'Finanças',
    icon: 'DollarSign',
    calculatorType: 'correcao-monetaria',
    questions: [
      { question: 'Qual índice usar para correção de débitos trabalhistas?', answer: 'Atualmente, utiliza-se a TR (Taxa Referencial) para correção monetária dos débitos trabalhistas, acrescida de juros de mora de 1% ao mês. Decisões judiciais podem determinar outros índices dependendo do caso.' },
      { question: 'Diferença entre IPCA e INPC?', answer: 'O IPCA (Índice de Preços ao Consumidor Amplo) é o índice oficial de inflação do Brasil, usado como meta pelo Banco Central. O INPC (Índice Nacional de Preços ao Consumidor) considera apenas famílias com renda de até 5 salários mínimos e é usado para reajuste salarial.' },
      { question: 'O que é a TR e como é calculada?', answer: 'A TR (Taxa Referencial) é uma taxa de juros básica criada pelo governo, calculada com base na taxa de CDBs prefixados. Atualmente, a TR está próxima de zero, o que gerou debates sobre sua adequação para correção de débitos trabalhistas.' },
    ],
    tips: [
      'Para causas trabalhistas, utilize TR + juros de 1% ao mês como índice padrão de correção',
      'O IPCA é o índice mais indicado para correção de valores em contratos cíveis e aluguéis',
      'Mantenha-se atualizado sobre as decisões do STF e TST quanto aos índices aplicáveis a débitos trabalhistas'
    ],
    metaDescription: 'Corrija valores monetários online: IPCA, INPC, TR e Poupança. Calculadora de correção para débitos trabalhistas e cíveis.',
    keywords: ['correção monetária', 'calcular correção monetária', 'IPCA', 'INPC', 'TR', 'correção débitos trabalhistas'],
  },
  {
    id: 'adicional-periculosidade',
    title: 'Calculadora de Adicional de Periculosidade',
    description: 'Calcule o adicional de periculosidade de 30% sobre o salário devido a trabalhadores expostos a atividades perigosas.',
    longIntro: `O adicional de periculosidade é um direito dos trabalhadores que exercem atividades consideradas perigosas pela legislação trabalhista. Previsto no artigo 193 da CLT, o adicional corresponde a 30% sobre o salário base do empregado.

São consideradas atividades perigosas aquelas que envolvem contato permanente com inflamáveis, explosivos, energia elétrica, radiações ionizantes, substâncias radioativas, e segurança patrimonial ou pessoal (vigilância). A caracterização da periculosidade é feita por perícia técnica realizada por engenheiro ou médico do trabalho.

O adicional de periculosidade difere do adicional de insalubridade: enquanto a insalubridade protege contra agentes nocivos à saúde (químicos, físicos, biológicos), a periculosidade protege contra riscos de morte ou acidentes graves. O trabalhador pode receber ambos os adicionais se estiver exposto a ambos os riscos.`,
    category: 'Adicionais',
    icon: 'Zap',
    calculatorType: 'periculosidade',
    questions: [
      { question: 'Qual o percentual do adicional de periculosidade?', answer: 'O adicional de periculosidade é de 30% sobre o salário base do empregado, sem acréscimos de gratificações, prêmios ou participações nos lucros.' },
      { question: 'Quais atividades dão direito ao adicional de periculosidade?', answer: 'Atividades com inflamáveis, explosivos, energia elétrica, radiações ionizantes, substâncias radioativas, vigilância patrimonial e segurança pessoal. A caracterização depende de perícia técnica.' },
      { question: 'Posso receber adicional de periculosidade e insalubridade juntos?', answer: 'Até 2019, a CLT proibia o acúmulo. A Reforma Trabalhista (Lei 13.467/2017) passou a permitir que o trabalhador receba ambos os adicionais quando estiver exposto a riscos de ambas as naturezas, desde que haja previsão em acordo coletivo.' },
    ],
    tips: [
      'O adicional de periculosidade é de 30% sobre o salário base, sem inclusão de gratificações ou prêmios',
      'A caracterização da periculosidade exige perícia técnica realizada por profissional habilitado',
      'O adicional integra o salário para todos os efeitos legais: férias, 13º, FGTS e aviso prévio'
    ],
    metaDescription: 'Calcule o adicional de periculosidade online: 30% sobre o salário base para atividades perigosas. Simulador gratuito CLT.',
    keywords: ['adicional de periculosidade', 'periculosidade', '30% periculosidade', 'atividade perigosa'],
  },
  {
    id: 'adicional-insalubridade',
    title: 'Calculadora de Adicional de Insalubridade',
    description: 'Calcule o adicional de insalubridade de 10%, 20% ou 40% sobre o salário mínimo para atividades nocivas à saúde.',
    longIntro: `O adicional de insalubridade é um direito dos trabalhadores expostos a agentes nocivos à saúde acima dos limites de tolerância estabelecidos pelo Ministério do Trabalho. Previsto no artigo 192 da CLT, o adicional varia conforme o grau de insalubridade.

Os graus de insalubridade são: mínimo (10%), médio (20%) e máximo (40%), calculados sobre o salário mínimo regional ou nacional, exceto para categorias que possuem previsão em convenção coletiva. A caracterização é feita por perícia técnica.

Agentes insalubres incluem ruído excessivo, calor ou frio intensos, agentes químicos (gases, vapores), agentes biológicos (hospitais, laboratórios), poeiras minerais e umidade. A eliminação ou neutralização da insalubridade com EPIs adequados pode reduzir ou eliminar o direito ao adicional.`,
    category: 'Adicionais',
    icon: 'AlertCircle',
    calculatorType: 'insalubridade',
    questions: [
      { question: 'Quais os percentuais do adicional de insalubridade?', answer: 'Grau máximo: 40% do salário mínimo, grau médio: 20% do salário mínimo, grau mínimo: 10% do salário mínimo. O cálculo é sobre o salário mínimo, exceto quando convenção coletiva determina base diferente.' },
      { question: 'Quais atividades são consideradas insalubres?', answer: 'Atividades com ruído acima do limite, calor/frio intensos, agentes químicos, agentes biológicos (hospitais, laboratórios), poeiras minerais, radiações, umidade e vibrações. A classificação depende de perícia técnica.' },
      { question: 'O uso de EPIs elimina o direito ao adicional?', answer: 'Sim. Se os Equipamentos de Proteção Individual (EPIs) forem capazes de neutralizar ou eliminar a insalubridade, e o empregador fornecer os equipamentos adequados com fiscalização do uso, o adicional pode ser suprimido.' },
    ],
    tips: [
      'O adicional de insalubridade é calculado sobre o salário mínimo, não sobre o salário base (salvo previsão em contrário)',
      'A perícia técnica é obrigatória para caracterizar a insalubridade. O laudo pericial é a principal prova no processo trabalhista',
      'O fornecimento de EPIs adequados e fiscalização do uso podem reduzir o grau de insalubridade'
    ],
    metaDescription: 'Calcule o adicional de insalubridade online: 10%, 20% e 40% sobre salário mínimo. Simulador gratuito para atividades insalubres.',
    keywords: ['adicional de insalubridade', 'insalubridade', 'grau de insalubridade', 'adicional insalubridade CLT'],
  },
  {
    id: 'hora-extra-noturna',
    title: 'Calculadora de Hora Extra Noturna',
    description: 'Calcule horas extras realizadas em período noturno com os adicionais acumulados: noturno (20%) + extra (50% ou 100%).',
    longIntro: `A hora extra noturna ocorre quando o trabalhador realiza horas extraordinárias durante o período noturno (22h às 5h). Nesse caso, o empregado tem direito a receber ambos os adicionais: o adicional noturno (20%) e o adicional de hora extra (mínimo de 50%).

O cálculo é feito em cascata: primeiro calcula-se o valor da hora normal, aplica-se o adicional noturno (20%), e sobre esse valor aplica-se o adicional de hora extra (50% para dias úteis ou 100% para domingos/feriados). Além disso, a hora noturna reduzida (52 minutos e 30 segundos) deve ser considerada.

A hora extra noturna é comum em setores como segurança, saúde, indústria com turnos ininterruptos, logística e serviços de emergência. O cálculo correto desses adicionais é essencial para garantir o recebimento integral dos direitos trabalhistas.`,
    category: 'Jornada',
    icon: 'Clock',
    calculatorType: 'hora-extra-noturna',
    questions: [
      { question: 'Qual o valor da hora extra noturna?', answer: 'A hora extra noturna acumula o adicional noturno (20%) + o adicional de hora extra (mínimo 50%), totalizando no mínimo 80% sobre o valor da hora normal. Em domingos e feriados, o total mínimo é de 140%.' },
      { question: 'Como calcular hora extra noturna em cascata?', answer: 'Exemplo: salário R$ 2.200/220h = R$ 10,00/hora normal. Hora noturna: R$ 10,00 × 1,2 = R$ 12,00. Hora extra noturna (50%): R$ 12,00 × 1,5 = R$ 18,00.' },
      { question: 'A hora reduzida noturna se aplica às horas extras?', answer: 'Sim. A hora noturna reduzida (52min30s) também se aplica às horas extras realizadas no período noturno. Isso significa que cada hora extra noturna de 52,5 minutos é paga como uma hora cheia.' },
    ],
    tips: [
      'A hora extra noturna acumula adicional noturno + hora extra, resultando em no mínimo 80% sobre a hora normal',
      'A hora reduzida noturna de 52min30s também se aplica às horas extras no período noturno',
      'Mantenha registro detalhado dos horários de trabalho para garantir o pagamento correto'
    ],
    metaDescription: 'Calcule hora extra noturna online: adicional noturno 20% + hora extra 50%/100%. Calculadora gratuita CLT atualizada.',
    keywords: ['hora extra noturna', 'cálculo hora extra noturna', 'adicional noturno hora extra'],
  },
  {
    id: 'dsr',
    title: 'Calculadora de DSR (Descanso Semanal Remunerado)',
    description: 'Calcule o valor do Descanso Semanal Remunerado (DSR) sobre horas extras e comissões. Entenda seus direitos ao repouso semanal.',
    longIntro: `O Descanso Semanal Remunerado (DSR) é um direito garantido pela Lei 605/1949 e pela Constituição Federal. Todo trabalhador tem direito a um dia de descanso remunerado por semana, preferencialmente aos domingos.

O DSR sobre horas extras e comissões é calculado com base no total de horas extras ou comissões recebidas no mês, dividido pelo número de dias úteis e multiplicado pelo número de domingos e feriados do período. A fórmula considera os dias úteis (segunda a sábado) e os dias de descanso (domingos e feriados).

O cálculo do DSR é especialmente importante para trabalhadores que fazem horas extras com frequência ou recebem comissões, pois essas verbas variáveis geram reflexos no descanso semanal. O não pagamento correto do DSR pode gerar reclamações trabalhistas.`,
    category: 'Jornada',
    icon: 'Sun',
    calculatorType: 'dsr',
    questions: [
      { question: 'Como calcular o DSR sobre horas extras?', answer: 'Some o total de horas extras do mês, divida pelos dias úteis (considerando sábado como dia útil) e multiplique pelo número de domingos e feriados. Fórmula: (Total HE / Dias úteis) × Domingos e feriados.' },
      { question: 'Qual a diferença entre DSR e repouso semanal?', answer: 'DSR e repouso semanal remunerado são a mesma coisa: o direito a um dia de descanso por semana com remuneração normal. A diferença é que DSR é o termo técnico usado na legislação (Lei 605/1949).' },
      { question: 'O DSR incide sobre comissões?', answer: 'Sim. As comissões recebidas pelo trabalhador também geram reflexo no DSR. O cálculo é similar ao das horas extras: total de comissões do mês dividido pelos dias úteis e multiplicado pelos dias de descanso.' },
    ],
    tips: [
      'O DSR sobre horas extras é calculado com base na soma total de horas extras do mês',
      'Sábado é considerado dia útil para fins de cálculo do DSR',
      'Empregados que trabalham em regime de compensação de jornada também têm direito ao DSR'
    ],
    metaDescription: 'Calcule o DSR online: Descanso Semanal Remunerado sobre horas extras e comissões. Simulador gratuito CLT.',
    keywords: ['DSR', 'descanso semanal remunerado', 'calcular DSR', 'DSR horas extras'],
  },
  {
    id: 'vale-transporte',
    title: 'Calculadora de Vale-Transporte',
    description: 'Calcule o desconto do vale-transporte (até 6% do salário) e descubra se o benefício cobre seus gastos com transporte.',
    longIntro: `O vale-transporte é um benefício garantido pela Lei 7.418/1985, que assegura ao trabalhador o custeio parcial de suas despesas com transporte público coletivo para ir e voltar do trabalho.

O empregador pode descontar até 6% do salário base do funcionário a título de contribuição para o vale-transporte. Se o custo total do transporte for inferior a 6% do salário, o desconto será limitado ao valor do transporte. Se for superior, o empregador arca com a diferença.

O benefício cobre apenas transporte público coletivo (ônibus, metrô, trem, barca). Não inclui transporte por aplicativo, táxi, fretado particular ou condução própria. O trabalhador pode optar por não receber o vale-transporte, mas a empresa não é obrigada a oferecer outra forma de auxílio-transporte.`,
    category: 'Benefícios',
    icon: 'Bus',
    calculatorType: 'vale-transporte',
    questions: [
      { question: 'Qual o percentual máximo de desconto do vale-transporte?', answer: 'O desconto máximo é de 6% sobre o salário base. Se o valor do transporte for menor que 6%, o desconto será apenas o necessário para cobrir as despesas de deslocamento.' },
      { question: 'Posso recusar o vale-transporte?', answer: 'Sim. O vale-transporte é um benefício optativo. O trabalhador pode recusá-lo por escrito, mas nesse caso não terá direito a nenhum auxílio-transporte da empresa.' },
      { question: 'O vale-transporte cobre quais meios de transporte?', answer: 'Apenas transporte público coletivo: ônibus municipal e intermunicipal, metrô, trem, barca e VLT. Não cobre táxi, Uber, 99, transporte fretado ou veículo próprio.' },
    ],
    tips: [
      'O desconto do vale-transporte é limitado a 6% do salário base, mas o benefício cobre o valor total do transporte',
      'Você pode optar por não receber o vale-transporte, mas não receberá nenhum outro auxílio no lugar',
      'O vale-transporte só pode ser utilizado em dias úteis de trabalho, não para passeios ou fins de semana'
    ],
    metaDescription: 'Calcule o vale-transporte online: desconto de até 6% do salário para transporte público. Simulador gratuito.',
    keywords: ['vale transporte', 'calcular vale transporte', 'desconto vale transporte', '6% vale transporte'],
  },
  {
    id: 'participacao-lucros',
    title: 'Calculadora de PLR (Participação nos Lucros)',
    description: 'Calcule a Participação nos Lucros e Resultados (PLR) com base em regras da empresa, metas e salário. Simule o valor do benefício.',
    longIntro: `A Participação nos Lucros e Resultados (PLR) é um benefício previsto na Lei 10.101/2000, que permite aos trabalhadores receber uma parcela dos lucros da empresa como forma de reconhecimento e incentivo.

A PLR não tem valor fixo estabelecido em lei. Cada empresa negocia com o sindicato da categoria as regras de distribuição, que podem incluir metas individuais e coletivas, tempo de empresa, salário e resultados financeiros. A PLR não tem natureza salarial e não incide INSS, FGTS ou IRRF (até determinado limite).

O cálculo da PLR varia conforme o acordo coletivo de cada categoria. Alguns acordos estabelecem um valor fixo por faixa salarial, outros vinculam o pagamento ao atingimento de metas específicas. A periodicidade também varia: pode ser semestral, anual ou vinculada a resultados específicos.`,
    category: 'Benefícios',
    icon: 'Target',
    calculatorType: 'plr',
    questions: [
      { question: 'Qual o valor mínimo da PLR?', answer: 'A lei não estabelece valor mínimo ou máximo para a PLR. Cada empresa negocia com o sindicato o valor e as regras de distribuição. Alguns acordos preveem valores fixos por faixa salarial.' },
      { question: 'A PLR é obrigatória?', answer: 'Não. A PLR não é obrigatória por lei. Cabe à empresa decidir se institui o programa de participação nos lucros, que deve ser negociado com o sindicato da categoria.' },
      { question: 'A PLR tem desconto de INSS e IR?', answer: 'A PLR não tem incidência de INSS nem FGTS. O Imposto de Renda é devido apenas sobre valores que excederem certos limites estabelecidos pela Receita Federal, com tributação exclusiva na fonte.' },
    ],
    tips: [
      'A PLR não tem natureza salarial, portanto não gera reflexos em férias, 13º, FGTS nem aviso prévio',
      'O pagamento da PLR deve seguir as regras do acordo coletivo ou acordo firmado entre empresa e empregados',
      'A PLR pode ser paga em uma ou mais parcelas ao longo do ano, conforme previsto em acordo'
    ],
    metaDescription: 'Calcule a PLR online: Participação nos Lucros e Resultados com base em salário e metas. Simulador gratuito.',
    keywords: ['PLR', 'participação nos lucros', 'calcular PLR', 'PLR trabalhista'],
  },
  {
    id: 'adicional-transferencia',
    title: 'Calculadora de Adicional de Transferência',
    description: 'Simulação de valores para transferência provisória de funcionários',
    longIntro: `Esta é uma calculadora demonstrativa. Em breve teremos conteúdo completo sobre adicional de transferência.`,
    category: 'Adicionais',
    icon: 'MapPin',
    calculatorType: 'transferencia',
    questions: [
      { question: 'Quando o adicional de transferência é devido?', answer: 'O adicional de transferência é devido quando o empregador transfere o funcionário provisoriamente para outro município, no percentual mínimo de 25% sobre o salário.' },
    ],
    tips: ['A transferência definitiva não gera direito ao adicional.', 'A transferência provisória gera direito a 25% de adicional.', 'Despesas de mudança são por conta do empregador.'],
    metaDescription: 'Calcule o adicional de transferência online: 25% sobre o salário para transferência provisória.',
    keywords: ['adicional de transferência', 'transferência provisória'],
  },
];

export const categories = [
  { id: 'rescisao', name: 'Rescisão e Saída', icon: 'FileText' },
  { id: 'jornada', name: 'Jornada de Trabalho', icon: 'Clock' },
  { id: 'adicionais', name: 'Adicionais Salariais', icon: 'PlusCircle' },
  { id: 'beneficios', name: 'Benefícios', icon: 'Gift' },
  { id: 'financas', name: 'Finanças e Correção', icon: 'TrendingUp' },
];

export const guides = [
  {
    id: 'direitos-trabalhistas',
    title: 'Guia Completo de Direitos Trabalhistas',
    description: 'Conheça todos os seus direitos como trabalhador CLT: férias, 13º, FGTS, horas extras e muito mais.',
    category: 'Guias',
    icon: 'BookOpen',
  },
  {
    id: 'como-calcular-horas-extras',
    title: 'Como Calcular Horas Extras: Guia Passo a Passo',
    description: 'Aprenda o passo a passo para calcular horas extras com adicionais de 50%, 100% e noturno.',
    category: 'Guias',
    icon: 'BookOpen',
  },
  {
    id: 'diferencas-clt-pj',
    title: 'CLT vs PJ: Qual a Melhor Opção para Você?',
    description: 'Compare as vantagens e desvantagens de trabalhar como CLT ou PJ. Simule sua melhor opção.',
    category: 'Guias',
    icon: 'BookOpen',
  },
  {
    id: 'guia-fgts',
    title: 'Guia Completo do FGTS: Saques, Multa e Rendimentos',
    description: 'Tudo que você precisa saber sobre FGTS: depósitos, saques, multa de 40% e como consultar seu saldo.',
    category: 'Guias',
    icon: 'BookOpen',
  },
  {
    id: 'passo-rescisao',
    title: 'Passo a Passo da Rescisão Trabalhista',
    description: 'Guia completo sobre o processo de rescisão: documentos, prazos, verbas devidas e direitos do trabalhador.',
    category: 'Guias',
    icon: 'BookOpen',
  },
];
