// PWA Installation and Service Worker Registration

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// PWA Install Prompt
let deferredPrompt;
const installButton = document.getElementById('install-pwa-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;

    // Show install button if exists
    if (installButton) {
        installButton.style.display = 'block';
    }
});

// Handle install button click
if (installButton) {
    installButton.addEventListener('click', async () => {
        if (!deferredPrompt) {
            return;
        }

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);

        // Clear the deferredPrompt
        deferredPrompt = null;

        // Hide the install button
        installButton.style.display = 'none';
    });
}

// Detect if app is installed
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    if (installButton) {
        installButton.style.display = 'none';
    }
});

// Check if app is running in standalone mode
if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('App is running in standalone mode');
}

// Handle offline/online status
window.addEventListener('online', () => {
    console.log('App is online');
    const offlineNotification = document.getElementById('offline-notification');
    if (offlineNotification) {
        offlineNotification.style.display = 'none';
    }
});

window.addEventListener('offline', () => {
    console.log('App is offline');
    const offlineNotification = document.getElementById('offline-notification');
    if (offlineNotification) {
        offlineNotification.style.display = 'block';
    }
});

