# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 32
commande: git rev-list --count depart

Q02: Sarah Benali 
commande: git blame depart -- src/format.js

Q03: 4459c91
commande: git bisect run node scripts/controle-alertes.js

Q04: sk_live_01de6ba0c9f4d846
commande: git log --all -p -i -G"api[_-]?key" --oneline

Q05: 11544ab
commande: git log --all --diff-filter=D --name-status --oneline

Q06: 17
commande: git rev-list --count v0.2.0..v1.0.0

Q07: essai-perf
commande: git for-each-ref refs/tags --format='%(refname:short) %(objecttype)'

Q08: origin/experiment/cache-redis
commande: for b in $(git branch -r --no-merged depart | grep -v HEAD); do
  echo "$b -> $(git describe --tags $(git merge-base $b depart))"
done

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
