# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 
commande: 

Q02: 
commande: 

Q03: 
commande: 

Q04: 
commande: 

Q05: 
commande: 

Q06: 
commande: 

Q07: 
commande: 

Q08: 
commande: 

Q09: src/utils.js
commande: git log depart --follow --name-status --oneline -- src/outils.js

Q10: Nathan Robin
commande: git shortlog -sn depart

Q11: 2026-03-24
commande: git log -1 --format=%cd --date=short v1.0.0

Q12: feat(cli): bannière de démarrage
commande: git log depart --grep="This reverts" --format="%h %s%n%b" ; git log -1 --format=%s ceb6092

Q13: de5637a
commande: git log depart --merges --grep="valeur-totale" --format="%H %s"

Q14: 16
commande: git diff --numstat v0.1.0 v1.0.0 -- src/stock.js

Q15: 6d6b920
commande: git log depart -S "TODO: gérer les quantités négatives" --reverse --format="%H %s"
