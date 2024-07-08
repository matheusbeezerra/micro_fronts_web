# MF Drawer & MF Videos

## Descrição
Esta aplicação é composta por duas micro-frontends: `MF Drawer` e `MF Videos`. Elas funcionam juntas para fornecer uma interface para visualização e gestão de vídeos favoritos.

### MF Drawer
`MF Drawer` é a aplicação principal que contém a navegação para vídeos e favoritos.

### MF Videos
`MF Videos` é a aplicação que exibe os vídeos, permite buscar por vídeos e marca-los como favoritos.

## Funcionalidades

### MF Drawer
- Exibe um menu com links para vídeos e favoritos.
- O link "FAVORITOS" exibe a contagem de vídeos marcados como favoritos.

### MF Videos
- Carrega vídeos de uma playlist do YouTube.
- Permite marcar vídeos como favoritos.
- Exibe vídeos marcados como favoritos quando acessado através do link "FAVORITOS" no `MF Drawer`.
  
## Como ver as duas aplicações rodando juntas? 
- Usar comando 'docker-compose up'
- Ira aparecer no console:
      mf_drawer-1  | mf_drawer running at http://localhost:3001
      mf_videos-1  | mf_videos running at http://localhost:3002
      mf_host-1    | mf_host running at http://localhost:3003
   
- Selecionar o servidor: 'http://localhost:3003'
   
## Layout:


![image](https://github.com/matheusbeezerra/micro_fronts_web/assets/77506878/69f622c7-0042-4d07-a4e3-9a903e7bf0a2)
![image](https://github.com/matheusbeezerra/micro_fronts_web/assets/77506878/e1626b22-8127-44b3-a77b-6d12758f410d)


