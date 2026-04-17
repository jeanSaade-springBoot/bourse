let stompClient = null;
let isConnected = false;
const pendingSubscriptions = [];

function connectWebSocket() {
    if (isConnected) {
        console.log("WebSocket already connected.");
        return;
    }

    console.log("Trying to connect...");

    const socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);

    // enable logs while testing
    stompClient.debug = function (str) {
        console.log(str);
    };

    stompClient.connect({}, function (frame) {
        isConnected = true;
        console.log("Connected:", frame);

        // subscribe to notifications
        stompClient.subscribe('/all/messages', function (result) {
            console.log("Received /all/messages:", result.body);

            const parsedBody = JSON.parse(result.body);

            if (parsedBody.value && parsedBody.value !== '0') {
                updateNotification(parsedBody.value);
            }
        });

        // call backend @MessageMapping("/application")
        stompClient.send('/app/application', {}, {});

        // process pending subscriptions
        pendingSubscriptions.forEach(sub => {
            stompClient.subscribe(sub.destination, sub.callback);
        });
        pendingSubscriptions.length = 0;

    }, function (error) {
        console.error("STOMP connection error:", error);
    });
}

function addSubscription(destination, callback) {
    if (stompClient && isConnected) {
        return stompClient.subscribe(destination, callback);
    } else {
        const sub = { destination, callback };
        pendingSubscriptions.push(sub);
        return sub;
    }
}

function updateNotification(value) {
    const bell = document.getElementById('notification');
    const bell1 = document.getElementById('notification1');
    const bell2 = document.getElementById('notification2');

    if (bell) {
        bell.setAttribute('data-count', value);
        bell.classList.add('show-count', 'notify');
    }

    if (bell1) {
        bell1.setAttribute('data-count', value);
        bell1.classList.add('show-count', 'notify');
    }

    if (bell2) {
        bell2.setAttribute('data-count', value);
        bell2.classList.add('show-count', 'notify');
    }
}

// call this when page loads
document.addEventListener("DOMContentLoaded", function () {
    connectWebSocket();
});