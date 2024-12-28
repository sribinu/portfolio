// Mixitup Filter
var mixerProjects = mixitup(".projects_container", {
  selectors: {
    target: ".project_item",
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll(".category_btn");
function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active_work"));
  this.classList.add("active_work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

// Testimonials swiper
var testiSwiper = new Swiper(".testimonial_container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// contact form
const contactForm = document.getElementById("contact_form");
const contactName = document.getElementById("contact_name");
const contactEmail = document.getElementById("contact_email");
const Message = document.getElementById("message");
const contactMessage = document.getElementById("contact_message");

const sendEmail = (e) => {
  e.preventDefault();
  //check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    //add and remove color
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");
    //show message
    contactMessage.textContent = "Write all the input fields";
  } else {
    //serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_df0ykmd",
        "template_cd4k6ar",
        "#contact_form",
        "RuShQX7Jtm0zqToe_"
      )
      .then(
        () => {
          //show message and add color
          contactMessage.classList.add("color-light");
          contactMessage.textContent = "Message sent successfully ✔️";

          //remove message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG...", error);
        }
      );
    //clear input fields
    contactName.value = "";
    contactEmail.value = "";
    Message.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
