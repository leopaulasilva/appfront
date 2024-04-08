# Appfront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## How to access
http://appfrontsistema.s3-website.us-east-2.amazonaws.com/login

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Estoria de Usuário: Autenticação de Usuário em um Sistema de Carros

Título: Autenticação de Usuário

Descrição:
Como um usuário do Sistema de Carros, quero ser capaz de me autenticar no sistema para acessar suas funcionalidades.

Critérios de Aceitação:

Como usuário, quero ser capaz de acessar a página de login do sistema.
Como usuário, quero poder preencher meu login e minha senha para efetuar o login.
Como usuário, quero ver mensagens de erro caso insira dados inválidos.
Como usuário, quero ter a opção de mudar para a página de registro caso não tenha uma conta.
Como usuário, quero poder preencher os campos necessários para me registrar no sistema.
Como usuário, quero ver mensagens de erro caso insira dados inválidos no formulário de registro.
Como usuário, quero poder voltar para a página de login caso já tenha uma conta.
Como usuário, quero ser notificado caso minha autenticação ou registro falhe.
Notas Técnicas:

A autenticação é realizada através de chamadas HTTP para endpoints específicos no backend do sistema.
Os formulários de login e registro são implementados usando Angular e HTML, com validação de campos.
O estado da autenticação (login/logout) é mantido através do armazenamento local (localStorage) no navegador.
O backend é responsável por validar os dados de login e registro e retornar um token de autenticação válido.
Tasks:

Implementar a lógica de autenticação e registro no frontend utilizando Angular e HTML.
Integrar os formulários de autenticação e registro com as chamadas HTTP para os endpoints correspondentes no backend.
Realizar validação de campos nos formulários para garantir que os dados inseridos sejam válidos.
Exibir mensagens de erro adequadas caso ocorram falhas na autenticação ou no registro.
Testar os fluxos de autenticação e registro para garantir que funcionem corretamente em diferentes cenários.
Lidar com o armazenamento e remoção do token de autenticação no localStorage do navegador.
Notificar o usuário sobre o sucesso ou falha da autenticação ou registro.



## Estoria de Usuário: Gerenciamento de Lista de Usuários

Título: Gerenciamento de Lista de Usuários

Descrição:
Como um administrador do sistema, desejo visualizar a lista de usuários cadastrados e poder realizar operações de adição, visualização, edição e exclusão de usuários.

Critérios de Aceitação:

Como administrador, desejo visualizar a lista de usuários cadastrados.
Como administrador, desejo poder adicionar um novo usuário à lista.
Como administrador, desejo poder visualizar os detalhes de um usuário da lista.
Como administrador, desejo poder editar as informações de um usuário da lista.
Como administrador, desejo poder excluir um usuário da lista.
Como administrador, desejo receber notificações de sucesso ou falha ao realizar operações na lista de usuários.
Notas Técnicas:

A lista de usuários é exibida em uma tabela HTML responsiva.
Cada linha da tabela representa um usuário cadastrado.
Botões de ação permitem adicionar, visualizar, editar e excluir usuários.
As operações de adição, visualização, edição e exclusão são realizadas através de chamadas HTTP para o backend do sistema.
Utiliza-se o Toastr para exibir notificações ao usuário sobre o resultado das operações.
Tasks:

Implementar a lógica de listagem de usuários no frontend utilizando Angular e HTML.
Integrar a listagem de usuários com o serviço UsersService para obter a lista de usuários cadastrados.
Criar os botões de adicionar, visualizar, editar e excluir usuários na interface do usuário.
Implementar as funcionalidades de adicionar, visualizar, editar e excluir usuários utilizando chamadas HTTP para os endpoints correspondentes no backend.
Testar todas as operações da lista de usuários para garantir seu funcionamento correto em diferentes cenários.
Exibir notificações ao usuário utilizando o Toastr para informar sobre o sucesso ou falha das operações na lista de usuários.


