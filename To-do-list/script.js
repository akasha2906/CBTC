console.log("to do");
let taskname=document.getElementById("taskname")
let description=document.getElementById("description")
let duedate=document.getElementById("duedate")
let section=document.getElementById("workspace")
console.log(5);

function addtask() {
        console.log(taskname.value);
        console.log(description.value);
        console.log(duedate.value);    
        console.log(section);
        let div=document.createElement("div")
        let tname=document.createElement("h1")
        let ddate=document.createElement("p")
        let des=document.createElement("p")
        let dbtn=document.createElement("button")
        dbtn.setAttribute("id","deletebtn")
        dbtn.setAttribute("onclick","deleteee(event)")

        dbtn.innerText="Done"

        tname.append(taskname.value)
        ddate.append(duedate.value)
        des.append(description.value)
        ddate.setAttribute("class","aligndata")
        
        div.append(tname)
        div.append(des)
        div.append(ddate)
        div.append(dbtn)

        section.append(div)

        console.log(section);
    

}

function deleteee(event){
    console.log("done");
    event.target.parentElement.remove();

}