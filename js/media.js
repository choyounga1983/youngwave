/* =========================================================
   YOUNG WAVE CREATIVE — media (real profile imgs + top videos)
   Collected live from channels. YouTube avatars are hotlinkable.
   ========================================================= */
const YT = "https://yt3.googleusercontent.com/";
const MEDIA = {
  "Trinh Phạm":   {img:YT+"XfoxwZ4eX1fFPHCaAHcdQiTVpMOReDPcBtSBq5VMhG2JoSnwr0smR8N1UXzylHO9OeOVIkGI=s400-c-k-c0x00ffffff-no-rj", profile:"https://www.youtube.com/@trinhpham91"},
  "H&M Channel":  {img:YT+"SpFAmQD-5RQL-SsqKAfcwrKLex8rJ2E7blV8pWiMmEogEeht-xTajMSDRQUZvKmpnotSJZiO=s400-c-k-c0x00ffffff-no-rj", vid:"o-prfGdpS_E", profile:"https://www.youtube.com/@HMChannel12"},
  "Nabee":        {img:YT+"f-48TZ_ItEhpR6CDUqkcrO8V_q-IlS8rwNNvLRqiZuxcUY4PyEQ9aOcQqccgK6_XuMRPYdLtUw=s400-c-k-c0x00ffffff-no-rj", vid:"XDIoKkp1wRA", profile:"https://www.youtube.com/@NabeeST"},
  "Kyo & Luigi":  {img:YT+"ytc/AIdro_ku_4JH09CShWK8EBCUUoxoWJphequjVT3MuMjdMT6gAdE=s400-c-k-c0x00ffffff-no-rj", vid:"ziWzOnwcLNk", profile:"https://www.youtube.com/@kyoquijano"},
  "Baninay & Bryan":{img:YT+"ytc/AIdro_nBz_zkTuI89ZcvEUU76C5sJjVhdXq18_Imom-vta83SMQ=s400-c-k-c0x00ffffff-no-rj", vid:"4WcWFRKiPSg", profile:"https://www.youtube.com/c/BaninayBautista"},
  "Jannine Weigel":{img:YT+"PHOeQk9cQUwRUDMh49Fc8XeEbOOqDlzjZwwWlitOaxFPiUt1bcGjaQgsyfIVNS5sejsFlnCxdqo=s400-c-k-c0x00ffffff-no-rj", vid:"CEZlO6K8JVQ", profile:"https://www.youtube.com/channel/UChFzJ0bYwztKa4H4oF8fOvw"},
  "Ohsusu":       {img:YT+"Y1oagXTMMl0oCt8_MrZwCGg17M-87pYRWZKapyvryIrYOi7fjUrEIaLNbjx09BDnZ4uaYuqv=s400-c-k-c0x00ffffff-no-rj", vid:"VjoIU1PkUi8", profile:"https://www.youtube.com/@OhsusuTV"},
  "Reneé Dominique":{img:YT+"ytc/AIdro_k47U70Q5B_5tjpy_SXkn8ShTxk5MVw9EWJus-2xbWYRQ=s400-c-k-c0x00ffffff-no-rj", profile:"https://www.youtube.com/channel/UC-fn57_xqMv-PaMmpm-ZspQ"},
  /* Non-YouTube: public avatar service (unavatar). Falls back to monogram if not found. */
  "Call Me Duy":      {img:"https://unavatar.io/tiktok/justvuduy16?fallback=false"},
  "Lép The Little Kid":{img:"https://unavatar.io/tiktok/lepthelittlekid?fallback=false"},
  "Góc của Rư":       {img:"https://unavatar.io/tiktok/goc.cua.ru?fallback=false"},
  "KHÁNH":            {img:"https://unavatar.io/tiktok/khanh.keymusic?fallback=false"},
  "MLee":             {img:"https://unavatar.io/instagram/mleetapiau?fallback=false"},
  "Trương Thanh Trúc":{img:"https://unavatar.io/instagram/thanhtructruong?fallback=false"},
  "Huong Pham":       {img:"https://unavatar.io/instagram/phamhuongbee?fallback=false"},
  "CONG B":           {img:"https://unavatar.io/instagram/kopsskops?fallback=false"},
  "Suni Hạ Linh":     {img:"https://unavatar.io/facebook/suniofficial0609?fallback=false"},
  "ViruSs":           {img:"https://unavatar.io/facebook/ViruSsOP?fallback=false"},
  "Ngân Sát Thủ":     {img:"https://unavatar.io/facebook/NST2905?fallback=false"},
  "Thoại Nghi":       {img:"https://unavatar.io/facebook/NguyenThoaiNghi140905?fallback=false"}
};

