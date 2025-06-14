import { supabaseClient } from './supabase.js';

async function cargarJugadores() {
    const { data, error } = await supabaseClient
        .from('jugadores')
        .select('*');

    if (error) {
        console.error("Error al cargar jugadores:", error);
        return;
    }

    const tabla = document.querySelector("#tabla-jugadores");
    data.forEach(jugador => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td class="p-2">${jugador.name}</td>
            <td class="p-2">${jugador.goals}</td>
            <td class="p-2">${jugador.assists}</td>
        `;
        tabla.appendChild(fila);
    });
}

cargarJugadores();