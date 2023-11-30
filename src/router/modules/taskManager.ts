export default {
  path: "/task",
  meta: {
    title: "任务管理",
    rank: 10
  },
  children: [
    {
      path: "/task/index",
      name: "taskIndex",
      component: () => import("@/views/task/index.vue"),
      meta: {
        title: "任务栏",
        showParent: true
      }
    }
  ]
};
