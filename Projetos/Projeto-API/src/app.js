document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = 'https://api.spacexdata.com';

    const launchesSection = document.getElementById('launches-section');
    const shipsSection = document.getElementById('ships-section');
    const historySection = document.getElementById('history-section');

    const btnShowLaunches = document.getElementById('show-launches');
    const btnShowShips = document.getElementById('show-ships');
    const btnShowHistory = document.getElementById('show-history');

    const allSections = [launchesSection, shipsSection, historySection];
    const allButtons = [btnShowLaunches, btnShowShips, btnShowHistory];

    // Função para mostrar uma seção específica e esconder as outras
    function showSection(sectionToShow, buttonClicked) {
        allSections.forEach(section => {
            section.classList.remove('active');
        });
        allButtons.forEach(button => {
            button.classList.remove('active');
        });

        sectionToShow.classList.add('active');
        buttonClicked.classList.add('active');
    }

    // Event listeners para os botões
    btnShowLaunches.addEventListener('click', () => {
        showSection(launchesSection, btnShowLaunches);
    });

    btnShowShips.addEventListener('click', () => {
        showSection(shipsSection, btnShowShips);
    });

    btnShowHistory.addEventListener('click', () => {
        showSection(historySection, btnShowHistory);
    });

    // --- Funções de busca de dados (mantidas do projeto anterior) ---

    // Função para buscar e exibir lançamentos
    async function fetchLaunches() {
        const launchesContainer = document.getElementById('launches-container');
        launchesContainer.innerHTML = ''; // Limpa o conteúdo de carregamento

        try {
            // Buscando os últimos 5 lançamentos (v5 é a versão mais recente e recomendada)
            const response = await fetch(`${BASE_URL}/v5/launches/past?limit=5&order=desc`);
            if (!response.ok) {
                throw new Error(`Erro na API de Lançamentos: ${response.statusText}`);
            }
            const launches = await response.json();

            if (launches.length === 0) {
                launchesContainer.innerHTML = '<p>Nenhum lançamento encontrado.</p>';
                return;
            }

            launches.forEach(launch => {
                const launchCard = document.createElement('div');
                launchCard.classList.add('card');

                // Tenta usar a imagem grande do patch, caso contrário, a pequena
                const patchImage = launch.links.patch?.large || launch.links.patch?.small;
                
                launchCard.innerHTML = `
                    <h3>${launch.name}</h3>
                    ${patchImage ? `<img src="${patchImage}" alt="Patch do Lançamento" style="max-width: 100%; height: auto; border-radius: 5px; margin-bottom: 10px;">` : ''}
                    <p><strong>Data:</strong> ${new Date(launch.date_utc).toLocaleDateString()}</p>
                    <p><strong>Detalhes:</strong> ${launch.details || 'N/A'}</p>
                    ${launch.links.wikipedia ? `<p><a href="${launch.links.wikipedia}" target="_blank" rel="noopener noreferrer">Saiba mais (Wikipedia)</a></p>` : ''}
                    ${launch.links.youtube_id ? `<p><a href="https://youtu.be/${launch.links.youtube_id}" target="_blank" rel="noopener noreferrer">Assista no YouTube</a></p>` : ''}
                `;
                launchesContainer.appendChild(launchCard);
            });
        } catch (error) {
            console.error('Erro ao buscar lançamentos:', error);
            launchesContainer.innerHTML = `<p>Falha ao carregar lançamentos: ${error.message}</p>`;
        }
    }

    // Função para buscar e exibir naves
    async function fetchShips() {
        const shipsContainer = document.getElementById('ships-container');
        shipsContainer.innerHTML = ''; // Limpa o conteúdo de carregamento

        try {
            // Buscando todas as naves (v4)
            const response = await fetch(`${BASE_URL}/v4/ships`);
            if (!response.ok) {
                throw new Error(`Erro na API de Naves: ${response.statusText}`);
            }
            const ships = await response.json();

            if (ships.length === 0) {
                shipsContainer.innerHTML = '<p>Nenhuma nave encontrada.</p>';
                return;
            }

            ships.forEach(ship => {
                const shipCard = document.createElement('div');
                shipCard.classList.add('card');
                shipCard.innerHTML = `
                    <h3>${ship.name}</h3>
                    ${ship.image ? `<img src="${ship.image}" alt="${ship.name}" style="max-width: 100%; height: auto; border-radius: 5px; margin-bottom: 10px;">` : ''}
                    <p><strong>Tipo:</strong> ${ship.type || 'N/A'}</p>
                    <p><strong>Porto Base:</strong> ${ship.home_port || 'N/A'}</p>
                    <p><strong>Status:</strong> ${ship.status || 'N/A'}</p>
                `;
                shipsContainer.appendChild(shipCard);
            });
        } catch (error) {
            console.error('Erro ao buscar naves:', error);
            shipsContainer.innerHTML = `<p>Falha ao carregar naves: ${error.message}</p>`;
        }
    }

    // Função para buscar e exibir eventos históricos
    async function fetchHistory() {
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = ''; // Limpa o conteúdo de carregamento

        try {
            // Buscando todos os eventos históricos (v4)
            const response = await fetch(`${BASE_URL}/v4/history`);
            if (!response.ok) {
                throw new Error(`Erro na API de Histórico: ${response.statusText}`);
            }
            const historyEvents = await response.json();

            if (historyEvents.length === 0) {
                historyContainer.innerHTML = '<p>Nenhum evento histórico encontrado.</p>';
                return;
            }

            historyEvents.forEach(event => {
                const historyCard = document.createElement('div');
                historyCard.classList.add('card');
                historyCard.innerHTML = `
                    <h3>${event.title}</h3>
                    <p><strong>Data:</strong> ${new Date(event.event_date_utc).toLocaleDateString()}</p>
                    <p><strong>Detalhes:</strong> ${event.details || 'N/A'}</p>
                    ${event.links.article ? `<p><a href="${event.links.article}" target="_blank" rel="noopener noreferrer">Leia o artigo</a></p>` : ''}
                `;
                historyContainer.appendChild(historyCard);
            });
        } catch (error) {
            console.error('Erro ao buscar histórico:', error);
            historyContainer.innerHTML = `<p>Falha ao carregar eventos históricos: ${error.message}</p>`;
        }
    }

    // Carrega os dados uma vez ao carregar a página
    fetchLaunches();
    fetchShips();
    fetchHistory();

    // Mostra a seção de lançamentos e ativa o botão correspondente por padrão
    showSection(launchesSection, btnShowLaunches);
});