# XML vers CSL-JSON

## Que fait ce script?

Le script prend en entr�e un xml g�n�r� par Athena et fournit en sortie un csl-json qui peut �tre charg� dans Zotero


## Usage

1) Deposer le ou les fichiers xml issus d'Athena dans ./AthenaXML2CSLJson/in
2) Lancer le script en double cliquant sur ./AthenaXML2CSLJson/launch.bat
3) Importer dans Zotero le ou les fichiers .json ayant �t� g�n�r�s dans ./AthenaXML2CSLJson/out


## Chaine de trantement de la donn�e

XML Athena -----(xml-js)-----> JSON ------(jsonata)--------> CSL-JSON

Le XML d'Athena est dans un premier temps convertit en json grace � la librairie xml-js.
Le json est ensuite manipul� grace � la librairie jsonata pour mettre en forme les champs utiles dans le CSL-JSON.

L'expression jsonata utilis�e pour r�aliser les transformations est stock�e dans jsonata-mapping.txt

Elle peut etre modifi�e simplement grace � l'outils en ligne 

https://try.jsonata.org/

