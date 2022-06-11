new TypeIt("#texto", {
  speed: 100,
  waitUntilVisible: true,
  loop: true

})
  .type("Full Stack Jr", { delay: 2000 })
  .delete(13)
  .type("Front-End Jr", { delay: 2000 })
  .pause(1000)
  .go();

new TypeIt("#sobre", {
  speed: 40,
  waitUntilVisible: true,

})
  .type(`Sou Lucas da Silva, tenho 32 anos, Sou Desenvolvedor Web em busca da primeira oportunidade na área desde que comecei a estudar desenvolvimento, meu foco é no Front-End. Venho aprimorando meus
              conhecimentos em <strong style="color:yellow;">HTML</strong>,<strong style="color:yellow;">CSS</strong> e <strong style="color:yellow;">JAVASCRIPT</strong>, e sou aluno em <strong style="color:yellow;">Desenvolvimento Full Stack Jr</strong>.<br><br>Estou em uma transição de carreira para a <span style="color:yellow">área tech</span>,preferencialmente no desenvolvimento
              de sistemas front-end, na qual tenho desejo de atuar profissionalmente. Cada dia fica mais
              estuasiasmante por cada conhecimento que venho adquirindo nessa nova trajetoria profissional.`
  )

  .go();

