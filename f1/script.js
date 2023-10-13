let clickCount = 0;

    const messages = [
        "Hello My Bey!",
        "I know this week has been hard",
        "You did great!",
        "Congratulations!",
        "I am so Proud of You!",
        "Executing the setTimeout..."
    ];

    const clickable = document.getElementById('clickable');

    clickable.addEventListener('click', function() {
        if (clickCount < 5) {
            clickable.textContent = messages[clickCount];
        } else if (clickCount === 5) {
            clickable.textContent = messages[clickCount];
            const c = setTimeout(() => {
                document.body.classList.remove("not-loaded");
                clearTimeout(c);
            }, 1000);
        }

        clickCount++;
    });