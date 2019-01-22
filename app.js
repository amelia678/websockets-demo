window.onload = function() {

    const form = document.getElementById('message-form');
    const messageField = document.getElementById('message');
    const messagesList = document.getElementById('messages');
    const socketStatus = document.getElementById('status')
    const closeBtn = document.getElementById('close')

    
    const socket = new WebSocket('ws://echo.websocket.org');
    
    socket.onopen = function(event) {
        socketStatus.innerHTML = 'Connected to:' + event.currentTarget.url;
        socketStatus.className = 'open';
    }
    
    // Handle any errors that occur.
    socket.onerror = function(error) {
        console.log('WebSocket Error: ' + error);
    };
    
    // Send a message
    form.onsubmit = function(e) {
        e.preventDefault();
        
        const message = messageField.value;

        socket.send(message)

        messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message +
        '</li>';
        
        messageField.value = '';

        return false;
    };

    // Handle messages sent by the server

    socket.onmessage = function(event) {
        const message = event.data;
        messagesList.innerHTML += '<li class="received"><span>Received:</span>' + message + '</li>';
    }

    // Closing sockets 
    socket.onclose = function(event) {
        socketStatus.innerHTML = 'Losing connection ... goodbye';
        socketStatus.className = 'closed';
    }

    // Close when hit close button

    closeBtn.onclick = function(e) {
        e.preventDefault();

        socket.close();

        return false;
    }
}