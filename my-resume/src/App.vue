<template>
    <div id="app">
        <home></home>
    </div>
</template>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 2rem;
}
</style>

<script>
import home from "../src/views/Home.vue";
export default {
    name: "APP",
    components: {
        home,
    },
    created() {
        const htmlwidth =
            document.documentElement.clientWidth || document.body.clientWidth;
        const htmlDom = document.getElementsByTagName("html")[0];
        htmlDom.style.fontSize = htmlwidth / 20 + "px";
    },
};
</script>
