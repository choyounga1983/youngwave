/* =========================================================
   YOUNG WAVE CREATIVE — app logic (black / mega-MCN)
   ========================================================= */
const PLAT_ICON = {
  tiktok:'<svg viewBox="0 0 24 24"><path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.2-3.6-.8v6.2c0 3.4-2.6 5.9-5.9 5.9S4.6 18.3 4.6 15s2.9-5.8 6.1-5.4v2.7c-.4-.1-.9-.2-1.3-.1-1.4.1-2.3 1.2-2.2 2.7.1 1.3 1.2 2.3 2.5 2.3 1.5 0 2.6-1.1 2.6-2.7V3h4.2z"/></svg>',
  youtube:'<svg viewBox="0 0 24 24"><path d="M23 12s0-3.2-.4-4.7c-.2-.9-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.8-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.9.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.8 1.7-1.7.4-1.5.4-4.7.4-4.7zM9.8 15V9l5.2 3-5.2 3z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1A6.7 6.7 0 1018.7 12 6.7 6.7 0 0012 5.3zm0 11A4.3 4.3 0 1116.3 12 4.3 4.3 0 0112 16.3zm6.9-11.3a1.6 1.6 0 11-1.6-1.6 1.6 1.6 0 011.6 1.6z"/></svg>',
  facebook:'<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></svg>'
};

/* merge extra i18n */
if(typeof I18N_EXTRA!=="undefined"){for(const l in I18N_EXTRA){Object.assign(I18N[l],I18N_EXTRA[l]);}}

let LANG = localStorage.getItem("yw_lang") || "ko";
if(!I18N[LANG]) LANG = "ko";
function t(k){return (I18N[LANG]&&I18N[LANG][k])||(I18N.en&&I18N.en[k])||k;}
function lbl(g,c){const o=LABELS[g][c];return o?(o[LANG]||o.en):c;}
function flagName(o){return o[LANG]||o.en;}

function applyI18n(){
  document.documentElement.lang=LANG;
  document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.getAttribute("data-i18n")));
  document.querySelectorAll("[data-i18n-ph]").forEach(e=>e.setAttribute("placeholder",t(e.getAttribute("data-i18n-ph"))));
  if(typeof renderFilters==="function")renderFilters();
  if(typeof renderInfluencers==="function")renderInfluencers();
  if(typeof renderFlags==="function")renderFlags();
  if(typeof renderProjects==="function")renderProjects();
  if(typeof renderClients==="function")renderClients();
  if(typeof renderWhy==="function")renderWhy();
  if(typeof renderChain==="function")renderChain();
  if(typeof renderFlow==="function")renderFlow();
  if(typeof renderPropose==="function")renderPropose();
  if(typeof renderTeam==="function")renderTeam();
}

