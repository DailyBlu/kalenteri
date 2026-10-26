/* ================= ICONS ================= */
const I={
  home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  cal:'<rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M16 2.5v4M8 2.5v4M3 10h18"/>',
  calToday:'<rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M16 2.5v4M8 2.5v4M3 10h18"/><rect x="7.5" y="13.5" width="4" height="4" rx="1" fill="currentColor" stroke="none"/>',
  note:'<path d="M14.5 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7.5z"/><path d="M14 2.5v5.5h5.5M8.5 13h7M8.5 17h4.5"/>',
  square:'<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 12h6"/>',
  more:'<circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/>',
  bell:'<path d="M6 8.5a6 6 0 0 1 12 0c0 6.5 2.5 8.5 2.5 8.5h-17S6 15 6 8.5"/><path d="M10.3 20.5a2 2 0 0 0 3.4 0"/>',
  filter:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  pin:'<path d="M19.5 10c0 5.5-7.5 11.5-7.5 11.5S4.5 15.5 4.5 10a7.5 7.5 0 0 1 15 0z"/><circle cx="12" cy="10" r="2.6"/>',
  text:'<path d="M5 6h14M5 11h14M5 16h9"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  chev:'<path d="m6.5 9.5 5.5 5.5 5.5-5.5"/>',
  left:'<path d="m14.5 18-6-6 6-6"/>',
  right:'<path d="m9.5 18 6-6-6-6"/>',
  calX:'<rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M16 2.5v4M8 2.5v4M3 10h18M10 13.5l4 4M14 13.5l-4 4"/>',
  swap:'<path d="M16 3.5 20 7.5l-4 4M20 7.5H8M8 20.5l-4-4 4-4M4 16.5h12"/>',
  inbox:'<rect x="4" y="3.5" width="16" height="17" rx="2.5"/><path d="M9 9.5a3 3 0 1 1 3.5 3c-.4.1-.5.4-.5.8v.7M12 17h0"/>',
  doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M9 17v-3M12 17v-6M15 17v-4"/>',
  up:'<path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 14v5a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-5"/>',
  down:'<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 14v5a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-5"/>',
  compose:'<path d="M12 3.5H6.5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V12"/><path d="M18.4 2.6a2 2 0 0 1 2.9 2.9l-8.8 8.8L9 15l.7-3.5z"/>',
  link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  fit:'<path d="M4 9V5a1 1 0 0 1 1-1h4M15 4h4a1 1 0 0 1 1 1v4M20 15v4a1 1 0 0 1-1 1h-4M9 20H5a1 1 0 0 1-1-1v-4"/>',
  tack:'<path d="M9 3.5h6l-1 6.5 3.5 3.5h-11L10 10z"/><path d="M12 13.5v7"/>',
  trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  panel:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9.5 4v16"/>',
  book:'<path d="M12 6.5C10.5 5 8 4.5 4 4.5v14c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-14c-4 0-6.5.5-8 2z"/><path d="M12 6.5v14"/>',
  pencil:'<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/><path d="M14.5 5.5l3 3"/>',
  folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  folderPlus:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 10.5v5M9.5 13h5"/>',
  tag:'<path d="M3.5 12.5V5a1.5 1.5 0 0 1 1.5-1.5h7.5l8 8-9 9z"/><circle cx="8" cy="8" r="1.4"/>',
  graph:'<circle cx="6" cy="6" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="9" cy="18" r="2"/><path d="M8 6.3 16 7.7M6.6 8 8.4 16M10.4 16.6 16.7 9.6"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
  google:'<path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" fill="#4285F4" stroke="none"/><path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" fill="#34A853" stroke="none"/><path d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z" fill="#FBBC05" stroke="none"/><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.3 3-4.1 5.6-4.1z" fill="#EA4335" stroke="none"/>',
  sparkle:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>'
};
const svg=(k,s=22,w=1.8)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${I[k]}</svg>`;

/* ================= DATE HELPERS ================= */
const M_FULL=['tammikuu','helmikuu','maaliskuu','huhtikuu','toukokuu','kesäkuu','heinäkuu','elokuu','syyskuu','lokakuu','marraskuu','joulukuu'];
const M_SHORT=['tammi','helmi','maalis','huhti','touko','kesä','heinä','elo','syys','loka','marras','joulu'];
const WD=['su','ma','ti','ke','to','pe','la'];
const pad=n=>String(n).padStart(2,'0');
const ymd=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const parse=s=>{const[y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
const addDays=(d,n)=>{const x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()+n);return x};
const addMonths=(d,n)=>new Date(d.getFullYear(),d.getMonth()+n,1);
const monthStart=d=>new Date(d.getFullYear(),d.getMonth(),1);
const mondayOf=d=>addDays(d,-((d.getDay()+6)%7));
const isoWeek=d=>{const t=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));const day=t.getUTCDay()||7;
  t.setUTCDate(t.getUTCDate()+4-day);const y0=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t-y0)/864e5+1)/7)};
const todayStr=()=>ymd(new Date());
const nowHM=()=>{const n=new Date();return pad(n.getHours())+':'+pad(n.getMinutes())};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);

/* ================= STATE ================= */
const KEY='kalenteri.v1';
const COLORS=['#4a6fa5','#3f8a5f','#c99a2e','#b5543f','#7a5ea8','#c9763a','#2f8585','#7a8199'];
const TAG_PRESETS=['Työ','Asiakas','Oma','Treeni','Tärkeä'];
/* ---- input validation: every plan/note/setting that enters the app (storage, import, cloud) passes through here ---- */
const ID_RE=/^[A-Za-z0-9_-]{1,80}$/;
const isColor=c=>typeof c==='string'&&/^#[0-9a-fA-F]{3,8}$/.test(c);
const safeColor=c=>isColor(c)?c:'var(--accent)';
const str=(v,n)=>typeof v==='string'?v.slice(0,n):'';
const num=(v,d)=>typeof v==='number'&&isFinite(v)?v:d;
function cleanPlan(x){
  if(!x||typeof x!=='object'||!/^\d{4}-\d{2}-\d{2}$/.test(x.date))return null;
  const tm=v=>typeof v==='string'&&/^\d{2}:\d{2}$/.test(v)?v:'';
  const o={id:ID_RE.test(x.id)?x.id:uid(),title:str(x.title,200),date:x.date,allDay:!!x.allDay,start:tm(x.start),end:tm(x.end),place:str(x.place,200),
    tag:x.tag&&typeof x.tag==='object'?{label:str(x.tag.label,40),color:isColor(x.tag.color)?x.tag.color:COLORS[0]}:null,notes:str(x.notes,5000)};
  if(typeof x.confirmed==='number'&&isFinite(x.confirmed))o.confirmed=x.confirmed;
  if(x.demo)o.demo=true;return o;
}
function cleanNote(x){
  if(!x||typeof x!=='object')return null;
  const o={id:ID_RE.test(x.id)?x.id:uid(),title:str(x.title,200),body:str(x.body,200000),created:num(x.created,Date.now()),updated:num(x.updated,Date.now()),
    pinned:!!x.pinned};
  if(typeof x.x==='number'&&isFinite(x.x))o.x=x.x;if(typeof x.y==='number'&&isFinite(x.y))o.y=x.y;
  if(typeof x.folder==='string')o.folder=str(x.folder,60);if(x.demo)o.demo=true;return o;
}
const cleanFolders=a=>Array.isArray(a)?[...new Set(a.filter(f=>typeof f==='string'&&f.trim()).map(f=>f.slice(0,60)))]:[];
const cleanLinks=a=>Array.isArray(a)?a.filter(l=>Array.isArray(l)&&l.length===2&&ID_RE.test(l[0])&&ID_RE.test(l[1])):[];
function cleanState(st){
  st.plans=(Array.isArray(st.plans)?st.plans:[]).map(cleanPlan).filter(Boolean);
  if(st.notes!=null)st.notes=(Array.isArray(st.notes)?st.notes:[]).map(cleanNote).filter(Boolean);
  if(st.folders!=null)st.folders=cleanFolders(st.folders);
  if(st.links!=null)st.links=cleanLinks(st.links);
  st.name=str(st.name,40);if(st.mode!=='dark')delete st.mode;
  return st;
}
let state;
/* ---- profiles ----
   Signed out = PREVIEW: made-up example data, fully usable, but nothing is stored and nothing is ever uploaded.
   Signed in  = ACCOUNT: only that account's own data, kept in Firestore (plus Firestore's offline cache, wiped on sign-out).
   localStorage holds no plans or notes: only device preferences (PREF_KEY) and the uid of an open session (SESSION_KEY). */
const PREF_KEY='kalenteri.prefs',SESSION_KEY='kalenteri.session';
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function lsDel(k){try{localStorage.removeItem(k)}catch(e){}}
let prefs={};try{prefs=JSON.parse(lsGet(PREF_KEY))||{}}catch(e){prefs={}}
if(typeof prefs!=='object'||Array.isArray(prefs))prefs={};
if(prefs.mode!=='dark')delete prefs.mode;
function savePrefs(){lsSet(PREF_KEY,JSON.stringify(prefs))}
/* data stored by versions before 0.16 ('kalenteri.v1'): never shown in the preview and never uploaded without asking */
lsDel('kalenteri.guestBackup');
let LEGACY=null;
(()=>{let s=null;try{s=JSON.parse(lsGet(KEY))}catch(e){}
  if(!s||typeof s!=='object'){lsDel(KEY);return}
  if(s.mode==='dark'&&!('mode' in prefs)){prefs.mode='dark';savePrefs()}
  if(s.account){lsDel(KEY);return}            // an old copy of an account's data: the account itself has it, so it is deleted, never reused
  const c=cleanState({...s});
  const plans=c.plans.filter(x=>!x.demo),notes=(c.notes||[]).filter(x=>!x.demo);
  if(!plans.length&&!notes.length){lsDel(KEY);return}
  LEGACY={plans,notes,folders:c.folders||[],links:c.links||[]};
})();
let booted=false,previewWarned=false;
function saveLocal(){}                          // nothing personal is written to localStorage any more
function save(){if(typeof CLOUD!=='undefined'&&CLOUD&&CLOUD.ready)scheduleSync();else if(booted&&!previewWarned){previewWarned=true;toast('Esikatselu: muutokset eivät tallennu. Kirjaudu sisään Lisää-välilehdellä.',3800)}}
state=cleanState({name:'',plans:[],seeded:false,mode:prefs.mode});

function seed(){
  const t=new Date();
  const mk=(o,title,start,end,place,label,color,notes='',allDay=false)=>({id:uid(),title,date:ymd(addDays(t,o)),allDay,start,end,place,tag:label?{label,color}:null,notes,demo:true});
  state.plans.push(
    mk(0,'Työvuoro','15:00','20:00','Myymälä','Työ',COLORS[0]),
    mk(1,'Asiakaspalaveri','10:00','11:00','Teams','Asiakas',COLORS[1],'Käy läpi uuden sivuston rakenne.'),
    mk(2,'Työvuoro','15:00','20:00','Myymälä','Työ',COLORS[0]),
    mk(3,'Sali','18:00','19:30','Kuntosali','Treeni',COLORS[5]),
    mk(4,'Videokuvaus','12:00','15:00','Asiakkaan tilat','Asiakas',COLORS[1]),
    mk(6,'Työvuoro','11:00','18:00','Myymälä','Työ',COLORS[0]),
    mk(9,'Vapaapäivä','','','', 'Oma',COLORS[4],'',true),
    mk(12,'Työvuoro','15:00','20:00','Myymälä','Työ',COLORS[0]),
    mk(15,'Laskutus','09:00','10:00','Kotona','Tärkeä',COLORS[3]),
    mk(22,'Työvuoro','11:00','18:00','Myymälä','Työ',COLORS[0]),
    mk(30,'Kuukausikatsaus','16:00','17:00','','Oma',COLORS[4])
  );
  state.seeded=true;save();
}
if(!state.seeded)seed();

let byDate={};
function index(){
  byDate={};
  for(const p of state.plans)(byDate[p.date]||(byDate[p.date]=[])).push(p);
  for(const k in byDate)byDate[k].sort(cmpPlan);
}
function cmpPlan(a,b){if(a.allDay!==b.allDay)return a.allDay?-1:1;return (a.start||'').localeCompare(b.start||'')}
function sortedPlans(){return [...state.plans].sort((a,b)=>a.date.localeCompare(b.date)||cmpPlan(a,b))}
const timeLabel=p=>p.allDay?'Koko päivä':(p.start?(p.start+(p.end?' - '+p.end:'')):'Ei aikaa');
const isNow=p=>p.date===todayStr()&&!p.allDay&&p.start&&p.end&&p.start<=nowHM()&&nowHM()<p.end;

/* ================= UTIL UI ================= */
const $=id=>document.getElementById(id);
let toastT;
function toast(msg,ms=1800){const t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),ms)}
document.querySelectorAll('[data-ic]').forEach(e=>e.innerHTML=svg(e.dataset.ic,22));
$('bellHome').innerHTML=svg('bell',24)+'<span class="badge" id="badgeHome" hidden></span>';
$('bellCal').innerHTML=svg('bell',22)+'<span class="badge" id="badgeCal" hidden></span>';
$('filterBtn').innerHTML=svg('filter',22);
$('todayBtn').innerHTML=svg('calToday',22);
$('topChev').innerHTML=svg('chev',18,2.2);
$('mChev').innerHTML=svg('chev',20,2.4);
$('prevM').innerHTML=svg('left',18,2.2);
$('nextM').innerHTML=svg('right',18,2.2);
$('fab').innerHTML=svg('plus',26,2.4);
$('icExport').innerHTML=svg('up',20);$('icImport').innerHTML=svg('down',20);
$('p4Soon').innerHTML=svg('square',40,1.5)+'<div><b>Paikkamerkki</b><br>Tämän välilehden sisältö päätetään myöhemmin.</div>';
document.querySelectorAll('[data-soon]').forEach(b=>b.addEventListener('click',()=>toast(b.dataset.soon+' – tulossa pian')));

/* ================= HOME ================= */
const REQS=[
  {label:'Paikkamerkki 1',ic:'calX',bg:'#f1e1da',fg:'#9a4a3c'},
  {label:'Paikkamerkki 2',ic:'swap',bg:'#e2e6ec',fg:'#46597a'},
  {label:'Paikkamerkki 3',ic:'inbox',bg:'#dfe9df',fg:'#3c6b4c',badge:1},
  {label:'Paikkamerkki 4',ic:'doc',bg:'#f0e5d0',fg:'#8a6420',badge:2},
];
$('reqGrid').innerHTML=REQS.map((r,i)=>`<button class="req" data-req="${i}"><span class="req-ic" style="background:${r.bg};color:${r.fg}">${svg(r.ic,20,2)}${r.badge?`<span class="badge" style="background:${r.badge===1?'#3f7a5c':'#b8862b'}">${r.badge}</span>`:''}</span><span>${r.label}</span></button>`).join('');
$('reqGrid').addEventListener('click',e=>{const b=e.target.closest('[data-req]');if(b)toast(REQS[b.dataset.req].label+' – tulossa pian')});

function renderHome(){
  const name=(state.name||'').trim();
  $('greet').textContent=name?`Hei, ${name}`:'Hei!';
  const t=todayStr(), today=byDate[t]||[];
  $('todayLine').innerHTML=today.length===0?'Sinulla on <b>ei mitään suunniteltua</b> tälle päivälle'
    :`Sinulla on <b>${today.length} ${today.length===1?'suunnitelma':'suunnitelmaa'}</b> tälle päivälle`;
  const nowT=nowHM();
  const nowPlan=pickNowPlan();
  renderNowCard(nowPlan);
  const upcoming=sortedPlans().filter(p=>p!==nowPlan&&(p.date>t||(p.date===t&&(p.allDay||!p.end||p.end>nowT))));
  const in30=ymd(addDays(new Date(),30));
  $('showAll').textContent=`Näytä kaikki (${upcoming.length})`;
  const SHOW=8, shown=upcoming.slice(0,SHOW);
  const rest=upcoming.slice(SHOW).filter(p=>p.date<=in30).length;
  const c=$('carousel');
  if(!shown.length){c.innerHTML=`<button class="empty-up" id="emptyAdd">Ei tulevia suunnitelmia.<br><b>+ Lisää ensimmäinen</b></button>`;
    $('emptyAdd').onclick=()=>openEditor(null,t);return}
  let html='',i=0;
  while(i<shown.length){
    const d=shown[i].date,dt=parse(d),isT=d===t;let cards='';
    while(i<shown.length&&shown[i].date===d){const p=shown[i++];
      cards+=`<button class="mini" data-id="${esc(p.id)}" style="--tag:${p.allDay?'var(--red)':(safeColor(p.tag?.color))}">
        <span class="t">${esc(timeLabel(p))}</span>
        <span class="s">${esc(p.title||'Nimetön')}</span>
        ${p.place?`<span class="s">${svg('pin',14)}${esc(p.place)}</span>`:(p.tag?`<span class="s"><i style="width:9px;height:9px;border-radius:50%;background:${safeColor(p.tag.color)}"></i>${esc(p.tag.label)}</span>`:'')}
      </button>`}
    html+=`<div class="c-group"><div class="c-date ${isT?'is-today':''}"><div class="wd">${isT?'tänään':WD[dt.getDay()]}</div><div class="dn">${dt.getDate()}</div><div class="mo">${M_SHORT[dt.getMonth()]}</div></div>${cards}</div>`;
  }
  if(rest>0)html+=`<div class="more-card">Sinulla on ${rest} enemmän seuraavien 30 päivän aikana</div>`;
  c.innerHTML=html;
}
$('carousel').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)openEditor(b.dataset.id)});
$('showAll').onclick=()=>{selDate=todayStr();viewMonth=monthStart(new Date());mode='list';go('cal')};

/* ================= CALENDAR ================= */
let viewMonth=monthStart(new Date()), selDate=todayStr(), mode='month';
let listFrom, listTo; // month range in list mode [from, to)

function renderGrid(){
  const g=$('grid'),first=viewMonth,start=mondayOf(first),t=todayStr();
  $('mTitleText').textContent=`${M_FULL[first.getMonth()]} ${first.getFullYear()}`;
  let h='<div class="g-row g-head"><span></span>'+['ma','ti','ke','to','pe','la','su'].map(d=>`<span>${d}</span>`).join('')+'</div>';
  for(let w=0;w<6;w++){
    const ws=addDays(start,w*7);
    h+=`<div class="g-row"><span class="wk">${isoWeek(ws)}</span>`;
    for(let d=0;d<7;d++){
      const dt=addDays(ws,d),s=ymd(dt),ps=byDate[s]||[];
      const cls=['day',dt.getMonth()!==first.getMonth()?'out':'',s===t?'today':'',s===selDate?'sel':''].join(' ');
      const dots=ps.slice(0,3).map(p=>`<i style="background:${p.allDay?'var(--red)':(safeColor(p.tag?.color))}"></i>`).join('');
      h+=`<button class="${cls}" data-date="${s}"><span class="n">${dt.getDate()}</span><span class="dots">${dots}</span></button>`;
    }
    h+='</div>';
  }
  g.innerHTML=h;
}

function planCard(p){
  const color=p.allDay?'var(--red)':(safeColor(p.tag?.color));
  return `<button class="plan ${p.allDay?'allday':''}" data-id="${esc(p.id)}" style="--tag:${color}">
    <span class="p-time">${esc(timeLabel(p))}${p.confirmed?`<span class="p-ok">${svg('check',12,3)}Vahvistettu</span>`:''}</span>
    <span class="p-title">${esc(p.title||'Nimetön')}</span>
    ${p.place?`<span class="p-meta">${svg('pin',16)}<span>${esc(p.place)}</span></span>`:''}
    ${p.notes?`<span class="p-meta">${svg('text',16)}<span>${esc(p.notes.split('\n')[0])}</span></span>`:''}
    ${p.tag?`<span class="chip" style="--tag:${safeColor(p.tag.color)}"><i></i>${esc(p.tag.label)}</span>`:''}
  </button>`;
}

function weekLabel(a,b){
  const w=isoWeek(a);
  if(ymd(a)===ymd(b))return `Viikko ${w}, ${M_SHORT[a.getMonth()]} ${a.getDate()}`;
  if(a.getMonth()===b.getMonth())return `Viikko ${w}, ${M_SHORT[a.getMonth()]} ${a.getDate()} – ${b.getDate()}`;
  return `Viikko ${w}, ${M_SHORT[a.getMonth()]} ${a.getDate()} – ${M_SHORT[b.getMonth()]} ${b.getDate()}`;
}

/* Builds agenda HTML for months [from, to). Week separators are clipped at month edges. */
function agendaHTML(from,to,{headers,showSel}){
  let h='';
  for(let m=new Date(from);m<to;m=addMonths(m,1)){
    const mEnd=addMonths(m,1);
    if(headers)h+=`<div class="mo-head" data-month="${ymd(m)}">${M_FULL[m.getMonth()]} ${m.getFullYear()}</div>`;
    let any=false;
    for(let ws=mondayOf(m);ws<mEnd;ws=addDays(ws,7)){
      const a=ws<m?m:ws, bRaw=addDays(ws,6), b=bRaw>=mEnd?addDays(mEnd,-1):bRaw;
      h+=`<div class="wk-sep" data-ws="${ymd(a)}">${weekLabel(a,b)}</div>`;
      for(let d=new Date(a);d<=b;d=addDays(d,1)){
        const s=ymd(d),ps=byDate[s]||[],isSel=showSel&&s===selDate;
        if(!ps.length&&!isSel)continue;
        any=true;
        h+=`<div class="d-row ${isSel?'sel':''}" data-date="${s}"><div class="d-col ${s===todayStr()?'is-today':''}"><div class="wd">${WD[d.getDay()]}</div><div class="dn">${pad(d.getDate())}</div></div>
          <div class="d-plans">${ps.length?ps.map(planCard).join(''):`<button class="empty-day" data-add="${s}">Ei suunnitelmia · napauta lisätäksesi</button>`}</div></div>`;
      }
    }
    if(!any&&!headers)h+=`<div class="empty-month">Ei suunnitelmia tässä kuussa</div>`;
  }
  return h;
}

function renderAgenda(){
  const a=$('agenda');
  if(mode==='month'){
    a.innerHTML=agendaHTML(viewMonth,addMonths(viewMonth,1),{headers:false,showSel:true});
  }else{
    a.innerHTML=agendaHTML(listFrom,listTo,{headers:true,showSel:false});
  }
}

function scrollAgendaTo(dateStr,smooth){
  const sc=$('agendaScroll'),a=$('agenda');
  let target=null;
  for(const el of a.querySelectorAll('[data-date],[data-ws]')){
    const v=el.dataset.date||el.dataset.ws;
    if(el.dataset.ws&&v<=dateStr)target=el; // last week separator at/before date
    if(el.dataset.date===dateStr){target=el.previousElementSibling?.classList.contains('wk-sep')?el.previousElementSibling:el;break}
    if(v>dateStr)break;
  }
  const y=target?target.offsetTop-6:0;
  sc.scrollTo({top:y,behavior:smooth?'smooth':'auto'});
}

function renderCal(){
  const cal=$('page-cal');
  cal.classList.toggle('list-mode',mode==='list');
  renderGrid();
  if(mode==='list'&&!listFrom){listFrom=addMonths(viewMonth,-2);listTo=addMonths(viewMonth,7)}
  renderAgenda();
  updateTopTitle();
}

function setMode(m){
  if(m===mode)return;
  if(m==='list'){
    listFrom=addMonths(viewMonth,-2);listTo=addMonths(viewMonth,7);
    mode='list';renderCal();
    const target=selDate.slice(0,7)===ymd(viewMonth).slice(0,7)?selDate:ymd(viewMonth);
    requestAnimationFrame(()=>{scrollAgendaTo(target);updateTopTitle()});
  }else{
    viewMonth=currentListMonth()||viewMonth;
    if(selDate.slice(0,7)!==ymd(viewMonth).slice(0,7))selDate=ymd(viewMonth.getMonth()===new Date().getMonth()&&viewMonth.getFullYear()===new Date().getFullYear()?new Date():viewMonth);
    mode='month';listFrom=null;renderCal();
    requestAnimationFrame(()=>scrollAgendaTo(selDate));
  }
}

function currentListMonth(){
  const sc=$('agendaScroll'),top=sc.scrollTop+8;let cur=null;
  for(const h of $('agenda').querySelectorAll('.mo-head')){if(h.offsetTop<=top)cur=h.dataset.month;else break}
  if(!cur){const f=$('agenda').querySelector('.mo-head');cur=f&&f.dataset.month}
  return cur?parse(cur):null;
}
function updateTopTitle(){
  const m=mode==='list'?(currentListMonth()||viewMonth):viewMonth;
  $('topTitleText').textContent=`${M_FULL[m.getMonth()]} ${m.getFullYear()}`;
}

/* infinite list scrolling */
let extending=false;
$('agendaScroll').addEventListener('scroll',()=>{
  if(mode!=='list')return;
  updateTopTitle();
  const sc=$('agendaScroll');
  if(extending)return;
  if(sc.scrollTop+sc.clientHeight>sc.scrollHeight-900){
    extending=true;const add=agendaHTML(listTo,addMonths(listTo,4),{headers:true});
    listTo=addMonths(listTo,4);$('agenda').insertAdjacentHTML('beforeend',add);extending=false;
  }else if(sc.scrollTop<300){
    extending=true;const nf=addMonths(listFrom,-3),add=agendaHTML(nf,listFrom,{headers:true});
    const before=sc.scrollHeight;listFrom=nf;$('agenda').insertAdjacentHTML('afterbegin',add);
    sc.scrollTop+=sc.scrollHeight-before;extending=false;
  }
},{passive:true});

$('mTitle').onclick=()=>setMode('list');
$('handle').onclick=()=>setMode('list');
$('topTitle').onclick=()=>setMode('month');
$('todayBtn').onclick=()=>{
  selDate=todayStr();viewMonth=monthStart(new Date());
  if(mode==='list'){listFrom=addMonths(viewMonth,-2);listTo=addMonths(viewMonth,7);renderCal();scrollAgendaTo(selDate,true)}
  else{renderCal();scrollAgendaTo(selDate,true)}
};
function shiftMonth(n){
  const g=$('grid');
  g.style.transition='none';g.style.transform=`translateX(${n*40}px)`;g.style.opacity='0';
  viewMonth=addMonths(viewMonth,n);
  const now=new Date();
  selDate=(viewMonth.getMonth()===now.getMonth()&&viewMonth.getFullYear()===now.getFullYear())?todayStr():ymd(viewMonth);
  renderCal();$('agendaScroll').scrollTop=0;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{g.style.transition='';g.style.transform='';g.style.opacity=''}));
}
$('prevM').onclick=()=>shiftMonth(-1);
$('nextM').onclick=()=>shiftMonth(1);
$('grid').addEventListener('click',e=>{
  const b=e.target.closest('[data-date]');if(!b)return;
  const d=parse(b.dataset.date);
  if(d.getMonth()!==viewMonth.getMonth()){viewMonth=monthStart(d)}
  selDate=b.dataset.date;renderCal();scrollAgendaTo(selDate,true);
});
/* swipe months on grid */
(()=>{let x0=null,y0=null;const vp=$('gridVp');
  vp.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
  vp.addEventListener('touchend',e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;
    if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)shiftMonth(dx<0?1:-1);
    else if(dy<-50&&Math.abs(dy)>Math.abs(dx)*1.5)setMode('list');
    x0=null},{passive:true});
})();
$('agenda').addEventListener('click',e=>{
  const p=e.target.closest('[data-id]');if(p)return openEditor(p.dataset.id);
  const a=e.target.closest('[data-add]');if(a)openEditor(null,a.dataset.add);
});
$('fab').onclick=()=>openEditor(null,mode==='month'?selDate:todayStr());

/* ================= EDITOR SHEET ================= */
let editing=null,delArmed=false;
function openEditor(id,date){
  const p=id?state.plans.find(x=>x.id===id):null;
  editing=p?{...p,tag:p.tag?{...p.tag}:null}:{id:null,title:'',date:date||todayStr(),allDay:false,start:defaultStart(),end:'',place:'',tag:null,notes:''};
  if(!editing.end&&editing.start&&!editing.allDay)editing.end=plusHour(editing.start);
  delArmed=false;sheetMode='plan';
  $('sTitle').textContent=p?'Muokkaa':'Uusi suunnitelma';
  $('sSave').textContent=p?'Valmis':'Lisää';
  const e=editing,col=e.tag?.color||COLORS[0];
  $('sBody').innerHTML=`
    <div class="f-group">
      <div class="f-row"><input class="left" id="fTitle" placeholder="Otsikko" value="${esc(e.title)}" maxlength="80"></div>
      <div class="f-row">${svg('pin',18)}<input class="left" id="fPlace" placeholder="Paikka" value="${esc(e.place)}" maxlength="80"></div>
    </div>
    <div class="f-group">
      <div class="f-row"><label for="fAll">Koko päivä</label><span style="flex:1"></span><span class="toggle"><input type="checkbox" id="fAll" ${e.allDay?'checked':''}><span></span></span></div>
      <div class="f-row"><label for="fDate">Päivä</label><input type="date" id="fDate" value="${esc(e.date)}"></div>
      <div class="f-row timepair" ${e.allDay?'hidden':''}><label for="fStart">Alkaa</label><input type="time" id="fStart" value="${esc(e.start||'')}"></div>
      <div class="f-row timepair" ${e.allDay?'hidden':''}><label for="fEnd">Päättyy</label><input type="time" id="fEnd" value="${esc(e.end||'')}"></div>
    </div>
    <div class="f-group">
      <div class="f-row"><label for="fTag">Tunniste</label><input id="fTag" placeholder="esim. Työ" value="${esc(e.tag?.label||'')}" maxlength="24"></div>
      <div class="tag-presets">${TAG_PRESETS.map(t=>`<button data-tp="${t}">${t}</button>`).join('')}</div>
      <div class="colors" id="fColors">${COLORS.map(c=>`<button data-c="${c}" style="--c:${c}" class="${c===col?'on':''}" aria-label="Väri"></button>`).join('')}</div>
    </div>
    <div class="f-group"><textarea id="fNotes" placeholder="Muistiinpanot">${esc(e.notes)}</textarea></div>
    ${p?'<button class="del-btn" id="fDel">Poista suunnitelma</button>':''}
  `;
  editing._color=col;
  $('fAll').onchange=ev=>document.querySelectorAll('.timepair').forEach(r=>r.hidden=ev.target.checked);
  $('fStart').onchange=ev=>{const en=$('fEnd');if(ev.target.value&&(!en.value||en.value<=ev.target.value))en.value=plusHour(ev.target.value)};
  $('fColors').onclick=ev=>{const b=ev.target.closest('[data-c]');if(!b)return;editing._color=b.dataset.c;
    $('fColors').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b))};
  document.querySelector('.tag-presets').onclick=ev=>{const b=ev.target.closest('[data-tp]');if(b)$('fTag').value=b.dataset.tp};
  if(p)$('fDel').onclick=()=>{
    if(!delArmed){delArmed=true;$('fDel').classList.add('confirm');$('fDel').textContent='Napauta uudelleen poistaaksesi';return}
    state.plans=state.plans.filter(x=>x.id!==p.id);save();closeSheet();refresh();toast('Suunnitelma poistettu');
  };
  openSheet();
  if(!p)setTimeout(()=>$('fTitle').focus(),350);
}
function defaultStart(){const n=new Date();n.setMinutes(0);n.setHours(Math.min(n.getHours()+1,23));return pad(n.getHours())+':00'}
function plusHour(t){const[h,m]=t.split(':').map(Number);return pad(Math.min(h+1,23))+':'+pad(m)}
let sheetMode='plan';
$('sSave').onclick=()=>sheetMode==='name'?saveName():savePlan();
function savePlan(){
  if(!editing)return;
  const title=$('fTitle').value.trim(),date=$('fDate').value,allDay=$('fAll').checked;
  if(!date){toast('Valitse päivä');return}
  if(!title){toast('Anna otsikko');$('fTitle').focus();return}
  let start=allDay?'':$('fStart').value,end=allDay?'':$('fEnd').value;
  if(start&&end&&end<start)[start,end]=[end,start];
  const label=$('fTag').value.trim();
  const plan={id:editing.id||uid(),title,date,allDay,start,end,place:$('fPlace').value.trim(),
    tag:label?{label,color:editing._color}:null,notes:$('fNotes').value.trim()};
  const i=state.plans.findIndex(x=>x.id===plan.id);
  const prev=i>=0?state.plans[i]:null;
  if(prev&&prev.confirmed&&prev.date===plan.date&&prev.start===plan.start&&prev.end===plan.end&&prev.allDay===plan.allDay)plan.confirmed=prev.confirmed;
  if(i>=0)state.plans[i]=plan;else state.plans.push(plan);
  save();closeSheet();
  selDate=date;viewMonth=monthStart(parse(date));
  refresh();
  if(currentPage==='cal')requestAnimationFrame(()=>scrollAgendaTo(date,true));
  toast(i>=0?'Tallennettu':'Suunnitelma lisätty');
}
function openSheet(){$('overlay').classList.add('open');$('sheet').classList.add('open');$('sheet').scrollTop=0}
function closeSheet(){document.activeElement?.blur?.();$('overlay').classList.remove('open');$('sheet').classList.remove('open');editing=null}
$('sCancel').onclick=closeSheet;$('overlay').onclick=closeSheet;




/* ================= NOTES ================= */
if(!Array.isArray(state.notes))state.notes=[];
if(!Array.isArray(state.links))state.links=[];
if(!state.notesSeeded){
  const now=Date.now(),D=864e5;
  const mk=(id,title,body,x,y,ago,pinned=false)=>({id,title,body,x,y,created:now-ago,updated:now-ago,pinned,demo:true});
  state.notes.push(
    mk('demo-a','Projektit','Kaikki käynnissä olevat jutut yhdessä paikassa.',0,0,2*36e5,true),
    mk('demo-b','Asiakas: kotisivut','- Rakenne valmis\n- Kuvat puuttuu\n- Julkaisu ensi viikolla',-190,-120,5*36e5),
    mk('demo-c','Videoideat','Lyhyet videot: ennen/jälkeen, asiakkaan tarina, 3 vinkkiä.',190,-110,1.2*D),
    mk('demo-d','Kuvauslista','Mikrofoni, valot, varavirtalähde.',230,70,3*D),
    mk('demo-e','Kauppalista','Maito\nKahvi\nKaurahiutaleet\nBanaanit',-170,150,9*D)
  );
  state.links.push(['demo-a','demo-b'],['demo-a','demo-c'],['demo-c','demo-d']);
  state.notesSeeded=true;save();
}
if(state.notesSeeded===true){
  if(state.notes.some(n=>n.demo)){
    const now=Date.now(),D=864e5;
    const mk=(id,title,body,x,y,ago)=>({id,title,body,x,y,created:now-ago,updated:now-ago,pinned:false,demo:true});
    state.notes.push(
      mk('demo-f','Sisältökalenteri','Julkaisu kerran viikossa.\nKatso [[Videoideat]] ja [[Kuvauslista]].\n#markkinointi',40,-230,6*36e5),
      mk('demo-g','Hinnoittelu','Paketit: perus, laaja, ylläpito.\nLiittyy: [[Asiakas: kotisivut]]\n#yritys',-260,10,2*D),
      mk('demo-h','Asiakaslista','Seuraavat soitot ja tarjoukset.\n[[Hinnoittelu]] [[Projektit]]\n#yritys',-330,-150,4*D),
      mk('demo-i','Treeniohjelma','Ma, ke, pe: sali.\n#oma',-20,230,12*D)
    );
  }
  state.notesSeeded=2;save();
}
if(!Array.isArray(state.folders))state.folders=[];
if(state.notesSeeded===2){
  if(state.notes.some(n=>n.demo)){
    const F={'demo-a':'Projektit','demo-b':'Projektit','demo-g':'Projektit','demo-h':'Projektit','demo-c':'Ideat','demo-d':'Ideat','demo-f':'Ideat','demo-e':'Oma','demo-i':'Oma'};
    state.notes.forEach(n=>{if(F[n.id]&&n.folder==null)n.folder=F[n.id]});
    for(const f of ['Ideat','Oma','Projektit'])if(!state.folders.includes(f))state.folders.push(f);
    const now=Date.now();
    state.notes.push({id:'demo-w',title:'Tervetuloa Holviin',folder:'',pinned:false,demo:true,created:now-6e4,updated:now-6e4,x:120,y:260,
      body:'#ohje #holvi\n\nTämä on **Holvi**: muistiinpanot Obsidianin tyyliin.\n\n## Näin se toimii\n- Kirjoita `[[Muistion nimi]]` linkittääksesi toiseen muistioon, esim. [[Projektit]]\n- Lisää tunniste kirjoittamalla #tunniste\n- Vaihda luku- ja muokkaustilan välillä oikean yläkulman kynästä\n\n## Tehtävät\n- [ ] Kokeile tehtävälistaa\n- [x] Avaa Holvi\n- [ ] Siirrä muistio kansioon kolmen pisteen valikosta\n\n> Lainaukset näkyvät näin, vihreällä reunalla.\n\n==Korostus== ja *kursiivi* toimivat myös.'});
    state.vaultLast='demo-w';
  }
  state.notesSeeded=3;save();
}
const noteById=id=>state.notes.find(n=>n.id===id);
const firstLine=t=>(t||'').split('\n').map(x=>x.trim()).find(Boolean)||'';
const noteName=n=>(n.title||'').trim()||firstLine(n.body)||'Uusi muistiinpano';
const WD_FULL=['sunnuntai','maanantai','tiistai','keskiviikko','torstai','perjantai','lauantai'];
function shortStamp(ts){
  const d=new Date(ts),t=new Date(),days=Math.round((parse(ymd(t))-parse(ymd(d)))/864e5);
  if(days===0)return `${d.getHours()}.${pad(d.getMinutes())}`;
  if(days===1)return 'eilen';
  if(days<7)return WD_FULL[d.getDay()];
  return `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
}
const longStamp=ts=>{const d=new Date(ts);return `${d.getDate()}. ${M_FULL[d.getMonth()]}ta ${d.getFullYear()} klo ${d.getHours()}.${pad(d.getMinutes())}`};
let notesMode='list',openId=null,connect=false,pickId=null,edSplit=false;
const nPage=$('page-notes'),mapEl=$('map'),world=$('world'),ed=$('editor');
$('nCompose').innerHTML=svg('compose',24);
$('nSearchIc').innerHTML=svg('search',17,2);
$('tNew').innerHTML=svg('plus',22,2);$('tLink').innerHTML=svg('link',20);$('tFit').innerHTML=svg('fit',20);
$('edPin').innerHTML=svg('tack',21);$('edDel').innerHTML=svg('trash',21);

