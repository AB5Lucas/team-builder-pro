# Team Builder Pro

PROMPT TÉCNICO — SISTEMA DE PROGRAMAÇÃO OPERACIONAL INTEGRADO

CONTEXTO DO PROJETO

Construir um sistema web completo para gestão operacional de colaboradores, obras, equipes, veículos, treinamentos, transporte e benefícios.

O sistema será utilizado diariamente por uma equipe responsável por programar colaboradores em diversas obras.

A principal característica operacional é que cada obra normalmente possui uma equipe fixa/base, porém essa equipe pode sofrer alterações diariamente devido a:

Férias.

Atestados.

Folgas.

Afastamentos.

Ausências.

Trocas de colaboradores.

Mudança de demanda.

Necessidade de substituição.

Alteração de função.

Mudança de obra.

O sistema deve trabalhar com o conceito de:

EQUIPE BASE DA OBRA

e

PROGRAMAÇÃO REAL DO DIA

Esses dois conceitos devem ser independentes.

A equipe-base serve como modelo/padrão.

A programação diária representa o que realmente foi definido para aquele dia.

Alterar a programação de um dia não deve alterar automaticamente a equipe-base.

1. STACK E ARQUITETURA

Construir utilizando uma arquitetura moderna e escalável.

Preferencialmente:

React + TypeScript.

Tailwind CSS.

shadcn/ui.

Supabase.

PostgreSQL.

Supabase Auth.

Supabase Storage para documentos e fotos.

Row Level Security (RLS).

Componentes reutilizáveis.

Código organizado por módulos.

O sistema deve ser preparado para crescimento futuro.

Não criar dados fictícios como solução definitiva.

Criar banco de dados real e persistência real.

2. AUTENTICAÇÃO

Utilizar Supabase Auth.

Criar login com:

E-mail.

Senha.

Criar controle de sessão.

Criar recuperação de senha.

Criar perfis:

ADMINISTRADOR.

PROGRAMADOR.

CONSULTA.

O usuário deve possuir:

ID.

Nome.

E-mail.

Perfil.

Status ativo/inativo.

Data de criação.

3. CONTROLE DE ACESSO

Implementar RLS no Supabase.

ADMINISTRADOR

Acesso total.

PROGRAMADOR

Pode:

Visualizar colaboradores.

Criar programação.

Editar programação.

Alterar equipes diárias.

Designar veículos.

Visualizar treinamentos.

Visualizar requisitos.

Gerenciar confirmações.

CONSULTA

Somente leitura.

Garantir que as permissões sejam aplicadas tanto na interface quanto no banco de dados.

Não confiar apenas em esconder botões no frontend.

4. ESTRUTURA DO BANCO DE DADOS

Criar as seguintes tabelas principais:

users_profiles

Campos:

id

full_name

email

role

active

created_at

updated_at

Roles:

admin

programmer

viewer

collaborators

Campos:

id

registration_number

full_name

social_name

cpf

phone

email

birth_date

hire_date

position_id

department_id

sector_id

supervisor_id

status

photo_url

notes

created_at

updated_at

Status:

active

inactive

A matrícula deve ser única.

positions

Campos:

id

name

description

active

departments

Campos:

id

name

active

sectors

Campos:

id

department_id

name

active

5. OBRAS

Tabela:

works

Campos:

id

code

name

client

address

number

neighborhood

city

state

zip_code

latitude

longitude

distance_km

estimated_travel_time

start_date

expected_end_date

status

supervisor_id

manager_id

entry_time

exit_time

notes

active

created_at

updated_at

Status:

planned

active

paused

completed

cancelled

6. EQUIPE BASE DA OBRA

Criar tabela:

work_base_teams

Campos:

id

work_id

collaborator_id

position_id

start_date

end_date

active

notes

created_at

updated_at

Uma obra pode ter vários colaboradores na equipe-base.

Um colaborador pode fazer parte da equipe-base de uma obra.

Criar histórico das alterações.

IMPORTANTE:

A equipe-base não é a programação diária.

Exemplo:

Obra A possui equipe-base:

João.

Pedro.

Carlos.

Marcos.

Na segunda-feira:

João.

Pedro.

Carlos.

Marcos está de férias.

A programação de segunda-feira deve conter apenas João, Pedro e Carlos.

Porém Marcos continua pertencendo à equipe-base.

Ao retornar das férias, poderá voltar automaticamente à programação sugerida.

