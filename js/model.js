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
        }, {
            id: 68,
            question: 'угол',
            answer: 'der Winkel'
        }, {
            id: 69,
            question: 'скрипач',
            answer: 'der Geigenspieler'
        }, {
            id: 70,
            question: 'подвал',
            answer: 'das Gewölbe'
        }, {
            id: 71,
            question: 'лоно, колени сидящего',
            answer: 'der Schoß'
        }, {
            id: 72,
            question: 'участие',
            answer: 'die Teilnahme'
        }, {
            id: 73,
            question: 'участвовать в чем-л',
            answer: 'an etwas /Dat./ teilnehmen'
        }, {
            id: 74,
            question: 'пробка',
            answer: 'der Pfropfen'
        }, {
            id: 75,
            question: 'внешность',
            answer: 'das Äußern'
        }, {
            id: 76,
            question: 'протягивать',
            answer: 'reichen'
        }, {
            id: 77,
            question: 'бросать',
            answer: 'werfen'
        }, {
            id: 78,
            question: 'грех',
            answer: 'die Sünde'
        }, {
            id: 79,
            question: 'поднимать',
            answer: 'heben'
        }, {
            id: 80,
            question: 'подкарауливать',
            answer: 'lauern'
        }, {
            id: 81,
            question: 'схватить',
            answer: 'greifen'
        }, {
            id: 82,
            question: 'звук',
            answer: 'der Klang'
        }, {
            id: 83,
            question: 'звучать',
            answer: 'klingen'
        }, {
            id: 84,
            question: 'страсть',
            answer: 'die Leidenschaft'
        }, {
            id: 85,
            question: 'страдать',
            answer: 'leiden'
        }, {
            id: 86,
            question: 'присоединяться',
            answer: 'sich gesellen'
        }, {
            id: 87,
            question: 'подмастерье',
            answer: 'der Geselle'
            }, {
            id: 88,
            question: 'приезжий',
            answer: 'der Ankömmling'
            }, {
            id: 89,
            question: 'прибывать',
            answer: 'ankommen'
            }, {
                id: 90,
                question: 'заходить к кому-либо',
                answer: 'bei jemandem einkehren'
            }, {
                id: 91,
                question: 'разнообразный',
                answer: 'vielseitig'
            }, {
                id: 92,
                question: 'пахнуть',
                answer: 'riechen'
            }, {
                id: 93,
                question: 'елка',
                answer: 'die Tanne'
            }, {
                id: 94,
                question: 'применимый',
                answer: 'einsetzbar'
            }, {
                id: 95,
                question: 'нет',
                answer: 'hab ich nicht'
            }, {
                id: 96,
                question: 'правда?',
                answer: 'hab ich Recht?'
            }, {
                id: 97,
                question: 'задний план',
                answer: 'der Hintergrund'
            }, {
                id: 98,
                question: 'вчерашний',
                answer: 'gestrig'
            }, {
                id: 99,
                question: 'вчерашнee',
                answer: 'gestriges'
            }, {
                id: 100,
                question: 'вчерашние',
                answer: 'gestrigen'
            }, {
                id: 101,
                question: 'реклама',
                answer: 'die Werbung',
            }, {
                id: 102,
                question: 'для этого',
                answer: 'dazu'
            }, {
                id: 103,
                question: 'осознанность',
                answer: 'die Bewusstheit'
            }, {
                id: 104,
                question: 'появляться',
                answer: 'erscheinen'
            }, {
                id: 105,
                question: 'начало',
                answer: 'der Ausbruch'
            }, {
                id: 106,
                question: 'вести',
                answer: 'führen'
            }, {
                id: 107,
                question: 'самое позднее',
                answer: 'spätestens'
            }, {
                id: 108,
                question: 'предоставлять',
                answer: 'verschaffen'
            }, {
                id: 109,
                question: 'расслаблять',
                answer: 'entspannen'
            }, {
                id: 110,
                question: 'также',
                answer: 'ebenfalls'
            }, {
                id: 111,
                question: 'служить',
                answer: 'dienen'
            }, {
                id: 112,
                question: 'доверять',
                answer: 'vertrauen'
            }, {
                id: 113,
                question: 'жизнь',
                answer: 'das Leben'
            }, {
                id: 114,
                question: 'строить',
                answer: 'aufbauen'
            }, {
                id: 115,
                question: 'рекомендация',
                answer: 'die Empfehlung'
                }, {
                    id: 116,
                    question: 'влиять',
                    answer: 'beeinflussen'
                }, {
                    id: 117,
                    question: 'всем',
                    answer: 'gesamten'
                }, {
                    id: 118,
                    question: 'после этого',
                    answer: 'danach'
                }, {
                    id: 119,
                    question: 'закрываться',
                    answer: 'schliessen'
                }, {
                    id: 120,
                    question: 'позволять',
                    answer: 'erlauben'
                }, {
                    id: 121,
                    question: 'обогащать',
                    answer: 'bereichern'
                }, {
                    id: 122,
                    question: 'умственный',
                    answer: 'geistig'
                }, {
                    id: 123,
                    question: 'видеть',
                    answer: 'shauten'
                }, {
                    id: 124,
                    question: 'там',
                    answer: 'dort'
                }, {
                    id: 125,
                    question: 'весь',
                    answer: 'ganz'
                }, {
                    id: 126,
                    question: 'распределять',
                    answer: 'verteilen'
                }, {
                    id: 127,
                    question: 'использовать',
                    answer: 'nutzen'
                }, {
                    id: 128,
                    question: 'следующее',
                    answer: 'weiteres'
                }, {
                    id: 129,
                    question: 'сотворять',
                    answer: 'erschaffen'
                }, {
                    id: 130,
                    question: 'успешный',
                    answer: 'erfolgreich'
                }, {
                    id: 131,
                    question: 'направлено',
                    answer: 'gelenkt'
                }, {
                    id: 132,
                    question: 'направлять',
                    answer: 'lenken'
                }, {
                    id: 133,
                    question: 'обещать',
                    answer: 'vershpeichen'
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


