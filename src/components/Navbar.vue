<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <a href="#" class="navbar-brand">
                <span>Consume </span>
                <strong>API</strong>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" v-if="store.isLoggedIn">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'tasks' }" class="nav-link">Tasks</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'summary' }" class="nav-link">
                            Summary</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" v-if="!store.isLoggedIn">
                        <RouterLink to="/login" class="btn btn-outline-secondary ms-2">
                            Login</RouterLink>
                    </li>
                    <li class="nav-item" v-if="!store.isLoggedIn">
                        <RouterLink to="/register" class="btn btn-danger ms-2">Register</RouterLink>
                    </li>

                    <li class="nav-item dropdown" v-if="store.isLoggedIn">
                        <a class="nav-link dropdown-toggle" :class="toggleClass" @click.prevent="toggle" href="#"
                            id="navbarDropdown"  role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            {{ store.user.name }}
                        </a>
                        <div class="dropdown-menu" :class="toggleClass" aria-labelledby="navbarDropdown">
                            <!-- <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div> -->
                            <a class="dropdown-item" @click.prevent="logout">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { ref, computed } from "vue"

const store = useAuthStore()
const router = useRouter()
const navIsOpen = ref(false)

const logout = async () => {
    await store.handleLogout()
    navIsOpen.value = false
    router.push({ name: 'login' })
}

const toggle = () => navIsOpen.value = !navIsOpen.value

const toggleClass = computed(() => navIsOpen.value === true ? 'show' : '')


</script>