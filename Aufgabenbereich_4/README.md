# Aufgabenbereich 4 - alle Fragen

## Aufgabe 4.2 Wie unterscheiden sich JSON-Dokumente und JavaScript-Objekte?</h2>

- Im Gegensatz zu JavaScript-Objekten kann in JSON-Dokumenten der Wert einer
Eigenschaft auch vom Typ function und undefined sein. []
- Im Gegensatz zu JSON-Dokumenten kann in JavaScript-Objekten der Wert einer
Eigenschaft auch vom Typ function und undefined sein. [X]
- Es gibt keine Unterschiede zwischen JSON-Dokumenten und JavaScript-Objekten. []

## Aufgabe 4.2 Mit welchem HTTP-Header teilt der Sender dem Empfänger mit, in welchem Format die Daten im HTTP-Request-Body codiert sind?

- Accept []
- Accept-Encoding [X]
- Content-Type []

## Aufgabe 4.3 Welche HTTP-Methode wird verwendet, um eine Ressource vollständig zu ersetzen?

- PATCH []
- POST []
- PUT [X]

## Aufgabe 4.4 Welche Maßnahmen trägt nicht zur Verhinderung von Cross-Site Scripting (XSS) bei?

- Same Origin Policy (SOP) []
- Cross-Origin Resource Sharing (CORS) [X]
- Content Security Policy (CSP) []

## Aufgabe 4.5 Was ist kein Prinzip einer REST-API?

- Stateful Communication [X] -> Die Client-Server Kommunikation ist "stateless"
- Uniform Interface []
- Cacheability []

## Aufgabe 4.6 Auf welcher Art von Verschlüsselung basiert HTTPS?

- Synchrone Verschlüsselung []
- Asynchrone Verschlüsselung []
- Synchrone und asynchrone Verschlüsselung [X]
-> Für den Browser ist HTTP(s) SYNC und die Verbindung zum Server ist ASYNC.

## Aufgabe 4.7 Welche der folgenden Zuordnungen von HTTP-Response Codes ist korrekt?

- 3xx: Fehler des Anwenders, 4xx: Fehler im Server, 5xx: Weiterlungen []
- 3xx: Weiterleitungen, 4xx: Fehler im Server, 5xx: Fehler des Anwenders []
- 3xx: Weiterlungen, 4xx: Fehler des Anwenders, 5xx: Fehler im Server [X]

## Aufgabe 4.8 Wie wird das Entfernen von nicht verwendetem Code nach statischer Code-Analyse genannt?

- Bundling []
- Tree Shaking [X]
- Minifaction []

## Aufgabe 4.9 Welcher der folgenden JavaScript-Funktionsaufrufe ist ausführbar und gibt die Summe der Zahlen 1 bis 3 zurück?

- <pre> (a => a.reduce((a, b) => a + b))(1, 2, 3) </pre> []
- <pre> (a => a.reduce(a, b) => a + b))([1, 2, 3]) </pre> []
- <pre> (a => a.reduce((a, b) => a + b))([1, 2, 3]) </pre> [X]

## Aufgabe 4.10 Welcher der folgenden JavaScript-Funktionsaufrufen ergibt nicht 8?

- <pre> ((a, ...b) => b.reduce((a, b) => a + b, -a))(1, 2, 3, 4) </pre> []
- <pre> ((a, _, ...b) => b.reduce((a, b) => a + b, a))(1, 2, 3, 4) </pre> []
- <pre> ((a, _, ...b) => b.reduce((a, b) => a + b))(1, 2, 3, 4) </pre> [X]
