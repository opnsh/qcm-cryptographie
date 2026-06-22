globalThis.additionalQuestions = [
  {
    category: "Bases",
    difficulty: "Facile",
    question: "Quelle différence essentielle existe entre chiffrement et encodage ?",
    answers: ["Le chiffrement utilise un secret", "L'encodage garantit l'intégrité", "Le chiffrement réduit toujours la taille", "L'encodage exige une clé privée"],
    correct: 0,
    explanation: "Un encodage change la représentation des données sans secret ; un chiffrement protège leur contenu à l'aide d'une clé."
  },
  {
    category: "Bases",
    difficulty: "Facile",
    question: "Quel service permet de vérifier l'identité d'un correspondant ?",
    answers: ["Compression", "Authentification", "Disponibilité", "Confidentialité"],
    correct: 1,
    explanation: "L'authentification vise à vérifier l'identité déclarée d'une personne, d'un serveur ou d'un équipement."
  },
  {
    category: "Bases",
    difficulty: "Moyen",
    question: "Pourquoi un algorithme cryptographique propriétaire et secret n'est-il pas une garantie suffisante ?",
    answers: ["Il ne peut pas utiliser de clé", "Il produit forcément des collisions", "Sa sécurité doit résister à l'examen public", "Il est toujours plus lent qu'AES"],
    correct: 2,
    explanation: "Selon le principe de Kerckhoffs, le système doit rester sûr même lorsque son fonctionnement est connu ; seule la clé doit rester secrète."
  },
  {
    category: "Bases",
    difficulty: "Moyen",
    question: "Que désigne la surface d'attaque d'un système ?",
    answers: ["La longueur totale des clés", "Le nombre de fichiers chiffrés", "La taille du réseau local", "L'ensemble des points exploitables"],
    correct: 3,
    explanation: "La surface d'attaque regroupe les interfaces, composants et chemins qu'un adversaire pourrait tenter d'exploiter."
  },
  {
    category: "Bases",
    difficulty: "Difficile",
    question: "Que signifie la sécurité parfaite du One-Time Pad ?",
    answers: ["Le chiffré ne révèle aucune information sur le clair", "La clé peut être réutilisée deux fois", "L'algorithme résiste uniquement aux ordinateurs classiques", "Le message est automatiquement authentifié"],
    correct: 0,
    explanation: "Avec une clé uniforme, aussi longue que le message et jamais réutilisée, le chiffré n'apporte aucune information sur le message clair."
  },
  {
    category: "Hash",
    difficulty: "Facile",
    question: "Une fonction de hash cryptographique utilise-t-elle une clé secrète ?",
    answers: ["Toujours", "Non, pas en général", "Uniquement avec SHA-256", "Uniquement pour les fichiers"],
    correct: 1,
    explanation: "Une fonction de hash classique est non cléée. Pour authentifier avec une clé, on utilise notamment un MAC comme HMAC."
  },
  {
    category: "Hash",
    difficulty: "Moyen",
    question: "Pour un hash idéal de n bits, quel travail demande approximativement une collision générique ?",
    answers: ["2^n", "n²", "2^(n/2)", "2n"],
    correct: 2,
    explanation: "À cause du paradoxe des anniversaires, une collision générique demande environ 2^(n/2) essais."
  },
  {
    category: "Hash",
    difficulty: "Moyen",
    question: "À quoi sert principalement HMAC ?",
    answers: ["Chiffrer un disque", "Générer une paire RSA", "Compresser un certificat", "Authentifier un message avec une clé secrète"],
    correct: 3,
    explanation: "HMAC combine une fonction de hash et une clé secrète afin de vérifier l'intégrité et l'authenticité d'un message."
  },
  {
    category: "Hash",
    difficulty: "Difficile",
    question: "Quelle construction naïve peut être vulnérable à une attaque par extension de longueur ?",
    answers: ["H(clé || message)", "HMAC(clé, message)", "HKDF avec un salt", "AES-GCM avec un nonce unique"],
    correct: 0,
    explanation: "Avec certains hashes de type Merkle-Damgård, H(clé || message) peut permettre de prolonger le message sans connaître la clé ; HMAC évite ce piège."
  },
  {
    category: "Hash",
    difficulty: "Moyen",
    question: "Pourquoi faut-il définir une représentation canonique avant de signer des données structurées ?",
    answers: ["Pour augmenter la taille de clé", "Pour obtenir les mêmes octets à signer", "Pour cacher le certificat", "Pour rendre le hash réversible"],
    correct: 1,
    explanation: "Deux représentations différentes d'une même donnée peuvent produire des hashes différents ; la canonicalisation fixe les octets exacts à signer."
  },
  {
    category: "Mots de passe",
    difficulty: "Facile",
    question: "Pourquoi ne faut-il pas stocker les mots de passe en clair ?",
    answers: ["Ils seraient trop longs", "Ils empêcheraient TLS", "Une fuite les révélerait immédiatement", "Ils ne pourraient plus être modifiés"],
    correct: 2,
    explanation: "Si la base est compromise, des mots de passe en clair deviennent directement utilisables sur ce service et potentiellement sur d'autres."
  },
  {
    category: "Mots de passe",
    difficulty: "Moyen",
    question: "Quel est l'intérêt principal d'une KDF coûteuse en mémoire comme Argon2id ?",
    answers: ["Accélérer la connexion", "Rendre le salt secret", "Remplacer l'authentification multifacteur", "Ralentir les essais massifs"],
    correct: 3,
    explanation: "Son coût en calcul et en mémoire rend les attaques hors ligne à grande échelle plus coûteuses."
  },
  {
    category: "Mots de passe",
    difficulty: "Moyen",
    question: "Qu'est-ce qu'un pepper dans le stockage des mots de passe ?",
    answers: ["Un secret serveur ajouté au calcul", "Un salt public par utilisateur", "Une seconde copie du mot de passe", "Un certificat client"],
    correct: 0,
    explanation: "Le pepper est une valeur secrète, conservée séparément de la base, qui peut compléter le salt public et unique."
  },
  {
    category: "Mots de passe",
    difficulty: "Facile",
    question: "Quel comportement réduit le risque lié à la réutilisation d'un mot de passe ?",
    answers: ["Ajouter son année de naissance", "Utiliser un gestionnaire de mots de passe", "Employer le même mot de passe long partout", "Envoyer le mot de passe par e-mail"],
    correct: 1,
    explanation: "Un gestionnaire facilite l'utilisation d'un mot de passe long et unique pour chaque service."
  },
  {
    category: "Mots de passe",
    difficulty: "Difficile",
    question: "Pourquoi doit-on pouvoir augmenter progressivement le coût d'une KDF ?",
    answers: ["Pour raccourcir les salts", "Pour supprimer les comptes inactifs", "Pour suivre l'évolution de la puissance de calcul", "Pour rendre les hashes identiques"],
    correct: 2,
    explanation: "L'ajustement du coût permet de maintenir un temps de calcul défensif pertinent lorsque le matériel devient plus performant."
  },
  {
    category: "Symétrique",
    difficulty: "Facile",
    question: "Quel avantage principal le chiffrement symétrique offre-t-il pour de gros volumes de données ?",
    answers: ["Il ne demande aucune clé", "Il crée une identité certifiée", "Il garantit la non-répudiation", "Il est généralement très rapide"],
    correct: 3,
    explanation: "Les algorithmes symétriques modernes sont efficaces et adaptés au chiffrement de flux ou de fichiers volumineux."
  },
  {
    category: "Symétrique",
    difficulty: "Moyen",
    question: "Que se passe-t-il si un bit du clair change dans un chiffrement bien conçu ?",
    answers: ["De nombreux bits du résultat changent", "La clé devient publique", "Le chiffré reste identique", "Le nonce est supprimé"],
    correct: 0,
    explanation: "L'effet avalanche fait qu'une petite modification de l'entrée entraîne de nombreux changements imprévisibles en sortie."
  },
  {
    category: "Symétrique",
    difficulty: "Moyen",
    question: "Pourquoi faut-il séparer les clés selon leurs usages ?",
    answers: ["Pour réduire chaque clé à 32 bits", "Pour limiter les interactions et les conséquences d'une fuite", "Pour rendre les nonces secrets", "Pour éviter toute rotation"],
    correct: 1,
    explanation: "La séparation des clés évite qu'une même clé soit employée par des primitives ou dans des contextes incompatibles."
  },
  {
    category: "Symétrique",
    difficulty: "Difficile",
    question: "Quel est le rôle d'une KDF après l'établissement d'un secret partagé ?",
    answers: ["Signer le certificat", "Compresser le transcript", "Dériver des clés adaptées et séparées", "Publier le secret brut"],
    correct: 2,
    explanation: "Une KDF extrait puis développe le secret afin de produire plusieurs clés indépendantes adaptées aux différents usages."
  },
  {
    category: "Symétrique",
    difficulty: "Moyen",
    question: "Pourquoi la rotation des clés est-elle utile ?",
    answers: ["Elle garantit qu'aucun bug n'existe", "Elle remplace les sauvegardes", "Elle rend AES asymétrique", "Elle limite la durée et le volume exposés"],
    correct: 3,
    explanation: "Une rotation planifiée réduit la quantité de données et la période potentiellement affectées par la compromission d'une clé."
  },
  {
    category: "AES",
    difficulty: "Facile",
    question: "Quelles tailles de clé AES sont standard ?",
    answers: ["128, 192 et 256 bits", "64, 128 et 512 bits", "128 bits uniquement", "256 et 1024 bits"],
    correct: 0,
    explanation: "AES accepte des clés de 128, 192 ou 256 bits tout en conservant une taille de bloc de 128 bits."
  },
  {
    category: "AES",
    difficulty: "Moyen",
    question: "Dans AES-CBC, quelle propriété doit avoir l'IV ?",
    answers: ["Être identique pour tous les messages", "Être imprévisible pour chaque chiffrement", "Rester secret pendant dix ans", "Être dérivé du texte clair"],
    correct: 1,
    explanation: "Pour CBC, l'IV doit être frais et imprévisible afin de ne pas révéler de relations entre les premiers blocs."
  },
  {
    category: "AES",
    difficulty: "Moyen",
    question: "Pourquoi AES-CBC seul ne suffit-il pas à sécuriser un message ?",
    answers: ["Il utilise une clé publique", "Il ne chiffre que 64 bits", "Il n'assure pas l'authenticité", "Il interdit les fichiers binaires"],
    correct: 2,
    explanation: "CBC protège la confidentialité mais ne détecte pas à lui seul les modifications ; il faut une authentification sûre ou préférer un AEAD."
  },
  {
    category: "AES",
    difficulty: "Difficile",
    question: "Quel piège classique concerne le retrait du padding en CBC ?",
    answers: ["Une collision de certificats", "Une factorisation du nonce", "Une fuite du salt", "Un oracle de padding"],
    correct: 3,
    explanation: "Des différences d'erreur ou de temps lors de la validation du padding peuvent permettre à un attaquant de retrouver le clair."
  },
  {
    category: "AES",
    difficulty: "Moyen",
    question: "Quel mode transforme un chiffrement par bloc en flot et exige un compteur unique ?",
    answers: ["CTR", "ECB", "PKCS#7", "HMAC"],
    correct: 0,
    explanation: "Le mode CTR chiffre des valeurs de compteur pour produire un flot ; réutiliser le compteur avec la même clé réutilise ce flot."
  },
  {
    category: "AEAD",
    difficulty: "Facile",
    question: "Que faut-il faire avant d'utiliser un clair obtenu par déchiffrement AEAD ?",
    answers: ["Le compresser", "Vérifier le tag d'authentification", "Publier le nonce", "Hasher la clé"],
    correct: 1,
    explanation: "Le message ne doit être considéré comme valide qu'après la vérification réussie de son tag d'authentification."
  },
  {
    category: "AEAD",
    difficulty: "Moyen",
    question: "À quoi servent les données associées d'un mode AEAD ?",
    answers: ["À cacher la clé privée", "À remplacer le chiffré", "À authentifier des données non chiffrées", "À raccourcir le tag"],
    correct: 2,
    explanation: "Les AAD, comme un en-tête de protocole, restent lisibles mais sont couvertes par la vérification d'intégrité."
  },
  {
    category: "AEAD",
    difficulty: "Moyen",
    question: "Le nonce d'un mode AEAD doit-il généralement rester secret ?",
    answers: ["Oui, comme une clé privée", "Oui, mais uniquement avec AES-256", "Oui, après la première utilisation", "Non, mais il doit respecter l'unicité requise"],
    correct: 3,
    explanation: "Un nonce peut être transmis avec le chiffré ; sa propriété essentielle est généralement de ne pas être réutilisé avec la même clé."
  },
  {
    category: "AEAD",
    difficulty: "Difficile",
    question: "Pourquoi un tag d'authentification trop court est-il risqué ?",
    answers: ["Il augmente la probabilité de falsification réussie", "Il révèle directement la clé", "Il double la taille du nonce", "Il désactive le chiffrement"],
    correct: 0,
    explanation: "Réduire le tag augmente la probabilité qu'un faux tag soit accepté, surtout lorsque le nombre de tentatives est élevé."
  },
  {
    category: "AEAD",
    difficulty: "Difficile",
    question: "Pourquoi faut-il inclure le contexte du protocole dans les données authentifiées ?",
    answers: ["Pour accélérer le réseau", "Pour empêcher la réutilisation hors contexte", "Pour rendre le nonce aléatoire", "Pour masquer la version du protocole"],
    correct: 1,
    explanation: "Authentifier le rôle, la version ou l'identifiant de session évite qu'un message valide soit déplacé vers un autre contexte."
  },
  {
    category: "Asymétrique",
    difficulty: "Facile",
    question: "Quelle clé utilise-t-on pour vérifier une signature numérique ?",
    answers: ["La clé de session AES", "Le salt", "La clé publique du signataire", "La clé privée du vérificateur"],
    correct: 2,
    explanation: "La signature est produite avec la clé privée et vérifiée à l'aide de la clé publique correspondante."
  },
  {
    category: "Asymétrique",
    difficulty: "Moyen",
    question: "Pourquoi la cryptographie asymétrique ne résout-elle pas seule la confiance ?",
    answers: ["Elle ne produit aucune clé", "Elle ne fonctionne pas sur Internet", "Elle ne peut pas signer", "Il faut associer la clé publique à une identité"],
    correct: 3,
    explanation: "Une clé publique reçue sans mécanisme de confiance pourrait appartenir à un attaquant ; son lien avec l'identité doit être vérifié."
  },
  {
    category: "Asymétrique",
    difficulty: "Moyen",
    question: "Quel avantage les courbes elliptiques offrent-elles souvent face à RSA ?",
    answers: ["Des clés plus petites à sécurité comparable", "L'absence totale de paramètres", "Une sécurité parfaite", "Aucun besoin d'aléatoire"],
    correct: 0,
    explanation: "ECC atteint généralement un niveau de sécurité classique comparable à RSA avec des clés et signatures plus compactes."
  },
  {
    category: "Asymétrique",
    difficulty: "Difficile",
    question: "Pourquoi faut-il valider une clé publique elliptique reçue ?",
    answers: ["Pour calculer son mot de passe", "Pour éviter des clés ou points invalides", "Pour la convertir en certificat racine", "Pour cacher la courbe choisie"],
    correct: 1,
    explanation: "La validation empêche certaines attaques utilisant des points invalides ou appartenant à de mauvais sous-groupes."
  },
  {
    category: "Asymétrique",
    difficulty: "Moyen",
    question: "Que permet la révocation d'une clé ou d'un certificat ?",
    answers: ["D'effacer toutes les anciennes signatures", "De factoriser RSA", "D'indiquer qu'il ne faut plus lui faire confiance", "De rendre publique la clé privée"],
    correct: 2,
    explanation: "La révocation signale avant l'expiration qu'une clé ou un certificat ne doit plus être accepté, par exemple après compromission."
  },
  {
    category: "Diffie-Hellman",
    difficulty: "Facile",
    question: "Diffie-Hellman chiffre-t-il directement les messages applicatifs ?",
    answers: ["Oui, sans clé", "Oui, avec un certificat uniquement", "Oui, mais seulement les images", "Non, il établit surtout un secret partagé"],
    correct: 3,
    explanation: "Diffie-Hellman sert à convenir d'un secret ; des clés symétriques en sont ensuite dérivées pour protéger les données."
  },
  {
    category: "Diffie-Hellman",
    difficulty: "Moyen",
    question: "Que signifie le E de ECDHE ?",
    answers: ["Ephemeral : clés temporaires", "Encrypted : paramètres cachés", "Extended : module RSA étendu", "Encoded : secret en Base64"],
    correct: 0,
    explanation: "ECDHE utilise des clés Diffie-Hellman éphémères, renouvelées pour les échanges ou sessions."
  },
  {
    category: "Diffie-Hellman",
    difficulty: "Moyen",
    question: "Quelle propriété apporte l'usage de clés DH éphémères effacées après la session ?",
    answers: ["La compression parfaite", "La confidentialité persistante", "La preuve de travail", "La révocation automatique des certificats"],
    correct: 1,
    explanation: "La confidentialité persistante protège les anciennes sessions même si une clé d'authentification longue durée est compromise plus tard."
  },
  {
    category: "Diffie-Hellman",
    difficulty: "Difficile",
    question: "Pourquoi inclure les valeurs Diffie-Hellman dans un transcript signé ?",
    answers: ["Pour réduire leur taille", "Pour générer un salt public", "Pour lier l'échange à l'authentification", "Pour éviter toute fonction de hash"],
    correct: 2,
    explanation: "Signer le transcript lie les paramètres et clés éphémères aux identités, ce qui bloque leur substitution par un intermédiaire."
  },
  {
    category: "Diffie-Hellman",
    difficulty: "Difficile",
    question: "Quel contrôle est important avec des groupes Diffie-Hellman finis ?",
    answers: ["Vérifier le logo du serveur", "Encoder la clé en Base64", "Employer un IV secret", "Valider le groupe et la valeur publique"],
    correct: 3,
    explanation: "Des paramètres faibles ou une valeur publique hors du bon sous-groupe peuvent réduire la sécurité ou révéler des informations."
  },
  {
    category: "RSA",
    difficulty: "Facile",
    question: "Quelle opération est dangereuse avec RSA ?",
    answers: ["Utiliser RSA brut sans padding", "Vérifier une signature PSS", "Employer une clé publique certifiée", "Générer deux grands nombres premiers"],
    correct: 0,
    explanation: "RSA brut est déterministe et malléable ; il faut employer un schéma sûr comme OAEP pour le chiffrement ou PSS pour la signature."
  },
  {
    category: "RSA",
    difficulty: "Moyen",
    question: "Pourquoi les nombres premiers p et q d'une clé RSA doivent-ils rester secrets ?",
    answers: ["Ils servent de noms d'utilisateur", "Ils permettent de retrouver la clé privée", "Ils remplacent le certificat", "Ils sont nécessaires au hash du message"],
    correct: 1,
    explanation: "Connaître la factorisation n = p × q permet de calculer les paramètres privés de RSA."
  },
  {
    category: "RSA",
    difficulty: "Moyen",
    question: "Pourquoi OAEP rend-il le chiffrement RSA probabiliste ?",
    answers: ["Pour supprimer la clé publique", "Pour signer le clair", "Pour éviter que deux chiffrements identiques coïncident", "Pour raccourcir le module"],
    correct: 2,
    explanation: "L'aléa du padding OAEP fait que le même message chiffré deux fois produit normalement deux chiffrés différents."
  },
  {
    category: "RSA",
    difficulty: "Difficile",
    question: "Pourquoi protège-t-on une implémentation RSA avec le blinding ?",
    answers: ["Pour augmenter la taille du certificat", "Pour rendre la clé publique secrète", "Pour supprimer le padding", "Pour réduire les fuites par canal auxiliaire"],
    correct: 3,
    explanation: "Le blinding randomise temporairement le calcul privé, ce qui complique l'exploitation de mesures de temps ou d'autres fuites."
  },
  {
    category: "RSA",
    difficulty: "Difficile",
    question: "Quel danger présente un exposant public trop petit avec un padding incorrect ou absent ?",
    answers: ["Des attaques algébriques peuvent devenir possibles", "AES cesse de fonctionner", "Le certificat ne contient plus de nom", "Le hash devient réversible dans tous les cas"],
    correct: 0,
    explanation: "RSA avec un petit exposant n'est sûr qu'au sein d'un schéma correctement conçu ; des messages mal paddés peuvent subir des attaques algébriques."
  },
  {
    category: "Hybride",
    difficulty: "Facile",
    question: "Dans un chiffrement hybride, quelle partie protège généralement le contenu volumineux ?",
    answers: ["Le certificat seul", "Un algorithme symétrique", "Une signature sans clé", "La fonction Base64"],
    correct: 1,
    explanation: "Une clé symétrique de session chiffre efficacement le contenu, tandis que l'asymétrique sert à établir ou encapsuler cette clé."
  },
  {
    category: "Hybride",
    difficulty: "Moyen",
    question: "Pourquoi générer une nouvelle clé de session pour chaque fichier ou échange ?",
    answers: ["Pour rendre le fichier lisible", "Pour supprimer le besoin d'aléatoire", "Pour compartimenter les compromissions", "Pour transformer AES en hash"],
    correct: 2,
    explanation: "Des clés de session distinctes limitent l'impact d'une fuite et empêchent qu'une seule clé protège toutes les données."
  },
  {
    category: "Hybride",
    difficulty: "Moyen",
    question: "Que contient typiquement une enveloppe de chiffrement hybride ?",
    answers: ["Seulement le mot de passe utilisateur", "Uniquement un certificat racine", "Le clair et la clé privée", "Le chiffré et une clé de session protégée"],
    correct: 3,
    explanation: "L'enveloppe transporte le contenu chiffré ainsi qu'une encapsulation ou un chiffrement de la clé de session."
  },
  {
    category: "Hybride",
    difficulty: "Difficile",
    question: "Pourquoi lier l'encapsulation de clé au chiffré et à son contexte ?",
    answers: ["Pour empêcher les mélanges entre enveloppes", "Pour réduire AES à 64 bits", "Pour publier le secret partagé", "Pour désactiver l'authentification"],
    correct: 0,
    explanation: "Une liaison cryptographique évite qu'un attaquant combine des composants valides provenant de messages ou contextes différents."
  },
  {
    category: "Hybride",
    difficulty: "Moyen",
    question: "Après une encapsulation KEM, que fait-on généralement du secret partagé ?",
    answers: ["On le publie avec le chiffré", "On le passe dans une KDF", "On l'utilise comme certificat", "On le convertit en nom de domaine"],
    correct: 1,
    explanation: "Le secret issu du KEM alimente une KDF qui produit les clés symétriques nécessaires au protocole."
  },
  {
    category: "Signature",
    difficulty: "Facile",
    question: "Quelle clé sert à créer une signature numérique ?",
    answers: ["La clé publique du destinataire", "Le certificat racine", "La clé privée du signataire", "Le nonce du vérificateur"],
    correct: 2,
    explanation: "Le signataire utilise sa clé privée ; les vérificateurs emploient la clé publique correspondante."
  },
  {
    category: "Signature",
    difficulty: "Facile",
    question: "Une signature numérique rend-elle le message confidentiel ?",
    answers: ["Oui, dans tous les cas", "Oui, si le message est court", "Oui, sans clé", "Non, elle ne chiffre pas le contenu"],
    correct: 3,
    explanation: "La signature apporte surtout intégrité et authentification de l'origine ; il faut chiffrer séparément pour la confidentialité."
  },
  {
    category: "Signature",
    difficulty: "Difficile",
    question: "Pourquoi le nonce d'une signature ECDSA doit-il être imprévisible et jamais réutilisé ?",
    answers: ["Sa réutilisation peut révéler la clé privée", "Il remplace la clé publique", "Il détermine la date du certificat", "Il chiffre le message signé"],
    correct: 0,
    explanation: "Deux signatures ECDSA utilisant le même nonce peuvent fournir assez d'équations pour calculer le nonce puis la clé privée."
  },
  {
    category: "Signature",
    difficulty: "Moyen",
    question: "Pourquoi signe-t-on généralement une empreinte plutôt qu'un document entier avec la primitive asymétrique ?",
    answers: ["Pour cacher le nom du signataire", "Pour traiter une valeur courte de taille fixe", "Pour rendre la signature réversible", "Pour éviter toute fonction de hash"],
    correct: 1,
    explanation: "Le hash représente efficacement un document de taille quelconque et permet à la primitive de signature de traiter une entrée compacte."
  },
  {
    category: "Signature",
    difficulty: "Difficile",
    question: "Quel est l'intérêt d'inclure un identifiant de protocole dans les données signées ?",
    answers: ["Réduire la clé privée", "Compresser le certificat", "Empêcher une signature d'être réutilisée ailleurs", "Masquer l'algorithme"],
    correct: 2,
    explanation: "La séparation de domaine lie la signature à un usage précis et évite qu'un message valide dans un protocole le soit dans un autre."
  },
  {
    category: "Confiance",
    difficulty: "Facile",
    question: "Que relie un certificat numérique à une identité ?",
    answers: ["Un mot de passe", "Une clé AES", "Un bloc de blockchain", "Une clé publique"],
    correct: 3,
    explanation: "Un certificat signé atteste notamment qu'une clé publique est associée à un nom, une organisation ou une autre identité."
  },
  {
    category: "Confiance",
    difficulty: "Moyen",
    question: "Pourquoi un certificat racine peut-il être vérifié sans autorité supérieure ?",
    answers: ["Il est déjà présent dans un magasin de confiance", "Il ne contient aucune signature", "Il utilise toujours AES", "Il est renouvelé à chaque page"],
    correct: 0,
    explanation: "La confiance dans une racine est un point de départ configuré dans le système ou l'application, et non déduite d'une CA supérieure."
  },
  {
    category: "Confiance",
    difficulty: "Facile",
    question: "Que doit faire un client face à un certificat TLS expiré ?",
    answers: ["Ignorer uniquement la date", "Refuser normalement la connexion", "Publier sa clé privée", "Remplacer le certificat localement"],
    correct: 1,
    explanation: "Un certificat hors de sa période de validité ne doit normalement pas être accepté."
  },
  {
    category: "Confiance",
    difficulty: "Moyen",
    question: "Pourquoi la vérification du nom d'hôte est-elle indispensable en TLS ?",
    answers: ["Pour accélérer le hash", "Pour choisir la taille d'AES", "Pour vérifier que le certificat vise le serveur demandé", "Pour rendre le certificat secret"],
    correct: 2,
    explanation: "Une chaîne valide ne suffit pas : l'identité portée par le certificat doit aussi correspondre au nom auquel le client se connecte."
  },
  {
    category: "Confiance",
    difficulty: "Difficile",
    question: "Quel risque opérationnel accompagne le certificate pinning ?",
    answers: ["Il révèle forcément la clé privée", "Il désactive tous les hashes", "Il rend le réseau anonyme", "Une rotation mal préparée peut bloquer le service"],
    correct: 3,
    explanation: "Épingler une clé ou un certificat réduit certaines possibilités d'interception, mais une rotation non anticipée peut casser tous les clients."
  },
  {
    category: "Blockchain",
    difficulty: "Moyen",
    question: "Que vise une attaque dite des 51 % sur une blockchain à preuve de travail ?",
    answers: ["Contrôler assez de calcul pour réorganiser des transactions", "Retrouver toutes les clés privées", "Casser AES-256", "Modifier les certificats racines"],
    correct: 0,
    explanation: "Un acteur majoritaire en puissance de calcul peut notamment tenter de réorganiser la chaîne et de réaliser certaines doubles dépenses."
  },
  {
    category: "Blockchain",
    difficulty: "Moyen",
    question: "À quoi sert un arbre de Merkle dans un bloc ?",
    answers: ["À chiffrer les montants", "À résumer et prouver l'inclusion de transactions", "À générer les clés des utilisateurs", "À masquer le bloc précédent"],
    correct: 1,
    explanation: "La racine de Merkle engage l'ensemble des transactions et permet des preuves d'inclusion compactes."
  },
  {
    category: "Blockchain",
    difficulty: "Facile",
    question: "Que se passe-t-il généralement si un utilisateur perd définitivement sa clé privée ?",
    answers: ["Le réseau la recalcule", "La CA la révoque automatiquement", "Il perd l'accès aux actifs contrôlés", "Le hash devient sa nouvelle clé"],
    correct: 2,
    explanation: "Sans sauvegarde ou mécanisme de récupération prévu, la possession de la clé privée est nécessaire pour autoriser les opérations."
  },
  {
    category: "Blockchain",
    difficulty: "Moyen",
    question: "Quel rôle joue la preuve de travail ?",
    answers: ["Garantir la confidentialité des transactions", "Remplacer les signatures", "Créer des certificats TLS", "Rendre coûteuse la proposition d'un historique"],
    correct: 3,
    explanation: "La preuve de travail impose un coût de calcul aux producteurs de blocs et contribue au mécanisme de consensus."
  },
  {
    category: "Blockchain",
    difficulty: "Difficile",
    question: "Pourquoi un smart contract audité peut-il encore présenter un risque ?",
    answers: ["L'audit ne garantit pas l'absence de tout défaut", "Une blockchain interdit les tests", "Les signatures y sont impossibles", "Son code reste toujours secret"],
    correct: 0,
    explanation: "Un audit réduit le risque mais ne prouve pas l'absence de bugs, de mauvaises hypothèses économiques ou d'interactions imprévues."
  },
  {
    category: "Cryptanalyse",
    difficulty: "Facile",
    question: "De quoi dépend surtout la résistance à une attaque exhaustive sur une clé idéale ?",
    answers: ["De la couleur de l'interface", "De l'entropie de la clé", "Du nom du fichier", "Du format Base64"],
    correct: 1,
    explanation: "Plus l'espace de clés réellement possibles est grand et uniforme, plus une recherche exhaustive demande d'essais."
  },
  {
    category: "Cryptanalyse",
    difficulty: "Moyen",
    question: "Dans une attaque known-plaintext, que connaît l'attaquant ?",
    answers: ["La clé privée complète", "Le prochain nonce", "Des couples clair-chiffré", "Le code PIN de tous les utilisateurs"],
    correct: 2,
    explanation: "L'attaquant dispose d'un ou plusieurs messages clairs et de leurs chiffrés correspondants."
  },
  {
    category: "Cryptanalyse",
    difficulty: "Difficile",
    question: "Que permet un oracle de déchiffrement dans un modèle chosen-ciphertext ?",
    answers: ["Choisir les paramètres AES", "Lire directement la clé", "Signer un certificat racine", "Soumettre des chiffrés et observer leur traitement"],
    correct: 3,
    explanation: "L'adversaire peut demander le déchiffrement ou observer le résultat de chiffrés choisis, sous les restrictions du modèle."
  },
  {
    category: "Cryptanalyse",
    difficulty: "Difficile",
    question: "Quel est le principe d'une attaque par injection de faute ?",
    answers: ["Perturber un calcul et analyser les résultats erronés", "Deviner les mots de passe par dictionnaire", "Remplacer un certificat expiré", "Chercher une collision au hasard uniquement"],
    correct: 0,
    explanation: "Une perturbation physique ou logique contrôlée peut produire des sorties fautives qui révèlent des informations sur le calcul secret."
  },
  {
    category: "Cryptanalyse",
    difficulty: "Moyen",
    question: "Pourquoi des messages d'erreur trop précis peuvent-ils être dangereux ?",
    answers: ["Ils allongent les clés", "Ils peuvent créer un oracle", "Ils empêchent la journalisation", "Ils chiffrent le réseau"],
    correct: 1,
    explanation: "Des réponses distinctes selon la cause d'échec peuvent révéler progressivement des informations exploitables par un attaquant."
  },
  {
    category: "Quantique",
    difficulty: "Facile",
    question: "Un ordinateur quantique accélère-t-il automatiquement tous les calculs ?",
    answers: ["Oui, sans limite", "Oui, uniquement sur Internet", "Non, le gain dépend de l'algorithme", "Non, car les qubits sont classiques"],
    correct: 2,
    explanation: "Les gains quantiques concernent certains problèmes et algorithmes précis ; ils ne rendent pas tous les calculs instantanés."
  },
  {
    category: "Quantique",
    difficulty: "Moyen",
    question: "Pourquoi AES-256 est-il souvent envisagé face à Grover ?",
    answers: ["Il utilise RSA en interne", "Il n'a pas de clé", "Il résiste à Shor par preuve parfaite", "Son espace de clés conserve une marge après le gain quadratique"],
    correct: 3,
    explanation: "Dans un modèle idéal, Grover ramène la recherche sur 256 bits à un ordre proche de 128 bits, avant prise en compte des coûts pratiques."
  },
  {
    category: "Quantique",
    difficulty: "Moyen",
    question: "Quelles primitives actuelles seraient directement menacées par Shor ?",
    answers: ["Les signatures RSA et ECC", "Les encodages Base64", "Les salts de mots de passe", "Les chiffrements One-Time Pad bien utilisés"],
    correct: 0,
    explanation: "Shor cible la factorisation et le logarithme discret, problèmes au cœur de RSA, Diffie-Hellman classique et ECC."
  },
  {
    category: "Quantique",
    difficulty: "Difficile",
    question: "Pourquoi un système QKD a-t-il encore besoin d'un canal classique authentifié ?",
    answers: ["Pour compresser les qubits", "Pour empêcher l'usurpation des participants", "Pour factoriser les clés", "Pour remplacer toute clé initiale"],
    correct: 1,
    explanation: "Sans authentification du canal classique, un intermédiaire pourrait se faire passer pour chaque participant."
  },
  {
    category: "Quantique",
    difficulty: "Moyen",
    question: "Pourquoi commencer tôt une migration post-quantique ?",
    answers: ["Pour rendre les données publiques", "Pour supprimer tous les certificats", "Parce que l'inventaire et le remplacement prennent du temps", "Parce qu'AES ne fonctionne déjà plus"],
    correct: 2,
    explanation: "Identifier les usages cryptographiques, mettre à jour les protocoles et renouveler les équipements peut demander plusieurs années."
  },
  {
    category: "Post-quantique",
    difficulty: "Facile",
    question: "La cryptographie post-quantique nécessite-t-elle un ordinateur quantique pour fonctionner ?",
    answers: ["Oui, pour chaque signature", "Oui, uniquement pour vérifier", "Oui, avec une fibre spéciale", "Non, elle s'exécute sur des machines classiques"],
    correct: 3,
    explanation: "Les algorithmes post-quantiques sont conçus pour des ordinateurs classiques tout en visant une résistance aux attaques quantiques connues."
  },
  {
    category: "Post-quantique",
    difficulty: "Moyen",
    question: "Sur quelle famille de problèmes ML-KEM s'appuie-t-il ?",
    answers: ["Les réseaux euclidiens structurés", "La factorisation RSA", "La preuve de travail", "Les codes PIN"],
    correct: 0,
    explanation: "ML-KEM est un mécanisme fondé sur des problèmes de réseaux structurés, notamment liés à Module-LWE."
  },
  {
    category: "Post-quantique",
    difficulty: "Moyen",
    question: "À quoi sert ML-DSA ?",
    answers: ["Au chiffrement de disque", "Aux signatures numériques", "À l'encodage des certificats", "À la génération de mots de passe"],
    correct: 1,
    explanation: "ML-DSA est un algorithme de signature numérique post-quantique fondé sur les réseaux."
  },
  {
    category: "Post-quantique",
    difficulty: "Difficile",
    question: "Quel est l'intérêt d'un échange hybride classique et post-quantique pendant une transition ?",
    answers: ["Réduire toutes les clés à 64 bits", "Éviter l'authentification", "Conserver la sécurité si au moins une composante tient", "Rendre les certificats inutiles"],
    correct: 2,
    explanation: "Une combinaison correctement conçue peut protéger l'échange tant que la composante classique ou post-quantique reste sûre."
  },
  {
    category: "Post-quantique",
    difficulty: "Moyen",
    question: "Quel impact pratique faut-il anticiper avec certains algorithmes post-quantiques ?",
    answers: ["L'absence totale de clés", "La disparition des réseaux", "L'impossibilité de signer", "Des clés ou signatures plus volumineuses"],
    correct: 3,
    explanation: "Selon l'algorithme, les clés, chiffrés ou signatures peuvent être sensiblement plus grands que leurs équivalents classiques."
  },
  {
    category: "Zero-Knowledge",
    difficulty: "Moyen",
    question: "Dans une preuve zero-knowledge, qu'appelle-t-on le témoin ?",
    answers: ["L'information secrète prouvant l'affirmation", "Le certificat du navigateur", "Le hash public uniquement", "Le journal du serveur"],
    correct: 0,
    explanation: "Le témoin est la donnée secrète connue du prouveur, par exemple une solution ou une clé, qui rend l'affirmation vraie."
  },
  {
    category: "Zero-Knowledge",
    difficulty: "Moyen",
    question: "Que garantit la propriété de completeness ?",
    answers: ["Un tricheur réussit toujours", "Un prouveur honnête convainc un vérificateur honnête", "Le témoin devient public", "La preuve chiffre le réseau"],
    correct: 1,
    explanation: "La complétude assure qu'une affirmation vraie, présentée selon le protocole par un prouveur honnête, est acceptée."
  },
  {
    category: "Zero-Knowledge",
    difficulty: "Moyen",
    question: "Que vise la propriété de soundness ?",
    answers: ["Rendre la preuve silencieuse", "Compresser le témoin", "Empêcher de convaincre pour une affirmation fausse", "Cacher le nom du protocole"],
    correct: 2,
    explanation: "La solidité limite la probabilité qu'un prouveur malhonnête fasse accepter une affirmation fausse."
  },
  {
    category: "Zero-Knowledge",
    difficulty: "Difficile",
    question: "Quel risque peut présenter une cérémonie de paramètres de confiance mal menée ?",
    answers: ["Elle réduit la taille des écrans", "Elle désactive TLS", "Elle rend le hash réversible", "Un secret résiduel peut permettre de fausses preuves"],
    correct: 3,
    explanation: "Dans certains systèmes, conserver les déchets toxiques de la génération des paramètres peut permettre de fabriquer des preuves invalides."
  },
  {
    category: "Zero-Knowledge",
    difficulty: "Difficile",
    question: "Que signifie dire qu'un transcript zero-knowledge est simulable ?",
    answers: ["On peut produire une vue comparable sans connaître le témoin", "La preuve révèle le témoin après délai", "Le vérificateur choisit la clé privée", "Le transcript remplace l'affirmation"],
    correct: 0,
    explanation: "L'existence d'un simulateur produisant une vue indiscernable formalise l'idée que la preuve ne révèle rien au-delà de sa validité."
  },
  {
    category: "Protocoles",
    difficulty: "Facile",
    question: "TLS protège-t-il une donnée après son déchiffrement sur le serveur ?",
    answers: ["Oui, définitivement", "Non, il protège surtout le transport", "Oui, même dans les journaux", "Non, car TLS n'utilise aucun chiffrement"],
    correct: 1,
    explanation: "TLS protège les données en transit entre les extrémités ; leur stockage et leur traitement nécessitent d'autres protections."
  },
  {
    category: "Protocoles",
    difficulty: "Moyen",
    question: "Quel mécanisme aide à détecter la répétition d'un ancien message valide ?",
    answers: ["Une clé publique plus courte", "Un encodage Base64", "Un compteur ou un nonce de fraîcheur", "Un certificat auto-signé"],
    correct: 2,
    explanation: "Un compteur, nonce, identifiant de session ou horodatage vérifié permet de rejeter les messages déjà vus ou trop anciens."
  },
  {
    category: "Protocoles",
    difficulty: "Difficile",
    question: "Qu'est-ce qu'une attaque de downgrade ?",
    answers: ["Une attaque qui augmente le niveau de sécurité", "Une attaque qui compresse les clés", "Une révocation de certificat", "Forcer l'emploi d'une version ou suite plus faible"],
    correct: 3,
    explanation: "L'attaquant manipule la négociation pour faire choisir une option ancienne ou moins sûre encore acceptée par les participants."
  },
  {
    category: "Protocoles",
    difficulty: "Difficile",
    question: "Pourquoi authentifier le transcript d'une négociation cryptographique ?",
    answers: ["Pour détecter toute modification des paramètres négociés", "Pour remplacer toutes les clés", "Pour rendre les algorithmes secrets", "Pour supprimer les numéros de version"],
    correct: 0,
    explanation: "L'authentification du transcript lie les versions, algorithmes et clés échangés, empêchant leur modification silencieuse."
  },
  {
    category: "Protocoles",
    difficulty: "Difficile",
    question: "Pourquoi la machine à états d'un protocole fait-elle partie de sa sécurité ?",
    answers: ["Elle choisit la couleur des messages", "Un ordre inattendu peut contourner des vérifications", "Elle augmente toujours l'entropie", "Elle génère les certificats racines"],
    correct: 1,
    explanation: "Accepter des messages dans un mauvais état ou sauter une étape peut invalider les garanties cryptographiques du protocole."
  },
  {
    category: "Aléatoire",
    difficulty: "Facile",
    question: "Quel générateur faut-il utiliser pour créer une clé cryptographique ?",
    answers: ["Un compteur prévisible", "L'heure courante seule", "Un CSPRNG", "Math.random sans autre garantie"],
    correct: 2,
    explanation: "Un générateur pseudo-aléatoire cryptographiquement sûr produit des valeurs imprévisibles adaptées aux clés et secrets."
  },
  {
    category: "Aléatoire",
    difficulty: "Moyen",
    question: "Quelle différence générale existe entre un salt et une clé ?",
    answers: ["Le salt doit être plus long qu'un fichier", "La clé peut toujours être publique", "Ils sont strictement identiques", "Le salt peut être public, la clé doit rester secrète"],
    correct: 3,
    explanation: "Le salt apporte unicité et diversité sans exiger le secret, tandis qu'une clé secrète porte une propriété de confidentialité ou d'authenticité."
  },
  {
    category: "Aléatoire",
    difficulty: "Moyen",
    question: "Que mesure l'entropie d'une source dans ce contexte ?",
    answers: ["Son imprévisibilité effective", "La longueur de son nom", "La vitesse du réseau", "Le nombre de certificats"],
    correct: 0,
    explanation: "L'entropie quantifie l'incertitude ou l'imprévisibilité disponible, pas seulement le nombre de caractères produits."
  },
  {
    category: "Aléatoire",
    difficulty: "Difficile",
    question: "Pourquoi une graine de CSPRNG faible compromet-elle toutes les valeurs générées ?",
    answers: ["Elle rend les valeurs trop longues", "Un attaquant peut réduire fortement les états possibles", "Elle transforme les clés en certificats", "Elle empêche le hash des données"],
    correct: 1,
    explanation: "Même un bon générateur ne peut pas créer d'imprévisibilité à partir d'une graine devinable ou issue d'un espace trop petit."
  },
  {
    category: "Aléatoire",
    difficulty: "Moyen",
    question: "Un identifiant unique est-il nécessairement imprévisible ?",
    answers: ["Oui, par définition", "Oui, s'il contient des tirets", "Non, unicité et imprévisibilité sont distinctes", "Non, car il est toujours secret"],
    correct: 2,
    explanation: "Une valeur peut être unique tout en suivant une séquence facile à prévoir ; un jeton secret exige aussi de l'imprévisibilité."
  },
  {
    category: "Implémentation",
    difficulty: "Moyen",
    question: "Pourquoi utiliser une bibliothèque cryptographique reconnue ?",
    answers: ["Elle rend inutile toute mise à jour", "Elle garantit une sécurité absolue", "Elle supprime la gestion des clés", "Elle réduit les erreurs de conception et d'implémentation"],
    correct: 3,
    explanation: "Des primitives éprouvées et des API de haut niveau évitent de nombreux pièges subtils, même si leur usage doit rester soigneux."
  },
  {
    category: "Implémentation",
    difficulty: "Difficile",
    question: "Pourquoi éviter les branchements dépendant d'un secret ?",
    answers: ["Ils peuvent créer des différences de temps observables", "Ils empêchent toute compilation", "Ils raccourcissent la clé", "Ils modifient les certificats"],
    correct: 0,
    explanation: "Le chemin d'exécution et les accès mémoire peuvent révéler des informations par le temps, le cache ou d'autres canaux auxiliaires."
  },
  {
    category: "Implémentation",
    difficulty: "Facile",
    question: "Pourquoi ne faut-il pas écrire une clé secrète dans les journaux ?",
    answers: ["Elle rendrait le journal trop coloré", "Les journaux sont souvent largement accessibles et conservés", "Elle empêcherait les erreurs", "Elle serait automatiquement chiffrée"],
    correct: 1,
    explanation: "Les logs sont copiés, centralisés et consultés par de nombreux outils ; un secret journalisé peut persister longtemps et fuiter."
  },
  {
    category: "Implémentation",
    difficulty: "Moyen",
    question: "Que signifie échouer de manière fermée lors d'une erreur cryptographique ?",
    answers: ["Continuer avec un algorithme inconnu", "Retourner le clair malgré l'erreur", "Refuser l'opération sans contourner la sécurité", "Publier la clé pour diagnostiquer"],
    correct: 2,
    explanation: "En cas d'échec de vérification ou de configuration, le système doit refuser l'action protégée plutôt que poursuivre sans garantie."
  },
  {
    category: "Implémentation",
    difficulty: "Moyen",
    question: "Pourquoi suivre les mises à jour des dépendances cryptographiques ?",
    answers: ["Pour changer les mots de passe des utilisateurs", "Pour supprimer les sauvegardes", "Pour rendre les clés publiques", "Pour corriger des vulnérabilités et défauts connus"],
    correct: 3,
    explanation: "Même un algorithme solide peut être affaibli par un bug de bibliothèque ; les correctifs et avis de sécurité doivent être suivis."
  }
];
