# hondbaar.github.io

Website voor **Hondbaar** — welzijnsgerichte 1-op-1 coaching voor baas en hond in regio Ede.
**Jekyll**-site, gehost via GitHub Pages op [hondbaar.nl](https://hondbaar.nl).

## Pagina's

| Bestand | Pagina |
|---|---|
| `index.html` | Home (`layout: home`) |
| `trajecten.html` | Trajecten-overzicht (samenvatting + 'Lees meer') + FAQ |
| `puppytraject.html` | Puppytraject (losse pagina, `layout: traject`) |
| `maatwerk.html` | Maatwerk volwassen hond (`layout: traject`) |
| `videobelsessie.html` | Videobelsessie (`layout: traject`) |
| `muilkorf.html` | Muilkorftraining & passessies |
| `tarieven.html` | Tarievenoverzicht |
| `over.html` | Over Hondbaar |
| `contact.html` | Contact + contactformulier |
| `privacy.html` | Privacyverklaring |
| `voorwaarden.html` | Algemene voorwaarden |

De drie losse traject-pagina's gebruiken `_layouts/traject.html`, dat de inhoud
uit `_data/trajecten.yml` haalt op basis van `traject_id` in de front matter.
Een nieuw traject toevoegen = een blok in `trajecten.yml` zetten + een kort
paginabestand met de juiste `traject_id` en `pagina`-naam.

Elke pagina bevat alleen front matter + de pagina-inhoud; de gedeelde opmaak komt
uit de layouts en includes.

## Jekyll-structuur

```
_config.yml          site-instellingen (titel, e-mail, url)
Gemfile              github-pages gem-set (voor lokaal testen)
_data/               teksten & gegevens (zie hieronder)
_layouts/
  default.html       binnenpagina's (header + nav + content + footer)
  home.html          homepage (met intro-hero)
_includes/
  head.html          <head> met meta + stylesheets
  nav.html           header + vaste menubalk + submenu (active via page.nav)
  footer.html        footer + copyright
  scripts.html       JS aan het einde van de pagina
assets/              CSS, JS, fonts, logo's (ongewijzigd t.o.v. het template)
```

### Teksten aanpassen (`_data/`)

De inhoud die op meerdere plekken terugkomt of vaak wijzigt, staat los van de
HTML in `_data/`. Je kunt deze YAML-bestanden aanpassen zonder de pagina's zelf
aan te raken — de site bouwt automatisch opnieuw.

| Bestand | Inhoud |
|---|---|
| `_data/site.yml` | Werkgebied, reactietijd, telefoon, KvK, footer-tekst |
| `_data/trajecten.yml` | De vier trajecten (losse pagina's, trajecten-overzicht én homepage-kaarten) |
| `_data/tarieven.yml` | Het tarievenoverzicht op de tarieven-pagina |
| `_data/faq.yml` | Veelgestelde vragen, gegroepeerd per thema |
| `_data/pijlers.yml` | De "aanpak"-, "waarden"- en muilkorf-blokjes (icoon + kop + tekst) |
| `_data/opleidingen.yml` | De opleidings- en bijscholingstabellen |

Een nieuw traject, FAQ-vraag of opleiding toevoegen = een blok bijzetten in het
betreffende `.yml`-bestand. Tekst met leestekens (komma's, dubbele punten,
aanhalingstekens) mag gewoon worden ingetypt.

- Gebaseerd op het **"Massively"**-template van [HTML5 UP](https://html5up.net) (CCA 3.0-licentie).
- `assets/css/main.css` — template-stijl, herkleurd naar de Hondbaar-huisstijl.
- `assets/css/custom.css` — alle Hondbaar-specifieke aanpassingen (kleuren, Poppins-font,
  eyebrows, klikbare kaarten, FAQ-accordeon, vaste menubalk + submenu, footer, juridische pagina's).

## Lokaal bouwen

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

GitHub Pages bouwt de site automatisch bij elke push naar `main` — er hoeft niets
handmatig gegenereerd te worden.

## Nog in te vullen

Op een aantal plekken staan placeholders tussen `[ ]` die nog ingevuld moeten worden:

- **Contactformulier** (`contact.html`): vervang `your-id` in de Formspree-`action` door je eigen
  [Formspree](https://formspree.io)-form-ID, anders worden ingevulde berichten niet verstuurd.
- **Telefoonnummer**, **KvK-nummer**, **plaats/postcode** en **datums** op de contact-, privacy- en voorwaarden-pagina's.
- **Cookie-sectie** in de privacyverklaring afstemmen op wat de site daadwerkelijk gebruikt.
- De juridische teksten (privacy + voorwaarden) zijn basisversies; laat ze bij twijfel door een jurist controleren.
