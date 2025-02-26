var p = document.getElementById(`id_p`);
console.log(p);

// Captura o evento load da página
window.onload = function() {
    // Localiza o elemento com id "id_p"
    var p = document.getElementById("id_p");
    console.log(p);

    // Configura a propriedade backgroundColor do elemento
    p.style.backgroundColor = "#0000FF";

    // Localiza os elementos a (links) dentro do p
    var links = p.getElementsByTagName("a");

    // Alerta o atributo href do primeiro link
    alert(links[0].href);
}


