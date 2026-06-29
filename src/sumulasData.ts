import type { Sumula } from './types';

export const sumulaCategories = [
  { id: 'direito-individual', name: 'Direito Individual do Trabalho' },
  { id: 'direito-processual', name: 'Direito Processual do Trabalho' },
  { id: 'adicionais', name: 'Adicionais e Remuneração' },
  { id: 'rescisao', name: 'Rescisão Contratual' },
  { id: 'terceirizacao', name: 'Terceirização e Responsabilidade' },
];

export const sumulas: Sumula[] = [
  {
    id: 'sumula-6',
    numero: 6,
    title: 'Súmula 6 do TST - Equiparação Salarial',
    description: 'Define os requisitos e o ônus da prova para o direito à equiparação salarial com base no artigo 461 da CLT.',
    content: `I - Para os fins previstos no § 2º do art. 461 da CLT, só é válido o quadro de carreira homologado pelo Ministério do Trabalho e Previdência Social que contemple a possibilidade de promoção por merecimento e por antiguidade, ou apenas por antiguidade, com a observância de critérios objetivos e alternados.

II - Para que seja possível a equiparação salarial, não é necessário que os cargos estejam previstos em quadro de carreira, sendo suficiente que o empregado e o paradigma exerçam a mesma função, desempenhando as mesmas atividades, com a mesma produtividade e perfeição técnica, e que a diferença de tempo de serviço entre eles não seja superior a 2 anos.

III - A equiparação salarial só é possível se o empregado e o paradigma exercerem a mesma função, desempenhando as mesmas atividades, não bastando a identidade de denominação dos cargos.

IV - É ônus do empregado provar que exerce função idêntica à do paradigma, com igual produtividade e perfeição técnica, e do empregador provar fato impeditivo, modificativo ou extintivo do direito à equiparação.

V - O fato de o paradigma ser técnico de nível superior não impede, por si só, a equiparação salarial, se o empregado equiparando exerce as mesmas atividades, com a mesma produtividade e perfeição técnica.

VI - O desvio funcional, quando houver identidade de funções entre o empregado e o paradigma, autoriza a equiparação salarial.

VII - O tempo de serviço na mesma função, para efeito de equiparação salarial, é contado a partir da data da contratação do empregado e do paradigma.

VIII - A diferença de tempo de serviço na função, para efeito de equiparação salarial, não pode ser superior a 2 anos. Para a contagem do tempo de serviço, considera-se a data da contratação do empregado e do paradigma.`,
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['equiparação salarial', 'art. 461 CLT', 'ônus da prova', 'mesma função'],
    relacionados: ['art. 461 CLT', 'CF art. 7º, XXX'],
    metaDescription: 'Súmula 6 do TST: Equiparação Salarial - requisitos, ônus da prova, quadro de carreira e diferença de tempo de serviço. Art. 461 CLT.',
  },
  {
    id: 'sumula-27',
    numero: 27,
    title: 'Súmula 27 do TST - Comissionista: DSR e Feriados',
    description: 'Garante a remuneração do Descanso Semanal Remunerado e feriados aos empregados comissionistas e tarefeiros.',
    content: 'É devida a remuneração do repouso semanal e dos dias feriados ao empregado comissionista, ainda que exerça atividades externas de forma incompatível com a fixação de horário de trabalho, nos termos do art. 1º da Lei 605/49. O cálculo deve ser feito sobre o total das comissões percebidas no mês, dividido pelos dias úteis e multiplicado pelos dias de descanso (domingos e feriados).',
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Súmula da jurisprudência predominante do TST',
    tags: ['DSR', 'comissionista', 'feriados', 'repouso semanal'],
    relacionados: ['Lei 605/1949'],
    metaDescription: 'Súmula 27 do TST: Comissionistas têm direito ao DSR e feriados sobre o total de comissões recebidas. Lei 605/49.',
  },
  {
    id: 'sumula-32',
    numero: 32,
    title: 'Súmula 32 do TST - Abandono de Emprego',
    description: 'Presume o abandono de emprego quando o trabalhador não retorna ao trabalho após 30 dias do fim do benefício previdenciário.',
    content: 'Presume-se o abandono de emprego quando o empregado não retorna ao serviço no prazo de 30 dias após a cessação do benefício previdenciário, nem justifica o motivo de não o fazer. Incumbe ao empregador o ônus de provar o abandono de emprego, salvo se o empregado deixar de retornar ao serviço após o término do benefício previdenciário, quando então o ônus se inverte.',
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['abandono de emprego', 'benefício previdenciário', 'ônus da prova'],
    relacionados: [],
    metaDescription: 'Súmula 32 do TST: Abandono de emprego - presunção quando não há retorno em 30 dias após fim do benefício previdenciário.',
  },
  {
    id: 'sumula-47',
    numero: 47,
    title: 'Súmula 47 do TST - Insalubridade Intermitente',
    description: 'O trabalho insalubre prestado de forma intermitente não exclui o direito ao recebimento do adicional de insalubridade.',
    content: 'O trabalho executado em condições insalubres, em caráter intermitente, não afasta, só por essa circunstância, o direito à percepção do respectivo adicional. A exposição ao agente insalubre, ainda que não seja contínua, mas com frequência suficiente para causar danos à saúde do trabalhador, gera direito ao adicional proporcional ao tempo de exposição.',
    category: 'Adicionais e Remuneração',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['insalubridade', 'trabalho intermitente', 'adicional de insalubridade'],
    relacionados: ['NR-15', 'Art. 192 CLT'],
    metaDescription: 'Súmula 47 do TST: Trabalho insalubre intermitente não exclui direito ao adicional de insalubridade.',
  },
  {
    id: 'sumula-51',
    numero: 51,
    title: 'Súmula 51 do TST - Alteração Contratual Lesiva',
    description: 'Protege o trabalhador contra alterações lesivas em regulamentos internos, garantindo o direito adquirido à cláusula mais benéfica.',
    content: `I - As cláusulas regulamentares, que revoguem ou alterem vantagens deferidas anteriormente, só atingirão os salários contratuais após a vigência do novo regulamento, respeitado o direito adquirido dos empregados admitidos antes da alteração.

II - Havendo a coexistência de dois regulamentos empresariais, a opção do empregado por um deles tem efeito jurídico de renúncia às regras do sistema do outro, não sendo considerada alteração contratual lesiva (art. 468 da CLT).`,
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['alteração contratual', 'direito adquirido', 'regulamento empresarial', 'cláusula benéfica'],
    relacionados: ['Art. 468 CLT'],
    metaDescription: 'Súmula 51 do TST: Proteção contra alteração contratual lesiva - direito adquirido a cláusulas mais benéficas do regulamento empresarial.',
  },
  {
    id: 'sumula-90',
    numero: 90,
    title: 'Súmula 90 do TST - Horas In Itinere',
    description: 'Estabelece os critérios para que o tempo de deslocamento do trabalhador seja considerado como tempo à disposição do empregador (horas in itinere).',
    content: `I - O tempo despendido pelo empregado, em condução fornecida pelo empregador, até o local de trabalho de difícil acesso, ou não servido por transporte público regular, e para o seu retorno, é computável na jornada de trabalho.

II - A incompatibilidade entre os horários de início e término da jornada do empregado e os do transporte público regular é circunstância que também gera direito às horas in itinere.

III - A mera insuficiência de transporte público não enseja o pagamento de horas in itinere.

IV - Se houver transporte público regular em parte do trajeto percorrido em condução da empresa, as horas in itinere remuneráveis limitam-se ao trecho não alcançado pelo transporte público.

V - O tempo de deslocamento do trabalhador entre a portaria da empresa e o local efetivo de trabalho não é considerado horas in itinere quando o empregador fornece condução interna.`,
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['horas in itinere', 'transporte', 'jornada', 'deslocamento'],
    relacionados: ['Art. 58 CLT', 'Art. 58, §2º CLT'],
    metaDescription: 'Súmula 90 do TST: Horas in itinere - tempo de deslocamento como jornada de trabalho. Critérios e requisitos.',
  },
  {
    id: 'sumula-102',
    numero: 102,
    title: 'Súmula 102 do TST - Cargo de Confiança',
    description: 'Define os pressupostos para a caracterização do cargo de gestão (art. 62, II da CLT), que exclui o direito a horas extras.',
    content: `I - O empregado que exerce cargo de confiança, nos termos do art. 62, II da CLT, não tem direito ao pagamento de horas extras, ainda que perceba gratificação de função inferior a 40% do salário efetivo.

II - A circunstância de o empregado exercer cargo de confiança, com remuneração acrescida de gratificação de função inferior a 40%, não descaracteriza o cargo de confiança, para os efeitos do art. 62, II da CLT.

III - A equiparação salarial entre empregados que exercem cargo de confiança é possível, desde que comprovada a identidade de funções.

IV - O bancário que exerce a função de confiança a que se refere o art. 224, §2º da CLT, não tem direito ao pagamento de horas extras além do limite de 8 horas diárias.`,
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['cargo de confiança', 'art. 62 CLT', 'gestão', 'horas extras'],
    relacionados: ['Art. 62 CLT', 'Súmula 287 TST'],
    metaDescription: 'Súmula 102 do TST: Cargo de confiança e exclusão do direito a horas extras. Art. 62, II da CLT.',
  },
  {
    id: 'sumula-126',
    numero: 126,
    title: 'Súmula 126 do TST - Revisão de Fatos e Provas',
    description: 'Estabelece a impossibilidade de reexame de fatos e provas em sede de Recurso de Revista perante o TST.',
    content: 'Incabível o recurso de revista ou de embargos para reexame de fatos e provas. O TST não pode rever as conclusões do Tribunal Regional do Trabalho quanto à análise das provas produzidas nos autos, sendo esta matéria de competência exclusiva das instâncias ordinárias.',
    category: 'Direito Processual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['recurso de revista', 'reexame de provas', 'Súmula 126', 'processual'],
    relacionados: ['CLT art. 896'],
    metaDescription: 'Súmula 126 do TST: Impossibilidade de reexame de fatos e provas em Recurso de Revista perante o TST.',
  },
  {
    id: 'sumula-146',
    numero: 146,
    title: 'Súmula 146 do TST - Trabalho em Domingos e Feriados',
    description: 'O trabalho em domingos e feriados, sem folga compensatória, deve ser pago em dobro ao trabalhador.',
    content: 'O trabalho prestado em domingos e feriados, não compensado, deve ser pago em dobro, sem prejuízo da remuneração relativa ao repouso semanal. A folga compensatória deve ser concedida em outro dia da semana para que o trabalho aos domingos não seja considerado extraordinário. A não concessão da folga compensatória no mesmo mês gera o direito ao pagamento em dobro.',
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['domingos', 'feriados', 'pagamento em dobro', 'DSR'],
    relacionados: ['Lei 605/1949', 'Art. 7º, XV CF/88'],
    metaDescription: 'Súmula 146 do TST: Trabalho em domingos e feriados sem folga compensatória deve ser pago em dobro.',
  },
  {
    id: 'sumula-159',
    numero: 159,
    title: 'Súmula 159 do TST - Substituição de Empregado',
    description: 'O empregado substituto tem direito ao salário do substituído, desde que a substituição não seja eventual.',
    content: `I - Enquanto perdurar a substituição que não tenha caráter meramente eventual, inclusive nas férias, o empregado substituto fará jus ao salário contratual do substituído.

II - A substituição de caráter eventual não gera direito ao pagamento de salário igual ao do substituído, sendo devido apenas o salário contratual do substituto.`,
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['substituição', 'salário do substituído', 'equiparação', 'função'],
    relacionados: ['Súmula 6 TST'],
    metaDescription: 'Súmula 159 do TST: Substituto tem direito ao salário do substituído quando a substituição não é eventual.',
  },
  {
    id: 'sumula-212',
    numero: 212,
    title: 'Súmula 212 do TST - Continuidade do Contrato de Trabalho',
    description: 'O ônus de provar o término do contrato de trabalho é do empregador, em razão do princípio da continuidade da relação de emprego.',
    content: 'O ônus de provar o término do contrato de trabalho, quando negados a prestação de serviços e o desligamento, é do empregador, pois o princípio da continuidade da relação de emprego constitui presunção favorável ao empregado. Cabe ao empregador demonstrar, por qualquer meio de prova, que houve a extinção do vínculo empregatício.',
    category: 'Direito Processual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['ônus da prova', 'término do contrato', 'princípio da continuidade'],
    relacionados: [],
    metaDescription: 'Súmula 212 do TST: Ônus da prova do término do contrato de trabalho é do empregador - princípio da continuidade.',
  },
  {
    id: 'sumula-264',
    numero: 264,
    title: 'Súmula 264 do TST - Base de Cálculo da Hora Extra',
    description: 'A base de cálculo da hora extra inclui todos os adicionais recebidos habitualmente pelo trabalhador, como adicional noturno e insalubridade.',
    content: 'A base de cálculo da hora extra é o valor da hora normal acrescido dos adicionais noturno, de insalubridade, de periculosidade e outros adicionais recebidos habitualmente pelo empregado. A integração desses adicionais no cálculo da hora extra visa garantir a remuneração integral do trabalhador pelo serviço extraordinário prestado.',
    category: 'Adicionais e Remuneração',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['base de cálculo', 'hora extra', 'adicionais', 'integração'],
    relacionados: ['Art. 59 CLT', 'Art. 7º, XVI CF/88'],
    metaDescription: 'Súmula 264 do TST: Base de cálculo da hora extra inclui todos os adicionais recebidos habitualmente.',
  },
  {
    id: 'sumula-331',
    numero: 331,
    title: 'Súmula 331 do TST - Terceirização e Responsabilidade Subsidiária',
    description: 'Súmula principal sobre terceirização, atividade-fim, responsabilidade subsidiária do tomador e inadimplemento da prestadora.',
    content: `I - A contratação de trabalhadores por empresa interposta é ilegal, formando-se o vínculo diretamente com o tomador dos serviços, salvo no caso de trabalho temporário (Lei 6.019/1974).

II - A contratação irregular de trabalhador, mediante empresa interposta, não gera vínculo de emprego com os órgãos da Administração Pública direta, indireta ou fundacional (art. 37, II e §2º da CF/88).

III - Não forma vínculo de emprego com o tomador a contratação de serviços de vigilância (Lei 7.102/1983) e de conservação e limpeza, bem como a de serviços especializados ligados à atividade-meio do tomador, desde que inexistente a pessoalidade e a subordinação direta.

IV - O inadimplemento das obrigações trabalhistas, por parte do empregador, implica a responsabilidade subsidiária do tomador dos serviços quanto àquelas obrigações, desde que este tenha participado da relação processual e conste também do título executivo judicial.

V - A responsabilidade subsidiária do tomador de serviços abrange todas as verbas decorrentes da condenação referentes ao período da prestação laboral.`,
    category: 'Terceirização e Responsabilidade',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['terceirização', 'responsabilidade subsidiária', 'atividade-meio', 'tomador', 'administração pública'],
    relacionados: ['Lei 6.019/74', 'Lei 7.102/83', 'CF art. 37, II'],
    metaDescription: 'Súmula 331 do TST: Terceirização - responsabilidade subsidiária, atividade-meio, Administração Pública e inadimplemento.',
  },
  {
    id: 'sumula-338',
    numero: 338,
    title: 'Súmula 338 do TST - Cartão de Ponto e Ônus da Prova',
    description: 'Define o ônus da prova da jornada de trabalho quando o empregador tem mais de 20 funcionários e não apresenta os cartões de ponto.',
    content: `I - É ônus do empregador que conta com mais de 20 funcionários o registro da jornada de trabalho na forma do art. 74, §2º da CLT. A não apresentação injustificada dos controles de frequência gera presunção relativa de veracidade da jornada de trabalho alegada pelo empregado, a qual pode ser ilidida por prova em contrário.

II - A presunção de veracidade da jornada de trabalho, ainda que prevista em instrumento normativo, pode ser elidida por prova em contrário.

III - Os cartões de ponto que demonstram horários de entrada e saída uniformes (horários britânicos) constituem indício de controle não real da jornada de trabalho, invertendo-se o ônus da prova, que passa a ser do empregador.`,
    category: 'Direito Processual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['cartão de ponto', 'ônus da prova', 'jornada', 'controle de frequência'],
    relacionados: ['Art. 74 CLT'],
    metaDescription: 'Súmula 338 do TST: Cartão de ponto - ônus da prova da jornada, presunção de veracidade e horários britânicos.',
  },
  {
    id: 'sumula-363',
    numero: 363,
    title: 'Súmula 363 do TST - Contrato sem Concurso Público',
    description: 'Estabelece os efeitos do contrato de trabalho sem concurso público na Administração Pública - direito apenas ao salário e FGTS.',
    content: 'A contratação de servidor público, após a CF/88, sem prévia aprovação em concurso público, encontra óbice no art. 37, II e §2º da Constituição Federal. O contrato é nulo de pleno direito, mas o servidor tem direito apenas ao pagamento da contraprestação pactuada (salário) e ao levantamento dos depósitos do FGTS, em relação ao período trabalhado, não sendo devidas outras verbas trabalhistas como aviso prévio, férias + 1/3, 13º salário e multa de 40% do FGTS.',
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['concurso público', 'administração pública', 'contrato nulo', 'FGTS'],
    relacionados: ['CF art. 37, II', 'CF art. 37, §2º'],
    metaDescription: 'Súmula 363 do TST: Contrato sem concurso público na Administração - direito apenas a salário e FGTS.',
  },
  {
    id: 'sumula-369',
    numero: 369,
    title: 'Súmula 369 do TST - Estabilidade do Dirigente Sindical',
    description: 'Trata da estabilidade provisória do dirigente sindical e seus limites, incluindo requisitos para reconhecimento.',
    content: `I - É assegurada a estabilidade provisória prevista no art. 543 da CLT e no art. 8º, VIII da CF/88 ao dirigente sindical eleito, ainda que suplente, desde que registrada a candidatura e a eleição no órgão competente do Ministério do Trabalho e Emprego.

II - O art. 522 da CLT foi recepcionado pela CF/88, limitando a estabilidade aos dirigentes eleitos e aos suplentes, no máximo de 7 dirigentes por sindicato.

III - O empregado de categoria diferenciada eleito dirigente sindical de sindicato da categoria profissional diferenciada tem direito à estabilidade no emprego.

IV - O dirigente sindical somente poderá ser dispensado por falta grave, mediante inquérito judicial (art. 543, §3º da CLT).

V - O registro da candidatura a cargo de dirigente sindical durante o período de aviso prévio, ainda que indenizado, não assegura a estabilidade no emprego.`,
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['estabilidade', 'dirigente sindical', 'CF art. 8º', 'art. 543 CLT'],
    relacionados: ['Art. 543 CLT', 'CF art. 8º, VIII'],
    metaDescription: 'Súmula 369 do TST: Estabilidade do dirigente sindical - requisitos, limites e proteção contra dispensa.',
  },
  {
    id: 'sumula-378',
    numero: 378,
    title: 'Súmula 378 do TST - Estabilidade Acidentária',
    description: 'Estabelece os requisitos para a estabilidade provisória do acidentado: afastamento superior a 15 dias e recebimento de auxílio-doença acidentário.',
    content: `I - É constitucional o art. 118 da Lei 8.213/1991 que assegura o direito à estabilidade provisória por 12 meses ao empregado acidentado que sofreu acidente de trabalho ou doença ocupacional, desde que tenha ocorrido afastamento superior a 15 dias e recebimento de auxílio-doença acidentário (B91).

II - A garantia de emprego de que trata o art. 118 da Lei 8.213/1991 independe de o empregado ter requerido ou recebido o auxílio-doença acidentário, desde que comprovado o nexo causal entre o acidente/doença e o trabalho e o afastamento superior a 15 dias.

III - A estabilidade acidentária não se aplica ao contrato de trabalho por prazo determinado, salvo se houver previsão em contrário em norma coletiva.`,
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['estabilidade', 'acidente de trabalho', 'doença ocupacional', 'auxílio-doença'],
    relacionados: ['Lei 8.213/91, art. 118'],
    metaDescription: 'Súmula 378 do TST: Estabilidade acidentária - requisitos de afastamento, auxílio-doença e nexo causal.',
  },
  {
    id: 'sumula-437',
    numero: 437,
    title: 'Súmula 437 do TST - Intervalo Intrajornada',
    description: 'Súmula mais importante sobre intervalo intrajornada. A não concessão total ou parcial gera direito ao pagamento como hora extra com adicional de 50%.',
    content: `I - Após a edição da Lei 8.923/94, a não concessão total ou parcial do intervalo intrajornada mínimo, para repouso e alimentação, implica o pagamento total do período correspondente, com acréscimo de, no mínimo, 50% sobre o valor da remuneração da hora normal de trabalho (art. 71 da CLT).

II - É inválida cláusula de acordo ou convenção coletiva de trabalho contemplando a supressão ou redução do intervalo intrajornada porque este constitui medida de higiene, saúde e segurança do trabalho, garantido por norma de ordem pública (art. 71 da CLT e art. 7º, XXII da CF/88).

III - Possui natureza salarial a parcela prevista no art. 71, §4º da CLT, com redação introduzida pela Lei 8.923/94, assim como o respectivo adicional, repercutindo, assim, no cálculo de outras verbas trabalhistas.

IV - A redução do intervalo intrajornada para 30 minutos, autorizada pelo art. 71, §3º da CLT, não dispensa o pagamento do período suprimido como hora extra quando não houver autorização do Ministério do Trabalho ou acordo coletivo.`,
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 185/2012, DEJT divulgado em 25, 26 e 27.09.2012',
    tags: ['intervalo intrajornada', 'hora extra', 'art. 71 CLT', 'natureza salarial'],
    relacionados: ['Art. 71 CLT', 'Art. 7º, XXII CF/88'],
    metaDescription: 'Súmula 437 do TST: Intervalo intrajornada - não concessão gera pagamento como hora extra com adicional de 50%. Art. 71 CLT.',
  },
  {
    id: 'sumula-443',
    numero: 443,
    title: 'Súmula 443 do TST - Dispensa Discriminatória',
    description: 'Presume discriminatória a dispensa de empregado portador de doença grave que cause estigma ou preconceito, garantindo o direito à reintegração.',
    content: 'Presume-se discriminatória a despedida de empregado portador do vírus HIV ou de outra doença grave que suscite estigma ou preconceito. A dispensa, nesses casos, é considerada arbitrária, garantindo ao empregado o direito à reintegração no emprego, com o pagamento dos salários desde a data da dispensa até a efetiva reintegração, nos termos do art. 4º, II da Lei 9.029/1995.',
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 185/2012, DEJT divulgado em 25, 26 e 27.09.2012',
    tags: ['dispensa discriminatória', 'doença grave', 'HIV', 'reintegração', 'preconceito'],
    relacionados: ['Lei 9.029/1995'],
    metaDescription: 'Súmula 443 do TST: Dispensa discriminatória - presunção de discriminação na dispensa de portador de doença grave. Direito à reintegração.',
  },
  {
    id: 'sumula-461',
    numero: 461,
    title: 'Súmula 461 do TST - Ônus da Prova do FGTS',
    description: 'É do empregador o ônus de provar a regularidade dos depósitos do FGTS durante o contrato de trabalho.',
    content: 'É do empregador o ônus de provar que os depósitos do FGTS foram regularmente efetuados durante todo o período de vigência do contrato de trabalho. A ausência ou insuficiência de prova da regularidade dos depósitos gera presunção de irregularidade, cabendo ao empregador demonstrar o correto recolhimento das contribuições fundiárias.',
    category: 'Direito Processual do Trabalho',
    dataAprovacao: 'Res. 185/2012, DEJT divulgado em 25, 26 e 27.09.2012',
    tags: ['FGTS', 'ônus da prova', 'depósitos', 'regularidade'],
    relacionados: ['Lei 8.036/1990'],
    metaDescription: 'Súmula 461 do TST: É do empregador o ônus de provar a regularidade dos depósitos do FGTS.',
  },
  {
    id: 'sumula-60',
    numero: 60,
    title: 'Súmula 60 do TST - Adicional Noturno na Prorrogação',
    description: 'O adicional noturno é devido também na prorrogação do horário noturno além das 5h da manhã, em caso de continuidade do turno.',
    content: `I - O adicional noturno, pago com habitualidade, integra o salário do empregado para todos os efeitos legais.

II - Cumprida integralmente a jornada no período noturno e prorrogada esta, devido é também o adicional quanto às horas prorrogadas. Exegese do art. 73, §5º da CLT.`,
    category: 'Adicionais e Remuneração',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['adicional noturno', 'prorrogação', 'art. 73 CLT', '5h'],
    relacionados: ['Art. 73 CLT'],
    metaDescription: 'Súmula 60 do TST: Adicional noturno devido na prorrogação do horário noturno além das 5h.',
  },
  {
    id: 'sumula-244',
    numero: 244,
    title: 'Súmula 244 do TST - Estabilidade da Gestante',
    description: 'A gestante tem estabilidade no emprego desde a confirmação da gravidez até 5 meses após o parto, inclusive em contratos por prazo determinado.',
    content: `I - O desconhecimento do estado gravídico pelo empregador não afasta o direito ao pagamento da indenização decorrente da estabilidade (art. 10, II, b do ADCT).

II - A garantia de emprego à gestante só não é devida quando a empregada comete falta grave, apurada em inquérito judicial.

III - A empregada gestante tem direito à estabilidade provisória prevista no art. 10, II, b do ADCT, mesmo na hipótese de admissão mediante contrato por tempo determinado.

IV - A estabilidade da gestante aplica-se também ao contrato de experiência.`,
    category: 'Direito Individual do Trabalho',
    dataAprovacao: 'Res. 121/2003, DJ 19, 20 e 21.11.2003',
    tags: ['gestante', 'estabilidade', 'gravidez', 'contrato temporário', 'experiência'],
    relacionados: ['ADCT art. 10, II, b', 'Súmula 244 TST'],
    metaDescription: 'Súmula 244 do TST: Estabilidade da gestante - da confirmação da gravidez até 5 meses após o parto. Vale para contratos temporários.',
  },
];

export const sumulasPorCategoria = sumulaCategories.map(cat => ({
  ...cat,
  sumulas: sumulas.filter(s => s.category === cat.name),
}));
