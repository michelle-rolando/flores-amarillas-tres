// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "¿Cómo comenzamos? Yo no lo sé.", time: 17 },
  { text: "La historia que no tiene fin.", time: 19 },                  
  { text: "Ni ¿cómo llegaste a ser la mujer", time: 26 },               
  { text: "que toda la vida pedí?", time: 27 },                         
  { text: "Contigo hace falta pasión", time: 34 },                            
  { text: "y un toque de poesía, y sabiduría, pues yo", time: 40 },     
  { text: "trabajo con fantasías.", time: 48 },                         
  { text: "¿Recuerdas el día que te canté?", time: 49 },                    
  { text: "Fue un súbito escalofrío", time: 56 },                       
  { text: "Por si no lo sabes te lo diré", time: 59 },                  
  { text: "Yo nunca dejé de sentirlo.", time: 65 },                      
  { text: "Contigo hace falta pasión.", time: 69 },                       
  { text: "No debe fallar jamás.", time: 72 },                          
  { text: "También maestría pues yo", time: 75 },                        
  { text: "trabajo con el corazón.", time: 83 },                        
  { text: "Cantar al amor ya no bastará.", time: 84 },                  
  { text: "Es poco para mí.", time: 91 },                                 
  { text: "Si quiero decirte que nunca habrá", time: 95 },                
  { text: "cosa más bella que tú", time: 101 },                           
  { text: "Cosa más linda que tú", time: 105 },                           
  { text: "única como eres", time: 108 },                                 
  { text: "inmensa cuando quieres", time: 111 },                          
  { text: "¡Gracias por existir!", time: 119 },                          
  { text: "¿Cómo comenzamos? Yo no lo sé.", time: 125 },                     
  { text: "La historia que toca su fin", time: 127 },                     
  { text: "¿Qué es ese misterio que no se fue?", time: 134 },           
  { text: "Lo llevo aquí dentro de mí.", time: 136 },                           
  { text: "Serán los recuerdos que no", time: 143 },                      
  { text: "no dejan pasar la edad", time: 146 },                        
  { text: "Serán las palabras pues yo", time: 149 },                    
  { text: "sabrás mi trabajo es la voz", time: 157 },                         
  { text: "Cantar con amor ya no bastará", time: 158 },                    
  { text: "Es poco para mí.", time: 165 },                                
  { text: "Si quiero decirte que nunca habrá", time: 169 },               
  { text: "cosa más bella que tú", time: 175 },                           
  { text: "Cosa más linda que tú", time: 179 },                           
  { text: "única como eres", time: 182 },                                 
  { text: "inmensa cuando quieres", time: 185 },                          
  { text: "¡Gracias por existir!", time: 193 },                         
  { text: "Cosa más bella que tú", time: 210 },                           
  { text: "Cosa más linda que tú", time: 214 },                           
  { text: "única como eres", time: 217 },                                 
  { text: "inmensa cuando quieres", time: 220 },                          
  { text: "¡Gracias por existir!", time: 228 },                         
  { text: "¡Gracias por existir!", time: 236 },                         
  { text: "Cosa más bella que tú", time: 244 },                         
  { text: "¡Gracias por existir!", time: 248 },                         ];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