7. PROGRAMACÃO DIÁRIA

Criar tabela:

daily_schedules

Campos:

id

schedule_date

status

copied_from_schedule_id

created_by

updated_by

created_at

updated_at

finalized_at

Status:

draft

in_progress

finalized

Criar restrição para existir apenas uma programação por data.

8. ALOCAÇÕES DIÁRIAS

Criar tabela:

daily_allocations

Campos:

id

schedule_id

work_id

collaborator_id

position_id

vehicle_id

driver

confirmation_status

source

notes

created_at

updated_at

Confirmation_status:

confirmed

pending

Source:

base_team

copied_previous_day

manual

A alocação deve guardar uma fotografia do que foi programado naquele dia.

Se o colaborador mudar de função ou a equipe-base mudar futuramente, o histórico antigo não deve ser alterado.

9. LÓGICA DE CRIAÇÃO DA PROGRAMAÇÃO

Ao abrir uma nova data:

SE FOR DIA ÚTIL

Verificar se existe programação.

Se não existir:

Procurar a programação do dia útil anterior.

Verificar se existe programação anterior.

Se existir, copiar a programação anterior.

Se não existir, utilizar a equipe-base das obras.

Ao copiar:

Copiar colaboradores.

Copiar obras.

Copiar funções.

Copiar veículos, se aplicável.

Copiar estrutura da programação.

Depois executar novamente todas as validações.

SE FOR SÁBADO, DOMINGO OU FERIADO

Não copiar automaticamente a programação do dia anterior.

Criar programação vazia.

O programador poderá adicionar manualmente os colaboradores.

10. IMPORTANTE — PROGRAMAÇÃO NÃO ALTERA EQUIPE BASE

Quando o programador remover João da programação de terça-feira:

Não remover João da equipe-base.

Quando adicionar Lucas apenas para quarta-feira:

Não adicionar Lucas automaticamente à equipe-base.

Criar opção:

"Adicionar à equipe-base da obra"

Essa opção deve exigir confirmação.

11. TELA DE PROGRAMAÇÃO DIÁRIA

Criar uma interface otimizada para desktop.

Layout:

BARRA SUPERIOR

Exibir:

Data.

Dia da semana.

Status da programação.

Botão "Copiar programação anterior".

Botão "Usar equipe-base".

Botão "Salvar".

Botão "Finalizar programação".

PAINEL ESQUERDO

Lista:

COLABORADORES DISPONÍVEIS

Cada colaborador deve aparecer como card.

Exibir:

Nome.

Matrícula.

Função.

Status.

Indicador de confirmação.

Indicador de treinamento.

Indicador de disponibilidade.

Permitir:

Busca.

Filtro por função.

Filtro por setor.

Filtro por departamento.

Filtro por treinamento.

Filtro por CNH.

ÁREA CENTRAL

Mostrar as obras como colunas.

Exemplo:

OBRA A

Equipe programada:

[ João Silva ]
[ Pedro Santos ]
[ Carlos Oliveira ]

OBRA B

Equipe programada:

[ Lucas Garcia ]
[ Marcos Souza ]

OBRA C

Equipe programada:

[ ... ]

Permitir Drag and Drop.

12. DRAG AND DROP

Permitir:

Arrastar colaborador para obra.

Mover colaborador de uma obra para outra.

Remover colaborador da obra.

Reordenar colaboradores.

Adicionar colaborador disponível.

Quando arrastar:

Executar validação imediatamente.

13. VALIDAÇÃO AUTOMÁTICA

Antes de permitir a alocação, verificar:

Férias.

Atestado.

Folga.

Afastamento.

Status ativo.

Conflito de programação.

Treinamentos.

Certificações.

CNH.

Função.

Requisitos da obra.

Se houver bloqueio:

Mostrar:

"ALOCACÃO BLOQUEADA"

E informar o motivo.

Exemplo:

"NR-35 vencida."

Se for apenas alerta:

Permitir continuar.

Mostrar:

"ALERTA: colaborador não possui NR-35 válida."

Registrar que a alocação foi realizada com pendência.

14. REQUISITOS DAS OBRAS

Criar:

work_requirements

Campos:

id

work_id

requirement_type

requirement_id

mandatory

blocking

active

Tipos:

training

certification

position

driver_license

medical_exam

custom

Permitir definir:

Obrigatório.

Bloqueante.

15. TREINAMENTOS

Criar:

trainings

Campos:

