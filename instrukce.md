# Instrukce pro AI agenta k tvorbě webu

## Situace

Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

## Cíl

Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

## Úkol

Vytvoř funkční web, který bude obsahovat:

- Strukturovaný komentovaný HTML5 kód s validní sémantikou
- Responzivní design (mobile-first přístup)
- CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
- Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
- CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp
- Základní JavaScript pro interaktivitu (na jemné oživení stránek)
- Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
- Nedávej do souboru .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)
- LOGO - nemám, prosím vytvoř nějaké nové originální a elegantní, hodící se k stránkám, ale které není stáhnuté z jiných stránek

## Znalosti

- Zajisti rychlé načítání a optimalizovaný výkon
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
- Vytvoř favicon ve formátu svg
- Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu

## Základní SEO

- Strukturuj nadpisy H1–H6
- Přidej meta title a description na každé stránce
- Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
- Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
- Urči kanonickou url
- Obrázkům dej alt popisky
- Propoj stránky vnitřními odkazy
- Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

## Optimalizace obrázků

- Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
- Obrázky dej do správného formátu a zkomprimuj.

## Vizuální hierarchie a čitelnost

- Jasná typografická hierarchie (nadpisy H1–H6, konzistentní velikosti)
- Dostatečný kontrast mezi textem a pozadím (minimum 4,5:1 pro běžný text)
- Čitelné fonty s českou diakritikou, minimální velikost 16px
- Správné řádkování (line-height 1,5–1,8 pro odstavce)
- Nikdy nezarovnávej text do bloku
- Maximální šířka textu 70 % obrazovky (nikdy nepiš od kraje po kraj)

## Layout

- Jasné oddělení sekcí a obsahových celků
- Vyvážené použití bílého prostoru (white space)
- Intuitivní navigace — logo vlevo, hamburger menu na mobilu vpravo
- Dej si záležet na patičce webu
- U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
- Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
- Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
- Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

## Obsah

