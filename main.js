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




// // Ćwiczenia z Markiem - mentorem  ( Wersja łatwiejsza wg Marka )
// // Opóżnienie wyświetlanego tekstu o ileś sekund 



// const display = (tekst) => {
//     const display = console.log(`wpisany: ${tekst}`)
//     return display
// }

// function delay(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, time)
//     })
// }

// function sayHi(name) {
//     const greetings = console.log(`cześć, ${name}`)
//     return greetings;
// }



// function delayAndDisplay() {
//     delay(5000)
//         .then(() => {
//             return display(' tekst #1 po 1sekundzie');
//         })
//         .then(() => {
//             return delay(3000);
//         })
//         .then(() => {
//             return display(' tekst #2 po 3sekundach od wyświetlonego tekstu #1')
//         })
//         .then(() => {
//             return delay(1000)
//         })
//         .then(() => {
//             return display('tekst #3')
//         })
//         .then(() => {
//             return delay(2000)
//         })
//         .then(() => {
//             return sayHi('Karolina')
//         })
// }

// delayAndDisplay()



// Przygotuj herbate z promisami 


// function wait(time = 0) {
//     return new Promise((resolve) => {
//         // setTimeout(resolve, time)
//         setTimeout(() => {
//             resolve()
//         }, time)
//     })
// }

// function takeCup() {
//     return console.log(' take a cup ')
// }

// function boilWater() {
//     return console.log(' boil the water ')
// }

// function takeTeabag() {
//     return console.log('put the tea bag in the cup ')
// }

// function takeHotWater() {
//     return console.log('pour water into a cup ')
// }



// function makeTea(flavor) {
//     wait(2000)
//         .then(() => {
//             takeCup()
//             return wait(2000)
//         })
//         .then(() => {
//             boilWater()
//             return wait(3000)
//         })
//         .then(() => {
//             takeTeabag()
//             return wait(1000)
//         })
//         .then(() => {
//             takeHotWater()
//             return (wait(1000))
//         })
//         .then(() => {
//             console.log(' your tea is ready !')
//         })
// }


// makeTea('strawberry') 



// // Zadanie od Marka wersja rozbudowana 
// // powinno wyglądać tak 


// // Promise.resolve()
// //     .then(opoznij(500))
// //     .then(wyswietl())
// //     .then(opoznij(500))
// //     .then(wyswietl()) // ile czasu minęło od początku 
// //     .then(wyswietl())
// //     .then(wyswietl())
// //     .then(opozniej(1500))




// Nauka - Async Await  


// function wait2(ms = 0) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }


// async function go() {
//     console.log('starting');
//     await wait2(3000)
//     console.log('running');
//     await wait2(3000)
//     console.log('ending');
// }

// // go();

// // example #2  Asyn await 



// function getDessert(flavour) {
//     return new Promise((resolve, rejecet) => {
//         if (flavour.includes('sugar')) {
//             rejecet('too much ! , get out ! ')
//         }
//         setTimeout(() => {
//             resolve(`here is your ${flavour} 🍨`)
//         }, 3000)
//     })

// }


// async function getIceCream() {
//     const iceCream1 = await getDessert('chocolate')
//     console.log(iceCream1)
//     const iceCream2 = await getDessert('vanilla')
//     console.log(iceCream2)
//     try {
//         const iceCream3 = await getDessert('sugar')
//         console.log(iceCream3)

//     } catch (err) {
//         console.log('error,', err)
//     }
// }


// function handleError(err) {
//     console.log('oh noo ', err)
// }

// // getIceCream().catch(handleError)
// getIceCream()



// // what if we want get 2 desserts at the same time 


// async function getIceCream2() {
//     const iceCreamPromise1 = getDessert('chocolate')
//     const iceCreamPromise2 = getDessert('vanilla')

//     const iceCreams = await Promise.all([iceCreamPromise1, iceCreamPromise2])
//     console.log(iceCreams)
//     // destrukturtyzacja 
//     const [chocolate, vanilla] = await Promise.all([iceCreamPromise1, iceCreamPromise2])
//     console.log(chocolate, vanilla)
// }

// getIceCream2()




// // // Asyn await animate 


// function wait3(ms = 0) {
//     return new Promise(function (resolve, rejecet) {
//         setTimeout(resolve, ms)

//     })
// }



// async function animate2(e) {
//     //1. Change the text to 'go' when clicked
//     const el = e.currentTarget;
//     el.textContent = "GO"
//     //2. Make it a circle after 2 seconds
//     await wait3(200)
//     el.classList.add('circle');
//     await wait3(500)
//     el.classList.add('red');
//     await wait3(250)
//     el.classList.add('square')
//     await wait3(300)
//     el.classList.add('purple')
//     el.classList.remove('red');
//     await wait3(500)
//     el.classList.add('fadeOut')
// }

// const go2 = document.querySelector('.go')

// go2.addEventListener('click', animate2)




//  Asyn await 

const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1.get user data')
            resolve({
                name: 'Kasia'
            })

        }, 1000)
    })
}

const registerUser = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. register user')
            resolve({
                name: user.name,
                id: 23,
            })
        }, 2000)
    })
}

const sendEmail = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. send cofirmation email to', user.name, 'id', user.id)
            resolve()
        }, 2000)
    })
}

// getUserData()
//     .then(user => {
//         console.log(user)
//         return registerUser(user)
//     })
//     .then(registerUser => {
//         console.log(registerUser)
//         return sendEmail(registerUser)
//     })
//     .then(() => {
//         console.log('end')
//     })

// async function someAsyncFunctions() { // pojemnik na asynchroniczne operacje i nie asynchroniczne 
//     const userData = await getUserData() // await mówi .. poczekaj w tym miejscu az ta funkcja się wykona, dopiero jak sie wykona leć dalej , zapisz do zmiennej to co zwraca ta funkcja  
//     const registeredUser = await registerUser(userData) // zaczekaj aż to się wykona żeby lecieć dalej ...
//     await sendEmail(registeredUser) // poczekaj aż e-mail się wyśle i dopiero leć dalej 
//     // await może być użyte tylko w asynchronicznej funkcji 
//     console.log('end')
// }



// someAsyncFunctions()






// Asyn Await wyłapywanie błędów 

// const getUser = () => {
//     return new Promise((resolve, rejecet) => {
//         setTimeout(() => {
//             console.log('1.get user data')
//             rejecet('some error')
//             resolve({
//                 name: 'Kasia',
//                 age: 24,
//                 city: 'Jaworzno'
//             })

//         }, 1000)
//     })
// }


// const userInfo = async () => {
//     try { // spróbuje pobrac uzytkownika i go wykonsolować
//         const userDetails = await getUser();
//         console.log(userDetails)
//     } catch (err) {
//         console.log(err)
//     } finally {
//         console.log(' finalnie zawsze normalnie działa, czy jest bład czy nie  ')
//     }

// }

// userInfo()



const getInfo = () => {
    const user = null;

    if (user) {
        return user;
    } else {
        throw 'user not found' // można wyrzuć tutaj wszystko obiekt, liczbe itp 
    }
}

const asynFn = async () => {
    try {
        const user = getInfo()
        console.log(user)
    } catch (err) {
        console.log('error:' + err)
    }
}


asynFn()