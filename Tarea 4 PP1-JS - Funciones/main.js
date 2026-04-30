const users = [{"id":1,"first_name":"Emily","last_name":"Smee","bank":"Banca March, S.A.","city":"El Carmen","Country":"Argentina","Salary":4346.48,"Expenses":1775.54},
    {"id":2,"first_name":"Brooke","last_name":"Campione","bank":"BCC BASILICATA - CREDITO COOPERATIVO DI LAURENZANA E COMUNI LUCANI - SOCIETA' COOPERATIVA","city":"Jesús María","Country":"Argentina","Salary":4620.84,"Expenses":1018.41},
    {"id":3,"first_name":"Aundrea","last_name":"Baudain","bank":"Sparbanken Syd","city":"Santa Lucía","Country":"Argentina","Salary":4765.7,"Expenses":289.05},
    {"id":4,"first_name":"Ryon","last_name":"Forson","bank":"FIFTH THIRD BANK","city":"San Fernando del Valle de Catamarca","Country":"Argentina","Salary":3805.55,"Expenses":2902.71},
    {"id":5,"first_name":"Ingeborg","last_name":"Wadsworth","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Santa Ana","Country":"Argentina","Salary":2240.28,"Expenses":1489.34},
    {"id":6,"first_name":"Catlin","last_name":"Audiss","bank":"COMPASS BANK","city":"Ancasti","Country":"Argentina","Salary":3048.61,"Expenses":2682.1},
    {"id":7,"first_name":"Jeremie","last_name":"Gauntlett","bank":"BANK OF HOPE","city":"Capitán Solari","Country":"Argentina","Salary":1252.4,"Expenses":2294.67},
    {"id":8,"first_name":"Corrie","last_name":"Brounsell","bank":"VerbundVolksbank OWL eG","city":"Saladas","Country":"Argentina","Salary":4738.89,"Expenses":1556.46},
    {"id":9,"first_name":"Yvonne","last_name":"Whatham","bank":"SOUTH STATE BANK","city":"Helvecia","Country":"Argentina","Salary":2122.08,"Expenses":2115.42},
    {"id":10,"first_name":"Deb","last_name":"Folliss","bank":"Sparkasse Imst AG","city":"Villa Atamisqui","Country":"Argentina","Salary":1090.47,"Expenses":1328.54},
    {"id":11,"first_name":"Hoebart","last_name":"Paterno","bank":"FIRST BANK","city":"Pocito","Country":"Argentina","Salary":3804.84,"Expenses":1016.5},
    {"id":12,"first_name":"Kiele","last_name":"Rickersy","bank":"PEOPLES BANK","city":"General La Madrid","Country":"Argentina","Salary":4161.6,"Expenses":2945.05},
    {"id":13,"first_name":"Ferdinande","last_name":"Mitchinson","bank":"LIBERTY BANK","city":"Caseros","Country":"Argentina","Salary":4102.83,"Expenses":2857.43},
    {"id":14,"first_name":"Buddy","last_name":"Blaker","bank":"BMO HARRIS BANK","city":"Corralito","Country":"Argentina","Salary":1338.41,"Expenses":2869.85},
    {"id":15,"first_name":"Crysta","last_name":"Kunkler","bank":"FIRST NATIONAL BANK","city":"Villa Nueva","Country":"Argentina","Salary":3303.39,"Expenses":1555.42},
    {"id":16,"first_name":"Dorey","last_name":"Loughhead","bank":"WEBSTER BANK","city":"Berón de Astrada","Country":"Argentina","Salary":3835.41,"Expenses":712.45},
    {"id":17,"first_name":"Yancy","last_name":"Sherston","bank":"WELLS FARGO BANK","city":"Chacabuco","Country":"Argentina","Salary":3677.9,"Expenses":2012.17},
    {"id":18,"first_name":"Raphaela","last_name":"Yanez","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Buenos Aires","Country":"Argentina","Salary":4652.94,"Expenses":2250.5},
    {"id":19,"first_name":"Sylvan","last_name":"Mendonca","bank":"Raiffeisenbank Rastede eG","city":"Zapala","Country":"Argentina","Salary":3800.09,"Expenses":1650.97},
    {"id":20,"first_name":"Ema","last_name":"Baxster","bank":"FIFTH THIRD BANK","city":"Gálvez","Country":"Argentina","Salary":4463.33,"Expenses":934.9},
    {"id":21,"first_name":"Udell","last_name":"Lesley","bank":"COMMUNITY NATIONAL BANK","city":"Cachí","Country":"Argentina","Salary":1807.09,"Expenses":2519.81},
    {"id":22,"first_name":"Pooh","last_name":"Doby","bank":"BANCA DI CREDITO COOPERATIVO DELLE MADONIE - SOCIETA' COOPERATIVA","city":"Macachín","Country":"Argentina","Salary":1970.32,"Expenses":857.64},
    {"id":23,"first_name":"Silvano","last_name":"Timby","bank":"Caixa Popular-Caixa Rural, S. Coop. de Crédito V.","city":"San Lorenzo","Country":"Argentina","Salary":4768.02,"Expenses":2680.94},
    {"id":24,"first_name":"Jedediah","last_name":"Sharnock","bank":"CIBC Capital Markets (Europe) S.A.","city":"Chimbas","Country":"Argentina","Salary":1862.16,"Expenses":1926.51},
    {"id":25,"first_name":"Pearle","last_name":"Magnar","bank":"PROSPERITY BANK","city":"Cipolletti","Country":"Argentina","Salary":4658.06,"Expenses":407.66},
    {"id":26,"first_name":"Lindy","last_name":"Twist","bank":"PROSPERITY BANK","city":"Herrera","Country":"Argentina","Salary":3229.83,"Expenses":795.3},
    {"id":27,"first_name":"Ambrosio","last_name":"Futty","bank":"KEYBANK","city":"La Banda","Country":"Argentina","Salary":3329.57,"Expenses":1199.14},
    {"id":28,"first_name":"Idaline","last_name":"Castle","bank":"CAPITAL BANK","city":"Bahía Blanca","Country":"Argentina","Salary":3116.79,"Expenses":2909.75},
    {"id":29,"first_name":"Lorant","last_name":"Coit","bank":"BNP Paribas","city":"Barranqueras","Country":"Argentina","Salary":1951.91,"Expenses":1367.03},
    {"id":30,"first_name":"Waverly","last_name":"Macken","bank":"BNP Paribas","city":"Río Tercero","Country":"Argentina","Salary":1867.87,"Expenses":2354.77},
    {"id":31,"first_name":"Bibbie","last_name":"Kleisle","bank":"Skandinaviska Enskilda Banken AB","city":"Castro Barros","Country":"Argentina","Salary":1739.97,"Expenses":738.08},
    {"id":32,"first_name":"Shaylynn","last_name":"Stollery","bank":"Sparkasse Sonneberg","city":"Libertador General San Martín","Country":"Argentina","Salary":2525.74,"Expenses":2214.65},
    {"id":33,"first_name":"Bea","last_name":"Lynnitt","bank":"Raiffeisenbank Aresing-Gerolsbach eG","city":"Embajador Martini","Country":"Argentina","Salary":1348.56,"Expenses":2421.64},
    {"id":34,"first_name":"Aurora","last_name":"Corkan","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Nueve de Julio","Country":"Argentina","Salary":3603.61,"Expenses":2100.07},
    {"id":35,"first_name":"Bonnee","last_name":"Wootton","bank":"SANTANDER BANK","city":"Villa Gesell","Country":"Argentina","Salary":4702.39,"Expenses":2741.84},
    {"id":36,"first_name":"Damon","last_name":"Steers","bank":"UNITED BANK","city":"Sydney","Country":"Australia","Salary":2797.55,"Expenses":1505.95},
    {"id":37,"first_name":"Genovera","last_name":"Andryushchenko","bank":"Volksbank im Hochsauerland eG","city":"Villa Nueva","Country":"Argentina","Salary":3248.19,"Expenses":2297.53},
    {"id":38,"first_name":"Tasia","last_name":"Orys","bank":"BANK OF AMERICA","city":"Azul","Country":"Argentina","Salary":4959.4,"Expenses":1243.44},
    {"id":39,"first_name":"Rycca","last_name":"Troy","bank":"Caisse régionale de crédit agricole mutuel Normandie-Seine","city":"Sydney","Country":"Australia","Salary":4783.91,"Expenses":2101.46},
    {"id":40,"first_name":"Hurlee","last_name":"Gayforth","bank":"NatWest Markets N.V.","city":"Bella Vista","Country":"Argentina","Salary":2936.87,"Expenses":320.12},
    {"id":41,"first_name":"Arv","last_name":"Howsego","bank":"Echterdinger Bank eG","city":"Sydney","Country":"Australia","Salary":1052.46,"Expenses":1302.38},
    {"id":42,"first_name":"Mavis","last_name":"Kain","bank":"VR Bank Ihre Heimatbank eG","city":"San Agustín de Valle Fértil","Country":"Argentina","Salary":3183.09,"Expenses":261.81},
    {"id":43,"first_name":"Sophi","last_name":"Symonds","bank":"Banco de Sabadell, S.A.","city":"Gobernador Gálvez","Country":"Argentina","Salary":3692.46,"Expenses":2105.12},
    {"id":44,"first_name":"Brody","last_name":"Lough","bank":"BANK OF NORTH CAROLINA","city":"Las Heras","Country":"Argentina","Salary":3119.07,"Expenses":309.93},
    {"id":45,"first_name":"Johnathan","last_name":"McKeever","bank":"Frankfurter Sparkasse","city":"Villa Las Rosas","Country":"Argentina","Salary":4113.08,"Expenses":1732.67},
    {"id":46,"first_name":"Martino","last_name":"MacKibbon","bank":"Spar- und Darlehnskasse Börde Lamstedt-Hechthausen eG","city":"Villa Nueva","Country":"Argentina","Salary":4194.25,"Expenses":2195.21},
    {"id":47,"first_name":"Graehme","last_name":"Kleeman","bank":"Deutsche Bank Luxembourg S.A.","city":"Sunchales","Country":"Argentina","Salary":1585.69,"Expenses":1777.18},
    {"id":48,"first_name":"Mae","last_name":"Benbrick","bank":"FIRST NATIONAL BANK","city":"Gualeguaychú","Country":"Argentina","Salary":4632.85,"Expenses":759.74},
    {"id":49,"first_name":"Dita","last_name":"Cramer","bank":"Volksbank Backnang eG","city":"Barranqueras","Country":"Argentina","Salary":1561.31,"Expenses":839.75},
    {"id":50,"first_name":"Damien","last_name":"Gorusso","bank":"SOUTH STATE BANK","city":"Viedma","Country":"Argentina","Salary":4667.83,"Expenses":1340.97}]



