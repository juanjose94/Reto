module.exports = {
  template: require('./pantallaInicio.html'),
  controller: pantallaInicio
};

function pantallaInicio($scope, Api, $log) {
  this.scope = $scope;
  this.Api = Api;
  this.log = $log;
  this.scope.holamundo = 'hola mundo asdadsa';
  this.scope.lista = [];
}

pantallaInicio.prototype = {
  crearTarea: function () {
    var esta = this;
    var id = esta.scope.lista.length + 1;
    var texto = esta.scope.input;
    if (angular.isDefined(texto) && texto !== '') {
      var item = {id: id, name: texto};
      esta.scope.lista.push(item);
      this.log.log(esta.scope.lista);
      this.log.log(id);
      esta.scope.input = item.texto;
    }
  },

  limpiarLista: function () {
    var esta = this;
    esta.scope.lista = [];
    esta.log.log('funciona');
  },

  enviarLista: function () {
    var esta = this;
    var path = 'lista';
    var dato = esta.scope.lista;
    esta.log.log('Imprimiendo dato');
    esta.log.log(dato);
    esta.Api.Data.save({path: path}, dato, function (response) {
      if (response.$resolved) {
        esta.log.log('Se enviaron los datos con exito');
        esta.limpiarLista();
      } else {
        esta.log.log('No se enviaron los datos');
      }
    }, function (error) {
      esta.log.log(error);
      esta.log.log('No se enviaron los datos');
    });
  }
};