id

name

description

validity_months

active

Criar:

collaborator_trainings

Campos:

id

collaborator_id

training_id

completed_at

expires_at

document_url

status

Status calculado automaticamente:

valid

expiring

expired

16. FÉRIAS

Criar:

vacations

Campos:

id

collaborator_id

start_date

end_date

status

notes

Não permitir programação durante férias.

17. ATESTADOS

Criar:

medical_leaves

Campos:

id

collaborator_id

start_date

end_date

document_url

notes

Não permitir programação durante o período.

18. FOLGAS

Criar:

days_off

Campos:

id

collaborator_id

date

reason

notes

19. CONFIRMAÇÃO

Na programação diária, cada colaborador deve possuir um botão de confirmação.

VERDE

CONFIRMADO

VERMELHO

AGUARDANDO CONFIRMAÇÃO

Regra padrão:

Segunda a sexta:

CONFIRMADO automaticamente.

Sábado, domingo e feriado:

AGUARDANDO CONFIRMAÇÃO.

Permitir alterar manualmente.

Registrar:

Quem alterou.

Data.

Hora.

20. VEÍCULOS

Criar:

vehicles

Campos:

id

plate

brand

model

year

color

type

passenger_capacity

fuel_type

status

notes

Status:

available

in_use

maintenance

inactive

21. MOTORISTAS

O motorista deve ser um colaborador.

Não duplicar cadastro.

Permitir marcar no colaborador:

É motorista.

Categoria CNH.

Validade CNH.

Ao selecionar motorista:

Validar CNH.

22. TRANSPORTE

Uma programação de obra pode possuir:

Veículo.

Motorista.

Passageiros.

Criar tabela:

transport_allocations

Campos:

id

schedule_id

work_id

vehicle_id

driver_id

departure_time

return_time

passenger_count

notes

Validar capacidade.

Não permitir veículo duplicado em horários conflitantes.

Não permitir motorista em duas viagens conflitantes.

23. VALE-TRANSPORTE

Criar módulo configurável.

Permitir definir:

Valor fixo.

Valor por viagem.

Valor por KM.

Associar ao motorista e/ou colaborador conforme regra configurada.

Gerar cálculo baseado na programação realizada.

24. PRÊMIO DE VIAGEM

Criar:

travel_bonus_rules

Campos:

id

minimum_distance

maximum_distance

bonus_amount

calculation_type

active

Calculation_type:

daily

trip

round_trip

O sistema deve calcular automaticamente.

Exemplo:

Obra:

150 km.

Colaborador:

Programado.

Regra:

100 a 200 km = R$ 50.

Gerar:

Prêmio = R$ 50.

Criar relatório por:

Colaborador.

Matrícula.

Obra.

Data.

Distância.

Valor.

25. OVERVIEW SEMANAL

Criar visão de segunda a domingo.

Cada dia deve mostrar:

Total de colaboradores.

Programados.

Confirmados.

Pendentes.

Férias.

Atestados.

Folgas.

Disponíveis.

Obras.

Veículos.

Permitir clicar no dia.

Ao clicar:

Abrir programação diária.

26. HISTÓRICO

Criar auditoria.

Tabela:

audit_logs

Campos:

id

user_id

action

entity_type

entity_id

old_data

new_data

created_at

Registrar alterações importantes.

27. DASHBOARD

Criar Dashboard com:

Obras ativas.

Colaboradores ativos.

Programados hoje.

Disponíveis.

Férias.

Atestados.

Folgas.

Pendentes de confirmação.

Confirmados.

Veículos utilizados.

Veículos disponíveis.

Utilizar cards e gráficos.

28. ESTRUTURA DO MENU

Menu vertical esquerdo:

Dashboard

Programação

Hoje

Programação Diária

Overview Semanal

Histórico

Colaboradores

Obras

Obras

Equipes Base

Requisitos

Veículos

Frota

Motoristas

Transporte

Treinamentos

Ausências

Férias

Atestados

Folgas

Benefícios

Vale-Transporte

Prêmio de Viagem

Relatórios

Administração

Usuários

Permissões

Configurações

Auditoria

29. EXPERIÊNCIA DO PROGRAMADOR

O fluxo principal deve ser extremamente rápido.

O programador deve conseguir:

Abrir o dia seguinte.

Ver a programação sugerida automaticamente.

Identificar quem está indisponível.

Ver os colaboradores que precisam ser substituídos.

