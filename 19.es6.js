{
    // spread
    const o = { a: 1 }
    const p = { b: 2 }
    const q = { ...o, ...p }

    console.log(q)

    const a = [1]
    const b = ['hello']
    const c = [...a, 2, ...b]

    console.log(c)
}
// destructuring 
{
    const toDestructure = { a: 1, b: 2, c: 3 }
    const { a, b, ...rest } = toDestructure

    console.log(a, b, rest)
}
// promises 
{
    const p = new Promise((resolve, reject) => {
        resolve(42)
    })

    p.then(number => { console.log(number) })
}

{
    const p = new Promise((resolve, reject) => {
        reject(new Error('an error'))
        //throw new Error('an error')

    }
    )

    p.catch(error => { console.log(error.message) })

}