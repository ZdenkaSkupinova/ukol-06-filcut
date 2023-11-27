/*
Napište funkci, která ořízne nebo prodlouží řetězec.
Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr len kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.

padStart(targetLength, padString) : Prodlouží řetězec na zadanou délku tak, že na začátek přidá opakování řetězce padString. Hodí se na zarovnávání nebo na formátování čísel.
 (("str".length + 1) === Number(len)) {
    return str.padStart(0, " ")
    } 
document.body.innerHTML = `
<p>${fillcut("honza", 2)}<p/>
<p>${fillcut("kopretina", 4)}<p/>
<p>${fillcut("zub", 10)}<p/>
<p>${fillcut("petr", 9)}<p/>
<p>${fillcut("oko", 3)}<p/>
<p>${fillcut("kara", 4)}<p/>
<p>${fillcut("honza", 2)}<p/>
<p>${fillcut("zub", 10)}<p/>
<p>${fillcut("petr", 9)}<p/>
<p>${fillcut("oko", 3)}<p/>
<p>${fillcut("kara", 4)}<p/>
`


document.body.innerHTML = `
<p>${fillcut("honza", 2)}<p/>
<p>${fillcut("kopretina", 4)}<p/>
<p>${fillcut("zub", 10)}<p/>
<p>${fillcut("petr", 9)}<p/>
<p>${fillcut("oko", 3)}<p/>
<p>${fillcut("kara", 4)}<p/>
`


Ještě jsem plichtila :D Výplňořez :D (alias fillcut, dú volitelné na doma) ze 7. lekce, tady si nejsem jistá, délku spočítá od nuly, přidám, ať je slovo stejně dlouhé jako číslo. Ale na <p>${fillcut("oko", 3)}<p/> mi to nefunguje, to "str" musí být stejné slovo? Mrkni prosím, díky moc. Zd.

Ahoj, Ještě jsem to poupravila, doufám, že to je lepší. Mrkni, když tak odevzdám. Dáky.
*/

const fillcut = (str, len) => {

    if(("str".length + 1) > Number(len)) {
    return str.slice(0, (str.length - str.length + len))

    }else if(("str".length + 1) < Number(len)) {   
    return str.padStart(len, ".")

    }else if (("str".length + 1) === Number(len)) {
    return str 
    }   
}

document.body.innerHTML = `
<p>${fillcut("honza", 3)}<p/>
<p>${fillcut("petr", 9)}<p/>
<p>${fillcut("oko", 3)}<p/>
<p>${fillcut("zub", 10)}<p/>
<p>${fillcut("kara", 4)}<p/>
<p>${fillcut("kopec", 3)}<p/>
`