/* ---- list ---- */
function renderNoteList(){
  const q=$('nSearch').value.trim().toLowerCase();
  const list=[...state.notes].filter(n=>!q||(n.title+' '+n.body).toLowerCase().includes(q)).sort((a,b)=>b.updated-a.updated);
  if(!state.notes.length){$('nList').innerHTML='<div class="n-empty">Ei muistiinpanoja.<br>Luo ensimmäinen oikean yläkulman kynästä.</div>';return}
  if(!list.length){$('nList').innerHTML='<div class="n-empty">Ei tuloksia haulle.</div>';return}
  const today=parse(ymd(new Date())),groups=new Map();
  const add=(k,n)=>{if(!groups.has(k))groups.set(k,[]);groups.get(k).push(n)};
  for(const n of list){
    if(n.pinned&&!q){add('Kiinnitetyt',n);continue}
    const d=new Date(n.updated),days=Math.round((today-parse(ymd(d)))/864e5);
    add(days===0?'Tänään':days<=7?'Edelliset 7 päivää':days<=30?'Edelliset 30 päivää':
      (d.getFullYear()===today.getFullYear()?M_FULL[d.getMonth()]:String(d.getFullYear())),n);
  }
  let h='';
  for(const [k,ns] of groups){
    h+=`<div class="n-sec">${k==='Kiinnitetyt'?svg('tack',18):''}${k}</div><div class="n-group">`;
    for(const n of ns){
      const title=noteName(n),lines=(n.body||'').split('\n').map(x=>x.trim()).filter(Boolean);
      const prev=(n.title||'').trim()?lines[0]:lines[1];
      h+=`<button class="n-row" data-note="${esc(n.id)}"><div class="t">${esc(title)}</div><div class="s"><b>${shortStamp(n.updated)}</b>${esc(prev||'Ei lisätekstiä')}</div></button>`;
    }
    h+='</div>';
  }
  h+=`<div class="n-count">${list.length} ${list.length===1?'muistiinpano':'muistiinpanoa'}</div>`;
  $('nList').innerHTML=h;
}
$('nList').addEventListener('click',e=>{const b=e.target.closest('[data-note]');if(b)openNote(b.dataset.note,false)});
$('nSearch').addEventListener('input',renderNoteList);

