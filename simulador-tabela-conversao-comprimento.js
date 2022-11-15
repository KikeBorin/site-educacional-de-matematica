function limpar(){
	location.reload();
}

function converter(){

    //capturamos o input//
    let capturando_input_km = document.querySelector('.km').value;    
    let capturando_input_hm = document.querySelector('.hm').value;
    let capturando_input_dam = document.querySelector('.dam').value;
    let capturando_input_m = document.querySelector('.m').value;
    let capturando_input_dm = document.querySelector('.dm').value;
    let capturando_input_cm = document.querySelector('.cm').value;
    let capturando_input_mm = document.querySelector('.mm').value;
    
    //calculo do km//
    if(capturando_input_km > 0 && capturando_input_hm == 0 && capturando_input_dam == 0 && 
        capturando_input_m == 0 && capturando_input_dm == 0 && capturando_input_cm == 0 &&
        capturando_input_mm == 0){
        
        let resultado_calculo_km = parseFloat(capturando_input_km.toString().replace("," , "."));
        document.querySelector(".mostrar_resultado_km_tela").innerHTML = "km = " 
        + (resultado_calculo_km.toString().replace(".",","));

        let resultado_calculo_hm = parseFloat(capturando_input_km.toString().replace("," , ".")) * 10;
        document.querySelector(".mostrar_resultado_hm_tela").innerHTML = "hm = " 
        + (resultado_calculo_hm.toString().replace(".",","));

        let resultado_calculo_dam = parseFloat(capturando_input_km.toString().replace("," , ".")) * 100;
        document.querySelector(".mostrar_resultado_dam_tela").innerHTML = "dam = " 
        + (resultado_calculo_dam.toString().replace(".",","));

        let resultado_calculo_m = parseFloat(capturando_input_km.toString().replace("," , ".")) * 1000;
        document.querySelector(".mostrar_resultado_m_tela").innerHTML = "m = " 
        + (resultado_calculo_m.toString().replace(".",","));

        let resultado_calculo_dm = parseFloat(capturando_input_km.toString().replace("," , ".")) * 10000;
        document.querySelector(".mostrar_resultado_dm_tela").innerHTML = "dm = " 
        + (resultado_calculo_dm.toString().replace(".",","));

        let resultado_calculo_cm = parseFloat(capturando_input_km.toString().replace("," , ".")) * 100000;
        document.querySelector(".mostrar_resultado_cm_tela").innerHTML = "cm = " 
        + (resultado_calculo_cm.toString().replace(".",","));

        let resultado_calculo_mm = parseFloat(capturando_input_km.toString().replace("," , ".")) * 1000000;
        document.querySelector(".mostrar_resultado_mm_tela").innerHTML = "mm = " 
        + (resultado_calculo_mm.toString().replace(".",","));

    }

    //calculo do hm//
    if(capturando_input_km == 0 && capturando_input_hm > 0 && capturando_input_dam == 0 && 
        capturando_input_m == 0 && capturando_input_dm == 0 && capturando_input_cm == 0 &&
        capturando_input_mm == 0){
        
        let resultado_calculo_km = parseFloat(capturando_input_hm.toString().replace("," , ".")) / 10;
        document.querySelector(".mostrar_resultado_km_tela").innerHTML = "km = " 
        + (resultado_calculo_km.toString().replace(".",","));

        let resultado_calculo_hm = parseFloat(capturando_input_hm.toString().replace("," , "."));
        document.querySelector(".mostrar_resultado_hm_tela").innerHTML = "hm = " 
        + (resultado_calculo_hm.toString().replace(".",","));

        let resultado_calculo_dam = parseFloat(capturando_input_hm.toString().replace("," , ".")) * 10;
        document.querySelector(".mostrar_resultado_dam_tela").innerHTML = "dam = " 
        + (resultado_calculo_dam.toString().replace(".",","));

        let resultado_calculo_m = parseFloat(capturando_input_hm.toString().replace("," , ".")) * 100;
        document.querySelector(".mostrar_resultado_m_tela").innerHTML = "m = " 
        + (resultado_calculo_m.toString().replace(".",","));

        let resultado_calculo_dm = parseFloat(capturando_input_hm.toString().replace("," , ".")) * 1000;
        document.querySelector(".mostrar_resultado_dm_tela").innerHTML = "dm = " 
        + (resultado_calculo_dm.toString().replace(".",","));

        let resultado_calculo_cm = parseFloat(capturando_input_hm.toString().replace("," , ".")) * 10000;
        document.querySelector(".mostrar_resultado_cm_tela").innerHTML = "cm = " 
        + (resultado_calculo_cm.toString().replace(".",","));

        let resultado_calculo_mm = parseFloat(capturando_input_hm.toString().replace("," , ".")) * 100000;
        document.querySelector(".mostrar_resultado_mm_tela").innerHTML = "mm = " 
        + (resultado_calculo_mm.toString().replace(".",","));

    }

    //calculo do dam//
    if(capturando_input_km == 0 && capturando_input_hm == 0 && capturando_input_dam > 0 && 
        capturando_input_m == 0 && capturando_input_dm == 0 && capturando_input_cm == 0 &&
        capturando_input_mm == 0){
        
        let resultado_calculo_km = parseFloat(capturando_input_dam.toString().replace("," , ".")) / 100;
        document.querySelector(".mostrar_resultado_km_tela").innerHTML = "km = " 
        + (resultado_calculo_km.toString().replace(".",","));

        let resultado_calculo_hm = parseFloat(capturando_input_dam.toString().replace("," , ".")) / 10;
        document.querySelector(".mostrar_resultado_hm_tela").innerHTML = "hm = " 
        + (resultado_calculo_hm.toString().replace(".",","));

        let resultado_calculo_dam = parseFloat(capturando_input_dam.toString().replace("," , "."));
        document.querySelector(".mostrar_resultado_dam_tela").innerHTML = "dam = " 
        + (resultado_calculo_dam.toString().replace(".",","));

        let resultado_calculo_m = parseFloat(capturando_input_dam.toString().replace("," , ".")) * 10;
        document.querySelector(".mostrar_resultado_m_tela").innerHTML = "m = " 
        + (resultado_calculo_m.toString().replace(".",","));

        let resultado_calculo_dm = parseFloat(capturando_input_dam.toString().replace("," , ".")) * 100;
        document.querySelector(".mostrar_resultado_dm_tela").innerHTML = "dm = " 
        + (resultado_calculo_dm.toString().replace(".",","));

        let resultado_calculo_cm = parseFloat(capturando_input_dam.toString().replace("," , ".")) * 1000;
        document.querySelector(".mostrar_resultado_cm_tela").innerHTML = "cm = " 
        + (resultado_calculo_cm.toString().replace(".",","));

        let resultado_calculo_mm = parseFloat(capturando_input_dam.toString().replace("," , ".")) * 10000;
        document.querySelector(".mostrar_resultado_mm_tela").innerHTML = "mm = " 
        + (resultado_calculo_mm.toString().replace(".",","));
    }

    //calculo do m//
    if(capturando_input_km == 0 && capturando_input_hm == 0 && capturando_input_dam == 0 && 
        capturando_input_m > 0 && capturando_input_dm == 0 && capturando_input_cm == 0 &&
        capturando_input_mm == 0){
        
        let resultado_calculo_km = parseFloat(capturando_input_m.toString().replace("," , ".")) / 1000;
        document.querySelector(".mostrar_resultado_km_tela").innerHTML = "km = " 
        + (resultado_calculo_km.toString().replace(".",","));

        let resultado_calculo_hm = parseFloat(capturando_input_m.toString().replace("," , ".")) / 100;
        document.querySelector(".mostrar_resultado_hm_tela").innerHTML = "hm = " 
        + (resultado_calculo_hm.toString().replace(".",","));

        let resultado_calculo_dam = parseFloat(capturando_input_m.toString().replace("," , ".")) / 10;
        document.querySelector(".mostrar_resultado_dam_tela").innerHTML = "dam = " 
        + (resultado_calculo_dam.toString().replace(".",","));

        let resultado_calculo_m = parseFloat(capturando_input_m.toString().replace("," , "."));
        document.querySelector(".mostrar_resultado_m_tela").innerHTML = "m = " 
        + (resultado_calculo_m.toString().replace(".",","));

        let resultado_calculo_dm = parseFloat(capturando_input_m.toString().replace("," , ".")) * 10;
        document.querySelector(".mostrar_resultado_dm_tela").innerHTML = "dm = " 
        + (resultado_calculo_dm.toString().replace(".",","));

        let resultado_calculo_cm = parseFloat(capturando_input_m.toString().replace("," , ".")) * 100;
        document.querySelector(".mostrar_resultado_cm_tela").innerHTML = "cm = " 
        + (resultado_calculo_cm.toString().replace(".",","));

        let resultado_calculo_mm = parseFloat(capturando_input_m.toString().replace("," , ".")) * 1000;
        document.querySelector(".mostrar_resultado_mm_tela").innerHTML = "mm = " 
        + (resultado_calculo_mm.toString().replace(".",","));

    }

    //calculo do dm//
    if(capturando_input_km == 0 && capturando_input_hm == 0 && capturando_input_dam == 0 && 
        capturando_input_m == 0 && capturando_input_dm > 0 && capturando_input_cm == 0 &&
        capturando_input_mm == 0){
        
        let resultado_calculo_km = parseFloat(capturando_input_dm.toString().replace("," , ".")) / 10000;
        document.querySelector(".mostrar_resultado_km_tela").innerHTML = "km = " 
        + (resultado_calculo_km.toString().replace(".",","));

        let resultado_calculo_hm = parseFloat(capturando_input_dm.toString().replace("," , ".")) / 1000;
        document.querySelector(".mostrar_resultado_hm_tela").innerHTML = "hm = " 
        + (resultado_calculo_hm.toString().replace(".",","));

        let resultado_calculo_dam = parseFloat(capturando_input_dm.toString().replace("," , ".")) / 100;
        document.querySelector(".mostrar_resultado_dam_tela").innerHTML = "dam = " 
        + (resultado_calculo_dam.toString().replace(".",","));

        let resultado_calculo_m = parseFloat(capturando_input_dm.toString().replace("," , ".")) / 10;
        document.querySelector(".mostrar_resultado_m_tela").innerHTML = "m = " 
        + (resultado_calculo_m.toString().replace(".",","));

        let resultado_calculo_dm = parseFloat(capturando_input_dm.toString().replace("," , "."));
        document.querySelector(".mostrar_resultado_dm_tela").innerHTML = "dm = " 
        + (resultado_calculo_dm.toString().replace(".",","));

        let resultado_calculo_cm = parseFloat(capturando_input_dm.toString().replace("," , ".")) * 10;
        document.querySelector(".mostrar_resultado_cm_tela").innerHTML = "cm = " 
        + (resultado_calculo_cm.toString().replace(".",","));

        let resultado_calculo_mm = parseFloat(capturando_input_dm.toString().replace("," , ".")) * 100;
        document.querySelector(".mostrar_resultado_mm_tela").innerHTML = "mm = " 
        + (resultado_calculo_mm.toString().replace(".",","));

    }

    //calculo do cm//
    if(capturando_input_km == 0 && capturando_input_hm == 0 && capturando_input_dam == 0 && 
        capturando_input_m == 0 && capturando_input_dm == 0 && capturando_input_cm > 0 &&
        capturando_input_mm == 0){
        
        let resultado_calculo_km = parseFloat(capturando_input_cm.toString().replace("," , ".")) / 100000;
        document.querySelector(".mostrar_resultado_km_tela").innerHTML = "km = " 
        + (resultado_calculo_km.toString().replace(".",","));

        let resultado_calculo_hm = parseFloat(capturando_input_cm.toString().replace("," , ".")) / 10000;
        document.querySelector(".mostrar_resultado_hm_tela").innerHTML = "hm = " 
        + (resultado_calculo_hm.toString().replace(".",","));

        let resultado_calculo_dam = parseFloat(capturando_input_cm.toString().replace("," , ".")) / 1000;
        document.querySelector(".mostrar_resultado_dam_tela").innerHTML = "dam = " 
        + (resultado_calculo_dam.toString().replace(".",","));

        let resultado_calculo_m = parseFloat(capturando_input_cm.toString().replace("," , ".")) / 100;
        document.querySelector(".mostrar_resultado_m_tela").innerHTML = "m = " 
        + (resultado_calculo_m.toString().replace(".",","));

        let resultado_calculo_dm = parseFloat(capturando_input_cm.toString().replace("," , ".")) / 10;
        document.querySelector(".mostrar_resultado_dm_tela").innerHTML = "dm = " 
        + (resultado_calculo_dm.toString().replace(".",","));

        let resultado_calculo_cm = parseFloat(capturando_input_cm.toString().replace("," , "."));
        document.querySelector(".mostrar_resultado_cm_tela").innerHTML = "cm = " 
        + (resultado_calculo_cm.toString().replace(".",","));

        let resultado_calculo_mm = parseFloat(capturando_input_cm.toString().replace("," , ".")) * 10;
        document.querySelector(".mostrar_resultado_mm_tela").innerHTML = "mm = " 
        + (resultado_calculo_mm.toString().replace(".",","));
    }

    //calculo do mm//
    if(capturando_input_km == 0 && capturando_input_hm == 0 && capturando_input_dam == 0 && 
        capturando_input_m == 0 && capturando_input_dm == 0 && capturando_input_cm == 0 &&
        capturando_input_mm > 0){
        
        let resultado_calculo_km = parseFloat(capturando_input_mm.toString().replace("," , ".")) / 1000000;
        document.querySelector(".mostrar_resultado_km_tela").innerHTML = "km = " 
        + (resultado_calculo_km.toString().replace(".",","));

        let resultado_calculo_hm = parseFloat(capturando_input_mm.toString().replace("," , ".")) / 100000;
        document.querySelector(".mostrar_resultado_hm_tela").innerHTML = "hm = " 
        + (resultado_calculo_hm.toString().replace(".",","));

        let resultado_calculo_dam = parseFloat(capturando_input_mm.toString().replace("," , ".")) / 10000;
        document.querySelector(".mostrar_resultado_dam_tela").innerHTML = "dam = " 
        + (resultado_calculo_dam.toString().replace(".",","));

        let resultado_calculo_m = parseFloat(capturando_input_mm.toString().replace("," , ".")) / 1000;
        document.querySelector(".mostrar_resultado_m_tela").innerHTML = "m = " 
        + (resultado_calculo_m.toString().replace(".",","));

        let resultado_calculo_dm = parseFloat(capturando_input_mm.toString().replace("," , ".")) / 100;
        document.querySelector(".mostrar_resultado_dm_tela").innerHTML = "dm = " 
        + (resultado_calculo_dm.toString().replace(".",","));

        let resultado_calculo_cm = parseFloat(capturando_input_mm.toString().replace("," , ".")) / 10;
        document.querySelector(".mostrar_resultado_cm_tela").innerHTML = "cm = " 
        + (resultado_calculo_cm.toString().replace(".",","));

        let resultado_calculo_mm = parseFloat(capturando_input_mm.toString().replace("," , "."));
        document.querySelector(".mostrar_resultado_mm_tela").innerHTML = "mm = " 
        + (resultado_calculo_mm.toString().replace(".",","));
    }
    
 }