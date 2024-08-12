<template>
    <li>[{{ task.created_at }}] {{ task.title }}</li>
</template>

<script setup>
defineProps({
    task: Object,
});
</script>