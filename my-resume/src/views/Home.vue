<template>
    <div>
        <mt-header title="">
            <router-link to="/" slot="left">
                <mt-button>
                    <img
                        src="../assets/list.png"
                        height="20"
                        width="20"
                        slot="icon"
                    />About
                </mt-button>
            </router-link>
            <router-link to="/" slot="right">
                <mt-button >
                    <img
                        src="../assets/phonecall.png"
                        height="20"
                        width="20"
                        slot="icon"
                    />Contact
                </mt-button>
            </router-link>
        </mt-header>
        <div>1</div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style lang="less" scoped>
</style>