/* ---------- chrome (nav + footer) ---------- */
function buildChrome(active){
  const links=["home","influencers","services","studio","history","about","contact"];
  const pages={home:"index.html",influencers:"influencers.html",services:"services.html",studio:"index.html#studio",history:"index.html#history",about:"about.html",contact:"contact.html"};
  const navLinks=links.map(k=>`<a href="${pages[k]}" class="${k===active?'active':''}" data-i18n="nav.${k}"></a>`).join("");
  const langOpts=LANGS.map(l=>`<option value="${l.code}" ${l.code===LANG?'selected':''}>${l.label}</option>`).join("");
  const header=document.querySelector("header.nav");
  if(header){
    header.innerHTML=`<div class="wrap nav-inner">
      <a class="brand" href="index.html"><img src="assets/youngwave-logo.png" alt="Young Wave Creative"></a>
      <nav class="nav-links" id="navLinks">${navLinks}</nav>
      <div class="nav-right">
        <select class="lang-select" id="langSelect" aria-label="Language">${langOpts}</select>
        <a class="btn btn-y" href="contact.html" data-i18n="cta.brand"></a>
        <button class="nav-toggle" id="navToggle">☰</button>
      </div></div>`;
    document.getElementById("langSelect").addEventListener("change",e=>{LANG=e.target.value;localStorage.setItem("yw_lang",LANG);applyI18n();});
    document.getElementById("navToggle").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
  }
  const footer=document.querySelector("footer");
  if(footer){
    footer.innerHTML=`<div class="wrap">
      <div class="foot-lockup">
        <div class="lk">
          <img class="lk-yw" src="assets/youngwave-logo.png" alt="Young Wave Creative">
          <span class="x">✕</span>
          <img class="lk-brooks" src="assets/brooks-yellow.png" alt="Brooks Global">
        </div>
        <div class="tagy">YOUNG WAVE CREATIVE × BROOKS GLOBAL · KOREA – SOUTHEAST ASIA</div>
      </div>
      <div class="foot-grid">
        <div class="col-brand">
          <img src="assets/youngwave-logo.png" alt="Young Wave Creative">
          <p data-i18n="foot.tag"></p>
          <div class="foot-social">
            <a href="${(typeof SOCIAL!=='undefined'&&SOCIAL.ig)||'#'}" target="_blank" rel="noopener" aria-label="Instagram">${PLAT_ICON.instagram}</a>
            <a href="${(typeof SOCIAL!=='undefined'&&SOCIAL.yt)||'#'}" target="_blank" rel="noopener" aria-label="YouTube">${PLAT_ICON.youtube}</a>
          </div>
        </div>
        <div class="foot-col"><h5 data-i18n="foot.menu"></h5>
          ${links.map(k=>`<a href="${pages[k]}" data-i18n="nav.${k}"></a>`).join("")}</div>
        <div class="foot-col foot-contact"><h5 data-i18n="foot.contact"></h5>
          <div class="fc"><span class="fc-name">조영아 · Strella Young</span><span class="fc-role">영웨이브 본사 대표</span><a href="mailto:youngwavecreative@gmail.com">youngwavecreative@gmail.com</a></div>
          <div class="fc"><span class="fc-name">Brooks Kim · 김현우</span><span class="fc-role">한국 지사 · Brooks Global 대표</span><a href="mailto:brooksservices.kim@gmail.com">brooksservices.kim@gmail.com</a></div>
          <div class="fc"><span class="fc-name">Jenny Go · 고은주</span><span class="fc-role">한국 지사 · Brooks Global Sales Director</span><a href="mailto:jinniko7490@naver.com">jinniko7490@naver.com</a></div>
          <a class="fc-addr">HCMC · Vincom Center, District 1 &nbsp;/&nbsp; Incheon · Brooks Global (Korea)</a></div>
      </div>
      <div class="foot-bottom">
        <span>© ${new Date().getFullYear()} Young Wave Creative. <span data-i18n="foot.rights"></span></span>
        <span data-i18n="foot.partner"></span>
      </div></div>`;
  }
}

/* ---------- HERO reel (YouTube IFrame API = reliable muted autoplay) ---------- */
let _heroIdx=0,_heroTimer=null,_ytPlayer=null;
function ytEmbed(id,muted){return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${muted?1:0}&controls=1&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1`;}
/* On file:// YouTube embeds throw Error 153 (null origin) → open on YouTube instead. On http(s) embed inline. */
function embedOrOpen(container,vid){
  if(location.protocol==="file:"){window.open("https://www.youtube.com/watch?v="+vid,"_blank","noopener");return;}
  container.innerHTML=`<iframe src="${ytEmbed(vid,0)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
}
function buildHero(){
  const box=document.getElementById("heroVideo");
  if(!box||typeof REEL==="undefined")return;
  const dotBox=document.getElementById("heroDots");
  if(dotBox)dotBox.innerHTML=REEL.map((_,i)=>`<span class="${i===0?'on':''}" data-i="${i}"></span>`).join("");
  function play(r){clearInterval(_heroTimer);embedOrOpen(box,r.vid);}
  function show(i){
    _heroIdx=i;const r=REEL[i];
    box.innerHTML=`<img class="vthumb" src="https://img.youtube.com/vi/${r.vid}/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${r.vid}/hqdefault.jpg'" alt="${r.name}">
      <div class="vmask"></div>
      <button class="vplay" aria-label="play"></button>
      <div class="vtag"><span class="live">▶ PLAY</span><span class="who">${r.name}${r.sub?' · '+r.sub:''}</span></div>`;
    box.querySelector(".vplay").addEventListener("click",()=>play(r));
    box.querySelector(".vthumb").addEventListener("click",()=>play(r));
    if(dotBox)dotBox.querySelectorAll("span").forEach((s,j)=>s.classList.toggle("on",j===i));
  }
  function next(){show((_heroIdx+1)%REEL.length);}
  function reset(){clearInterval(_heroTimer);_heroTimer=setInterval(next,5000);}
  show(0);reset();
  if(dotBox)dotBox.querySelectorAll("span").forEach(s=>s.addEventListener("click",()=>{show(+s.dataset.i);reset();}));
}