/* ---- mode switch ---- */
function setNotesMode(m){
  if(openId)closeNote(true);
  notesMode=m;
  [['list','segList'],['map','segMap'],['vault','segVault']].forEach(([k,i])=>$(i).classList.toggle('on',m===k));
  closeSide();closeMenu();
  nPage.classList.toggle('vault-mode',m==='vault');
  $('nListWrap').hidden=m!=='list';mapEl.hidden=m!=='map';graphEl.hidden=m!=='graph';vaultEl.hidden=m!=='vault';
  if(m==='map'){renderMap();requestAnimationFrame(()=>fitMap(false))}
  else if(m==='graph'){requestAnimationFrame(()=>{sizeCanvas();rebuildGraph(true);fitGraph(false)})}
  else if(m==='vault'){vaultDefault();renderVault()}
  else renderNoteList();
}
$('nSeg').addEventListener('click',e=>{const b=e.target.closest('[data-mode]');if(b&&b.dataset.mode!==notesMode)setNotesMode(b.dataset.mode)});

/* ---- create ---- */
function newNote(x,y){
  const n={id:uid(),title:'',body:'',created:Date.now(),updated:Date.now(),pinned:false,x,y};
  state.notes.push(n);save();return n;
}
function freeSpot(){
  const c=viewCenter();let best=null;
  for(let r=0;r<6;r++)for(let a=0;a<8;a++){
    const x=c.x+Math.cos(a/8*Math.PI*2+r)*r*120,y=c.y+Math.sin(a/8*Math.PI*2+r)*r*80;
    if(state.notes.every(n=>Math.abs(n.x-x)>150||Math.abs(n.y-y)>56))return {x,y};
  }
  return c;
}
$('nCompose').onclick=()=>{const p=freeSpot();const n=newNote(p.x,p.y);openNote(n.id,false,true)};
$('tNew').onclick=()=>{const p=freeSpot();const n=newNote(p.x,p.y);renderMap();openNote(n.id,true,true)};

/* ---- editor ---- */
let saveT;
function persist(){clearTimeout(saveT);saveT=setTimeout(save,250)}
function fillEditor(n){
  $('edTitle').value=n.title||'';$('edBody').value=n.body||'';
  $('edDate').textContent=longStamp(n.updated);
  $('edPin').classList.toggle('on',!!n.pinned);
  resetDel();renderEdLinks(n);requestAnimationFrame(sizeBody);
  $('edScroll').scrollTop=0;
}
function wikiTargets(n){
  const out=[],re=/\[\[([^\]\n]+)\]\]/g;let m;
  while((m=re.exec(n.body||''))){const name=m[1].split('|')[0].trim().toLowerCase();
    const t=state.notes.find(x=>x!==n&&noteName(x).toLowerCase()===name);if(t)out.push(t.id)}
  return out;
}
function allEdges(){
  const seen=new Set(),out=[];
  const add=(a,b,w)=>{const k=a<b?a+'|'+b:b+'|'+a;if(seen.has(k))return;seen.add(k);out.push([a,b,w])};
  state.links.forEach(([a,b])=>add(a,b,false));
  state.notes.forEach(n=>wikiTargets(n).forEach(t=>add(n.id,t,true)));
  return out;
}
function tagsOf(n){return [...new Set([...((n.title||'')+' '+(n.body||'')).matchAll(/(?:^|\s)#([\p{L}\p{N}_\-\/]+)/gu)].map(m=>m[1].toLowerCase()))]}
function renderEdLinks(n){
  const ids=[...new Set(allEdges().filter(e=>e[0]===n.id||e[1]===n.id).map(e=>e[0]===n.id?e[1]:e[0]))];
  $('edLinks').innerHTML=ids.map(i=>noteById(i)).filter(Boolean).map(x=>`<button data-go="${esc(x.id)}">${svg('link',12,2.2)}${esc(noteName(x))}</button>`).join('');
  $('edTags').innerHTML=tagsOf(n).map(t=>`<span>#${esc(t)}</span>`).join('');
}
function sizeBody(){const t=$('edBody');t.style.height='auto';t.style.height=Math.max(200,t.scrollHeight)+'px'}
function openNote(id,split,focus){
  const n=noteById(id);if(!n)return;
  if(openId&&openId!==id)cleanupEmpty(openId);
  const already=ed.classList.contains('open')&&edSplit===split;
  openId=id;fillEditor(n);
  if(!already){
    ed.style.transition='none';ed.classList.remove('open');ed.classList.toggle('split',split);void ed.offsetWidth;ed.style.transition='';
    edSplit=split;$('edBackTx').textContent=split?'Sulje':'Muistiot';
    $('edBackIc').innerHTML=svg(split?'chev':'left',22,2.2);
    requestAnimationFrame(()=>ed.classList.add('open'));
  }
  if(split){
    if(!nPage.classList.contains('split')){
      if(notesMode==='graph'){savedG={...gView};graphEl.classList.add('split')}else{savedView={...view};mapEl.classList.add('split')}
      nPage.classList.add('split');
      setTimeout(()=>notesMode==='graph'?fitGraph(true):fitMap(true),360)}
    markSel();gSel=id;drawGraph();
  }
  if(focus)setTimeout(()=>$('edTitle').focus(),380);
}
function cleanupEmpty(id){
  const n=noteById(id);
  if(n&&!(n.title||'').trim()&&!(n.body||'').trim()){state.notes=state.notes.filter(x=>x.id!==id);state.links=state.links.filter(l=>!l.includes(id));save();return true}
  return false;
}
function closeNote(instant){
  document.activeElement?.blur?.();
  const id=openId;openId=null;cleanupEmpty(id);save();
  if(instant){ed.style.transition='none';ed.classList.remove('open');void ed.offsetWidth;ed.style.transition=''}
  else ed.classList.remove('open');
  if(nPage.classList.contains('split')){
    nPage.classList.remove('split');mapEl.classList.remove('split');graphEl.classList.remove('split');
    if(savedView){view=savedView;savedView=null;setTimeout(()=>applyView(true),40)}
    if(savedG){const t=savedG;savedG=null;setTimeout(()=>animateG(t),40)}
  }
  gSel=null;
  if(notesMode==='map')renderMap();else if(notesMode==='graph')rebuildGraph(false);else renderNoteList();
}
$('edBack').onclick=()=>closeNote(false);
$('edLinks').addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b)openNote(b.dataset.go,edSplit)});
$('edTitle').addEventListener('input',e=>{const n=noteById(openId);if(!n)return;n.title=e.target.value;n.updated=Date.now();persist();updateNodeLabel(n);if(notesMode==='graph')scheduleGraph()});
$('edBody').addEventListener('input',e=>{const n=noteById(openId);if(!n)return;n.body=e.target.value;n.updated=Date.now();persist();sizeBody();updateNodeLabel(n);if(notesMode==='graph')scheduleGraph()});
$('edTitle').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('edBody').focus()}});
ed.addEventListener('focusin',()=>{$('edDone').hidden=false;$('edPin').hidden=$('edDel').hidden=true});
ed.addEventListener('focusout',()=>setTimeout(()=>{if(!ed.contains(document.activeElement)){$('edDone').hidden=true;$('edPin').hidden=$('edDel').hidden=false}},0));
$('edDone').onclick=()=>document.activeElement?.blur?.();
$('edPin').onclick=()=>{const n=noteById(openId);if(!n)return;n.pinned=!n.pinned;save();$('edPin').classList.toggle('on',n.pinned);toast(n.pinned?'Kiinnitetty':'Kiinnitys poistettu')};
let delArmedN=false;
function resetDel(){delArmedN=false;$('edDel').classList.remove('confirm')}
$('edDel').onclick=()=>{
  if(!delArmedN){delArmedN=true;$('edDel').classList.add('confirm');toast('Napauta roskakoria uudelleen poistaaksesi');setTimeout(resetDel,3000);return}
  const id=openId;state.notes=state.notes.filter(x=>x.id!==id);state.links=state.links.filter(l=>!l.includes(id));
  openId=null;save();closeNote(false);toast('Muistiinpano poistettu');
};

