// myName - ваше имя
// programmingLanguage - язык програамирования
// courseCreatorName - создатель данного курса
// reasonText - причина, почему вы хотите стать веб-разработчиком
// numberOfMonth - количество месяцев, которое вы уделили изучению JavaScript до начала курса

const myName = "Имя";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Ян Олимов";
const reasonText = "хочу работать, независя от моего местоположения";
const numberOfMonth = 6;

let myInfoText = `Всем привет! Меня зовут, ${myName}.
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев.
Я уверен(а), что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll(
  programmingLanguage,
  programmingLanguage.toLowerCase()
);
myInfoText = myInfoText.replaceAll('курс', 'КУРС');

console.log("myInfoText", myInfoText);
console.log("length", myInfoText.length);
console.log("1-й", myInfoText[0]);
console.log("последний", myInfoText[myInfoText.length - 1]);