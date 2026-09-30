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

Q09: 
commande: 

Q10: 
commande: 

Q11: 
commande: 

Q12: 
commande: 

Q13: 
commande: 

Q14: 
commande: 

Q15: 
commande: 
