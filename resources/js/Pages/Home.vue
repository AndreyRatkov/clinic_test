<template>
    <div class="home">
        <h1>
            {{ count }}
            <button class="btn" @click="$store.commit('INCREMENT')">INCREMENT</button>
        </h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'home',
    computed: {
        ...mapState({
            count: state => state.count
        }),
    }
}
</script>