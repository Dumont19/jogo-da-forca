let attempts = 6
let dynamicList = []
let sortedCategory
let sortedWord

const words = [
    word001 = {
        name: "IRLANDA",
        category:"LUGARES"
    },
    word002 = {
        name: "EQUADOR",
        category:"LUGARES"
    },
    word003 = {
        name: "CHILE",
        category:"LUGARES"
    },
    word004 = {
        name: "INDONESIA",
        category:"LUGARES"
    },
    word005 = {
        name: "MALDIVAS",
        category:"LUGARES"
    },
    word006 = {
        name: "INGLATERRA",
        category:"LUGARES"
    },
    word007 = {
        name: "GROELANDIA",
        category:"LUGARES"
    },
    word008 = {
        name: "UZBEQUISTAO",
        category:"LUGARES"
    },
    word009 = {
        name: "INDONESIA",
        category:"LUGARES"
    },
    word010 = {
        name: "CREGUENHEM",
        category:"LUGARES"
    },
    word011 = {
        name: "BICICLETA",
        category:"TRANSPORTE"
    },
    word012 = {
        name: "LANCHA",
        category:"TRANSPORTE"
    },
    word013 = {
        name: "NAVIO",
        category:"TRANSPORTE"
    },
    word014 = {
        name: "TELEFERICO",
        category:"TRANSPORTE"
    },
    word015 = {
        name: "MOTOCICLETA",
        category:"TRANSPORTE"
    },
    word016 = {
        name: "BARCO",
        category:"TRANSPORTE"
    },
    word017 = {
        name: "AERONAVE",
        category:"TRANSPORTE"
    },
    word018 = {
        name: "TREM",
        category:"TRANSPORTE"
    },
    word019 = {
        name: "CAIAQUE",
        category:"TRANSPORTE"
    },
    word020 = {
        name: "FUNICULAR",
        category:"TRANSPORTE"
    },
    word021 = {
        name: "XICARA",
        category:"OBJETOS"
    },
    word022 = {
        name: "MOEDA",
        category:"OBJETOS"
    },
    word023 = {
        name: "ESPARADRAPO",
        category:"OBJETOS"
    },
    word024 = {
        name: "SINO",
        category:"OBJETOS"
    },
    word025 = {
        name: "CHUVEIRO",
        category:"OBJETOS"
    },
    word026 = {
        name: "TAMBORETE",
        category:"OBJETOS"
    },
    word027 = {
        name: "LAMPADA",
        category:"OBJETOS"
    },
    word028 = {
        name: "BOCAL",
        category:"OBJETOS"
    },
    word029 = {
        name: "CORTINA",
        category:"OBJETOS"
    },
    word030 = {
        name: "LAPIS",
        category:"OBJETOS"
    },
    word031 = {
        name: "MELANCIA",
        category:"ALIMENTOS"
    },
    word032 = {
        name: "AMENDOIM",
        category:"ALIMENTOS"
    },
    word033 = {
        name: "ESFIRRA",
        category:"ALIMENTOS"
    },
    word034 = {
        name: "GOROROBA",
        category:"ALIMENTOS"
    },
    word035 = {
        name: "JANTAR",
        category:"ALIMENTOS"
    },
    word036 = {
        name: "SABOROSO",
        category:"ALIMENTOS"
    },
    word037 = {
        name: "DESJEJUM",
        category:"ALIMENTOS"
    },
    word038 = {
        name: "MASTIGAR",
        category:"ALIMENTOS"
    },
    word039 = {
        name: "ENGOLIR",
        category:"ALIMENTOS"
    },
    word040 = {
        name: "DOCERIA",
        category:"ALIMENTOS"
    },
    word040 = {
        name: "DRAGAO",
        category:"ANIMAIS"
    },
    word041 = {
        name: "GALINHA",
        category:"ANIMAIS"
    },
    word042 = {
        name: "PAVAO",
        category:"ANIMAIS"
    },
    word043 = {
        name: "CAMELO",
        category:"ANIMAIS"
    },
    word044 = {
        name: "PERU",
        category:"ANIMAIS"
    },
    word045 = {
        name: "ZEBRA",
        category:"ANIMAIS"
    },
    word046 = {
        name: "DROMEDARIO",
        category:"ANIMAIS"
    },
    word047 = {
        name: "CALANGO",
        category:"ANIMAIS"
    },
    word048 = {
        name: "SAGUI",
        category:"ANIMAIS"
    },
    word049 = {
        name: "LAGARTIXA",
        category:"ANIMAIS"
    },
    word050 = {
        name: "HIPOPOTAMO",
        category:"ANIMAIS"
    },
    word051 = {
        name: "A ERA DO GELO",
        category:"TV E CINEMA"
    },
    word052 = {
        name: "HOMEM ARANHA",
        category:"TV E CINEMA"
    },
    word053 = {
        name: "CASA MONSTRO",
        category:"TV E CINEMA"
    },
    word054 = {
        name: "TELA QUENTE",
        category:"TV E CINEMA"
    },
    word055 = {
        name: "STRANGER THINGS",
        category:"TV E CINEMA"
    },
    word056 = {
        name: "O REI DO GADO",
        category:"TV E CINEMA"
    },
    word057 = {
        name: "MULHER MARAVILHA",
        category:"TV E CINEMA"
    },
    word058 = {
        name: "O INCRIVEL HULK",
        category:"TV E CINEMA"
    },
    word059 = {
        name: "BOB ESPONJA",
        category:"TV E CINEMA"
    },
    word060 = {
        name: "PANICO NA TV",
        category:"TV E CINEMA"
    }
]

