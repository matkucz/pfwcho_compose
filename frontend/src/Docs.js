import React, { useState } from "react";
import { Link } from "react-router-dom";
import diagram  from "./diagram.png"
function Docs() {
    return (
        <div className="App">
            <main className="App-main">
            <div>
                <h2>
                Dokumentacja projektu.
                </h2>
                <p>
                <Link to="/">Strona główna</Link>
                </p>
                <p>
                <Link to="/fibonacci">Kalkulator Fibonacciego</Link>
                </p>
            </div>
            <h3>Opis projektu</h3>
            <p>
                Na rysunku poniżej widać schemat projektu. W porównaniu do projektu dostępnego w lab 9 zmianom uległy dwa kontenery.
                Za serwer backendowy służy serwer Flask napisany w Pythonie. Serwer ten został wybrany ze wzglądu na łatwość tworzenia
                połączeń do bazy danych, a dostępność do mapera ORM, ułatwiającego pobranie danych z bazy (nie trzeba tworzych poleceń SQLowych).
                Drugi kontener to worker redisowy napisanie w Pythonie. Zmianom uległ także kod na serwerze frontendowym. W porównaniu do przykładu z 
                laboratorium nie użyto biblioteki axios do wykonywania zapytań do serwera backendowego, a skorzystano z wbudowanej w język funkcję fetch.
            </p>
                <img src={diagram} className="App-logo" alt="logo"  />
            <h3>Uruchomienie usługi</h3>
            <p>
                W katalogu głównym należy wykonać polecenie <i>docker compose -f docker-compose.dev.yml up</i>
            </p>
            </main>
        </div>
    )
}

export default Docs;