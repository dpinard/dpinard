let arraytopop = [
    'dam',
    'linda',
    'franck',
    "stev\\en",
    'thom%s',
]

function ft_pop(arrayToPop, params) {
    arrayToPop.pop()
    arrayToPop.push(params)
}

ft_pop(arraytopop, 'd4nte')

console.log(arraytopop)