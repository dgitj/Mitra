import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import tweets from "@/components/tweets";
import bet from "@/components/bet";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/bet',
      name: 'bet',
      component: bet
    },

    {
      path: "/tweets",
      name: "tweets",
      component: tweets
    }
  ]
});