/* ---------- Network flags ---------- */
function renderFlags(){
  const box=document.getElementById("flagGrid");
  if(!box||typeof FLAGS==="undefined")return;
  box.innerHTML=FLAGS.map(o=>`<div class="flag reveal"><span class="emo">${o.f}</span><span class="nm">${flagName(o)}</span></div>`).join("");
  observeReveal();
}

/* ---------- Our Content (produced videos) ---------- */
function renderReel(){
  const box=document.getElementById("reelGrid");
  if(!box||typeof CONTENT==="undefined")return;
  box.innerHTML=CONTENT.map(r=>`<div class="reel-item reveal" data-vid="${r.vid}">
    <img src="https://img.youtube.com/vi/${r.vid}/hqdefault.jpg" alt="${r.t}" loading="lazy">
    <div class="play"><b></b></div><div class="cap">${r.t}<small style="display:block;font-weight:600;color:#cfd0da;font-size:11px">${r.s}</small></div></div>`).join("");
  box.querySelectorAll(".reel-item").forEach(el=>el.addEventListener("click",()=>embedOrOpen(el,el.dataset.vid)));
  observeReveal();
}

/* ---------- Key Projects ---------- */
function renderProjects(){
  const box=document.getElementById("projGrid");
  if(!box||typeof PROJECTS==="undefined")return;
  box.innerHTML=PROJECTS.map(p=>{
    const d=p.d[LANG]||p.d.en;
    const link=p.url?`<a class="proj-link" href="${p.url}" target="_blank" rel="noopener">▶ Watch</a>`:"";
    return `<article class="proj reveal">
      <div class="proj-img"><img src="${p.img}" alt="${p.t}" loading="lazy" referrerpolicy="no-referrer"><span class="proj-tag">${p.tag}</span></div>
      <div class="proj-body"><h3>${p.t}</h3><p>${d}</p>
        <div class="proj-foot"><span class="proj-meta">${p.meta}</span>${link}</div></div></article>`;
  }).join("");
  observeReveal();
}

/* ---------- Clients ---------- */
function renderClients(){
  const box=document.getElementById("clientsBox");
  if(!box||typeof CLIENTS==="undefined")return;
  const tile=o=>`<div class="cl-tile reveal" title="${o.n}"><img src="assets/clients/${o.s}.png" alt="${o.n}" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.classList.add('noimg');this.parentNode.innerHTML='<span>'+this.alt+'</span>'"></div>`;
  const group=(key,arr)=>`<div class="cl-group reveal"><h4>${t(key)}</h4><div class="cl-logos">${arr.map(tile).join("")}</div></div>`;
  const SRC=(typeof CLIENT_LOGOS!=="undefined")?CLIENT_LOGOS:null;
  box.innerHTML=SRC?group("clients.gov",SRC.gov)+group("clients.media",SRC.media)+group("clients.ent",SRC.ent):"";
  observeReveal();
}

/* ---------- Why ---------- */
function renderWhy(){
  const box=document.getElementById("whyGrid");
  if(!box||typeof WHY==="undefined")return;
  box.innerHTML=WHY.map(w=>`<div class="why-item reveal"><span class="why-n">${w.n}</span>
    <div><h4>${w.t[LANG]||w.t.en}</h4><p>${w.d[LANG]||w.d.en}</p></div></div>`).join("");
  observeReveal();
}

