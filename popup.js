(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        const ring = document.getElementById('minute-ring');
        const digitalClock = document.getElementById('digital-clock');
        const gestureSpan = document.getElementById('gesture-name');
        
        const dateSpan = document.getElementById('rolex-date');
        const monthSpan = document.getElementById('rolex-month');
        
        const fingers = {
            thumb: document.getElementById('f-thumb'),
            index: document.getElementById('f-index'),
            middle: document.getElementById('f-middle'),
            ring: document.getElementById('f-ring'),
            pinky: document.getElementById('f-pinky')
        };

        const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        function buildMinuteRing() {
            if (!ring) return;
            ring.innerHTML = ''; 

            for (let i = 0; i < 60; i++) {
                const angle = i * 6;
                const markerDiv = document.createElement('div');
                markerDiv.className = 'minute-marker';
                markerDiv.style.transform = `rotate(${angle}deg)`;

                if (i % 5 === 0) {
                    const tick = document.createElement('div');
                    tick.className = 'minute-tick-5';
                    
                    const digitSpan = document.createElement('span');
                    let minuteValue = i === 0 ? 60 : i;
                    digitSpan.innerText = minuteValue;
                    digitSpan.className = 'minute-digit';
                    
                    tick.appendChild(digitSpan);
                    markerDiv.appendChild(tick);
                } else {
                    const tick = document.createElement('div');
                    tick.className = 'minute-tick';
                    markerDiv.appendChild(tick);
                }
                ring.appendChild(markerDiv);
            }
        }

    function setFingersForHour(hour24, minutes) {
    // Convert 24h to 12h format
    let exactHour = hour24 % 12;
    if (exactHour === 0) exactHour = 12;
    
    // Only change the hour display when we're actually at the next hour
    // For F.P. Journe FFC, the fingers change exactly on the hour, not gradually
    let displayHour = exactHour;
    
    // If we're past 59 minutes and 30 seconds, we could optionally show next hour
    // But for accuracy, let's keep it strictly on the hour change
    // You could adjust this threshold if you want it to change closer to the hour
    
    // Hide all fingers first
    Object.values(fingers).forEach(f => {
        if (f) f.classList.add('hidden-finger');
    });

    // Show fingers based on the display hour
    switch (displayHour) {
        case 1: 
            fingers.index?.classList.remove('hidden-finger'); 
            break;
        case 2: 
            fingers.index?.classList.remove('hidden-finger'); 
            fingers.middle?.classList.remove('hidden-finger'); 
            break;
        case 3: 
            fingers.index?.classList.remove('hidden-finger'); 
            fingers.middle?.classList.remove('hidden-finger'); 
            fingers.ring?.classList.remove('hidden-finger'); 
            break;
        case 4: 
            fingers.index?.classList.remove('hidden-finger'); 
            fingers.middle?.classList.remove('hidden-finger'); 
            fingers.ring?.classList.remove('hidden-finger'); 
            fingers.pinky?.classList.remove('hidden-finger'); 
            break;
        case 5: 
            fingers.thumb?.classList.remove('hidden-finger');
            fingers.index?.classList.remove('hidden-finger');
            fingers.middle?.classList.remove('hidden-finger');
            fingers.ring?.classList.remove('hidden-finger');
            fingers.pinky?.classList.remove('hidden-finger');
            break;
        case 6: 
            fingers.thumb?.classList.remove('hidden-finger'); 
            break;
        case 7: 
            fingers.thumb?.classList.remove('hidden-finger'); 
            fingers.index?.classList.remove('hidden-finger'); 
            break;
        case 8: 
            fingers.thumb?.classList.remove('hidden-finger'); 
            fingers.index?.classList.remove('hidden-finger'); 
            fingers.middle?.classList.remove('hidden-finger'); 
            break;
        case 9: 
            fingers.thumb?.classList.remove('hidden-finger'); 
            fingers.index?.classList.remove('hidden-finger'); 
            fingers.middle?.classList.remove('hidden-finger'); 
            fingers.ring?.classList.remove('hidden-finger'); 
            break;
        case 10:
            fingers.index?.classList.remove('hidden-finger');
            fingers.middle?.classList.remove('hidden-finger');
            fingers.ring?.classList.remove('hidden-finger');
            fingers.pinky?.classList.remove('hidden-finger');
            break;
        case 11: 
            fingers.pinky?.classList.remove('hidden-finger'); 
            break;
        case 12: 
            fingers.thumb?.classList.remove('hidden-finger'); 
            fingers.pinky?.classList.remove('hidden-finger'); 
            break;
        default: 
            break;
    }

    // Update gesture name
    const names = {
        1:'index', 2:'victory', 3:'three', 4:'four', 5:'open hand',
        6:'thumb', 7:'thumb+index', 8:'thumb+two', 9:'thumb+three',
        10:'four no thumb', 11:'pinky', 12:'thumb+pinky'
    };
    
    if (gestureSpan) {
        gestureSpan.innerText = `${names[displayHour] || 'ffc'} · ${displayHour}`;
    }
}
        function updateWatch() {
            const now = new Date();
            
            // Get precise time including milliseconds for smooth movement
            const h = now.getHours();
            const m = now.getMinutes();
            const s = now.getSeconds();
            const ms = now.getMilliseconds();
            
            // Calculate precise minute angle including seconds and ms for smooth movement
            // Each minute = 6 degrees, each second = 0.1 degrees, each ms = 0.0001 degrees
            const preciseMinutes = m + (s / 60) + (ms / 60000);
            const minuteAngle = preciseMinutes * 6;
            
            // Calculate precise hour for digital display (rounded to nearest minute)
            const hour12 = h % 12 || 12;
            
            // Update digital clock with padded values
            if (digitalClock) {
                digitalClock.innerText = `${hour12.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
            }

            // Rotate the minute ring (this is the minute hand)
            if (ring) {
                ring.style.transform = `rotate(-${minuteAngle}deg)`;
            }

            // Update fingers based on current hour AND minutes for more accurate transitions
            setFingersForHour(h, m);

            // Update date
            const day = now.getDate();
            const monthIndex = now.getMonth();
            if (dateSpan) {
                dateSpan.innerText = day.toString().padStart(2, '0');
            }
            if (monthSpan) {
                monthSpan.innerText = monthNames[monthIndex];
            }
        }

        // Build the minute ring
        buildMinuteRing();
        
        // Initial update
        updateWatch();
        
        // Update every 100ms for smooth movement instead of 1000ms
        setInterval(updateWatch, 100);
    }
})();