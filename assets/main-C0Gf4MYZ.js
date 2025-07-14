import"./logo-insert-C20JpfOQ.js";const t=[{name:"Lena Marks",img:"./assets/imgs/coaches/girl-1.png",role:"HIIT & Mobility",specialties:["HIIT","Stretching","Mobility"],price:"$49"},{name:"Ashton Hall",img:"./assets/imgs/coaches/ashtonHall.png",role:"Strength Trainer",specialties:["Powerlifting","Nutrition","Deadlifts"],price:"$59"},{name:"Tina Lopez",img:"./assets/imgs/coaches/girl-3.png",role:"Yoga & Wellness",specialties:["Yoga","Mindfulness","Flexibility"],price:"$45"},{name:"Alex Chen",img:"./assets/imgs/coaches/guy-1.png",role:"CrossFit Coach",specialties:["CrossFit","Endurance","Bodyweight"],price:"$60"},{name:"Maya Rivera",img:"./assets/imgs/coaches/girl-2.png",role:"Cardio & Burn",specialties:["Cardio","Dance Fitness","HIIT"],price:"$50"},{name:"Tom Reid",img:"./assets/imgs/coaches/coach1.png",role:"Muscle Gain",specialties:["Bodybuilding","Hypertrophy","Nutrition"],price:"$65"}],r=e=>`

  <div class="card-wrapper col col-md-6 col-lg-4">

      <div class="card p-0 position-relative coach-card bg-dark-3 shadow-lg border-1 border-grey-2 border-opacity-25 hover-scale">

        <div class="blob"></div>
        <div class="fakeblob"></div>

        <img src=${e.img} class="card-img-top p-5 pb-0 z-3" alt="">

        <div class="card-body p-4 bg-dark-3">

          <h2 class="card-title mb-1">${e.name}</h2>
          <p class="card-text small text-grey-0">${e.role}</p>

          <div class="chips mb-2">
            ${e.specialties.map(s=>`<a href="#" class="badge badge rounded-pill text-bg-info text-decoration-none text-dark-0 me-2 px-3">${s}</a>`).join("")}
          </div>

          <div class="d-flex justify-content-between align-items-center pt-3">
            <span class="fw-bold fs-4">${e.price}<span class="fs-6">/month</span></span>
            <a href="#" class="btn btn-primary fw-medium px-5 px-md-3 animated-btn">Hire Now</a>
          </div>

        </div>

      </div>
      
    </div>
    
  </div>

    `,o=document.getElementById("coaches-wrapper");t.forEach(e=>o.innerHTML+=r(e));const l=document.querySelectorAll(".coach-card");window.addEventListener("mousemove",e=>{l.forEach(s=>{const i=s.querySelector(".blob"),a=s.querySelector(".fakeblob").getBoundingClientRect();i.animate([{transform:`translate(${e.clientX-a.left-a.width/2}px,${e.clientY-a.top-a.height/2}px)`}],{duration:300,fill:"forwards"})})});
