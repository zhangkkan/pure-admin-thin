export default {
  path: "/systemManager",
  meta: {
    title: "系统管理",
    rank: 2
  },
  children: [
    {
      path: "/systemManager/site",
      name: "site",
      component: () => import("@/views/systemManager/site.vue"),
      meta: {
        title: "站点管理"
      }
    },
    {
      path: "/systemManager/permission",
      name: "permission",
      component: () => import("@/views/systemManager/permission.vue"),
      meta: {
        title: "权限管理"
      },
      children: [
        {
          path: "/systemManager/role",
          name: "role",
          component: () => import("@/views/systemManager/role.vue"),
          meta: {
            title: "角色管理",
            showParent: true
          }
        }
      ]
    },
    {
      path: "/systemManager/config",
      name: "config",
      component: () => import("@/views/systemManager/config.vue"),
      meta: {
        title: "系统设置"
      }
    },
    {
      path: "/systemManager/dataBak",
      name: "dataBak",
      component: () => import("@/views/systemManager/dataBak.vue"),
      meta: {
        title: "数据备份"
      }
    }
  ]
};
