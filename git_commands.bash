# Git Commands

# Trabalha com Snapshot dos arquivos. 
# Tira um Snapshot de todos os arquivos no momento do commit

# Untracked - Arquivos que ainda não foram adicionados e o Git não o conhece 
# Unmodified - Arquivo que foi adicionado, mas não foi modificado (arquivo novo)
# Modified - Arquivo que foi modificado (após alterar o arquivo)
# Staged - Após modificar, criar a versão do arquivo e commitar (após o git add, deixar o arquivo preparado para ser commitado)
# Após executar o commit, arquivos voltam para "unmodified"

####
# Comando para definir globalmente o nome do usuario
git config --global user.name "Renato Babata"

####
# Comando para definir globalmente o email
git config --global user.email "babatarenato@gmail.com"

####
# Comando para listar informações do git config
git config --list

####
# Inicializar o repositório (precisa estar no diretório)
git init 

# Após inicializar o diretório, para verificar informações do git acessar o diretório ".git"

####
# Comando para verificar status do git
git status

####
# Comando para adicionar o arquivo no Git
git add <nome_do_arquivo>

####
# Comando para executar o commit '-m' é usado para adicionar um comentário
# Esse comando vai gerar um Snapshot 
git commit -m "<comentário>" 

# Após executar o commit, será exibido uma mensagem :
#[master (root-commit) 40dabee] Add Readme -> "40dabee" é o id da versão do Snapshot, para voltar para essa versão é necessário usar esse ID 
# 1 file changed, 3 insertions(+) -> Significa que 1 arquivo foi alterado, com 3 linhas inseridas

####
# Comando para exibir o log 
git log

# Optional
git log --decorate #(mostra mais informações. De qual branch para qual branch)
git log --author="Renato" #(mostra os commits feito por determinado autor)
git shortlog #(mostra um resumo de todos os commits de todas as pessoas)
git shortlog -sn #(mostra só a quantidade de commits de cada pessoa)
git log --graph #(mostra em forma gráfica os commits)

####
# Comando para verificar as mudanças (diff). Utilizado para verificar as alterações antes de executar o commit
# Importante
git diff

# Optionalgit diff --name-only (verificar apenas os nomes dos arquivos

####
# Comando para voltar a versão anterior ANTES de dar o git add
git checkout <nome_do_arquivo>

####
# Comando para voltar a versão anterior APÓS dar o git add
git reset HEAD <nome_do_arquivo>

# Extra
git reset <hash> --soft #(Apenas cancela o commit, mas volta o arquivo para o estado Estaged)
git reset <hash> --mixed #(Cancela o commit, volta os arquivos para Modified)
git reset <hash> --hard #(Cancela tudo. Inclusive as alterações)


####
# Conectar o Git com o Github
# https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
# Comando para criar uma chave ssh 
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"  

# Inserir a chave gerada no git nas configurações do github
# https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account
cd ~/.ssh

# Copiar o conteúdo do arquivo
less id_rsa.pub
# Settings -> SH and GPG keys -> New SSH Key -> Insert the Key value -> Add SSH Key


####
# Comando para adicionar o github remoto. notes é o nome que escolhi para ficar de acordo com o diretorio notes
git remote add note https://github.com/renatobabata/Notes.git

# Extra 
# Verificar informações do remote
git remote -v

# Para enviar o arquivo da branch local para o remoto
# git push -u <para_onde_vai> <de_onde>
git push -u notes master

####
# Comando para clonar repositório
git clone <endereço do repositório> <nome que quiser colocar no repositório>

####
# Fork é utilizado para clonar repositórios que não sou o dono, contribuir em um projeto de outra pessoa por exemplo.
# Com o Fork, após você realizar suas alterações, você pode enviar para o dono commitar

####
# Branch é um ponteiro móvel que leva a um commit 
# Vantagem:
# -Poder modificar sem alterar o master
# -Facilmente "desligável"
# -Múltiplas pessoas trabalhando
# -Evita conflitos

# Comando para criar branch
# git checkout -b <nome da branch>
git checkout -b teste

# Comando para verificar em qual branch você está
git branch

# Comando para mudar de branch
# git checkout <nome da branch>
git checkout teste

# Comando para deletar branch
git branch -D teste

####
# Comando para Merge (executar no master)
git merge <nome_da_branch>

####
# Comando para Rebase (executar no master)
git rebase <nome_da_branch>


