const { createApp } = Vue;

createApp({
  data() {
    return {
      mostrarVeiculos: false,
      veiculos: [
        { nome: "VINCI MODEL V1", imagem: "assets/carro-hero.png" },
        { nome: "VINCI MODEL V5", imagem: "assets/menu-vermelho.png" },
        { nome: "VINCI MODEL V3", imagem: "assets/menu-preto.png" },
        { nome: "VINCI MODEL V4", imagem: "assets/menu-verde.png" },
      ],
    };
  },
}).mount("#app");
