import { ref } from "vue";
import { defineStore } from "pinia";
import { taskSummary } from "@/http/summary-api";

export const useSummaryStore = defineStore("summaryStore", () => {
  const summaries = ref([]);
  const fetchTasksSummary = async (params = {}) => {
    const { data } = await taskSummary(params);
    summaries.value = data;
  };

  return {
    summaries,
    fetchTasksSummary,
  };
});
