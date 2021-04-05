const help = (prefix) => { 
	return ` *BOT HIOKASE*

  ----------------------------------
➤ *SUA INFORMAÇÃO*
  ❖ *Prefixo* : 「  ${prefix}  」
  ❖ *Nome* : ${pushname}
  ❖ *Dinheiro* : *Rp.${uangku}.-*
  ❖ *Função : *${role}*
  ❖ *Nível* : ${getLevelingLevel(sender)}
  ❖ *Xp* : ${getLevelingXp(sender)}/${reqXp} 
  ❖ *Número* : wa.me/${sender.split("@")[0]}
  ----------------------------------
      
      𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘼𝘿𝙄𝘾𝙄𝙊𝙉𝘼𝘿𝙊𝙎 𝙍𝙀𝘾𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀𝙎:
     
   ➦  *${prefix}gay* = sua porcentagem de gay
   
   ➦ *${prefix}nazista* =sua porcentagem nazista
   
   ➦ *${prefix}frioecalculista* = sua porcentagem estilo peaky blinders
     
   ➦ *${prefix}corno* = sua porcentagem corno

   ➦ *${prefix}punheteiro* = sua porcentagem de punheteiro

   ➦ *${prefix}gado* = sua porcentagem de gado

   ➦ *${prefix}inteligência* = sua porcentagem de inteligência
         
             
         𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 
➦ */appbot*
➢ *O MAIS NOVO E MELHOR APP DE BOTS E DENTRE OUTROS* digite: appbot para vê
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}perfil*
➢ SEU PERFIL
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}menudeimagens*
➢ MENU DE IMAGENS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}hentaifig*
➢ FIGURINHA HENTAI
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}antifake*
➢ ANTI NÚMERO FAKE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}gerarcartão*
➢ GERAR CARTÃO ALEATÓRIO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈

           𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎


➦ *${prefix}info*
➢ INFORMAÇÕES
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}termos*
➢ TERMOS/REGRAS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}reportar*
➢REPORTAR BUG ( ESTA EM MANUTENÇÃO)
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}solicitação*
➢PEDIR/SOLICITAR ALGUMA COISA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}listadeblock*
➢LISTA DE BLOQUEADOS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}ping*
➢RAPIDEZ
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}comprarprem*
➢COMPRAR O RECUSSO PREMIUM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈

  𝙈𝙀𝙉𝙐 𝙋𝘼𝙍𝘼 𝙂𝙍𝙐𝙋𝙊𝙎
  
➦ *${prefix}bemvindo* [1/0]
➢DAR BOAS VINDAS QUANDO ALGUÉM ENTRAR
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}nsfw* [1/0]
➢MODO ANIME/NSFW
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}antilink* [1/0]
➢MODO ANTI-LINK MEMBROS NÃO PODERÃO MANDAR LINK
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}nivelamento* [1/0]
➢RECUSSO DE NÍVEL/LEVEL
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}antipalavrão* [1/0]
➢ANTI-PALAVRÃO NÃO PODERÃO XINGAR
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}simih* [1/0] 
➢RECUSSO SIMI-SIMI
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}promover* [@tag]
➢PROMOVER ALGUÉM PARA ADM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}rebaixar* [@tag]
➢TIRAR ADM DE ALGUÉM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}marcar*
➢MARCAR TODOS PARTICIPANTES DO GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}adms*
➢LISTA DE ADMS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}listaprem*
➢LISTA DE PESSOAS COM O PREMIUM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}listaban*
➢LISTA DE PESSOAS PROIBIDAS DE USAR O BOT
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}listadeblock*
➢LISTA DE BLOQUEADOS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}linkgp*
➢MANDAR LINK DESTE GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}mineração*
➢MINERAÇÃO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}hidetag*
➢MARCAR PESSOAS COM UMA MENSAGEM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}listagrupo*
➢LISTA DE GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}add [55]*
➢ADICIONAR ALGUÉM NO GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}banir* [@tag]
➢BANIR ALGUÉM DO GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}mudarnome*
➢MUDAR NOME DO GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}mudardesc*
➢MUDAR DESCRIÇÃO DO GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}mudarfoto*
➢MUDAR FOTO DO GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}adms*
➢LISTA DE ADMINISTRADORES 
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}linkgp*
➢LINK DO GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}sair*
➢SAIR DO GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}mineração*
➢MINERACÃO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}nível*
➢SEU NÍVEL/LEVEL
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}grupo [abrir/fechar)*
➢FECHAR OU ABRIR GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈

  𝙈𝙀𝙉𝙐 𝘼𝙋𝙀𝙉𝘼𝙎 𝙋𝘼𝙍𝘼 𝙊 𝙉𝘼𝘽𝙐𝙏𝙊

➦ *${prefix}tm*
➢FAZER UMA TM PARA TUDOS USUÁRIOS DO BOT
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}addpalavrão*
➢ADICIONAR PALAVRÃO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}delpalavrão*
➢REMOVER PALAVRÃO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}tmgp*
➢TM APENAS PARA MEMBROS DO GRUPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}banirtodomundo*
➢BANIR TODO MUNDO 😳
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}setreply*
➢RESPOSTA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}mudarprefixo*
➢MUDAR O PREFIXO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}apagarchat*
➢APAGAR TODAS CONVERSAS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}block*
➢BLOQUEAR ALGUÉM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}desbloquear*
➢DESBLOQUER ALGUÉM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}sair*
➢SAIR
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}evento [1/0]*
➢RECUSSO EVENTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}pegarperfil*
➢PEGAR PERFIL DE ALGUÉM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}mudarperfil*
➢MUDAR PERFIL
◈ ━━━━━━━ ◆ ━━━━━━━ ◈

  𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾̧𝙊̃𝙀𝙎
  
➦ *${prefix}covid-19*
➢INFORMAÇÕES DE COVID
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}infonúmero*
➢INFORMAÇÕES DE NÚMERO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}infoterremoto*
➢INFORMAÇÕES DE TERREMOTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}infoclima*
➢INFORMAÇÕES DO CLIMA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}infofilme*
➢INFORMAÇÕES DE FILME
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}apkpure*
➢APP APK
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}letra*
➢LETRA DE MÚSICA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}pesquisarfilme*
➢PESQUISAR FILME
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}nickff*
➢NICK FREE FIRE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈

  𝙈𝙀́𝘿𝙄𝘼 𝙈𝙀𝙉𝙐/𝙇𝙊𝙂𝙊/𝙎𝙏𝙄𝘾𝙆𝙀𝙍
  
➦ *${prefix}sticker*
➢FAZ FIGURINHA (FIGURINHA ANIMADA ATÉ 6s)
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}ttp*
➢EM MANUTENÇÃO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}attp*
➢FIGURINHA COM O SEU TEXTO COLORIDO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}caderno*
➢ESCREVER EM CADERNO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}caderno2*
➢ESCREVER EM CADERNO ²
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}shadow*
➢TEXTO EM SOMBRA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}cup*
➢LOGO COPO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}cup1*
➢LOGO COPO ¹
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}romancetext*
➢TEXTO COM CORAÇÃOZINHO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}smoke*
➢TEXTO FUMAÇA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}papelqueimando*
➢LOGO PAPEL QUEIMADO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}lovemessage*
➢LOGO LOVER
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}undergrass*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}love*
➢LOGO LOVE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}coffe*
➢LOGO CAFÉ
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}woodheart*
➢CORAÇÃO DE MANDEIRA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}flowerheart*
➢CORAÇÃO FLOR
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}woodenboard*
➢TABUA MANDEIRA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}summer3d*
➢VERÃO 3D
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}nature3d*
➢LOGO NATUREZA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}underwater*
➢EM BAIXO D'ÁGUA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}golderrose*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}summernature*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}letterleaves*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}glowingneon*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}fallleaves*
➢
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}flamming*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}harrypotter*
➢LOGO harrypotter
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}carvedwood*
➢LOGO 
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}wetglass*
➢
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}multicolor3d*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}watercolor*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ ${prefix}luxurygold
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}galaxywallpaper*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}lighttext*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}beautifulflower*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}puppycute*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}royaltext*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}heartshaped*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}birthdaycake*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}galaxystyle*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}hologram3d*
➢
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}glossychrome*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}greenbush*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}metallogo*
➢LOGO METAL LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}noeltext*
➢LOGO NOEL
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}glittergold*
➢LOGOO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}textcake*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}starsnight*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}wooden3d*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}textbyname*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}writegalacy*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}galaxybat*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}snow3d*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}birthdayday*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}goldplaybutton*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}silverplaybutton*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}freefire*
➢LOGO FREE FIRE 
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}tahta*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}darkneon*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}candlemug*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}lovemsg*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}mugflower*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}narutobanner*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}paperonglass*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}romancetext*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}shadowtext*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}coffeecup*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}coffeecup2*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}glowingneon*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}underwater*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}hpotter*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}woodblock*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}gplaybutton*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}splaybutton*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}barcode*
➢BAR CODE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}qrencode*
➢QR
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}ttp*
➢MANUTENÇÃO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}attp*
➢STICKER TEXTO ANIMADO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}jokerlogo*
➢JOKER LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}calendermaker*
➢LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}pornhub*
➢LOGO PORN HUB
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}googletext*
➢LOGO GOOGLE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}glitchtext*
➢LOGO GLITCH
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}crosslogo*
➢CROSS LOGO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}naruto*
➢NARUTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}flowertext*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}silktext*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}flametext*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}glowtext*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}skytext*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}cslogo*
➢CS LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}lithgtext*
➢LOGO TEXTO LUZ
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}crismes*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}bneon*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}matrix*
➢LOGO TEXTO MATRIX
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}breakwall*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}dropwater*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}leavest*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}logobp*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}phcomentário nome|nome/texto*
➢LOGO TEXTO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈

  𝙄𝙈𝘼𝙂𝙀𝙈 𝙀𝘿𝙄𝙏𝘼𝘿𝘼
  
➦ *${prefix}wanted*
➢PROUCURADO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}gtav*
➢IMAGEM GTA V
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}armacruzada*
➢IMAGEM ARMAS CRUZADAS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}queimar*
➢IMAGEM QUEIMANDO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}facebook*
➢IMAGEM EDITADA DO FACE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}notebook*
➢IMAGEM EDIT NOTEBOOK
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}praiaanoite*
➢IMAGEM EDIT PRAIA DE NOITE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}lápis*
➢EDIT LÁPIS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
 
     𝙈𝙀𝙉𝙐 𝘼𝙋𝙆
   
➦ *${prefix}apkpure*
➢APP APK PURE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}happymod*
➢HAPPY MOD
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}moddroid*
➢MOD ANDROID
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
 
  𝙈𝙀𝙉𝙐 𝘿𝙀 𝙈𝙄́𝘿𝙄𝘼 𝙀 𝙎𝙏𝘼𝙇𝙆
  
➦ *${prefix}brainly*
➢BRAINLY
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}pinterest*
➢PEGAR IMAGEM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}receitas*
➢RECEITAS KKKK
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}instastalk*
➢STALKEAR INSTAGRAM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}bitly*
➢...
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}tiktokstalk* 
➢STLAKEAR TIK TOK
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}printweb*
➢TIRAR PRINT DO SITE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}kbbi*
➢...
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}meme*
➢MEME
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}memeindo*
➢MEMEINDO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}github*
➢STALKEAR GIT HUB
◈ ━━━━━━━ ◆ ━━━━━━━ ◈

 
  𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿
  
➦ *${prefix}joox* 
➢JOOX
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}ytpesquisa*
➢PESQUISAR
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}ytmp4* 
➢BAIXAR VÍDEO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}ytmp3* 
➢BAIXAR ÁUDIO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}play*
➢EM MANUTENÇÃO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
 
  𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙉𝙄𝙈𝙀
  
➦ *${prefix}abraço*
➢STICKER ABRAÇO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}beijo*
➢STICKER BEIJO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}husbu*
➢HUSBU ANIME
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}animealeatório*
➢ANIMES ALEATÓRIOS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}waifu*
➢WAIFU
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}animemenino*
➢FOTOS/GIF DE PERSONAGENS MENINOS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}animemenina*
➢FOTOS/GIF DE PERSONAGENS MENINAS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}animeimg*
➢ANIME IMAGENS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}loli*
➢FOTOS DE LOLI
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}shota*
➢IMAGEM SHOTA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}neko*
➢FOTO NEKO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}abraçofeliz*
➢GIF ABRAÇO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}animechorando*
➢ANIME CHORANDO STICKER
◈ ━━━━━━━ ◆ ━━━━━━━ ◈

   𝙈𝙀𝙉𝙐 𝙉𝙎𝙁𝙒
 
➦ *${prefix}randomhentai* 
➢HENTAI ALEATÓRIO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}hentai*
➢HENTAI
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}randomsfw*
➢MANUTENCÃO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}randomnsfw*
➢MANUTENCÃO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}nsfw*
➢ATIVAR/DESATIVAR
◈ ━━━━━━━ ◆ ━━━━━━━ ◈
➦ *${prefix}nsfwneko*
➢NEKO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 

  𝙄𝙈𝘼𝙂𝙀𝙉𝙎 𝘼𝙇𝙀𝘼𝙏𝙊́𝙍𝙄𝘼𝙎
  
➦ *${prefix}estética*
➢FOTOS ESTÉTICA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}fotomulher* 
➢FOTOS ALEATÓRIA DE MULHER
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}doraemon* 
➢FOTOS DORAEMON
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}pokemon* 
➢FOTOS POKÉMON
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}gato*
➢FOTOS DE GATINHOS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈  
➦ *${prefix}hamster* 
➢FOTOS DE HAMSTER
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}coelho* 
➢FOTOS DE 🐰
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}freefireimg* 
➢FOTOS FREE FIRE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}soldados* 
➢FOTOS DE SOLDADOS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}shota* 
➢FOTO SHOTA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}neko* 
➢FOTO NEKO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}fotosbts*
➢FOTOS DE BTS🤢
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}fotosgame*
➢FOTOS GAMES/JOGOS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 

  𝙇𝙄𝙈𝙄𝙏𝙀 𝙀 𝘿𝙄𝙉𝙃𝙀𝙄𝙍𝙊   
 
➦ *${prefix}limite*
➢SABER SEU LIMITE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}comprarlimite*
➢COMPRAR LIMITE
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}comprarlimiteprem*
➢COMPRAR LIMITE PREMIUM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}transferir*
➢TRANSFERIR
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
 
 𝙁𝙀𝙍𝙍𝘼𝙈𝙀𝙉𝙏𝘼𝙎
➦ *${prefix}toimg*
➢TRANSFORMA STICKER EM IMAGEM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}cameralenta*
➢DEIXAR EM CÂMERA LENTA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}gordo*
➢DEIXAR GORDO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈  
➦ *${prefix}ocr*
➢PEGAR TODAS PALAVRAS POSSÍVEIS DE UMA IMAGEM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}tts pt*
➢converter texto em áudio
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}calculadora*
➢CALCULADORA
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
 
 𝘼𝙍𝙈𝘼𝙕𝙀𝙉𝘼𝙍

➦ *${prefix}addsticker*
➢ADICIONAR STICKER
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}obtersticker*
➢OBTER STICKER
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}listasticker*
➢LISTA STICKER
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}addvideo*
➢ADICIONAR VÍDEO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix} obtervídeo*
➢OBTER VÍDEO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}listadevídeo*
➢LISTA DE VÍDEOS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}obterimagem*
➢OBTER IMAGEM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}addimagem*
➢ADICIONAR IMAGEM
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}listadeimagem*
➢LISTA DE IMAGENS
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}addaudio*
➢ADICIONAR ÁUDIO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}getaudio*
➢OBETER ÁUDIO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 
➦ *${prefix}audiolist*
➢LISTA DE ÁUDIO
◈ ━━━━━━━ ◆ ━━━━━━━ ◈ 

 *SOBRE BOT*
➦ Nome : ${client.user.name}
➦ Navegador : ${client.browserDescription[1]}
➦ Servidor : ${client.browserDescription[0]}
➦ Versão : ${client.browserDescription[2]}
➦ Velocidade : ${process.uptime()}
➦ Móvel : ${client.user.phone.device_manufacturer}
➦ Versão Whatsapp : ${client.user.phone.wa_version}
 
Hokase owna
 
📄NOTA : 
1. *[ MANUTENÇÃO ]* Se houver um sinal de manutenção ... significa que o recurso está com erro e está sendo reparado😊

2. Se você ligar ou flodar comandos = * BLOCK + BAN*`
}

exports.help = help