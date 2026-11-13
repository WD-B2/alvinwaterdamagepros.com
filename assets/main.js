(function(){
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),s=document.getElementById('mob-scrim');
  if(!t||!d)return;
  function open(){d.classList.add('open');if(s)s.classList.add('open');t.setAttribute('aria-expanded','true');document.documentElement.style.overflow='hidden';}
  function close(){d.classList.remove('open');if(s)s.classList.remove('open');t.setAttribute('aria-expanded','false');document.documentElement.style.overflow='';}
  t.addEventListener('click',function(){d.classList.contains('open')?close():open();});
  if(s)s.addEventListener('click',close);
  var c=d.querySelector('.close');if(c)c.addEventListener('click',close);
  d.addEventListener('click',function(e){if(e.target.tagName==='A')close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  window.addEventListener('resize',function(){if(window.innerWidth>900)close();});
})();
