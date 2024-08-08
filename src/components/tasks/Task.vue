<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0" :class="completedClass" type="checkbox" :checked="task.is_completed" />
            <div class="ms-2 flex-grow-1" :class="completedClass" title="Double click the text to edit or remove">
                <!-- <div class="relative">
                        <input class="editable-task" type="text" />
                </div> -->
                <span>{{ task.title }}</span>
            </div>
            <!-- <div class="task-date">24 Feb 12:00</div> -->
        </div>
        <div class="task-actions">
            <button class="btn btn-sm btn-circle btn-outline-secondary me-1">
                <IconPencil />
            </button>
            <button class="btn btn-sm btn-circle btn-outline-danger">
                <IconBin />
            </button>
        </div>
    </li>

</template>

<script setup>
import { computed } from 'vue';
import IconBin from '../icons/IconBin.vue'
import IconPencil from '../icons/IconPencil.vue'

const props = defineProps({
    task: Object
})

const completedClass = computed(() => props.task.is_completed ? "completed" : "")
</script>