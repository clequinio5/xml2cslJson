# XML vers CSL-JSON

## Que fait ce script?

Le script prend en entrée un xml généré par Athena et fournit en sortie un csl-json qui peut être chargé dans Zotero


## Usage

1) Deposer le ou les fichiers xml issus d'Athena dans ./AthenaXML2CSLJson/in
2) Lancer le script en double cliquant sur ./AthenaXML2CSLJson/launch.bat
3) Importer dans Zotero le ou les fichiers .json ayant été générés dans ./AthenaXML2CSLJson/out


## Chaine de trantement de la donnée

XML Athena -----(xml-js)-----> JSON ------(jsonata)--------> CSL-JSON

Le XML d'Athena est dans un premier temps convertit en json grace à la librairie xml-js.
Le json est ensuite manipulé grace à la librairie jsonata pour mettre en forme les champs utiles dans le CSL-JSON.

L'expression jsonata utilisée pour réaliser les transformations est stockée dans jsonata-mapping.txt

Elle peut etre modifiée simplement grace à l'outils en ligne 

https://try.jsonata.org/