/* ---------- Influencers ---------- */
let FILTER_COUNTRY="all",FILTER_CAT="all";
function renderFilters(){
  const box=document.getElementById("filterBar");
  if(!box)return;
  const countries=["all","vietnam","philippines","thailand"];
  const cats=["all","beauty","livecommerce","fashion","music","gaming","couple","celebrity","genz"];
  box.innerHTML=`<div class="toolbar">${countries.map(c=>`<button class="chip ${c===FILTER_COUNTRY?'active':''}" data-type="country" data-val="${c}">${c==='all'?t('filter.all'):lbl('country',c)}</button>`).join("")}</div>
  <div class="toolbar">${cats.map(c=>`<button class="chip ${c===FILTER_CAT?'active':''}" data-type="cat" data-val="${c}">${c==='all'?t('filter.all'):lbl('cat',c)}</button>`).join("")}</div>`;
  box.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{
    if(b.dataset.type==="country")FILTER_COUNTRY=b.dataset.val;else FILTER_CAT=b.dataset.val;
    renderFilters();renderInfluencers();
  }));
}
function platHtml(p){return p.map(x=>`<a href="${x.u}" target="_blank" rel="noopener" aria-label="${x.t}">${PLAT_ICON[x.t]||''}</a>`).join("");}
function slugify(s){return s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");}
function imgSources(inf,m){
  const local="assets/influencers/"+slugify(inf.name)+".jpg";
  // Local provided photo always wins, then YouTube avatar / unavatar, then monogram
  const srcs=[local];
  if(m.img) srcs.push(m.img);
  return srcs;
}
function cardHtml(inf){
  const m=(typeof MEDIA!=="undefined"&&MEDIA[inf.name])||{};
  const cats=inf.cats.slice(0,3).map(c=>`<span class="cat-tag">${lbl('cat',c)}</span>`).join("");
  const srcs=imgSources(inf,m);
  const photo=`<img src="${srcs[0]}" data-srcs='${JSON.stringify(srcs.slice(1))}' data-mono="${inf.name[0]}" alt="${inf.name}" loading="lazy" referrerpolicy="no-referrer">`;
  const vbtn=m.vid?`<div class="vbtn" data-vid="${m.vid}" title="${t('infl.viewvideo')}"></div>`:"";
  const badge=`<span class="flag-badge">${lbl('country',inf.country)}</span>`;
  const desc=inf[LANG]||inf.en;
  return `<article class="infl reveal" data-country="${inf.country}" data-cats="${inf.cats.join(' ')}">
    <div class="infl-photo" data-badge="${badge.replace(/"/g,'&quot;')}">${photo}${badge}${vbtn}</div>
    <div class="infl-body">
      <h3>${inf.name}</h3><div class="infl-real">${inf.real}</div>
      <div class="cat-row">${cats}</div>
      <p>${desc}</p>
      <div class="infl-foot">
        <div class="followers">${inf.followers}<small>${inf.fnote}</small></div>
        <div class="plat">${platHtml(inf.plat)}</div>
      </div></div></article>`;
}
function renderInfluencers(){
  const grid=document.getElementById("inflGrid");
  if(!grid)return;
  const limit=grid.dataset.limit?parseInt(grid.dataset.limit):0;
  let list=INFLUENCERS.filter(i=>(FILTER_COUNTRY==="all"||i.country===FILTER_COUNTRY)&&(FILTER_CAT==="all"||i.cats.includes(FILTER_CAT)));
  if(limit)list=list.slice(0,limit);
  const c=document.getElementById("inflCount");
  if(c)c.textContent=list.length+" "+t("infl.count");
  grid.innerHTML=list.length?list.map(cardHtml).join(""):`<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px">${t('infl.empty')}</p>`;
  grid.querySelectorAll(".infl-photo img").forEach(img=>{
    img.onerror=function(){
      let rest=[];try{rest=JSON.parse(this.dataset.srcs||"[]");}catch(e){}
      if(rest.length){const nx=rest.shift();this.dataset.srcs=JSON.stringify(rest);this.src=nx;return;}
      const ph=this.parentNode,badge=ph.querySelector(".flag-badge"),vb=ph.querySelector(".vbtn");
      ph.innerHTML=`<div class="mono">${this.dataset.mono}</div>`+(badge?badge.outerHTML:"")+(vb?vb.outerHTML:"");
      const v=ph.querySelector(".vbtn");if(v)v.addEventListener("click",ev=>{ev.preventDefault();embedOrOpen(ph,v.dataset.vid);});
    };
  });
  grid.querySelectorAll(".vbtn").forEach(b=>b.addEventListener("click",e=>{
    e.preventDefault();embedOrOpen(b.closest(".infl-photo"),b.dataset.vid);
  }));
  observeReveal();
}

/* ---------- Hero full-stack chain ---------- */
function renderChain(){
  const box=document.getElementById("heroChain");
  if(!box||typeof CHAIN==="undefined")return;
  const steps=CHAIN.map((c,i)=>`<span class="hc-step">${c[LANG]||c.en}</span>${i<CHAIN.length-1?'<span class="hc-arr">→</span>':''}`).join("");
  box.innerHTML=steps+`<span class="hc-plus">${t("hero.chainplus")}</span>`;
}

/* ---------- Business system flow ---------- */
function renderFlow(){
  const box=document.getElementById("flowGrid");
  if(!box||typeof FLOW==="undefined")return;
  box.innerHTML=FLOW.map((s,i)=>`<div class="pl-step reveal">
    <div class="pl-no">${s.no}</div>
    <div class="pl-ico">${s.ico}</div>
    <h4>${s.t[LANG]||s.t.en}</h4>
    <p>${s.d[LANG]||s.d.en}</p>
    ${i<FLOW.length-1?'<span class="pl-arrow">›</span>':''}
  </div>`).join("");
  observeReveal();
}

/* ---------- Partnership proposal ---------- */
function renderPropose(){
  const b=document.getElementById("propBrands"),o=document.getElementById("propOffer");
  if(b&&typeof PROPOSE_BRANDS!=="undefined")
    b.innerHTML=PROPOSE_BRANDS.map(x=>`<span class="prop-pill${x.hot?' hot':''}">${x[LANG]||x.en}</span>`).join("");
  if(o&&typeof PROPOSE_OFFER!=="undefined")
    o.innerHTML=PROPOSE_OFFER.map(x=>`<li>${x[LANG]||x.en}</li>`).join("");
}

/* ---------- Team + Business (Brooks) ---------- */
function renderTeam(){
  const box=document.getElementById("teamGrid");
  if(box&&typeof TEAM!=="undefined"){
    box.innerHTML=TEAM.map(p=>`<div class="team-card reveal">
      <div class="av"><img src="${p.img}" alt=""></div>
      <h4>${p.name}</h4><div class="r">${t(p.roleKey)}</div></div>`).join("");
  }
  const biz=document.getElementById("bizBox");
  if(biz&&typeof BROOKS!=="undefined"){
    const addr=LANG==="ko"?BROOKS.addr_ko:BROOKS.addr_en;
    biz.innerHTML=`
      <div class="row"><span class="k" data-i18n="biz.rep">Representative</span><span class="v">김현우 · Brook Kim (HYEONWOO KIM)</span></div>
      <div class="row"><span class="k" data-i18n="biz.regno">Business No.</span><span class="v">${BROOKS.regno}</span></div>
      <div class="row"><span class="k" data-i18n="biz.item">Business</span><span class="v" data-i18n="biz.item.v"></span></div>
      <div class="row"><span class="k" data-i18n="biz.email">Email</span><span class="v">${BROOKS.email}</span></div>`;
    biz.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=t(e.getAttribute("data-i18n")));
  }
}