## Estoria de Usuário: Cadastro de Novos Usuários

Título: Cadastro de Novos Usuários

Descrição:
Como um administrador do sistema, desejo poder cadastrar novos usuários para que eles possam acessar as funcionalidades disponíveis.

Critérios de Aceitação:

Como administrador, desejo ter acesso à interface de cadastro de novos usuários.
Como administrador, desejo poder preencher os campos obrigatórios de primeiro nome, último nome, e-mail, data de nascimento, telefone, login e senha.
Como administrador, desejo que o campo de e-mail valide o formato correto de endereço de e-mail.
Como administrador, desejo que o campo de senha tenha pelo menos 6 caracteres.
Como administrador, desejo receber feedback visual caso algum campo obrigatório não seja preenchido.
Como administrador, desejo receber feedback visual caso o formato do e-mail seja inválido.
Como administrador, desejo receber feedback visual caso a senha tenha menos de 6 caracteres.
Como administrador, desejo receber uma notificação de sucesso após cadastrar um novo usuário com êxito.
Como administrador, desejo que os campos do formulário sejam limpos após o cadastro bem-sucedido de um novo usuário.
Como administrador, desejo receber uma notificação de falha caso ocorra algum erro durante o cadastro de um novo usuário.
Notas Técnicas:

A interface de cadastro de novos usuários será implementada utilizando TypeScript, Angular e HTML.
Será utilizado o ReactiveFormsModule para lidar com o formulário e suas validações.
Será utilizado o ToastrService para exibir notificações ao usuário sobre o resultado das operações de cadastro.
A lógica de cadastro de novos usuários será implementada no serviço UsersService, que fará chamadas HTTP para o backend.
Tasks:

Implementar a interface de cadastro de novos usuários no frontend utilizando Angular e HTML.
Configurar o ReactiveFormsModule para lidar com o formulário de cadastro e suas validações.
Implementar a lógica de validação dos campos obrigatórios, do formato do e-mail e da senha.
Integrar a interface de cadastro com o serviço UsersService para enviar os dados do novo usuário para o backend.
Implementar a lógica para limpar os campos do formulário após o cadastro bem-sucedido de um novo usuário.
Testar a funcionalidade de cadastro de novos usuários em diferentes cenários, incluindo validações de campos e feedback visual.
Exibir notificações ao administrador utilizando o ToastrService para informar sobre o resultado do cadastro de novos usuários.


## Estoria de Usuário: Visualização de Detalhes do Usuário e Lista de Carros Associados

Título: Visualização de Detalhes do Usuário e Lista de Carros Associados

Descrição:
Como um administrador do sistema, desejo visualizar os detalhes de um usuário específico, incluindo informações pessoais e a lista de carros associados a ele.

Critérios de Aceitação:

Como administrador, desejo ter acesso à interface de visualização de detalhes do usuário.
Como administrador, desejo que a interface exiba o nome completo, endereço de e-mail, telefone, data de nascimento, data de cadastro e última data de login do usuário.
Como administrador, desejo que a lista de carros associados ao usuário seja exibida na interface, incluindo o ID do carro, ano do carro, modelo, placa e cor.
Como administrador, desejo que a lista de carros associados seja atualizada automaticamente quando houver alguma alteração nos dados.
Como administrador, desejo poder navegar de volta para a lista de usuários clicando no botão "Back".
Notas Técnicas:

A interface de visualização de detalhes do usuário e lista de carros será implementada utilizando TypeScript, Angular e HTML.
Serão utilizados serviços como UsersService e CarsService para obter os dados do usuário e da lista de carros associados.
Serão utilizadas rotas do Angular para navegar entre diferentes componentes da aplicação.
Tasks:

