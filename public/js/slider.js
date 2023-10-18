let count = 1
document.getElementById("radio1").checked = true

setInterval(function() {
    nextImage()

}, 5000);

function setInitialRadio(clickedCount) {
    count = clickedCount; // Atualiza o valor da variável "count" com o radio clicado
}

function nextImage(){
    count++
    if(count>4){
        count = 1;
    
    }
    document.getElementById("radio" + count).checked = true


}



// MUDAR A COR DO TITULO DE CADA SLIDE
/*
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todos os elementos h2 com a classe "forColorChange"
    const h2Elements = document.querySelectorAll('h2.titulo');
  
    // Iterar por cada elemento h2
    h2Elements.forEach((h2) => {
      // Dividir o conteúdo de texto em palavras
      const words = h2.textContent.split(' ');
  
      // Criar um novo conteúdo usando spans com cores diferentes para cada palavra
      const newContent = words.map(word => `<span style="color: ${getRandomColor()}">${word}</span>`).join(' ');
  
      // Substituir o conteúdo original do elemento h2 com o novo conteúdo
      h2.innerHTML = newContent;
    });
  
    // Função para gerar cores aleatórias (apenas para fins de exemplo)
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  */