/* ---------- Project history marquee ---------- */
function renderHistory(){
  const box=document.getElementById("histMarquee");
  if(!box||typeof HISTORY==="undefined")return;
  const card=h=>`<figure class="hist-item"><img src="assets/history/${h.f}" alt="${h.t}" loading="lazy"><figcaption class="hist-cap">${h.t}</figcaption></figure>`;
  const set=HISTORY.map(card).join("");
  // one track with the set duplicated → translateX(-50%) = exactly one set width = seamless loop
  box.innerHTML=`<div class="hist-track">${set}${set}</div>`;
}

/* ---------- Reveal ---------- */
let _io;
function observeReveal(){
  if(!_io)_io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");_io.unobserve(e.target);}}),{threshold:.1});
  document.querySelectorAll(".reveal:not(.in)").forEach(el=>_io.observe(el));
}

/* ---------- Contact form ---------- */
function initForm(){
  const f=document.getElementById("inquiryForm");
  if(!f)return;
  f.addEventListener("submit",e=>{
    e.preventDefault();const d=new FormData(f);
    const body=`Name: ${d.get('name')}%0D%0ACompany: ${d.get('company')}%0D%0AEmail: ${d.get('email')}%0D%0ACategory: ${d.get('cat')}%0D%0ATarget: ${d.get('country')}%0D%0A%0D%0A${(d.get('msg')||'').replace(/\n/g,'%0D%0A')}`;
    window.location.href=`mailto:brooksservices.kim@gmail.com?subject=[Brand Inquiry] ${d.get('company')||''}&body=${body}`;
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded",()=>{
  buildChrome(document.body.dataset.page||"home");
  renderFilters();renderInfluencers();renderFlags();renderReel();renderProjects();renderHistory();renderClients();renderWhy();renderChain();renderFlow();renderPropose();renderTeam();buildHero();
  applyI18n();initForm();observeReveal();
});
