const repassesGovernamentais = JSON.stringify([{ "orgao": "MEC", "data": "01/01/2024", "valor": 500.00, "status": "sucesso" },
{ "orgao": "Ministério da Saúde", "data": "03/01/2024", "valor": 750.00, "status": "sucesso" },
{ "orgao": "Ministério da Saúde", "data": "04/01/2024", "valor": 650.00, "status": "falha", "motivo": ""},
{ "orgao": "MEC", "data": "05/01/2024", "valor": 1000.00, "status": "falha", "motivo": "falta de documentação" },
{ "orgao": "Ministério da Educação", "data": "08/01/2024", "valor": 600.00, "status": "sucesso" },
{ "orgao": "Ministério da Saúde", "data": "10/01/2024", "valor": 900.00, "status": "sucesso" },
{ "orgao": "Ministério da Educação", "data": "12/01/2024", "valor": 300.00, "status": "falha", "motivo": "dados inválidos" },
{ "orgao": "Ministério da Saúde", "data": "15/01/2024", "valor": 1200.00, "status": "sucesso" },
{ "orgao": "Ministério da Educação", "data": "15/01/2024", "valor": 600.00, "status": "falha" },
{ "orgao": "MEC", "data": "17/01/2024", "valor": 800.00, "status": "sucesso" },
{ "orgao": "MEC", "data": "17/01/2024", "valor": 500.00, "status": "falha", "motivo": ""},
{ "orgao": "Ministério da Educação", "data": "20/01/2024", "valor": 400.00, "status": "sucesso" },
{ "orgao": "MEC", "data": "22/01/2024", "valor": 1100.00, "status": "falha", "motivo": "falta de verba" },
{ "orgao": "Ministério da Educação", "data": "23/01/2024", "valor": 500.00, "status": "falha", "motivo": "dados inválidos" },]);

const repassesGovernamentaisRecebidos = JSON.parse(repassesGovernamentais);

//e Usuário 6: Ajustes nas estatísticas
const repassesValidos = repassesGovernamentaisRecebidos.filter((elemento) => elemento.motivo !== "")
//console.log(repassesValidos);

//Usuário 1: Recebimento e Exibição de Dados do Governo
function exibeTotalDeRepasses() {
    console.log("\n----------------Exibição Geral de Dados do Governo----------------\n");
    console.log(`Total de repasses processados: ${repassesValidos.length}`);
    console.log("------------------------------------------------------------------\n")
}
exibeTotalDeRepasses();

//e Usuário 2: Análise de Transações por status
function transacoesStatusSucesso() {
    console.log("\n----------------Resumo dos repasses bem sucedidos----------------\n");
    console.log("Quantidade de repasses bem sucedidos:\n");

    const repassesSucesso = repassesValidos.filter(elemento => elemento.status == "sucesso")
    console.log(`Geral: ${repassesSucesso.length}`);

    const repassesSucessoMEC = repassesSucesso.filter(elemento => elemento.orgao == "Ministério da Educação" || elemento.orgao == "MEC")
    console.log(`Ministerio da Educação(MEC): ${repassesSucessoMEC.length}`);

    const repassesSucessoSMS = repassesSucesso.filter(elemento => elemento.orgao == "Ministério da Saúde" || elemento.orgao == "SMS")
    console.log(`Ministerio da Saúde(SMS): ${repassesSucessoSMS.length}\n`);

    console.log("Valores dos repasses bem sucedidos:\n");
    const valorTotalRepassesSucesso = repassesSucesso.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
    console.log(`Geral: ${valorTotalRepassesSucesso.toFixed(2).replace('.', ',')}`);

    const valorTotalRepassesSucessoMEC = repassesSucessoMEC.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
    console.log(`Ministerio da Educação(MEC): ${valorTotalRepassesSucessoMEC.toFixed(2).replace('.', ',')}`);

    const valorTotalRepassesSucessoSMS = repassesSucessoSMS.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
    console.log(`Ministério da Saúde(SMS): ${valorTotalRepassesSucessoSMS.toFixed(2).replace('.', ',')}`);
    console.log("------------------------------------------------------------------\n")
}
transacoesStatusSucesso();

