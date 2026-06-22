const questions = [
  {
    category: "Bases",
    difficulty: "Facile",
    question: "Quel service empêche une personne non autorisée de lire un message ?",
    answers: ["Confidentialité", "Intégrité", "Authentification", "Disponibilité"],
    correct: 0,
    explanation: "La confidentialité limite l'accès au contenu aux seules personnes autorisées."
  },
  {
    category: "Bases",
    difficulty: "Facile",
    question: "Quel principe affirme que l'algorithme peut être public si la clé reste secrète ?",
    answers: ["Principe de Shannon parfait", "Principe de Kerckhoffs", "Principe de Diffie-Hellman", "Principe du secret total"],
    correct: 1,
    explanation: "Selon Kerckhoffs, la sécurité d'un système ne doit pas dépendre du secret de l'algorithme."
  },
  {
    category: "Bases",
    difficulty: "Facile",
    question: "Quel service vérifie qu'un message n'a pas été modifié ?",
    answers: ["Confidentialité", "Intégrité", "Anonymat", "Compression"],
    correct: 1,
    explanation: "L'intégrité permet de détecter une modification accidentelle ou malveillante du message."
  },
  {
    category: "Hash",
    difficulty: "Facile",
    question: "Que produit une fonction de hash cryptographique ?",
    answers: ["Une clé privée", "Une empreinte fixe", "Un certificat", "Un message chiffré"],
    correct: 1,
    explanation: "Une fonction de hash transforme une donnée de taille quelconque en une empreinte de taille fixe."
  },
  {
    category: "Hash",
    difficulty: "Moyen",
    question: "Quelle propriété rend difficile le fait de retrouver un message à partir de son hash ?",
    answers: ["Résistance à la collision", "Résistance à la préimage", "Confidentialité parfaite", "Non-répudiation"],
    correct: 1,
    explanation: "La résistance à la préimage signifie qu'il est difficile de retrouver m à partir de H(m)."
  },
  {
    category: "Hash",
    difficulty: "Moyen",
    question: "Pourquoi MD5 et SHA-1 sont-ils déconseillés en sécurité ?",
    answers: ["Ils sont trop récents pour être audités", "Ils imposent RSA à chaque message", "Leurs collisions sont exploitables", "Ils chiffrent trop lentement"],
    correct: 2,
    explanation: "MD5 et SHA-1 sont affaiblis, notamment parce que des attaques par collision sont devenues pratiques ou réalistes."
  },
  {
    category: "Hash",
    difficulty: "Moyen",
    question: "Quel risque apparaît avec une concaténation naïve de champs avant hash ?",
    answers: ["Des ambiguïtés de découpage", "Une taille de clé AES incohérente", "Une chaîne de certificat expirée", "Un nonce rendu secret inutilement"],
    correct: 0,
    explanation: "Sans longueur, séparateur sûr ou format canonique, deux listes de champs différentes peuvent donner la même chaîne à hacher."
  },
  {
    category: "Mots de passe",
    difficulty: "Moyen",
    question: "Quel choix est adapté au stockage d'un mot de passe ?",
    answers: ["SHA-256 avec salt fixe", "Base64 avec encodage UTF-8", "Argon2 avec salt", "AES-ECB avec clé serveur"],
    correct: 2,
    explanation: "Une KDF comme Argon2, bcrypt, scrypt ou PBKDF2, avec un salt et un coût, ralentit les attaques hors ligne."
  },
  {
    category: "Mots de passe",
    difficulty: "Facile",
    question: "Comment doit être le salt d'un mot de passe ?",
    answers: ["Secret pour tous", "Public et unique", "Identique au mot de passe", "Supprimé du serveur"],
    correct: 1,
    explanation: "Le salt peut être public, mais il doit être unique pour éviter les hashes identiques et les tables pré-calculées."
  },
  {
    category: "Symétrique",
    difficulty: "Facile",
    question: "Dans le chiffrement symétrique, quelle clé sert au chiffrement et au déchiffrement ?",
    answers: ["La même clé", "Deux clés publiques", "Un certificat", "Un hash"],
    correct: 0,
    explanation: "Le chiffrement symétrique utilise une même clé secrète pour chiffrer et déchiffrer."
  },
  {
    category: "Symétrique",
    difficulty: "Moyen",
    question: "Quelle condition est obligatoire pour qu'un One-Time Pad reste sûr ?",
    answers: ["Réutiliser la clé de session", "Clé courte mais bien cachée", "Clé aléatoire unique", "Clé publique signée"],
    correct: 2,
    explanation: "L'OTP exige une clé vraiment aléatoire, aussi longue que le message et utilisée une seule fois."
  },
  {
    category: "Symétrique",
    difficulty: "Moyen",
    question: "Que révèle la réutilisation d'une clé dans un One-Time Pad ?",
    answers: ["La clé publique", "M1 XOR M2", "Le certificat TLS", "Le salt serveur"],
    correct: 1,
    explanation: "Si C1 = M1 XOR K et C2 = M2 XOR K, alors C1 XOR C2 = M1 XOR M2."
  },
  {
    category: "AES",
    difficulty: "Facile",
    question: "Quelle est la taille de bloc d'AES ?",
    answers: ["64 bits", "128 bits", "256 bits", "512 bits"],
    correct: 1,
    explanation: "AES chiffre des blocs de 128 bits, quelle que soit la taille de clé."
  },
  {
    category: "AES",
    difficulty: "Moyen",
    question: "Pourquoi le mode ECB est-il déconseillé ?",
    answers: ["Il masque les motifs", "Il fuit les répétitions", "Il impose un certificat", "Il détruit la clé"],
    correct: 1,
    explanation: "En ECB, deux blocs clairs identiques donnent deux blocs chiffrés identiques, ce qui révèle la structure du message."
  },
  {
    category: "AES",
    difficulty: "Moyen",
    question: "Pourquoi utilise-t-on un IV ou un nonce dans certains modes de chiffrement ?",
    answers: ["Pour varier le chiffrement", "Pour cacher l'algorithme utilisé", "Pour signer la clé privée locale", "Pour supprimer le hash du message"],
    correct: 0,
    explanation: "L'IV ou le nonce évite que le même message chiffré avec la même clé produise toujours le même résultat."
  },
  {
    category: "AEAD",
    difficulty: "Moyen",
    question: "Que fournit un mode AEAD comme AES-GCM ou ChaCha20-Poly1305 ?",
    answers: ["Signature juridique qualifiée", "Confidentialité sans intégrité", "Chiffrement et authenticité", "Compression avant chiffrement"],
    correct: 2,
    explanation: "Un mode AEAD combine la confidentialité avec une vérification d'authenticité et d'intégrité du message."
  },
  {
    category: "AEAD",
    difficulty: "Difficile",
    question: "Quelle erreur est critique avec AES-GCM ou ChaCha20-Poly1305 ?",
    answers: ["Réutiliser clé/nonce", "Choisir AES-256", "Vérifier le tag", "Ajouter des données associées"],
    correct: 0,
    explanation: "Réutiliser le même couple clé/nonce peut casser gravement la confidentialité et l'authenticité."
  },
  {
    category: "Asymétrique",
    difficulty: "Facile",
    question: "Dans la cryptographie asymétrique, quelle clé doit rester secrète ?",
    answers: ["Clé publique", "Clé privée", "Certificat", "Nom de domaine"],
    correct: 1,
    explanation: "La clé publique peut être diffusée ; la clé privée doit rester strictement secrète."
  },
  {
    category: "Diffie-Hellman",
    difficulty: "Moyen",
    question: "À quoi sert principalement Diffie-Hellman ?",
    answers: ["Signer un fichier", "Créer un hash", "Établir un secret", "Compresser un message"],
    correct: 2,
    explanation: "Diffie-Hellman permet à deux parties de construire un secret partagé sans l'envoyer directement."
  },
  {
    category: "Diffie-Hellman",
    difficulty: "Difficile",
    question: "Quelle faiblesse existe si Diffie-Hellman n'est pas authentifié ?",
    answers: ["Attaque MITM", "Collision MD5", "Clé RSA vide", "Bloc AES fixe"],
    correct: 0,
    explanation: "Sans authentification, un attaquant peut intercepter et remplacer les clés publiques échangées."
  },
  {
    category: "RSA",
    difficulty: "Moyen",
    question: "Sur quelle difficulté RSA repose-t-il principalement ?",
    answers: ["Factoriser n", "Trouver un chemin", "Compresser un texte", "Résoudre un Sudoku"],
    correct: 0,
    explanation: "RSA repose sur la difficulté de factoriser un grand module n = p × q."
  },
  {
    category: "RSA",
    difficulty: "Moyen",
    question: "Quel schéma est recommandé pour une signature RSA moderne ?",
    answers: ["RSA brut", "RSA-OAEP", "RSA-PSS", "RSA-ECB"],
    correct: 2,
    explanation: "RSA-PSS est le schéma moderne recommandé pour les signatures RSA. RSA-OAEP concerne plutôt le chiffrement."
  },
  {
    category: "RSA",
    difficulty: "Moyen",
    question: "Quel schéma est adapté au chiffrement RSA moderne ?",
    answers: ["RSA brut", "RSA-PSS", "RSA-OAEP", "Base64-RSA"],
    correct: 2,
    explanation: "RSA-OAEP ajoute un padding probabiliste adapté au chiffrement, contrairement au RSA brut."
  },
  {
    category: "Hybride",
    difficulty: "Moyen",
    question: "Pourquoi utilise-t-on souvent un chiffrement hybride ?",
    answers: ["RSA chiffre les gros fichiers", "AES signe les certificats", "Hash remplace la clé", "Asymétrique + symétrique"],
    correct: 3,
    explanation: "L'asymétrique protège ou établit une clé de session ; le symétrique chiffre ensuite efficacement les données."
  },
  {
    category: "Signature",
    difficulty: "Facile",
    question: "Que garantit principalement une signature numérique valide ?",
    answers: ["Compression du message", "Intégrité et origine", "Anonymat complet", "Secret du contenu"],
    correct: 1,
    explanation: "Une signature permet de vérifier que le message n'a pas été modifié et qu'il correspond à une clé privée donnée."
  },
  {
    category: "Signature",
    difficulty: "Moyen",
    question: "Pourquoi la non-répudiation ne dépend-elle pas seulement de l'algorithme de signature ?",
    answers: ["Le hash est interdit", "Le contexte compte", "AES annule la preuve", "Le salt signe déjà"],
    correct: 1,
    explanation: "La protection de la clé privée, l'identité certifiée, l'horodatage et le cadre juridique comptent aussi."
  },
  {
    category: "Confiance",
    difficulty: "Facile",
    question: "Quel modèle de confiance SSH utilise-t-il souvent à la première connexion ?",
    answers: ["PKI stricte", "TOFU", "Proof of Stake", "Zero-knowledge"],
    correct: 1,
    explanation: "SSH utilise souvent TOFU : Trust On First Use. La première clé d'hôte vue est mémorisée."
  },
  {
    category: "Confiance",
    difficulty: "Moyen",
    question: "Dans une PKI, que fait une autorité de certification ?",
    answers: ["Elle signe des certificats", "Elle mine des blocs", "Elle choisit les mots de passe", "Elle compresse les clés"],
    correct: 0,
    explanation: "Une autorité de certification atteste le lien entre une identité et une clé publique en signant un certificat."
  },
  {
    category: "Confiance",
    difficulty: "Moyen",
    question: "Que vérifie typiquement un client TLS dans un certificat ?",
    answers: ["Nom, dates et chaîne", "Couleur du cadenas navigateur", "Prix annuel du nom de domaine", "Taille du logo du site web"],
    correct: 0,
    explanation: "Un client TLS vérifie notamment le nom attendu, les dates, les usages, la chaîne de certification et parfois la révocation."
  },
  {
    category: "Carte bancaire",
    difficulty: "Moyen",
    question: "Quelle leçon illustre l'attaque Yescard ?",
    answers: ["AES est toujours cassé", "Base64 sécurise le PIN", "Le protocole compte", "Le hash remplace la banque"],
    correct: 2,
    explanation: "La Yescard montre qu'un protocole mal conçu peut échouer même avec des primitives cryptographiques correctes."
  },
  {
    category: "Blockchain",
    difficulty: "Facile",
    question: "Pourquoi un bloc contient-il le hash du bloc précédent ?",
    answers: ["Pour lier les blocs", "Pour cacher les frais réseau", "Pour créer le code PIN", "Pour signer avec AES"],
    correct: 0,
    explanation: "Le hash du bloc précédent rend les modifications anciennes détectables, car elles cassent les liens de la chaîne."
  },
  {
    category: "Blockchain",
    difficulty: "Moyen",
    question: "Dans Bitcoin, que désigne le modèle UTXO ?",
    answers: ["Des sorties non dépensées", "Une autorité de certification", "Un mode AES", "Une KDF lente"],
    correct: 0,
    explanation: "Une transaction Bitcoin consomme des sorties non dépensées et crée de nouvelles sorties."
  },
  {
    category: "Blockchain",
    difficulty: "Moyen",
    question: "Quel est le but du consensus dans une blockchain publique ?",
    answers: ["Accorder les nœuds", "Supprimer les signatures", "Rendre les clés publiques", "Compresser les blocs"],
    correct: 0,
    explanation: "Le consensus permet aux nœuds de converger vers un historique ou un état commun accepté."
  },
  {
    category: "Blockchain",
    difficulty: "Moyen",
    question: "À quoi sert une signature dans une transaction blockchain ?",
    answers: ["Prouver l'autorisation", "Masquer tous les montants", "Réduire le bloc", "Créer la difficulté"],
    correct: 0,
    explanation: "La signature prouve que le détenteur de la clé privée autorise la dépense ou l'action."
  },
  {
    category: "Cryptanalyse",
    difficulty: "Moyen",
    question: "Dans une attaque chosen-plaintext, que peut faire l'attaquant ?",
    answers: ["Choisir des clairs", "Lire la clé privée", "Signer comme une CA", "Modifier AES"],
    correct: 0,
    explanation: "L'attaquant choisit des messages clairs et observe les chiffrés correspondants."
  },
  {
    category: "Cryptanalyse",
    difficulty: "Difficile",
    question: "Quel exemple correspond à une attaque par canal auxiliaire ?",
    answers: ["Mesurer le temps", "Utiliser AES-256", "Ajouter un salt", "Valider un certificat"],
    correct: 0,
    explanation: "Les canaux auxiliaires exploitent des fuites d'implémentation : temps, cache, consommation, erreurs, etc."
  },
  {
    category: "Cryptanalyse",
    difficulty: "Moyen",
    question: "Pourquoi compare-t-on parfois des tags en temps constant ?",
    answers: ["Éviter le timing", "Accélérer SHA-1 en pratique", "Réduire la taille du certificat", "Rendre le salt confidentiel"],
    correct: 0,
    explanation: "Une comparaison qui s'arrête au premier octet faux peut révéler progressivement des informations."
  },
  {
    category: "Quantique",
    difficulty: "Moyen",
    question: "Quel algorithme quantique menace RSA, DH et ECC ?",
    answers: ["Dijkstra", "Shor", "Merkle-Damgård", "Bellman-Ford"],
    correct: 1,
    explanation: "Shor permettrait de résoudre efficacement la factorisation et le logarithme discret."
  },
  {
    category: "Quantique",
    difficulty: "Moyen",
    question: "Quel est l'effet principal de Grover sur la recherche exhaustive ?",
    answers: ["Gain quadratique", "Clé supprimée", "Collision gratuite", "Signature légale"],
    correct: 0,
    explanation: "Grover réduit idéalement une recherche exhaustive de 2^n à environ 2^(n/2)."
  },
  {
    category: "Quantique",
    difficulty: "Difficile",
    question: "Que signifie Harvest Now, Decrypt Later ?",
    answers: ["Stocker pour plus tard", "Signer avant de créer le message", "Révoquer les certificats expirés", "Compresser la blockchain"],
    correct: 0,
    explanation: "Un attaquant peut stocker aujourd'hui des données chiffrées et attendre une capacité future de déchiffrement."
  },
  {
    category: "Post-quantique",
    difficulty: "Moyen",
    question: "Quelle différence principale existe entre PQC et QKD ?",
    answers: ["PQC logicielle, QKD physique", "PQC est seulement un hash", "QKD est un mode AES-GCM", "Même principe et mêmes usages"],
    correct: 0,
    explanation: "La PQC utilise des algorithmes classiques supposés résistants au quantique ; la QKD repose sur des canaux physiques quantiques."
  },
  {
    category: "Post-quantique",
    difficulty: "Moyen",
    question: "Quel est le rôle d'un KEM ?",
    answers: ["Établir un secret", "Signer un document PDF", "Créer un salt de mot de passe", "Miner un bloc de blockchain"],
    correct: 0,
    explanation: "Un KEM encapsule et décapsule un secret partagé, ensuite utilisé pour dériver des clés symétriques."
  },
  {
    category: "Post-quantique",
    difficulty: "Moyen",
    question: "Quel standard correspond à ML-KEM ?",
    answers: ["FIPS 203", "FIPS 204", "FIPS 205", "TLS 1.0"],
    correct: 0,
    explanation: "ML-KEM est standardisé dans FIPS 203."
  },
  {
    category: "Post-quantique",
    difficulty: "Moyen",
    question: "Quel standard correspond à ML-DSA ?",
    answers: ["FIPS 203", "FIPS 204", "FIPS 205", "TLS 1.3"],
    correct: 1,
    explanation: "ML-DSA est standardisé dans FIPS 204 et concerne les signatures numériques post-quantiques."
  },
  {
    category: "Sécurité prouvable",
    difficulty: "Difficile",
    question: "Que cherche à montrer une preuve par réduction ?",
    answers: ["Réduire à une hypothèse", "Prouver que le code n'a aucun bug", "Garantir que la clé ne sera pas perdue", "Rendre AES parfaitement sûr"],
    correct: 0,
    explanation: "Une réduction relie l'existence d'un attaquant efficace à la résolution d'un problème supposé difficile."
  },
  {
    category: "Sécurité prouvable",
    difficulty: "Difficile",
    question: "Que garantit une preuve de sécurité mathématique ?",
    answers: ["Propriété et modèle précis", "Absence totale de bugs", "Disponibilité permanente du serveur", "Bons mots de passe utilisateurs"],
    correct: 0,
    explanation: "Une preuve dépend d'un modèle, d'hypothèses et d'une propriété précise ; elle ne couvre pas automatiquement les bugs ou les erreurs d'usage."
  },
  {
    category: "Zero-Knowledge",
    difficulty: "Moyen",
    question: "Quel est le but d'une preuve zero-knowledge ?",
    answers: ["Révéler la clé privée", "Prouver sans révéler", "Remplacer AES", "Créer un certificat"],
    correct: 1,
    explanation: "Une preuve ZK convainc un vérificateur qu'une affirmation est vraie sans révéler le témoin secret."
  },
  {
    category: "Zero-Knowledge",
    difficulty: "Moyen",
    question: "Quelles sont les trois propriétés classiques d'une preuve ZK ?",
    answers: ["Confidentialité, intégrité, disponibilité", "Correction, secret, auditabilité", "Compression, encodage, tri canonique", "Completeness, soundness, zero-knowledge"],
    correct: 3,
    explanation: "Les propriétés attendues sont completeness, soundness et zero-knowledge."
  },
  {
    category: "Zero-Knowledge",
    difficulty: "Difficile",
    question: "À quoi sert la transformation de Fiat-Shamir ?",
    answers: ["Passer au non-interactif", "Factoriser un module RSA", "Réutiliser un nonce sans risque", "Supprimer toutes les contraintes"],
    correct: 0,
    explanation: "Fiat-Shamir remplace le challenge du vérificateur par un hash du transcript et des entrées publiques."
  },
  {
    category: "Pièges",
    difficulty: "Facile",
    question: "Laquelle de ces affirmations est vraie ?",
    answers: ["Base64 chiffre un message", "Un hash déchiffre un fichier", "ECB est recommandé en pratique", "La clé publique doit être liée à une identité"],
    correct: 3,
    explanation: "Une clé publique doit être liée à une identité par un modèle de confiance : certificat, TOFU, Web of Trust, etc."
  },
  {
    category: "Pièges",
    difficulty: "Facile",
    question: "Quelle affirmation est correcte à propos de Base64 ?",
    answers: ["C'est un encodage", "C'est un chiffrement", "C'est une signature", "C'est une KDF"],
    correct: 0,
    explanation: "Base64 est un encodage réversible sans clé. Il ne protège pas la confidentialité."
  }
];

