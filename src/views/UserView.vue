<template>
  <div>
      <user-profile :info="userInfo">
          <div slot="username">{{userInfo.id}}</div>
          <span slot="time">{{ 'Joined ' + userInfo.created}}, </span> <!-- 태그 없이 텍스트만 들어감 -->
          <span slot="karma">{{userInfo.karma}}</span>
      </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
    components:{
        UserProfile,
    },
    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName); // payload에는 한개의 parama만 가능하므로 object로 보내야 한다.
    }
}
</script>

<style>

</style>