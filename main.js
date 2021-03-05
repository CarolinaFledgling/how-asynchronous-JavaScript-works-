// // CALLBACK HELL 

// const go = document.querySelector('.go')
// //1. Change the text to 'go' when clicked
// go.addEventListener('click2', function (e) {
//     const el = e.currentTarget;
//     el.textContent = "GO"
//     console.log(el);
//     //2. Make it a circle after 2 seconds
//     setTimeout(function () {
//         el.classList.add('circle');
//         setTimeout(function () {
//             //3.Make is red after 0.5s
//             el.classList.add('red');
//             setTimeout(function () {
//                 //4. Make it square after 0.25s
//                 el.classList.add('square')
//                 setTimeout(function () {
//                     //5. Make is purple after 0.3s
//                     el.classList.remove('red');
//                     el.classList.add('purple')
//                     setTimeout(function () {
//                         //6.fade ou after 0.5s
//                         el.classList.add('fadeOut')
//                     }, 500)
//                 }, 300)
//             }, 250)
//         }, 500)
//     }, 2000)
// })


// // PROMISE 


// function wait(ms = 0) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, ms)

//     })
// }


// function animate(e) {
//     //1. Change the text to 'go' when clicked
//     const el = e.currentTarget;
//     el.textContent = "GO"
//     //2. Make it a circle after 2 seconds
//     wait(200)
//         .then(() => {
//             el.classList.add('circle');
//             return wait(500)
//         })
//         //3.Make is red after 0.5s
//         .then(() => {
//             el.classList.add('red');
//             return wait(250)
//         }).then(() => {
//             //4. Make it square after 0.25s
//             el.classList.add('square')
//             return wait(300)
//         }).then(() => {
//             //5. Make is purple after 0.3s
//             el.classList.remove('red');
//             el.classList.add('purple')
//             return wait(500)
//         }).then(() => {
//             //6.fade ou after 0.5s
//             el.classList.add('fadeOut')
//         })
// }



// go.addEventListener('click', animate)


// // tworze funkcje ktora przyjmuje ileś tam milisekund, zwraca promise i  ten promise zwraca  resolve po okreslonej ilości czasu ms

// function wait(ms = 0) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, ms)

//     })
// }

// // wait(3000).then(() => {
// //     console.log("done!")
// // })



// // bake a cake ! Promise  // jesli chce zrobic kilka ciast z roznymi polewami czyli najpierw robie cynamonowe , po 5s robie czekoladowe , truskawkowe itd  mam tylko jeden piec , czyli zrobie jedno ciasto i musze poczekac 

// function bakeCake(icing) {
//     return new Promise(function (resolve, reject) {
//         // reject jeśli ktoś chciał ciasto z szynkowa polewą 
//         if (icing.includes('ham')) {
//             reject('fuuuj ciasto z szynką ')
//         }
//         // poczekajmy 5s az ciasto z polewa będzie gotowe 
//         setTimeout(function () {
//             // kiedy jesteś już gotowy , możesz dac nam resolve
//             resolve(`here is your cake 🎂 with ${icing}`);
//         }, 1000);
//         // jeśli poszło coś nie tak zrób reject

//     });

// }



// const CinnamonCakePromise = bakeCake('cinnamon frosting') // wywołanie funkcji bakeCake zwraca nam Obietnice, aby dostac sie to resolve value , uzywamy then który tez przyjmuje callback i zwraca obietnice  

// const ChocolatyCakePromise = bakeCake('chocolaty frosting')

// CinnamonCakePromise.then(function (cake) {
//     console.log(cake)
// })
// bakeCake('cinnamon frosting')
//     .then(function (cake) {
//         console.log(cake)
//         return bakeCake('chocolaty frosting')
//     }).then(function (cake) {
//         console.log(cake)
//         return bakeCake('strawberry frosting')
//     }).then(function (cake) {
//         console.log(cake)
//         return bakeCake('vanillic frosting')
//     }).then(function (cake) {
//         console.log(cake)
//         return bakeCake('ham')
//     }).then(function (cake) {
//         console.log(cake)
//         return bakeCake('raspberry frosting')
//     }).catch(handleError)



