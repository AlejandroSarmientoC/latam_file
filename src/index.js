// Utilizando la API de ipify para obtener la dirección IP
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    const ipAddress = data.ip;
    document.getElementById('ip-info').textContent = 'Dirección IP: ' + ipAddress;
})
.catch(error => {
    console.error('Error al obtener la dirección IP:', error);
    document.getElementById('ip-info').textContent = 'Error al obtener la dirección IP';
});

function toggleSubMenu(subMenuId) {
var subMenu = document.getElementById(subMenuId);
subMenu.style.display = (subMenu.style.display === 'none' || subMenu.style.display === '') ? 'block' : 'none';
event.stopPropagation(); // Evitar que el clic se propague al contenedor principal
}