/* ---- mind map ---- */
let view={x:0,y:0,k:1},savedView=null;
function applyView(anim){world.style.transition=anim?'transform .4s cubic-bezier(.3,.7,.2,1)':'none';world.style.transform=`translate(${view.x}px,${view.y}px) scale(${view.k})`}
function viewCenter(){const r=mapEl.getBoundingClientRect();const w=r.width||innerWidth,h=r.height||innerHeight*.6;return {x:(w/2-view.x)/view.k,y:(h/2-view.y)/view.k}}
function ensurePositions(){
  let i=0;for(const n of state.notes){if(typeof n.x!=='number'||typeof n.y!=='number'){const a=i*2.4;n.x=Math.cos(a)*(150+i*25);n.y=Math.sin(a)*(110+i*18);i++}}
}
function linkCount(id){return state.links.filter(l=>l.includes(id)).length}
function renderMap(){
  ensurePositions();
  const maxL=Math.max(0,...state.notes.map(n=>linkCount(n.id)));
  $('nodes').innerHTML=state.notes.map(n=>`<button class="node ${maxL>1&&linkCount(n.id)===maxL?'root':''}" data-id="${esc(n.id)}" style="left:${n.x}px;top:${n.y}px">${esc(noteName(n))}</button>`).join('');
  drawLinks();markSel();
}
function drawLinks(){
  $('links').innerHTML=allEdges().map(([a,b,w])=>{const A=noteById(a),B=noteById(b);if(!A||!B)return'';
    const mx=(A.x+B.x)/2,my=(A.y+B.y)/2,dx=B.x-A.x,dy=B.y-A.y,c=.12;
    return `<path class="${w?'wiki':''}" d="M${A.x} ${A.y} Q${mx-dy*c} ${my+dx*c} ${B.x} ${B.y}"/>`}).join('');
}
function markSel(){$('nodes').querySelectorAll('.node').forEach(el=>{el.classList.toggle('sel',el.dataset.id===openId&&edSplit);el.classList.toggle('pick',el.dataset.id===pickId)})}
function updateNodeLabel(n){const el=$('nodes').querySelector(`[data-id="${esc(n.id)}"]`);if(el)el.textContent=noteName(n);renderEdLinks(n)}
function fitMap(anim){
  const r=mapEl.getBoundingClientRect();if(!r.width||!state.notes.length){view={x:r.width/2,y:r.height/2,k:1};applyView(anim);return}
  const xs=state.notes.map(n=>n.x),ys=state.notes.map(n=>n.y);
  const minX=Math.min(...xs)-70,maxX=Math.max(...xs)+70,minY=Math.min(...ys)-24,maxY=Math.max(...ys)+24;
  const padTop=edSplit&&openId?50:20;
  const k=Math.max(.3,Math.min(1.15,(r.width-24)/(maxX-minX),(r.height-padTop-20)/(maxY-minY)));
  view={k,x:r.width/2-(minX+maxX)/2*k,y:padTop+(r.height-padTop-20)/2-(minY+maxY)/2*k};
  applyView(anim);
}
$('tFit').onclick=()=>fitMap(true);
$('tLink').onclick=()=>{connect=!connect;pickId=null;$('tLink').classList.toggle('on',connect);$('mapHint').hidden=!connect;markSel()};
function toggleLink(a,b){
  const i=state.links.findIndex(l=>l.includes(a)&&l.includes(b));
  if(i>=0){state.links.splice(i,1);toast('Yhteys poistettu')}else{state.links.push([a,b]);toast('Yhdistetty')}
  save();renderMap();const n=noteById(openId);if(n)renderEdLinks(n);
}
function nodeTap(id){
  if(connect){
    if(!pickId){pickId=id}else if(pickId===id){pickId=null}else{toggleLink(pickId,id);pickId=null}
    markSel();return;
  }
  openNote(id,true);
}
/* gestures: drag node, pan, pinch */
const ptrs=new Map();let gest=null;
const rel=e=>{const r=mapEl.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top}};
mapEl.addEventListener('pointerdown',e=>{
  if(e.target.closest('.map-tools'))return;
  e.preventDefault();
  try{mapEl.setPointerCapture(e.pointerId)}catch(_){}
  ptrs.set(e.pointerId,rel(e));
  if(ptrs.size===1){
    const nodeEl=e.target.closest('.node'),p=rel(e);
    if(nodeEl){const n=noteById(nodeEl.dataset.id);gest={t:'node',id:n.id,el:nodeEl,sx:p.x,sy:p.y,ox:n.x,oy:n.y,moved:false}}
    else gest={t:'pan',sx:p.x,sy:p.y,vx:view.x,vy:view.y,moved:false};
  }else if(ptrs.size===2){
    if(gest&&gest.t==='node'&&gest.moved){const n=noteById(gest.id);n.x=gest.ox;n.y=gest.oy;gest.el.style.left=n.x+'px';gest.el.style.top=n.y+'px';gest.el.classList.remove('dragging');drawLinks()}
    const [a,b]=[...ptrs.values()];
    gest={t:'pinch',d0:Math.hypot(a.x-b.x,a.y-b.y)||1,k0:view.k,wx:((a.x+b.x)/2-view.x)/view.k,wy:((a.y+b.y)/2-view.y)/view.k};
  }
});
mapEl.addEventListener('pointermove',e=>{
  if(!ptrs.has(e.pointerId)||!gest)return;
  const p=rel(e);ptrs.set(e.pointerId,p);
  if(gest.t==='pinch'&&ptrs.size>=2){
    const [a,b]=[...ptrs.values()],d=Math.hypot(a.x-b.x,a.y-b.y);
    const k=Math.max(.25,Math.min(2.5,gest.k0*d/gest.d0)),mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
    view={k,x:mx-gest.wx*k,y:my-gest.wy*k};applyView(false);return;
  }
  const dx=p.x-gest.sx,dy=p.y-gest.sy;
  if(!gest.moved&&Math.hypot(dx,dy)>6){gest.moved=true;if(gest.t==='node')gest.el.classList.add('dragging')}
  if(!gest.moved)return;
  if(gest.t==='node'){const n=noteById(gest.id);n.x=gest.ox+dx/view.k;n.y=gest.oy+dy/view.k;gest.el.style.left=n.x+'px';gest.el.style.top=n.y+'px';drawLinks()}
  else if(gest.t==='pan'){view.x=gest.vx+dx;view.y=gest.vy+dy;applyView(false)}
});
function endPtr(e){
  if(!ptrs.has(e.pointerId))return;
  ptrs.delete(e.pointerId);
  if(!gest)return;
  if(gest.t==='node'){
    gest.el.classList.remove('dragging');
    if(gest.moved)save();else if(e.type==='pointerup')nodeTap(gest.id);
    gest=null;
  }else if(gest.t==='pan'){
    if(!gest.moved&&e.type==='pointerup'&&connect&&pickId){pickId=null;markSel()}
    gest=null;
  }else if(gest.t==='pinch'&&ptrs.size<2){gest=null}
}
mapEl.addEventListener('pointerup',endPtr);mapEl.addEventListener('pointercancel',endPtr);
mapEl.addEventListener('wheel',e=>{e.preventDefault();const p=rel(e),k=Math.max(.25,Math.min(2.5,view.k*Math.exp(-e.deltaY*.0015)));
  const wx=(p.x-view.x)/view.k,wy=(p.y-view.y)/view.k;view={k,x:p.x-wx*k,y:p.y-wy*k};applyView(false)},{passive:false});


/* ---- graph (Obsidian-style) ---- */
const graphEl=$('graph'),gCanvas=$('gCanvas');
let gNodes=new Map(),gEdges=[],gDeg=new Map(),gView={x:0,y:0,k:1},gSel=null,savedG=null,alpha=0,gRaf=null,gDrag=false,gT=null;
const G_TAG=['#7fd19a','#e0b85a','#e39a7a','#9cc0ea','#c3a6e6','#7fd1cf'];
const G_PLAIN='#e9e4d8';
$('gNew').innerHTML=svg('plus',22,2);$('gFit').innerHTML=svg('fit',20);
function tagColor(t){let h=0;for(const c of t)h=(h*31+c.charCodeAt(0))>>>0;return G_TAG[h%G_TAG.length]}
function gColor(id){const n=noteById(id);const t=n&&tagsOf(n)[0];return t?tagColor(t):G_PLAIN}
function gRadius(id){return 4.5+Math.sqrt(gDeg.get(id)||0)*3}
function sizeCanvas(){const r=graphEl.getBoundingClientRect(),d=devicePixelRatio||1;if(!r.width)return;gCanvas.width=Math.round(r.width*d);gCanvas.height=Math.round(r.height*d)}
new ResizeObserver(()=>{if(!graphEl.hidden){sizeCanvas();drawGraph()}}).observe(graphEl);
function scheduleGraph(){clearTimeout(gT);gT=setTimeout(()=>rebuildGraph(false),400)}
function rebuildGraph(settle){
  const ids=new Set(state.notes.map(n=>n.id));
  for(const id of [...gNodes.keys()])if(!ids.has(id))gNodes.delete(id);
  let i=gNodes.size,fresh=0;
  for(const n of state.notes)if(!gNodes.has(n.id)){const a=i*2.399,r=28*Math.sqrt(i+1);gNodes.set(n.id,{id:n.id,x:Math.cos(a)*r,y:Math.sin(a)*r,vx:0,vy:0,fx:null,fy:null});i++;fresh++}
  gEdges=allEdges().filter(([a,b])=>gNodes.has(a)&&gNodes.has(b));
  gDeg=new Map();for(const [a,b] of gEdges){gDeg.set(a,(gDeg.get(a)||0)+1);gDeg.set(b,(gDeg.get(b)||0)+1)}
  if(settle&&fresh){alpha=1;for(let t=0;t<220;t++)tick()}
  kick(settle?.12:.35);drawGraph();
}
function tick(){
  const ns=[...gNodes.values()];
  const dragging=ns.some(n=>n.fx!=null);
  if(dragging)for(const n of ns)if(n.hx==null){n.hx=n.x;n.hy=n.y}       // remember where everyone was
  const homing=ns.some(n=>n.hx!=null);
  const soft=homing?.25:1;                                               // 75% stiffer while dragging/returning
  for(let i=0;i<ns.length;i++){const a=ns[i];for(let j=i+1;j<ns.length;j++){const b=ns[j];
    let dx=b.x-a.x,dy=b.y-a.y,d2=dx*dx+dy*dy;if(d2<1){dx=Math.random()-.5;dy=Math.random()-.5;d2=1}
    if(d2>360000)continue;const d=Math.sqrt(d2),f=1600*alpha*soft/d2,fx=dx/d*f,fy=dy/d*f;a.vx-=fx;a.vy-=fy;b.vx+=fx;b.vy+=fy}}
  for(const [ai,bi] of gEdges){const a=gNodes.get(ai),b=gNodes.get(bi);const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1,f=(d-75)*.05*alpha*soft,fx=dx/d*f,fy=dy/d*f;a.vx+=fx;a.vy+=fy;b.vx-=fx;b.vy-=fy}
  for(const n of ns){if(n.fx!=null){n.x=n.fx;n.y=n.fy;n.vx=n.vy=0;continue}
    if(n.hx!=null){n.vx+=(n.hx-n.x)*.03;n.vy+=(n.hy-n.y)*.03}           // slow, smooth pull back home
    else{n.vx-=n.x*.012*alpha;n.vy-=n.y*.012*alpha}
    n.vx*=.62;n.vy*=.62;n.x+=n.vx;n.y+=n.vy}
  // no overlapping: a dragged dot pushes others out of its way
  for(const h of ns){if(h.fx==null)continue;
    for(const n of ns){if(n===h||n.fx!=null)continue;
      const dx=n.x-h.x,dy=n.y-h.y,d=Math.hypot(dx,dy)||.01,min=gRadius(h.id)+gRadius(n.id)+14;
      if(d<min){n.x=h.x+dx/d*min;n.y=h.y+dy/d*min;n.vx*=.3;n.vy*=.3}}}
  // once everyone is back home, forget the homes
  if(!dragging&&homing&&ns.every(n=>n.hx==null||Math.hypot(n.x-n.hx,n.y-n.hy)<.4)){
    for(const n of ns){if(n.hx!=null){n.x=n.hx;n.y=n.hy;n.vx=n.vy=0}n.hx=n.hy=null}}
  alpha*=.985;
}
function homesPending(){for(const n of gNodes.values())if(n.hx!=null)return true;return false}
function kick(a){alpha=Math.max(alpha,a);if(!gRaf&&(!graphEl.hidden||vaultGraphsVisible()))gRaf=requestAnimationFrame(loop)}
function loop(){gRaf=null;if(graphEl.hidden&&!vaultGraphsVisible())return;tick();drawGraph();if(alpha>.015||gDrag||homesPending())gRaf=requestAnimationFrame(loop)}
function gNeighbors(id){const s=new Set([id]);for(const [a,b] of gEdges){if(a===id)s.add(b);if(b===id)s.add(a)}return s}
function drawGraphTo(cv,view,sel){
  if(!cv||!cv.width||!view)return;
  const ctx=cv.getContext('2d'),d=devicePixelRatio||1,W=cv.width/d,H=cv.height/d,k=view.k;
  ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,W,H);
  const nb=sel&&gNodes.has(sel)?gNeighbors(sel):null;
  ctx.setTransform(d*k,0,0,d*k,d*view.x,d*view.y);
  for(const [a,b,w] of gEdges){const A=gNodes.get(a),B=gNodes.get(b),hi=nb&&(a===sel||b===sel);
    ctx.strokeStyle=hi?'rgba(127,209,154,.85)':nb?'rgba(233,228,216,.08)':'rgba(233,228,216,.26)';
    ctx.lineWidth=(hi?1.8:1.1)/k;ctx.setLineDash(w?[4/k,4/k]:[]);
    ctx.beginPath();ctx.moveTo(A.x,A.y);ctx.lineTo(B.x,B.y);ctx.stroke()}
  ctx.setLineDash([]);
  for(const n of gNodes.values()){const dim=nb&&!nb.has(n.id);ctx.globalAlpha=dim?.22:1;
    const r=gRadius(n.id);ctx.fillStyle=n.id===sel?'#ffffff':gColor(n.id);
    ctx.beginPath();ctx.arc(n.x,n.y,n.id===sel?r+1.5:r,0,Math.PI*2);ctx.fill()}
  ctx.globalAlpha=1;ctx.setTransform(d,0,0,d,0,0);
  ctx.font='500 11.5px -apple-system,BlinkMacSystemFont,system-ui,sans-serif';ctx.textAlign='center';ctx.textBaseline='top';
  const maxDeg=Math.max(1,...gDeg.values());
  for(const n of gNodes.values()){
    const show=k>.9||(nb&&nb.has(n.id))||(gDeg.get(n.id)||0)>=Math.max(2,maxDeg);
    if(!show)continue;const note=noteById(n.id);if(!note)continue;
    let t=noteName(note);if(t.length>24)t=t.slice(0,23)+'…';
    const dim=nb&&!nb.has(n.id);ctx.fillStyle=dim?'rgba(240,236,226,.25)':n.id===sel?'#ffffff':'rgba(240,236,226,.82)';
    ctx.fillText(t,n.x*k+view.x,n.y*k+view.y+gRadius(n.id)*k+5);
  }
}
function drawGraph(){if(!graphEl.hidden)drawGraphTo(gCanvas,gView,gSel);drawPanelGraphs()}
function animateG(t){const s={...gView},t0=performance.now();
  const step=now=>{const e=Math.min(1,(now-t0)/380),q=1-Math.pow(1-e,3);gView={x:s.x+(t.x-s.x)*q,y:s.y+(t.y-s.y)*q,k:s.k+(t.k-s.k)*q};drawGraph();if(e<1)requestAnimationFrame(step)};
  requestAnimationFrame(step)}
function fitGraph(anim){
  const r=graphEl.getBoundingClientRect();if(!r.width)return;
  const ns=[...gNodes.values()];
  if(!ns.length){gView={x:r.width/2,y:r.height/2,k:1};drawGraph();return}
  const xs=ns.map(n=>n.x),ys=ns.map(n=>n.y);
  const minX=Math.min(...xs)-50,maxX=Math.max(...xs)+50,minY=Math.min(...ys)-30,maxY=Math.max(...ys)+45;
  const split=nPage.classList.contains('split'),top=split?52:16,bottom=split?10:110;
  const k=Math.max(.2,Math.min(1.6,(r.width-20)/(maxX-minX),(r.height-top-bottom)/(maxY-minY)));
  const t={k,x:r.width/2-(minX+maxX)/2*k,y:top+(r.height-top-bottom)/2-(minY+maxY)/2*k};
  if(anim)animateG(t);else{gView=t;drawGraph()}
}
$('gFit').onclick=()=>fitGraph(true);
$('gNew').onclick=()=>{const n=newNote(0,0);const p=freeSpot();n.x=p.x;n.y=p.y;save();rebuildGraph(false);openNote(n.id,true,true)};
const gp=new Map();let gg=null;
const grel=e=>{const r=graphEl.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top}};
function gHit(p){const wx=(p.x-gView.x)/gView.k,wy=(p.y-gView.y)/gView.k;let best=null,bd=1e9;
  for(const n of gNodes.values()){const dd=Math.hypot(n.x-wx,n.y-wy);if(dd<gRadius(n.id)+16/gView.k&&dd<bd){bd=dd;best=n}}return best}
graphEl.addEventListener('pointerdown',e=>{
  if(e.target.closest('.map-tools'))return;e.preventDefault();
  try{graphEl.setPointerCapture(e.pointerId)}catch(_){}
  const p=grel(e);gp.set(e.pointerId,p);
  if(gp.size===1){const n=gHit(p);gg=n?{t:'node',n,sx:p.x,sy:p.y,moved:false}:{t:'pan',sx:p.x,sy:p.y,vx:gView.x,vy:gView.y,moved:false}}
  else if(gp.size===2){if(gg&&gg.t==='node'){gg.n.fx=gg.n.fy=null;gg.n.hx=gg.n.hy=null;gDrag=false;kick(.2)}
    const [a,b]=[...gp.values()];gg={t:'pinch',d0:Math.hypot(a.x-b.x,a.y-b.y)||1,k0:gView.k,wx:((a.x+b.x)/2-gView.x)/gView.k,wy:((a.y+b.y)/2-gView.y)/gView.k}}
});
graphEl.addEventListener('pointermove',e=>{
  if(!gp.has(e.pointerId)||!gg)return;const p=grel(e);gp.set(e.pointerId,p);
  if(gg.t==='pinch'&&gp.size>=2){const [a,b]=[...gp.values()],dd=Math.hypot(a.x-b.x,a.y-b.y),k=Math.max(.2,Math.min(3,gg.k0*dd/gg.d0));
    gView={k,x:(a.x+b.x)/2-gg.wx*k,y:(a.y+b.y)/2-gg.wy*k};drawGraph();return}
  const dx=p.x-gg.sx,dy=p.y-gg.sy;if(!gg.moved&&Math.hypot(dx,dy)>6)gg.moved=true;if(!gg.moved)return;
  if(gg.t==='node'){gg.n.fx=(p.x-gView.x)/gView.k;gg.n.fy=(p.y-gView.y)/gView.k;gDrag=true;kick(.3)}
  else if(gg.t==='pan'){gView.x=gg.vx+dx;gView.y=gg.vy+dy;drawGraph()}
});
function gEnd(e){
  if(!gp.has(e.pointerId))return;gp.delete(e.pointerId);if(!gg)return;
  if(gg.t==='node'){gg.n.fx=gg.n.fy=null;gg.n.hx=gg.n.hy=null;gDrag=false;kick(.2);if(!gg.moved&&e.type==='pointerup')openNote(gg.n.id,true);gg=null}
  else if(gg.t==='pan')gg=null;else if(gp.size<2)gg=null;
}
graphEl.addEventListener('pointerup',gEnd);graphEl.addEventListener('pointercancel',gEnd);
graphEl.addEventListener('wheel',e=>{e.preventDefault();const p=grel(e),k=Math.max(.2,Math.min(3,gView.k*Math.exp(-e.deltaY*.0015)));
  const wx=(p.x-gView.x)/gView.k,wy=(p.y-gView.y)/gView.k;gView={k,x:p.x-wx*k,y:p.y-wy*k};drawGraph()},{passive:false});

