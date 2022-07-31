"use strict";
const sarah = {
    name: 'Sarah',
    idade: 26,
    casado: true,
    trabalho: 'Desenvolvedora'
};
const maria = {
    name: 'Maria',
    idade: 23,
    casado: false,
    trabalho: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Engenheiro"] = 1] = "Engenheiro";
    Profissao[Profissao["Pintor"] = 2] = "Pintor";
    Profissao[Profissao["Porteiro"] = 3] = "Porteiro";
})(Profissao || (Profissao = {}));
const gabriel = {
    name: 'Gabriel',
    idade: 26,
    casado: false,
    trabalho: Profissao.Engenheiro
};
const mario = {
    name: 'Mario',
    idade: 26,
    casado: false,
    trabalho: Profissao.Engenheiro
};