Arrastar substitutos para as obras.

Receber alertas de requisitos.

Designar veículos.

Confirmar a programação.

Finalizar.

O sistema deve minimizar o trabalho manual repetitivo.

30. SISTEMA DE SUGESTÃO INTELIGENTE

Ao criar a programação do dia, o sistema deve gerar uma sugestão.

Prioridade:

Programação do dia anterior.

Equipe-base da obra.

Disponibilidade do colaborador.

Compatibilidade com requisitos.

Função.

Treinamentos.

Histórico de alocação.

Exemplo:

A equipe-base da Obra A possui:

João.

Pedro.

Carlos.

João está de férias.

O sistema deve sugerir:

Pedro.

Carlos.

E sinalizar:

"João indisponível — férias."

Se existir outro colaborador compatível disponível, sugerir:

"Substituto recomendado: Lucas."

A sugestão não deve alterar automaticamente a programação sem confirmação do programador.

31. CONCEITO DE PROGRAMAÇÃO

Utilizar três níveis:

EQUIPE BASE

Quem normalmente pertence à obra.

PROGRAMAÇÃO SUGERIDA

O que o sistema recomenda para determinado dia.

PROGRAMAÇÃO FINAL

O que o programador efetivamente confirmou.

Essa separação é fundamental.

32. PERFORMANCE

O sistema poderá possuir:

Centenas de colaboradores.

Dezenas ou centenas de obras.

Milhares de registros de programação.

Histórico de vários anos.

Utilizar:

Paginação.

Busca otimizada.

Índices no banco.

Lazy loading.

Queries eficientes.

Componentes reutilizáveis.

Não carregar todos os dados desnecessariamente.

33. RESPONSIVIDADE

O sistema deve funcionar em:

Desktop.

Tablet.

Celular.

Porém, a tela de programação Drag and Drop deve ter prioridade para desktop.

Em telas pequenas, criar versão alternativa com seleção por dropdown ou toque, caso Drag and Drop não seja confortável.

34. IMPLEMENTAÇÃO POR FASES

Não tentar construir toda a aplicação em uma única implementação.

Construir em fases.

FASE 1

Supabase.

Banco de dados.

Autenticação.

Perfis.

RLS.

Layout.

Menu lateral.

FASE 2

Colaboradores.

Cargos.

Setores.

Departamentos.

FASE 3

Obras.

Equipes-base.

Requisitos.

FASE 4

Treinamentos.

Férias.

Atestados.

Folgas.

FASE 5

Programação diária.

Drag and Drop.

Cópia da programação anterior.

Equipe-base.

Validações.

FASE 6

Overview semanal.

Dashboard.

FASE 7

Veículos.

Motoristas.

Transporte.

FASE 8

Vale-transporte.

Prêmio de viagem.

FASE 9

Relatórios.

Auditoria.

Exportação.

35. REGRA FUNDAMENTAL

Antes de implementar cada módulo, verificar os relacionamentos com os demais.

Não criar módulos isolados.

Exemplo:

Colaborador → possui treinamentos → atende requisitos da obra → pertence à equipe-base → aparece na programação diária → é associado ao veículo → gera transporte → pode gerar prêmio de viagem.

Todos os dados devem estar interligados.

36. CRITÉRIO DE ACEITAÇÃO

O sistema será considerado funcional quando for possível executar este cenário:

Cadastrar colaborador João.

Cadastrar treinamento NR-35.

Registrar NR-35 válida para João.

Cadastrar Obra A.

Definir NR-35 como requisito obrigatório da Obra A.

Adicionar João à equipe-base da Obra A.

Criar programação de segunda-feira.

João aparecer automaticamente na Obra A.

Criar programação de terça-feira.

Copiar automaticamente a programação de segunda.

Colocar João de férias na terça.

Sistema identificar João como indisponível.

Remover João da programação sugerida.

Adicionar Lucas como substituto.

Sistema verificar se Lucas atende aos requisitos.

Programar Lucas.

Designar veículo.

Designar motorista.

Validar capacidade do veículo.

Calcular transporte.

Calcular prêmio de viagem.

Confirmar programação.

Visualizar os dados no Overview Semanal.

Visualizar os dados nos relatórios.

Manter o histórico sem alterar a programação de segunda-feira.

Esse fluxo deve funcionar de ponta a ponta com dados reais persistidos no Supabase.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d341dda0-9de2-4784-8e72-59a899f31b25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