/* ---- vault: Obsidian-style workspace (max 3 panes) ---- */
const vaultEl=$('vault'),vStrip=$('vStrip');
const vOpen=new Set(Array.isArray(prefs.open)?prefs.open.filter(x=>typeof x==='string'):['Ideat','Projektit']);
const PANEL_MAX=3;
const TYPE={files:{ic:'folder',name:'Kansiot'},note:{ic:'note',name:'Muistio'},graph:{ic:'graph',name:'Graafi'}};
let vMenuCtx=null,vMenuMode='main',vDelArmed=false,needFull=false;
function findByName(name){name=name.trim().toLowerCase();return state.notes.find(x=>noteName(x).toLowerCase()===name)}
function mdInline(t){
  let s=esc(t);const codes=[];
  s=s.replace(/`([^`]+)`/g,(m,c)=>{codes.push(c);return '\u0001'+(codes.length-1)+'\u0001'});
  s=s.replace(/\[\[([^\]]+)\]\]/g,(m,inner)=>{const parts=inner.split('|'),name=parts[0],alias=parts[1]||parts[0];
    const div=document.createElement('div');div.innerHTML=name;const raw=div.textContent;const t=findByName(raw);
    return `<span class="wl ${t?'':'missing'}" data-wl="${t?t.id:''}" data-name="${name}">${alias}</span>`});
  s=s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
  s=s.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  s=s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*/g,'$1<em>$2</em>');
  s=s.replace(/==([^=]+)==/g,'<mark>$1</mark>');
  s=s.replace(/(^|\s)#([\p{L}\p{N}_\-\/]+)/gu,'$1<span class="tag" data-tag="$2">#$2</span>');
  s=s.replace(/\u0001(\d+)\u0001/g,(m,i)=>`<code>${codes[i]}</code>`);
  return s;
}
function mdRender(body){
  const L=(body||'').split('\n');let h='',para=[],list=null;
  const flushP=()=>{if(para.length){h+='<p>'+para.map(mdInline).join('<br>')+'</p>';para=[]}};
  const closeList=()=>{if(list){h+=`</${list}>`;list=null}};
  const openList=t=>{if(list!==t){closeList();h+=`<${t}>`;list=t}};
  const indent=sp=>Math.floor(sp.replace(/\t/g,'  ').length/2);
  for(let i=0;i<L.length;i++){
    const line=L[i];let m;
    if(/^```/.test(line)){flushP();closeList();const code=[];i++;while(i<L.length&&!/^```/.test(L[i]))code.push(L[i++]);h+=`<pre><code>${esc(code.join('\n'))}</code></pre>`;continue}
    if(!line.trim()){flushP();closeList();continue}
    if((m=line.match(/^(#{1,6})\s+(.*)$/))){flushP();closeList();h+=`<h${m[1].length}>${mdInline(m[2])}</h${m[1].length}>`;continue}
    if(/^\s*(-{3,}|\*{3,})\s*$/.test(line)){flushP();closeList();h+='<hr>';continue}
    if((m=line.match(/^>\s?(.*)$/))){flushP();closeList();const q=[m[1]];while(i+1<L.length&&/^>/.test(L[i+1]))q.push(L[++i].replace(/^>\s?/,''));h+=`<blockquote>${q.map(mdInline).join('<br>')}</blockquote>`;continue}
    if((m=line.match(/^(\s*)[-*+]\s+\[( |x|X)\]\s?(.*)$/))){flushP();openList('ul');const done=m[2]!==' ';
      h+=`<li class="task ${done?'done':''}" data-line="${i}" style="margin-left:calc(${indent(m[1])*24}px - 1.4em)"><span class="cb">${done?svg('check',13,3.2):''}</span><span>${mdInline(m[3])}</span></li>`;continue}
    if((m=line.match(/^(\s*)[-*+]\s+(.*)$/))){flushP();openList('ul');h+=`<li style="margin-left:${indent(m[1])*24}px">${mdInline(m[2])}</li>`;continue}
    if((m=line.match(/^\s*\d+[.)]\s+(.*)$/))){flushP();openList('ol');h+=`<li>${mdInline(m[1])}</li>`;continue}
    closeList();para.push(line);
  }
  flushP();closeList();return h;
}
function backlinksOf(id){return state.notes.filter(n=>n.id!==id&&wikiTargets(n).includes(id))}
function snippetFor(n,id){const t=noteById(id);const name=t?noteName(t).toLowerCase():'';
  const line=(n.body||'').split('\n').find(l=>l.toLowerCase().includes('[['+name))||firstLine(n.body);return line.replace(/[#*>`=\[\]]/g,'').trim()}

function allFolders(){return [...new Set([...state.folders,...state.notes.map(n=>n.folder).filter(Boolean)])].sort((a,b)=>a.localeCompare(b,'fi'))}
function persistOpen(){prefs.open=[...vOpen];savePrefs()}
function defaultNoteId(){const last=noteById(state.vaultLast);return last?last.id:([...state.notes].sort((a,b)=>b.updated-a.updated)[0]||{}).id||null}
let panels=Array.isArray(prefs.panels)&&prefs.panels.length?prefs.panels.filter(x=>x&&['files','note','graph'].includes(x.type)).slice(0,3).map(x=>({pid:ID_RE.test(x.pid)?x.pid:uid(),type:x.type,noteId:ID_RE.test(x.noteId)?x.noteId:null,tab:['files','search','tags'].includes(x.tab)?x.tab:'files',q:str(x.q,80)})):[{pid:uid(),type:'files'},{pid:uid(),type:'note',noteId:null},{pid:uid(),type:'graph'}];
panels.forEach(p=>{p.hist=[];p.edit=false;p.tab=p.tab||'files';p.q=p.q||'';p.view=null});
let activeNote=(panels.find(p=>p.type==='note')||{}).pid||null;
function savePanels(){prefs.panels=panels.map(p=>({pid:p.pid,type:p.type,noteId:p.noteId||null,tab:p.tab,q:p.q}));savePrefs()}
const P=pid=>panels.find(p=>p.pid===pid);
const panelEl=p=>vStrip.querySelector(`[data-pid="${p.pid}"]`);
function selNote(){const a=P(activeNote);return a&&a.type==='note'?a.noteId:null}
function vaultGraphsVisible(){return !vaultEl.hidden&&panels.some(p=>p.type==='graph')}
function vaultDefault(){panels.forEach(p=>{if(p.type==='note'&&p.noteId&&!noteById(p.noteId))p.noteId=null});
  const first=panels.find(p=>p.type==='note');if(first&&!first.noteId&&!panels.some(p=>p.type==='note'&&p.noteId))first.noteId=defaultNoteId()}
function panelTitle(p){if(p.type==='note'){const n=noteById(p.noteId);return n?noteName(n):'Uusi välilehti'}return TYPE[p.type].name}

function renderVault(){
  closeAdd();closeMenu();
  if(!panels.length){
    vStrip.innerHTML=`<div class="v-none"><div>Ei avoimia paneeleja</div><div class="v-none-btns">${['files','note','graph'].map(t=>`<button data-addtype="${t}">${svg(TYPE[t].ic,18)}${TYPE[t].name}</button>`).join('')}</div></div>`;return}
  vStrip.innerHTML=panels.map((p,i)=>`<section class="vp vp-${p.type} ${p.pid===activeNote?'act':''}" data-pid="${p.pid}">
    <header class="vp-tabs"><div class="vp-tab"><span class="vp-ic">${svg(TYPE[p.type].ic,15)}</span><span class="vp-name"></span><button class="vp-x" data-close="${p.pid}" aria-label="Sulje paneeli">${svg('x',14,2.2)}</button></div>${i===panels.length-1&&panels.length<PANEL_MAX?`<button class="vp-plus" data-plus aria-label="Lisää paneeli">${svg('plus',17,2)}</button>`:''}</header>
    <div class="vp-tools"></div><div class="vp-body"></div></section>`).join('');
  if(panels.some(p=>p.type==='graph'))rebuildGraph(gNodes.size===0);
  panels.forEach(p=>renderPanel(p));
}
function renderPanel(p,keep){
  const el=panelEl(p);if(!el)return;
  const tools=el.querySelector('.vp-tools'),body=el.querySelector('.vp-body');
  el.querySelector('.vp-name').textContent=panelTitle(p);
  if(p.type==='files'){
    tools.innerHTML=['files','search','tags'].map(t=>`<button class="icon-btn ${p.tab===t?'on':''}" data-ftab="${t}" aria-label="${{files:'Tiedostot',search:'Haku',tags:'Tunnisteet'}[t]}">${svg({files:'folder',search:'search',tags:'tag'}[t],18)}</button>`).join('')+
      `<span class="v-sp"></span><button class="icon-btn" data-act="newnote" aria-label="Uusi muistio">${svg('compose',18)}</button><button class="icon-btn" data-act="newfolder" aria-label="Uusi kansio">${svg('folderPlus',18)}</button>`;
    renderFiles(p,body);
  }else if(p.type==='note'){
    const n=noteById(p.noteId);
    tools.innerHTML=(p.hist.length?`<button class="icon-btn" data-act="back" aria-label="Takaisin">${svg('left',18,2)}</button>`:'')+'<span class="v-sp"></span>'+
      (n?`<button class="icon-btn" data-act="mode" aria-label="${p.edit?'Lukutila':'Muokkaa'}">${svg(p.edit?'book':'pencil',18)}</button><button class="icon-btn" data-act="more" aria-label="Lisää toimintoja">${svg('more',18)}</button>`:'');
    renderNoteBody(p,body,keep);
  }else{
    tools.innerHTML=`<span class="v-sp"></span><button class="icon-btn" data-act="fit" aria-label="Sovita">${svg('fit',18)}</button>`;
    if(!body.querySelector('canvas')){body.innerHTML='<canvas></canvas>';setupGraphPanel(p,body)}
  }
}

/* files pane */
function renderFiles(p,body){
  const sel=selNote();
  if(p.tab==='files'){
    const byName=(a,b)=>noteName(a).localeCompare(noteName(b),'fi');
    const row=(n,nested)=>`<button class="v-row file ${nested?'nested':'root'} ${n.id===sel?'on':''}" data-open="${esc(n.id)}"><span class="nm">${esc(noteName(n))}</span></button>`;
    let h=p.addFolder?`<input class="v-inp" data-folderin placeholder="Kansion nimi" maxlength="40">`:'';
    for(const f of allFolders()){
      const ns=state.notes.filter(n=>n.folder===f).sort(byName),open=vOpen.has(f);
      h+=`<button class="v-row ${open?'':'closed'}" data-folder="${esc(f)}"><span class="chev-s">${svg('chev',15,2.2)}</span><span class="nm">${esc(f)}</span><span class="cnt">${ns.length}</span></button>`;
      if(open)h+=ns.map(n=>row(n,true)).join('');
    }
    h+=state.notes.filter(n=>!n.folder).sort(byName).map(n=>row(n,false)).join('');
    body.innerHTML=h||'<div class="v-label">Ei muistioita</div>';
    const fi=body.querySelector('[data-folderin]');
    if(fi){fi.focus();let done=false;const fin=()=>{if(done)return;done=true;const v=fi.value.trim();p.addFolder=false;
        if(v&&!allFolders().includes(v)){state.folders.push(v);vOpen.add(v);persistOpen();save()}renderPanel(p)};
      fi.addEventListener('keydown',e=>{if(e.key==='Enter')fin();if(e.key==='Escape'){fi.value='';fin()}});fi.addEventListener('blur',fin)}
  }else if(p.tab==='search'){
    body.innerHTML=`<input class="v-inp" data-search type="search" placeholder="Hae tai #tunniste" value="${esc(p.q)}" autocomplete="off"><div data-results></div>`;
    const inp=body.querySelector('[data-search]');inp.addEventListener('input',()=>{p.q=inp.value;renderResults(p,body)});renderResults(p,body);
  }else{
    const counts=new Map();state.notes.forEach(n=>tagsOf(n).forEach(g=>counts.set(g,(counts.get(g)||0)+1)));
    const tags=[...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'fi'));
    body.innerHTML=`<div class="v-label">Tunnisteet</div>`+(tags.length?tags.map(([g,c])=>`<button class="v-row" data-tagq="${esc(g)}"><span class="nm" style="color:var(--v-acc)">#${esc(g)}</span><span class="cnt">${c}</span></button>`).join(''):'<div class="v-label" style="text-transform:none;letter-spacing:0;font-weight:400">Ei tunnisteita vielä. Kirjoita muistioon esim. #idea</div>');
  }
}
function renderResults(p,body){
  const q=(p.q||'').trim().toLowerCase(),r=body.querySelector('[data-results]');if(!r)return;
  if(!q){r.innerHTML='<div class="v-label">Kirjoita hakusana</div>';return}
  const isTag=q.startsWith('#');
  const hits=state.notes.filter(n=>isTag?tagsOf(n).includes(q.slice(1)):(noteName(n)+'\n'+(n.body||'')).toLowerCase().includes(q));
  const hl=txt=>{const i=txt.toLowerCase().indexOf(q);if(i<0||isTag)return esc(txt);return esc(txt.slice(0,i))+'<mark>'+esc(txt.slice(i,i+q.length))+'</mark>'+esc(txt.slice(i+q.length))};
  r.innerHTML=`<div class="v-label">${hits.length} ${hits.length===1?'tulos':'tulosta'}</div>`+hits.map(n=>{
    const line=(n.body||'').split('\n').find(l=>l.toLowerCase().includes(q))||firstLine(n.body)||'';
    return `<button class="v-res" data-open="${esc(n.id)}"><b>${hl(noteName(n))}</b><span>${hl(line.trim().slice(0,90))}</span></button>`}).join('');
}

/* note pane */
function renderNoteBody(p,body,keep){
  const y=body.scrollTop,n=noteById(p.noteId);
  if(!n){
    const rec=[...state.notes].sort((a,b)=>b.updated-a.updated).slice(0,12);
    body.innerHTML=`<div class="v-label" style="padding-top:14px">Avaa muistio</div>`+rec.map(r=>`<button class="v-res" data-open="${esc(r.id)}"><b>${esc(noteName(r))}</b><span>${esc(firstLine(r.body))}</span></button>`).join('')+
      `<button class="v-res" data-act="newhere"><b style="color:var(--v-acc)">+ Uusi muistio</b></button>`;return}
  const words=((n.body||'').match(/\S+/g)||[]).length,bl=backlinksOf(n.id);
  const manual=state.links.filter(l=>l.includes(n.id)).map(l=>noteById(l[0]===n.id?l[1]:l[0])).filter(Boolean);
  let h=n.folder?`<div class="v-path">${svg('folder',13)}${esc(n.folder)}</div>`:'';
  if(p.edit){
    h+=`<input class="v-title" data-title value="${esc(n.title||'')}" placeholder="Nimetön" autocomplete="off">
      <div class="v-edit"><textarea data-body placeholder="Aloita kirjoittaminen…&#10;&#10;# Otsikko, - [ ] tehtävä, > lainaus, [[linkki]], #tunniste">${esc(n.body||'')}</textarea></div>`;
  }else{
    h+=`<div class="v-title">${esc(noteName(n))}</div><div class="md">${mdRender(n.body)||'<p class="v-muted">Tyhjä muistio. Napauta kynää kirjoittaaksesi.</p>'}</div>`;
  }
  if(bl.length)h+=`<div class="v-sec"><h4>Takalinkit · ${bl.length}</h4>${bl.map(b=>`<button class="v-bl" data-open="${esc(b.id)}"><b>${esc(noteName(b))}</b><span>${esc(snippetFor(b,n.id))}</span></button>`).join('')}</div>`;
  if(manual.length)h+=`<div class="v-sec"><h4>Mielikartassa · ${manual.length}</h4>${manual.map(b=>`<button class="v-bl" data-open="${esc(b.id)}"><b>${esc(noteName(b))}</b><span>${esc(firstLine(b.body))}</span></button>`).join('')}</div>`;
  h+=`<div class="v-status">${bl.length} ${bl.length===1?'takalinkki':'takalinkkiä'} · ${words} ${words===1?'sana':'sanaa'} · ${shortStamp(n.updated)}</div>`;
  body.innerHTML=h;body.scrollTop=keep?y:0;
  if(p.edit){
    const ti=body.querySelector('[data-title]'),bi=body.querySelector('[data-body]');
    const size=()=>{bi.style.height='auto';bi.style.height=Math.max(body.clientHeight*.6,bi.scrollHeight)+'px'};size();
    ti.addEventListener('input',()=>{n.title=ti.value;n.updated=Date.now();persist();panelEl(p).querySelector('.vp-name').textContent=panelTitle(p)});
    ti.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();bi.focus()}});
    bi.addEventListener('input',()=>{n.body=bi.value;n.updated=Date.now();persist();size()});
    [ti,bi].forEach(x=>x.addEventListener('change',()=>{scheduleGraph();refreshOthers(p)}));
  }
}
function refreshOthers(except){
  panels.forEach(q=>{if(q===except)return;if(q.type==='files'||(q.type==='note'&&!q.edit))renderPanel(q,true)});
  markActive();drawPanelGraphs();
}
function markActive(){vStrip.querySelectorAll('.vp').forEach(el=>el.classList.toggle('act',el.dataset.pid===activeNote))}
function scrollToPanel(p){const el=panelEl(p);if(!el)return;const r=el.getBoundingClientRect(),vr=vStrip.getBoundingClientRect();
  if(r.left<vr.left||r.right>vr.right)vStrip.scrollTo({left:vStrip.scrollLeft+r.left-vr.left,behavior:'smooth'})}
