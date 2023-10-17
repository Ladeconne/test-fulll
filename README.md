# Test fulll

Ce projet inclut mon interprétation de l'exercice décrit ici:
https://github.com/fulll/hiring/blob/master/Backend/ddd-and-cqrs-junior.md

ainsi que ma réponse au fizzbuzz décrit ici:
https://github.com/fulll/hiring/blob/master/Algo/fizzbuzz.md

## Démarrage de l'application

1/ Copiez le fichier .env.sample et renommez-le en .env.

2/ Exécutez la commande suivante dans votre terminal :
docker-compose up -d
--> Cela créera un conteneur contenant l'instance de MongoDB et un autre contenant une instance de mongoExpress qui vous permettra de consulter les données dans la base de données.

3/ Exécutez la commande suivante dans votre terminal :
npm i
--> Cela créera le fichier package-lock et téléchargera tous les modules nécessaires.

4/ Exécutez la commande suivante dans votre terminal :
npm run build
--> Cela créera un nouveau fichier dist, donnera l'accès en écriture au fichier commands.js et regroupera l'application afin de pouvoir exécuter des commandes en ligne.

5/ Exécutez les commandes suivantes pour tester l'application :
./fleet create <userId> # renvoie l'ID du parcours sur la sortie standard
./fleet register-vehicle <fleetId> <vehiclePlateNumber>
./fleet localize-vehicle <fleetId> <vehiclePlateNumber> lat lng [alt]

## Note personnelle sur l'exercice

Dans le cadre de l'exercice que j'ai réalisé pour votre entreprise, j'ai d'abord pris le temps de me familiariser avec les architectures basées sur les principes de CQRS (Command Query Responsibility Segregation), BDD (Behavior-Driven Development) et DDD (Domain-Driven Design). Ces concepts m'étaient nouveaux, et je tiens à vous remercier de m'avoir donné l'opportunité de les découvrir, car cela m'a permis d'approfondir ma compréhension de la clean architecture, notamment en ce qui concerne les interdépendances entre les services tiers, en particulier la base de données, ainsi que sur le développement orienté événements facilité par le concept de CQRS.

J'ai saisi l'occasion de l'exercice pour mettre en pratique ces nouveaux concepts et cette architecture. Dans un premier temps, j'ai développé l'application en utilisant la programmation orientée objet, bien que ce ne soit pas ma spécialité, puis je l'ai retravaillée en adoptant une approche de programmation fonctionnelle.

J'aurais souhaité consacrer plus de temps à peaufiner et à optimiser le projet, ainsi qu'à approfondir ma compréhension des concepts sous-jacents à l'architecture de domaine (domain/app/infra) et à la mise en place d'un système d'événements pour les opérations d'écriture en base de données. Malheureusement, en ce moment, je ne dispose que de peu de temps supplémentaire pour y consacrer. Cependant, je serais ravi de répondre à toutes vos questions concernant les choix que j'ai effectués pendant la réalisation de cet exercice, et je suis ouvert à recevoir vos commentaires et suggestions à son sujet.