function transacoesStatusFalha() {
    console.log("\n------------------Resumo dos repasses com falha------------------\n");
    console.log("Quantidade de repasses com falha:\n");

    const repassesFalha = repassesValidos.filter(elemento => elemento.status == "falha")
    console.log(`Geral: ${repassesFalha.length}`);

    const repassesFalhaMEC = repassesFalha.filter(elemento => elemento.orgao == "Ministério da Educação")
    console.log(`Ministério da Educação(MEC): ${repassesFalhaMEC.length}`);

    const repassesFalhaSMS = repassesFalha.filter(elemento => elemento.orgao == "Ministério da Saúde")
    console.log(`Ministério da Saúde(SMS): ${repassesFalhaSMS.length}`);

    const repassesFalhaPorMotivo = repassesFalha.filter(elemento => elemento.motivo !== " ")
    console.log(`Por Motivo: ${repassesFalhaPorMotivo.length}\n`)

    console.log("Valores total dos repasses com falha:\n")
    const valorTotalRepassesFalha = repassesFalha.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
    console.log(`Geral: ${valorTotalRepassesFalha.toFixed(2).replace('.', ',')}`);

    const valorRepassesFalhaMEC = repassesFalhaMEC.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
    console.log(`Ministério da Educação(MEC): ${valorRepassesFalhaMEC.toFixed(2).replace('.', ',')}`);

    const valorRepassesFalhaSMS = repassesFalhaSMS.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
    console.log(`Ministério da Saúde(SMS): ${valorRepassesFalhaSMS.toFixed(2).replace('.', ',')}`);

    const valorRepassesFalhaPorMotivo = repassesFalhaPorMotivo.reduce((acumulador, elemento) => acumulador + elemento.valor, 0)
    console.log(`Por motivo: ${valorRepassesFalhaPorMotivo.toFixed(2).replace('.', ',')}`);
    console.log("------------------------------------------------------------------\n")
}
transacoesStatusFalha();

//Usuário 3: Estatísticas de Repasses por critérios
function repassesPorCriterios() {
    console.log("\n----------------------Repasses por critérios----------------------\n")

    function repasseComMaiorValor(array, propriedade) {
        return array.reduce((acumulador, elemento) => {
            return elemento[propriedade] > acumulador[propriedade] ? elemento : acumulador;
        });
    }
    const repasseMaiorValor = repasseComMaiorValor(repassesValidos, "valor");
    console.log("Com maior valor: ");
    console.log(repasseMaiorValor);

    function repasseComMenorValor(array, propriedade) {
        return array.reduce((acumulador, elemento) => {
            return elemento[propriedade] < acumulador[propriedade] ? elemento : acumulador;
        });
    }
    const repasseMenorValor = repasseComMenorValor(repassesValidos, "valor");
    console.log("Com o menor valor: ");
    console.log(repasseMenorValor);

    function diaComMaisRepasses() {
        const converteData = repassesValidos.map((elemento) => {
            const separaData = elemento.data.split('/');
            const dataFormatoAmericano = [separaData[2], separaData[1], separaData[0]].join('/')
            return dataFormatoAmericano
        })

        const contarDatas = converteData.reduce((acumulador, data) => {
            acumulador[data] = (acumulador[data] || 0) + 1;
            return acumulador;
        }, {})

        const dataComMaisRepasses = Object.keys(contarDatas)
            .reduce((dataAtual, ProximaData) =>
                contarDatas[dataAtual] > contarDatas[ProximaData] ? dataAtual : ProximaData);

        let dataFormatoBrasileiro = dataComMaisRepasses.split('/');
        dataFormatoBrasileiro = [dataFormatoBrasileiro[2], dataFormatoBrasileiro[1], dataFormatoBrasileiro[0]].join('/');

        console.log(`\nData com mais repasses: ${dataFormatoBrasileiro}`);
    }
    diaComMaisRepasses();

    function orgaoComMaisRepasses() {
        const repassesMEC = repassesValidos.filter((elemento) => elemento.orgao === "Ministério da Educação" || elemento.orgao === "MEC")
        const quantidadeRepassesMEC = repassesMEC.length;
        const repassesSMS = repassesValidos.filter((elemento) => elemento.orgao === "Ministério da Saúde" || elemento.orgao === "SMS")
        const quantidadeRepassesSMS = repassesSMS.length;

        if (quantidadeRepassesMEC > quantidadeRepassesSMS) {
            console.log("\nO órgão com mais repasses é o Ministério da Educação(MEC) " + quantidadeRepassesMEC + " repasses");
        } else {
            console.log("\nO órgão com mais repasses é o Ministério da Saúde(SMS) " + quantidadeRepassesSMS + " repasses");
        }
    }
    orgaoComMaisRepasses();

    function orgaoComMaisRepassesSucesso() {
        const sucessoMEC = repassesValidos.filter(elemento => elemento.status === "sucesso" && elemento.orgao == "Ministério da Educação" || elemento.orgao == "MEC")
        const quantidadeRepassesSucessoMEC = sucessoMEC.length;

        const sucessoSMS = repassesValidos.filter(elemento => elemento.status === "sucesso" && elemento.orgao == "Ministério da Saúde" || elemento.orgao == "SMS")
        const quantidadeRepassesSucessoSMS = sucessoSMS.length;

        if (quantidadeRepassesSucessoMEC > quantidadeRepassesSucessoSMS) {
            console.log("\nO órgão com mais repasses com sucesso é o Ministério da Educação(MEC) " + quantidadeRepassesSucessoMEC + " repasses");
        } else {
            console.log("\nO órgão com mais repasses com sucesso é o Ministério da Saúde(SMS) " + quantidadeRepassesSucessoSMS + " repasses");
        }
    }
    orgaoComMaisRepassesSucesso();

    function orgaoComMaisRepassesComFalha() {
        const sucessoMEC = repassesValidos.filter(elemento => elemento.status === "falha" && elemento.orgao == "Ministério da Educação" || elemento.orgao == "MEC")
        const quantidadeRepassesSucessoMEC = sucessoMEC.length;

        const sucessoSMS = repassesValidos.filter(elemento => elemento.status === "falha" && elemento.orgao == "Ministério da Saúde" || elemento.orgao == "SMS")
        const quantidadeRepassesSucessoSMS = sucessoSMS.length;

        if (quantidadeRepassesSucessoMEC > quantidadeRepassesSucessoSMS) {
            console.log("\nO órgão com mais repasses com falha é o Ministério da Educação(MEC) com " + quantidadeRepassesSucessoMEC + " repasses");
        } else {
            console.log("\nO órgão com mais repasses com falha é o Ministério da Saúde(SMS) com " + quantidadeRepassesSucessoSMS + " repasses\n");
        }
    }
    orgaoComMaisRepassesComFalha();

    const contaMotivoDeFalha = repassesValidos.reduce((acumulador, elemento) => {
        const motivo = elemento.motivo;
        acumulador[motivo] = (acumulador[motivo] || 0) + 1;
        return acumulador;
    }, {})

    console.log("\nQuantidades por motivo de falha:")
    console.log(contaMotivoDeFalha)
    console.log("------------------------------------------------------------------\n")
}
repassesPorCriterios();

