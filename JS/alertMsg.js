
function prepareSp() {
    Swal.fire({
        title: 'PREPARA TU MENTE...',
        html: `<h3>10 PREGUNTAS</h3>
               <p>Reglas:</p>
               <ul>
                  <ol>1. Cada pregunta vale 10 puntos</ol>
                  <ol>2. El puntaje máximo es de 100 PTS</ol>
                  <ol>3. No es posible retroceder o salir del quiz</ol>
                  <ol>4. No hagas trampa y utiliza la MENTE!</ol>
               </ul>`,
        timer: 10500,
        timerProgressBar: true,
        allowOutsideClick: false,
        icon: 'info',
        didOpen: () => {
          Swal.showLoading()
        }
      })
      setTimeout( () => {
          Swal.fire({
              title: '¡COMIENZA!',
              timer: 1000,
              allowOutsideClick: false,
              icon: 'success',
              showConfirmButton: false,
            })
      },10500)
}

function prepareEn() {
    Swal.fire({
        title: 'PREPARE YOUR MIND...',
        html: `<h3>10 QUESTIONS</h3>
        <p>Rules:</p>
        <ul>
           <ol>1. Each question worth 10 points</ol>
           <ol>2. Maximum score is 100 PTS</ol>
           <ol>3. It's not possible to go back or quit from the quiz</ol>
           <ol>4. Don't cheat and use your MIND!</ol>
        </ul>`,
        timer: 10500,
        timerProgressBar: true,
        allowOutsideClick: false,
        icon: 'info',
        didOpen: () => {
          Swal.showLoading()
        }
      })
    setTimeout( () => {
        Swal.fire({
            title: 'START!',
            timer: 1000,
            allowOutsideClick: false,
            icon: 'success',
            showConfirmButton: false,
          })
    },10500)
};

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1000,
 })


export {
    prepareSp,
    prepareEn,
    Toast
}