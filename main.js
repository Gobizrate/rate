import {getValueRadio,setInner,onClick,hide,show} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";
import {get} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";


get("https://mrt.ulbi.ac.id/notif/ux/getlaporan/"+getHash(),runafterGet)

onClick("tombol",runOnRating);

function runafterGet(result){
    console.log(result);
    setInner("petugas",result.petugas);
    setInner("solusi",result.solusi);
}

function runOnRating(){
    let pil=getValueRadio("rating");
    console.log(pil);
    show("tombol");
}