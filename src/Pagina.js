import styled from 'styled-components';
import logobet from './fakeBET.png'
import logofutbase from './logofutbase.png'
import { useId } from 'react';
import { useResolvedPath } from 'react-router-dom';

export default function Pagina(){
  const paths=['bra1','ing1','esp1','ita1','bra2']
  const contextBra1={
    listaNomes:['América MG','Athlético PR','Atlético MG','Bahia','Botafogo','Bragantino','Corinthians','Coritiba','Cruzeiro','Cuiabá','Flamengo','Fluminense','Fortaleza','Goiás','Grêmio','Internacional','Palmeiras','Santos','São Paulo','Vasco da Gama'],
    listaTimes:['amg','cap','cam','bah','bot','bra','cor','ctb','cru','cui','fla','flu','for','goi','gre','int','pal','san','sao','vas'],
    path:'bra1'
  }
  const contextIng1={
    listaNomes:['Arsenal','Aston Villa','Bournemouth','Brentford','Brighton','Burnley','Chelsea','Crystal Palace','Everton','Fulham','Liverpool','Luton Town','Manchester United','Manchester City','Newcastle','Nottingham Forest','Sheffield United','Tottenham','West Ham','Wolverhampton'],
    listaTimes:['ars','ast','bou','bre','bri','bur','che','cry','eve','ful','liv','lut','mau','mac','new','not','she','tot','wes','wol'],
    path:'ing1'
  }
  const contextEsp1={
    listaNomes:['Alavés','Almeria','Athletico Bilbao','Athletico Madrid','Barcelona','Bétis','Cádiz','Celta de Vigo','Getafe','Girona','Granada','Las Palmas','Mallorca','Osasuna','Rayo Vallecano','Real Madrid','Real Sociedad','Sevilla','Valencia','Villareal'],
    listaTimes:['ala','alm','atb','atm','bar','bet','cad','cel','get','gir','gra','las','mal','osa','ray','rem','res','sev','val','vil'],
    path:'esp1'
  }
    const contextIta1={
      listaNomes:['Atalanta','Bologna','Cagliari','Empoli','Fiorentina','Frosinone','Genoa','Inter','Juventus','Lazio','Lecce','Milan','Monza','Napoli','Roma','Salernitana','Sassuolo','Torino','Udinese','Verona'],
      listaTimes:['ata','bol','cag','emp','fio','fro','gen','int','juv','laz','lec','mil','mon','nap','rom','sal','sas','tor','udi','ver'],
      path:'ita1'
    }
    const contextBra2={
      listaNomes:['ABC','Atlético GO','Avaí','Botafogo SP','Ceará','Chapecoense','CRB','Criciúma','Guarani','Ituano','Juventude','Londrina','Mirassol','Novorizontino','Ponte Preta','Sampaio Corrêa','Sport','Tombense','Vila Nova','Vitória'],
      listaTimes:['abc','ago','ava','bot','cea','cha','crb','cri','gua','itu','juv','lon','mir','nov','pon','sam','spo','tom','vil','vit'],
      path:'bra2'
    }
  const contexts=[
    contextBra1,contextIng1,contextEsp1,contextIta1,contextBra2
  ]
    const path=useResolvedPath()
    const list=path.pathname.split('/')[1].split('-')
    const pathEscolhido=list[0]
    const context=contexts[paths.indexOf(pathEscolhido)]
    const {listaNomes,listaTimes}=context
    const time1=listaNomes[listaTimes.indexOf(list[1])]
    const time2=listaNomes[listaTimes.indexOf(list[2])]
    return (
        <Tudo>
        <Header>
          <img src={logobet}/>
          <h1>Este site é demonstrativo com objetivo de estabelecer parceiros para o Futbase</h1>
        </Header>
        
        <Box>
            <p>Para você, futuro parceiro do Futbase:</p>
          <p>
            
             Ao invés de o usuário ser direcionado para cá,
              ele seria direcionado diretamente para o seu site de apostas,
               na página do jogo:
          </p>
          <p>{time1} x {time2}</p>
        </Box>

      </Tudo>
    )
}
const Box=styled.div`
display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;

border-radius:30px;
border:4px dashed white;
background-color:#004fc6;margin-top:30px;
width:calc(100vw - 60px);height:calc(100vh - 190px);
p{color:white;width:80%;font-size:22px;margin:0 0 30px 0}
`
const Header=styled.div`height:80px;width:100%;
display:flex;justify-content:space-between;align-items:center;
img{height:80px;width:auto}

padding:10px;box-sizing:border-box;
h1{font-size:18px;color:white;width:calc(100% - 80px);font-weight:400;
    height:50px;display:flex;align-items:center;justify-content:center}
`
const BotaoFut=styled.div`

width:140px;height:60px;border-radius:10px;
display:flex;background-color:#008037;align-items:center;
img{height:50px;width:auto}color:white;
`
const Tudo=styled.div`


width:100vw;height:100vh;
background-color:#0663EF;align-items:center;
display:flex;flex-direction:column;
a{text-decoration:none; }
`