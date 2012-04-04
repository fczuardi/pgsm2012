# Dissertações e Teses
* OK - Modificar o upload form para conter campos extras:
  * OK - Ano de publicação
  * OK - Autor
  * OK - Orientador
  * OK - Co-orientadores
  * OK - Tipo (Tese/Dissertacao/Dissertação de Mestrado/Dissertacao Doutorado)
* TBD - Search funcionando
* TBD - Search highlight nos resultados
* - lista das ultimas teses do site (?page=2)
  * TBD - pagination nesta lista
  * TBD - Ajax carregar mais itens
* TBD - retirar select hardcoded 1997/2011 fazer ficar dinamico somehow
* TBD - colocar a sombra separadora


# Home

* OK - Lightbox para a galeria de fotos (cor 05212a (5,33,42) com 90% de opacidade)
* OK - Colocar videos novos
* OK - Popular com as fotos enviadas
* TBD - Lightbox gallery trocar fonte do texto para a que a gente usa e colocar tudo caixa alta
* TBD - Colocar placeholder de foto estatica no vídeo
* DEPLOY_DAY - Testar video fallback para flash em browsers sem html5 video


# Ingresso

* TBD - sub-sessoes colapsaveis
* TBD - carregar links via ajax


# Orientadores

* TBD - se for customizar o plugin user photo para atualizar programaticamente procure por nop codigo update_usermeta
* TBD - Prefill de conteudo na pagina de "adicionar novo orientador"
* TBD - carregar mais(paginacao) com ajax
* TBD - Pagina individual de orientador
* TBD - mudar comportamento do Botão de imprimir
* LATER - Endereço profissional e biografia retiradas do Lattes


# CSS

* TBD - colocar a setinha no submenu (exemplo: depois de orientadores e alunos)
* TBD - colocar sombra no topo do submenu


# Geral

* TBD - favicon, ipod icon, etc
* TBD - startup images? https://gist.github.com/472519
* TBD - home screen icon para iDevices


# Disciplinas

* TBD - Botao Mais Disciplinas carregar ajax
* TBD - Expand / Colapse animado
* DEPLOY_DAY - trocar de volta o limite de numero de disciplinas por pagina para o default escolhido


# Notícias

* TBD - Botao Mais Noticias carregar ajax
* TBD - Expand / Colapse animado
* DEPLOY_DAY - trocar de volta o limite de numero de noticias por pagina para o default escolhido


# Histórico

* TBD - texto / conteudo da pagina


# Resultado de buscas (disciplinas e notícias)

* TBD - layout igual a lista de disciplinas
* TBD - layout da pagina de nothing found
  * TBD - Nenhuma disciplina encontrada é o título
  * TBD - campo para pequisar de novo
* TBD - titulo DISCIPLINAS QUE CONTÉM: <termo de busca>
* LATER - termo de busca highlited? (noticias search only?)


# Páginas individuais

* TBD - notícia
* TBD - disciplina
* TBD - orientador
* TBD - aluno


# Versão para Impressão

* TBD - Mudar a fonte para a mesma da página
* TBD - Caixa alta nos títulos
* TBD - sumir com o "No Comments"
* TBD - sumir com o horario apos a @
* TBD - tentar localizar os textos \"posted by\", \"article printed from\", \"url to article\", \"urls in this post\"
* TBD - ver como imprimir apenas um pedaço em páginas que tem expand/colapse (ex professores)
* TBD - tentar pular a pagina de print
* TBD - usar o papel timbrado?


# Bugs

* TBD - na pagina de documentos, o link secretaria tem que apontar para algum lugar
* TBD - listagem de noticias tem que ser collapsible
* TBD - titulos dos posts vem com (Português) quando outra lingua está selecionada
* TBD - imagens das entidades relacionadas somem quando muda de lingua
* TBD - clicar em qqer regiao de um orientador aberto da colapse no post
* TBD - busca da tela de nothing found nao pode buscar em tudo se veio da pagina de disciplinas, orientadores, etc
* TBD - IE6/7 support ou redirect p/ instalacao do chrome frame ou update
* TBD - Search results está vindo com a caixa de entidades relacionadas
* TBD - quando muda para ingles ou espanhol, o separador | está aparecendo
* TBD - ver como tirar atributo title dos itens do menu
* TBD - Pagina de disciplina individual deve ter o menuitem "disciplinas" como o selecionado
* TBD - Pagina de noticia individual deve ter o menuitem "noticias" como o selecionado
* DEPLOY_DAY - URLs das imagens quebram quando online (www) e nas paginas de impressao
* LATER - entidades relacionadas está hardcoded no template, isto é feio/errado
* LATER - footer.php está com endereços e telefones hardcoded, isto é feio/errado
* NEVER - Editor visual do wordpress arranca paragrafos


------------------------------------------------------------------------------

# Lembretes

* DEPLOY_DAY - Quando instalar ativar os plugins 
* DEPLOY_DAY - Quando instalar selecionar a opção de usar home e posts page estaticas

------------------------------------------------------------------------------

# Documentacoes

