export default {
  path: "/messageManager",
  meta: {
    title: "通知管理",
    rank: 40
  },
  children: [
    {
      path: "/messageManager/student",
      name: "student",
      component: () => import("@/views/messageManager/student.vue"),
      meta: {
        title: "通知学生"
      }
    },
    {
      path: "/messageManager/teacher",
      name: "teacher",
      component: () => import("@/views/messageManager/teacher.vue"),
      meta: {
        title: "通知老师"
      }
    }
  ]
};
