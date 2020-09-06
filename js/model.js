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
        }, {
            id: 28,
            question: 'эхо',
            answer: 'der Widerhall'
        }, {
            id: 29,
            question: 'свистеть',
            answer: 'schwirren'
        }, {
            id: 30,
            question: 'жара',
            answer: 'die Hitze'

        }, {
            id: 31,
            question: 'прямо',
            answer: 'gerade'

        }, {
            id: 32,
            question: 'шагать',
            answer: 'shreiten'
        }, {
            id: 33,
            question: 'молчать',
            answer: 'schweigend'
        }, {
            id: 34,
            question: 'звук',
            answer: 'der Laut'
        }, {
            id: 35,
            question: 'позади',
            answer: 'hinter'

        }, {
            id: 36,
            question: 'пройти насквозь',
            answer: 'durchgehen'

        }, {
            id: 37,
            question: 'внимательно',
            answer: 'aufmerksam'
        }, {
            id: 38,
            question: 'что-то начинать',
            answer: 'etwas antreten'
        }, {
            id: 39,
            question: 'искать',
            answer: 'suchen'
        }, {
            id: 40,
            question: 'становиться',
            answer: 'werden'
        }, {
            id: 41,
            question: 'компания',
            answer: 'der Gesellschaft'
        }, {
            id: 42,
            question: 'насквозь',
            answer: 'hindurch'
        }, {
            id: 43,
            question: 'между',
            answer: 'zwischen'
        }, {
            id: 44,
            question: 'земля',
            answer: 'der Boden'
        }, {
            id: 45,
            question: 'держать',
            answer: 'halten'
        }, {
            id: 46,
            question: 'продолжать',
            answer: 'forsetzen'
        }, {
            id: 47,
            question: 'речь',
            answer: 'die Rede'
        }, {
            id: 48,
            question: 'усердие',
            answer: 'der Eifer'
        }, {
            id: 49,
            question: 'жарить',
            answer: 'braten'
        }, {
            id: 50,
            question: 'нарезать',
            answer: 'tranchieren'
        }, {
            id: 51,
            question: 'видеть',
            answer: 'sehen'
        }, {
            id: 52,
            question: 'опустошать',
            answer: 'ausleer'
        }, {
            id: 53,
            question: 'пустой',
            answer: 'leer'
        }, {
            id: 54,
            question: 'переворачивать',
            answer: 'umkehren'
        }, {
            id: 55,
            question: 'перевернутый',
            answer: 'umgekehrt'
        }, {
            id: 56,
            question: 'записывать',
            answer: 'aufschreiben'
        }, {
            id: 57,
            question: 'ящик',
             answer: 'das Fach'
        }, {
            id: 58,
            question: 'хранить',
            answer: 'aufbewahren'
        }, {
            id: 59,
            question: 'прелестный',
            answer: 'anmutig'
        }, {
            id: 60,
            question: 'организовывать',
            answer: 'veranstalten'
        }, {
            id: 61,
            question: 'темнота',
            answer: 'das Dunkel'
        }, {
            id: 62,
            question: 'богатый',
            answer: 'reich'
        }, {
            id: 63,
            question: 'ветка',
            answer: 'der Zweig'
        }, {
            id: 64,
            question: 'редкий',
            answer: 'sparsam'
        }, {
            id: 65,
            question: 'экономить',
            answer: 'sparen'
        }, {
            id: 66,
            question: 'собирать',
            answer: 'versammeln'
        }, {
            id: 67,
            question: 'столб',
            answer: 'der Pfeiler'
        // }, {
        //     id: ,
        //     question: 'угол',
        //     answer: 'der Winkel'
        // }, {
        //     id: ,
        //     question: 'скрипач',
        //     answer: 'der Geigenspieler'
        // }, {
        //     id: ,
        //     question: 'подвал',
        //     answer: 'das Gewölbe'
        // }, {
        //     id: ,
        //     question: 'лоно, колени сидящего',
        //     answer: 'der Schoß'
        // }, {
        //     id: ,
        //     question: 'участие',
        //     answer: 'die Teilnahme'
        // }, {
        //     id: ,
        //     question: 'участвовать в чем-л',
        //     answer: 'an etwas /Dat./ teilnehmen'
        // }, {
        //     id: ,
        //     question: 'пробка',
        //     answer: 'der Pfropfen'
        // }, {
        //     id: ,
        //     question: 'внешность',
        //     answer: 'das Äußern'
        // }, {
        //     id: ,
        //     question: 'протягивать',
        //     answer: 'reichen'
        // }, {
        //     id: ,
        //     question: 'бросать',
        //     answer: 'werfen'
        // }, {
        //     id: ,
        //     question: 'грех',
        //     answer: 'die Sünde'
        // }, {
        //     id: ,
        //     question: 'поднимать',
        //     answer: 'heben'
        // }, {
        //     id: ,
        //     question: 'подкарауливать',
        //     answer: 'lauern'
        // }, {
        //     id: ,
        //     question: '',
        //     answer: ''
        // }, {
        //     id: ,
        //     question: '',
        //     answer: ''
        // }, {
        //     id: ,
        //     question: '',
        //     answer: ''
        // }, {
        //     id: ,
        //     question: '',
        //     answer: ''
        // }, {
        //     id: ,
        //     question: '',
        //     answer: ''
        // }, {
        //     id: ,
        //     question: '',
        //     answer: ''
        // }, {
        //     id: ,
        //     question: '',
        //     answer: ''
            
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


