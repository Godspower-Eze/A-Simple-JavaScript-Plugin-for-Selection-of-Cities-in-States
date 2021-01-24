//States

const states_and_cities = {
    Lagos:['Ajeromi-Ifelodun', 'Akisan', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Ebute Metta', 'Epe', 'Ifo', 'Iju', 'Ikeja', 'Ikorodu', 'Imota', 'Irewe', 'Kosofe', 'Lagos', 'Makoko', 'Mushin', 'Ojo', 'Shomolu', 'Surulere', 'Yaba', 'Yaba/Ojuelegba', 'lekki'],
    Abuja:['Asokoro', 'Bamburu', 'Garki', 'Gwagwalada', 'Gwarinpa', 'Jikwoyi', 'Karshi', 'Karu', 'Kurunduma', 'Masaka', 'New Nyanya', 'Wuse', 'Yoba', 'Zuba'],
    Kano:['Kano'],
    Anambra:['Abagana', 'Abatete', 'Adazi Nnukwu', 'Aguata', 'Aguleri', 'Agulu', 'Alor', 'Amawbia', 'Anambra East', 'Anambra West', 'Anaocha', 'Atani', 'Awka', 'Awka Etiti', 'Awka North', 'Awka South', 'Awkuzu', 'Ayamelum', 'Dunukofia', 'Ekwulobia', 'Ekwusigo', 'Enugwu Ukwu', 'Idemili North', 'Idemili South', 'Ihiala', 'Nanka', 'Neni', 'Nibo', 'Njikoka', 'Nkpor', 'Nnewi', 'Nsugbe', 'Nzam', 'Oba', 'Obosi', 'Ogbaru', 'Ogidi', 'Okija', 'Onitsha', 'Onitsha North', 'Oraukwu', 'Orumba North', 'Otuocha', 'Oyi', 'Ozubulu', 'Uga', 'Uli', 'Umuawulu', 'Umuchu', 'Umudioka', 'Umuleri'],
    Kaduna:['Jemaa','Kaduna','Zaria'],
    Oyo:['Ibadan','Iseyin','Ogbomosho','Oyo','Saki'],
    Katsina:['Daura','Katsina'],
    Rivers:['Bonny','Degema','Okrika','Port Harcourt'],
    Bauchi:['Azare','Bauchi','Jama′are','Katagum','Misau'],
    Jigawa:['Birnin Kudu','Dutse','Gumel','Hadejia','Kazaure'],
    Benue:['Markurdi'],
    Borno:['Biu','Dikwa','Maiduguri'],
    Delta:['Abo', 'Abraka', 'Agbara-Otor', 'Agbarho', 'Agbor', 'Aladja', 'Aniocha North', 'Aniocha South', 'Asaba', 'Aviara', 'Bomadi', 'Burutu', 'Effurun', 'Emede', 'Emevor', 'Ethiope East', 'Ethiope West', 'Igbuku', 'Igbuzor','Ika North East', 'Ika South', 'Illah', 'Isoko North', 'Isoko South', 'Koko', 'Kwale', 'Ndokwa East', 'Obiariku', 'Ofagbe', 'Ogbe-Ijoh', 'Ogbe-Ijoh', 'Oghara', 'Ogwashi-Ukwu', 'Okwagbe', 'Onicha-Ugbo', 'Orerokpe', 'Orhuwhorun', 'Oshimili North', 'Oshimili South', 'Osubi', 'Ovwian', 'Ozoro', 'Patani', 'Sapele', 'Ubulu-uku', 'Udu', 'Ughelli', 'Uvwie','Warri','Warri North', 'Warri South', 'Warri South-West'],
    Imo:['Akokwa', 'Amaigbo', 'Atta Ikeduru', 'Awo-Omamma', 'Emekuku Isu', 'Iho Dimeze', 'Isu/Umuozu', 'Izombe', 'Mbaise', 'Mbaitoli', 'Mbieri', 'Mgbidi', 'Ngor Okpala', 'Nkwerre', 'Oguta', 'Ohaji/Egbema', 'Okigwe', 'Omuma', 'Orlu', 'Orlu', 'Orodo', 'Orsu', 'Owerri', 'Ubulu', 'Umuowa '],
    Niger:['Agaie','Baro','Bida','Kontagora','Lapai','Minna','Suleja'],
    Akwa_Ibom:['Ikot Abasi','Ikot Ekpene','Oron','Uyo'],
    Ogun:['Abeokuta','Ijebu-Ode','Ilaro','Shagamu'],
    Sokoto:['Sokoto'],
    Ondo:['Akure','Ikare','Oka-Akoko','Ondo','Owo'],
    Osun:['Ede', 'Ikire', 'Ikirun', 'Ila', 'Ile-Ife', 'Ilesha', 'Ilobu', 'Inisa', 'Iwo', 'Oshogbo'],
    Kogi:['Idah','Kabba','Lokoja','Okene'],
    Zamfara:['Gusau','Kaura Namoda'],
    Enugu:['Abbi', 'Abor', 'Achi', 'Agbani', 'Aku', 'Edem', 'Eha Amufu', 'Enugu Town', 'Enugu-Ezike', 'Inyi', 'Nara Unateze', 'Ngwo', 'Nomeh Unateze', 'Nsukka', 'Obimo', 'Ohum', 'Oji River', 'Ozara', 'Ugbo', 'Ugwuoba', 'Umuana-ndiuno'],
    Kebbi:['Argungu','Birnin Kebbi','Gwandu','Yelwa'],
    Edo:['Benin City'],
    Plateau:['Bukuru','Jos','Vom','Wase'],
    Adamawa:['Jimeta','Mubi','Numan','Yola'],
    Cross_River:['calabar','ogoja'],
    Abia:['Aba','Arochukwu','Umuahia'],
    Ekiti:['Ado-Ekiti','Effon-Alaiye','Ikere-Ekiti'],
    Kwara:['Ilorin','Jebba','Lafiagi','Offa','Pategi'],
    Gombe:['Deba Habe','Gombe','Kumo'],
    Yobe:['Damaturu','Nguru'],
    Ebonyi:['Abakaliki'],
    Nasarawa:['Keffi','Lafia','Nasarawa'],
    Bayelsa:['Brass'],
    Taraba:['Ibi','Jalingo','Muri']
}

document.addEventListener('DOMContentLoaded',()=>{
    var state_select_field = document.getElementById('states')
    state_select_field.addEventListener('change',(event) => {
        var city_select = document.getElementById('cities')
        if (event.target.value.length !== 0){
            while (city_select.firstChild) {
                city_select.removeChild(city_select.lastChild);
            }
            let opt1 = document.createElement("option")
            opt1.appendChild(document.createTextNode("Select a City"))
            opt1.value = "";
            city_select.appendChild(opt1)
            states_and_cities[event.target.value].forEach(city => {
            let opt = document.createElement("option")
            opt.appendChild(document.createTextNode(city))
            opt.value = city;
            city_select.appendChild(opt)
        })
        }else{
            while (city_select.firstChild) {
                city_select.removeChild(city_select.lastChild);
            }
            let opt1 = document.createElement("option")
            opt1.appendChild(document.createTextNode("Select a City"))
            opt1.value = "";
            city_select.appendChild(opt1)
        }
    })
})



