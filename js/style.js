new Vue({
  el: "#data",
  data: function () {
    return {
      users: [],
      inputdatauser: {},
      msg: true,
      pesquisar: '',
      enable: false
    }
  },
  methods: {
    adicionarUsuario: function () {
      this.enable = true;
      this.inputdatauser = {};
    },
    adicionar: function (datauser) {
      if (this.users.push({
        'name': datauser.name,
        'email': datauser.email,
        'fone': datauser.fone
        })) {
        Swal.fire(
          'Sucesso',
          'Dados inseridos com sucesso.',
          'success'
        )
      }
      if (this.users.length >= 1) {
        this.msg = false;
      }
    },
    edituser: function (datauser) {
      this.enable = false;
      this.index = this.users.indexOf(datauser);
      this.inputdatauser.name = datauser.name;
      this.inputdatauser.email = datauser.email;
      this.inputdatauser.fone = datauser.fone;
    },
    update: function (datauser) {
      Swal.fire(
        'Sucesso!',
        'Dados atualizados com sucesso.',
        'success'
      )
      this.users[this.index].name = datauser.name;
      this.users[this.index].email = datauser.email;
      this.users[this.index].fone = datauser.fone;
      this.inputdatauser = {};
    },
    deleteuser: function (datauser) {
      this.index = this.users.indexOf(datauser);
      Swal.fire({
        title: 'Tem certeza?',
        text: "Você não pode restaurar dados que foram excluídos!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, continuar excluir!'
      }).then((result) => {
        if (result.value) {
          this.users.splice(this.index, 1)
          Swal.fire(
            'Sucesso!',
            'Dados excluídos com sucesso.',
            'success'
          )
        }
        if (this.users.length <= 0) {
          this.msg = true;
        }
      })
    }
  },
  computed: {
    datafilter() {
      if (this.pesquisar) {
        return this.users.filter((item) => {
          return item.name.startsWith(this.pesquisar);
        })
      } else {
        return this.users;
      }
    }
  }
})