## Simples
* Como adicionar um professor?
  * adicionar wordpress user com role de Author.
  * criar nova pagina de Orientador credenciado
* Como adicionar um ex-Orientador?
* Como adicionar uma notícia?
* Como adicionar um post na pagina de um professor?
* Como adicionar uma disciplina?
* Como mudar as fotos da galeria da home page?
* Como cadastrar novos alunos?
* Como traduzir uma página.
* Como um professor pode mudar sua foto, links e website.

## Perigosas
* Atualizar o wordpress.
* Instalar ou atualizar plugin de wordpress.
* Mudar rodapé, localização ou sites de interesse.

------------------------------------------------------------------------------

# FUTURE

* (future) trocar URL dos videos para uma versão no archive.org ou no servidor da USP (p/ sair da conta do GStorage do fabricio)

## Template functions

* OK - create and pre-fill default pages with the content of pages\_content folder, update if pages_content is newer
* (future) rewrite function boilerplate\_posted\_on


## Template localization

* (future) translate to english and spanish all __() and _e() strings of pgsm-boilerplate-child
* (future) translate "Mais Notícias" button

## Dev server (pgsm.nulo.com.br)

* OK - script to update code
* (never) script to sync database
* (never) run this scripts automatically via cron or URL ping

------------------------------------------------------------------------------


# Home

* OK - Menu: hover com borda arredondada
* OK - Cabeçalho: título e descrição posicionados
* OK - Sidebar: mudar título para \"últimas notícias\"
* OK - Sidebar: Horario e título na posição / formato corretos, separadores entre as noticias
* OK - Sidebar: ícone RSS linkando p/ o feed
* OK - Header: seletor de línguas, funcionalidade
* OK - Header: seletor de línguas, posição / tamanho
* OK - Conteúdo: html da home, video embed
* OK - Conteúdo: html da home, grid de fotos
* OK - Conteúdo: css dos títulos Video institucional e fotos
* OK - Bug: remover bool(false) da nav bar
* OK - Sidebar: link \"ler todas as notícias\"
* OK - Sidebar: widget Entidades Relacionadas

# Página de "todas as notícias"

* OK - incluir "publicado por PGSM"
* OK - Expand / Colapse das noticias individuais
* OK - Css da dobra/resquicio de divisor depois do titulo da noticia
* OK - Botao mais noticias no mesmo estilo css do "abrir no google mapas"

# Disciplinas

* OK - Post type disciplina
* OK - pagina disciplinas lista todos os posts de tipo disciplina

# Orientadores

* OK - Listagem por categoria credenciados
* OK - Listagem por categoria ex-orientadores
* OK - ordenar alfabeticamente por nome
* OK - custom fields add to meta box: ```http://codex.wordpress.org/Function_Reference/add_meta_box```
* OK - como colocar o titulo na frente do nome (Prof. Dr. e Prof. Dra. por exemplo)
* OK - categorias credenciados e exorientador nao deveriam aparecer na tela de post comum
  * OK - trocar por custom field
* OK - orientador tem que ter metadado com o username para listar os posts
* OK - lattes, twitter, wikipedia, lattes, etc: http://justintadlock.com/archives/2009/09/10/adding-and-using-custom-user-profile-fields ou http://thomasgriffinmedia.com/blog/2010/09/how-to-add-custom-user-contact-info-in-wordpress/
* OK - Template html e css para pagina de um orientador
* OK - Aside
  * OK - Profile picture
  * OK - Últimos Posts
    * OK - Preencher link com RSS dos ultimos posts
    * OK - Link para ler todos os posts
    * OK - Pagina com todos os posts
  * OK - Links relacionados

# CSS
* OK - fazer o orientadores no menu ter hover também
* OK - remover selecao pink
* OK - h2 das listas de post (ex noticias nao tem margin-bottom), os de subtitulo tipo Ingresso/introducao tem (30px)
* OK - na home ultimas noticias e entidades relacionadas precisam ser do mesmo tamanho de video institucional e fotos
* OK - arrumar broken images da sidebar no nulo.com.br
* OK - tamanho do "Download video: WebM format | MP4 format" tem que ser igual ao do "ler todas as noticias"
* OK - tirar seleção rosa
* OK - links undeline no hover (para padronizar com os de baixo)

## Credenciados

* OK - Adicionar Professor
* OK - Lista colapsável

# Sites de interesse

* OK - gerar todos os pngs dos logos
* OK - decidir se eles vao como gallery ou parte do template

# Localização

* OK - Botão de imprimir
* OK - Google maps embed
* OK - Botão \"Abrir no Google Mapas\"

# Ingresso

* OK - menu funcionando com sub-páginas
* OK - mestrado e doutorado como sub-paginas
* OK - pagina de mestrado
* OK - pagina de doutorado

# Regulamento

* OK - até 2008
* OK - a partir de 2009

# Documentos

* OK - Uma página cheia de attachments

# custom post types

* OK - Disciplina
* OK - Orientador
* OK - Post de Professor (nao é mais custom type)
* OK - para customizar a listagem de posts customizados http://yoast.com/custom-post-type-snippets/
* OK - Aluno