/* Hero reel — Young Wave's OWN produced content (muted autoplay, rotating) */
const REEL = [
  {name:"수상한 한류스타 OST 제작", sub:"성훈 × 황옌치비 · 한-베 웹드라마", vid:"R0Wq_BrXE7s"},
  {name:"Son Tung M-TP · 한국 로케 MV", sub:"베트남 1위 가수 · 한국 언론 보도", vid:"FN7ALfpGxiI"},
  {name:"강원도 관광 홍보 CF", sub:"Arirang · 베트남 인기 스타", vid:"VP0xJZlm5zU"},
  {name:"한-베 웹드라마 OST MV", sub:"TƯỞNG LÀ MƠ · Hoàng Yến Chibi", vid:"LZ9t6g-4DwM"},
  {name:"강원도 글로벌 관광객 유치 CF", sub:"Arirang · Somewhere Like Drama", vid:"DaENP8h_PLg"},
  {name:"배우 성훈 남주 확정 인터뷰", sub:"수상한 한류스타 · Korea–Vietnam", vid:"zvXp6jPPxQE"}
];

/* Produced content cards ("Our Content") — accurate project labels */
const CONTENT = [
  {vid:"R0Wq_BrXE7s", t:"수상한 한류스타 OST 제작", s:"성훈 × 황옌치비 · 한-베 웹드라마"},
  {vid:"LZ9t6g-4DwM", t:"한-베 웹드라마 OST MV 제작", s:"TƯỞNG LÀ MƠ · Hoàng Yến Chibi"},
  {vid:"VP0xJZlm5zU", t:"강원도 관광 홍보 CF", s:"Arirang · 베트남 인기 스타 (Somewhere Like Drama 1)"},
  {vid:"DaENP8h_PLg", t:"강원도 글로벌 관광객 유치 CF", s:"Arirang · Somewhere Like Drama 2"},
  {vid:"FN7ALfpGxiI", t:"Son Tung M-TP · 한국 로케 MV", s:"베트남 1위 가수 · 한국 언론 보도"},
  {vid:"24UrmFwpSRc", t:"My Secret Star OST (한국어)", s:"수상한 한류스타 · Korean Version"},
  {vid:"fAkyGDWzsvY", t:"Winter of Korea", s:"한국 겨울 라이프스타일 콘텐츠"},
  {vid:"zvXp6jPPxQE", t:"배우 성훈 남주 확정 인터뷰", s:"수상한 한류스타 · Korea–Vietnam"}
];

