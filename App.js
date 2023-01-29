const app = Vue.createApp({
    data() {
        return {
            projects: [],
            state: true,
        };
    },
    methods: {
        toggle(id) {
            let div = document.getElementById(id);
            this.state = !this.state;
            if (div.style.display === "none") {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        },
    },
    mounted() {
        axios.get("../api/index.php").then((response) => {
            this.projects = response.data;
        });
    },
}).mount("#app");
