export default {
  path: "/logManager",
  meta: {
    title: "日志管理",
    rank: 50
  },
  children: [
    {
      path: "/logManager/record",
      name: "record",
      component: () => import("@/views/logManager/record.vue"),
      meta: {
        title: "日志记录",
        showParent: true
      }
    }
  ]
};
