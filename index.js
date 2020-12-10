class ThemeSettings {
    constructor() {
        if (ThemeSettings.instance instanceof ThemeSettings) {
            return ThemeSettings.instance;
        }
        this.themSettingsObject = {
            "font": "20",
            "color": "red",
            "layout": "Arial"
        }
        ThemeSettings.instance = this;
    }

}

const s1 = new ThemeSettings();
const s2 = new ThemeSettings();
console.log(s0)
console.log(s1)
console.log(s0 === s1)