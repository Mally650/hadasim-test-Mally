the HMO- covid19 system

the system has been developed for the used of the HMO's nurses, to get ,store and update a reelevate covid19 details.
the database stores a data about the HMO's patients, their vaccinations and morbidity times.

the system is built in:
Client- frontend: react.js
Server- backend: node.js
Database: mysql

Instructions:
the home page: shows the patients in the HMO, there are two button next to each patient, which one is for deleting the current patient from the db,
and the second one for viewing its details. pressing on the id of each patients lead to the details page too.
in the bottom of the home page there a button which leading to adding new patient page, and the statistics calculations.

the patient page:  is showing the vaccinations and morbidity of the current patient. and options to delete and add new data.(
(in the vaccinations there is a limitation of 4 vaccinations to patients) and an option to update the patient details.

to download the app:
download the client folder and run in the terminal
{
cd Client/covid19_system
npm start
}
download the server folder and run in the terminal
{
cd Server 
node app.js
}
download mysql program and then download the db folder and run the script in the mysql.
/*for any problem let me know on the comments*/


מערכת קופת חולים covid19

המערכת פותחה לשימוש האחיות של קופת החולים, כדי לקבל, לאחסן ולעדכן פרטים לגבי קוביד19.
המאגר מאחסן נתונים על חולי קופת החולים, החיסונים וזמני התחלואה שלהם.

המערכת מובנית ב:
חזית לקוח: react.js
שרת אחורי: node.js
מסד נתונים: mysql

הוראות:
דף הבית: מציג את המטופלים בקופת החולים, יש שני כפתורים ליד כל מטופל, אשר אחד מיועד למחיקת המטופל הנוכחי מה-db,
והשני לצפייה בפרטים שלו. לחיצה על המזהה של כל מטופל מובילה גם לדף הפרטים.
בתחתית עמוד הבית יש כפתור שמוביל להוספת דף מטופל חדש, וחישובי הסטטיסטיקה.

דף המטופל: מציג את החיסונים והתחלואה של המטופל הנוכחי. ואפשרויות למחוק ולהוסיף נתונים חדשים.(
(בחיסונים קיימת הגבלה של 4 חיסונים למטופלים) ואפשרות לעדכון פרטי המטופל.

להורדת האפליקציה:
הורד את תיקיית הלקוח והפעל בטרמינל
{
cd Client/covid19_system
npm start
}
הורד את תיקיית השרת והפעל בטרמינל
{
cd Server 
node app.js
}
הורד את תוכנת mysql ולאחר מכן הורד את תיקיית db והפעל את הסקריפט ב-mysql.
/*לכל בעיה תודיע לי בתגובות*/