const inputAll = document.getElementById("All");
const inputWork = document.getElementById("works");
const inputEdu = document.getElementById("education");
const inputSkill = document.getElementById("skill");


function Reset() {

    inputAll.value = "";
    inputAll.focus();
    inputAll.classList.remove("input-error");

    inputWork.value = "";
    inputWork.classList.remove("input-error");

    inputEdu.value = "";
    inputEdu.classList.remove("input-error");

    inputSkill.value = "";
    inputSkill.classList.remove("input-error");

}

create = () => {
    if (validate()) {
        alert("Generado con exito")


        let All = inputAll.value.concat(",");
        const ArrayAll = [];

        for (let i = 0; 1 <= All.length; i++) {

            const InAll = All.indexOf(",");

            const NewAll = All.slice(0, InAll);

            All = All.replace(NewAll + ",", "");
            ArrayAll.push(NewAll);
        }
        ////////////////////////
        let Work = inputWork.value.concat(",");
        const ArrayWork = [];

        for (let i = 0; 1 <= Work.length; i++) {

            const InWork = Work.indexOf(",");
            const NewWork = Work.slice(0, InWork);

            Work = Work.replace(NewWork + ",", "");

            ArrayWork.push(NewWork);
        }
        ///////////////////////////////
        let education = inputEdu.value.concat(",");
        const ArrayEdu = [];

        for (let i = 0; 1 <= education.length; i++) {

            const indexEdu = education.indexOf(",");
            const NewEdu = education.slice(0, indexEdu);

            education = education.replace(NewEdu + ",", "");

            ArrayEdu.push(NewEdu);
        }
        ////////////////////////
        let Skill = inputSkill.value.concat(",");

        const ArraySkill = [];

        for (let i = 0; 1 <= Skill.length; i++) {

            const indexSkill = Skill.indexOf(",");
            const NewSkill = Skill.slice(0, indexSkill);

            Skill = Skill.replace(NewSkill + ",", "");

            ArraySkill.push(NewSkill);
        }





        const mainContainer = document.getElementById("Container-CV");

        const divMd10 = document.createElement("div");
        divMd10.setAttribute("class", "col-md-10 offset-1 mt-3");

        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");

        const divCardbody = document.createElement("div");
        divCardbody.setAttribute("class", "card-body bg-primary text-light rounded");

        const divMd4 = document.createElement("div");
        divMd4.setAttribute("class", "col-md-4 float-start ms-md-auto");
        //////////////////////////////////////////////////////////////
        const img = document.createElement("img");
        img.setAttribute("height", "310");
        img.setAttribute("width", "310");
        img.setAttribute("class", "rounded-circle my-3");
        img.setAttribute("src", "img/fSAFBSDVZXCCAS.png");

        const div1 = document.createElement("div");
        div1.setAttribute("class", "mb-4");

        const h2Name = document.createElement("h2");
        h2Name.innerText = ArrayAll[0];

        const divmd10int1 = document.createElement("div");
        divmd10int1.setAttribute("class", "col-md-10 float-start bg-info mb-2 rounded");

        const minidiv1 = document.createElement("div");
        minidiv1.setAttribute("class", "mb-2 mt-2");

        const h5Perfil = document.createElement("h5");
        h5Perfil.innerText = " " + "Perfil";

        const div2 = document.createElement("div");
        div2.setAttribute("class", "mb-5 float-start");
        const p = document.createElement("p");

        p.innerText = " " + ArrayAll[2];
        /////////////////////////////////////////////////////


        const divmd10int2 = document.createElement("div");
        divmd10int2.setAttribute("class", "col-md-10 float-start bg-info mb-2 rounded");

        const minidiv2 = document.createElement("div");
        minidiv2.setAttribute("class", "mb-2 mt-2");

        const h5Contact = document.createElement("h5");
        h5Contact.innerText = " " + "Contactos";

        const div3 = document.createElement("div");
        div3.setAttribute("class", "float-start");

        const ul1 = document.createElement("ul");
        ul1.setAttribute("class", "list-group list-group-flush");

        const licorrero = document.createElement("li");
        licorrero.setAttribute("class", "list-group-item rounded-pill mb-1");
        licorrero.innerText = "Correo: " + ArrayAll[3];
        const liWeb = document.createElement("li");
        liWeb.setAttribute("class", "list-group-item rounded-pill mb-1");
        liWeb.innerText = "Pagina web: " + ArrayAll[5];
        const liPhone = document.createElement("li");
        liPhone.setAttribute("class", "list-group-item rounded-pill mb-2");
        liPhone.innerText = "Telefono: " + ArrayAll[4];

        ///////////////////////////////////////////////////////
        const divis = document.createElement("div");
        divis.setAttribute("class", "mb-1");

        const divmd10int3 = document.createElement("div");
        divmd10int3.setAttribute("class", "col-md-10 float-start bg-info mb-2 rounded");

        const minidiv3 = document.createElement("div");
        minidiv3.setAttribute("class", "mb-2 mt-2");

        const h5Hobbies = document.createElement("h5");
        h5Hobbies.innerText = " " + "Hobbies";

        const div4 = document.createElement("div");
        div4.setAttribute("class", "float-start");

        const ul2 = document.createElement("ul");
        ul2.setAttribute("class", "list-group list-group-flush");

        const li1 = document.createElement("li");
        li1.setAttribute("class", "list-group-item rounded-pill mb-5");
        li1.innerText = "Hobby: " + ArrayAll[6];

        const liCargo = document.createElement("li");
        liCargo.setAttribute("class", "list-group-item rounded-pill mt-5");
        liCargo.innerText = "Cargo: " + ArrayAll[1];

        ////////////////////////////////////////////////////////////
        const divmd8Emp = document.createElement("div");
        divmd8Emp.setAttribute("class", "col-md-8 my-3 bg-light mt-5 float-end rounded");
        divmd8Emp.setAttribute("Style", "height: 68rem;");

        const divmd11Emp = document.createElement("div");
        divmd11Emp.setAttribute("class", "col-md-11 bg-primary rounded-start mb-2 mt-5 float-end");

        const minidiv4Emp = document.createElement("div");
        minidiv4Emp.setAttribute("class", "mb-3 mt-2");

        const h4Emp = document.createElement("h4");
        h4Emp.innerText = "Empleos";

        const divmd11Emps = document.createElement("div");
        divmd11Emps.setAttribute("class", "col-md-11 float-end text-dark");

        const ulEmp = document.createElement("ul");
        ulEmp.setAttribute("class", "list-group list-group-flush");

        const liEmp = document.createElement("li");
        liEmp.setAttribute("class", "list-group-item mb-2");
        liEmp.innerText = ArrayWork[0];
        const liEmp2 = document.createElement("li");
        liEmp2.setAttribute("class", "list-group-item mb-2");
        liEmp2.innerText = ArrayWork[1];
        const liEmp3 = document.createElement("li");
        liEmp3.setAttribute("class", "list-group-item mb-2");
        liEmp3.innerText = ArrayWork[2];

        ////////////////////////////////////////////////////////////


        const divmd11Edu = document.createElement("div");
        divmd11Edu.setAttribute("class", "col-md-11 bg-primary rounded-start mb-2 mt-5 float-end");

        const minidiv4Edu = document.createElement("div");
        minidiv4Edu.setAttribute("class", "mb-3 mt-2");

        const h4Edu = document.createElement("h4");
        h4Edu.innerText = "Educacion";

        const divmd11Edus = document.createElement("div");
        divmd11Edus.setAttribute("class", "col-md-11 float-end text-dark");

        const ulEdu = document.createElement("ul");
        ulEdu.setAttribute("class", "list-group list-group-flush");

        const liEdu = document.createElement("li");
        liEdu.setAttribute("class", "list-group-item mb-2");
        liEdu.innerText = ArrayEdu[0];
        const liEdu2 = document.createElement("li");
        liEdu2.setAttribute("class", "list-group-item mb-2");
        liEdu2.innerText = ArrayEdu[1];
        const liEdu3 = document.createElement("li");
        liEdu3.setAttribute("class", "list-group-item mb-2");
        liEdu3.innerText = ArrayEdu[2];
        ////////////////////////////////////////////////////////////////



        const divmd11Skill = document.createElement("div");
        divmd11Skill.setAttribute("class", "col-md-11 bg-primary rounded-start mb-2 mt-5 float-end");

        const minidiv4Skill = document.createElement("div");
        minidiv4Skill.setAttribute("class", "mb-3 mt-2");

        const h4Skill = document.createElement("h4");
        h4Skill.innerText = "Skills";

        const divmd11Skills = document.createElement("div");
        divmd11Skills.setAttribute("class", "col-md-11 float-end text-dark");

        const ulSkill = document.createElement("ul");
        ulSkill.setAttribute("class", "list-group list-group-flush");

        const liSkill = document.createElement("li");
        liSkill.setAttribute("class", "list-group-item mb-2");
        liSkill.innerText = ArraySkill[0];
        const liSkill2 = document.createElement("li");
        liSkill2.setAttribute("class", "list-group-item mb-2");
        liSkill2.innerText = ArraySkill[1];
        const liSkill3 = document.createElement("li");
        liSkill3.setAttribute("class", "list-group-item mb-2");
        liSkill3.innerText = ArraySkill[2];
        const liSkill4 = document.createElement("li");
        liSkill4.setAttribute("class", "list-group-item mb-2");
        liSkill4.innerText = ArraySkill[3];
        const liSkill5 = document.createElement("li");
        liSkill5.setAttribute("class", "list-group-item mb-2");
        liSkill5.innerText = ArraySkill[4];
        const liSkill6 = document.createElement("li");
        liSkill6.setAttribute("class", "list-group-item mb-2");
        liSkill6.innerText = ArraySkill[5];
        ///////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
        mainContainer.appendChild(divMd10);
        divMd10.appendChild(divCard);
        divCard.appendChild(divCardbody);
        divCardbody.appendChild(divMd4);
        divCardbody.appendChild(divmd8Emp);

        divMd4.appendChild(img);
        divMd4.appendChild(div1);
        divMd4.appendChild(divmd10int1);
        divMd4.appendChild(div2);
        divMd4.appendChild(divmd10int2);
        divMd4.appendChild(div3);
        divMd4.appendChild(divmd10int3);
        divMd4.appendChild(div4);
        divMd4.appendChild(divis);






        div1.appendChild(h2Name);
        divmd10int1.appendChild(minidiv1);
        minidiv1.appendChild(h5Perfil);
        div2.appendChild(p);

        //////////////////////////
        minidiv2.appendChild(h5Contact);
        divmd10int2.appendChild(minidiv2);
        div3.appendChild(ul1);


        ul1.appendChild(licorrero);
        ul1.appendChild(liPhone);
        ul1.appendChild(liWeb);
        /////////////////////
        minidiv3.appendChild(h5Hobbies);
        divmd10int3.appendChild(minidiv3);
        divis.appendChild(divmd10int3);
        divis.appendChild(div4);
        div4.appendChild(ul2);
        ul2.appendChild(li1);
        ul2.appendChild(liCargo);




        //////////////////////

        divmd8Emp.appendChild(divmd11Emp);
        divmd8Emp.appendChild(divmd11Emps);
        divmd8Emp.appendChild(divmd11Edu);
        divmd8Emp.appendChild(divmd11Edus);
        divmd8Emp.appendChild(divmd11Skill);
        divmd8Emp.appendChild(divmd11Skills);




        divmd11Emp.appendChild(minidiv4Emp);
        minidiv4Emp.appendChild(h4Emp);
        divmd11Emps.appendChild(ulEmp);
        ulEmp.appendChild(liEmp);
        ulEmp.appendChild(liEmp2);
        ulEmp.appendChild(liEmp3);



        //////////////////////

        divmd11Edu.appendChild(minidiv4Edu);
        minidiv4Edu.appendChild(h4Edu);
        divmd11Edus.appendChild(ulEdu);

        ulEdu.appendChild(liEdu);
        ulEdu.appendChild(liEdu2);
        ulEdu.appendChild(liEdu3);


        /////////////////////
        divmd11Skill.appendChild(minidiv4Skill);
        minidiv4Skill.appendChild(h4Skill);
        divmd11Skills.appendChild(ulSkill);

        ulSkill.appendChild(liSkill);
        ulSkill.appendChild(liSkill2);
        ulSkill.appendChild(liSkill3);
        ulSkill.appendChild(liSkill4);
        ulSkill.appendChild(liSkill5);
        ulSkill.appendChild(liSkill6);

        Reset();
    } else {
        alert("Debe llenar todos los campos")
    }
}


function validate() {

    let IsValid = true;

    const valueAll = inputAll.value;

    if (valueAll == "" || valueAll == null || valueAll == undefined) {
        inputAll.classList.add("input-error");
        IsValid = false;
    } else {
        inputAll.classList.remove("input-error");
    }
    const valueWork = inputWork.value;

    if (valueWork == "" || valueWork == null || valueWork == undefined) {
        inputWork.classList.add("input-error");
        IsValid = false;
    } else {
        inputWork.classList.remove("input-error");
    }
    const valueEdu = inputEdu.value;

    if (valueEdu == "" || valueEdu == null || valueEdu == undefined) {
        inputEdu.classList.add("input-error");
        IsValid = false;
    } else {
        inputEdu.classList.remove("input-error");
    }
    const valueSkill = inputSkill.value;

    if (valueSkill == "" || valueSkill == null || valueSkill == undefined) {
        inputSkill.classList.add("input-error");
        IsValid = false;
    } else {
        inputSkill.classList.remove("input-error");
    }

    return IsValid;
}