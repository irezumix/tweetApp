Voor deze oefening maak je een twitter app.

Gebruik GIT om je progress en commits te bewaren. Zet het project ook op BITBUCKET/GITHUB. 

De tweet bewaar je in een array. Elke tweet bestaat gewoon uit een stukje tekst.

Als je een nieuwe tweet wil toevoegen moet je de knop "add tweet" gebruiken. Deze opent de "modal". Dit doe je door een "is-active" class toe te voegen aan ".modal".

Als je een nieuwe tweet toevoegt moet de "tweet" knop disabled zijn tot je tenminste enkele tekens getypt hebt. De "140" moet naar onderen aftellen zodat de gebruiker ziet hoeveel tekens hij nog over heeft. Als hij over de tekens gaat moet de 140 in het rood getoont worden (.has-text-danger) en moet ook de "save" knop terug "disabled" worden.

Als je op "save" geef je de save knop de "is-loading" class en tel je enkele seconden af (met setTimeout in JS). Als de timeout verlopen is haal je de "is-loading" class weer van de knop af en sluit je de modal. Je kan de modal ook sluiten met de "x" knop. De bestaande tweet die je getypt hebt moet dan ook verdwijnen.

setTimeout(() => {
  ...
}, 2000);

De "No tweets yet" moet getoont worden als er geen tweets zijn.

Je moet tweets ook kunnen verwijderen uit de lijst. Toegevoegde tweets komen bovenaan de lijst te staan.

Voor je instuurt verwijder je het "node_modules" mapje.
