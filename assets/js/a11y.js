/* Hondbaar — toegankelijkheidsverbeteringen voor het mobiele menu.
   Draait ná main.js, dat #navPanel en #navPanelToggle dynamisch aanmaakt.
   Doel: VoiceOver/screenreaders kondigen de menuknop correct aan, en
   blijven binnen het menu wanneer het open is (i.p.v. de paginatekst
   eronder voor te lezen). */
(function () {
	'use strict';

	function ready(fn) {
		if (document.readyState !== 'loading') fn();
		else document.addEventListener('DOMContentLoaded', fn);
	}

	ready(function () {
		// main.js bouwt het paneel met een korte vertraging op; even wachten.
		setTimeout(init, 100);
	});

	function init() {
		var toggle = document.getElementById('navPanelToggle');
		var panel = document.getElementById('navPanel');
		if (!toggle || !panel) {
			// Nog niet klaar? Probeer het zo nog eens.
			return setTimeout(init, 200);
		}

		var body = document.body;
		// Elementen die afgeschermd moeten worden als het menu openstaat:
		// alles in de wrapper behalve het paneel zelf.
		var wrapper = document.getElementById('wrapper');

		// --- Labels & rollen op de hamburgerknop ---
		toggle.setAttribute('role', 'button');
		toggle.setAttribute('aria-label', 'Menu openen');
		toggle.setAttribute('aria-expanded', 'false');
		toggle.setAttribute('aria-controls', 'navPanel');

		// --- Het paneel zelf als navigatie aankondigen ---
		panel.setAttribute('role', 'dialog');
		panel.setAttribute('aria-modal', 'true');
		panel.setAttribute('aria-label', 'Hoofdmenu');

		// --- Sluitknop een toegankelijke naam geven ---
		var closeBtn = panel.querySelector('.close');
		if (closeBtn) {
			closeBtn.setAttribute('role', 'button');
			closeBtn.setAttribute('aria-label', 'Menu sluiten');
		}

		function panelIsOpen() {
			return body.classList.contains('is-navPanel-visible');
		}

		function setBackgroundInert(on) {
			if (!wrapper) return;
			// Scherm de hele wrapper af; het paneel staat buiten de wrapper
			// (main.js hangt het aan <body>), dus blijft bereikbaar.
			if (on) {
				wrapper.setAttribute('inert', '');
				wrapper.setAttribute('aria-hidden', 'true');
			} else {
				wrapper.removeAttribute('inert');
				wrapper.removeAttribute('aria-hidden');
			}
		}

		// Reageer op het openen/sluiten van het paneel (main.js togglet de
		// class 'is-navPanel-visible' op <body>).
		var observer = new MutationObserver(function () {
			var open = panelIsOpen();
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
			toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
			setBackgroundInert(open);
			if (open && closeBtn) {
				// Verplaats de focus naar het paneel zodat VoiceOver daar begint.
				setTimeout(function () { closeBtn.focus(); }, 50);
			}
		});
		observer.observe(body, { attributes: true, attributeFilter: ['class'] });
	}
})();