questions.push(...(globalThis.additionalQuestions ?? []));

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

const startBtn = document.getElementById("startBtn");
const randomBtn = document.getElementById("randomBtn");
const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const reviewCard = document.getElementById("reviewCard");
const questionCounter = document.getElementById("questionCounter");
const scoreCounter = document.getElementById("scoreCounter");
const categoryLabel = document.getElementById("categoryLabel");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const difficultyBadge = document.getElementById("difficultyBadge");
const questionTitle = document.getElementById("questionTitle");
const answersDiv = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const validateBtn = document.getElementById("validateBtn");
const nextBtn = document.getElementById("nextBtn");
const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");
const retryBtn = document.getElementById("retryBtn");
const reviewBtn = document.getElementById("reviewBtn");
const reviewList = document.getElementById("reviewList");
const questionTotal = document.getElementById("questionTotal");
const themeTotal = document.getElementById("themeTotal");

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleAnswers(question) {
  const options = question.answers.map((answer, index) => ({
    answer,
    wasCorrect: index === question.correct
  }));
  const shuffledOptions = shuffle(options);

  return {
    ...question,
    answers: shuffledOptions.map(option => option.answer),
    correct: shuffledOptions.findIndex(option => option.wasCorrect)
  };
}

function prepareQuestions(randomOrder = false) {
  const baseQuestions = randomOrder ? shuffle(questions) : [...questions];
  return baseQuestions.map(shuffleAnswers);
}

