import { createRouter, createWebHistory } from 'vue-router'

// Lazy Loading Routes 
const importLayoutPages = (path) => {
  return  () => import(`@/layouts/${path}`)
}
const importChildPages = (path) => {
  return () => import(`../pages/${path}`)
}

const routes = [{
    path: '/',
    name: 'auth',
    component: importLayoutPages('Main.vue'),
    children: [
      {
        path: '/menu',
        name: "Menu",
        component: importChildPages("menu-page.vue")
      },
      {
        path: '/branch',
        name: "Filiallar",
        component: importChildPages("branch-page.vue")
      },
      {
        path: '/about',
        name: "Biz haqimizda",
        component: importChildPages("aboute-us-page.vue")
      },
      {
        path: '/contact',
        name: "Biz bilan aloqa",
        component: importChildPages("contact.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const session = localStorage.getItem("loginToken");
//   const role = localStorage.getItem("role");
//   const publicPages = ["/", "/login"];
//   const notPublicPages = !publicPages.includes(to.path);
//   let logged = false;
//   if (session) {
//       logged = true;
//   }
//   if (notPublicPages) {
//       next("/");
//   } else if (logged && notPublicPages) {
//       next("/account");
//   } else {
//       next();
//   }
// });

export default router