Implementar a interface de visualização de detalhes do usuário e lista de carros associados no frontend utilizando Angular e HTML.
Configurar rotas no Angular para navegar entre a lista de usuários e a visualização de detalhes do usuário.
Utilizar o ActivatedRoute para obter o ID do usuário a ser visualizado a partir da URL.
Implementar a lógica para buscar os detalhes do usuário e a lista de carros associados utilizando os serviços UsersService e CarsService.
Exibir os detalhes do usuário na interface, incluindo nome completo, endereço de e-mail, telefone, data de nascimento, data de cadastro e última data de login.
Exibir a lista de carros associados ao usuário na interface, incluindo ID do carro, ano do carro, modelo, placa e cor.
Testar a funcionalidade de visualização de detalhes do usuário em diferentes cenários, incluindo casos de usuários com e sem carros associados.
Garantir que a interface seja responsiva e compatível com diferentes tamanhos de tela e dispositivos.


## Estoria de Usuário: Atualização de Dados do Usuário


Título: Atualização de Dados do Usuário

Descrição:
Como usuário administrador, desejo ser capaz de atualizar os dados de um usuário existente em nosso sistema, para manter as informações corretas e atualizadas.

Critérios de Aceitação:

Ao acessar a página de atualização de usuário, o sistema deve exibir um formulário preenchido com os dados atuais do usuário a ser atualizado.
O formulário deve conter os campos de preenchimento para o primeiro nome, último nome, e-mail, data de nascimento, telefone, login e senha do usuário.
Todos os campos do formulário, exceto o ID, devem ser editáveis.
O campo de ID deve ser somente leitura (readonly).
O campo de e-mail deve validar se o formato inserido é válido.
O campo de senha deve validar se a senha tem pelo menos 6 caracteres.
Após preencher o formulário corretamente, o usuário administrador deve poder clicar no botão "Salvar" para submeter os dados atualizados.
Após submeter os dados, o sistema deve atualizar as informações do usuário no banco de dados.
Após a atualização bem-sucedida, o sistema deve exibir uma mensagem de sucesso informando que os dados foram salvos.
O sistema deve redirecionar o usuário administrador de volta à página de listagem de usuários após a atualização ser concluída com sucesso.
Caso a atualização falhe por qualquer motivo, o sistema deve exibir uma mensagem de erro e não realizar nenhuma alteração nos dados do usuário.


## História de Usuário: Adicionar Novo Carro

Título: Adicionar Novo Carro

Descrição:
Como usuário administrador, desejo ser capaz de adicionar um novo carro ao sistema, atribuindo-o a um usuário existente.

Critérios de Aceitação:

Ao acessar a página de adição de carro, o sistema deve exibir um formulário com campos para preencher os detalhes do carro.
Os campos do formulário devem incluir modelo do carro, ano do carro, cor, placa e usuário a quem o carro será atribuído.
Todos os campos do formulário devem ser de preenchimento obrigatório.
O campo de ano do carro deve aceitar apenas valores numéricos.
O campo de placa do carro deve aceitar apenas caracteres alfanuméricos.
O campo de usuário deve ser preenchido através de um menu suspenso (select) contendo uma lista de usuários disponíveis no sistema, com a opção de selecionar o usuário ao qual o carro será atribuído.
Após preencher o formulário corretamente, o usuário administrador deve poder clicar no botão "Salvar" para submeter os dados do novo carro.
Após submeter os dados, o sistema deve salvar as informações do novo carro no banco de dados, atribuindo-o ao usuário selecionado.
Após o salvamento bem-sucedido, o sistema deve exibir uma mensagem de sucesso informando que o novo carro foi adicionado.
O formulário deve ser redefinido (limpo) após o salvamento do novo carro.
Caso o salvamento falhe por qualquer motivo, o sistema deve exibir uma mensagem de erro e não realizar nenhuma alteração no banco de dados.


## História de Usuário: Visualizar Detalhes do Carro

Título: Visualizar Detalhes do Carro

Descrição:
Como usuário, desejo ser capaz de visualizar os detalhes de um carro específico, incluindo seu modelo, ano, cor, placa, data de criação e última data de login associada a ele.

Critérios de Aceitação:

Ao acessar a página de detalhes do carro, o sistema deve exibir o modelo do carro.
O sistema deve exibir o ano do carro.
Deve ser apresentada a cor do carro.
A placa do carro deve ser exibida.
O sistema deve exibir a data em que o carro foi criado no sistema, formatada no padrão "dd/MM/yyyy".
Deve ser exibida a última data de login associada ao carro, formatada no padrão "dd/MM/yyyy hh:mm".
Todos os detalhes do carro devem ser exibidos em letras maiúsculas.
O título da página deve ser "Cars details".
Deve haver um botão "Back" que permita ao usuário retornar à página anterior.
Ao receber um ID de carro válido na URL, o sistema deve recuperar os detalhes desse carro específico do servidor.
Os detalhes do carro devem ser exibidos corretamente na página após o carregamento.
Caso o ID do carro não seja válido ou não exista no sistema, o sistema deve exibir uma mensagem adequada informando que o carro não foi encontrado.

## História de Usuário: Listar Carros

Título: Listar Carros

Descrição:
Como usuário, desejo visualizar uma lista de carros cadastrados no sistema, com a capacidade de adicionar novos carros, visualizar detalhes de cada carro, editar informações existentes e excluir carros.

Critérios de Aceitação:

Ao acessar a página de listagem de carros, o sistema deve exibir um título "Car List".
A lista de carros deve ser apresentada em uma tabela responsiva.
Cada linha da tabela deve conter as seguintes colunas:
ID: Identificador único do carro.
Car year: Ano do carro.
Model: Modelo do carro.
Uma coluna com botões para visualizar detalhes, editar e excluir o carro.
A coluna "ID" deve exibir o identificador único de cada carro.
A coluna "Car year" deve exibir o ano de cada carro.
A coluna "Model" deve exibir o modelo de cada carro.
Para cada carro listado, deve haver um botão de visualização (ícone de olho), um botão de edição (ícone de lápis) e um botão de exclusão (ícone de lixeira).
Ao clicar no botão de visualização, o usuário deve ser redirecionado para a página de detalhes do carro correspondente.
Ao clicar no botão de edição, o usuário deve ser redirecionado para a página de edição do carro correspondente.
Ao clicar no botão de exclusão, o sistema deve exibir uma mensagem de confirmação, solicitando a confirmação do usuário antes de excluir o carro.
Após a exclusão bem-sucedida de um carro, o sistema deve remover o carro da lista sem recarregar a página.
Deve haver um botão "Add new car" que, ao ser clicado, abre um modal para adicionar um novo carro.
O modal de adição de novo carro deve conter um componente app-cars-new que permite ao usuário adicionar um novo carro.
Após adicionar um novo carro com sucesso, o sistema deve atualizar a lista de carros sem recarregar a página.
Caso ocorra um erro ao excluir um carro, o sistema deve exibir uma mensagem de erro apropriada.

## História de Usuário: Atualizar Informações do Carro

Título: Atualizar Carro

Descrição
Como um usuário administrador do sistema, eu gostaria de poder atualizar as informações de um carro existente no sistema, para manter os dados do carro sempre atualizados.

Critérios de Aceitação
Quando acessar a página de atualização de carro, o sistema deve exibir o formulário preenchido com as informações atuais do carro.
O usuário deve poder editar os campos do formulário: Modelo, Ano do Carro, Cor, Placa do Carro e Usuário Associado.
Todos os campos do formulário devem ser obrigatórios.
Após preencher o formulário corretamente, o usuário deve ser capaz de clicar no botão "Salvar" para submeter as alterações.
Se o formulário for submetido com sucesso, o sistema deve exibir uma mensagem de sucesso indicando que o carro foi atualizado com sucesso.
Após a atualização do carro, o sistema deve redirecionar o usuário de volta à lista de carros.
Se houver algum erro durante o processo de atualização do carro, o sistema deve exibir uma mensagem de erro adequada e não realizar a atualização.