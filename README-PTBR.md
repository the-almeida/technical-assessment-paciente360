# technical-assessment-paciente360

Avaliação técnica para a posição de Engenheiro de Software Full-stack Sênior na Paciente 360.

Dividi a atividade em 3 serviços Dockerizados, **PostgreSQL Database**, **Front-end usando Angular/MaterialUI** e **Back-end usando Node/Express/Prisma**.

Manterei ambas as aplicações no mesmo repositório para facilitar o compartilhamento. Você também encontrará mais detalhes sobre cada serviço em seus respectivos README.MD


---

### Pré-requisitos:
- Docker
- Portas 80, 3000 e 5432 disponíveis

## Como configurar o projeto:

Criei um arquivo **docker-compose.yml** para configurar os três serviços (PostgreSQL, FrontEnd e BackEnd), então você só precisa executar o comando abaixo e esperar.

Certifique-se de que as portas 80, 3000 e 5432 não estão em uso.

```shell
docker-compose up
```
 OBS: Com esse comando o terminal ficará bloqueado exibindo os logs do nginx. Você também pode usar  ```sudo docker-compose up -d``` para levantar os containeres em segundo plano.

 > ☕ Agora você pode pegar um cafézinho, pois leva alguns minutos para buildar tudo pela primeira vez. ☕

 ### Pronto! Já deve estar tudo funcionando, acesse http://localhost:80**


