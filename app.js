

    const endButton = document.querySelector('#BaigtiAnketa') 
    //endButton.addEventListener('click', getData)
    endButton.addEventListener('click', check)
    var AllData = [];
    var count  = 0;
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

    function handleClick2(){
        numberOfKidsNow = document.getElementById('numberOFkids').value;

      /*  const kidsDivDel = document.getElementById('kids');
        var allNodes = kidsDivDel.childNodes;
        console.log(allNodes);

        if(numberOfKidsWas > numberOfKidsNow){

            kidsDivDel.removeChild(allNodes[allNodes.length - 1]);
            kidsDivDel.removeChild(allNodes[allNodes.length - 1]);
            kidsDivDel.removeChild(allNodes[allNodes.length - 1]);
            kidsDivDel.removeChild(allNodes[allNodes.length - 1]);
            return;
        }
*/
        if(document.getElementById('numberOFkids').value == 1){
            document.getElementById('kids').hidden = false
            console.log('a4');
        }
        if(document.getElementById('numberOFkids').value > 1){
            document.getElementById('kids').hidden = false
            var number = document.getElementById('numberOFkids').value - 1;
            console.log('a2');
            const kidsDiv = document.getElementById('kids');
            for(var j=2; j<number+2; j++){

                console.log('a3');
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

                // name p

                const kidnp = document.createElement('p')

                kidnp.className = 'redInfo'
                kidnp.id = 'vaikoVardasIvestas';
                kidnp.hidden = true;
                var npText = document.createTextNode('Vaiko vardas turi būti nurodytas');
                kidnp.appendChild(npText);

                kidn.appendChild(kidnp)

                const kidnbr = document.createElement('br')
                kidn.appendChild(kidnbr)


                // name input


                const kidni = document.createElement('input')
                kidni.id = "childName" + j;;
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

                //surname p
                const kidsp = document.createElement('p')

                kidsp.className = 'redInfo'
                kidsp.id = 'vaikoVardasIvestas';
                kidsp.hidden = true;
                var spText = document.createTextNode('Vaiko vardas turi būti nurodytas');
                kidsp.appendChild(spText);

                kids.appendChild(kidsp)

                const kidsbr = document.createElement('br')
                kids.appendChild(kidsbr)

                //surname input
    
                const kidsi = document.createElement('input')
                kidsi.id = "childSurname" + j;;
                kidsi.type = "text";
                kidsi.name = "childSurname" + j;

                kids.appendChild(kidsi)
                kidsDiv.appendChild(kids)



                // grid.appendChild(square)
                // squares.push(square)
                // document.getElementById('kids').appendChild
                //data.vaikoVardas =  

                

            }
        }
        this.numberOfKidsWas = numberOfKidsNow;
    }

    function check(){
        notification('yourName', 'vardasIvestas')
        notification('yoursurname', 'PavardeIvestas')
        notificationName('gender','lytisIvestas')
        notification('year','gimimoDataIvestas')
        notification('month','gimimoDataIvestas')
        notification('day','gimimoDataIvestas')
        notification('Code','asmensKodasIvestas')
        notification('Number','telefonasIvestas')
        notification('Youremail','elPastasIvestas')
        notification('City','miestasIvestas')
        notification('Street','gatveIvestas')
        notification('House','namoNrIvestas')
        notificationName('padetis','vedybosIvestas')
        notification('partnerName','partneriovardasIvestas')
        notification('PartnerSurname','partnerioPavardeIvestas')
        notification('YourPartnerCode','partnerioKodasIvestas')
        notification('numberOFkids','vaikaiIvestas')
        notification('childName','vaikoVardasIvestas')
        notification('childSurname','vaikoPavardeIvestas')
        notification('level','issilavinimasIvestas')
        notification('edPlace','mokymoIstaigaIvestas')
        notification('educationEndYear','baigimoMetaiIvestas')
        notification('degreeLvl','moksloLaipsnisIvestas')
        notificationName('Status','profesinePadetisIvestas')
        notification('studiesLvl','studijuPakopaIvestas')
        notification('course','kursasIvestas')
        notification('Istaiga','dabartineMokymoIstaigaIvestas')
        notification('Vieta','darboIstaigaIvestas')
        notification('pareigos','pareigosIvestas')
        notification('bedarbioPriezastis','bedarbisIvestas')
        notification('darboStazas','patirtisIvestas')
        notification('pobudis','pobudisIvestas')
        notification('darboSritis','darboSritisIvestas')
        if(count >0) document.getElementById('klaida').hidden = false;
    }
    
    function notification(a,b){
        if(document.getElementById(a).value === "") {
            document.getElementById(b).hidden = false;
            count++;
        }
    }
    function notificationName(a,b){
        if(getBullet(document.getElementsByName(a)) === undefined){
             document.getElementById(b).hidden = false;
             count++;
        }
    }

    function getData(){ 

        data.name = document.getElementById('yourName').value;
        data.secondName = document.getElementById('YoursecondName').value;
        data.surname = document.getElementById('yoursurname').value;
        data.prevSurname = document.getElementById('prevSurname').value;

        var whichGender = document.getElementsByName('gender');
        data.gender = getBullet(whichGender);

        data.birthyear = document.getElementById('year').value;
        data.birthMonth = document.getElementById('month').value;
        data.birthDay = document.getElementById('day').value;
        data.personalCode = document.getElementById('Code').value;
        data.phoneNumber = document.getElementById('Number').value;
        data.email = document.getElementById('Youremail').value;
        data.city = document.getElementById('City').value;
        data.street = document.getElementById('Street').value;
        data.houseNo = document.getElementById('House').value;
        data.flatNo = document.getElementById('Flat').value;
        data.otherContacts = document.getElementById('Contacts').value;

        var whichPadetis = document.getElementsByName('padetis');
        data.maritalStatus = getBullet(whichPadetis);

        data.partnerName = document.getElementById('partnerName').value;
        data.partnerSurname = document.getElementById('PartnerSurname').value;
        data.partnerCode = document.getElementById('YourPartnerCode').value;
        data.numOfKids = document.getElementById('numberOFkids').value;
        data.kidName1 = document.getElementById('childName').value;
        data.kidSurname1 = document.getElementById('childSurname').value;


        data.education = document.getElementById('level').value;
        data.lastEducationPlace = document.getElementById('edPlace').value;
        data.educationEndYear = document.getElementById('educationEndYear').value;
        data.qualification = document.getElementById('Personqualification').value;
        data.degree = document.getElementById('degreeLvl').value;

        var whichStatus = document.getElementByName('Status');
        data.professionStatus = getBullet(whichStatus)

        data.studyLvl = document.getElementById('studiesLvl').value;
        data.course = document.getElementById('course').value;
        data.currentEducationPlace = document.getElementById('Istaiga').value;
        data.workPlace = document.getElementById('Vieta').value;
        data.workPosition = document.getElementById('pareigos').value;
        data.noWork = document.getElementById('bedarbioPriezastis').value;
        data.workExp = document.getElementById('darboStazas').value;
        data.workType = document.getElementById('pobudis').value;
        data.workArea = document.getElementById('darboSritis').value;
        //console.log(data.name)
        AllData.push(data);


    }

    function getBullet(radios){
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                ///console.log(radios[i].value)
                return radios[i].value;
                break;
            }
        }
    }


