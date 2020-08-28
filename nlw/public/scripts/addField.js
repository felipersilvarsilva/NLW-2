//procura o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// quando clica no botao

//executa uma açao
function cloneField() {
    // duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) /// boolean : true  ou false
    //limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo limpar
    fields.forEach(function(field) {
        //pegar o field  do momento e limpa
        field.value=""       
        
    });
    //colocar na pagina. onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
}


