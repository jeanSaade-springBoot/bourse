let stompClient = null;
let isConnected = false;
const pendingSubscriptions = [];  // To store subscriptions before the connection is ready

function connectWebSocket() {
    if (isConnected) {
        console.log('WebSocket already connected.');
        return;
    }

    const socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.debug = null;  // Disable debugging logs (enable if needed)

    // Connect to WebSocket server
    stompClient.connect({}, function (frame) {
        isConnected = true;

        // Subscribe to /all/messages directly
        stompClient.subscribe('/all/messages', function (result) {
            const parsedBody = JSON.parse(result.body);

            if (parsedBody.value !== '0') {
                updateNotification(parsedBody.value);
            }
        });

        // Process any pending subscriptions
        pendingSubscriptions.forEach(sub => {
            stompClient.subscribe(sub.destination, sub.callback);
        });
        pendingSubscriptions.length = 0;  // Clear pending subscriptions
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
// Function to update notifications
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