function startQuiz(random = false) {
  currentQuestions = prepareQuestions(random);
  currentIndex = 0;
  score = 0;
  selectedAnswer = null;
  userAnswers = [];

  quizCard.classList.remove("hidden");
  resultCard.classList.add("hidden");
  reviewCard.classList.add("hidden");
  renderQuestion();
  quizCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateProgress() {
  const percentage = currentQuestions.length === 0
    ? 0
    : Math.round((currentIndex / currentQuestions.length) * 100);
  progressFill.style.width = `${percentage}%`;
  if (progressText) progressText.textContent = `${percentage} %`;
}

function renderQuestion() {
  const current = currentQuestions[currentIndex];
  selectedAnswer = null;

  questionCounter.textContent = `${currentIndex + 1} / ${currentQuestions.length}`;
  scoreCounter.textContent = score;
  categoryLabel.textContent = current.category;
  difficultyBadge.textContent = current.difficulty;
  questionTitle.textContent = current.question;
  updateProgress();

  answersDiv.innerHTML = "";
  feedback.className = "feedback hidden";
  feedback.textContent = "";
  validateBtn.classList.remove("hidden");
  validateBtn.disabled = true;
  nextBtn.classList.add("hidden");

  current.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.className = "answer";
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}" />
      <span>${answer}</span>
    `;
    label.addEventListener("click", () => {
      selectedAnswer = index;
      validateBtn.disabled = false;
      document.querySelectorAll(".answer").forEach(item => item.classList.remove("selected"));
      label.classList.add("selected");
    });
    answersDiv.appendChild(label);
  });
}

function validateAnswer() {
  if (selectedAnswer === null) return;

  const current = currentQuestions[currentIndex];
  const isCorrect = selectedAnswer === current.correct;
  if (isCorrect) score++;

  userAnswers.push({
    question: current.question,
    category: current.category,
    selected: selectedAnswer,
    correct: current.correct,
    answers: current.answers,
    explanation: current.explanation,
    isCorrect
  });

  const answerLabels = document.querySelectorAll(".answer");
  answerLabels.forEach((label, index) => {
    const input = label.querySelector("input");
    input.disabled = true;
    if (index === current.correct) label.classList.add("correct");
    if (index === selectedAnswer && !isCorrect) label.classList.add("wrong");
  });

  feedback.classList.remove("hidden");
  feedback.classList.add(isCorrect ? "success" : "error");
  feedback.innerHTML = isCorrect
    ? `<strong>Bonne réponse.</strong><br>${current.explanation}`
    : `<strong>Mauvaise réponse.</strong><br>La bonne réponse était : <strong>${current.answers[current.correct]}</strong>.<br>${current.explanation}`;

  scoreCounter.textContent = score;
  const percentage = Math.round(((currentIndex + 1) / currentQuestions.length) * 100);
  progressFill.style.width = `${percentage}%`;
  if (progressText) progressText.textContent = `${percentage} %`;
  validateBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  nextBtn.textContent = currentIndex === currentQuestions.length - 1 ? "Voir le résultat" : "Question suivante";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= currentQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  progressFill.style.width = "100%";
  if (progressText) progressText.textContent = "100 %";

  const percentage = Math.round((score / currentQuestions.length) * 100);
  finalScore.textContent = `${score} / ${currentQuestions.length} — ${percentage} %`;

  if (percentage >= 85) {
    finalMessage.textContent = "Très bon niveau : tu maîtrises bien les points clés du cours.";
  } else if (percentage >= 65) {
    finalMessage.textContent = "Niveau correct : relis surtout les notions où tu as hésité.";
  } else if (percentage >= 45) {
    finalMessage.textContent = "Il faut consolider : reprends les définitions et les pièges classiques.";
  } else {
    finalMessage.textContent = "Reprends la fiche de révision puis refais le QCM en mode aléatoire.";
  }

  resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showReview() {
  reviewCard.classList.remove("hidden");
  reviewList.innerHTML = "";

  userAnswers.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <h3>${index + 1}. ${item.question}</h3>
      <p><strong>Catégorie :</strong> ${item.category}</p>
      <p class="${item.isCorrect ? "good" : "bad"}"><strong>Ta réponse :</strong> ${item.answers[item.selected]}</p>
      <p class="good"><strong>Bonne réponse :</strong> ${item.answers[item.correct]}</p>
      <p><strong>Explication :</strong> ${item.explanation}</p>
    `;
    reviewList.appendChild(div);
  });

  reviewCard.scrollIntoView({ behavior: "smooth" });
}

startBtn.addEventListener("click", () => startQuiz(false));
randomBtn.addEventListener("click", () => startQuiz(true));
validateBtn.addEventListener("click", validateAnswer);
nextBtn.addEventListener("click", nextQuestion);
retryBtn.addEventListener("click", () => startQuiz(false));
reviewBtn.addEventListener("click", showReview);

questionCounter.textContent = `0 / ${questions.length}`;
questionTotal.textContent = questions.length;
themeTotal.textContent = new Set(questions.map(question => question.category)).size;
if (progressText) progressText.textContent = "0 %";
