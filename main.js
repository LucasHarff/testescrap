class TaskList {
  constructor() {
    this.titleInput = document.getElementById("messageTitle");
    this.messageInput = document.getElementById("messageBody");
    this.addButton = document.getElementById("addButton");
    this.scrapsField = document.getElementById("scrapsField");

    this.scraps = [];


  }

  registerEvents(){
      this.addButton.onclick = 
  }

  renderScraps(){
      this.scrapsField.innerHTML = ""

      for(const scrap of this.scraps){
          this.scrapsField.innerHTML += this.createScrapCard(scrap.title, scrap.message)
      }
  }
}

createScrapCard(title, message){
    return
    <div class="message-cards card text-white bg-dark m-2">
  <div class="card-header font-weight-bold">${title}</div>
  <div class="card-body">
    <p class="card-text">
      ${message}
    </p>
  </div>
  <div class="w100 d-flex justify-content-end pr-2 pb-2">
    <button class="btn btn-danger mr-1" onclick="deleteCards(${position})" >Excluir</button>
    <button class="btn btn-info"
    onclick="openEditModal(${position})"
    >
    Editar
    </button>
  </div>
</div>
}
