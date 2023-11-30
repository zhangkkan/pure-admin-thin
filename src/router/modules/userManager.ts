export default {
  path: "/userManager",
  meta: {
    title: "用户管理",
    rank: 20
  },
  children: [
    {
      path: "/userManager/student",
      name: "student",
      component: () => import("@/views/userManager/student.vue"),
      meta: {
        title: "学生列表"
      }
    },
    {
      path: "/userManager/teacher",
      name: "teacher",
      component: () => import("@/views/userManager/teacher.vue"),
      meta: {
        title: "老师列表"
      }
    }
  ]
};
