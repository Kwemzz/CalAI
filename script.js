const buttons = document.querySelectorAll('#includetext button');
const image = document.getElementById('includeimage');
const dots = document.querySelectorAll('.dot');
const menuBtn = document.getElementById("menubutton");
const navList = document.getElementById("navlist");

buttons.forEach((btn,index) => {
    btn.addEventListener('click', () =>{
        image.src = btn.dataset.img;

        buttons.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');

        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');

    })
}
)

dots.forEach((dot, index) =>{
            dot.addEventListener('click', () =>{
                buttons[index].click();
            })
        })

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
    menuBtn.setAttribute(
        "aria-expanded",
        navList.classList.contains("open")
    );
});