- Stručné a srozumitelné texty
- Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
- Vizuální prvky podporující obsah (ikony, obrázky, grafika)
- Logické uspořádání informací (nejdůležitější nahoře)
- Chybová stránka (místo „404" dej ikonu `<wa-icon name="face-frown" variant="regular"></wa-icon>`) a přidej ji na web pomocí příkazu v souboru .htaccess: `ErrorDocument 404 /404.html`
- Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

## Konzistence

- Jednotný styl tlačítek, karet a komponent
- Stejný padding/margin napříč podobnými elementy
- Stejné zaoblení prvků
- Konzistentní ikonografie (používej Font Awesome, ne emotikony)
- Stíny karet pouze velmi jemné
- Jednotný projev značky (brand voice)
- Konzistentní použití barev napříč celým webem
- Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Struktura menu:**

- Menu
- Hero
- Co to je
- S čím pomáhá
- Jak probíhá
- Ceník
- Kontakt

## Barevná paleta

- Omezený počet barev (2–3 hlavní + neutrální)
- Pro text: `#333333`
- Hlavní pozadí: `#F5EFE6` (krémová)
- Sekce: `#FFFFFF` + jemné stíny
- Hlavní doplňková: `#A8C3A0` (zelená) a `#e79010`
- CTA tlačítka: `#e05700`

## Fonty

- Zvol vhodný patkový nebo bezpatkový font podle obsahu webu
- Pokud není jasné, zvol moderní sans-serif font (př. Outfit)
- Brandový — také zvol vhodný k tématu

## Struktura

- Jednostránkový web

## Design

Vytvoř moderní mobile-first web: použít můžeš trendy jako souměrný bento grid layout se zaoblenými rohy, velká typografie, barevné gradienty, glass efekt, micro-animace na hover a scroll efekty či 3D prvky, ale jen pokud se to bude hodit k tématu webu.

### Moderní design

- **Layout:** jednoduchý, vzdušný, pokud někde Bento grid — tak asymetrický, ne dokonale souměrný. Terapie je organická, ne technologická. Souměrnost působí korporátně. Nechám na tobě, zda někde dávat.
- **Jemné gradienty** — absolutně, ale teplé zemité tóny, ne chladné modrofialové tech-gradienty.
- **Glassmorphism** — s mírou. Jen 1–2 prvky, ne celá stránka — jinak působí jako fitness aplikace.
- **Zaoblené rohy** — ano, velkorysé (20–28px), evokují měkkost a bezpečí.
- **Mikro-interakce** — ano, ale velmi pomalé a plynulé (400–600 ms), ne svižné jak u SaaS produktu.
- **Ikony** použij hezké, jemné, aby ladily se stránkami.

## Obrázky

- Na webu použij fotky (př. přílohy), které najdeš ve složce **Obrazky**
- **Hero** — pro hlavní stranu (hero sekce atd.) udělej koláž ze všech fotek ze složky **Hero**
- **Ostatní** — na další sekce vybírej obrázky volitelně dle uvážení ze složky **obrázky — ostatní**
- **Kontakt** — vlož obrázek do kontaktu ze složky **kontakt** a udělej z něho kulatý obrázek

---

## Texty pro jednotlivé sekce

### HERO

**Kraniosakrální terapie**
Jemné doteky pro uvolnění a regeneraci těla

Nabízím kraniosakrální terapii v Telecím a Novém Městě na Moravě.

📍 Telecí • Nové Město na Moravě

[ Domluvit termín ]

*Alžběta Brandýská — Individuální přístup ke každému klientovi*

---

### CO JE KRANIOSAKRÁLNÍ TERAPIE

Kraniosakrální terapie je jemná metoda, která pomáhá tělu uvolnit napětí a obnovit přirozenou rovnováhu.

Pracuje se s lehkým dotekem, který uvolňuje napětí v kraniosakrálním systému — od lebky přes páteř až ke křížové kosti. Terapie podporuje přirozené regenerační a samoléčebné procesy v těle.

Ošetření působí na tělesné, psychické i duševní úrovni. Navozuje hlubokou relaxaci nervového systému, díky čemuž dochází k uvolnění a celkovému zklidnění.

Během ošetření ležíte pohodlně oblečení a většina klientů vnímá příjemný klid, někdy i lehký spánek.

---

### S ČÍM MŮŽE POMOCI

Terapie může pomoci například při:

**Levý sloupec (hlava + nervový systém)**

- stres a psychické napětí
- únava a vyčerpání
- potíže se spánkem
- bolesti hlavy
- náladovost

**Pravý sloupec (tělo)**

- bolesti zad
- bolesti kloubů (kyčle, kolena, ramena aj.)
- napětí v těle
- podpora lymfatického systému
- podpora imunitního systému
- bolestivá menstruace

[ Domluvit termín ]

---

### JAK PROBÍHÁ SEZENÍ

Sezení probíhá v klidném a bezpečném prostředí.

Ležíte pohodlně oblečení na lehátku a pracuje se jemným dotekem. Terapie navozuje hlubokou relaxaci a pomáhá uvolnit napětí v těle.

Jemná práce podporuje přirozené proudění v těle a přispívá k celkovému zklidnění nervového systému.

Většina klientů během terapie vnímá příjemné uvolnění, někdy i lehký spánek.

Každé sezení je individuální a přizpůsobené tomu, co vaše tělo právě potřebuje.

---

### JAK ČASTO CHODIT NA TERAPII

Kraniosakrální terapie se nejčastěji doporučuje v intervalu 1× za 3–4 týdny. Tento rozestup dává tělu prostor plně integrovat účinky terapie.

Při řešení akutních potíží nebo snaze o výraznější změnu se obvykle doporučuje série 6–10 ošetření v kratším odstupu (cca 1–2 týdny).

Pro preventivní účely nebo relaxaci stačí návštěva přibližně 1× za 2–3 měsíce.

Frekvence je vždy individuální a přizpůsobuje se aktuálním potřebám vašeho těla.

---

### CENÍK

**Kraniosakrální terapie (60–70 minut)**
samotná terapie, závěrečné doznívání na lehátku, krátké sdílení podle potřeby

**900 Kč**

*Délka sezení se může mírně lišit podle individuálních potřeb.*

---

### REFERENCE

> „Po terapii jsem cítila velké uvolnění a klid."
> — Lucie Radostová, učitelka

> „Příjemná atmosféra a citlivý přístup."
> — Hana Pražanová, učitelka

> „Pomohlo mi to zpomalit a znovu vnímat své tělo."
> — Hana Bobková, účetní

---

### KONTAKT

*(Vložit kulatý obrázek ze složky kontakt)*

Těším se na setkání s vámi.

**Bc. Alžběta Brandýská**

📍 Telecí 187, 569 94
📍 Nové Město na Moravě, Palackého náměstí 33, 592 31

📞 605 191 772
✉️ jarmila.alzbeta@seznam.cz
