var editor = CodeMirror.fromTextArea(document.getElementById("java-editor"), {
    lineNumbers: true, // Muestra los números de línea
    mode: "text/x-java", // Especifica el modo Java
    theme: "material ocean" // Opcional: Elige un tema de colores
});