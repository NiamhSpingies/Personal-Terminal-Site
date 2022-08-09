
class Commands{

    constructor(command){
        this.name = command;
    }

    response(){
        docuent.write("This is a response")
    }

}

class help extends Commands{

    response(){
        // new element 
        document.write("These are the commands: \
        \n [ help - display commands\
        about - learn a little more about me \
        git - check out my latest projects\
        -cv - download a pdf of my CV\
        email - send me a direct email!\
        sudo - that's a secret \
        ]");
    }
}


class about extends Commands{
    response(){
        docuent.write("My name is Niamh Spingies")
    }   
}


function git(){
    
}


function cv(){
    
}


function email(){
    
}


function sudo(){
    
}