

    const endButton = document.querySelector('#BaigtiAnketa') 
    //endButton.addEventListener('click', getData)
    // endButton.addEventListener('click', check)
    var AllData = [];
   
    
    function handleClick(myRadio){
        if(myRadio.value === "Vedęs/ištekėjusi")
            document.getElementById('partner').hidden = false;
        if(myRadio.value === "Išsiskyręs/išsiskyrus" || myRadio.value === "Vienišas/vieniša" || myRadio.value === "Našlys/našlė"){
            document.getElementById('partner').hidden = true;
        }
        if(myRadio.value === "studijos"){
            document.getElementById('studies').hidden = false;
            document.getElementById('work').hidden = true;
            document.getElementById('notWorker').hidden = true;
        }
        if(myRadio.value === "darbas"){
            document.getElementById('studies').hidden = true;
            document.getElementById('work').hidden = false;
            document.getElementById('notWorker').hidden = true;
        }
        if(myRadio.value === "bedarbyste"){
            document.getElementById('studies').hidden = true;
            document.getElementById('work').hidden = true;
            document.getElementById('notWorker').hidden = false;
        }
        if(myRadio.value === "atostogos"){
            document.getElementById('studies').hidden = true;
            document.getElementById('work').hidden = true;
            document.getElementById('notWorker').hidden = true;
        }
    }

    function myFunction(){
        if(document.getElementById('darboStazas').value >=1 ){
            document.getElementById('darboPobudis').hidden = false;
            document.getElementById('darbineSritis').hidden = false;
        }
        else{
            document.getElementById('darboPobudis').hidden = true;
            document.getElementById('darbineSritis').hidden = true;
        }
    }

    function myFunction2(myValue){
        if(myValue.value === "hcollage" || myValue.value === "huniversity")
        document.getElementById('degree').hidden = false;
        else document.getElementById('degree').hidden = true;
    }

    var numberOfKidsWas = 0;
    var numberOfdecrease = 0;
    var numberOfKidsNow = 0;

    ///Funkcija pridedanti arba naikinanti vaiko vardo bei pavardes ivestis
    function handleClick2(){
        numberOfKidsNow = document.getElementById('numberOFkids').value;
    

        child = document.getElementById('kids');
        console.log(child); 
        //jei sumazino vaiku skaiciu tada naikinam 
        if(numberOfKidsWas > numberOfKidsNow){
            console.log("as cia")
            numberOfdecrease = numberOfKidsWas - numberOfKidsNow;

            if(numberOfKidsNow == 0 && numberOfKidsWas ==1){
                console.log('a1');
                document.getElementById('kids').hidden = true
                //console.log('a4');
            }

            if(numberOfKidsNow == 1){
                document.getElementById('kids').hidden = false
                console.log('a2');
                for(var k=0; k<numberOfdecrease; k++){
                    child.removeChild(child.lastChild);
                    child.removeChild(child.lastChild);
                    console.log(child);
                }
                //console.log('a4');
            }

            else if(numberOfKidsNow >1 && numberOfdecrease >0){
                console.log('a3');
                for(var k=0; k<numberOfdecrease; k++){
                    child.removeChild(child.lastChild);
                    child.removeChild(child.lastChild);
                    console.log(child);
                }
            }
    
        }

        //jei padidino tada sukuriam naujus
        else if(numberOfKidsNow > numberOfKidsWas){
       if(numberOfKidsNow == 1){
            document.getElementById('kids').hidden = false
           /// console.log('a4');
        }
        if(document.getElementById('numberOFkids').value > 1){
            document.getElementById('kids').hidden = false
           ///console.log('a2');
            const kidsDiv = document.getElementById('kids');
            for(var j=numberOfKidsWas; j<numberOfKidsNow; j++){

                ///console.log('a3');
                var vaikoVardas = "kidName" + j;
                var vaikoPavarde = "kidSurname" + j;

                const kidn = document.createElement('div')
                const kids = document.createElement('div')
                
                kidn.id = vaikoVardas;
                kids.id = vaikoPavarde;
            
                //  name label
                const kidnl = document.createElement('label')

                kidnl.id = "labelFor" + vaikoVardas;
                kidnl.for = "childName" + j;
                var labelNameText = document.createTextNode('Vaiko vardas:');
                kidnl.appendChild(labelNameText)

                const kidnlMark = document.createElement('mark');
                kidnlMark.className = "red";
                var labelMarkText = document.createTextNode('*');
                kidnlMark.appendChild(labelMarkText)
                kidnl.appendChild(kidnlMark)
                kidn.appendChild(kidnl)
                const kidnbr = document.createElement('br')
                kidn.appendChild(kidnbr)
                // name p

                const kidnp = document.createElement('p')

                kidnp.className = 'redInfo'
                kidnp.id = 'vaikoVardasIvestas' + j;
                kidnp.hidden = true;
                var npText = document.createTextNode('Vaiko vardas turi būti nurodytas');
                kidnp.appendChild(npText);

                kidn.appendChild(kidnp)

          


                // name input


                const kidni = document.createElement('input')
                kidni.id = "childName" + j;
                kidni.type = "text";
                kidni.name = "childName" + j;

                kidn.appendChild(kidni)

                kidsDiv.appendChild(kidn)

                // surname label
                const kidsl = document.createElement('label')

                kidsl.id = "labelFor" + vaikoPavarde;
                kidsl.for = "childSurname" + j;
                var labelSurnameText = document.createTextNode('Vaiko pavarde:');
                kidsl.appendChild(labelSurnameText)

                const kidslMark = document.createElement('mark');
                kidslMark.className = "red";
                var surnamelabelMarkText = document.createTextNode('*');
                kidslMark.appendChild(surnamelabelMarkText)
                kidsl.appendChild(kidslMark)
                kids.appendChild(kidsl)
                const kidsbr = document.createElement('br')
                kids.appendChild(kidsbr)
                //surname p
                const kidsp = document.createElement('p')

                kidsp.className = 'redInfo'
                kidsp.id = 'vaikoPavardeIvestas' + j;
                kidsp.hidden = true;
                var spText = document.createTextNode('Vaiko vardas turi būti nurodytas');
                kidsp.appendChild(spText);

                kids.appendChild(kidsp)

    

                //surname input
    
                const kidsi = document.createElement('input')
                kidsi.id = "childSurname" + j;
                kidsi.type = "text";
                kidsi.name = "childSurname" + j;

                kids.appendChild(kidsi)
                kidsDiv.appendChild(kids)

            }
        }
    }


        this.numberOfKidsWas = numberOfKidsNow;
    }

    var count  = 0;
    //tikrina ar yra ivesti reikalingi duomenys bei ar jie yra teisingai nurodyti 
    function check(){
        count  = 0;
        notification('yourName', 'vardasIvestas')
        notification('yoursurname', 'PavardeIvestas')
        notificationName('gender','lytisIvestas')
        if(document.getElementById('year').value < 1900 || document.getElementById('year').value > 2021){
            document.getElementById('year').value = "";
            notification('year','BlogaiIvestasGimtadienis')
        }
        else notification('year','gimimoDataIvestas')
        if(document.getElementById('month').value < 1 || document.getElementById('month').value > 12){
            document.getElementById('month').value = "";
            notification('month','BlogaiIvestasGimtadienis')
        }
        else notification('month','gimimoDataIvestas')
    
        if(document.getElementById('day').value < 1 || document.getElementById('day').value > 31){
            document.getElementById('day').value = "";
            notification('day','BlogaiIvestasGimtadienis')
        }
        else notification('day','gimimoDataIvestas')

        if(document.getElementById('month').value == 2 && document.getElementById('day').value > 29){
            document.getElementById('day').value = "";
            notification('day','BlogaiIvestasGimtadienis')
        }

        notification('Code','asmensKodasIvestas')
        notification('Number','telefonasIvestas')
        notification('Youremail','elPastasIvestas')
        notification('City','miestasIvestas')
        notification('Street','gatveIvestas')
        if(document.getElementById('House').value <1){
            document.getElementById('House').value = "";
            notification('House','BlogaiIvestasAdresas')
        }
        else notification('House','namoNrIvestas')

        if(document.getElementById('Flat').value <1 && document.getElementById('Flat').value != ""){
            document.getElementById('Flat').value = "";
            notification('Flat','BlogaiIvestasAdresas')
        }

        notificationName('padetis','vedybosIvestas')

        var p = getBullet(document.getElementsByName('padetis'))
        if(p === "Vedęs/ištekėjusi"){
            notification('partnerName','partneriovardasIvestas')
            notification('PartnerSurname','partnerioPavardeIvestas')
            notification('YourPartnerCode','partnerioKodasIvestas')
        }

        notification('numberOFkids','vaikaiIvestas')

        if(document.getElementById('numberOFkids').value <0){
            document.getElementById('numberOFkids').value = "";
            notification('numberOFkids','BlogaiIvestasVaikuSk')
        }

        if(numberOfKidsNow > 0){
            if(numberOfKidsNow == 1){
                notification('childName','vaikoVardasIvestas')
                notification('childSurname','vaikoPavardeIvestas')
            }
            if(numberOfKidsNow > 1){
                notification('childName','vaikoVardasIvestas')
                notification('childSurname','vaikoPavardeIvestas')
                for(var t=1; t<numberOfKidsNow; t++){
                    var n = 'childName' + t;
                    var s = 'childSurname' + t;
                    notification(n,'vaikoVardasIvestas' + t)
                    notification(s,'vaikoPavardeIvestas' + t)
                }
            }
        }

        notification('level','issilavinimasIvestas')
        if(document.getElementById('level').value === "hcollage" || document.getElementById('level').value === "huniversity"){
                 notification('degreeLvl','moksloLaipsnisIvestas')
        }
       
        notification('edPlace','mokymoIstaigaIvestas')

        if(document.getElementById('educationEndYear').value < 1900 || document.getElementById('educationEndYear').value > 2021){
            document.getElementById('educationEndYear').value = "";
            notification('educationEndYear','BlogaiBaigimoMetai')
        }
        else notification('educationEndYear','baigimoMetaiIvestas')
   
        notificationName('Status','profesinePadetisIvestas')
        var st = getBullet(document.getElementsByName('Status'))
        if(st === "studijos"){
            notification('Istaiga','dabartineMokymoIstaigaIvestas')
        }

        if(st === "darbas"){
            notification('Vieta','darboIstaigaIvestas')
            notification('pareigos','pareigosIvestas')
        }

        if(st === "bedarbyste"){
            notification('bedarbioPriezastis','bedarbisIvestas')
        }

        if(document.getElementById('darboStazas').value <0 || document.getElementById('darboStazas').value > 100){
            document.getElementById('darboStazas').value = "";
            notification('darboStazas','BlogaiIvestasDarboPatirtis')
        }
        else notification('darboStazas','patirtisIvestas')

        if(document.getElementById('darboStazas').value > 0){
            notification('pobudis','pobudisIvestas')
            notification('darboSritis','darboSritisIvestas')
        }
        //jei ne visi privalomi ivesti ismetama klaida
        if(count >0) document.getElementById('klaida').hidden = false;
        //jei visi kuriamas objektas i kuri desim informacija
        if(count == 0) {
            document.getElementById('patvirtinimas').hidden = false;
            document.getElementById('klaida').hidden = true;
            var data = Object.create({
                name:"",
                secondName:"",
                surname:"",
                prevSurname:"",
                gender:"",
                birthyear:"",
                birthMonth:"",
                birthDay:"",
                personalCode:"",
                phoneNumber:"",
                email:"",
                city:"",
                street:"",
                houseNo:"",
                flatNo:"",
                otherContacts:"",
                maritalStatus:"",
                partnerName:"",
                partnerSurname:"",
                partnerCode:"",
                numOfKids:"",
                kidName:"",
                kidSurname:"",
                education:"",
                lastEducationPlace:"",
                educationEndYear:"",
                qualification:"",
                degree:"",
                professionStatus:"",
                studyLvl:"",
                course:"",
                currentEducationPlace:"",
                workPlace:"",
                workPosition:"",
                noWork:"",
                workExp:"",
                workType:"",
                workArea:""});

                 getData(data);
                 setTimeout(pranesimas, 10000)
        }
           
    }

    function pranesimas(){
        document.getElementById('patvirtinimas').hidden = true;
    }
        
    //tikrina ar ivesti duomenys
    function notification(a,b){
       // console.log(a, '|||',document.getElementById(a).value, "|||", b);
        if(document.getElementById(a).value == "" || document.getElementById(a).value == undefined) {
            document.getElementById(b).hidden = false;
            count++;
        }
        else{
            document.getElementById(b).hidden = true;
        }
    }
    //tikrina ar ivesti duomenys
    function notificationName(a,b){
        if(getBullet(document.getElementsByName(a)) == undefined || getBullet(document.getElementsByName(a)) == ""){
             document.getElementById(b).hidden = false;
             count++;
        }
        else{
            document.getElementById(b).hidden = true;
        }
    }
    // issaugoma ivesta informacija, isvalomi ivesties langai
    function getData(data){ 
        data.name = document.getElementById('yourName').value;
        document.getElementById('yourName').value = "";
        if(document.getElementById('YoursecondName').value != "" || document.getElementById('YoursecondName').value != undefined){
            data.secondName = document.getElementById('YoursecondName').value;
            document.getElementById('YoursecondName').value = "";
        }
        data.surname = document.getElementById('yoursurname').value;
        if(document.getElementById('prevSurname').value != "" || document.getElementById('prevSurname').value != undefined){
            data.prevSurname = document.getElementById('prevSurname').value;
            document.getElementById('prevSurname').value = "";
        }
        document.getElementById('yoursurname').value = "";
        var whichGender = document.getElementsByName('gender');
        data.gender = getBullet(whichGender);
        deleteBullet(whichGender);

        data.birthyear = document.getElementById('year').value;
        document.getElementById('year').value = "";
        data.birthMonth = document.getElementById('month').value;
        document.getElementById('month').value = "";
        data.birthDay = document.getElementById('day').value;
        document.getElementById('day').value = "";
        data.personalCode = document.getElementById('Code').value;
        document.getElementById('Code').value = "";
        data.phoneNumber = document.getElementById('Number').value;
        document.getElementById('Number').value = "";
        data.email = document.getElementById('Youremail').value;
        document.getElementById('Youremail').value = "";
        data.city = document.getElementById('City').value;
        document.getElementById('City').value = "";
        data.street = document.getElementById('Street').value;
        document.getElementById('Street').value = "";
        data.houseNo = document.getElementById('House').value;
        document.getElementById('House').value = "";
        
        if(document.getElementById('Flat').value != "" || document.getElementById('Flat').value != undefined){
            data.flatNo = document.getElementById('Flat').value;
            document.getElementById('Flat').value = "";
        }

        if(document.getElementById('Contacts').value != "" || document.getElementById('Contacts').value != undefined){
           data.otherContacts = document.getElementById('Contacts').value;
           document.getElementById('Contacts').value = "";
        }

        

        var whichPadetis = document.getElementsByName('padetis');
        var wPadetis = getBullet(whichPadetis);
        data.maritalStatus = getBullet(whichPadetis);

        if(wPadetis === "Vedęs/ištekėjusi"){
            data.partnerName = document.getElementById('partnerName').value;
            data.partnerSurname = document.getElementById('PartnerSurname').value;
            data.partnerCode = document.getElementById('YourPartnerCode').value;

            document.getElementById('partnerName').value = ""; 
            document.getElementById('PartnerSurname').value = "";
            document.getElementById('YourPartnerCode').value = "";
            
            document.getElementById('partner').hidden = true;
        }

        deleteBullet(whichPadetis);
        data.numOfKids = document.getElementById('numberOFkids').value;

        if(document.getElementById('numberOFkids').value == 1){
            data.kidName1 = document.getElementById('childName').value;
            data.kidSurname1 = document.getElementById('childSurname').value;
            document.getElementById('childName').value = "";
            document.getElementById('childSurname').value = "";
            document.getElementById('kids').hidden = true; 
        }

        if(document.getElementById('numberOFkids').value > 1){
            data.kidName = document.getElementById('childName').value;
            data.kidSurname = document.getElementById('childSurname').value;
            document.getElementById('childName').value = "";
            document.getElementById('childSurname').value = "";
            document.getElementById('kids').hidden = true; 
            for(var t=1; t<document.getElementById('numberOFkids').value; t++){
                var n = 'kidName' + t;
                var s = 'kidSurname' + t;
                var nv = 'childName' + t;
                var sv = 'childSurname' + t;
                data.n = document.getElementById(nv).value;
                data.s = document.getElementById(sv).value;
                document.getElementById(nv).value = "";
                document.getElementById(sv).value = "";
            }
        }
        document.getElementById('numberOFkids').value = "";
        data.education = document.getElementById('level').value; 

        if(document.getElementById('level').value === "hcollage" || document.getElementById('level').value === "huniversity"){
            data.degree = document.getElementById('degreeLvl').value;
            document.getElementById('degreeLvl').value = 'bakalauras'
            document.getElementById('degree').hidden = true; 
        }

        document.getElementById('level').value = 'main';

        data.lastEducationPlace = document.getElementById('edPlace').value;
        document.getElementById('edPlace').value = "";
        data.educationEndYear = document.getElementById('educationEndYear').value;
        document.getElementById('educationEndYear').value = "";

        if(document.getElementById('Personqualification').value != "" || document.getElementById('Personqualification').value != undefined){
            data.qualification = document.getElementById('Personqualification').value;
            document.getElementById('Personqualification').value = "";
        }



        var whichStatus = document.getElementsByName('Status');
        var valueOfstatus = getBullet(whichStatus);
        data.professionStatus = valueOfstatus;

        if(valueOfstatus == "studijos"){
            data.studyLvl = document.getElementById('studiesLvl').value;
            data.course = document.getElementById('course').value;
            data.currentEducationPlace = document.getElementById('Istaiga').value;
            document.getElementById('studiesLvl').value = "first";
            document.getElementById('course').value = "1 kursas";
            document.getElementById('Istaiga').value = "";
            document.getElementById('studies').hidden = true;
        }

        if(valueOfstatus == "darbas"){
            data.workPlace = document.getElementById('Vieta').value;
            data.workPosition = document.getElementById('pareigos').value;
            document.getElementById('Vieta').value = "";
            document.getElementById('pareigos').value = "";
            document.getElementById('work').hidden = true;
        }

        if(valueOfstatus == "bedarbyste"){
            data.noWork = document.getElementById('bedarbioPriezastis').value;
            document.getElementById('bedarbioPriezastis').value = "";
            document.getElementById('notWorker').hidden = true;
        }

        deleteBullet(whichStatus);

        data.workExp = document.getElementById('darboStazas').value;
       
        if(document.getElementById('darboStazas').value >0){
            data.workType = document.getElementById('pobudis').value;
            data.workArea = document.getElementById('darboSritis').value;
            document.getElementById('pobudis').value = "";
            document.getElementById('darboSritis').value = "teise";
            document.getElementById('darboPobudis').hidden = true;
            document.getElementById('darbineSritis').hidden = true;
        }
        document.getElementById('darboStazas').value = "";
        //console.log(data.name)
        //idedamas objektas i masyva
        AllData.push(data);
    }
    //tikrina kuri varianta pasirinko
    function getBullet(radios){
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                ///console.log(radios[i].value)
                return radios[i].value;
                break;
            }
        }
    }
    ///panaikina pasirinkta varianta
    function deleteBullet(radios){
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                ///console.log(radios[i].value)
                radios[i].checked = false;
                break;
            }
        }
    }


