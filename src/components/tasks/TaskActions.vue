<template>
    <div class="task-actions">
        <button class="btn btn-sm btn-circle btn-outline-secondary me-1" @click="$event => emit('edit')">
            <IconPencil />
        </button>
        <button class="btn btn-sm btn-circle btn-outline-danger" @click="$event => emit('delete')">
            <IconBin />
        </button>
    </div>
</template>

<script setup>
import IconBin from '../icons/IconBin.vue'
import IconPencil from '../icons/IconPencil.vue'

const emit = defineEmits(['edit', 'remove'])
</script>