function targetNotePanel(){
  let t=P(activeNote);if(t&&t.type==='note')return t;
  t=panels.find(p=>p.type==='note');if(t)return t;
  const np={pid:uid(),type:'note',noteId:null,hist:[],edit:false,tab:'files',q:'',view:null};
  if(panels.length<PANEL_MAX){const gi=panels.findIndex(p=>p.type==='graph');panels.splice(gi<0?panels.length:gi,0,np)}
  else{const i=panels.map(p=>p.type).lastIndexOf('graph');panels[i<0?panels.length-1:i]=np}
  needFull=true;return np;
}
function openInNote(id,edit){
  needFull=false;const t=targetNotePanel(),old=t.noteId;
  if(old&&old!==id)t.hist.push(old);
  t.noteId=id;t.edit=!!edit;activeNote=t.pid;state.vaultLast=id;savePanels();
  if(old&&old!==id&&!panels.some(p=>p.noteId===old)&&cleanupEmpty(old))t.hist=t.hist.filter(x=>x!==old);
  if(needFull)renderVault();else{renderPanel(t);refreshOthers(t)}
  scrollToPanel(t);
  if(edit)setTimeout(()=>{const el=panelEl(t);(el?.querySelector('[data-title]'))?.focus()},80);
}
function newVaultNote(folder,title=''){const n=newNote(0,0);const sp=freeSpot();n.x=sp.x;n.y=sp.y;n.folder=folder||'';n.title=title;save();return n}

/* pane add / close */
function addPanel(type){
  if(panels.length>=PANEL_MAX){toast('Enintään 3 paneelia');return}
  const p={pid:uid(),type,noteId:null,hist:[],edit:false,tab:'files',q:'',view:null};
  panels.push(p);if(type==='note')activeNote=p.pid;savePanels();renderVault();requestAnimationFrame(()=>scrollToPanel(p));
}
function closePanel(pid){
  const p=P(pid);if(!p)return;
  panels=panels.filter(x=>x!==p);
  if(p.noteId&&!panels.some(x=>x.noteId===p.noteId))cleanupEmpty(p.noteId);
  if(activeNote===pid)activeNote=(panels.find(x=>x.type==='note')||{}).pid||null;
  savePanels();renderVault();
}
function openAdd(btn){
  const a=$('vAdd'),vr=vaultEl.getBoundingClientRect(),r=btn.getBoundingClientRect();
  a.innerHTML=[['note','Muistio'],['graph','Graafi'],['files','Kansiot ja lista']].map(([t,l])=>`<button data-addtype="${t}">${svg(TYPE[t].ic,18)}${l}</button>`).join('');
  a.hidden=false;a.style.top=(r.bottom-vr.top+4)+'px';a.style.left=Math.max(6,Math.min(r.right-vr.left-210,vr.width-216))+'px';
}
function closeAdd(){$('vAdd').hidden=true}
function closeSide(){closeAdd()}
$('vAdd').addEventListener('click',e=>{const b=e.target.closest('[data-addtype]');if(b)addPanel(b.dataset.addtype)});

/* clicks inside panes */
vStrip.addEventListener('click',e=>{
  const t=e.target;
  const cl=t.closest('[data-close]');if(cl){closePanel(cl.dataset.close);return}
  const pl=t.closest('[data-plus]');if(pl){$('vAdd').hidden?openAdd(pl):closeAdd();return}
  const ad=t.closest('[data-addtype]');if(ad){addPanel(ad.dataset.addtype);return}
  const sec=t.closest('.vp'),p=sec&&P(sec.dataset.pid);if(!p)return;
  if(p.type==='note'&&activeNote!==p.pid){activeNote=p.pid;markActive();renderPanelsOfType('files');drawPanelGraphs()}
  const a=t.closest('[data-act]');
  if(a){
    const act=a.dataset.act;
    if(act==='newnote'){const cur=noteById(selNote());openInNote(newVaultNote(cur?.folder||'').id,true)}
    if(act==='newfolder'){p.tab='files';p.addFolder=true;renderPanel(p)}
    if(act==='newhere'){activeNote=p.pid;openInNote(newVaultNote('').id,true)}
    if(act==='back'){let id;while(p.hist.length&&!noteById(id=p.hist.pop()));if(id&&noteById(id)){p.noteId=id;p.edit=false;state.vaultLast=id;savePanels();renderPanel(p);refreshOthers(p)}else renderPanel(p)}
    if(act==='mode'){p.edit=!p.edit;renderPanel(p,true);if(!p.edit)refreshOthers(p);else setTimeout(()=>panelEl(p)?.querySelector('[data-body]')?.focus({preventScroll:true}),40)}
    if(act==='more'){openMenu(p,a)}
    if(act==='fit')fitPanelGraph(p,true);
    return;
  }
  if(p.type==='files'){
    const ft=t.closest('[data-ftab]');if(ft){p.tab=ft.dataset.ftab;p.addFolder=false;savePanels();renderPanel(p);if(p.tab==='search')setTimeout(()=>panelEl(p)?.querySelector('[data-search]')?.focus(),30);return}
    const f=t.closest('[data-folder]');if(f){const nm=f.dataset.folder;vOpen.has(nm)?vOpen.delete(nm):vOpen.add(nm);persistOpen();renderPanel(p,true);return}
    const tq=t.closest('[data-tagq]');if(tq){p.tab='search';p.q='#'+tq.dataset.tagq;savePanels();renderPanel(p);return}
    const o=t.closest('[data-open]');if(o)openInNote(o.dataset.open);
    return;
  }
  if(p.type==='note'&&!p.edit){
    const wl=t.closest('.wl');
    if(wl){if(wl.dataset.wl)openInNote(wl.dataset.wl);else{openInNote(newVaultNote(noteById(p.noteId)?.folder||'',String(wl.dataset.name||'').trim().slice(0,200)).id,true)}return}
    const tg=t.closest('[data-tag]');
    if(tg){const fp=panels.find(x=>x.type==='files');
      if(fp){fp.tab='search';fp.q='#'+tg.dataset.tag;savePanels();renderPanel(fp);scrollToPanel(fp)}
      else if(panels.length<PANEL_MAX){const np={pid:uid(),type:'files',tab:'search',q:'#'+tg.dataset.tag,hist:[],edit:false,view:null};panels.unshift(np);savePanels();renderVault()}
      else toast('Avaa Kansiot-paneeli hakeaksesi tunnisteella');
      return}
    const task=t.closest('.task');
    if(task){const n=noteById(p.noteId),L=(n.body||'').split('\n'),i=+task.dataset.line;
      L[i]=L[i].replace(/\[( |x|X)\]/,m=>m==='[ ]'?'[x]':'[ ]');n.body=L.join('\n');n.updated=Date.now();save();renderPanel(p,true);return}
    const o=t.closest('[data-open]');if(o)openInNote(o.dataset.open);
  }else if(p.type==='note'){const o=t.closest('[data-open]');if(o)openInNote(o.dataset.open)}
});
function renderPanelsOfType(type){panels.forEach(p=>{if(p.type===type)renderPanel(p,true)})}

/* graph panes */
const gRO=new ResizeObserver(es=>{for(const en of es){const sec=en.target.closest('.vp');const p=sec&&P(sec.dataset.pid);if(p&&p.cv){sizeCv(p);if(p.view)drawGraphTo(p.cv,p.view,selNote());else fitPanelGraph(p,false)}}});
function sizeCv(p){const r=p.cv.parentElement.getBoundingClientRect(),d=devicePixelRatio||1;if(!r.width)return;p.cv.width=Math.round(r.width*d);p.cv.height=Math.round(r.height*d)}
function drawPanelGraphs(){if(typeof panels==='undefined'||vaultEl.hidden)return;const sel=selNote();panels.forEach(p=>{if(p.type==='graph'&&p.cv&&p.view)drawGraphTo(p.cv,p.view,sel)})}
function fitPanelGraph(p,anim){
  if(!p.cv)return;const r=p.cv.parentElement.getBoundingClientRect();if(!r.width)return;
  const ns=[...gNodes.values()];let t;
  if(!ns.length)t={x:r.width/2,y:r.height/2,k:1};
  else{const xs=ns.map(n=>n.x),ys=ns.map(n=>n.y),minX=Math.min(...xs)-40,maxX=Math.max(...xs)+40,minY=Math.min(...ys)-26,maxY=Math.max(...ys)+40;
    const bottom=Math.min(r.height*.35,110),k=Math.max(.15,Math.min(1.4,(r.width-12)/(maxX-minX),(r.height-12-bottom)/(maxY-minY)));
    t={k,x:r.width/2-(minX+maxX)/2*k,y:8+(r.height-12-bottom)/2-(minY+maxY)/2*k}}
  if(!anim||!p.view){p.view=t;drawGraphTo(p.cv,p.view,selNote());return}
  const s0={...p.view},t0=performance.now();
  const step=now=>{const e=Math.min(1,(now-t0)/380),q=1-Math.pow(1-e,3);p.view={x:s0.x+(t.x-s0.x)*q,y:s0.y+(t.y-s0.y)*q,k:s0.k+(t.k-s0.k)*q};drawGraphTo(p.cv,p.view,selNote());if(e<1)requestAnimationFrame(step)};
  requestAnimationFrame(step);
}
function setupGraphPanel(p,body){
  p.cv=body.querySelector('canvas');gRO.observe(body);
  requestAnimationFrame(()=>{sizeCv(p);if(!p.view)fitPanelGraph(p,false);else drawGraphTo(p.cv,p.view,selNote())});
  const ptr=new Map();let g=null;
  const rel=e=>{const r=body.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top}};
  const hit=pt=>{const v=p.view;if(!v)return null;const wx=(pt.x-v.x)/v.k,wy=(pt.y-v.y)/v.k;let best=null,bd=1e9;
    for(const n of gNodes.values()){const dd=Math.hypot(n.x-wx,n.y-wy);if(dd<gRadius(n.id)+16/v.k&&dd<bd){bd=dd;best=n}}return best};
  body.addEventListener('pointerdown',e=>{
    e.preventDefault();try{body.setPointerCapture(e.pointerId)}catch(_){}
    const pt=rel(e);ptr.set(e.pointerId,pt);
    if(ptr.size===1){const n=hit(pt);g=n?{t:'node',n,sx:pt.x,sy:pt.y,moved:false}:{t:'pan',sx:pt.x,sy:pt.y,vx:p.view.x,vy:p.view.y,moved:false}}
    else if(ptr.size===2){if(g&&g.t==='node'){g.n.fx=g.n.fy=null;g.n.hx=g.n.hy=null;gDrag=false;kick(.2)}const [a,b]=[...ptr.values()];
      g={t:'pinch',d0:Math.hypot(a.x-b.x,a.y-b.y)||1,k0:p.view.k,wx:((a.x+b.x)/2-p.view.x)/p.view.k,wy:((a.y+b.y)/2-p.view.y)/p.view.k}}
  });
  body.addEventListener('pointermove',e=>{
    if(!ptr.has(e.pointerId)||!g)return;const pt=rel(e);ptr.set(e.pointerId,pt);
    if(g.t==='pinch'&&ptr.size>=2){const [a,b]=[...ptr.values()],dd=Math.hypot(a.x-b.x,a.y-b.y),k=Math.max(.15,Math.min(3,g.k0*dd/g.d0));
      p.view={k,x:(a.x+b.x)/2-g.wx*k,y:(a.y+b.y)/2-g.wy*k};drawGraphTo(p.cv,p.view,selNote());return}
    const dx=pt.x-g.sx,dy=pt.y-g.sy;if(!g.moved&&Math.hypot(dx,dy)>6)g.moved=true;if(!g.moved)return;
    if(g.t==='node'){g.n.fx=(pt.x-p.view.x)/p.view.k;g.n.fy=(pt.y-p.view.y)/p.view.k;gDrag=true;kick(.3)}
    else if(g.t==='pan'){p.view.x=g.vx+dx;p.view.y=g.vy+dy;drawGraphTo(p.cv,p.view,selNote())}
  });
  const end=e=>{if(!ptr.has(e.pointerId))return;ptr.delete(e.pointerId);if(!g)return;
    if(g.t==='node'){g.n.fx=g.n.fy=null;g.n.hx=g.n.hy=null;gDrag=false;kick(.2);if(!g.moved&&e.type==='pointerup')openInNote(g.n.id);g=null}
    else if(g.t==='pan')g=null;else if(ptr.size<2)g=null};
  body.addEventListener('pointerup',end);body.addEventListener('pointercancel',end);
  body.addEventListener('wheel',e=>{e.preventDefault();const pt=rel(e),v=p.view,k=Math.max(.15,Math.min(3,v.k*Math.exp(-e.deltaY*.0015)));
    const wx=(pt.x-v.x)/v.k,wy=(pt.y-v.y)/v.k;p.view={k,x:pt.x-wx*k,y:pt.y-wy*k};drawGraphTo(p.cv,p.view,selNote())},{passive:false});
}

/* ⋯ menu */
function closeMenu(){$('vMenu').classList.remove('open');vMenuMode='main';vDelArmed=false}
function openMenu(p,btn){
  vMenuCtx=p;vMenuMode='main';vDelArmed=false;renderMenu();
  const m=$('vMenu'),vr=vaultEl.getBoundingClientRect(),r=btn.getBoundingClientRect();
  m.style.top=(r.bottom-vr.top+4)+'px';m.style.right='auto';m.style.left=Math.max(6,Math.min(r.right-vr.left-240,vr.width-246))+'px';m.classList.add('open');
}
function renderMenu(){
  const p=vMenuCtx,n=p&&noteById(p.noteId),m=$('vMenu');
  if(vMenuMode==='move'){
    m.innerHTML=`<div class="v-label">Siirrä kansioon</div><button data-mv="">${svg('note',18)}Ei kansiota</button>`+
      allFolders().map(f=>`<button data-mv="${esc(f)}" class="${n&&n.folder===f?'on':''}">${svg('folder',18)}${esc(f)}</button>`).join('')+
      `<hr><input class="v-inp" id="vMvNew" placeholder="+ Uusi kansio" maxlength="40">`;
    const inp=$('vMvNew');inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&inp.value.trim())moveTo(inp.value.trim())});return}
  m.innerHTML=`<button data-mact="new">${svg('compose',18)}Uusi muistio</button>`+(n?`
    <button data-mact="move">${svg('folder',18)}Siirrä kansioon…</button>
    <button data-mact="graph">${svg('graph',18)}Näytä graafissa</button>
    <button data-mact="pin">${svg('tack',18)}${n.pinned?'Poista kiinnitys':'Kiinnitä'}</button><hr>
    <button data-mact="del" class="danger">${svg('trash',18)}${vDelArmed?'Napauta uudelleen poistaaksesi':'Poista muistio'}</button>`:'');
}
function moveTo(f){const n=noteById(vMenuCtx?.noteId);if(!n)return;n.folder=f;if(f&&!state.folders.includes(f))state.folders.push(f);if(f)vOpen.add(f);persistOpen();save();closeMenu();renderPanel(vMenuCtx,true);renderPanelsOfType('files');toast(f?`Siirretty: ${f}`:'Siirretty juureen')}
$('vMenu').addEventListener('click',e=>{
  e.stopPropagation();const p=vMenuCtx,n=p&&noteById(p.noteId);
  const mv=e.target.closest('[data-mv]');if(mv){moveTo(mv.dataset.mv);return}
  const a=e.target.closest('[data-mact]');if(!a)return;const act=a.dataset.mact;
  if(act==='new'){closeMenu();activeNote=p.pid;openInNote(newVaultNote(n?.folder||'').id,true)}
  if(act==='move'){vMenuMode='move';renderMenu()}
  if(act==='graph'&&n){closeMenu();activeNote=p.pid;markActive();
    const gp=panels.find(x=>x.type==='graph');
    if(gp){drawPanelGraphs();scrollToPanel(gp)}else if(panels.length<PANEL_MAX)addPanel('graph');
    else{const i=panels.findIndex(x=>x.type!=='note'&&x.type!=='graph');const np={pid:uid(),type:'graph',noteId:null,hist:[],edit:false,tab:'files',q:'',view:null};
      if(i>=0){panels[i]=np}else{panels[panels.length-1]=np}savePanels();renderVault()}}
  if(act==='pin'&&n){n.pinned=!n.pinned;save();closeMenu();toast(n.pinned?'Kiinnitetty':'Kiinnitys poistettu')}
  if(act==='del'&&n){
    if(!vDelArmed){vDelArmed=true;renderMenu();return}
    const id=n.id;state.notes=state.notes.filter(x=>x.id!==id);state.links=state.links.filter(l=>!l.includes(id));
    panels.forEach(x=>{x.hist=(x.hist||[]).filter(h=>h!==id);if(x.noteId===id)x.noteId=x.hist.pop()||null});
    save();savePanels();closeMenu();rebuildGraph(false);renderVault();toast('Muistio poistettu');
  }
});
vaultEl.addEventListener('pointerdown',e=>{
  if($('vMenu').classList.contains('open')&&!e.target.closest('#vMenu')&&!e.target.closest('[data-act=more]'))closeMenu();
  if(!$('vAdd').hidden&&!e.target.closest('#vAdd')&&!e.target.closest('[data-plus]'))closeAdd();
});

