const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const form = document.querySelector('#inputDetails');
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userDetails = document.querySelector('#userDetails');

btn.addEventListener('click', (e)=>{
    body.classList.toggle("dark-mode");
    
    let isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        btn.className = 'btn btn-dark'
        document.body.style.color = "white";
    } else {
        btn.className = 'btn btn-light'
        document.body.style.color = "black";
       
    }
    const icon = btn.querySelector('i');
    if (icon) {
        icon.className = isDarkMode ? 'bi bi-toggle-on' : 'bi bi-toggle-off';
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    document.getElementById("userCard").style.visibility = "visible";

    const tr = document.createElement('tr');
    userDetails.append(tr); 
    const tdName = document.createElement('td');
    tdName.innerHTML = `${userName.value}`;
    const tdEmail = document.createElement('td');
    tdEmail.innerHTML=`${userEmail.value}`;

    userDetails.append(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);

    resetForm();
})

function resetForm() {
    userName.value = '';
    userEmail.value = '';
}