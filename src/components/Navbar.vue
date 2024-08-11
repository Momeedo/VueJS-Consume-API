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
                    <li class="nav-item" v-if="store.isLoggedIn">
                        <a class="btn btn-outline-secondary ms-2" @click.prevent="logout">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const store = useAuthStore()
const router = useRouter()

const logout = async () => {
    await store.handleLogout()
    router.push({ name: 'login' })
}


</script>