/* Key projects (images hot-linked from the official site) */
const IMG="https://youngwave.seoul.kr/images/";
const PROJECTS = [
  {img:IMG+"drama-poster.png", tag:"Web Drama · 2020", t:"My Secret Star · 수상한 한류스타",
   d:{ko:"한국 배우 성훈 × 베트남 황옌치비 주연. 아리랑TV·VTV·메트로TV 방영 (한국·베트남·인도네시아).",en:"Starring Sung Hoon (KR) × Hoàng Yến Chibi (VN). Aired on Arirang TV·VTV·Metro TV across KR·VN·ID."},
   meta:"Arirang TV · KR·VN·ID", url:"https://www.youtube.com/watch?v=0LjsS7HQw7c"},
  {img:IMG+"sontung-jeju.png", tag:"MV Location · 2018", t:"Son Tung M-TP · Nơi Này Có Anh",
   d:{ko:"베트남 1위 남자가수 뮤직비디오 한국(제주도) 로케이션 및 한국 언론 PR. 조회수 2.9억.",en:"Vietnam's #1 male artist MV shot on location in Jeju, Korea, with Korean press PR. 290M+ views."},
   meta:"290M views · 14.2M followers", url:"https://www.youtube.com/watch?v=FN7ALfpGxiI"},
  {img:IMG+"phamhuong-vheartbeat.png", tag:"V LIVE Awards · 2017–18", t:"Pham Huong · V LIVE",
   d:{ko:"미스 유니버스 베트남 2016 팜흐엉 VLIVE AWARDS 시상자 · 정해인과 V HEARTBEAT 공동 진행.",en:"Miss Universe Vietnam 2016 Pham Huong as VLIVE Awards presenter; co-hosted V HEARTBEAT with Jung Hae-in."},
   meta:"Naver V LIVE", url:""},
  {img:IMG+"gangwon-influencers.png", tag:"Tourism CF · 2019", t:"Gangwon-do · 아세안 관광 CF",
   d:{ko:"태국·필리핀·베트남 인플루언서 초청, 강원도 관광 CF 5편 제작 · 아리랑TV·HTV 방영.",en:"Thai·Filipino·Vietnamese influencers invited; 5 Gangwon tourism CFs produced, aired on Arirang TV·HTV."},
   meta:"5 CFs · TH·PH·VN", url:"https://www.youtube.com/watch?v=VP0xJZlm5zU"},
  {img:IMG+"iisf2019.png", tag:"Festival · 2019", t:"IISF 2019 · Incheon",
   d:{ko:"인천 국제 1인 미디어 페스티벌 베트남 총괄. ViruSs·JACK·K-ICM·H&M CHANNEL 초청·한-베 언론 PR.",en:"Led Vietnam ops for Incheon Intl Creator Festival. Invited ViruSs·JACK·K-ICM·H&M Channel; KR–VN press PR."},
   meta:"Incheon · KR–VN", url:""},
  {img:IMG+"kunicorn-poster.png", tag:"Conference · 2024", t:"K-Unicorn 2024",
   d:{ko:"중소벤처기업부·KOSME 공동주최. Vinpearl Landmark 81에서 한국 스타트업×아세안 투자자 네트워킹. 참가자 200+.",en:"Co-hosted with Korea's MSS·KOSME at Vinpearl Landmark 81. Korean startups × ASEAN investors. 200+ attendees."},
   meta:"KOSME · 200+ guests", url:""},
  {img:"assets/projects/keun-paris-selects.jpg", tag:"Fashion · 2024", t:"파리 더 셀렉츠 · The Selects",
   d:{ko:"한국 디자이너 브랜드의 유럽 진출 쇼룸. 파리패션위크·트라노이(Tranoï) 연계, 해외 바이어 1:1 수주 미팅 진행.",en:"A Paris showroom taking Korean designer brands into Europe — linked to Paris Fashion Week & Tranoï, with 1:1 buyer meetings."},
   meta:"Paris · K-Fashion", url:""},
  {img:"assets/projects/keun-turkiye-embassy.jpg", tag:"Embassy · 2024", t:"튀르키예 대사관 초청",
   d:{ko:"주한 튀르키예 대사관 초청. 브랜드사와 함께 튀르키예 수출 상담을 진행하고, 터키 국경일 행사 공로로 대사관 감사패를 수상.",en:"Invited by the Türkiye Embassy in Korea — led brand export consultations and received an embassy appreciation award for the Turkish National Day."},
   meta:"Türkiye · Export", url:""},
  {img:"assets/projects/keun-cannes-beauty.jpg", tag:"Beauty · 2021", t:"깐느 뷰티 행사",
   d:{ko:"칸(깐느) 뷰티 행사 진행. 영국 비즈니스 매거진 ‘Integrity’에 중소 K-뷰티 브랜드 표지·기사 게재.",en:"A Cannes beauty event — placed Korean SME beauty brands on the cover and in a feature of UK business magazine ‘Integrity’."},
   meta:"Cannes · K-Beauty", url:""},
  {img:"assets/projects/keun-cannes-fashion.jpg", tag:"Cannes · 2025", t:"칸 영화제 패션 콜라보",
   d:{ko:"2025 칸 영화제 기간 패션 브랜드 콜라보(Pavillon Royal Cannes 쇼룸). 셀해피코·시노디아·고단 등 K-브랜드 글로벌 노출.",en:"A fashion-brand collaboration during the 2025 Cannes Film Festival (Pavillon Royal Cannes showroom), spotlighting K-brands globally."},
   meta:"Cannes 2025 · Fashion", url:""}
];

/* Clients (real, from company profile) */
const CLIENTS = {
  gov:["문화체육관광부","강원도","전라북도","충청북도","순천시","여수시","I·SEOUL·U","JTA","Vietnam Tourism","KOSME"],
  media:["Arirang TV","VTV","HTV","yeah1.com","kenh14","SAOstar","VNExpress","VLIVE.TV"],
  ent:["UNI CORP","UNI Media","metub","Choo Communications","ZORBA","ANN Media"]
};

/* Client logos — drop files into assets/clients/{slug}.png (transparent PNG). */
const CLIENT_LOGOS = {
  gov:[
    {n:"문화체육관광부",s:"mcst"},{n:"I·SEOUL·U",s:"seoul"},{n:"Vietnam Tourism",s:"vietnam-tourism"},
    {n:"강원도",s:"gangwon"},{n:"전라북도",s:"jeonbuk"},{n:"충청북도",s:"chungbuk"},
    {n:"순천시",s:"suncheon"},{n:"여수시",s:"yeosu"},{n:"JTA",s:"jta"},{n:"KOSME",s:"kosme"}
  ],
  media:[
    {n:"VTV",s:"vtv"},{n:"HTV",s:"htv"},{n:"yeah1.com",s:"yeah1"},{n:"kenh14",s:"kenh14"},
    {n:"SAOstar",s:"saostar"},{n:"VNExpress",s:"vnexpress"},{n:"VLIVE.TV",s:"vlive"},{n:"Arirang TV",s:"arirang"}
  ],
  ent:[
    {n:"UNI Corp",s:"uni-corp"},{n:"UNI Media",s:"uni-media"},{n:"metub",s:"metub"},
    {n:"Choo Communications",s:"choo"},{n:"ZORBA Production",s:"zorba"},{n:"ANN Media",s:"ann-media"},{n:"Multimedia",s:"multimedia"}
  ]
};

