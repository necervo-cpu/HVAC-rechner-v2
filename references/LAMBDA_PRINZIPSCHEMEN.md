# Lambda Wärmepumpen (EU10–20L) · Prinzipschemen-Katalog & Hairline-Standard

> Stand: Hersteller-Prinzipschemen Version 2026/2 für Monoblock-Luft/Wasser-Wärmepumpen der Modellreihe Lambda EU10L, EU13L, EU15L und EU20L (inkl. Kaskaden und Sonderspeicher).

- **Interaktive Hairline-Schemen (Standardschemen):**
  - [111_000 · Direktkreis mit Boiler](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-111_000.html)
  - [112_000 · 2-Speicher mit Boiler & Puffer](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-112_000.html)
  - [114_000 · 2-Speicher Puffer / Boiler](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-114_000.html)
  - [121_000 · Direktkreis mit FWS](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-121_000.html)
  - [122_000 · 2-Speicher mit FWS](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-122_000.html)
  - [123_000 · Kombispeicher mit FWS](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-123_000.html)
  - [131_000 · Direktkreis mit Hygienespeicher](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-131_000.html)
  - [132_000 · 2-Speicher mit Hygienespeicher](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-132_000.html)
  - [133_000 · Kombispeicher mit Hygiene-Wellrohr](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-133_000.html)