function renderNotes(){if(notesMode==='map'){renderMap();if(!openId)requestAnimationFrame(()=>fitMap(false))}else if(notesMode==='graph'){requestAnimationFrame(()=>{sizeCanvas();rebuildGraph(true);if(!openId)fitGraph(false)})}else if(notesMode==='vault'){vaultDefault();renderVault()}else renderNoteList()}



/* ================= NOW CARD + CONFIRM ================= */
const toMin=hm=>{const[h,m]=hm.split(':').map(Number);return h*60+m};
const nowMin=()=>{const n=new Date();return n.getHours()*60+n.getMinutes()};
const fmtDur=m=>m<60?`${m} min`:(m%60?`${Math.floor(m/60)} h ${m%60} min`:`${m/60} h`);
function pickNowPlan(){
  const t=todayStr(),nm=nowMin();
  const live=(byDate[t]||[]).filter(p=>p.allDay||!p.end||toMin(p.end)>nm);
  return live.find(p=>!p.confirmed)||live[0]||null;
}
function planState(p){
  if(p.confirmed)return {cls:'done',txt:'Vahvistettu'};
  if(p.allDay||!p.start)return {cls:'wait',txt:'Odottaa vahvistusta'};
  const d=toMin(p.start)-nowMin();
  if(d>0)return {cls:'wait',txt:'Odottaa'};
  if(d>=-5)return {cls:'live',txt:'Alkaa nyt'};
  return {cls:'late',txt:'Käynnissä · ei vahvistettu'};
}
function renderNowCard(p){
  const slot=$('nowSlot');$('page-home').classList.toggle('home-has-now',!!p);
  if(!p){slot.innerHTML='';return}
  const st=planState(p),color=p.allDay?'var(--red)':(safeColor(p.tag?.color));
  slot.innerHTML=`<div class="now-card" style="--tag:${color}">
    <div class="nc-time">${esc(timeLabel(p))}</div>
    <span class="nc-chip ${st.cls}">${st.cls==='done'?svg('check',14,2.6):''}${st.txt}</span>
    <div class="nc-title">${esc(p.title||'Nimetön')}</div>
    ${p.place?`<div class="nc-row">${svg('pin',18)}<span>${esc(p.place)}</span></div>`:''}
    ${p.tag?`<div class="nc-row"><span class="sq" style="--tag:${safeColor(p.tag.color)}"></span><span style="color:var(--ink)">${esc(p.tag.label)}</span></div>`:''}
    <button class="btn-main ${p.confirmed?'ghost':''}" id="ncBtn">${p.confirmed?'Näytä tiedot':'Vahvista'}</button>
  </div>`;
  $('ncBtn').onclick=()=>openConfirm(p.id);
}
let cfId=null,cfResched=false;
function openConfirm(id){cfId=id;cfResched=false;renderConfirm();const c=$('cf');c.classList.add('open');c.setAttribute('aria-hidden','false')}
function closeConfirm(){const c=$('cf');c.classList.remove('open');c.setAttribute('aria-hidden','true');cfId=null}
$('cfClose').onclick=closeConfirm;$('cfDim').onclick=closeConfirm;
function renderConfirm(){
  const p=state.plans.find(x=>x.id===cfId);if(!p){closeConfirm();return}
  const n=new Date(),nowHHMM=`${pad(n.getHours())}:${pad(n.getMinutes())}`;
  let status='';
  if(p.confirmed){const c=new Date(p.confirmed);status=`<div class="tl-status ok">Vahvistettu<small>klo ${pad(c.getHours())}:${pad(c.getMinutes())}</small></div>`}
  else if(!p.allDay&&p.start&&p.date===todayStr()){
    const d=toMin(p.start)-nowMin();
    status=d>5?`<div class="tl-status early">Aikaisin<small>${fmtDur(d)}</small></div>`:d<-5?`<div class="tl-status late">Myöhässä<small>${fmtDur(-d)}</small></div>`:`<div class="tl-status ok">Ajallaan</div>`;
  }
  const rows=[];
  if(!p.allDay&&p.start)rows.push([p.start,'Aikataulutettu aloitus']);
  if(!p.allDay&&p.end)rows.push([p.end,'Suunniteltu päättyminen']);
  if(p.allDay)rows.push(['','Koko päivän suunnitelma']);
  $('cfTitle').textContent=p.confirmed?'Vahvistettu':'Vahvistus';
  $('cfBody').innerHTML=`<div class="tl">
      <div class="tl-time big">${nowHHMM}</div><div class="tl-bar on"></div>
      <div class="tl-main">
        <div class="tl-top"><h4>${p.confirmed?'Suunnitelma vahvistettu':'Vahvista suunnitelma'}</h4>${status}</div>
        <div class="tl-sub">${esc(p.title||'Nimetön')}${p.place?' · '+esc(p.place):''}</div>
        ${p.confirmed?`<div class="cf-done">${svg('check',18,2.6)}Merkitty vahvistetuksi</div>
          <div class="btn-row"><button class="btn-main ghost" id="cfUndo">Peru vahvistus</button><button class="btn-main ghost" id="cfRes">Siirrä</button></div>`
        :`<div class="btn-row"><button class="btn-main" id="cfOk">Vahvista</button><button class="btn-main ghost" id="cfRes">Siirrä</button></div>`}
        ${cfResched?`<div class="rs"><h5>Siirrä suunnitelmaa</h5>
          <div class="rs-grid">
            <button data-sh="15">+15 min</button><button data-sh="30">+30 min</button><button data-sh="60">+1 h</button>
            <button data-sh="-15">−15 min</button><button data-sh="-30">−30 min</button><button data-day="1">Huomenna</button>
          </div>
          <button class="rs-edit" id="cfEdit">Muokkaa aikaa ja tietoja…</button></div>`:''}
      </div>
      ${rows.map(([tm,l])=>`<div class="tl-time">${esc(tm)}</div><div class="tl-bar"></div><div class="tl-main" style="padding-bottom:16px"><div class="lbl">${l}</div></div>`).join('')}
    </div>`;
  const ok=$('cfOk');if(ok)ok.onclick=()=>{p.confirmed=Date.now();save();refresh();renderConfirm();toast('Vahvistettu');setTimeout(closeConfirm,700)};
  const un=$('cfUndo');if(un)un.onclick=()=>{delete p.confirmed;save();refresh();renderConfirm();toast('Vahvistus peruttu')};
  $('cfRes').onclick=()=>{cfResched=!cfResched;renderConfirm()};
  const ed=$('cfEdit');if(ed)ed.onclick=()=>{const id=p.id;closeConfirm();setTimeout(()=>openEditor(id),250)};
  $('cfBody').querySelectorAll('[data-sh],[data-day]').forEach(b=>b.onclick=()=>shiftPlan(p,+b.dataset.sh||0,+b.dataset.day||0));
}
function shiftPlan(p,mins,days){
  if(days){p.date=ymd(addDays(parse(p.date),days))}
  if(mins&&!p.allDay&&p.start){
    const mv=hm=>{let v=toMin(hm)+mins;v=Math.max(0,Math.min(23*60+59,v));return `${pad(Math.floor(v/60))}:${pad(v%60)}`};
    p.start=mv(p.start);if(p.end)p.end=mv(p.end);
  }
  delete p.confirmed;save();refresh();
  const lbl=days?`Siirretty huomiselle`:`Siirretty: ${timeLabel(p)}`;toast(lbl);
  if(days||p.date!==todayStr()){setTimeout(closeConfirm,500)}else renderConfirm();
}




/* ================= ACCOUNT + CLOUD SYNC (Firebase) ================= */
var CLOUD={user:null,ready:false,status:'off',err:'',lastOk:null,unsub:[],t:null,view:'',last:{plans:new Map(),notes:new Map(),meta:''}};
const clean=o=>JSON.parse(JSON.stringify(o));
const metaOf=()=>({name:state.name||'',folders:state.folders||[],links:(state.links||[]).map(l=>l[0]+'|'+l[1]),mode:state.mode||'light'});
function applyMeta(m){state.name=str(m.name,40);state.folders=cleanFolders(m.folders);
  state.links=cleanLinks((Array.isArray(m.links)?m.links:[]).map(x=>String(x).split('|')));if((m.mode==='dark'||m.mode==='light')&&m.mode!==state.mode){state.mode=m.mode;if(m.mode==='dark')prefs.mode='dark';else delete prefs.mode;savePrefs();applyMode()}}
function errText(e){const c=(e&&e.code)||'';
  if(['auth/invalid-credential','auth/wrong-password','auth/user-not-found','auth/invalid-email','auth/invalid-login-credentials','auth/missing-password'].includes(c))return 'Väärä sähköposti tai salasana.';
  if(c==='auth/admin-restricted-operation')return 'Tätä tiliä ei ole lisätty. Pyydä ylläpitäjää lisäämään sinut.';
  if(c==='auth/popup-closed-by-user'||c==='auth/cancelled-popup-request')return '';
  if(c==='auth/popup-blocked')return 'Kirjautumisikkuna estettiin. Salli ponnahdusikkunat tai käytä sähköpostia.';
  if(c==='auth/network-request-failed'||c==='unavailable')return 'Ei verkkoyhteyttä.';
  if(c==='auth/too-many-requests')return 'Liian monta yritystä. Yritä hetken päästä uudelleen.';
  if(c==='auth/unauthorized-domain')return 'Tätä osoitetta ei ole sallittu Firebasen asetuksissa.';
  if(c==='permission-denied')return 'Tiliäsi ei ole lisätty sallittujen listalle.';
  return (e&&e.message)||'Tuntematon virhe.';}