/* Why Young Wave */
const WHY = [
  {n:"01",t:{ko:"현지 전문성",en:"Local Expertise"},d:{ko:"베트남·아세안 시장에 대한 깊은 이해와 현지 네트워크.",en:"Deep understanding of Vietnam/ASEAN markets with a real local network."}},
  {n:"02",t:{ko:"셀럽·인플루언서 네트워크",en:"Celeb & Influencer Network"},d:{ko:"베트남 최상위 인플루언서·아티스트와의 독점 협업 채널.",en:"Exclusive access to Vietnam's top influencers and artists."}},
  {n:"03",t:{ko:"자체 제작 역량",en:"In-House Production"},d:{ko:"기획·촬영·연출·편집·디자인 전 과정을 자체 수행.",en:"Planning, filming, directing, editing and design — all in-house."}},
  {n:"04",t:{ko:"한-베 이중 허브",en:"Korea–Vietnam Dual Hub"},d:{ko:"호치민 본사 + 한국 지사로 양국 간 원활한 커뮤니케이션.",en:"HCMC HQ + Korea branch for seamless cross-border communication."}},
  {n:"05",t:{ko:"검증된 실적",en:"Proven Track Record"},d:{ko:"정부 기관·글로벌 브랜드·K-POP 아티스트와의 성공 협업.",en:"Successful work with governments, global brands and K-pop artists."}},
  {n:"06",t:{ko:"베트남 인증 (화장품·식품)",en:"Vietnam Certification (Cosmetics·Food)"},d:{ko:"영웨이브 베트남 법인이 직접 화장품 신고(DAV)·식품 등록(VFA)을 진행해 합법 판매를 보장합니다. 수입·통관·라벨링까지 대행.",en:"Our Vietnam entity files cosmetic notifications (DAV) and food registrations (VFA) directly for legal sales — including import, customs and labeling."}},
  {n:"07",t:{ko:"현지 3PL 물류 연계",en:"Local 3PL Logistics"},d:{ko:"베트남 현지 한인 운영 3PL 물류사와 연계해 수입·통관·보관·배송까지 안정적으로 지원합니다.",en:"Connected with a Korean-run 3PL logistics partner in Vietnam for reliable import, customs, warehousing and delivery."}}
];

const SOCIAL = {ig:"https://www.instagram.com/youngwavecreative/", yt:"https://www.youtube.com/@youngwave1399"};

/* Hero full-stack chain (shown immediately in hero) */
const CHAIN = [
  {ko:"인플루언서",en:"Influencer"},
  {ko:"콘텐츠 제작",en:"Content"},
  {ko:"라이브커머스",en:"Live Commerce"},
  {ko:"쇼핑몰 판매",en:"Mall Sales"},
  {ko:"매출 정산",en:"Settlement"}
];

/* 7-step pipeline — sourcing → settlement (matches CEO infographic) */
const FLOW = [
  {no:"01",ico:"🔎",t:{ko:"사전 컨설팅 및 계약",en:"Consulting & Contract"},d:{ko:"동남아 진출 타당성 분석 및 파트너 매칭 후 계약 체결",en:"Feasibility analysis, partner matching and contract"}},
  {no:"02",ico:"✅",t:{ko:"현지 인허가 대행",en:"Certification & Licensing"},d:{ko:"전 품목 맞춤형 법규 분석 및 인허가(DAV·VFA) 절차 대행",en:"Tailored regulatory review & licensing (DAV·VFA)"}},
  {no:"03",ico:"⭐",t:{ko:"인플루언서 매칭",en:"Influencer Matching"},d:{ko:"브랜드에 최적화된 셀럽·인플루언서 큐레이션 및 매칭",en:"Curated celebrity/influencer matching for the brand"}},
  {no:"04",ico:"🎬",t:{ko:"맞춤형 콘텐츠 제작",en:"Content Production"},d:{ko:"현지 시장 트렌드를 반영한 고퀄리티 맞춤 콘텐츠 기획·제작",en:"High-quality localized content planning & production"}},
  {no:"05",ico:"📡",t:{ko:"라이브 방송 송출",en:"Live Broadcasting"},d:{ko:"지역별 채널 활용 및 실시간 라이브커머스 운영 관리",en:"Channel-by-channel live commerce operations"}},
  {no:"06",ico:"🛒",t:{ko:"유통 및 판매",en:"Distribution & Sales"},d:{ko:"최적의 온·오프라인 유통 채널 확보 및 3PL 물류·판매 확대",en:"Optimal on/offline distribution, 3PL logistics & sales"}},
  {no:"07",ico:"💰",t:{ko:"투명한 성과 정산",en:"Transparent Settlement"},d:{ko:"실시간 판매 데이터 기반의 투명하고 정확한 매출 정산",en:"Transparent, accurate settlement on real-time sales data"}}
];

