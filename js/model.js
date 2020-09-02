let tralivali;
let data;

const courses = document.querySelectorAll('#exampleFormControlSelect1 option');

if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem('data'));
} else {
    data = [{
            id: 0,
            question: 'невероятный',
            answer: 'unglaubliche'
        }, {
            id: 1,
            question: 'окружающая среда',
            answer: 'umfeld'
        }, {
            id: 2,
            question: 'существенный',
            answer: 'wesentlich'
        }, {
            id: 3,
            question: 'научный',
            answer: 'wissenschaftlich'
        }, {
            id: 4,
            question: 'мировоззрение',
            answer: 'weltbuild'
        }, {
            id: 5,
            question: 'смотреть',
            answer: 'gucken'
        }, {
            id: 6,
            question: 'идеальный',
            answer: 'vollkommen'
        }, {
            id: 7,
            question: 'прошлое',
            answer: 'vergangenheit'
        }, {
            id: 8,
            question: 'годный',
            answer: 'dienlich'
        }, {
            id: 9,
            question: 'ставить',
            answer: 'stellen'
        }, {
            id: 10,
            question: 'копытный',
            answer: 'hufen'
        }, {
            id: 11,
            question: 'расслаблять',
            answer: 'entspannen'
        }, {
            id: 12,
            question: 'начинать',
            answer: 'entspinnen'
        }, {
            id: 13,
            question: 'самоуверенный',
            answer: 'selbstandlich'
        }, {
            id: 14,
            question: 'представлять',
            answer: 'vorstellen'
        }, {
            id: 15,
            question: 'мечтать',
            answer: 'traum'
        }, {
            id: 16,
            question: 'творить',
            answer: 'schaffen'
        }, {
            id: 17,
            question: 'отношение',
            answer: 'beziehung'
        }, {
            id: 18,
            question: 'свободный',
            answer: 'locker'
        }, {
            id: 19,
            question: 'грудная клетка',
            answer: 'brustkorb'
        }, {
            id: 20,
            question: 'луч света',
            answer: 'lichtstrahl'
        }, {
            id: 21,
            question: 'отчётливый',
            answer: 'deutlich'
        }, {
            id: 22,
            question: 'благодарность',
            answer: 'dankbarkeit'
        }, {
            id: 23,
            question: 'чувствовать',
            answer: 'empfinden'
        }, {
            id: 24,
            question: 'лечение',
            answer: 'heilung'
        }, {
            id: 25,
            question: 'шаг',
            answer: 'umziehen'
        }, {
            id: 26,
            question: 'выходить',
            answer: 'aussteigen'
        }, {
            id: 27,
            question: 'глубоко',
            answer: 'tief'
        }];
    localStorage.setItem('data', JSON.stringify(data));
}

// localStorage.setItem('data', JSON.stringify(data));



function clearFields() {
    document.querySelector('#question').value = "";
    document.querySelector('#question').focus();
    document.querySelector('#answer').value = "";
}

// csv-file
function downloadCSV() {
    const JsonFields = ["id", "question", "answer"];
    let csvStr = JsonFields.join(",") + "\n";

    data.forEach(element => {
        
        id = element.id;
        question = element.question;
        answer = element.answer;

        csvStr += id + ',' + question + ',' + answer + ',' + "\n";
    })
 
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'output.csv';
    hiddenElement.click();
}

// function downloadCSV(csvStr) {
//     debugger
//     var hiddenElement = document.createElement('a');
//     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
//     hiddenElement.target = '_blank';
//     hiddenElement.download = 'output.csv';
//     hiddenElement.click();
// }

// function downloadCSV(str) {

//     var hiddenElement = document.createElement('a');
//     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(str);
//     hiddenElement.target = '_blank';
//     hiddenElement.download = 'output.csv';
//     hiddenElement.click();
// }