// function handleError(err) {
//     console.log(err);
//     console.log('oh no !')
// }



// // Ćwiczenia z Markiem - mentorem (przykład z lekcji )

// const fn1 = (a) => {
//     return 'b' + a
// }

// const fn2 = (c) => {
//     return c
// }

// const fn3 = (b) => {
//     return 'b'
// }

// const test = () => {
//     // Promise.resolve('a')=== new Promise((resolve)=> resolve('a')) to samo 
//     const naszPromise = Promise.resolve('a')

//     naszPromise.then((zmienna) => {
//             console.log(zmienna)
//             return 'c' // to nam mówi Promise.resolved('c')
//         }).then((zmienna2) => {
//             console.log(zmienna2)
//             //undefined poniewaz nie ma return 
//         }).then((zmienna3) => {
//             console.log(zmienna3)
//             // nic nie zostało zwrócone z tej funkcji 
//         }).then(fn3)
//         // pod b też nie ma nic 

//         //fn3 to nasze ((b) => {
//         // return 'b'})

//         .then((zmienna4) => {
//             console.log(zmienna4)
//             return zmienna4
//         }).then(fn2)
//         // (c) => {
//         //     return c ale tutaj jest przekazywana zmienna !! nie zawartość string !!! 
//         // }

//         .then((zmienna3) => {
//             console.log(zmienna3) // tutaj bedzie nasze 'b' 
//         })

// }

// // test()


// // wartość ktora jest zwracana jest owarapowana w PROMISE !!

// function delay(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, time)
//     })
// }

// function displayText(tekst) {
//     return tekst
// }

// function delayAndDisplay() {
//     delay(500)
//         .then(() => {
//             console.log('tekst #1')
//             return delay(500);
//         })
//         .then(() => {
//             console.log('tekst #2')
//             return delay(500);
//         })
//         .then(() => {
//             console.log('tekst #3')
//             return delay(500)
//         }).then(() => {
//             console.log('tekst #4')
//             return delay(500)
//         })
// }

// delayAndDisplay()




// Ćwiczenia z Markiem - mentorem  ( Wersja łatwiejsza wg Marka )
// Opóżnienie wyświetlanego tekstu o ileś sekund 



const display = (tekst) => {
    const display = console.log(`wpisany: ${tekst}`)
    return display
}

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}

function sayHi(name) {
    const greetings = console.log(`cześć, ${name}`)
    return greetings;
}



function delayAndDisplay() {
    delay(5000)
        .then(() => {
            return display(' tekst #1 po 1sekundzie');
        })
        .then(() => {
            return delay(3000);
        })
        .then(() => {
            return display(' tekst #2 po 3sekundach od wyświetlonego tekstu #1')
        })
        .then(() => {
            return delay(1000)
        })
        .then(() => {
            return display('tekst #3')
        })
        .then(() => {
            return delay(2000)
        })
        .then(()=>{
            return sayHi('Karolina')
        })
}

delayAndDisplay()



// zapytac sie o cos 

function delay2(time) {
    return new Promise(function (resolve, rejecet) {
        // setTimeout(resolve, time)
        setTimeout(() => {
            resolve(a)
        }, time)
    })
}

let a = 5;

delay2(2000)
    .then((a) => {
        a = 10;
        console.log(a, 'działa') // chciałabym aby a = 10, było przejete ponizej ?

        return delay2(2000)
    }).then((a) => {
        console.log(a, 'cos innego ')
    })



// Zadanie od Marka wersja rozbudowana 
// powinno wyglądać tak 


Promise.resolve()
    .then(opoznij(500))
    .then(wyswietl())
    .then(opoznij(500))
    .then(wyswietl()) // ile czasu minęło od początku 
    .then(wyswietl())
    .then(wyswietl())
    .then(opozniej(1500))

