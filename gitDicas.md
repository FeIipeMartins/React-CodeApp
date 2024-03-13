## Alguns comando úteis de git:

- git clone url:  
clona o repositório remoto para local  
  
- git pull origin "branchName":  
recebe todas as atualizações da branch atual em seu repositório local  
  
- git status:  
mostra o estado atual do seu repositório. Arquivos novos, modificados, etc  
  
- git add . :  
prepara o pacote para ser commitado. Recomendado usar o comando no diretório  
root do repositório, para que pegue todos os sub-diretórios  
  
- git commit -m "mensagem":  
prepara o commit para ser enviado para o repositório remoto  
  
- git push origin "branchName":  
envia as alterações já commitadas para o repositório remoto  
  
- git checkout -b "newBranch":  
cria uma nova branch a partir da atual  
  
---- Mergin Branches ----  
- git status:  
verifica em qual branch você está. Se for necessário troque de branch  
  
- git checkout "branchName":  
muda para um branch existente  
  
- git fetch:  
para atualizar os últimos commits remotos  
  
- git pull:  
atualiza os últimos commits remotos  
  
- git merge "branchName":  
junta a branch citada com a branch atual, que você está no momento  
  
----- Reset Hard -----  
- Verifique qual código hash do commit anterior você quer resetar. Você  
pode usar o git log ou verificar o número do commit no repositório do  
github.  
  
- git reset --hard "numeroDoHashCode":  
reseta todas as alterações para o commit usado com este hashCode.  
As alterações posteriores a este commit são perdidas.
