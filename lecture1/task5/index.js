// myName - ваше имя
// programmingLanguage - язык програамирования
// courseCreatorName - создатель данного курса
// reasonText - причина, почему вы хотите стать веб-разработчиком
// numberOfMonth - количество месяцев, которое вы уделили изучению JavaScript до начала курса

const myName = 'Имя';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Ян Олимов';
const reasonText = 'хочу работать, независя от моего местоположения';
const numberOfMonth = 2;

const resultString = `Всем привет! Меня зовут, ${myName}.
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а).
Я уверен(а), что пройду данный курс до конца!
`;
console.log(resultString);