const IdSerch = parseInt (prompt("ingrese el id del usuario que desea buscar max:50"))
let Message =``
//1
for (const user of users){
    if (user.id ===IdSerch){
        Message = `Nombre Completo:${user.first_name}  ${user.last_name}
        Banco:${user.bank}
        Ahorro mensual: ${user.Salary -user.Expenses}` 
        break
    

    }
}
console.log(Message)

//2

function ClasificacionFinanciera(user){
    let ahorro = user.Salary - user.Expenses
    let categoria = ahorro < 500 ? "Ahorro Bajo" 
        :ahorro < 1500 ?  "Ahorro Medio"
        :"Ahorro Alto"
    return`${user.first_name} ${user.last_name}: ${categoria}`

}
for (const user of users){
    console.log (ClasificacionFinanciera(user))
}

function AgrupaPor(usuarios, propiedad) {
    let resultado = {}

    for (const user of usuarios) {
        let ahorro = user.Salary - user.Expenses
        let clave = user[propiedad]

        if (resultado[clave]) {
            resultado[clave].cantidadUsuarios = resultado[clave].cantidadUsuarios + 1
            resultado[clave].ahorroTotal = resultado[clave].ahorroTotal + ahorro
        } else {
            resultado[clave] = {
                nombre: clave,
                cantidadUsuarios: 1,
                ahorroTotal: ahorro
            }
        }
    }

    return resultado
}

//3
let porBanco = AgrupaPor(users, "bank")
console.log(porBanco)

//4
let porPais = AgrupaPor(users, "Country")
console.log(porPais)