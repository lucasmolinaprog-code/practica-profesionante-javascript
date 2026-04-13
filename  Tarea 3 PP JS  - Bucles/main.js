const usuarios = [{"id":1,"first_name":"Vergil","last_name":"Ollin","email":"vollin0@ycombinator.com","gender":"Male","ip_address":"69.230.118.55"},
    {"id":2,"first_name":"Mallissa","last_name":"Lippett","email":"mlippett1@eventbrite.com","gender":"Female","ip_address":"142.1.244.216"},
    {"id":3,"first_name":"Ray","last_name":"Betun","email":"rbetun2@house.gov","gender":"Male","ip_address":"47.168.96.191"},
    {"id":4,"first_name":"Marilyn","last_name":"Robrow","email":"mrobrow3@disqus.com","gender":"Female","ip_address":"49.83.83.3"},
    {"id":5,"first_name":"Adair","last_name":"Hardwell","email":"ahardwell4@ft.com","gender":"Male","ip_address":"117.209.169.117"},
    {"id":6,"first_name":"Derick","last_name":"Danks","email":"ddanks5@latimes.com","gender":"Male","ip_address":"120.56.120.133"},
    {"id":7,"first_name":"Guntar","last_name":"Rockcliffe","email":"grockcliffe6@indiatimes.com","gender":"Male","ip_address":"83.81.37.226"},
    {"id":8,"first_name":"Constantina","last_name":"Finnimore","email":"cfinnimore7@friendfeed.com","gender":"Female","ip_address":"110.133.188.169"},
    {"id":9,"first_name":"Octavius","last_name":"Growden","email":"ogrowden8@redcross.org","gender":"Genderfluid","ip_address":"109.181.236.223"},
    {"id":10,"first_name":"Willette","last_name":"Jennrich","email":"wjennrich9@oaic.gov.au","gender":"Female","ip_address":"161.131.99.61"},
    {"id":11,"first_name":"Alanah","last_name":"Bridywater","email":"abridywatera@slideshare.net","gender":"Female","ip_address":"113.141.53.165"},
    {"id":12,"first_name":"Ali","last_name":"Bente","email":"abenteb@webeden.co.uk","gender":"Bigender","ip_address":"39.219.234.216"},
    {"id":13,"first_name":"Arlan","last_name":"Stansfield","email":"astansfieldc@wufoo.com","gender":"Non-binary","ip_address":"132.172.59.17"},
    {"id":14,"first_name":"Jess","last_name":"Elcoux","email":"jelcouxd@ameblo.jp","gender":"Genderqueer","ip_address":"198.2.58.21"},
    {"id":15,"first_name":"Berthe","last_name":"Hounihan","email":"bhounihane@craigslist.org","gender":"Female","ip_address":"175.253.221.188"},
    {"id":16,"first_name":"Kevyn","last_name":"Oliveras","email":"koliverasf@state.tx.us","gender":"Female","ip_address":"87.16.198.211"},
    {"id":17,"first_name":"Gunther","last_name":"Tall","email":"gtallg@blog.com","gender":"Male","ip_address":"222.109.49.37"},
    {"id":18,"first_name":"Jacqui","last_name":"Giamitti","email":"jgiamittih@stumbleupon.com","gender":"Female","ip_address":"112.33.146.75"},
    {"id":19,"first_name":"Kirbee","last_name":"Brian","email":"kbriani@marketwatch.com","gender":"Female","ip_address":"170.8.168.34"},
    {"id":20,"first_name":"Tybi","last_name":"Wagon","email":"twagonj@ebay.com","gender":"Female","ip_address":"152.60.67.36"},
    {"id":21,"first_name":"Leah","last_name":"Haseley","email":"lhaseleyk@auda.org.au","gender":"Female","ip_address":"44.28.238.59"},
    {"id":22,"first_name":"Malva","last_name":"Tattoo","email":"mtattool@photobucket.com","gender":"Female","ip_address":"196.137.248.188"},
    {"id":23,"first_name":"Marice","last_name":"Langelaan","email":"mlangelaanm@reference.com","gender":"Female","ip_address":"251.92.142.56"},
    {"id":24,"first_name":"Ashley","last_name":"Dorcey","email":"adorceyn@ifeng.com","gender":"Male","ip_address":"45.78.73.223"},
    {"id":25,"first_name":"Darla","last_name":"Zamorrano","email":"dzamorranoo@symantec.com","gender":"Female","ip_address":"135.133.146.135"},
    {"id":26,"first_name":"Rhea","last_name":"Kilgrew","email":"rkilgrewp@nhs.uk","gender":"Female","ip_address":"245.58.156.42"},
    {"id":27,"first_name":"Rosetta","last_name":"Tortice","email":"rtorticeq@meetup.com","gender":"Female","ip_address":"181.2.54.236"},
    {"id":28,"first_name":"Lonee","last_name":"Pfeffel","email":"lpfeffelr@unc.edu","gender":"Female","ip_address":"32.54.81.87"},
    {"id":29,"first_name":"Broderic","last_name":"Judron","email":"bjudrons@myspace.com","gender":"Male","ip_address":"199.202.94.255"},
    {"id":30,"first_name":"Erhard","last_name":"Brigstock","email":"ebrigstockt@cafepress.com","gender":"Male","ip_address":"201.217.173.130"},
    {"id":31,"first_name":"Toddie","last_name":"Ashbolt","email":"tashboltu@diigo.com","gender":"Male","ip_address":"138.230.9.159"},
    {"id":32,"first_name":"Carri","last_name":"Sheehan","email":"csheehanv@qq.com","gender":"Female","ip_address":"12.168.33.57"},
    {"id":33,"first_name":"Thomas","last_name":"Fetterplace","email":"tfetterplacew@google.ru","gender":"Genderqueer","ip_address":"227.145.38.12"},
    {"id":34,"first_name":"Calida","last_name":"Balaison","email":"cbalaisonx@nbcnews.com","gender":"Female","ip_address":"2.8.181.138"},
    {"id":35,"first_name":"Greer","last_name":"Renwick","email":"grenwicky@sogou.com","gender":"Female","ip_address":"197.221.142.181"},
    {"id":36,"first_name":"Ilyssa","last_name":"Nourse","email":"inoursez@networkadvertising.org","gender":"Female","ip_address":"46.226.137.74"},
    {"id":37,"first_name":"Ahmed","last_name":"Cann","email":"acann10@timesonline.co.uk","gender":"Male","ip_address":"1.10.217.48"},
    {"id":38,"first_name":"Bibi","last_name":"Djekovic","email":"bdjekovic11@plala.or.jp","gender":"Female","ip_address":"253.81.183.149"},
    {"id":39,"first_name":"Alli","last_name":"Frunks","email":"afrunks12@sina.com.cn","gender":"Female","ip_address":"37.121.132.251"},
    {"id":40,"first_name":"Earlie","last_name":"Pancoust","email":"epancoust13@senate.gov","gender":"Male","ip_address":"95.135.88.108"},
    {"id":41,"first_name":"Mae","last_name":"Dwyr","email":"mdwyr14@soundcloud.com","gender":"Female","ip_address":"247.171.140.40"},
    {"id":42,"first_name":"Thaddeus","last_name":"Vinsen","email":"tvinsen15@reverbnation.com","gender":"Male","ip_address":"91.5.170.250"},
    {"id":43,"first_name":"Sallyann","last_name":"Bembrick","email":"sbembrick16@nationalgeographic.com","gender":"Female","ip_address":"139.242.36.221"},
    {"id":44,"first_name":"Reiko","last_name":"Klugman","email":"rklugman17@businessweek.com","gender":"Female","ip_address":"185.76.157.206"},
    {"id":45,"first_name":"Lucien","last_name":"Bolton","email":"lbolton18@yahoo.co.jp","gender":"Male","ip_address":"91.208.68.70"},
    {"id":46,"first_name":"Wilhelmina","last_name":"Keller","email":"wkeller19@reference.com","gender":"Female","ip_address":"70.189.13.9"},
    {"id":47,"first_name":"Marve","last_name":"Hindenberger","email":"mhindenberger1a@wufoo.com","gender":"Male","ip_address":"207.248.210.120"},
    {"id":48,"first_name":"Rawley","last_name":"Nelsen","email":"rnelsen1b@netlog.com","gender":"Male","ip_address":"32.102.124.86"},
    {"id":49,"first_name":"Wallie","last_name":"Hamblyn","email":"whamblyn1c@noaa.gov","gender":"Male","ip_address":"132.199.39.27"},
    {"id":50,"first_name":"Dale","last_name":"Golden of Ireland","email":"dgoldenofireland1d@squarespace.com","gender":"Male","ip_address":"203.136.243.81"}]


const idbuscador = parseInt (prompt("ingrese el id del usuario que desea buscar max:50"))
let mensaje =``

for (const usuario of usuarios ){
    if (usuario.id === idbuscador){
       
        mensaje =(`nombre:${usuario.first_name}
        apellido: ${usuario.last_name}
        mail: ${usuario.email}
        genero:${usuario.gender}
        ip:${usuario.ip_address}`);
        break       
    }  
}
if (mensaje){
    console.log(mensaje);
}
else{
    console.log("usuario no encontrado")
}

const contador_genero = {}

for (const usuario of usuarios){
    const genero = usuario.gender

if (contador_genero[genero]){
    contador_genero[genero]++
}
else{
    contador_genero[genero]= 1

}

}

console.log("cantidad final por genero")
console.log(contador_genero)



