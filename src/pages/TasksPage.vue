<template>
    <main style="min-height: 50vh; margin-top: 2rem">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask />

                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTasks" />

                    <div class="text-center my-3" v-show="showToggleCompletedBtn">
                        <button class="btn btn-sm btn-primary"
                            @click="$event => showCompletedTasks = !showCompletedTasks">
                            <span v-if="!showCompletedTasks">Show Completed Tasks</span>
                            <span v-else>Hide Completed Tasks</span>
                        </button>
                    </div>

                    <!-- List of completed tasks -->
                    <Tasks :tasks="completedTasks" :show="completedTasksIsVisible && showCompletedTasks" />

                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue"
import { storeToRefs } from "pinia";
import { useTaskStore } from "@/stores/task";
import Tasks from "@/components/tasks/Tasks.vue";
import NewTask from "@/components/tasks/NewTask.vue";

const store = useTaskStore()
const { completedTasks, uncompletedTasks } = storeToRefs(store)
const { fetchAllTasks } = store

// store.task.title = "Pinia Task updated."
// store.$patch({
//     task: {
//         title: "Pinia Task updated using $patch",
//         is_completed: true
//     }
// })

// const tasks = ref([])

onMounted(async () => {
    // const { data } = await allTasks()
    // tasks.value = data.data //We use value since tasks is a ref
    await fetchAllTasks()

    // console.log(store.task)
    // console.log(task.value)
    console.log(completedTasks.value)
    console.log(uncompletedTasks.value)
})

// const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))
// const completedTasks = computed(() => tasks.value.filter(task => task.is_completed))
const showToggleCompletedBtn =
    computed(() => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0)
const completedTasksIsVisible =
    computed(() => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0)
const showCompletedTasks = ref(false)

</script>