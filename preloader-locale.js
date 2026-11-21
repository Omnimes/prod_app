// BO-1190: tekst preloadera w jezyku interfejsu. Osobny plik zamiast <script> w index.html - CSP z nginx
// (script-src 'self') nie wpuszcza skryptow inline.
(function () {
    try {
        var locale = localStorage.getItem('locale') || 'en';
        document.documentElement.setAttribute('lang', locale);
        var textNode = document.getElementById('app-preloader-text');
        if (!textNode) return;
        textNode.textContent = locale === 'pl' ? 'Ładowanie systemu...' : 'Loading system...';
    } catch (e) {
        // Ignore preloader localization issues before app bootstrap.
    }
})();
