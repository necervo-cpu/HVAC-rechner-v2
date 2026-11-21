import{B as e,F as t,L as n,M as r,N as i,R as a}from"./index-Ck1flspg.js";import{n as o,t as s}from"./fieldParse-Pvb_IczQ.js";import{t as c}from"./format-B068t5Ru.js";var l=e(),u={viewBox:{width:1200,height:680,str:`0 0 1200 680`},cols:{col1:{minX:20,maxX:200,name:`Außeneinheit`},col2:{minX:220,maxX:260,wallLeft:230,wallRight:250,name:`Gebäudewand`},col3:{minX:290,maxX:520,moduleLeft:300,moduleRight:455,name:`Hydraulikmodul`},col4:{minX:560,maxX:860,name:`Speicher-Slot`},col5:{minX:900,maxX:1180,rightMarginLimit:1188,name:`Heizkreis-Slot`}},rails:{solarHot:90,wwTop:150,hotMain:200,hotHeating:250,zirk:310,coldWw:430,coldHeating:470,coldMain:490,kwBottom:520,power230V:565,power400V:595,busArc:625}};function d(e){let{code:t,x:n,y:r,type:i}=e,a=i===`sensor`?`var(--system-green)`:i===`relay`?`var(--system-cyan)`:i===`pwm`?`var(--accent)`:`var(--system-orange)`,o=a,s=`badge-${i}`,c=Math.max(40,t.length*9+14);return`
    <g class="term-badge ${s}" data-code="${t}">
      <rect x="${n}" y="${r}" width="${c}" height="22" rx="11" fill="var(--bg-canvas)" stroke="${a}" stroke-width="1.2" class="${s}" />
      <text x="${n+c/2}" y="${r+11}" class="badge-text" text-anchor="middle" dominant-baseline="central" fill="${o}" font-family="var(--font-mono)" font-size="14" font-weight="600">${t}</text>
    </g>
  `}function f(e){if(e.length<2)return``;let t=`M${e[0][0]},${e[0][1]}`;for(let n=1;n<e.length;n++){let r=e[n-1],i=e[n];r[0]!==i[0]&&r[1]!==i[1]?t+=` H${i[0]} V${i[1]}`:r[0]===i[0]?t+=` V${i[1]}`:t+=` H${i[0]}`}return t}function p(e){let{hotHeating:t,coldHeating:n}=u.rails;if(e===`directBypass`)return`
      <!-- Spalte 5: Heizkreis-Slot · Ungemischter Direktkreis mit Überströmventil (FBH) -->
      <g id="grp-col5-heating-direct" class="col-heating">
        <!-- Vorlauf- & Rücklaufzuführung von Spalte 4 -->
        <path d="${f([[860,t],[1120,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />
        <path d="${f([[1120,n],[860,n]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.6" stroke-dasharray="6 3" fill="none" />

        <!-- Überströmventil Differenzdruck-Bypass zwischen VL und RL bei x=960 -->
        <path d="${f([[960,t],[960,n]])}" stroke="var(--text-secondary)" stroke-width="1.3" fill="none" />
        <g id="sym-overflow-valve">
          <polygon points="954,352 966,352 960,360" fill="var(--bg-canvas)" stroke="var(--text-primary)" stroke-width="1.2" />
          <polygon points="954,368 966,368 960,360" fill="var(--bg-canvas)" stroke="var(--text-primary)" stroke-width="1.2" />
          <circle cx="960" cy="360" r="1.5" fill="var(--text-primary)" />
          <path d="M968,354 L976,350 M974,347 L977,350 L974,353" stroke="var(--system-orange)" stroke-width="1.2" fill="none" />
        </g>
        <!-- Label Überströmventil: min. 12px Abstand zu Rahmen und Rand (1200) -->
        <text x="982" y="356" class="lbl-main" text-anchor="start" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Überströmventil</text>
        <text x="982" y="382" class="lbl-sub" text-anchor="start" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Differenzdruck-Bypass</text>

        <!-- FBH Fußbodenheizkreis-Verteiler bei x=1090..1150 -->
        <g id="grp-fbh-manifold">
          <rect x="1090" y="${t-6}" width="65" height="12" rx="2" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.3" />
          <rect x="1090" y="${n-6}" width="65" height="12" rx="2" fill="var(--bg-canvas)" stroke="var(--system-blue)" stroke-width="1.3" />
          <path d="M1105,${t+6} V310 Q1105,330 1115,330 Q1125,330 1125,350 V${n-6}" stroke="var(--system-red)" stroke-width="1" stroke-dasharray="3 2" fill="none" />
          <path d="M1135,${t+6} V310 Q1135,330 1145,330 Q1155,330 1155,350 V${n-6}" stroke="var(--system-red)" stroke-width="1" stroke-dasharray="3 2" fill="none" />
          <text x="1122" y="222" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">HKR Direkt</text>
          <text x="1122" y="504" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">FBH-Verteiler</text>
        </g>
      </g>
    `;if(e===`mixed3`){let e=d({code:`X11`,x:890,y:310,type:`relay`}),r=d({code:`X7`,x:890,y:265,type:`relay`}),i=d({code:`X37`,x:890,y:215,type:`sensor`}),a=d({code:`X12`,x:980,y:310,type:`relay`}),o=d({code:`X8`,x:980,y:265,type:`relay`}),s=d({code:`X38`,x:980,y:215,type:`sensor`}),c=d({code:`X13`,x:1068,y:310,type:`relay`}),l=d({code:`X5`,x:1068,y:265,type:`relay`}),u=d({code:`X39`,x:1068,y:215,type:`sensor`});return`
      <!-- Spalte 5: Heizkreis-Slot · 3 gemischte Heizkreise HKR 1–3 -->
      <g id="grp-col5-heating-mixed3" class="col-heating">
        <!-- Sammlerbalken horizontal -->
        <path d="${f([[860,t],[1155,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.8" fill="none" />
        <path d="${f([[1155,n],[860,n]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.8" stroke-dasharray="6 3" fill="none" />
        <text x="865" y="180" class="lbl-main" text-anchor="start" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">VL-Sammler</text>
        <text x="865" y="525" class="lbl-main" text-anchor="start" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">RL-Sammler</text>

        <!-- HKR 1 Station (x=945) -->
        <g id="hkr1-station">
          <path d="${f([[945,t],[945,130]])}" stroke="var(--system-red)" stroke-width="1.4" fill="none" />
          <path d="${f([[960,130],[960,n]])}" stroke="var(--system-blue)" stroke-width="1.4" stroke-dasharray="4 2" fill="none" />
          <polygon points="940,314 950,314 945,322" fill="var(--system-red)" />
          <path d="${f([[945,320],[960,320]])}" stroke="var(--text-secondary)" stroke-width="1.1" fill="none" />
          <circle cx="945" cy="275" r="7.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
          <polygon points="941,279 949,279 945,271" fill="var(--system-red)" />
          <polygon points="941,248 949,248 945,241" fill="var(--system-red)" />
          <circle cx="945" cy="215" r="2.5" fill="var(--system-green)" />
          ${e}
          ${r}
          ${i}
          <text x="952" y="115" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">HKR 1</text>
        </g>

        <!-- HKR 2 Station (x=1035) -->
        <g id="hkr2-station">
          <path d="${f([[1035,t],[1035,130]])}" stroke="var(--system-red)" stroke-width="1.4" fill="none" />
          <path d="${f([[1050,130],[1050,n]])}" stroke="var(--system-blue)" stroke-width="1.4" stroke-dasharray="4 2" fill="none" />
          <polygon points="1030,314 1040,314 1035,322" fill="var(--system-red)" />
          <path d="${f([[1035,320],[1050,320]])}" stroke="var(--text-secondary)" stroke-width="1.1" fill="none" />
          <circle cx="1035" cy="275" r="7.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
          <polygon points="1031,279 1039,279 1035,271" fill="var(--system-red)" />
          <polygon points="1031,248 1039,248 1035,241" fill="var(--system-red)" />
          <circle cx="1035" cy="215" r="2.5" fill="var(--system-green)" />
          ${a}
          ${o}
          ${s}
          <text x="1042" y="115" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">HKR 2</text>
        </g>

        <!-- HKR 3 Station (x=1120, endet vor x=1188) -->
        <g id="hkr3-station">
          <path d="${f([[1120,t],[1120,130]])}" stroke="var(--system-red)" stroke-width="1.4" fill="none" />
          <path d="${f([[1135,130],[1135,n]])}" stroke="var(--system-blue)" stroke-width="1.4" stroke-dasharray="4 2" fill="none" />
          <polygon points="1115,314 1125,314 1120,322" fill="var(--system-red)" />
          <path d="${f([[1120,320],[1135,320]])}" stroke="var(--text-secondary)" stroke-width="1.1" fill="none" />
          <circle cx="1120" cy="275" r="7.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
          <polygon points="1116,279 1124,279 1120,271" fill="var(--system-red)" />
          <polygon points="1116,248 1124,248 1120,241" fill="var(--system-red)" />
          <circle cx="1120" cy="215" r="2.5" fill="var(--system-green)" />
          ${c}
          ${l}
          ${u}
          <text x="1127" y="115" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">HKR 3</text>
        </g>
      </g>
    `}if(e===`mixedWithSolar`){let e=d({code:`X11`,x:900,y:310,type:`relay`}),r=d({code:`X7`,x:900,y:265,type:`relay`}),i=d({code:`X37`,x:900,y:215,type:`sensor`}),a=d({code:`X13`,x:905,y:65,type:`relay`}),o=d({code:`X5`,x:1085,y:65,type:`relay`});return`
      <!-- Spalte 5: Heizkreis-Slot mit Solaranbindung (122_030) -->
      <g id="grp-col5-heating-solar" class="col-heating">
        <!-- Sammlerbalken -->
        <path d="${f([[860,t],[1120,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />
        <path d="${f([[1120,n],[860,n]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.6" stroke-dasharray="6 3" fill="none" />
        <text x="865" y="180" class="lbl-main" text-anchor="start" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">VL-Sammler</text>
        <text x="865" y="525" class="lbl-main" text-anchor="start" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">RL-Sammler</text>

        <!-- Solarkollektorfeld oben (y=55..105, x=960..1070) -->
        <rect x="965" y="55" width="105" height="40" rx="3" fill="var(--bg-canvas)" stroke="var(--system-orange)" stroke-width="1.3" />
        <line x1="990" y1="55" x2="990" y2="95" stroke="var(--system-orange)" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="1015" y1="55" x2="1015" y2="95" stroke="var(--system-orange)" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="1040" y1="55" x2="1040" y2="95" stroke="var(--system-orange)" stroke-width="1" stroke-dasharray="2 2" />
        <text x="1017" y="42" class="lbl-main" text-anchor="middle" fill="var(--system-orange)" font-family="var(--font-sans)" font-size="14" font-weight="600">Solarthermie</text>

        <!-- Solarpumpe X5 & Solar-USV X13 -->
        ${a}
        ${o}

        <!-- HKR 1 Station (x=955) -->
        <g id="hkr1-station-solar">
          <path d="${f([[955,t],[955,140]])}" stroke="var(--system-red)" stroke-width="1.4" fill="none" />
          <path d="${f([[970,140],[970,n]])}" stroke="var(--system-blue)" stroke-width="1.4" stroke-dasharray="4 2" fill="none" />
          <polygon points="950,314 960,314 955,322" fill="var(--system-red)" />
          <circle cx="955" cy="275" r="7.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
          <polygon points="951,279 959,279 955,271" fill="var(--system-red)" />
          <circle cx="955" cy="215" r="2.5" fill="var(--system-green)" />
          ${e}
          ${r}
          ${i}
          <text x="962" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">HKR 1</text>
        </g>
      </g>
    `}if(e===`mixedWithExtWez`){let e=d({code:`X11`,x:900,y:310,type:`relay`}),r=d({code:`X7`,x:900,y:265,type:`relay`}),i=d({code:`X37`,x:900,y:215,type:`sensor`}),a=d({code:`X28_2`,x:1060,y:270,type:`relay`}),o=d({code:`X9`,x:1060,y:445,type:`relay`});return`
      <!-- Spalte 5: Heizkreis-Slot mit 2. Wärmeerzeuger (132_300) -->
      <g id="grp-col5-heating-wez" class="col-heating">
        <!-- Sammlerbalken -->
        <path d="${f([[860,t],[1050,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />
        <path d="${f([[1050,n],[860,n]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.6" stroke-dasharray="6 3" fill="none" />
        <text x="865" y="180" class="lbl-main" text-anchor="start" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">VL-Sammler</text>
        <text x="865" y="525" class="lbl-main" text-anchor="start" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">RL-Sammler</text>

        <!-- HKR 1 Station -->
        <g id="hkr1-station-wez">
          <path d="${f([[955,t],[955,130]])}" stroke="var(--system-red)" stroke-width="1.4" fill="none" />
          <path d="${f([[970,130],[970,n]])}" stroke="var(--system-blue)" stroke-width="1.4" stroke-dasharray="4 2" fill="none" />
          <polygon points="950,314 960,314 955,322" fill="var(--system-red)" />
          <circle cx="955" cy="275" r="7.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
          <polygon points="951,279 959,279 955,271" fill="var(--system-red)" />
          <circle cx="955" cy="215" r="2.5" fill="var(--system-green)" />
          ${e}
          ${r}
          ${i}
          <text x="962" y="115" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">HKR 1</text>
        </g>

        <!-- 2. Wärmeerzeuger Kessel (Biomasse/Kamin) bei x=1080..1165, y=325..430 -->
        <g id="grp-ext-wez">
          <rect x="1080" y="325" width="85" height="105" rx="4" fill="none" class="sym-outline" stroke="var(--system-orange)" stroke-width="1.4" />
          <text x="1122" y="312" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">2. WEZ</text>
          <text x="1122" y="358" class="lbl-sub" text-anchor="middle" fill="var(--system-orange)" font-family="var(--font-sans)" font-size="14">Kessel</text>
          <path d="M1122,370 C1115,385 1113,395 1122,405 C1131,395 1129,385 1122,370 Z" fill="var(--system-orange)" opacity="0.8" />
          ${a}
          ${o}
        </g>
      </g>
    `}let r=d({code:`X11`,x:900,y:310,type:`relay`}),i=d({code:`X7`,x:900,y:265,type:`relay`}),a=d({code:`X37`,x:900,y:215,type:`sensor`}),o=d({code:`X12`,x:1005,y:310,type:`relay`}),s=d({code:`X8`,x:1005,y:265,type:`relay`}),c=d({code:`X38`,x:1005,y:215,type:`sensor`});return`
    <!-- Spalte 5: Heizkreis-Slot · 2 gemischte Heizkreise HKR 1 & HKR 2 -->
    <g id="grp-col5-heating-mixed2" class="col-heating">
      <!-- Sammlerbalken horizontal (x=860..1120) -->
      <path d="${f([[860,t],[1120,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.8" fill="none" />
      <path d="${f([[1120,n],[860,n]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.8" stroke-dasharray="6 3" fill="none" />
      <text x="865" y="180" class="lbl-main" text-anchor="start" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">VL-Sammler</text>
      <text x="865" y="525" class="lbl-main" text-anchor="start" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">RL-Sammler</text>

      <!-- HKR 1 Station (x=955) -->
      <g id="hkr1-station">
        <path d="${f([[955,t],[955,130]])}" stroke="var(--system-red)" stroke-width="1.4" fill="none" />
        <path d="${f([[970,130],[970,n]])}" stroke="var(--system-blue)" stroke-width="1.4" stroke-dasharray="4 2" fill="none" />
        <polygon points="950,314 960,314 955,322" fill="var(--system-red)" />
        <path d="${f([[955,320],[970,320]])}" stroke="var(--text-secondary)" stroke-width="1.1" fill="none" />
        <circle cx="955" cy="275" r="7.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
        <polygon points="951,279 959,279 955,271" fill="var(--system-red)" />
        <polygon points="951,248 959,248 955,241" fill="var(--system-red)" />
        <circle cx="955" cy="215" r="2.5" fill="var(--system-green)" />
        ${r}
        ${i}
        ${a}
        <text x="962" y="115" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">HKR 1</text>
      </g>

      <!-- HKR 2 Station (x=1060, endet vor x=1188) -->
      <g id="hkr2-station">
        <path d="${f([[1060,t],[1060,130]])}" stroke="var(--system-red)" stroke-width="1.4" fill="none" />
        <path d="${f([[1075,130],[1075,n]])}" stroke="var(--system-blue)" stroke-width="1.4" stroke-dasharray="4 2" fill="none" />
        <polygon points="1055,314 1065,314 1060,322" fill="var(--system-red)" />
        <path d="${f([[1060,320],[1075,320]])}" stroke="var(--text-secondary)" stroke-width="1.1" fill="none" />
        <circle cx="1060" cy="275" r="7.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
        <polygon points="1056,279 1064,279 1060,271" fill="var(--system-red)" />
        <polygon points="1056,248 1064,248 1060,241" fill="var(--system-red)" />
        <circle cx="1060" cy="215" r="2.5" fill="var(--system-green)" />
        ${o}
        ${s}
        ${c}
        <text x="1067" y="115" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">HKR 2</text>
      </g>
    </g>
  `}function m(e){let{wallRight:t}=u.cols.col2,{moduleLeft:n,moduleRight:r}=u.cols.col3,{hotMain:i,hotHeating:a,wwTop:o,coldMain:s}=u.rails;if(e===`integratedInEco`)return`
      <!-- Spalte 3: Verbindungsleitungen (Hydraulik & Regelung im ECO-Speicher integriert) -->
      <g id="grp-col3-eco-transit" class="col-hydr">
        <!-- Durchgangsleitungen zur Kompakt-Zentrale -->
        <path d="${f([[t,i],[560,i]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />
        <path d="${f([[560,s],[t,s]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.6" stroke-dasharray="6 3" fill="none" />

        <!-- Entleerung innen -->
        <g id="grp-drain-int-eco">
          <path d="M275,${i} V220" stroke="var(--system-red)" stroke-width="1.2" fill="none" />
          <polygon points="271,220 279,220 275,227" fill="var(--system-red)" />
          <path d="M275,${s} V510" stroke="var(--system-blue)" stroke-width="1.2" fill="none" />
          <polygon points="271,510 279,510 275,517" fill="var(--system-blue)" />
          <text x="260" y="535" class="lbl-sub" text-anchor="start" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Entleerung</text>
        </g>

        <!-- Hinweiskasten zur Vorverkabelung -->
        <rect x="330" y="180" width="160" height="75" rx="6" fill="none" stroke="var(--border-separator)" stroke-width="1.2" stroke-dasharray="4 3" class="sym-dashed" />
        <text x="410" y="210" class="inst-text" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">ECO-Zentrale</text>
        <text x="410" y="235" class="inst-text" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Vorverkabelt (AHC 1)</text>
      </g>
    `;let c=d({code:`X28`,x:305,y:155,type:`relay`}),l=d({code:`X9`,x:395,y:210,type:`relay`}),p=d({code:`X2`,x:335,y:440,type:`relay`}),m=d({code:`X57`,x:385,y:440,type:`pwm`});return`
    <!-- Spalte 3: Hydraulikmodul (USV X28, Heizstab X9, Ladepumpe X2/X57), ADG & Regelung AHC -->
    <g id="grp-col3-hydraulic" class="col-hydr">
      <!-- Entleerung innen direkt nach Mauerdurchführung -->
      <g id="grp-drain-int">
        <path d="M275,${i} V220" stroke="var(--system-red)" stroke-width="1.2" fill="none" />
        <polygon points="271,220 279,220 275,227" fill="var(--system-red)" />
        <path d="M275,${s} V510" stroke="var(--system-blue)" stroke-width="1.2" fill="none" />
        <polygon points="271,510 279,510 275,517" fill="var(--system-blue)" />
        <text x="260" y="535" class="lbl-sub" text-anchor="start" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Entleerung</text>
      </g>

      <!-- Hydraulikmodul-Wandgehäuse (gestrichelter Rahmen x=300..455, y=125..455) -->
      <rect x="${n}" y="125" width="${r-n}" height="330" rx="6" fill="none" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1.2" stroke-dasharray="4 4" />
      <text x="377" y="112" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Hydraulikmodul</text>

      <!-- Dreiwege-Umschaltventil USV X28 (x=345, y=200) -->
      <path d="${f([[t,i],[345,i]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />
      <g id="sym-usv-x28">
        <polygon points="333,195 333,205 345,200" fill="var(--system-red)" stroke="var(--system-red)" stroke-width="1.1" />
        <polygon points="345,200 357,195 357,205" fill="var(--system-red)" stroke="var(--system-red)" stroke-width="1.1" />
        <polygon points="340,190 350,190 345,200" fill="var(--system-red)" stroke="var(--system-red)" stroke-width="1.1" />
        <circle cx="345" cy="200" r="1.5" fill="var(--bg-canvas)" />
      </g>
      ${c}

      <!-- Warmwasser-Abgang A von USV: V 150 -> H 560 (Col 4) -->
      <path d="${f([[345,190],[345,o],[r,o]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />

      <!-- Heizungs-Abgang B von USV: H 370 -> V 250 -> durch Heizstab X9 -> H 455 (Col 4) -->
      <path d="${f([[357,i],[370,i],[370,a],[r,a]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />

      <!-- Elektro-Heizstab X9 (x=405, y=250) -->
      <rect x="395" y="242" width="24" height="16" rx="2" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.3" />
      <path d="M399,250 L403,245 L407,255 L411,245 L415,250" stroke="var(--system-red)" stroke-width="1.1" fill="none" />
      ${l}

      <!-- Rücklaufleitung durch Hydraulikmodul (coldMain = 490) -->
      <path d="${f([[r,s],[t,s]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.6" stroke-dasharray="6 3" fill="none" />

      <!-- Absperrhähne im Rücklauf -->
      <polygon points="312,485 312,495 322,490" fill="var(--system-blue)" />
      <polygon points="322,485 322,495 312,490" fill="var(--system-blue)" />
      <polygon points="430,485 430,495 440,490" fill="var(--system-blue)" />
      <polygon points="440,485 440,495 430,490" fill="var(--system-blue)" />

      <!-- Rückschlagventil (RV) im Rücklauf -->
      <polygon points="338,485 338,495 330,490" fill="var(--system-blue)" stroke="var(--system-blue)" stroke-width="1.1" />
      <line x1="330" y1="484" x2="330" y2="496" stroke="var(--system-blue)" stroke-width="1.2" />

      <!-- Ladepumpe Primärkreis X2 / X57 bei x=375, y=490 -->
      <circle cx="375" cy="${s}" r="12" fill="var(--bg-canvas)" stroke="var(--system-blue)" stroke-width="1.4" />
      <polygon points="381,484 381,496 369,490" fill="var(--system-blue)" />
      ${p}
      ${m}

      <!-- ADG Membran-Ausdehnungsgefäß KLAR AUSSERHALB / UNTERHALB des Rahmens -->
      <g id="grp-adg-col3">
        <path d="${f([[415,s],[415,535]])}" stroke="var(--system-blue)" stroke-width="1.3" fill="none" />
        <rect x="410" y="515" width="10" height="8" rx="1.5" fill="var(--bg-canvas)" stroke="var(--system-blue)" stroke-width="1.1" />
        <circle cx="415" cy="565" r="24" fill="var(--bg-canvas)" stroke="var(--text-primary)" stroke-width="1.4" />
        <path d="M393,565 Q415,555 437,565" stroke="var(--text-secondary)" stroke-width="1.1" fill="none" />
        <text x="415" y="608" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">ADG</text>
      </g>

      <!-- Regelung AHC & Touch-Display rechts neben dem Modul -->
      <g id="grp-ctrl-col3">
        <!-- Touch-Display -->
        <rect x="470" y="140" width="46" height="32" rx="4" fill="var(--bg-canvas)" stroke="var(--text-primary)" stroke-width="1.3" />
        <rect x="474" y="144" width="38" height="24" rx="2" fill="none" stroke="var(--border-separator)" stroke-width="1" />
        <circle cx="493" cy="154" r="3.5" fill="none" stroke="var(--system-cyan)" stroke-width="1" />
        <path d="M493,154 V163" stroke="var(--system-cyan)" stroke-width="1.1" />
        <text x="493" y="128" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Display</text>

        <!-- AHC Reglerkasten mit inst-text -->
        <rect x="468" y="185" width="50" height="75" rx="3" fill="var(--bg-canvas)" stroke="var(--text-primary)" stroke-width="1.4" class="sym-outline" />
        <text x="493" y="215" class="inst-text" text-anchor="middle" dominant-baseline="central" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">AHC</text>
        <rect x="473" y="235" width="40" height="18" rx="2" fill="none" stroke="var(--border-separator)" stroke-width="1" />

        <!-- Bus-/Datenleitung nach unten -->
        <path d="M493,260 V590" class="sym-dashed" stroke="var(--system-cyan)" stroke-width="1.2" stroke-dasharray="3 3" fill="none" />
        <text x="493" y="612" class="lbl-sub" text-anchor="middle" fill="var(--system-cyan)" font-family="var(--font-mono)" font-size="14">RJ45 / 230V</text>
      </g>
    </g>
  `}function h(e){let{hotMain:t,coldMain:n,power230V:r,power400V:i,busArc:a}=u.rails,o=u.cols.col2.wallLeft;return e===`cascade2`?`
      <!-- Spalte 1: Außeneinheiten 2er-Kaskade EU10–20L (222_000) -->
      <g id="grp-col1-outdoor-cascade2" class="col-outdoor">
        <!-- WP 1 oben -->
        <rect x="35" y="80" width="90" height="110" rx="4" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.3" />
        <rect x="45" y="190" width="70" height="8" rx="2" fill="none" class="sym-detail" stroke="var(--text-secondary)" stroke-width="1.1" />
        <text x="80" y="65" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">WP 1 (EU)</text>
        <path d="M50,190 V210" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1.1" stroke-dasharray="2 3" />
        <text x="50" y="222" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">DN100</text>

        <!-- WP 2 unten -->
        <rect x="35" y="255" width="90" height="110" rx="4" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.3" />
        <rect x="45" y="365" width="70" height="8" rx="2" fill="none" class="sym-detail" stroke="var(--text-secondary)" stroke-width="1.1" />
        <text x="80" y="244" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">WP 2 (EU)</text>
        <path d="M50,365 V385" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1.1" stroke-dasharray="2 3" />
        <text x="50" y="400" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">DN100</text>

        <!-- ARC Kaskadenbus vertikal -->
        <path d="M105,190 V255" class="sym-dashed" stroke="var(--system-cyan)" stroke-width="1.3" stroke-dasharray="3 3" />
        <text x="110" y="222" class="lbl-sub" text-anchor="start" fill="var(--system-cyan)" font-family="var(--font-mono)" font-size="14" font-weight="600">ARC Bus</text>

        <!-- Vorlauf WP 1 & WP 2 -> Sammler bei x=155 -> Wand -->
        <path d="${f([[125,125],[155,125],[155,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[125,295],[155,295],[155,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[155,t],[o,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />

        <!-- Rücklauf Sammler bei x=175 -> WP 1 & WP 2 -->
        <path d="${f([[o,n],[175,n],[175,165],[125,165]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
        <path d="${f([[175,n],[175,335],[125,335]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />

        <!-- Außenliegendes Sicherheitsventil (SV) -->
        <path d="M195,${t} V170" stroke="var(--system-red)" stroke-width="1.3" fill="none" />
        <circle cx="195" cy="165" r="4.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
        <polygon points="191,169 199,169 195,161" fill="var(--system-red)" />
        <text x="195" y="150" class="lbl-sub" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="14" font-weight="600">SV</text>

        <!-- Entleerung außen am Rücklauf -->
        <path d="M195,${n} V515" stroke="var(--system-blue)" stroke-width="1.3" fill="none" />
        <polygon points="191,515 199,515 195,523" fill="var(--system-blue)" />
        <text x="195" y="538" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Entleerung</text>

        <!-- Versorgungsleitungen unten -->
        <path d="M35,${r} H${o}" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4 3" fill="none" />
        <text x="40" y="${r-6}" class="lbl-sub" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="14">230V WP</text>
        <path d="M35,${i} H${o}" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4 3" fill="none" />
        <text x="40" y="${i-6}" class="lbl-sub" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="14">400V WP</text>
        <path d="M35,${a} H${o}" class="sym-dashed" stroke="var(--system-cyan)" stroke-width="1" stroke-dasharray="4 3" fill="none" />
        <text x="40" y="${a-6}" class="lbl-sub" fill="var(--system-cyan)" font-family="var(--font-mono)" font-size="14">Bus ARC</text>
      </g>
    `:e===`cascade3`?`
      <!-- Spalte 1: Außeneinheiten 3er-Kaskade EU10–20L (312_000) -->
      <g id="grp-col1-outdoor-cascade3" class="col-outdoor">
        <!-- WP 1 -->
        <rect x="30" y="65" width="80" height="75" rx="3" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.3" />
        <text x="70" y="52" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">WP 1</text>
        <path d="M45,140 V155" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2" />

        <!-- WP 2 -->
        <rect x="30" y="170" width="80" height="75" rx="3" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.3" />
        <text x="70" y="160" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">WP 2</text>
        <path d="M45,245 V260" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2" />

        <!-- WP 3 -->
        <rect x="30" y="275" width="80" height="75" rx="3" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.3" />
        <text x="70" y="265" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">WP 3</text>
        <path d="M45,350 V365" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2" />

        <!-- Kaskadenbus durchgehend -->
        <path d="M70,140 V170 M70,245 V275" class="sym-dashed" stroke="var(--system-cyan)" stroke-width="1.2" stroke-dasharray="3 3" />
        <text x="74" y="210" class="lbl-sub" text-anchor="start" fill="var(--system-cyan)" font-family="var(--font-mono)" font-size="14">ARC Bus</text>

        <!-- Vorläufe auf Sammler x=145 -->
        <path d="${f([[110,95],[145,95],[145,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[110,200],[145,200]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[110,305],[145,305],[145,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[145,t],[o,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />

        <!-- Rückläufe von Sammler x=165 -->
        <path d="${f([[o,n],[165,n],[165,115],[110,115]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
        <path d="${f([[165,n],[165,220],[110,220]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
        <path d="${f([[165,n],[165,325],[110,325]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />

        <!-- Außenliegendes SV -->
        <path d="M195,${t} V170" stroke="var(--system-red)" stroke-width="1.3" fill="none" />
        <circle cx="195" cy="165" r="4.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
        <polygon points="191,169 199,169 195,161" fill="var(--system-red)" />
        <text x="195" y="150" class="lbl-sub" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="14" font-weight="600">SV</text>

        <!-- Entleerung außen -->
        <path d="M195,${n} V515" stroke="var(--system-blue)" stroke-width="1.3" fill="none" />
        <polygon points="191,515 199,515 195,523" fill="var(--system-blue)" />
        <text x="195" y="538" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Entleerung</text>

        <!-- Versorgungsleitungen unten -->
        <path d="M30,${r} H${o}" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4 3" fill="none" />
        <text x="35" y="${r-6}" class="lbl-sub" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="14">230V WP</text>
        <path d="M30,${i} H${o}" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4 3" fill="none" />
        <text x="35" y="${i-6}" class="lbl-sub" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="14">400V WP</text>
        <path d="M30,${a} H${o}" class="sym-dashed" stroke="var(--system-cyan)" stroke-width="1" stroke-dasharray="4 3" fill="none" />
        <text x="35" y="${a-6}" class="lbl-sub" fill="var(--system-cyan)" font-family="var(--font-mono)" font-size="14">Bus ARC</text>
      </g>
    `:`
    <!-- Spalte 1: Außeneinheit Lambda EU10–20L (Standard) -->
    <g id="grp-col1-outdoor-single" class="col-outdoor">
      <!-- WP Gehäuse & Sockel -->
      <rect x="35" y="160" width="105" height="180" rx="6" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
      <rect x="45" y="340" width="85" height="14" rx="2" fill="none" class="sym-detail" stroke="var(--text-secondary)" stroke-width="1.1" />
      <!-- Ast-/Zweig-Gitter der Front -->
      <path d="M55,180 C70,205 76,230 73,255 C70,280 60,305 52,325" class="sym-detail" stroke="var(--text-secondary)" stroke-width="1.1" fill="none" />
      <path d="M73,225 C88,218 105,220 120,230" class="sym-detail" stroke="var(--text-secondary)" stroke-width="1.1" fill="none" />
      <path d="M72,255 C90,265 105,280 115,300" class="sym-detail" stroke="var(--text-secondary)" stroke-width="1.1" fill="none" />

      <text x="87" y="142" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Lambda EU10–20L</text>
      <text x="87" y="370" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Fundament</text>

      <!-- Kondensatablauf DN100 senkrecht in Schotterbett -->
      <path d="M65,354 V410" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1.2" stroke-dasharray="2 3" />
      <line x1="55" y1="410" x2="75" y2="410" stroke="var(--text-secondary)" stroke-width="1.2" />
      <text x="65" y="430" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">DN100</text>

      <!-- Vorlauf von WP (x=140, y=200) -> Wand (x=230) -->
      <path d="${f([[140,t],[o,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />

      <!-- Sicherheitsgruppe außen am Vorlauf (SV) -->
      <path d="M185,${t} V165" stroke="var(--system-red)" stroke-width="1.3" fill="none" />
      <circle cx="185" cy="165" r="4.5" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.2" />
      <polygon points="181,169 189,169 185,161" fill="var(--system-red)" />
      <text x="185" y="150" class="lbl-sub" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-mono)" font-size="14" font-weight="600">SV</text>

      <!-- Rücklauf von Wand (x=230) -> WP (x=140, y=490) -->
      <path d="${f([[o,n],[140,n]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.6" stroke-dasharray="6 3" fill="none" />

      <!-- Entleerung außen am Rücklauf -->
      <path d="M185,${n} V518" stroke="var(--system-blue)" stroke-width="1.3" fill="none" />
      <polygon points="181,518 189,518 185,526" fill="var(--system-blue)" />
      <text x="185" y="542" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Entleerung</text>

      <!-- Versorgungsleitungen unten -->
      <path d="M40,${r} H${o}" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4 3" fill="none" />
      <text x="45" y="${r-6}" class="lbl-sub" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="14">230 V WP</text>
      <path d="M40,${i} H${o}" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4 3" fill="none" />
      <text x="45" y="${i-6}" class="lbl-sub" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="14">400 V WP</text>
      <path d="M40,${a} H${o}" class="sym-dashed" stroke="var(--system-cyan)" stroke-width="1" stroke-dasharray="4 3" fill="none" />
      <text x="45" y="${a-6}" class="lbl-sub" fill="var(--system-cyan)" font-family="var(--font-mono)" font-size="14">Busleitung</text>
    </g>
  `}function g(e){let{wwTop:t,hotHeating:n,coldHeating:r,coldMain:i,zirk:a}=u.rails;if(e===`boiler`){let e=d({code:`X35`,x:670,y:160,type:`sensor`}),r=d({code:`X36`,x:670,y:435,type:`sensor`}),o=d({code:`X5`,x:770,y:270,type:`relay`}),s=d({code:`X39`,x:815,y:270,type:`sensor`});return`
      <!-- Spalte 4: Speicher-Slot · Boiler mit Glattrohr-WT (111_000) -->
      <g id="grp-col4-storage-boiler" class="col-storage">
        <!-- Direktkreis Durchgangs-Leitungen nach Spalte 5 -->
        <path d="${f([[455,n],[860,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />
        <path d="${f([[860,i],[455,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.6" stroke-dasharray="6 3" fill="none" />

        <!-- Boiler-Druckkörper mit Klöpperböden -->
        <rect x="630" y="140" width="120" height="345" rx="24" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="690" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Boiler (Trinkwasser)</text>

        <!-- Glattrohr-Wärmetauscher (orthogonales Mäander) -->
        <path d="${f([[560,t],[650,t],[650,190],[720,190],[720,230],[650,230],[650,270],[720,270],[720,310],[650,310],[650,350],[720,350],[720,390],[650,390],[650,430],[590,430],[590,i],[455,i]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />

        <!-- Sensoren X35 oben & X36 unten -->
        ${e}
        ${r}

        <!-- Warmwasser Auslauf WW (oben rechts) -->
        <path d="${f([[750,160],[840,160]])}" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <text x="846" y="164" class="lbl-mono" text-anchor="start" fill="var(--system-red)" font-family="var(--font-mono)" font-size="14" font-weight="600">WW</text>

        <!-- Kaltwasser Zulauf KW (unten rechts) -->
        <path d="${f([[840,465],[750,465]])}" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
        <text x="846" y="469" class="lbl-mono" text-anchor="start" fill="var(--system-blue)" font-family="var(--font-mono)" font-size="14" font-weight="600">KW</text>

        <!-- Zirkulationsleitung mit Pumpe X5 und Fühler X39 -->
        <path d="${f([[840,a],[750,a]])}" stroke="var(--system-blue)" stroke-width="1.3" stroke-dasharray="4 2" fill="none" />
        <circle cx="790" cy="${a}" r="8" fill="var(--bg-canvas)" stroke="var(--system-blue)" stroke-width="1.2" />
        <polygon points="786,306 786,314 794,310" fill="var(--system-blue)" />
        ${o}
        ${s}
        <text x="846" y="${a+5}" class="lbl-mono" text-anchor="start" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="14">Zirk.</text>
      </g>
    `}if(e===`twoStorageBoiler`||e===`twoStoragePufferBoiler`){let e=d({code:`X35`,x:605,y:160,type:`sensor`}),o=d({code:`X36`,x:605,y:440,type:`sensor`}),s=d({code:`X31`,x:772,y:160,type:`sensor`}),c=d({code:`X5`,x:685,y:270,type:`relay`});return`
      <!-- Spalte 4: 2-Speicherlösung · Boiler (links) & Heizungspuffer (rechts) -->
      <g id="grp-col4-two-storage-boiler" class="col-storage">
        <!-- 1. Boiler links (x=580..675) -->
        <rect x="580" y="140" width="95" height="345" rx="20" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="627" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Boiler</text>
        ${e}
        ${o}

        <!-- Glattrohr-WT im Boiler -->
        <path d="${f([[455,t],[595,t],[595,190],[660,190],[660,240],[595,240],[595,290],[660,290],[660,340],[595,340],[595,390],[660,390],[660,430],[570,430],[570,i],[455,i]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.4" fill="none" />

        <!-- WW & KW am Boiler -->
        <path d="${f([[675,160],[715,160]])}" stroke="var(--system-red)" stroke-width="1.3" fill="none" />
        <text x="718" y="164" class="lbl-mono" text-anchor="start" fill="var(--system-red)" font-family="var(--font-mono)" font-size="14">WW</text>
        <path d="${f([[715,465],[675,465]])}" stroke="var(--system-blue)" stroke-width="1.3" stroke-dasharray="4 2" fill="none" />
        <text x="718" y="469" class="lbl-mono" text-anchor="start" fill="var(--system-blue)" font-family="var(--font-mono)" font-size="14">KW</text>
        <!-- Zirkulation -->
        <path d="${f([[715,a],[675,a]])}" stroke="var(--system-blue)" stroke-width="1.2" stroke-dasharray="3 2" fill="none" />
        <circle cx="695" cy="${a}" r="6.5" fill="var(--bg-canvas)" stroke="var(--system-blue)" stroke-width="1" />
        <polygon points="692,307 692,313 698,310" fill="var(--system-blue)" />
        ${c}

        <!-- 2. Pufferspeicher rechts (x=745..840) -->
        <rect x="745" y="140" width="95" height="345" rx="20" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="792" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Pufferspeicher</text>
        ${s}

        <!-- Heizungsvorlauf von USV B (y=250) in Puffer links hinein und rechts heraus zu HKR -->
        <path d="${f([[455,n],[745,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[840,n],[860,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />

        <!-- Heizungsrücklauf von HKR (y=470) in Puffer rechts hinein -->
        <path d="${f([[860,r],[840,r]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />

        <!-- Rücklauf von Puffer links (y=490) zu Ladepumpe/WP -->
        <path d="${f([[745,i],[455,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
      </g>
    `}if(e===`fwsSingle`){let e=d({code:`X35`,x:635,y:160,type:`sensor`}),r=d({code:`X32`,x:790,y:145,type:`sensor`}),a=d({code:`X60`,x:790,y:440,type:`input24v`}),o=d({code:`X2`,x:735,y:160,type:`relay`}),s=d({code:`X56`,x:735,y:395,type:`pwm`});return`
      <!-- Spalte 4: Puffer mit externem Frischwassersystem FWS (121_000) -->
      <g id="grp-col4-storage-fws-single" class="col-storage">
        <!-- Direktkreis Durchgangsleitungen -->
        <path d="${f([[455,n],[860,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />
        <path d="${f([[860,i],[455,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.6" stroke-dasharray="6 3" fill="none" />

        <!-- Warmwasserpuffer -->
        <rect x="600" y="140" width="110" height="345" rx="20" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="655" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">WW-Puffer</text>
        ${e}

        <!-- Vorlauf von USV A in den Puffer oben -->
        <path d="${f([[455,t],[600,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <!-- Rücklauf von Puffer zu WP -->
        <path d="${f([[600,i],[455,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />

        <!-- Externes FWS Modul (Plattenwärmetauscher & Primärpumpe) -->
        <rect x="735" y="210" width="85" height="170" rx="4" fill="none" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1.1" stroke-dasharray="3 3" />
        <text x="777" y="226" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">FWS Modul</text>

        <!-- Plattenwärmetauscher Symbol -->
        <rect x="750" y="240" width="40" height="80" rx="2" fill="var(--bg-canvas)" stroke="var(--text-primary)" stroke-width="1.3" />
        <line x1="770" y1="240" x2="770" y2="320" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2" />

        <!-- Primärkreis Puffer -> PWT mit Pumpe X2/X56 -->
        <path d="${f([[710,180],[750,180],[750,240]])}" stroke="var(--system-red)" stroke-width="1.3" fill="none" />
        <circle cx="750" cy="195" r="7" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1.1" />
        <polygon points="746,191 754,191 750,199" fill="var(--system-red)" />
        ${o}
        ${s}

        <!-- PWT Primärrücklauf zu Puffer unten -->
        <path d="${f([[750,320],[750,450],[710,450]])}" stroke="var(--system-blue)" stroke-width="1.3" stroke-dasharray="4 2" fill="none" />

        <!-- Trinkwasser-Sekundärkreis: KW Zulauf unten, Strömungsschalter X60 -->
        <path d="${f([[855,465],[780,465],[780,320]])}" stroke="var(--system-blue)" stroke-width="1.3" stroke-dasharray="6 3" fill="none" />
        <text x="858" y="469" class="lbl-mono" text-anchor="start" fill="var(--system-blue)" font-family="var(--font-mono)" font-size="14">KW</text>
        ${a}

        <!-- Trinkwasser-Sekundärkreis: WW Auslauf oben, Fühler X32 -->
        <path d="${f([[780,240],[780,160],[855,160]])}" stroke="var(--system-red)" stroke-width="1.4" fill="none" />
        <text x="858" y="164" class="lbl-mono" text-anchor="start" fill="var(--system-red)" font-family="var(--font-mono)" font-size="14">WW</text>
        ${r}
      </g>
    `}if(e===`twoStorageFws`){let e=d({code:`X35`,x:600,y:160,type:`sensor`}),a=d({code:`X31`,x:790,y:160,type:`sensor`});return`
      <!-- Spalte 4: 2-Speicher mit FWS & Heizungspuffer -->
      <g id="grp-col4-two-storage-fws" class="col-storage">
        <!-- WW-Puffer links (x=575..660) -->
        <rect x="575" y="140" width="85" height="345" rx="18" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="617" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">WW-Puffer</text>
        ${e}

        <!-- FWS Modul kompakt in der Mitte (x=680..745) -->
        <rect x="680" y="210" width="65" height="170" rx="3" fill="none" class="sym-dashed" stroke="var(--text-secondary)" stroke-width="1.1" stroke-dasharray="3 3" />
        <text x="712" y="202" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">FWS</text>
        <rect x="695" y="240" width="35" height="75" rx="2" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.2" />
        ${d({code:`X32`,x:692,y:155,type:`sensor`})}
        ${d({code:`X60`,x:692,y:410,type:`input24v`})}

        <!-- Heizungspuffer rechts (x=765..855) -->
        <rect x="765" y="140" width="90" height="345" rx="18" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="810" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Heizpuffer</text>
        ${a}

        <!-- Vorlauf von USV A -> WW-Puffer oben -->
        <path d="${f([[455,t],[575,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <!-- Vorlauf von USV B -> Heizpuffer oben -> zu HKR -->
        <path d="${f([[455,n],[765,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[855,n],[860,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />

        <!-- Rücklauf von HKR -> Heizpuffer -->
        <path d="${f([[860,r],[855,r]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
        <!-- Rücklauf Puffer -> Ladepumpe WP -->
        <path d="${f([[765,i],[455,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
      </g>
    `}if(e===`hygieneSingle`){let e=d({code:`X35`,x:670,y:160,type:`sensor`});return`
      <!-- Spalte 4: Hygienespeicher mit Edelstahl-Wellrohr (131_000) -->
      <g id="grp-col4-hygiene-single" class="col-storage">
        <!-- Direktkreis Durchgangsleitungen -->
        <path d="${f([[455,n],[860,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.6" fill="none" />
        <path d="${f([[860,i],[455,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.6" stroke-dasharray="6 3" fill="none" />

        <!-- Hygienespeicher Druckkörper -->
        <rect x="630" y="140" width="120" height="345" rx="24" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="690" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Hygienespeicher</text>
        ${e}

        <!-- Edelstahl-Wellrohr durchgehend von KW unten bis WW oben -->
        <path d="${f([[840,465],[720,465],[720,410],[660,410],[660,360],[720,360],[720,310],[660,310],[660,260],[720,260],[720,210],[660,210],[660,160],[840,160]])}" class="pipe-base seg-hot" stroke="var(--system-cyan)" stroke-width="1.4" stroke-dasharray="4 2" fill="none" />
        <text x="846" y="164" class="lbl-mono" text-anchor="start" fill="var(--system-red)" font-family="var(--font-mono)" font-size="14">WW</text>
        <text x="846" y="469" class="lbl-mono" text-anchor="start" fill="var(--system-blue)" font-family="var(--font-mono)" font-size="14">KW</text>

        <!-- Heizwasseranschlüsse vom Hydraulikmodul -->
        <path d="${f([[455,t],[630,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[630,i],[455,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
      </g>
    `}if(e===`twoStorageHygiene`){let e=d({code:`X35`,x:605,y:160,type:`sensor`}),a=d({code:`X31`,x:772,y:160,type:`sensor`});return`
      <!-- Spalte 4: 2-Speicher · Hygienespeicher (links) & Heizungspuffer (rechts) -->
      <g id="grp-col4-two-storage-hygiene" class="col-storage">
        <!-- Hygienespeicher links (x=580..675) mit Wellrohr -->
        <rect x="580" y="140" width="95" height="345" rx="20" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="627" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Hygienespeicher</text>
        ${e}

        <!-- Wellrohr-Schlange -->
        <path d="${f([[710,465],[650,465],[650,390],[605,390],[605,310],[650,310],[650,230],[605,230],[605,160],[710,160]])}" stroke="var(--system-cyan)" stroke-width="1.3" stroke-dasharray="3 2" fill="none" />
        <text x="713" y="164" class="lbl-mono" text-anchor="start" fill="var(--system-red)" font-family="var(--font-mono)" font-size="14">WW</text>
        <text x="713" y="469" class="lbl-mono" text-anchor="start" fill="var(--system-blue)" font-family="var(--font-mono)" font-size="14">KW</text>

        <!-- Heizwasser Vorlauf von USV A in Hygienespeicher -->
        <path d="${f([[455,t],[580,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[580,i],[455,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />

        <!-- Heizungspuffer rechts (x=745..840) -->
        <rect x="745" y="140" width="95" height="345" rx="20" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="792" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Heizpuffer</text>
        ${a}

        <!-- Vorlauf von USV B in Puffer und weiter zu HKR -->
        <path d="${f([[455,n],[745,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[840,n],[860,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <!-- Rücklauf von HKR und zu WP -->
        <path d="${f([[860,r],[840,r]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
        <path d="${f([[745,i],[580,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
      </g>
    `}return e===`kombiFws`||e===`kombiHygiene`?`
      <!-- Spalte 4: Schicht-Kombispeicher mit Schichttrennblech -->
      <g id="grp-col4-kombi" class="col-storage">
        <rect x="620" y="140" width="140" height="345" rx="24" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.4" />
        <text x="690" y="125" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Schicht-Kombi</text>

        <!-- Horizontales Schichtblech / Prallblech -->
        <line x1="630" y1="310" x2="750" y2="310" stroke="var(--text-secondary)" stroke-width="1.2" stroke-dasharray="4 3" />
        <text x="690" y="302" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Schichtblech</text>

        ${d({code:`X35`,x:670,y:160,type:`sensor`})}
        ${d({code:`X31`,x:670,y:350,type:`sensor`})}

        <!-- Vorlauf WW oben von USV A -->
        <path d="${f([[455,t],[620,t]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <!-- Vorlauf Heizung unten von USV B und weiter zu HKR -->
        <path d="${f([[455,n],[620,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
        <path d="${f([[760,n],[860,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />

        <!-- Rücklauf von HKR und zu WP -->
        <path d="${f([[860,r],[760,r]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
        <path d="${f([[620,i],[455,i]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
      </g>
    `:`
    <!-- Spalte 4: ECO-Speicher Vorverkabelte Kompakt-Zentrale -->
    <g id="grp-col4-eco-speicher" class="col-storage">
      <rect x="610" y="115" width="180" height="395" rx="20" fill="none" class="sym-outline" stroke="var(--text-primary)" stroke-width="1.5" />
      <text x="700" y="102" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">ECO-Speicher Zentrale</text>

      <!-- Horizontale Trennebene Boiler oben / Puffer unten -->
      <line x1="615" y1="285" x2="785" y2="285" stroke="var(--border-separator)" stroke-width="1.2" />
      <text x="635" y="145" class="lbl-sub" text-anchor="start" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Boiler oben</text>
      <text x="635" y="310" class="lbl-sub" text-anchor="start" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Puffer unten</text>

      ${d({code:`X35`,x:680,y:155,type:`sensor`})}
      ${d({code:`X31`,x:680,y:350,type:`sensor`})}
      ${d({code:`X28`,x:625,y:220,type:`relay`})}
      ${d({code:`X9`,x:735,y:220,type:`relay`})}
      ${d({code:`X2`,x:625,y:440,type:`relay`})}
      ${d({code:`X57`,x:735,y:440,type:`pwm`})}

      <!-- Integrierte AHC 1 Regelbox an der Front -->
      <rect x="670" y="210" width="60" height="50" rx="3" fill="none" stroke="var(--text-primary)" stroke-width="1.2" class="sym-outline" />
      <text x="700" y="238" class="inst-text" text-anchor="middle" dominant-baseline="central" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">AHC 1</text>

      <!-- Heizkreis-Abgänge direkt nach rechts zu Col 5 -->
      <path d="${f([[790,n],[860,n]])}" class="pipe-base seg-hot" stroke="var(--system-red)" stroke-width="1.5" fill="none" />
      <path d="${f([[860,r],[790,r]])}" class="pipe-base seg-liq" stroke="var(--system-blue)" stroke-width="1.5" stroke-dasharray="6 3" fill="none" />
    </g>
  `}function _(){let{wallLeft:e,wallRight:t}=u.cols.col2,{hotMain:n,coldMain:r,power230V:i,busArc:a}=u.rails,o=[];for(let n=60;n<=640;n+=20)o.push(`M${e},${n} L${t},${n-20}`);let s=d({code:`X42`,x:165,y:75,type:`sensor`});return`
    <!-- Spalte 2: Schraffierte Gebäudewand mit Durchbrüchen und Außenfühler X42 -->
    <g id="grp-col2-wall" class="col-wall">
      <!-- Wand-Außenlinien -->
      <line x1="${e}" y1="50" x2="${e}" y2="640" stroke="var(--text-primary)" stroke-width="1.3" />
      <line x1="${t}" y1="50" x2="${t}" y2="640" stroke="var(--text-primary)" stroke-width="1.3" />

      <!-- 45°-Schraffur -->
      <path d="${o.join(` `)}" class="sym-detail" stroke="var(--text-secondary)" stroke-width="0.9" opacity="0.6" fill="none" />

      <!-- Beschriftung oben -->
      <text x="240" y="38" class="lbl-main" text-anchor="middle" fill="var(--text-primary)" font-family="var(--font-sans)" font-size="14" font-weight="600">Außenwand</text>

      <!-- Gedichtete Durchbrüche für Vorlauf & Rücklauf -->
      <rect x="${e-3}" y="${n-6}" width="${t-e+6}" height="12" rx="2" fill="var(--bg-canvas)" stroke="var(--system-red)" stroke-width="1" />
      <rect x="${e-3}" y="${r-6}" width="${t-e+6}" height="12" rx="2" fill="var(--bg-canvas)" stroke="var(--system-blue)" stroke-width="1" />

      <!-- Kabeldurchführung unten -->
      <rect x="${e-3}" y="${i-6}" width="${t-e+6}" height="${a-i+12}" rx="2" fill="var(--bg-canvas)" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2" />

      <!-- Außenfühler X42 außen an der Fassade -->
      <line x1="210" y1="86" x2="${e}" y2="86" stroke="var(--text-secondary)" stroke-width="1.2" />
      <circle cx="210" cy="86" r="3" fill="var(--system-green)" />
      ${s}
      <text x="185" y="115" class="lbl-sub" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-sans)" font-size="14">Außenfühler</text>
    </g>
  `}var v={"111_000":{id:`111_000`,name:`111_000 · Direktkreis mit Boiler`,subtitle:`Monoblock-Wärmepumpe mit Trinkwasser-Boiler und ungemischtem FBH-Direktkreis (Bypass).`,outdoor:`single`,hydraulic:`standard`,storage:`boiler`,heating:`directBypass`},"112_000":{id:`112_000`,name:`112_000 · 2-Speicherlösung mit Boiler und Pufferspeicher`,subtitle:`Klassische 2-Speicherlösung mit Boiler, Heizungspufferspeicher und 3 gemischten Heizkreisen.`,outdoor:`single`,hydraulic:`standard`,storage:`twoStorageBoiler`,heating:`mixed3`},"114_000":{id:`114_000`,name:`114_000 · 2-Speicherlösung Puffer / Boiler`,subtitle:`Kompakte 2-Speicheranordnung mit Boiler und Puffer für gemischte Heizkreise.`,outdoor:`single`,hydraulic:`standard`,storage:`twoStoragePufferBoiler`,heating:`mixed2`},"121_000":{id:`121_000`,name:`121_000 · Direktkreis mit Frischwassersystem (FWS)`,subtitle:`Trinkwassererwärmung im Durchlaufprinzip über Platten-FWS und FBH-Direktkreis.`,outdoor:`single`,hydraulic:`standard`,storage:`fwsSingle`,heating:`directBypass`},"122_000":{id:`122_000`,name:`122_000 · 2-Speicherlösung mit Frischwassersystem`,subtitle:`Warmwasser-Puffer mit FWS-Station plus separater Heizungspufferspeicher.`,outdoor:`single`,hydraulic:`standard`,storage:`twoStorageFws`,heating:`mixed2`},"123_000":{id:`123_000`,name:`123_000 · Kombispeicher mit Frischwassersystem`,subtitle:`Schicht-Kombispeicher: Oben FWS-Zone für Warmwasser, unten Heizkreiszone.`,outdoor:`single`,hydraulic:`standard`,storage:`kombiFws`,heating:`mixed2`},"131_000":{id:`131_000`,name:`131_000 · Direktkreis mit Hygienespeicher`,subtitle:`Trinkwasserbereitung über Edelstahl-Wellrohr im Pufferspeicher mit FBH-Direktkreis.`,outdoor:`single`,hydraulic:`standard`,storage:`hygieneSingle`,heating:`directBypass`},"132_000":{id:`132_000`,name:`132_000 · 2-Speicherlösung mit Hygienespeicher`,subtitle:`2-Speicherlösung mit integriertem Edelstahl-Wellrohr und separatem Heizungspuffer.`,outdoor:`single`,hydraulic:`standard`,storage:`twoStorageHygiene`,heating:`mixed2`},"133_000":{id:`133_000`,name:`133_000 · Kombispeicher mit Hygiene-Wellrohr`,subtitle:`Kombispeicher mit Edelstahl-Wellrohr im oberen Bereich und direkter Heizkreiszone unten.`,outdoor:`single`,hydraulic:`standard`,storage:`kombiHygiene`,heating:`mixed2`},"222_000":{id:`222_000`,name:`222_000 · 2er-Kaskade mit 2 Puffern & FWS`,subtitle:`2 parallel geschaltete Lambda Wärmepumpen (ARC-Bus), WW-Puffer mit FWS und Heizpuffer.`,outdoor:`cascade2`,hydraulic:`standard`,storage:`twoStorageFws`,heating:`mixed2`},"312_000":{id:`312_000`,name:`312_000 · 3er-Kaskade mit Boiler & Puffer`,subtitle:`3 parallel geschaltete Lambda Wärmepumpen (ARC-Bus), Trinkwasser-Boiler und Heizungspuffer.`,outdoor:`cascade3`,hydraulic:`standard`,storage:`twoStorageBoiler`,heating:`mixed3`},"122_030":{id:`122_030`,name:`122_030 · 2-Speicher mit FWS & Solaranlage`,subtitle:`Solarthermische Einbindung auf WW-Puffer (FWS) und Heizpuffer über Solar-USV X13.`,outdoor:`single`,hydraulic:`standard`,storage:`twoStorageFws`,heating:`mixedWithSolar`},"132_300":{id:`132_300`,name:`132_300 · 2-Speicher mit Hygiene & 2. WEZ`,subtitle:`Einbindung eines zweiten Wärmeerzeugers (Biomasse/Kessel) über Relais X9 und USV X28.`,outdoor:`single`,hydraulic:`standard`,storage:`twoStorageHygiene`,heating:`mixedWithExtWez`},ECO_SPEICHER:{id:`ECO_SPEICHER`,name:`ECO-Speicher · Vorverkabelte Kompakt-Zentrale`,subtitle:`Kompakte, vorverkabelte Zentrale: Boiler oben, Puffer unten, integrierte Hydraulik & AHC 1.`,outdoor:`single`,hydraulic:`integratedInEco`,storage:`ecoStorage`,heating:`mixed2`}};function y(e,t={}){let n=typeof e==`string`?v[e]??v[`112_000`]:e,{width:r,height:i,str:a}=u.viewBox,o=h(n.outdoor),s=_(),c=m(n.hydraulic),l=g(n.storage),d=p(n.heating);return`
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="${a}"
         width="${r}"
         height="${i}"
         class="flow-svg"
         role="img"
         aria-label="${n.name}">
      ${t.includeDefsAndStyles===!1?``:`
    <style>
      .flow-svg {
        width: 100%;
        height: auto;
        display: block;
        background: transparent;
        font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
      }
      .lbl-main {
        font-size: 14px;
        font-weight: 600;
        fill: var(--text-primary, #ffffff);
      }
      .lbl-sub {
        font-size: 14px;
        font-weight: 400;
        fill: var(--text-secondary, #8e8e93);
      }
      .lbl-mono {
        font-family: var(--font-mono, ui-monospace, "SF Mono", Menlo, monospace);
        font-size: 14px;
        font-weight: 600;
      }
      .inst-text {
        font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
        font-size: 14px;
        font-weight: 600;
      }
      .badge-text {
        font-family: var(--font-mono, ui-monospace, "SF Mono", Menlo, monospace);
        font-size: 14px;
        font-weight: 600;
      }
      .sym-outline {
        stroke: var(--text-primary, #ffffff);
        stroke-width: 1.3px;
        fill: none;
      }
      .sym-detail {
        stroke: var(--text-secondary, #8e8e93);
        stroke-width: 1.1px;
        fill: none;
      }
      .sym-dashed {
        stroke-dasharray: 4 3;
      }
      .pipe-base {
        stroke-linecap: square;
        stroke-linejoin: miter;
      }
      .seg-hot {
        stroke: var(--system-red, #ff453a);
      }
      .seg-liq {
        stroke: var(--system-blue, #0a84ff);
      }
      .term-badge rect {
        transition: transform 0.15s ease;
      }
      .term-badge:hover rect {
        transform: scale(1.05);
      }
    </style>
  `}

      <!-- Hintergrund-Koordinatennetz (CAD 5-Spalten-Gliederung) -->
      <g id="cad-grid-columns" opacity="0.15">
        <line x1="20" y1="40" x2="20" y2="650" stroke="var(--border-separator)" stroke-width="1" stroke-dasharray="2 4" />
        <line x1="210" y1="40" x2="210" y2="650" stroke="var(--border-separator)" stroke-width="1" stroke-dasharray="2 4" />
        <line x1="270" y1="40" x2="270" y2="650" stroke="var(--border-separator)" stroke-width="1" stroke-dasharray="2 4" />
        <line x1="540" y1="40" x2="540" y2="650" stroke="var(--border-separator)" stroke-width="1" stroke-dasharray="2 4" />
        <line x1="880" y1="40" x2="880" y2="650" stroke="var(--border-separator)" stroke-width="1" stroke-dasharray="2 4" />
        <line x1="1185" y1="40" x2="1185" y2="650" stroke="var(--border-separator)" stroke-width="1" stroke-dasharray="2 4" />
      </g>

      <!-- 1. SPALTE 1 (x: 20–200): Außeneinheiten -->
      ${o}

      <!-- 2. SPALTE 2 (x: 220–260): Gebäudewand & Außenfühler X42 -->
      ${s}

      <!-- 3. SPALTE 3 (x: 290–520): Hydraulikmodul, ADG & Regelung AHC -->
      ${c}

      <!-- 4. SPALTE 4 (x: 560–860): Speicher-Slot -->
      ${l}

      <!-- 5. SPALTE 5 (x: 900–1180): Heizkreis-Slot -->
      ${d}
    </svg>
  `.trim()}var b=a();function x({schemeId:e}){let[t,n]=(0,l.useState)(`media`),r=v[e]??v[`112_000`],i=(0,l.useMemo)(()=>y(r,{includeDefsAndStyles:!0,styleMode:t}),[r,t]);return(0,b.jsxs)(`div`,{className:`flow-card rounded-[var(--radius-card)] border border-[var(--border-separator)] bg-[var(--surface-inner-bg)] p-4 shadow-sm`,"data-style":t,children:[(0,b.jsxs)(`div`,{className:`flow-card-header mb-3 flex flex-wrap items-center justify-between gap-3`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{className:`text-[15px] font-semibold text-[var(--text-primary)]`,children:r.name}),(0,b.jsx)(`p`,{className:`text-[12px] text-[var(--text-secondary)]`,children:r.subtitle})]}),(0,b.jsxs)(`div`,{className:`segmented-control inline-flex rounded-full border border-[var(--border-separator)] bg-[var(--bg-canvas)] p-0.5 text-[12px] font-medium`,role:`group`,"aria-label":`Darstellungsstil`,children:[(0,b.jsx)(`button`,{type:`button`,className:`rounded-full px-3 py-1 transition-colors ${t===`media`?`bg-[var(--tonal)] text-[var(--on-tonal)] font-semibold`:`text-[var(--text-secondary)] hover:text-[var(--text-primary)]`}`,onClick:()=>n(`media`),"aria-pressed":t===`media`,children:`Medienfarben`}),(0,b.jsx)(`button`,{type:`button`,className:`rounded-full px-3 py-1 transition-colors ${t===`hairline`?`bg-[var(--tonal)] text-[var(--on-tonal)] font-semibold`:`text-[var(--text-secondary)] hover:text-[var(--text-primary)]`}`,onClick:()=>n(`hairline`),"aria-pressed":t===`hairline`,children:`Hairline pur`})]})]}),(0,b.jsx)(`div`,{className:`flow-scroll overflow-x-auto rounded-[var(--radius-control)] border border-[var(--border-separator)] bg-[var(--bg-canvas)] p-2`,tabIndex:0,role:`region`,"aria-label":`Prinzipschema 2D-R&I Fließbild (CAD-Grid)`,style:{WebkitOverflowScrolling:`touch`,touchAction:`pan-x pan-y`,overscrollBehaviorX:`contain`},children:(0,b.jsx)(`div`,{className:`min-w-[920px] transition-all`,style:t===`hairline`?{filter:`grayscale(100%) contrast(1.1)`}:void 0,dangerouslySetInnerHTML:{__html:i}})}),(0,b.jsx)(`p`,{className:`mt-2 text-center text-[11px] text-[var(--text-secondary)]`,children:`CAD-Grid Engine (viewBox 0 0 1200 680) · 5-Spalten-Architektur nach DIN EN ISO 10628. Auf schmalen Bildschirmen seitlich wischen.`})]})}var S=[{id:`111_000`,name:`111_000 · Direktkreis mit Boiler`,type:`standard`,categoryText:`Direktkreis (nur FBH)`,waterType:`Boiler`,bufferType:`keiner`,fbh:!0,radiator:!1,mixed:!1,hygieneWw:!1,cooling:!0,notes:[`HINWEIS! Nicht für Heizkörper geeignet!`,`Mindestdurchfluss durch Heizkreis muss jederzeit gewährleistet werden (ERR/Stellmotoren nur eingeschränkt möglich).`,`Wärmetauscherfläche im Boiler sollte ca. 0,4 m²/kW betragen.`,`Mindestens 300 l Volumen für Brauchwasser vorsehen.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden (Sicherheitsventil befindet sich im Gerät).`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42 (Außen)`,`X35 (Boiler oben)`,`X36 (Boiler unten)`],relays:[`X28 (USV)`,`X9 (Heizstab 400V)`,`X2 (Ladepumpe 230V)`,`X5 (Zirkulation)`],pwm:[`X57 (Ladepumpe Drehzahl)`],inputs24v:[`X51/X58 (Taupunktwächter)`]}},{id:`112_000`,name:`112_000 · 2-Speicherlösung mit Boiler & Puffer`,type:`standard`,categoryText:`2-Speicher (Boiler + Heizpuffer)`,waterType:`Boiler`,bufferType:`Puffer`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!1,cooling:!0,notes:[`Wärmetauscherfläche im Boiler sollte ca. 0,4 m²/kW betragen.`,`Mindestens 300 l Volumen für Brauchwasser vorsehen.`,`Mindestens 6,4 l/kW Nennleistung als Puffervolumen für Heizung vorsehen.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden (Sicherheitsventil befindet sich im Gerät).`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42 (Außen)`,`X35 (Boiler oben)`,`X36 (Boiler unten)`,`X31 (Puffer oben)`,`X37 (HKR1 Vorlauf)`,`X38 (HKR2 Vorlauf)`,`X39 (HKR3 Vorlauf)`],relays:[`X28 (USV)`,`X9 (Heizstab 400V)`,`X2 (Ladepumpe 230V)`,`X7 (Pumpe HKR1)`,`X8 (Pumpe HKR2)`,`X5 (Pumpe HKR3/Zirkulation)`,`X11 (Mischer HKR1)`,`X12 (Mischer HKR2)`,`X13 (Mischer HKR3)`],pwm:[`X57 (Ladepumpe Drehzahl)`],inputs24v:[`X51/X58 (Taupunkt/EVU)`]}},{id:`114_000`,name:`114_000 · 2-Speicherlösung Puffer / Boiler`,type:`standard`,categoryText:`Kombinierter 2-Speicher`,waterType:`Boiler`,bufferType:`Puffer`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!1,cooling:!0,notes:[`Wärmetauscherfläche im Boiler sollte ca. 0,4 m²/kW betragen.`,`Mindestens 300 l Volumen für Brauchwasser vorsehen.`,`Mindestens 6,4 l/kW Nennleistung als Puffervolumen für Heizung vorsehen.`,`Um häufige Schaltungen zu verhindern: Mindestabnahme der Heizkreise gewährleisten (20% der Heizkreise dauerhaft geöffnet).`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden.`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42 (Außen)`,`X35 (Boiler oben)`,`X36 (Boiler unten)`,`X31 (Puffer oben)`,`X37 (HKR1)`],relays:[`X28 (USV)`,`X9 (Heizstab)`,`X2 (Ladepumpe)`,`X7 (HKR1)`,`X11 (Mischer HKR1)`],pwm:[`X57 (Ladepumpe)`],inputs24v:[`X51/X58 (Taupunkt)`]}},{id:`121_000`,name:`121_000 · Direktkreis mit Frischwassersystem (FWS)`,type:`standard`,categoryText:`Direktkreis mit FWS`,waterType:`Puffer + FWS`,bufferType:`keiner`,fbh:!0,radiator:!1,mixed:!1,hygieneWw:!0,cooling:!0,notes:[`HINWEIS! Nicht für Heizkörper geeignet!`,`Mindestdurchfluss durch Heizkreis muss jederzeit gewährleistet werden.`,`Maximale Zapfleistung des Frischwassersystems beachten.`,`Mindestens 500 l Puffervolumen für Brauchwasser vorsehen.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden.`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42 (Außen)`,`X35 (WW-Puffer oben)`,`X36 (WW-Puffer unten)`,`X32 (FWS Auslauf)`],relays:[`X28 (USV)`,`X9 (Heizstab)`,`X2 (Ladepumpe & FWS)`,`X5 (Zirkulation)`],pwm:[`X57 (WP-Ladepumpe)`,`X56 (FWS-Pumpe)`],inputs24v:[`X60 (Flow-Switch FWS)`,`X51/X58 (Taupunkt)`]}},{id:`122_000`,name:`122_000 · 2-Speicherlösung mit FWS`,type:`standard`,categoryText:`2-Speicher (FWS-Puffer + Heizpuffer)`,waterType:`Puffer + FWS`,bufferType:`Puffer`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!0,cooling:!0,notes:[`Maximale Zapfleistung des Frischwassersystems beachten.`,`Mindestens 500 l Puffervolumen für Brauchwasser vorsehen.`,`Mindestens 6,4 l/kW Nennleistung als Puffervolumen für Heizung vorsehen.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden.`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42`,`X35 (WW-Puffer)`,`X31 (Heizpuffer)`,`X32 (FWS)`,`X37 (HKR1)`],relays:[`X28 (USV)`,`X9 (Heizstab)`,`X2 (Dauerspannung)`,`X7 (HKR1)`,`X11 (Mischer)`],pwm:[`X57 (Ladepumpe)`,`X56 (FWS)`],inputs24v:[`X60 (Flow-Switch)`,`X51/X58 (Taupunkt)`]}},{id:`123_000`,name:`123_000 · Kombispeicher mit FWS`,type:`standard`,categoryText:`Kombispeicher mit FWS`,waterType:`FWS`,bufferType:`Kombi`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!0,cooling:!1,notes:[`HINWEIS: Keine aktive Kühlung im Kombispeicher möglich!`,`Maximale Zapfleistung des Frischwassersystems beachten.`,`Mindestens 500 l Puffervolumen für Brauchwasser vorsehen.`,`Mindestens 6,4 l/kW Nennleistung als Puffervolumen für Heizung vorsehen.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden.`],terminals:{sensors:[`X42`,`X35 (Kombi oben)`,`X31 (Kombi Mitte)`,`X32 (FWS)`,`X37 (HKR1)`],relays:[`X28 (USV)`,`X9 (Heizstab)`,`X2 (Ladepumpe)`,`X7 (HKR1)`,`X11 (Mischer)`],pwm:[`X57 (Ladepumpe)`,`X56 (FWS)`],inputs24v:[`X60 (Flow-Switch)`]}},{id:`131_000`,name:`131_000 · Direktkreis mit Hygienespeicher`,type:`standard`,categoryText:`Direktkreis mit Hygiene-Wellrohr`,waterType:`Hygiene`,bufferType:`keiner`,fbh:!0,radiator:!1,mixed:!1,hygieneWw:!0,cooling:!0,notes:[`HINWEIS! Nicht für Heizkörper geeignet!`,`Mindestdurchfluss durch Heizkreis muss jederzeit gewährleistet werden.`,`Mindestens 500 l Puffervolumen vorsehen.`,`Zapfleistung des Speichers bei geringen Speichertemperaturen (50 °C) beachten.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden.`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42 (Außen)`,`X35 (Hygiene oben)`,`X36 (Hygiene unten)`],relays:[`X28 (USV)`,`X9 (Heizstab)`,`X2 (Ladepumpe)`,`X5 (Zirkulation)`],pwm:[`X57 (Ladepumpe)`],inputs24v:[`X51/X58 (Taupunkt)`]}},{id:`132_000`,name:`132_000 · 2-Speicherlösung mit Hygienespeicher`,type:`standard`,categoryText:`2-Speicher (Hygiene + Heizpuffer)`,waterType:`Hygiene`,bufferType:`Puffer`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!0,cooling:!0,notes:[`Zapfleistung des Speichers bei geringen Speichertemperaturen (50 °C) beachten.`,`Mindestens 500 l Puffervolumen für Brauchwasser vorsehen.`,`Mindestens 6,4 l/kW Nennleistung als Puffervolumen für Heizung vorsehen.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden.`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42`,`X35 (Hygiene)`,`X31 (Heizpuffer)`,`X37 (HKR1)`],relays:[`X28 (USV)`,`X9 (Heizstab)`,`X2 (Ladepumpe)`,`X7 (HKR1)`,`X11 (Mischer)`],pwm:[`X57 (Ladepumpe)`],inputs24v:[`X51/X58 (Taupunkt)`]}},{id:`133_000`,name:`133_000 · Kombispeicher mit Hygiene-Wellrohr`,type:`standard`,categoryText:`Kombispeicher Hygiene`,waterType:`Hygiene`,bufferType:`Kombi`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!0,cooling:!1,notes:[`HINWEIS: Keine aktive Kühlung im Kombispeicher möglich!`,`Zapfleistung des Speichers bei geringen Speichertemperaturen (50 °C) beachten.`,`Mindestens 500 l Puffervolumen für Brauchwasser vorsehen.`,`Mindestens 6,4 l/kW Nennleistung als Puffervolumen für Heizung vorsehen.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden.`],terminals:{sensors:[`X42`,`X35 (Hygiene oben)`,`X31 (Kombi Mitte)`,`X37 (HKR1)`],relays:[`X28 (USV)`,`X9 (Heizstab)`,`X2 (Ladepumpe)`,`X7 (HKR1)`,`X11 (Mischer)`],pwm:[`X57 (Ladepumpe)`],inputs24v:[`X51/X58`]}},{id:`222_000`,name:`222_000 · 2er Kaskade mit 2 Puffern & FWS`,type:`special`,categoryText:`Kaskade (2x WP, 2 Puffer, FWS)`,waterType:`Puffer + FWS`,bufferType:`Puffer`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!0,cooling:!0,notes:[`Maximale Zapfleistung des Frischwassersystems beachten.`,`Mindestens 500 l Puffervolumen für Brauchwasser vorsehen.`,`Mindestens 2x 4,6 l/kW (9,2 l/kW) Nennleistung als Puffervolumen für Heizung vorsehen.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden.`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42`,`X35`,`X31`,`X32`,`X37`],relays:[`X28 (USV)`,`X9`,`X2`,`X7`,`X11`,`X1, X12_2 (ARC Kaskadenbus)`],pwm:[`X57`,`X56`],inputs24v:[`X60`,`X51/X58`]}},{id:`312_000`,name:`312_000 · 3er Kaskade mit Boiler & Puffer`,type:`special`,categoryText:`Kaskade (3x WP, Boiler, Puffer)`,waterType:`Boiler`,bufferType:`Puffer`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!1,cooling:!0,notes:[`Wärmetauscherfläche im Boiler sollte ca. 0,4 m²/kW betragen.`,`Mindestens 300 l Volumen für Brauchwasser vorsehen.`,`Mindestens 3x 4,6 l/kW (13,8 l/kW) Nennleistung als Puffervolumen vorsehen.`,`Im Gebäude keine automatischen Entlüfter und Sicherheitsventile verwenden.`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42`,`X35`,`X36`,`X31`,`X37`],relays:[`X28`,`X9`,`X2`,`X7`,`X11`,`ARC Kaskadenbus`],pwm:[`X57`],inputs24v:[`X51/X58`]}},{id:`122_030`,name:`122_030 · 2-Speicher mit FWS & Solar`,type:`special`,categoryText:`Solarunterstützung auf beide Speicher`,waterType:`Puffer + FWS`,bufferType:`Puffer`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!0,cooling:!0,notes:[`Solaranlage über Solar-USV X13 und Solarpumpe X5 auf beide Speicher eingebunden.`,`Maximale Zapfleistung des Frischwassersystems beachten.`,`Mindestens 500 l Puffervolumen für Brauchwasser vorsehen.`,`Mindestens 6,4 l/kW Nennleistung als Puffervolumen für Heizung vorsehen.`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42`,`X35`,`X31`,`X32`,`Fühler 1 Kollektor`,`Fühler 3 & 4 Speicher unten`],relays:[`X28 (WP-USV)`,`X13 (Solar-USV)`,`X5 (Solarpumpe)`,`X9`,`X2`,`X7`,`X11`],pwm:[`X57`,`X56`],inputs24v:[`X60`,`X51/X58`]}},{id:`132_300`,name:`132_300 · 2-Speicher mit Hygiene & 2. WEZ`,type:`special`,categoryText:`Externer Wärmeerzeuger`,waterType:`Hygiene`,bufferType:`Puffer`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!0,cooling:!0,notes:[`Externer Wärmeerzeuger (Biomasse/Kessel) über Anforderung X9 und 2. USV X28 eingebunden.`,`Zapfleistung des Speichers bei geringen Speichertemperaturen (50 °C) beachten.`,`Mindestens 500 l Puffervolumen für Brauchwasser vorsehen.`,`Mindestens 6,4 l/kW Puffervolumen für Heizung vorsehen.`,`Taupunkt bei aktiver Kühlung beachten.`],terminals:{sensors:[`X42`,`X35`,`X31`,`X37`],relays:[`X28 (WP-USV)`,`X28_2 (WEZ-USV)`,`X9 (WEZ Anforderung)`,`X2`,`X7`,`X11`],pwm:[`X57`],inputs24v:[`X51/X58`]}},{id:`ECO_SPEICHER`,name:`ECO-Speicher · Kompakt-Zentrale vorverkabelt`,type:`special`,categoryText:`Vorverkabelte Zentrale (Boiler + Puffer)`,waterType:`ECO`,bufferType:`ECO`,fbh:!0,radiator:!0,mixed:!0,hygieneWw:!1,cooling:!0,notes:[`HINWEIS! Der gesamte hydraulische Aufbau ist demontierbar, um Einbringung und Transport zu erleichtern.`,`Vorverkabelte Zentrale: Boiler oben (X35), Puffer unten (X31).`,`Integrierter AHC 1 Regler, Ladepumpe (X2/X57), Heizstab (X9) und bis zu 2 gemischte HKR.`,`Warmwasser-Zapfleistung bei niedrigen Speichertemperaturen (z. B. 50 °C) beachten.`,`Bei aktiver Kühlung unbedingt den Taupunkt berücksichtigen.`],terminals:{sensors:[`AHC1 X42 (Außen)`,`AHC1 X35 (Boiler)`,`AHC1 X31 (Puffer)`,`AHC1 X37/X38 (HKR1/2)`],relays:[`AHC1 X28 (USV)`,`AHC1 X9 (Heizstab)`,`AHC1 X2 (Ladepumpe)`,`AHC1 X7/X8`,`AHC1 X11/X12`],pwm:[`AHC1 X57 (Ladepumpe PWM)`],inputs24v:[`Taupunktwächter`]}}],C=[{value:10,label:`EU10L (10 kW)`},{value:13,label:`EU13L (13 kW)`},{value:15,label:`EU15L (15 kW)`},{value:20,label:`EU20L (20 kW)`}];function w(){let[e,a]=(0,l.useState)(`112_000`),[u,d]=(0,l.useState)(`13`),f=(0,l.useMemo)(()=>S.find(t=>t.id===e)??S[1],[e]),{result:p,errors:m}=(0,l.useMemo)(()=>{let e={power:s(u,{gt:0,le:100},`Gültige Leistung zwischen 1 und 100 kW eingeben`)};return o(e,()=>{let t=e.power.value,n=0;n=f.bufferType===`keiner`?0:f.id===`222_000`?Math.round(t*2*4.6):f.id===`312_000`?Math.round(t*3*4.6):Math.round(t*6.4);let r=0;(f.waterType===`Boiler`||f.waterType===`ECO`)&&(r=Math.round(t*.4*10)/10);let i=f.waterType===`Boiler`||f.waterType===`ECO`?300:500;return{power:t,bufferL:n,wtM2:r,wwMinL:i}})},[u,f]),h=(0,l.useMemo)(()=>p?[{label:`Brauchwasser-Mindestvolumen`,value:`${p.wwMinL}`,unit:`l`},{label:f.waterType===`Boiler`?`Boiler-WT-Fläche (min.)`:`Speichertyp`,value:p.wtM2>0?`${c(p.wtM2,1)} m² (0,4 m²/kW)`:f.waterType},{label:`Eignung Heizkörper`,value:f.radiator?`Zulässig`:`Nicht geeignet!`},{label:`Aktive Kühlung`,value:f.cooling?`Möglich (Taupunkt!)`:`Nicht möglich`}]:[],[p,f]);return(0,b.jsxs)(`div`,{className:`space-y-6 pb-6`,children:[(0,b.jsx)(r,{icon:`schema`,color:`var(--cat-schemen)`,title:`Lambda Wärmepumpen (EU10–20L)`,subtitle:`14 Prinzipschemen (Stand 2026/2), Eignungsmatrix & AHC-Klemmen.`}),(0,b.jsxs)(`div`,{className:`space-y-2`,children:[(0,b.jsx)(`label`,{htmlFor:`schemeSelect`,className:`block text-[13px] font-semibold text-[var(--text-secondary)]`,children:`Prinzipschema wählen`}),(0,b.jsxs)(`div`,{className:`relative`,children:[(0,b.jsxs)(`select`,{id:`schemeSelect`,value:e,onChange:e=>a(e.target.value),className:`w-full appearance-none rounded-[var(--radius-control)] border border-[var(--border-separator)] bg-[var(--surface-inner-bg)] px-3.5 py-3 pr-10 text-[15px] font-medium text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none`,children:[(0,b.jsx)(`optgroup`,{label:`Standardschemen`,children:S.filter(e=>e.type===`standard`).map(e=>(0,b.jsx)(`option`,{value:e.id,children:e.name},e.id))}),(0,b.jsx)(`optgroup`,{label:`Sonderschemen & Kaskaden`,children:S.filter(e=>e.type===`special`).map(e=>(0,b.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),(0,b.jsx)(`span`,{className:`material-symbols-rounded pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[20px] text-[var(--text-secondary)]`,"aria-hidden":`true`,children:`expand_more`})]})]}),(0,b.jsxs)(`div`,{className:`flex flex-wrap gap-1.5`,children:[(0,b.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-medium ${f.fbh?`bg-[var(--system-green-tint)] text-[var(--system-green)] border border-[var(--system-green-border)]`:`bg-[var(--surface-inner-bg)] text-[var(--text-secondary)]`}`,children:[(0,b.jsx)(`span`,{className:`material-symbols-rounded text-[14px]`,children:f.fbh?`check`:`close`}),`FBH`]}),(0,b.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-medium ${f.radiator?`bg-[var(--system-green-tint)] text-[var(--system-green)] border border-[var(--system-green-border)]`:`bg-[var(--system-red-tint)] text-[var(--system-red)] border border-[var(--system-red-border)]`}`,children:[(0,b.jsx)(`span`,{className:`material-symbols-rounded text-[14px]`,children:f.radiator?`check`:`close`}),`Heizkörper`]}),(0,b.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-medium ${f.mixed?`bg-[var(--system-green-tint)] text-[var(--system-green)] border border-[var(--system-green-border)]`:`bg-[var(--surface-inner-bg)] text-[var(--text-secondary)]`}`,children:[(0,b.jsx)(`span`,{className:`material-symbols-rounded text-[14px]`,children:f.mixed?`check`:`close`}),`Mischinstallation`]}),(0,b.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-medium ${f.hygieneWw?`bg-[var(--system-green-tint)] text-[var(--system-green)] border border-[var(--system-green-border)]`:`bg-[var(--surface-inner-bg)] text-[var(--text-secondary)]`}`,children:[(0,b.jsx)(`span`,{className:`material-symbols-rounded text-[14px]`,children:f.hygieneWw?`check`:`close`}),`Hyg. WW (FWS/Hygiene)`]}),(0,b.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-medium ${f.cooling?`bg-[var(--system-cyan-tint)] text-[var(--system-cyan)] border border-[var(--system-cyan-border)]`:`bg-[var(--surface-inner-bg)] text-[var(--text-secondary)]`}`,children:[(0,b.jsx)(`span`,{className:`material-symbols-rounded text-[14px]`,children:f.cooling?`ac_unit`:`block`}),`Kühlung`]})]}),(0,b.jsxs)(`div`,{className:`space-y-2`,children:[(0,b.jsx)(n,{label:`Wärmepumpen-Nennleistung`,unit:`kW`,value:u,onChange:e=>d(e),error:m.power,placeholder:`13`}),(0,b.jsx)(i,{title:`Schnellwahl Lambda Modell`,chips:C,current:parseFloat(u)||null,onSelect:e=>d(String(e))})]}),(0,b.jsx)(t,{title:f.name,primaryValue:p?f.bufferType===`keiner`?`Direktkreis`:`${p.bufferL} l`:`–`,primaryLabel:f.bufferType===`keiner`?`Kein Heizungspufferspeicher`:`Mindest-Puffervolumen (Heizung)`,status:f.radiator?f.bufferType===`keiner`?{label:`Mindestdurchfluss beachten`,tone:`info`}:{label:`Geeignet für FBH & Heizkörper`,tone:`ok`}:{label:`Nicht für Heizkörper geeignet!`,tone:`warn`},items:h}),(0,b.jsx)(x,{schemeId:f.id}),(0,b.jsxs)(`div`,{className:`rounded-[var(--radius-control)] border border-[var(--border-separator)] bg-[var(--surface-inner-bg)] p-4 text-center`,children:[(0,b.jsxs)(`p`,{className:`mb-3 text-[14px] font-medium text-[var(--text-primary)]`,children:[`2D-R&I Hairline-Fließbild für `,f.name,`:`]}),(0,b.jsxs)(`a`,{href:`./references/lambda-eu10-20l-schema-${f.id}.html`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[var(--accent)] px-4 py-2 text-[14px] font-semibold text-[var(--on-accent)] transition-transform active:scale-95`,children:[(0,b.jsx)(`span`,{className:`material-symbols-rounded text-[20px]`,"aria-hidden":`true`,children:`open_in_new`}),`Fließbild in Großansicht öffnen`]})]}),(0,b.jsxs)(`div`,{className:`space-y-3 rounded-[var(--radius-control)] border border-[var(--border-separator)] bg-[var(--surface-inner-bg)] p-4`,children:[(0,b.jsxs)(`h2`,{className:`flex items-center gap-2 text-[14px] font-semibold text-[var(--text-primary)]`,children:[(0,b.jsx)(`span`,{className:`material-symbols-rounded text-[18px] text-[var(--accent)]`,"aria-hidden":`true`,children:`cable`}),`Elektrischer Anschluss AHC-Hydraulikregler`]}),(0,b.jsxs)(`div`,{className:`space-y-2 text-[13px]`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{className:`font-medium text-[var(--system-green)]`,children:`Sensoren (PT1000):`}),(0,b.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-1.5`,children:f.terminals.sensors.map(e=>(0,b.jsx)(`span`,{className:`rounded px-2 py-0.5 font-mono text-[11px] bg-[var(--system-green-tint)] text-[var(--system-green)] border border-[var(--system-green-border)]`,children:e},e))})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{className:`font-medium text-[var(--system-cyan)]`,children:`Relais / 230 V:`}),(0,b.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-1.5`,children:f.terminals.relays.map(e=>(0,b.jsx)(`span`,{className:`rounded px-2 py-0.5 font-mono text-[11px] bg-[var(--system-cyan-tint)] text-[var(--system-cyan)] border border-[var(--system-cyan-border)]`,children:e},e))})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{className:`font-medium text-[var(--accent)]`,children:`Drehzahl PWM / 0–10 V:`}),(0,b.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-1.5`,children:f.terminals.pwm.map(e=>(0,b.jsx)(`span`,{className:`rounded px-2 py-0.5 font-mono text-[11px] bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent-border)]`,children:e},e))})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{className:`font-medium text-[var(--system-orange)]`,children:`24 V Eingänge:`}),(0,b.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-1.5`,children:f.terminals.inputs24v.map(e=>(0,b.jsx)(`span`,{className:`rounded px-2 py-0.5 font-mono text-[11px] bg-[var(--system-orange-tint)] text-[var(--system-orange)] border border-[var(--system-orange-border)]`,children:e},e))})]})]})]}),(0,b.jsxs)(`div`,{className:`rounded-[var(--radius-control)] border border-[var(--border-separator)] bg-[var(--surface-inner-bg)] p-4 text-[13px]`,children:[(0,b.jsxs)(`h2`,{className:`mb-2 flex items-center gap-2 font-semibold text-[var(--text-primary)]`,children:[(0,b.jsx)(`span`,{className:`material-symbols-rounded text-[18px] text-[var(--system-orange)]`,"aria-hidden":`true`,children:`info`}),`ZU BEACHTEN (`,f.id,`):`]}),(0,b.jsx)(`ul`,{className:`list-inside list-disc space-y-1.5 text-[var(--text-secondary)]`,children:f.notes.map((e,t)=>(0,b.jsx)(`li`,{children:e},t))})]})]})}export{w as LambdaSchemesCalculator};