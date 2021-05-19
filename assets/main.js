const toggleSwitch = document.querySelector('.mode-switch input[type="checkbox"]');

function mode() {
    if (toggleSwitch.checked == true) {
        const selector = ["header", "home", "article", "about", "footer"];
        const waves = ["waves-1", "waves-2", "waves-3"];
        for (select of selector) {
            document.getElementById(`${select}`).style.backgroundColor = "#393939";
        }

        for (wave of waves) {
            document.getElementById(`${wave}`).setAttribute("fill", "#393939");
        }

        document.body.style.color = "#fff";
    } else {
        const selector = ["header", "home", "article", "about", "footer"];
        const backgroundColor = ["#126e82", "#126e82", "#d8e3e7",
            "#51c4d3", "#126e82"
        ];

        for (const [index, select] of selector.entries()) {
            document.getElementById(`${select}`).style.backgroundColor = `${backgroundColor[index]}`;
        }

        const waves = ["waves-1", "waves-2", "waves-3"];
        const wavesColor = ["#d8e3e7", "#51c4d3", "#126e82"]

        for (const [index, wave] of waves.entries()) {
            document.getElementById(`${wave}`).setAttribute("fill", `${wavesColor[index]}`);
        }

        document.body.style.color = "#000";
    }
}