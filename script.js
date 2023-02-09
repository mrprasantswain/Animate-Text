
      var text_container=document.querySelector(".text_container"),
      texts=text_container.querySelectorAll(".text");
      var textArray=[], time=5000;
      
      texts.forEach((data, index)=>{
        textArray.push(data.innerText);
      })
      function InitialText(){
        text_container.innerHTML="";
        let mytext=textArray[0].split(""), myword="";
        for(let i in mytext){
          if(mytext[i]!=" "){
            myword=mytext[i]
          } else {
            myword="&nbsp;"
          }
          text_container.innerHTML+=`
          <span>${myword}</span>
          `;
        }
        DisplayText();
      }
      InitialText();
      var mytime=0;
      function DisplayText(myt){
        let count= myt ? myt : 0;
        text_container.innerHTML="";
        FormatText(textArray[count]);
      }
      
      function FormatText(data){
        let mytext=data.split(""), myword="";
        for(let i in mytext){
          if(mytext[i]!=" "){
            myword=mytext[i]
          } else {
            myword="&nbsp;"
          }
          text_container.innerHTML+=`
          <span>${myword}</span>
          `;
        }
        AnimateText();
      }
      
      function AnimateText(){
        let getText=text_container.querySelectorAll("span");
        let ms=getText.length / 1000;
        let sec=Math. floor((ms/1000) % 60) + 70;
        let count=0;
        let textAnimate = setInterval(()=>{
          if(count == getText.length-1){
            clearInterval(textAnimate);
          }
        getText[count].classList.add("AnimateText");
          count++;
        }, sec);
        setTimeout(()=>{
          RemoveAnim(sec)
        }, (sec * getText.length) + time);
      }
      
      function RemoveAnim(time, time3){
        
        let getText=text_container.querySelectorAll(".AnimateText");
        let ms=getText.length / 1000;
        let sec=Math. floor((ms/1000) % 60) + 70;
        let count=0;
        let textAnimate = setInterval(()=>{
          if(count == getText.length-1){
            clearInterval(textAnimate);
          }
        getText[count].classList.add("remove");
          count++;
        }, sec);
        
          if(mytime<textArray.length-1){
            mytime++;
          } else {
            mytime=0;
          }
          setTimeout(()=>{
          DisplayText(mytime);
            
          }, (sec * getText.length) + 700)
      }