function setSync(st,err){CLOUD.status=st;if(err!=null)CLOUD.err=err;if(st==='ok')CLOUD.lastOk=new Date();renderAccount()}
function scheduleSync(){if(!CLOUD||!CLOUD.ready)return;clearTimeout(CLOUD.t);CLOUD.t=setTimeout(pushSync,900)}
async function pushSync(){
  if(!CLOUD||!CLOUD.ready||!window.FB)return;clearTimeout(CLOUD.t);
  const {db,doc,writeBatch}=FB,uid=CLOUD.user.uid,ops=[];
  for(const [kind,list] of [['plans',state.plans],['notes',state.notes]]){
    const last=CLOUD.last[kind],seen=new Set();
    for(const it of list){seen.add(it.id);const js=JSON.stringify(clean(it));if(last.get(it.id)!==js){ops.push(['set',kind,it.id,JSON.parse(js)]);last.set(it.id,js)}}
    for(const id of [...last.keys()])if(!seen.has(id)){ops.push(['del',kind,id]);last.delete(id)}
  }
  const m=JSON.stringify(metaOf());if(m!==CLOUD.last.meta){ops.push(['set','meta','main',JSON.parse(m)]);CLOUD.last.meta=m}
  if(!ops.length)return;
  setSync('saving');
  try{
    for(let i=0;i<ops.length;i+=400){const b=writeBatch(db);
      for(const [op,kind,id,data] of ops.slice(i,i+400)){const r=doc(db,'users',uid,kind,id);if(op==='set')b.set(r,data);else b.delete(r)}
      await b.commit()}
    setSync('ok','');
  }catch(e){CLOUD.last={plans:new Map(),notes:new Map(),meta:''};setSync('error',errText(e));if(e.code==='permission-denied')notAllowed()}
}
function isEditingNote(id){
  if(openId===id&&ed.contains(document.activeElement))return true;
  return typeof panels!=='undefined'&&panels.some(p=>p.type==='note'&&p.edit&&p.noteId===id);
}
function remoteRefresh(){
  index();renderHome();
  if(currentPage==='cal'){const sc=$('agendaScroll'),y=sc.scrollTop;renderCal();sc.scrollTop=y}
  if(currentPage==='more')$('nameInput').value=state.name||'';
  if(currentPage==='notes'){
    if(notesMode==='list')renderNoteList();
    else if(notesMode==='map'){if(!gest)renderMap()}
    else if(notesMode==='vault'){panels.forEach(p=>{if(!(p.type==='note'&&p.edit))renderPanel(p,true)});rebuildGraph(false)}
  }
}
function startListeners(){
  const {db,collection,doc,onSnapshot}=FB,uid=CLOUD.user.uid;
  const onErr=e=>{setSync('error',errText(e));if(e.code==='permission-denied')notAllowed()};
  for(const kind of ['plans','notes']){
    CLOUD.unsub.push(onSnapshot(collection(db,'users',uid,kind),{includeMetadataChanges:false},snap=>{
      let changed=false;const arr=state[kind],last=CLOUD.last[kind];
      snap.docChanges().forEach(ch=>{
        if(ch.doc.metadata.hasPendingWrites)return;
        const id=ch.doc.id,i=arr.findIndex(x=>x.id===id);
        if(ch.type==='removed'){if(i>=0&&!(kind==='notes'&&isEditingNote(id))){arr.splice(i,1);changed=true}last.delete(id);return}
        const data=(kind==='plans'?cleanPlan:cleanNote)({...ch.doc.data(),id});if(!data||data.id!==id)return;const js=JSON.stringify(clean(data));
        if(i>=0&&JSON.stringify(clean(arr[i]))===js){last.set(id,js);return}
        if(kind==='notes'&&isEditingNote(id))return;      // don't overwrite what you're typing
        last.set(id,js);if(i>=0)arr[i]=data;else arr.push(data);changed=true;
      });
      if(changed){saveLocal();remoteRefresh()}
      if(!snap.metadata.fromCache&&CLOUD.status!=='saving')setSync('ok');
    },onErr));
  }
  CLOUD.unsub.push(onSnapshot(doc(db,'users',uid,'meta','main'),d=>{
    if(!d.exists()||d.metadata.hasPendingWrites)return;
    const m=d.data(),js=JSON.stringify(clean({name:m.name||'',folders:m.folders||[],links:m.links||[],mode:m.mode||'light'}));
    if(js===CLOUD.last.meta)return;CLOUD.last.meta=js;applyMeta(m);saveLocal();remoteRefresh();
  },onErr));
}
function endBoot(){document.documentElement.classList.remove('booting')}
function resetForAccount(){
  if(typeof openId!=='undefined'&&openId)closeNote(true);
  if(typeof closeConfirm==='function')closeConfirm();
  panels.forEach(p=>{p.hist=[];p.edit=false;if(p.type==='note')p.noteId=null});
}
async function onSignedIn(user){
  CLOUD.unsub.forEach(x=>x());CLOUD.unsub=[];CLOUD.ready=false;
  CLOUD.user=user;setSync('connecting','');
  const {db,doc,getDoc,getDocs,collection}=FB,uid=user.uid;
  try{
    const metaSnap=await getDoc(doc(db,'users',uid,'meta','main'));
    let plans=[],notes=[];
    if(metaSnap.exists()){
      const [ps,ns]=await Promise.all([getDocs(collection(db,'users',uid,'plans')),getDocs(collection(db,'users',uid,'notes'))]);
      plans=ps.docs.map(d=>cleanPlan({...d.data(),id:d.id})).filter(Boolean);notes=ns.docs.map(d=>cleanNote({...d.data(),id:d.id})).filter(Boolean);
    }
    // the account's own data replaces the preview completely; nothing from this device is uploaded
    resetForAccount();
    state.plans=plans;state.notes=notes;state.folders=[];state.links=[];state.name='';
    if(metaSnap.exists())applyMeta(metaSnap.data());
    else state.name=str(String(user.displayName||'').split(' ')[0],40);
    CLOUD.last={plans:new Map(plans.map(x=>[x.id,JSON.stringify(clean(x))])),notes:new Map(notes.map(x=>[x.id,JSON.stringify(clean(x))])),
      meta:metaSnap.exists()?JSON.stringify(metaOf()):''};
    CLOUD.ready=true;lsSet(SESSION_KEY,uid);
    if(!metaSnap.exists())await pushSync();        // a new account: creates only its settings document
    remoteRefresh();startListeners();setSync('ok','');endBoot();
    if(LEGACY)setTimeout(offerLegacy,500);
  }catch(e){endBoot();if(e.code==='permission-denied'){notAllowed();return}setSync('error',errText(e))}
}
/* removes every trace of an account from this device and returns to the preview */
let wiping=false;
async function wipeAndReload(msg){
  if(wiping)return;wiping=true;
  CLOUD.ready=false;CLOUD.user=null;CLOUD.unsub.forEach(u=>u());CLOUD.unsub=[];
  try{await FB.signOut(FB.auth)}catch(e){}
  try{await FB.terminate(FB.db);await FB.clearIndexedDbPersistence(FB.db)}catch(e){}
  lsDel(SESSION_KEY);delete prefs.panels;delete prefs.open;savePrefs();
  if(msg)try{sessionStorage.setItem('kalenteri.msg',msg)}catch(e){}
  location.reload();
}
async function notAllowed(){
  const hadData=CLOUD.ready;
  if(hadData){wipeAndReload('Tiliäsi ei ole lisätty sallittujen listalle.');return}
  CLOUD.unsub.forEach(u=>u());CLOUD.unsub=[];
  CLOUD.user=null;lsDel(SESSION_KEY);
  toast('Tiliäsi ei ole lisätty sallittujen listalle');
  try{await FB.signOut(FB.auth)}catch(e){}
  setSync('off','Tiliäsi ei ole lisätty sallittujen listalle. Pyydä ylläpitäjää lisäämään sähköpostisi.');
}
async function doSignOut(){
  try{await pushSync()}catch(e){}
  wipeAndReload();
}
/* data from older versions on this device: added to the account only if the user says so */
let legacyDelArmed=false;
function offerLegacy(){
  if(!LEGACY||!CLOUD.ready)return;
  const np=LEGACY.plans.length,nn=LEGACY.notes.length;
  $('cfTitle').textContent='Aiemmat tiedot';
  $('cfBody').innerHTML=`<p class="lg-p">Tälle laitteelle on aiemmin tallennettu ilman kirjautumista <b>${np} ${np===1?'suunnitelma':'suunnitelmaa'}</b> ja <b>${nn} ${nn===1?'muistio':'muistiota'}</b>.</p>
    <p class="lg-p">Lisätäänkö ne tilille <b>${esc(CLOUD.user.email||'')}</b>? Lisää ne vain, jos ne ovat sinun.</p>
    <div class="lg-btns"><button class="btn-main" id="lgAdd">Lisää tililleni</button>
    <button class="btn-main ghost" id="lgLater">Päätä myöhemmin</button>
    <button class="btn-main ghost lg-del" id="lgDel">Poista tältä laitteelta</button></div>`;
  legacyDelArmed=false;cfId=null;
  const c=$('cf');c.classList.add('open');c.setAttribute('aria-hidden','false');
  $('lgAdd').onclick=()=>{
    const pid=new Set(state.plans.map(x=>x.id)),nid=new Set(state.notes.map(x=>x.id));let a=0;
    for(const x of LEGACY.plans)if(!pid.has(x.id)){state.plans.push(x);a++}
    for(const x of LEGACY.notes)if(!nid.has(x.id)){state.notes.push(x);a++}
    state.folders=[...new Set([...(state.folders||[]),...LEGACY.folders])];
    const ids=new Set(state.notes.map(x=>x.id)),have=new Set((state.links||[]).map(l=>l.join('|')));
    for(const l of LEGACY.links)if(ids.has(l[0])&&ids.has(l[1])&&!have.has(l.join('|')))state.links.push(l);
    lsDel(KEY);LEGACY=null;save();remoteRefresh();closeConfirm();renderAccount();toast(`Lisätty tilillesi: ${a} kohdetta`);
  };
  $('lgLater').onclick=closeConfirm;
  $('lgDel').onclick=()=>{
    if(!legacyDelArmed){legacyDelArmed=true;$('lgDel').textContent='Napauta uudelleen poistaaksesi';return}
    lsDel(KEY);LEGACY=null;closeConfirm();renderAccount();toast('Aiemmat tiedot poistettu tältä laitteelta');
  };
}
function renderAccount(){
  const box=$('acct');if(!box)return;
  const sh=$('storeHint');if(sh)sh.textContent=CLOUD.user?'Olet kirjautuneena: tiedot tallentuvat tilillesi automaattisesti. Varmuuskopio on silti hyvä ottaa joskus.':'Esikatselu: sovellus näyttää esimerkkitietoja. Muutokset eivät tallennu, ja ne katoavat, kun sivu ladataan uudelleen. Kirjaudu sisään tallentaaksesi omat tietosi.';
  const pv=$('pvPill');if(pv)pv.hidden=!!CLOUD.user;
  if(!window.FB){box.innerHTML=CLOUD.fbFailed?'<p>Kirjautuminen ei ole nyt käytettävissä (ei verkkoyhteyttä). Sovellus toimii silti tällä laitteella.</p>':'<p>Ladataan…</p>';CLOUD.view='nofb';return}
  if(CLOUD.user){
    const u=CLOUD.user,st=CLOUD.status,off=!navigator.onLine;
    const txt=off?'Offline – muutokset tallentuvat, kun yhteys palaa':st==='connecting'?'Yhdistetään…':st==='saving'?'Tallennetaan…':st==='error'?('Virhe: '+CLOUD.err):
      CLOUD.lastOk?`Synkronoitu klo ${CLOUD.lastOk.getHours()}.${pad(CLOUD.lastOk.getMinutes())}`:'Synkronoitu';
    const html=`<div class="acct-user"><span class="acct-av">${esc((u.email||'?')[0].toUpperCase())}</span><div style="min-width:0">
        <b>${esc(u.email||'')}</b><div class="acct-st ${off?'saving':st}"><i></i><span>${esc(txt)}</span></div></div></div>
      <div class="acct-ver ${u.emailVerified?'ok':''}">${u.emailVerified?svg('check',15,2.6)+'Sähköposti vahvistettu':'Sähköpostia ei ole vahvistettu'}${u.emailVerified?'':'<button class="acct-link" id="acctVerify">Lähetä vahvistuslinkki</button>'}</div>
      <p>Muutokset tallentuvat automaattisesti ja näkyvät kaikilla laitteilla, joilla olet kirjautuneena.</p>
      ${LEGACY?'<button class="acct-btn google" id="acctLegacy">Aiemmat tiedot tällä laitteella…</button>':''}
      <button class="acct-out" id="acctOut">Kirjaudu ulos</button>`;
    box.innerHTML=html;CLOUD.view='in';
    if($('acctLegacy'))$('acctLegacy').onclick=offerLegacy;
    if($('acctVerify'))$('acctVerify').onclick=async()=>{const b=$('acctVerify');b.disabled=true;
      try{await FB.sendEmailVerification(FB.auth.currentUser||u);b.textContent='Linkki lähetetty – avaa se sähköpostistasi';toast('Vahvistuslinkki lähetetty')}
      catch(e){b.disabled=false;toast(errText(e)||'Lähetys epäonnistui',3000)}};
    $('acctOut').onclick=()=>{$('acctOut').disabled=true;$('acctOut').textContent='Kirjaudutaan ulos…';doSignOut()};
    return;
  }
  if(CLOUD.view==='out'){$('acctErr').textContent=CLOUD.err||'';return}   // keep typed values
  box.innerHTML=`<p>Kirjaudu sisään, niin suunnitelmat ja muistiot tallentuvat automaattisesti tilillesi ja pysyvät samoina puhelimessa ja tietokoneella. Ilman kirjautumista sovellus on esikatselu, joka ei tallenna mitään.</p>
    ${LEGACY?'<p><b>Tällä laitteella on aiemmin tallennettuja tietoja.</b> Kirjauduttuasi voit lisätä ne tilillesi tai poistaa ne.</p>':''}
    <button class="acct-btn google" id="acctGoogle">${svg('google',20)}Jatka Googlella</button>
    <div class="acct-or">tai</div>
    <input type="email" id="acctEmail" placeholder="Sähköposti" autocomplete="username" inputmode="email">
    <input type="password" id="acctPass" placeholder="Salasana" autocomplete="current-password">
    <button class="acct-btn primary" id="acctLogin">Kirjaudu sisään</button>
    <button class="acct-link" id="acctReset">Unohditko salasanan?</button>
    <div class="acct-err" id="acctErr">${esc(CLOUD.err||'')}</div>`;
  CLOUD.view='out';
  const err=m=>{CLOUD.err=m;$('acctErr').textContent=m};
  $('acctLogin').onclick=async()=>{
    const em=$('acctEmail').value.trim(),pw=$('acctPass').value;if(!em||!pw){err('Kirjoita sähköposti ja salasana.');return}
    const b=$('acctLogin');b.disabled=true;b.textContent='Kirjaudutaan…';err('');
    try{await FB.signInWithEmailAndPassword(FB.auth,em,pw)}catch(e){err(errText(e));b.disabled=false;b.textContent='Kirjaudu sisään'}
  };
  $('acctPass').addEventListener('keydown',e=>{if(e.key==='Enter')$('acctLogin').click()});
  $('acctGoogle').onclick=async()=>{
    err('');
    try{await FB.signInWithPopup(FB.auth,new FB.GoogleAuthProvider())}
    catch(e){const m=errText(e);const sa=window.navigator.standalone||matchMedia('(display-mode: standalone)').matches;
      err(m&&sa&&!/lisätty/.test(m)?m+' Kotivalikon sovelluksessa Google-kirjautuminen ei aina toimi – käytä sähköpostia ja salasanaa tai avaa sovellus Safarissa.':m)}
  };
  $('acctReset').onclick=async()=>{
    const em=$('acctEmail').value.trim();if(!em){err('Kirjoita ensin sähköpostisi yllä olevaan kenttään.');return}
    try{await FB.sendPasswordResetEmail(FB.auth,em);err('');toast('Salasanan palautuslinkki lähetetty, jos tili on olemassa')}catch(e){err(errText(e))}
  };
}
function fbInit(){
  renderAccount();
  FB.onAuthStateChanged(FB.auth,u=>{
    if(u){if(!CLOUD.user||CLOUD.user.uid!==u.uid){CLOUD.view='';onSignedIn(u)}}
    else if(CLOUD.user||lsGet(SESSION_KEY)){wipeAndReload(CLOUD.user?'Olet kirjautunut ulos.':'')}   // session ended: remove what it left on this device
    else endBoot();
  });
}
if(window.FB)fbInit();else window.addEventListener('fb-ready',fbInit,{once:true});
setTimeout(()=>{if(!window.FB){CLOUD.fbFailed=true;renderAccount();if(document.documentElement.classList.contains('booting')){endBoot();toast('Tiliä ei voitu ladata (ei yhteyttä). Näytetään esikatselu, joka ei tallenna.',4000)}}},8000);
try{const m=sessionStorage.getItem('kalenteri.msg');if(m){sessionStorage.removeItem('kalenteri.msg');setTimeout(()=>toast(m,3500),600)}}catch(e){}
renderAccount();
document.addEventListener('visibilitychange',()=>{if(document.hidden)pushSync();else{const cu=window.FB&&FB.auth.currentUser;if(cu&&!cu.emailVerified&&cu.reload)cu.reload().then(()=>{CLOUD.user=FB.auth.currentUser||cu;renderAccount()}).catch(()=>{})}});
window.addEventListener('online',()=>renderAccount());window.addEventListener('offline',()=>renderAccount());

/* ================= APPEARANCE ================= */
function applyMode(){
  const dark=state.mode==='dark';
  document.documentElement.dataset.mode=dark?'dark':'light';
  document.querySelector('meta[name=theme-color]').content=dark?'#0d0d0d':'#1f3a2e';
  $('modeLight').classList.toggle('on',!dark);$('modeDark').classList.toggle('on',dark);
  if(typeof drawGraph==='function')try{drawGraph()}catch(e){}
}
$('modeLight').innerHTML=svg('sun',19)+'Vaalea';$('modeDark').innerHTML=svg('moon',19)+'Tumma';
$('modeSeg').addEventListener('click',e=>{const b=e.target.closest('[data-mode-set]');if(!b)return;state.mode=b.dataset.modeSet;if(state.mode==='dark')prefs.mode='dark';else delete prefs.mode;savePrefs();if(CLOUD.ready)scheduleSync();applyMode()});
applyMode();

/* ================= SETTINGS ================= */
$('nameInput').addEventListener('input',e=>{state.name=e.target.value;save();renderHome()});
$('exportBtn').onclick=async()=>{
  const data=JSON.stringify({app:'kalenteri',version:1,exported:new Date().toISOString(),name:state.name,plans:state.plans},null,2);
  const file=new File([data],`kalenteri-varmuuskopio-${todayStr()}.json`,{type:'application/json'});
  try{if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:'Kalenterin varmuuskopio'});return}}catch(e){if(e.name==='AbortError')return}
  const a=document.createElement('a');a.href=URL.createObjectURL(file);a.download=file.name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000);
};
$('importBtn').onclick=()=>$('importFile').click();
$('importFile').onchange=async e=>{
  const f=e.target.files[0];if(!f)return;
  try{const d=JSON.parse(await f.text());if(!Array.isArray(d.plans))throw 0;
    const ids=new Set(state.plans.map(p=>p.id));let n=0;
    for(const raw of d.plans){const p=cleanPlan(raw);if(p&&!ids.has(p.id)){state.plans.push(p);ids.add(p.id);n++}}
    if(d.name&&!state.name)state.name=str(d.name,40);
    save();refresh();toast(`Tuotu ${n} suunnitelmaa`);
  }catch(err){toast('Tiedostoa ei voitu lukea')}
  e.target.value='';
};
let wipeArmed=false;
$('wipeBtn').onclick=()=>{
  if(!wipeArmed){wipeArmed=true;$('wipeBtn').querySelector('span').textContent='Napauta uudelleen vahvistaaksesi';
    setTimeout(()=>{wipeArmed=false;$('wipeBtn').querySelector('span').textContent='Poista kaikki suunnitelmat'},3000);return}
  state.plans=[];save();refresh();toast('Kaikki suunnitelmat poistettu');
};
$('demoBtn').onclick=()=>{state.plans=state.plans.filter(p=>!p.demo);const gone=new Set(state.notes.filter(n=>n.demo).map(n=>n.id));state.notes=state.notes.filter(n=>!n.demo);state.links=state.links.filter(l=>!gone.has(l[0])&&!gone.has(l[1]));save();refresh();toast('Esimerkit poistettu')};
const standalone=window.navigator.standalone||matchMedia('(display-mode: standalone)').matches;
if(standalone){$('installLabel').hidden=true;$('installHint').hidden=true}

/* ================= NAV ================= */
let currentPage='home';
function go(page){
  currentPage=page;
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+page));
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.page===page));
  if(page==='cal'){
    if(mode==='list'){listFrom=addMonths(viewMonth,-2);listTo=addMonths(viewMonth,7)}
    renderCal();requestAnimationFrame(()=>{scrollAgendaTo(selDate);updateTopTitle()});
  }
  if(page==='home')renderHome();
  if(page==='notes')renderNotes();
  if(page!=='notes'&&openId)closeNote(true);
  if(page!=='notes'&&typeof closeSide==='function'){closeSide();closeMenu()}
  if(page==='more'){$('nameInput').value=state.name||'';$('demoBtn').hidden=!(state.plans.some(p=>p.demo)||state.notes.some(n=>n.demo))}
}
$('nav').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(!b)return;
  if(b.dataset.page==='cal'&&currentPage!=='cal'){/* keep last mode */}
  go(b.dataset.page)});

function refresh(){
  index();renderHome();
  if(currentPage==='cal'){const sc=$('agendaScroll'),y=sc.scrollTop;
    if(mode==='list'){renderCal();sc.scrollTop=y}else renderCal()}
  if(currentPage==='more')$('demoBtn').hidden=!(state.plans.some(p=>p.demo)||state.notes.some(n=>n.demo));
}

/* first run: ask for name */
function askName(){
  $('sTitle').textContent='Tervetuloa';$('sSave').textContent='Valmis';
  $('sBody').innerHTML=`<p class="hint" style="margin:14px 20px 0;font-size:15px;color:var(--ink2)">Miten haluat, että sinua tervehditään?</p>
    <div class="f-group"><div class="f-row"><input class="left" id="fName" placeholder="Nimesi" autocomplete="given-name" maxlength="40"></div></div>`;
  editing=null;sheetMode='name';openSheet();
  $('fName').addEventListener('keydown',e=>{if(e.key==='Enter')saveName()});
}
function saveName(){state.name=$('fName').value.trim();save();renderHome();closeSheet()}

index();renderHome();
booted=true;
/* refresh "now" markers & day change every minute */
setInterval(()=>{if(!editing&&!$('sheet').classList.contains('open'))refresh()},60000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()});

if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{});
