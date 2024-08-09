<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0" 
            :class="completedClass" type="checkbox"
            @change="markTaskAsCompleted"
            :checked="task.is_completed" />
            <div class="ms-2 flex-grow-1" :class="completedClass" 
            @dblclick="doubleClickHandler"
            title="Double click the text to edit or remove">
                <div class="relative" v-if="isEdit">
                        <input class="editable-task" 
                        type="text"
                        :value="task.title" 
                        v-focus
                        @keyup.enter="updateTask"
                        @keyup.esc="$event => isEdit = false"/>
                </div>
                <span v-else>{{ task.title }}</span>
            </div>
            <!-- <div class="task-date">24 Feb 12:00</div> -->
        </div>
        <TaskActions @edit="$event => isEdit = true" v-show="!isEdit" @delete="deleteTask"/>
    </li>

</template>

<script setup>
import { computed, ref } from 'vue';
import TaskActions from './TaskActions.vue';


const props = defineProps({
    task: Object
})
const emit = defineEmits(['updated', 'completed', 'deleted'])

const isEdit = ref(false)
const completedClass = computed(() => props.task.is_completed ? "completed" : "")

const vFocus = {
    mounted: (el) => el.focus()
}

const doubleClickHandler = (event) => {
    isEdit.value = true
}

const updateTask = (event) => {
    const updatedTask = { ...props.task, title: event.target.value }
    isEdit.value = false
    emit('updated', updatedTask)
}

const markTaskAsCompleted = (event) => {
    const updatedTask = { ...props.task, is_completed: !props.task.is_completed }
    emit('completed', updatedTask)
}

const deleteTask = () => {
    if (confirm("Are you sure you want to delete this task?")) {
        emit('deleted', props.task)
    }
}
</script>