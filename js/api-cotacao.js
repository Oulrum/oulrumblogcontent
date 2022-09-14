async function obterMoeda(moedaOrigem, moedaDestino = "BRL") {
    let valor = await fetch(`https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`)
        .then(T => T.json())
        .then(valor => {
            return valor;
        });

    return valor;
}

async function obterListaDeMoedas() {
    let listaDeMoedas = await fetch('https://oulrum.github.io/oulrumblogcontent/js/moedas.json')
        .then(T => T.json())
        .then(valores => {

            let moedas = valores.sort((a, b) => {
                return a.nome.localeCompare(b.nome);
            })

            return moedas;
        });

    return listaDeMoedas;
}

async function obterListaFiltrada(moeda, listaDeMoedas) {
    let listaFiltrada = await fetch("https://oulrum.github.io/oulrumblogcontent/js/conversoes.json")
        .then(T => T.json())
        .then(v => {
            let c = [];

            for (let i = 0; v.length > i; i++) {
                let conv = v[i].split("-");

                if (conv[0] == moeda) {
                    for (let l = 0; listaDeMoedas.length > l; l++) {
                        if (listaDeMoedas[l].sigla == conv[1]) {
                            c.push(listaDeMoedas[l])
                        }
                    }
                }
            }

            return c.sort((a, b) => {
                return a.nome.localeCompare(b.nome)
            });
        });

    return listaFiltrada;
}