/* Partnership proposal */
const PROPOSE_BRANDS = [
  {ko:"화장품 · 뷰티",en:"Cosmetics · Beauty",hot:true},
  {ko:"식품 · F&B",en:"Food · F&B"},
  {ko:"생활용품",en:"Household goods"},
  {ko:"모바일 게임",en:"Mobile games"},
  {ko:"전자기기",en:"Electronics"}
];
const PROPOSE_OFFER = [
  {ko:"아세안 시장 진출 전략 설계",en:"ASEAN go-to-market strategy"},
  {ko:"인플루언서·셀럽 캠페인",en:"Influencer & celebrity campaigns"},
  {ko:"라이브커머스·공동구매 운영",en:"Live commerce & group-buy ops"},
  {ko:"베트남 유통·3PL 물류 연계",en:"Vietnam distribution & 3PL logistics"},
  {ko:"화장품·식품 인증 (DAV·VFA)",en:"Cosmetics/food certification (DAV·VFA)"},
  {ko:"현지 팝업·오프라인 행사",en:"Local pop-ups & offline events"}
];

/* ASIA-wide network flags (Gushcloud-style) */
const FLAGS = [
  {f:"🇻🇳",ko:"베트남",en:"Vietnam"},{f:"🇹🇭",ko:"태국",en:"Thailand"},
  {f:"🇵🇭",ko:"필리핀",en:"Philippines"},{f:"🇮🇩",ko:"인도네시아",en:"Indonesia"},
  {f:"🇲🇾",ko:"말레이시아",en:"Malaysia"},{f:"🇸🇬",ko:"싱가포르",en:"Singapore"},
  {f:"🇰🇷",ko:"대한민국",en:"South Korea"},{f:"🇯🇵",ko:"일본",en:"Japan"},
  {f:"🇨🇳",ko:"중국",en:"China"},{f:"🇹🇼",ko:"대만",en:"Taiwan"},
  {f:"🇰🇭",ko:"캄보디아",en:"Cambodia"},{f:"🇲🇲",ko:"미얀마",en:"Myanmar"},
   {f:"🇬🇧",ko:"영국",en:"United Kingdom"},{f:"🇫🇷",ko:"프랑스",en:"France"},
   {f:"🇮🇹",ko:"이탈리아",en:"Italy"},{f:"🇹🇷",ko:"튀르키예",en:"Türkiye"}
];

/* Brooks Global — Korea branch team & registration */
const TEAM = [
  {name:"김현우 Brook Kim", roleKey:"team.ceo", img:"assets/brooks-symbol.svg"},
  {name:"고은주 Jenny Go", roleKey:"team.sales", img:"assets/brooks-symbol.svg"}
];
const BROOKS = {
  regno:"283-29-01944",
  addr_ko:"인천광역시 동구 송현로 50, 101동 707호",
  addr_en:"101-707, 50 Songhyeon-ro, Dong-Gu, Incheon 22547, Republic of Korea",
  tel:"+82 10-4865-6300",
  email:"brooksservices.kim@gmail.com"
};

