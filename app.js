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
    
    
    form.onsubmit = function(e) {
        e.preventDefault();
        
        const message = messageField.value;
        
        
    }
}