//Usuário 4: Apresentação Automática de Detalhes de Transações
function detalhaTransacoesPorOrgao() {
    console.log("\n-----------------Detalhe de Transações por órgão------------------\n");

    console.log("Ministério da Educação:\n")
    const repassesMECRecebidos = repassesValidos.filter((elemento) => elemento.orgao === "Ministério da Educação" || elemento.orgao === "MEC");
    console.log(repassesMECRecebidos);

    console.log("Ministério da Sáude:\n")
    const repassesSMSRecebidos = repassesValidos.filter((elemento) => elemento.orgao === "Ministério da Saúde" || elemento.orgao === "SMS");
    console.log(repassesSMSRecebidos);
    console.log("------------------------------------------------------------------\n")
}
detalhaTransacoesPorOrgao();

//e Usuário 5: Tratamento de erros
//Utilizando uma nova lista com a inclusão de dados inválidos
const repassesComDadosInvalidos = ([{ "orgao": "MEC", "data": "01/01/2024", "valor": 500.00, "status": "sucesso" },
{ "orgao": "Ministério da Saúde", "data": "03/01/2024", "valor": 750.00, "status": "sucesso" },
{ "orgao": "MEC", "data": "05/01/2024", "valor": 1000.00, "status": "sucesso" },
{ "orgao": "Ministério da Educação", "data": "08/01/2024", "valor": 600.00, "status": "sucesso" },
{ "orgao": "Ministério da Saúde", "data": "10/01/2024", "valor": 900.00, "status": "sucesso" },
{ "orgao": "Ministério da Saúde", "data": "10/01/2024", "valor": 600.00, "status": "falha", "motivo": "" },
{ "orgao": "Ministério da Educação", "data": "12/01/2024", "valor": 300.00, "status": "falha", "motivo": "dados inválidos" },
{ "orgao": "Ministério da Saúde", "data": "15/01/2024", "valor": 1200.00, "status": "sucesso" },
{ "orgao": "Ministério da Saúde", "data": "15/01/2024", "valor": 200.00, "status": "falha", "motivo": "" },
{ "orgao": "MEC", "data": "17/01/2024", "valor": 800.00, "status": "falha", "motivo": "falta de verba" },
{ "orgao": "Ministério da Educação", "data": "20/01/2024", "valor": 400.00, "status": "falha", "motivo": "falta de limite" },
{ "orgao": "MEC", "data": "22/01/2024", "valor": 1100.00, "status": "falha" }]);

const repassesInvalidosString = JSON.stringify(repassesComDadosInvalidos);
const repassesInvalidosRecebidos = JSON.parse(repassesInvalidosString);

function verificandoErros() {
    console.log("\n-------------------Resumo de repasses com falha-------------------\n")
    const repassesComStatusFalha = repassesInvalidosRecebidos.filter((elemento) => elemento.status === "falha")
    console.log("Geral: ");
    console.log(repassesComStatusFalha);


    const repassesFalhaSemMotivo = repassesComStatusFalha.filter((elemento) => elemento.motivo === "")
    console.log("Sem motivo da falha: ")
    console.log(repassesFalhaSemMotivo);
    console.log("------------------------------------------------------------------\n")
}
verificandoErros();
