(()=>{
  'use strict';
  document.documentElement.classList.add('js');
  const year=document.getElementById('year');
  if(year)year.textContent=new Date().getFullYear();
  const toggle=document.getElementById('menu-toggle');
  const mobile=document.getElementById('mobile-nav');
  const setMenu=(open)=>{
    if(!toggle||!mobile)return;
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
    mobile.classList.toggle('is-open',open);
    mobile.inert=!open;
    document.body.classList.toggle('nav-open',open);
  };
  if(toggle&&mobile){
    toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
    mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
    window.addEventListener('resize',()=>{if(window.innerWidth>800)setMenu(false)});
  }
  const elements=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion:reduce)').matches){
    elements.forEach(el=>el.classList.add('visible'));
  }else{
    const io=new IntersectionObserver((entries)=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}
    }),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
    elements.forEach(el=>io.observe(el));
  }
})();
