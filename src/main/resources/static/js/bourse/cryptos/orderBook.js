let orderBookWS = null;
let orderBookInterval = null;

function initializeOrderBookForCrypto(selectedTicker) {
    const symbol = `${selectedTicker}USDT`.toUpperCase();
    const GROUP_SIZE = selectedTicker === 'BTC' ? 100 : 1;
    const LEVEL_COUNT = 15;

    let orderBook = { bids: {}, asks: {} };
    let lastMidPrice = 0;

    function updateLocalBook(side, updates) {
        updates.forEach(([priceStr, qtyStr]) => {
            const price = parseFloat(priceStr);
            const qty = parseFloat(qtyStr);
            if (qty === 0) {
                delete orderBook[side][price];
            } else {
                orderBook[side][price] = qty;
            }
        });
    }

    function getGroupedVolumes(midPrice) {
        const asksLevels = [];
        const bidsLevels = [];
        const groupedAsks = [];
        const groupedBids = [];

        const upperStart = Math.ceil(midPrice / GROUP_SIZE) * GROUP_SIZE;
        for (let i = 0; i < LEVEL_COUNT; i++) {
            asksLevels.push(upperStart + i * GROUP_SIZE);
        }

        const lowerStart = Math.floor(midPrice / GROUP_SIZE) * GROUP_SIZE;
        for (let i = 0; i < LEVEL_COUNT; i++) {
            bidsLevels.push(lowerStart - i * GROUP_SIZE);
        }

        asksLevels.forEach(level => {
            let total = 0;
            for (let price in orderBook.asks) {
                const p = parseFloat(price);
                if (p >= level && p < level + GROUP_SIZE) {
                    total += orderBook.asks[price];
                }
            }
            groupedAsks.push({ price: level, qty: total });
        });

        bidsLevels.forEach(level => {
            let total = 0;
            for (let price in orderBook.bids) {
                const p = parseFloat(price);
                if (p <= level && p > level - GROUP_SIZE) {
                    total += orderBook.bids[price];
                }
            }
            groupedBids.push({ price: level, qty: total });
        });

        return { asks: groupedAsks, bids: groupedBids };
    }

    function formatDollar(value, price) {
        const usd = value * price;
        if (usd > 1000000) return `$${(usd / 1e6).toFixed(1)}M`;
        if (usd > 1000) return `$${(usd / 1e3).toFixed(1)}K`;
        return `$${usd.toFixed(2)}`;
    }

    function renderLevels(containerId, levels, isBid) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        const max = Math.max(...levels.map(l => l.qty));
        levels.forEach(({ price, qty }) => {
            const row = document.createElement("div");
            row.classList.add("row-order-book");

            const bar = document.createElement("div");
            bar.classList.add("bar", isBid ? "green" : "red");
            bar.style.width = `${(qty / max) * 100}%`;

            const content = document.createElement("div");
            content.classList.add("content-order-book");

            const priceElem = document.createElement("span");
            priceElem.classList.add("price");
            if (isBid) priceElem.classList.add("green-text");
            priceElem.textContent = price;

            const qtyElem = document.createElement("span");
            qtyElem.classList.add("value");
            qtyElem.textContent = formatDollar(qty, price);

            content.appendChild(priceElem);
            content.appendChild(qtyElem);
            row.appendChild(bar);
            row.appendChild(content);
            container.appendChild(row);
        });
    }

    async function fetchInitialOrderBook() {
        const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=1000`);
        const data = await res.json();
        orderBook.bids = Object.fromEntries(data.bids.map(([p, q]) => [parseFloat(p), parseFloat(q)]));
        orderBook.asks = Object.fromEntries(data.asks.map(([p, q]) => [parseFloat(p), parseFloat(q)]));
    }

    async function fetchLivePrice() {
        try {
            const res = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
            const data = await res.json();
            const price = parseFloat(data.price);
            lastMidPrice = price;
		    document.getElementById("midPrice").innerHTML = `LIVE Price: <br> ${Math.floor(price).toLocaleString()} $`;

            const { bids, asks } = getGroupedVolumes(price);
            renderLevels("bids", bids, true);
            renderLevels("asks", asks.slice().reverse(), false);
        } catch (err) {
            console.error("Failed to fetch live price:", err);
        }
    }

    async function startWebSocket() {
        await fetchInitialOrderBook();

        if (orderBookWS) orderBookWS.close();

        orderBookWS = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth@100ms`);
        orderBookWS.onmessage = (event) => {
            const data = JSON.parse(event.data);
            updateLocalBook('bids', data.b);
            updateLocalBook('asks', data.a);

            const buy = Object.values(orderBook.bids).reduce((a, b) => a + b, 0);
            const sell = Object.values(orderBook.asks).reduce((a, b) => a + b, 0);
            const total = buy + sell;
            document.getElementById("buyRatio").textContent = `B ${(100 * buy / total).toFixed(2)}%`;
            document.getElementById("sellRatio").textContent = `S ${(100 * sell / total).toFixed(2)}%`;
        };
    }

    // Clear any old intervals or sockets
    if (orderBookInterval) clearInterval(orderBookInterval);
    startWebSocket();
    orderBookInterval = setInterval(fetchLivePrice, 1200);
}
