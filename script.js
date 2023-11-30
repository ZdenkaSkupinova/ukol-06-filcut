/*
Napište funkci, která ořízne nebo prodlouží řetězec.
Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr len kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.

Ahoj, Ještě jsem to poupravila, doufám, že to je lepší. Mrkni, když tak odevzdám. Dáky.


Ahoj Zdeňko, ten úkol vypadá dobře, akorát je tam drobná chybka, kvůli které to nedělá, co bylo zamýšleno. Tím, že máš v "str".length  uvozovky okolo str , se pak neporovnává délka řetězce v proměnné str, ale délka řetězce “str” – vždy tam tedy bude 3. Projeví se to pak třeba na těchto vstupních datech:
Výsledkem fillcut("a", 3)  je “a” místo “..a”
fillcut("dlouhý řetězec", 5)  vrací “dlouhý řetezec” místo “dlouh”



*/

const fillcut = (str, len) => {

    if((str.length + 1) > Number(len)) {
    return str.slice(0, (str.length - str.length + len))

    }else if((str.length + 1) < Number(len)) {   
    return str.padStart(len, ".")

    }else if ((str.length + 1) === Number(len)) {
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