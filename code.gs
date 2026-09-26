function criarFormularioXadrez() {

  // =========================================================
  // CRIAR FORMULÁRIO
  // =========================================================

  const form = FormApp.create(
    'Vº ABERTO ESCOLAR - Clube de Xadrez - IFRS Campus Alvorada'
  );

  form.setDescription(
    'Vº ABERTO ESCOLAR, Clube de Xadrez - Instituto Federal de Educação, Ciência e Tecnologia do RS - IFRS/Campus Alvorada.\n\n' +

    '28/11/2026, 8h\n' +
    'Rua Professor Darcy Ribeiro, 121 - Campus Verdes em Alvorada/RS.\n\n' +

    'INSCRIÇÃO GRATUITA.\n' +
    'Limite de inscrição: 200 vagas.\n' +
    'Início: 8h.\n\n' +

    'Obs.: Ao inscrever-se, os/as atletas concordam com todos os itens do presente regulamento.\n\n' +

    'Acompanhe as informações dos Torneios - Embrião Chess Club:\n' +
    'https://chat.whatsapp.com/CRi08VnyzYAGGjTXZ0Z2xy\n\n' +

    'Informações: 51 9 8404-3602 e no grupo Embrião Chess Club.'
  );


  // =========================================================
  // NOME COMPLETO
  // =========================================================

  form.addTextItem()
    .setTitle('NOME COMPLETO')
    .setRequired(true);


  // =========================================================
  // GÊNERO
  // No original não aparece como obrigatório
  // =========================================================

  form.addMultipleChoiceItem()
    .setTitle('Gênero:')
    .setChoiceValues([
      'Masculino',
      'Feminino'
    ])
    .setRequired(false);


  // =========================================================
  // DATA DE NASCIMENTO
  // =========================================================

  form.addTextItem()
    .setTitle('Data de Nascimento (dd.mm.aaaa)')
    .setRequired(true);


  // =========================================================
  // CATEGORIAS
  // =========================================================

  form.addMultipleChoiceItem()
    .setTitle('CATEGORIAS, marcar conforme o seu ano de nascimento:')
    .setChoiceValues([
      'VETERANOS - Nascidos 1966 ou antes',
      'SENIOR - Nascidos entre 1967 e 1976',
      'ADULTOS - Nascidos entre 1977 e 2007',
      'Sub 18 - Nascidos em 2008 e 2009',
      'Sub 16 - Nascidos em 2010 e 2011',
      'Sub 14 - Nascidos em 2012 e 2013',
      'Sub 12 - Nascidos em 2014 e 2015',
      'Sub 10 - Nascidos em 2016 e 2017',
      'Sub 8 - Nascidos a partir de 2018'
    ])
    .setRequired(true);


  // =========================================================
  // EQUIPE
  // =========================================================

  form.addTextItem()
    .setTitle(
      'NOME DA EQUIPE, se tiver (não é obrigatório). ' +
      'Concorre pela soma dos pontos de todos participantes ' +
      '(premio participação e força)'
    )
    .setRequired(false);


  // =========================================================
  // CIDADE
  // =========================================================

  form.addTextItem()
    .setTitle('CIDADE:')
    .setRequired(true);


  // =========================================================
  // CADASTRO CBX
  // =========================================================

  form.addTextItem()
    .setTitle('QUAL O SEU CADASTRO (ID) NA CBX ?')
    .setHelpText(
      'Se este é o seu primeiro Torneio valendo Rating CBX, terá que ' +
      'preencher a ficha de cadastro até o final do Torneio, neste é o link: ' +
      'https://www.cbx.org.br/cadastro\n\n' +
      'É GRATUITO, fácil, rápido e necessário para as outras etapas. ' +
      'Este é o primeiro movimento para ser um Samurai no Xadrez.'
    )
    .setRequired(false);


  // =========================================================
  // RATING
  // =========================================================

  form.addMultipleChoiceItem()
    .setTitle('RATING')
    .setChoiceValues([
      'NÃO TENHO',
      'FIDE',
      'CBX'
    ])
    .setRequired(true);


  // =========================================================
  // CPF OU RG
  // =========================================================

  form.addTextItem()
    .setTitle('CPF ou RG')
    .setRequired(true);


  // =========================================================
  // PCD
  // =========================================================

  const pcd = form.addMultipleChoiceItem();

  pcd.setTitle('PESSOA COM DEFICIÊNCIA (PCD)')
    .setChoiceValues([
      'Sim',
      'Não'
    ])
    .showOtherOption(true)
    .setRequired(true);


  // =========================================================
  // EMAIL
  // =========================================================

  const email = form.addTextItem();

  email.setTitle('E-mail')
    .setRequired(true);

  // validação simples de e-mail
  const emailValidation =
    FormApp.createTextValidation()
      .requireTextIsEmail()
      .setHelpText('Digite um endereço de e-mail válido.')
      .build();

  email.setValidation(emailValidation);


  // =========================================================
  // TELEFONE
  // =========================================================

  form.addTextItem()
    .setTitle('Telefone')
    .setRequired(true);


  // =========================================================
  // CONFIGURAÇÕES DO FORMULÁRIO
  // =========================================================

  form.setConfirmationMessage(
    'Inscrição realizada com sucesso! ' +
    'Sua participação no Vº Aberto Escolar foi registrada.'
  );

  form.setProgressBar(false);

  form.setAcceptingResponses(true);


  // =========================================================
  // CRIAR PLANILHA PARA AS RESPOSTAS
  // =========================================================

  const planilha = SpreadsheetApp.create(
    'Respostas - Vº Aberto Escolar - Xadrez IFRS Alvorada'
  );

  form.setDestination(
    FormApp.DestinationType.SPREADSHEET,
    planilha.getId()
  );


  // =========================================================
  // MOSTRAR LINKS
  // =========================================================

  Logger.log('========================================');
  Logger.log('FORMULÁRIO CRIADO COM SUCESSO');
  Logger.log('========================================');

  Logger.log('Link para EDITAR:');
  Logger.log(form.getEditUrl());

  Logger.log('Link para INSCRIÇÕES:');
  Logger.log(form.getPublishedUrl());

  Logger.log('Planilha de respostas:');
  Logger.log(planilha.getUrl());
}
