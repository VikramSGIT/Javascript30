const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('mouseover', () => {
    panels.forEach(otherpanel => otherpanel.classList.remove('open'));
    panel.classList.add('open');
}));
panels.forEach(panel => panel.addEventListener('transitionend', (e) => {

    if(!e.propertyName.includes('flex')) return;

    panels.forEach(otherpanel => otherpanel.classList.remove('open-active'));
        panel.classList.add('open-active');
}));