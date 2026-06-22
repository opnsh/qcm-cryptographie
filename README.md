# CryptoQuest — QCM de cryptographie

Mini-site statique de révision avec 151 questions, score, progression, explications et ordre aléatoire. Le site fonctionne entièrement dans le navigateur, sans serveur applicatif ni connexion Internet.

## Utilisation locale

Ouvrir `index.html` directement dans un navigateur, ou lancer un petit serveur local :

```bash
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Déploiement sur Cloudflare Pages

Le projet est prêt à être déployé comme site HTML statique. Depuis le tableau de bord Cloudflare :

1. Ouvrir **Workers & Pages**, puis créer une application Pages.
2. Choisir **Import an existing Git repository** et sélectionner ce dépôt.
3. Choisir la branche de production, généralement `main`.
4. Utiliser les paramètres de build suivants :
   - Framework preset : `None`
   - Build command : `exit 0`
   - Build output directory : `.`
5. Lancer le déploiement.

Cloudflare servira automatiquement le fichier `index.html`. Le fichier `_headers` ajoute des en-têtes de sécurité et une politique de cache adaptée.

Un déploiement manuel est également possible avec Wrangler :

```bash
npx wrangler pages deploy . --project-name qcm-cryptographie
```

## Organisation

- `index.html` : structure de la page
- `style.css` : interface responsive
- `script.js` : questions d'origine et logique du QCM
- `questions-supplementaires.js` : 100 questions supplémentaires
- `_headers` : en-têtes HTTP appliqués par Cloudflare Pages
- `wrangler.toml` : configuration minimale pour Pages
