"use strict";
import FrameSizing from "./lib/FrameSizing.js";

(function(){
    // console.log(document.getElementById('screen'));
    window.addEventListener('resize',(e)=>{
        FrameSizing()
    })
    window.addEventListener('load',(e)=>{
        FrameSizing()
        const point_eles = document.getElementsByClassName('map-touch')
        // console.log(point_eles);
        for (const point of point_eles) {
            // console.log(point);
            point.addEventListener('click',(e)=>{
                // console.log(e.target);
                // alert(e.target.dataset.place);
                const float=document.getElementById('mapSelectFloat')
                float.classList.remove('none')
                const pname = document.getElementById('placeName')
                pname.innerHTML=e.target.dataset.place

                const noBtn = document.getElementById('mapSelectNo')
                noBtn.addEventListener('click',(e)=>{
                    float.classList.add('none')
                })
            })

        }
    })
})();