createSecretWord()
function createSecretWord(){
    const indexWord = parseInt(Math.random() * words.length)
    
    sortedWord = words[indexWord].name
    sortedCategory = words[indexWord].category
}

renderWord()
function renderWord(){
    const category = document.querySelector('.category')
    category.innerHTML = sortedCategory

    const secretWord = document.querySelector('.secret-word')
    secretWord.innerHTML = ''

    for (i = 0; i < sortedWord.length; i++) {  
        if (dynamicList[i] == undefined) {
            if (sortedWord[i] == ' ') {
                dynamicList[i] = ' '
                secretWord.innerHTML = `${secretWord.innerHTML}<div class='letter-space'>${dynamicList[i]}</div>`
            } else {
                dynamicList[i] = '&nbsp;'
                secretWord.innerHTML = `${secretWord.innerHTML}<div class='letters'>${dynamicList[i]}</div>`
            }

            
            } else {
                if (sortedWord[i] == ' ') {
                    dynamicList[i] = ' '
                    secretWord.innerHTML = `${secretWord.innerHTML}<div class='letter-space'>${dynamicList[i]}</div>`
                } else {
                    secretWord.innerHTML = `${secretWord.innerHTML}<div class='letters'>${dynamicList[i]}</div>`
                    }     
        }
    } 
}

function verifyChoosenLetter(letter){
    document.getElementById('key-' + letter).disabled = true
    if (attempts > 0) {
        changeLetterStyle('key-' + letter)
        compareLists(letter)
        renderWord()
        console.log(letter)
    }    
}

function changeLetterStyle(key){
    document.getElementById(key).style.background = '#024bb8'
    document.getElementById(key).style.color = '#f3f3f3'
}

function compareLists(letter) {
    const position = sortedWord.indexOf(letter)
    if (position >= 0) {
        for (i = 0; i < sortedWord.length; i++) {
            if (sortedWord[i] == letter) {
                dynamicList[i] = letter
            }
        }
    } else {
        attempts--
        console.log(attempts)
        loadGallowImage()
    }

    if (attempts == 0) {
        openModal(`Ops, não foi dessa vez... A palavra secreta era ${sortedWord}`)
        restartGame()
    }
    
    let win = true

    for (i = 0; i < sortedWord.length; i++) {
        if (sortedWord[i] != dynamicList[i]) {
            win = false
        }
    }

    if (win == true) {
        openModal(`Parabéns, você venceu!`)
        restartGame()
        attempts = 0
    }
}

function loadGallowImage(){
    switch (attempts) {
        case 5:
            document.querySelector('.img').style.background  = "url('./img/forca01.png')"
            break
        case 4:
            document.querySelector('.img').style.background  = "url('./img/forca02.png')"
            break
        case 3:
            document.querySelector('.img').style.background  = "url('./img/forca03.png')"
            break
        case 2:
            document.querySelector('.img').style.background  = "url('./img/forca04.png')"
            break
        case 1:
            document.querySelector('.img').style.background  = "url('./img/forca05.png')"
            break
        case 0:
            document.querySelector('.img').style.background  = "url('./img/forca06.png')"
            break
        default:
            document.querySelector('.img').style.background  = "url('./img/forca.png')"
            break
    }
}

function openModal(title) {
    let modaltitle = document.getElementById("exampleModalLabel")
    modaltitle.innerText = title

    $("#myModal").modal({
        show: true
    })
}

function restartGame() {
    const btn = document.querySelector('.btn')
    btn.addEventListener('click', () => location.reload())
}

let btnRestart = document.querySelector("#btn-restart")
btnRestart.addEventListener('click', () => location.reload())

