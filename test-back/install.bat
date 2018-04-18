REM # Création du package.json

call npm init entry point: (server.js) --force

REM # Ajout des bibliothèques
call npm install express --save
call npm install mongoose --save
call npm install passport --save
call npm install morgan --save
call npm install http-errors --save
call npm install cookie-parser --save
call npm install body-parser --save