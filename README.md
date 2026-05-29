# hondbaar.github.io

Website voor **Hondbaar** — welzijnsgerichte 1-op-1 coaching voor baas en hond in regio Ede.
**Jekyll**-site, gehost via GitHub Pages op [hondbaar.nl](https://hondbaar.nl).

## Pagina's

| Bestand | Pagina |
|---|---|
| `index.html` | Home (`layout: home`) |
| `trajecten.html` | Trajecten + FAQ |
| `muilkorf.html` | Muilkorftraining & passessies |
| `over.html` | Over Hondbaar |
| `contact.html` | Contact + contactformulier |
| `privacy.html` | Privacyverklaring |
| `voorwaarden.html` | Algemene voorwaarden |

Elke pagina bevat alleen front matter + de pagina-inhoud; de gedeelde opmaak komt
uit de layouts en includes.

## Jekyll-structuur

```
_config.yml          site-instellingen (titel, e-mail, url)
Gemfile              github-pages gem-set (voor lokaal testen)
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
