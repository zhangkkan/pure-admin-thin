export default {
  path: "/classManager",
  meta: {
    title: "课表管理",
    rank: 30
  },
  children: [
    {
      path: "/classManager/all",
      name: "all",
      component: () => import("@/views/classManager/all.vue"),
      meta: {
        title: "总课表"
      }
    },
    {
      path: "/classManager/student",
      name: "student",
      component: () => import("@/views/classManager/student.vue"),
      meta: {
        title: "学生课表"
      }
    }
  ]
};
