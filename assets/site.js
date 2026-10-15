(function(){
 const page=decodeURIComponent(location.pathname.split('/').pop()||'index.html');
 const CFG={"tag": "GCSE Religious Education", "cta": ["knowledge-organisers.html", "Knowledge organisers"], "units": [["year9.html", "Year 9"], ["year10.html", "Year 10"]], "groups": [["Curriculum", [["year9.html", "Year 9"], ["year10.html", "Year 10"]]], ["Study", [["knowledge-organisers.html", "Knowledge organisers"], ["key-terms.html", "Key terms"], ["sequencing.html", "Sequencing"], ["about.html", "Intent, implementation & impact"]]], ["Subjects", [["../re-alevel/index.html", "A Level Religious Education"], ["../english-gcse/index.html", "GCSE English"], ["../english-alevel/index.html", "A Level English Literature"], ["../maths-gcse/index.html", "GCSE Mathematics"], ["../maths-alevel/index.html", "A Level Mathematics"]]]]};const units=CFG.units;const R=(document.currentScript&&document.currentScript.dataset.root)||'';
 const grp=(id,label,items)=>`<li><button aria-expanded="false" aria-controls="${id}">${label}</button><ul class="nk-menu" id="${id}">${items.map(([h,t,n])=>`<li><a href="${h?R+h:''}">${n?`<span>${n}</span>`:''}${t}</a></li>`).join('')}</ul></li>`;
 const hdr=document.createElement('header');hdr.className='site-hdr';
 hdr.innerHTML=`<div class="site-hdr__in"><a class="nk-brand" href="${R}index.html"><b>Nishkam School West London</b><small>${CFG.tag}</small></a>
 <button class="nk-burger" aria-label="Open menu" aria-expanded="false" aria-controls="siteNav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
 <div role="navigation" aria-label="Main"><ul class="nk-nav" id="siteNav"><li><a href="${R}index.html">Home</a></li>${CFG.groups.map((g,i)=>grp('m-'+i,g[0],g[1])).join('')}<li><a class="nk-cta" href="${R}${CFG.cta[0]}">${CFG.cta[1]}</a></li></ul></div></div>`;
 const skip=document.createElement('a');skip.className='nk-skip';skip.href='#main';skip.textContent='Skip to content';
 const bar=document.createElement('div');bar.className='nk-progress';bar.setAttribute('aria-hidden','true');
 document.body.prepend(bar);document.body.prepend(hdr);document.body.prepend(skip);
 const main=document.querySelector('main');if(main&&!main.id)main.id='main';
 hdr.querySelectorAll('a').forEach(a=>{if(decodeURIComponent(a.getAttribute('href')).split('/').pop()===page&&!(R&&page==='index.html'&&a.getAttribute('href')===R+'index.html')){a.setAttribute('aria-current','page');}});
 const nav=hdr.querySelector('.nk-nav'),burger=hdr.querySelector('.nk-burger');
 const closeMenus=except=>hdr.querySelectorAll('.nk-nav button').forEach(b=>{if(b!==except){b.setAttribute('aria-expanded','false');document.getElementById(b.getAttribute('aria-controls')).classList.remove('open');}});
 hdr.querySelectorAll('.nk-nav button').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();const o=b.getAttribute('aria-expanded')==='true';closeMenus(b);b.setAttribute('aria-expanded',String(!o));document.getElementById(b.getAttribute('aria-controls')).classList.toggle('open',!o);}));
 document.addEventListener('click',e=>{if(!hdr.contains(e.target))closeMenus();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenus();setNav(false);}});
 const setNav=o=>{nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',String(o));burger.setAttribute('aria-label',o?'Close menu':'Open menu');document.body.classList.toggle('nav-open',o);};
 burger.addEventListener('click',()=>setNav(!nav.classList.contains('open')));
 const top=document.createElement('button');top.className='nk-to-top';top.setAttribute('aria-label','Back to top');top.textContent='↑';
 top.onclick=()=>scrollTo({top:0,behavior:'smooth'});document.body.append(top);
 addEventListener('scroll',()=>{const h=document.documentElement;const p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);bar.style.width=(p*100)+'%';top.classList.toggle('show',h.scrollTop>600);},{passive:true});
 const ui=units.findIndex(u=>u[0]===page);
 if(ui>=0&&main){const p=document.createElement('nav');p.className='nk-pager';p.setAttribute('aria-label','Unit navigation');
  p.innerHTML=(ui>0?`<a href="${R+units[ui-1][0]}"><small>← Previous</small>${units[ui-1][1]}</a>`:'')+(ui<units.length-1?`<a class="next" href="${R+units[ui+1][0]}"><small>Next →</small>${units[ui+1][1]}</a>`:'');
  const f=main.querySelector('footer');f?main.insertBefore(p,f):main.append(p);}
})();

document.querySelectorAll('.site-hdr .nk-nav > li > button').forEach(b=>b.addEventListener('click',()=>{const m=document.getElementById(b.getAttribute('aria-controls'));if(innerWidth>1000){const r=b.getBoundingClientRect();m.style.left=Math.min(r.left,innerWidth-m.offsetWidth-12)+'px';}else m.style.left='';}));