/* Extra i18n keys for new (Gushcloud-style) sections, merged at boot */
const I18N_EXTRA = {
  ko:{
    "hero.kicker":"ASIA × EUROPE 인플루언스 네트워크",
    "reel.title":"지금 가장 뜨거운 콘텐츠","reel.sub":"풀 소속 크리에이터의 대표 영상이 실시간으로 재생됩니다.",
    "net.title":"아시아를 넘어 유럽까지 잇는 네트워크","net.sub":"동남아를 거점으로 한·중·일, 나아가 영국·프랑스 등 유럽까지 인플루언서·파트너 네트워크를 연결합니다.",
    "net.count":"개국 인플루언서 네트워크",
    "stat.deals":"연간 캠페인 처리","stat.brands":"누적 협업 브랜드",
    "team.title":"한국 지사","team.sub":"브랜드·광고주 소싱과 한국 커뮤니케이션을 전담하는 Brooks Global.",
    "team.ceo":"CEO & CMO","team.sales":"Sales Director",
    "biz.title":"사업자 정보","biz.regno":"사업자등록번호","biz.addr":"주소","biz.tel":"연락처","biz.email":"이메일","biz.rep":"대표","biz.item":"업종","biz.item.v":"경영컨설팅업 · 광고대행업",
    "infl.viewvideo":"대표 영상 보기",
    "content.title":"우리가 만든 결과물","content.sub":"영웨이브가 직접 기획·제작한 콘텐츠입니다. 카드를 누르면 YouTube에서 재생됩니다.",
    "proj.title":"주요 프로젝트","proj.sub":"드라마·뮤직비디오·관광 CF·글로벌 컨퍼런스까지, 결과로 증명합니다.",
    "clients.title":"클라이언트","clients.sub":"정부 기관부터 글로벌 미디어까지 신뢰받는 파트너.","clients.gov":"정부·지자체","clients.media":"방송·미디어","clients.ent":"엔터·프로덕션",
    "why.title":"왜 영웨이브인가","why.sub":"단순 캠페인 실행이 아닌, 아세안 시장의 전략적 파트너가 됩니다.",
    "lead.title":"리더십 & 팀","lead.sub":"베트남 본사 16명 · 한국 지사 3명, 이중언어 전문가 팀.",
    "ceo.b1":"동남아 셀럽·메가 인플루언서 네트워크 보유","ceo.b2":"한-아세안 통합 마케팅·콘텐츠 제작 전문","ceo.b3":"베트남 법인 운영 · 코스메틱 인증·유통 실무",
    "hero.fs":"유럽·동남아 특화 인플루언서 커머스 · 풀스택 컴퍼니","hero.chainplus":"+ 화장품 인증 · 통관 · 물류",
    "sys.kicker":"SOURCING → SETTLEMENT","sys.title":"소싱부터 정산까지, 글로벌 커머스의 통합 솔루션 파트너",
    "sys.p1":"동남아·유럽 시장, 팔기 전에 팔 수 있어야 합니다.","sys.p2":"우리는 광고를 파는 게 아닙니다.","sys.p3":"브랜드의 동남아·유럽 매출을 만듭니다.",
    "sys.band":"따로따로 관리하던 복잡한 해외 판매 7단계를 하나의 파이프라인으로. 과정은 단순하게, 결과는 매출로.",
    "prop.kicker":"PARTNERSHIP","prop.title":"그래서, 우리와 무엇을 함께할 수 있을까요?","prop.sub":"브랜드만 알려주세요. 동남아·유럽 진출 종합 솔루션으로 답하겠습니다.","prop.brands":"이런 브랜드와 함께합니다","prop.offer":"우리가 제공하는 것","prop.cta":"제휴 제안 받기"
  },
  en:{
    "hero.kicker":"ASIA × EUROPE INFLUENCE NETWORK",
    "reel.title":"What's hot right now","reel.sub":"Signature videos from our roster, playing live.",
    "net.title":"A network spanning Asia to Europe","net.sub":"From a Southeast Asian base across Korea, China and Japan — and on to Europe, including the UK and France.",
    "net.count":"countries in our network",
    "stat.deals":"campaigns handled yearly","stat.brands":"brands collaborated",
    "team.title":"Korea Branch","team.sub":"Brooks Global leads brand/advertiser sourcing and Korean communication.",
    "team.ceo":"CEO & CMO","team.sales":"Sales Director",
    "biz.title":"Business Registration","biz.regno":"Business No.","biz.addr":"Address","biz.tel":"Tel","biz.email":"Email","biz.rep":"Representative","biz.item":"Business","biz.item.v":"Management consultancy · Advertising agency",
    "infl.viewvideo":"Watch top video",
    "content.title":"What We Create","content.sub":"Content produced and planned in-house — click a card to play on YouTube.",
    "proj.title":"Key Projects","proj.sub":"From web dramas and music videos to tourism CFs and global conferences — proven by results.",
    "clients.title":"Clients","clients.sub":"Trusted by partners from government bodies to global media.","clients.gov":"Government","clients.media":"Media & Broadcast","clients.ent":"Entertainment & Production",
    "why.title":"Why Young Wave","why.sub":"Not just campaign execution — we become your strategic partner in ASEAN.",
    "lead.title":"Leadership & Team","lead.sub":"16 in Vietnam HQ · 3 in Korea branch — a bilingual team of specialists.",
    "ceo.b1":"An extensive network of SEA celebrities & mega-influencers","ceo.b2":"Specialists in Korea–ASEAN integrated marketing & content","ceo.b3":"Runs a Vietnam entity — hands-on cosmetics certification & distribution",
    "hero.fs":"EUROPE & SEA INFLUENCER-COMMERCE · FULL-STACK COMPANY","hero.chainplus":"+ Certification · Customs · Logistics",
    "sys.kicker":"SOURCING → SETTLEMENT","sys.title":"From sourcing to settlement — your integrated global-commerce partner",
    "sys.p1":"In Southeast Asia & Europe, before you sell, you must be able to sell.","sys.p2":"We don't sell ads.","sys.p3":"We build the brand's Southeast Asia & Europe revenue.",
    "sys.band":"Seven scattered cross-border sales steps, unified into one pipeline. Simpler operations, stronger revenue.",
    "prop.kicker":"PARTNERSHIP","prop.title":"So, what can we build together?","prop.sub":"Tell us your brand — we'll propose a full Southeast Asia & Europe go-to-market solution.","prop.brands":"Brands we partner with","prop.offer":"What we provide","prop.cta":"Request a proposal"
  },
  vi:{
    "hero.kicker":"MẠNG LƯỚI ẢNH HƯỞNG Á × ÂU",
    "reel.title":"Nội dung hot nhất hiện nay","reel.sub":"Video tiêu biểu từ dàn creator, phát trực tiếp.",
    "net.title":"Mạng lưới phủ khắp châu Á đến châu Âu","net.sub":"Từ Đông Nam Á tới Hàn, Trung, Nhật — và sang châu Âu gồm Anh, Pháp.",
    "net.count":"quốc gia trong mạng lưới",
    "stat.deals":"chiến dịch mỗi năm","stat.brands":"thương hiệu hợp tác",
    "team.title":"Chi nhánh Hàn Quốc","team.sub":"Brooks Global phụ trách tìm nguồn thương hiệu và liên lạc tại Hàn.",
    "team.ceo":"CEO & CMO","team.sales":"Sales Director",
    "biz.title":"Thông tin doanh nghiệp","biz.regno":"Mã số DN","biz.addr":"Địa chỉ","biz.tel":"Điện thoại","biz.email":"Email","biz.rep":"Đại diện","biz.item":"Ngành","biz.item.v":"Tư vấn quản lý · Đại lý quảng cáo",
    "infl.viewvideo":"Xem video nổi bật",
    "content.title":"Nội dung chúng tôi tạo ra","content.sub":"Nội dung do chúng tôi sản xuất & lên kế hoạch — nhấp để phát trên YouTube.",
    "proj.title":"Dự án tiêu biểu","proj.sub":"Từ web drama, MV đến CF du lịch và hội nghị toàn cầu — minh chứng bằng kết quả.",
    "clients.title":"Khách hàng","clients.sub":"Được tin tưởng bởi đối tác từ cơ quan chính phủ đến truyền thông toàn cầu.","clients.gov":"Chính phủ","clients.media":"Truyền thông","clients.ent":"Giải trí & Sản xuất",
    "why.title":"Vì sao chọn Young Wave","why.sub":"Không chỉ thực thi chiến dịch — chúng tôi là đối tác chiến lược tại ASEAN.",
    "lead.title":"Lãnh đạo & Đội ngũ","lead.sub":"16 tại VN · 3 tại Hàn — đội ngũ chuyên gia song ngữ."
  },
  th:{
    "hero.kicker":"เครือข่ายอินฟลูเอนซ์เอเชีย × ยุโรป",
    "reel.title":"คอนเทนต์มาแรงตอนนี้","reel.sub":"วิดีโอเด่นจากครีเอเตอร์ของเรา เล่นแบบเรียลไทม์",
    "net.title":"เครือข่ายครอบคลุมเอเชียถึงยุโรป","net.sub":"จากเอเชียตะวันออกเฉียงใต้ถึงเกาหลี จีน ญี่ปุ่น และต่อไปยังยุโรป รวมถึงสหราชอาณาจักรและฝรั่งเศส",
    "net.count":"ประเทศในเครือข่าย",
    "stat.deals":"แคมเปญต่อปี","stat.brands":"แบรนด์ที่ร่วมงาน",
    "team.title":"สาขาเกาหลี","team.sub":"Brooks Global ดูแลการจัดหาแบรนด์และการสื่อสารในเกาหลี",
    "team.ceo":"CEO & CMO","team.sales":"Sales Director",
    "biz.title":"ข้อมูลธุรกิจ","biz.regno":"เลขทะเบียน","biz.addr":"ที่อยู่","biz.tel":"โทร","biz.email":"อีเมล","biz.rep":"ผู้แทน","biz.item":"ประเภทธุรกิจ","biz.item.v":"ที่ปรึกษาการจัดการ · เอเจนซีโฆษณา",
    "infl.viewvideo":"ดูวิดีโอเด่น",
    "content.title":"คอนเทนต์ที่เราสร้าง","content.sub":"คอนเทนต์ที่เราผลิตและวางแผนเอง — คลิกการ์ดเพื่อเล่นบน YouTube",
    "proj.title":"โปรเจกต์สำคัญ","proj.sub":"ตั้งแต่เว็บดราม่า MV ถึง CF ท่องเที่ยวและงานประชุมระดับโลก — พิสูจน์ด้วยผลลัพธ์",
    "clients.title":"ลูกค้า","clients.sub":"ได้รับความไว้วางใจจากหน่วยงานรัฐถึงสื่อระดับโลก","clients.gov":"ภาครัฐ","clients.media":"สื่อ & การออกอากาศ","clients.ent":"บันเทิง & โปรดักชัน",
    "why.title":"ทำไมต้อง Young Wave","why.sub":"ไม่ใช่แค่รันแคมเปญ — เราเป็นพาร์ทเนอร์เชิงกลยุทธ์ในอาเซียน",
    "lead.title":"ผู้นำ & ทีม","lead.sub":"16 คนในเวียดนาม · 3 คนในเกาหลี — ทีมผู้เชี่ยวชาญสองภาษา"
  },
  id:{
    "hero.kicker":"JARINGAN PENGARUH ASIA × EROPA",
    "reel.title":"Konten paling hot saat ini","reel.sub":"Video unggulan dari roster kami, tayang langsung.",
    "net.title":"Jaringan dari Asia hingga Eropa","net.sub":"Dari Asia Tenggara hingga Korea, China, Jepang — dan hingga Eropa termasuk Inggris dan Prancis.",
    "net.count":"negara dalam jaringan",
    "stat.deals":"kampanye per tahun","stat.brands":"brand berkolaborasi",
    "team.title":"Cabang Korea","team.sub":"Brooks Global memimpin sourcing brand dan komunikasi di Korea.",
    "team.ceo":"CEO & CMO","team.sales":"Sales Director",
    "biz.title":"Informasi Bisnis","biz.regno":"No. Bisnis","biz.addr":"Alamat","biz.tel":"Telp","biz.email":"Email","biz.rep":"Perwakilan","biz.item":"Bidang","biz.item.v":"Konsultan manajemen · Agensi iklan",
    "infl.viewvideo":"Tonton video unggulan",
    "content.title":"Konten yang Kami Buat","content.sub":"Konten yang kami produksi & rencanakan sendiri — klik kartu untuk memutar di YouTube.",
    "proj.title":"Proyek Utama","proj.sub":"Dari web drama, MV hingga CF pariwisata dan konferensi global — dibuktikan dengan hasil.",
    "clients.title":"Klien","clients.sub":"Dipercaya mitra dari lembaga pemerintah hingga media global.","clients.gov":"Pemerintah","clients.media":"Media & Siaran","clients.ent":"Hiburan & Produksi",
    "why.title":"Mengapa Young Wave","why.sub":"Bukan sekadar eksekusi kampanye — kami menjadi mitra strategis Anda di ASEAN.",
    "lead.title":"Kepemimpinan & Tim","lead.sub":"16 di Vietnam · 3 di Korea — tim spesialis dwibahasa."
  },
  zh:{
    "hero.kicker":"亚洲 × 欧洲影响力网络",
    "reel.title":"当下最热内容","reel.sub":"旗下创作者的代表作品，实时播放。",
    "net.title":"覆盖亚洲至欧洲的网络","net.sub":"以东南亚为据点，延伸至韩中日，并拓展到包括英国、法国在内的欧洲。",
    "net.count":"个国家的网络",
    "stat.deals":"每年处理战役","stat.brands":"累计合作品牌",
    "team.title":"韩国分公司","team.sub":"Brooks Global 专责品牌/广告主对接与韩国沟通。",
    "team.ceo":"CEO & CMO","team.sales":"Sales Director",
    "biz.title":"工商信息","biz.regno":"营业执照号","biz.addr":"地址","biz.tel":"电话","biz.email":"邮箱","biz.rep":"代表","biz.item":"经营范围","biz.item.v":"管理咨询 · 广告代理",
    "infl.viewvideo":"观看代表视频",
    "content.title":"我们创作的内容","content.sub":"由我们自制与策划的内容 — 点击卡片即可在 YouTube 播放。",
    "proj.title":"代表项目","proj.sub":"从网络剧、MV 到旅游 CF 与全球会议 — 用结果说话。",
    "clients.title":"客户","clients.sub":"获得从政府机构到全球媒体的伙伴信赖。","clients.gov":"政府/地方","clients.media":"媒体/广播","clients.ent":"娱乐/制作",
    "why.title":"为何选择 Young Wave","why.sub":"不只是执行战役 — 我们成为您在东盟的战略伙伴。",
    "lead.title":"领导团队","lead.sub":"越南总部 16 人 · 韩国分公司 3 人 — 双语专家团队。"
  }
};
