const makeChange = cents => {
    let finalQuarters = ''
    let finalDimes = ''
    let finalNickels = ''
    let finalPennies = ''

    let Q = 0
    let D = 0
    let N = 0
    let P = 0



    const quarters = num => {
        while (num >= 0) {
            num -= 25
            Q++
        }
        // console.log(Q - 1)
        cents -= (Q - 1) * 25
        // console.log(cents)
        Q = `${Q - 1} Q`
    }

    const dimes = num => {
        while (num >= 0) {
            num -= 10
            D++
        }
        // console.log(Q - 1)
        cents -= (D - 1) * 10
        // console.log(cents)
        D = `${D - 1} D`
    }

    const nickels = num => {
        while (num >= 0) {
            num -= 10
            N++
        }
        // console.log(Q - 1)
        cents -= (N - 1) * 5
        // console.log(cents)
        N = `${N - 1} N`
    }

    const pennies = num => {
        while (num >= 0) {
            num --
            P++
        }
        // console.log(Q - 1)
        cents -= (P - 1) 
        // console.log(cents)
        P = `${P - 1} P`
    }

    quarters(cents)
    dimes(cents)
    nickels(cents)
    pennies(cents)


    console.log(Q)
    console.log(D)
    console.log(N)
    console.log(P)

}

makeChange(137)

const makeChange2 = (cents, curr) => {
    const finalArray = []
    for (let i = 0; i < curr.length; i++) {
        finalArray.push(Math.floor(cents/curr[i]))
        cents = cents % curr[i]
    }
    console.log(finalArray)
}

makeChange2(137, [25, 10, 5, 1])