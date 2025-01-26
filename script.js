let input = document.querySelector("input")
let p = document.querySelector("p")

const contatos = [
    { name: "Mae", number: "1298128-0328" },
    { name: "Kevin", number: "1299106-2204" },
    { name: "Kaue", number: "12991708290" },
    { name: "Vo Kaka", number: "1299663-8004" },
    { name: "Vo Kika", number: "12 99670-9648" },
]

function procurar() {
    let i = 0

    while (i < contatos.length) {
        if (input.value.toLowerCase() === contatos[i].name.toLowerCase()) {
            p.innerHTML = `Nome: ${contatos[i].name} / Número: ${contatos[i].number}`

            break
        } else {
            p.innerHTML = "Contato não encontrado"
        }
        i++
    }
}





//for(const contact of contatos){
//    if(input.value.toLowerCase() === contact.name.toLowerCase()){
//       p.innerHTML = `Nome: ${contact.name} / Número: ${contact.number}`
//
//       break
//   }else {
//        p.innerHTML = "Contato não encontrado"
//    }
//}