- **Interaktive Hairline-Schemen (Sonderschemen & Kaskaden):**
  - [222_000 · 2er-Kaskade mit 2 Puffern & FWS](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-222_000.html)
  - [312_000 · 3er-Kaskade mit Boiler & Puffer](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-312_000.html)
  - [122_030 · 2-Speicher mit FWS & Solar](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-122_030.html)
  - [132_300 · 2-Speicher mit Hygiene & 2. WEZ](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-132_300.html)
  - [ECO_SPEICHER · Vorverkabelte Kompakt-Zentrale](file:///Users/necervo/Desktop/HVAC-R%20Rechner%20v2/references/lambda-eu10-20l-schema-ECO_SPEICHER.html)

---

## 1. Modulare Hairline-Symbolbibliothek

Alle Symbole folgen strikt dem 2D-R&I-Hairline-Stil nach DIN EN ISO 10628, gerendert mit `--hair-stroke` (`stroke-width: 1.3`), feinen Haarlinien (`0.9–1.1 px`) und Medieneinfärbung (`--system-red`, `--system-blue`, `--system-cyan`, `--system-green`, `--system-orange`).

| Bauteilgruppe | Symbol-Code | Spezifikation & Geometrie-Aufbau (Hairline) |
|---|---|---|
| **Außeneinheit** | `LAMBDA_EU` | Korpus (76 × 120 px) mit Sockel (`.sym-outline`) und organischem 3-teiligem Ast-/Zweig-Gitter der Front (`.sym-detail`, `stroke-width: 1.05`); Anschlüsse unten: Vorlauf (`.seg-hot`), Rücklauf (`.seg-liq`), Kondensatablauf DN100 senkrecht nach unten in Schotterbett, Entleerungshahn am tiefsten Punkt des Rücklaufs, außenliegende Sicherheitsgruppe (Sicherheitsventil + Entlüfter/Manometer) direkt am Vorlaufabgang draußen, Leitungsanschlüsse `230 V WP`, `400 V WP` und Busleitung. |
| **Gebäudewand** | `WALL_SECTION` | Vertikaler Schnitt (`width: 16 px`, Doppel-Außenlinie mit 45°-Schraffur `.sym-detail`), gedichtete Mauerdurchführung für Vorlauf/Rücklauf und Kabeltrasse. |
| **Außenfühler** | `X42` | An der Außenwand montierter Temperaturfühler mit Wandkonsole, Klemmen-Badge `.badge-sensor` (`rx="11"`, Text `X42`). |
| **Entleerung innen** | `DRAIN_IN` | Unmittelbar nach der Wanddurchführung liegende Absperr- und Entleerungshähne für Vor- und Rücklauf. |
| **Hydraulikmodul** | `HYDR_MOD` | Vormontiertes Wandmodul (`.sym-dashed`-Umrandung) mit folgenden integrierten Komponenten: |
| – Umschaltventil | `X28` | Dreiwege-Umschaltventil (USV) mit Anschlüssen `AB` (von Wärmepumpe Vorlauf), `A` (nach Boiler / Warmwasser) und `B` (nach Pufferspeicher / Heizkreis); Stellantrieb mit Klemmen-Badge `X28` (potenzialfreies Relais). |
| – Elektro-Heizstab | `X9` | In Reihe im Heizungsvorlauf geschalteter Durchlauferhitzer / Notheizstab mit Klemmen-Badge `X9` (Ansteuerung über 400 V Schütz). |
| – Ladepumpe | `X2 / X57` | Hocheffiziente Primärkreis-Ladepumpe im Rücklauf mit Klemmen-Badges `X2` (Dauerspannung 230 V) und `X57` (Drehzahlregelung 0–10 V / PWM). |
| – Armaturen Modul | `VALVES_MOD` | Rückschlagventil im Rücklauf gegen Fehlzirkulation, Absperrhähne vor und nach Pumpe/Ventilen, Membran-Ausdehnungsgefäß (`ADG`) mit Kappenventil am Rücklauf. |
| **Regelung** | `AHC` | All-in-One Hydraulic Controller (AHC) Gehäusekasten mit Hutschiene und Klemmenblöcken, Anschluss `230 V Hydrauliksteuerung`, LAN-Kabel (RJ45 Internet) und Busleitung zur Außeneinheit. |
| **Touch-Display** | `DISPLAY` | Wand-Bedienteil mit Display-Rahmen und interaktivem Hand-/Finger-Symbol, Busanbindung an den AHC-Regler. |
| **Boiler** | `BOILER` | Vertikaler Trinkwasserspeicher mit gewölbten Klöpperböden, großflächigem Glattrohr-Wärmetauscher (`0,4 m²/kW`), Kaltwasserzulauf `KW` unten rechts, Warmwasserauslauf `WW` oben rechts, Zirkulationsanschluss mit Zirkulationspumpe `X5` und Fühler `X39`, Fühler-Badges oben `X35` und unten `X36`. |
| **Pufferspeicher** | `PUFFER` | Vertikales Druckgefäß für Heizwasser mit Isolationsmantel, Vorlaufstutzen oben, Rücklaufstutzen unten, Fühler-Badge oben `X31`. |
| **Kombispeicher** | `KOMBI` | Pufferspeicher mit interner Strömungsberuhigung / Schichtblech zur Trennung von Hochtemperatur-Warmwasserzone und Niedertemperatur-Heizkreiszone. |
| **Hygienespeicher** | `HYGIENE` | Pufferspeicher mit integriertem Edelstahl-Wellrohr für Durchlauf-Trinkwasserbereitung (`KW` unten rein, im Gegenstrom erwärmt als `WW` oben raus), Fühler-Badge oben `X35`. |
| **Frischwassersystem**| `FWS` | Externes Plattenwärmetauscher-Modul am Pufferspeicher mit Primär-Ladepumpe (`X2` Dauerspannung, `X56` PWM-Signal), Schnellentlüfter, Warmwasser-Auslauffühler `X32`, Strömungsschalter `X60` und Zirkulationspumpe `X5 / X39`. |
| **ECO-Speicher** | `ECO_SPEICHER`| Kompakt-Zentrale: Boiler oben (Fühler `X35`), Puffer unten (Fühler `X31`), voll integriertes Hydraulikmodul mit AHC 1, USV `X28`, Heizstab `X9`, Ladepumpe `X2 / X57` und 2 gemischten Heizkreisen; demontierbar für einfachen Transport. |
| **Direktkreis** | `HKR` | Ungemischter Heizkreis (nur Vorlauf und Rücklauf direkt von WP/Puffer ohne Mischer, ausschließlich für Fußbodenheizung zugelassen). |
| **Gemischte Heizkreise**| `HKR1–HKR3` | Modulare Heizkreis-Stationen: 3-Wege-Mischer mit Motorantrieb (`X11`, `X12`, `X13`), Hocheffizienzpumpe (`X7`, `X8`, `X5`), Rückschlagventil / Schwerkraftbremse, Vorlauftemperaturfühler (`X37`, `X38`, `X39`), Kugelabsperrhähne mit Thermometeranzeige. |

---

## 2. Katalog der 14 Prinzipschemen (Referenz & Eignungsmatrix)

Übersicht aller 14 standardisierten Lambda-Hydraulikschemen (Stand 2026/2):

| Schema-ID | Hydraulische Kurzbeschreibung | Brauchwasser | Heizungspuffer | FBH | HK | Mischinst. | Hyg. WW | Kühlung | Spezifische Pflicht-Vorgaben |
|---|---|---|---|:---:|:---:|:---:|:---:|:---:|---|
| **111_000** | Direktkreis mit Boiler | Boiler (WT) | Keiner | Ja | **Nein** | **Nein** | Nein | Ja | *Nicht für Heizkörper!* Mindestdurchfluss HK sichern (ERR eingeschränkt); Boiler $\ge 300\text{ l}$, $\text{WT} \ge 0,4\text{ m}^2/\text{kW}$. |
| **112_000** | 2-Speicherlösung mit Boiler und Pufferspeicher | Boiler (WT) | Puffer | Ja | Ja | Ja | Nein | Ja | Boiler $\ge 300\text{ l}$, $\text{WT} \ge 0,4\text{ m}^2/\text{kW}$; Puffer Heizung $\ge 6,4\text{ l/kW}$; bis zu 3 gemischte HKR. |
| **114_000** | 2-Speicherlösung mit Puffer / Boiler | Boiler (WT) | Puffer | Ja | Ja | Ja | Nein | Ja | Boiler $\ge 300\text{ l}$, $\text{WT} \ge 0,4\text{ m}^2/\text{kW}$; Puffer $\ge 6,4\text{ l/kW}$; mind. 20 % der Heizkreise dauerhaft ungedrosselt geöffnet. |
| **121_000** | Direktkreis mit Frischwassersystem (FWS) | Puffer + FWS | Keiner | Ja | **Nein** | **Nein** | Ja | Ja | *Nicht für Heizkörper!* Mindestdurchfluss HK sichern; Puffer WW $\ge 500\text{ l}$; max. Zapfleistung FWS beachten. |
| **122_000** | 2-Speicherlösung mit Frischwassersystem | Puffer + FWS | Puffer | Ja | Ja | Ja | Ja | Ja | Puffer WW $\ge 500\text{ l}$, Puffer Heizung $\ge 6,4\text{ l/kW}$; Zapfleistung FWS beachten. |
| **123_000** | Kombispeicher mit Frischwassersystem | FWS | Kombi | Ja | Ja | Ja | Ja | **Nein** | *Keine aktive Kühlung im Kombispeicher!* Puffer WW $\ge 500\text{ l}$, Puffer Heizung $\ge 6,4\text{ l/kW}$. |
| **131_000** | Direktkreis mit Hygienespeicher | Hygienespeicher | Keiner | Ja | **Nein** | **Nein** | Ja | Ja | *Nicht für Heizkörper!* Mindestdurchfluss HK sichern; Puffer $\ge 500\text{ l}$; Zapfleistung bei $50\text{ }^\circ\text{C}$ beachten. |
| **132_000** | 2-Speicherlösung mit Hygienespeicher | Hygienespeicher | Puffer | Ja | Ja | Ja | Ja | Ja | Puffer Hygiene $\ge 500\text{ l}$, Puffer Heizung $\ge 6,4\text{ l/kW}$; Zapfleistung bei $50\text{ }^\circ\text{C}$ beachten. |
| **133_000** | Kombispeicher mit Hygiene-Wellrohr | Hygiene-Wellrohr | Kombi | Ja | Ja | Ja | Ja | **Nein** | *Keine aktive Kühlung im Kombispeicher!* Speicher $\ge 500\text{ l} + 6,4\text{ l/kW}$ Heizpuffer. |
| **222_000** | 2er-Kaskade mit 2 Puffern und FWS | Puffer + FWS | Puffer | Ja | Ja | Ja | Ja | Ja | Puffer WW $\ge 500\text{ l}$; Puffer Heizung $\ge \mathbf{2 \times 4,6\text{ l/kW}}$; ARC-Buskopplung Kaskade. |
| **312_000** | 3er-Kaskade mit Boiler und Puffer | Boiler (WT) | Puffer | Ja | Ja | Ja | Nein | Ja | Boiler $\ge 300\text{ l}$, $\text{WT} \ge 0,4\text{ m}^2/\text{kW}$; Puffer Heizung $\ge \mathbf{3 \times 4,6\text{ l/kW}}$; Kaskadenregelung. |
| **122_030** | 2-Speicherlösung mit FWS und Solaranlage | Puffer + FWS | Puffer | Ja | Ja | Ja | Ja | Ja | Solar-Umschaltung über USV `X13` und Solarpumpe `X5` auf beide Speicher; FWS $\ge 500\text{ l}$. |
| **132_300** | 2-Speicher mit Hygienespeicher und 2. Wärmeerzeuger | Hygienespeicher | Puffer | Ja | Ja | Ja | Ja | Ja | Externer Wärmeerzeuger über USV `X28` und Relais `X9` eingebunden; Puffer Hygiene $\ge 500\text{ l}$. |
| **ECO-Speicher** | Vorverkabelte Kompakt-Zentrale | Boiler | Puffer | Ja | Ja | Ja | Nein | Ja | Integrierte Einheit (Boiler oben, Puffer unten); 2 gemischte HKR; demontierbar für Einbringung. |

---

## 3. Elektrische Klemmenbelegung AHC & Farbcodierte Badge-Logik

Alle Klemmenbezeichnungen des AHC-Hydraulikreglers werden im Fließbild als kompakte Hairline-Badges dargestellt (`height: 20px`, `rx="10"`, `stroke-width: 1.2`, Schrift `11 px JetBrains Mono`, `--font-mono`).

### Farbcodierung nach Signaltyp:
1. **Sensoren / Eingänge PT1000 (`.badge-sensor`):**
   - **Farbe:** Grüner Akzent (`--system-green`).
   - **Klemmen:**
     * `X31`: Pufferspeicher-Temperaturfühler oben (Heizungspuffer)
     * `X32`: FWS Warmwasser-Auslauftemperaturfühler
     * `X35`: Boiler-Temperaturfühler oben / Hygienespeicher oben / Brauchwasserpuffer oben
     * `X36`: Boiler-Temperaturfühler unten / Brauchwasserpuffer unten
     * `X37`: Vorlauftemperaturfühler Heizkreis 1 (HKR 1)
     * `X38`: Vorlauftemperaturfühler Heizkreis 2 (HKR 2)
     * `X39`: Vorlauftemperaturfühler Heizkreis 3 (HKR 3) oder Zirkulationsrücklauffühler
     * `X42`: Außentemperaturfühler (Außenwand Nord/Nordost)
2. **Relaisausgänge 230 V / Potenzialfrei (`.badge-relay`):**
   - **Farbe:** Cyan / Blau (`--system-cyan` bzw. `--system-blue`).
   - **Klemmen:**
     * `X1`: Netzanschluss 230 V AHC
     * `X2`: Dauerspannung 230 V (Primär-Ladepumpe Wärmepumpe, Pumpe FWS)
     * `X5`: Relais 230 V (Zirkulationspumpe Trinkwasser, Solarpumpe oder HKR 3 Pumpe)
     * `X7`: Relais 230 V (Umwälzpumpe Heizkreis 1 HKR 1)
     * `X8`: Relais 230 V (Umwälzpumpe Heizkreis 2 HKR 2)
     * `X9`: Relais 230 V (Ansteuerung Schütz Elektro-Heizstab 400 V oder Freigabe 2. WEZ)
     * `X11`: Relais 230 V (Mischerantrieb Auf/Zu Heizkreis 1)
     * `X12`: Relais 230 V (Mischerantrieb Auf/Zu Heizkreis 2)
     * `X13`: Relais 230 V (Mischerantrieb Auf/Zu Heizkreis 3 oder Solar-USV A/B/AB)
     * `X28`: Relais potenzialfrei (Dreiwege-Umschaltventil USV Heizung / Warmwasser)
3. **PWM- / 0–10 V Drehzahlsteuerung (`.badge-pwm`):**
   - **Farbe:** Blauer Akzent (`--system-blue`).
   - **Klemmen:**
     * `X56`: Drehzahl-Steuersignal Ladepumpe Frischwassersystem (PWM / 0–10 V)
     * `X57`: Drehzahl-Steuersignal Ladepumpe Wärmepumpe (PWM / 0–10 V)
4. **24 V Eingänge / Strömungswächter (`.badge-input24v`):**
   - **Farbe:** Orange (`--system-orange`).
   - **Klemmen:**
     * `X51` / `X58` / `X59`: Externe Freigaben, EVU-Sperre, PV-Anhebung, Taupunktwächter
     * `X60`: Strömungsschalter (Flow Switch) Frischwassersystem

---

## 4. Automatische Hinweisblöcke je Schema ("Zu beachten")

### Übergreifende Sicherheits- & Planungsregeln (immer aktiv):
- **Sicherheitsorgane:** Im Gebäude dürfen **keine automatischen Entlüfter und keine Sicherheitsventile** verwendet werden. Die Sicherheitsgruppe inklusive Sicherheitsventil befindet sich frostsicher und normgerecht direkt an der Außeneinheit draußen.
- **Aktive Kühlung & Taupunkt:** Bei aktiver Kühlung muss zwingend eine Taupunktüberwachung (Taupunktwächter an Eingang `X51`/`X58`) oder eine Mindest-Vorlauftemperatur von $\ge 18\text{ }^\circ\text{C}$ eingehalten werden, um Kondensatbildung an Rohrleitungen und Bauteilen zu verhindern.

### Schemenspezifische Zusatzregeln:
- **Direktkreise (`111_000`, `121_000`, `131_000`):**
  > **HINWEIS! Nicht für Heizkörper geeignet!**  
  > Mindestdurchfluss durch den Heizkreis muss jederzeit gewährleistet sein. Einsatz von Einzelraumregelungen und elektrothermischen Stellantrieben nur stark eingeschränkt möglich (Überströmventil oder Mindest-Offenflächen erforderlich).
- **Boiler-Lösungen (`111_000`, `112_000`, `114_000`, `312_000`):**
  > Wärmetauscherfläche im Boiler muss ca. **$0,4\text{ m}^2$ pro kW Wärmepumpen-Nennleistung** betragen. Mindestens **$300\text{ l}$ Brauchwasservolumen** vorsehen.
- **Pufferspeicher Heizung (`112_000`, `114_000`, `122_000`, `132_000`):**
  > Mindestens **$6,4\text{ l}$ pro kW Nennleistung** als Puffervolumen für den Heizkreis vorsehen.
- **Kaskadenschaltungen (`222_000`, `312_000`):**
  > Mindestens **$n \times 4,6\text{ l}$ pro kW Nennleistung** als Puffervolumen vorsehen (2er-Kaskade: $9,2\text{ l/kW}$, 3er-Kaskade: $13,8\text{ l/kW}$).
- **Frischwassersysteme (`121_000`, `122_000`, `123_000`, `222_000`, `122_030`):**
  > Mindestens **$500\text{ l}$ Puffervolumen** für Brauchwasser vorsehen. Maximale Schütt- und Zapfleistung des Plattenwärmetauschers beachten.
- **Hygienespeicher (`131_000`, `132_000`, `133_000`, `132_300`):**
  > Mindestens **$500\text{ l}$ Puffervolumen** vorsehen. Dauerzapfleistung des Edelstahl-Wellrohrs bei niedrigen Speichertemperaturen ($50\text{ }^\circ\text{C}$) prüfen und berücksichtigen.
- **Kombispeicher (`123_000`, `133_000`):**
  > Keine aktive Kühlung im Kombispeicher möglich!
- **Schema 114_000 (Puffer / Boiler Kombi):**
  > Um häufige Taktschaltungen und kurze Laufzeiten zu verhindern, muss eine Mindestabnahme der Heizkreise gewährleistet sein (mindestens $20\text{ }%$ der Heizkreise dauerhaft voll geöffnet).
- **ECO-Speicher:**
  > Der gesamte hydraulische Aufbau ist modular demontierbar, um den Transport bzw. die Einbringung in enge Heizräume zu erleichtern.
