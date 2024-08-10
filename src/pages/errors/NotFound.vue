<template>
    <div class="container py-5">
        <h1>Error 404</h1>
        <p>The page <code>{{ $route.params.notFound  }}</code> is not available.</p>
        <RouterLink :to="{ name: 'tasks' }">Back to Tasks</RouterLink>
    </div>

</template>