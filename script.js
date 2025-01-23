let input = document.querySelector("input")
let p = document.querySelector("p")

const contatos = [
    {name: "Mae", number: "1298128-0328" },
    {name: "Kevin", number: "1299106-2204" },
    {name: "Kaue", number: "12991708290" },
    {name: "Vo Kaka", number: "1299663-8004" },
    {name: "Vo Kika", number: "12 99670-9648" },
]

function procurar(){
    
    for( let i = 0; i < contatos.length; i++){
        if(input.value === contatos[i].name){
            p.innerHTML = `Nome: ${contatos[i].name} / Número: ${contatos[i].number}`

            break
        }
    }
}