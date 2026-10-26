// Runs before first paint: applies dark mode and shows 'loading account' if a session is open.
// Reads only device preferences, never personal data.
try{var _p=JSON.parse(localStorage.getItem('kalenteri.prefs')||'{}'),_o=JSON.parse(localStorage.getItem('kalenteri.v1')||'{}');if((_p&&_p.mode==='dark')||(_o&&_o.mode==='dark')){document.documentElement.dataset.mode='dark';document.querySelector('meta[name=theme-color]').content='#0d0d0d'}if(localStorage.getItem('kalenteri.session'))document.documentElement.classList.add('booting')}catch(e){}
