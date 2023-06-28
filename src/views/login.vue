<script setup lang='ts'>
import { Form, FormItem, Input, InputPassword, Button } from 'ant-design-vue';
import AuthPage from '@/components/AuthPage.vue';
import { reactive, ref } from 'vue';
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
const router = useRouter()
const { setUser } = useUserStore()
const formState = reactive({
  email: 'test@test.cn',
  password: '123456'
})
const onFinish = (values: any) => {
  console.log('Success:', values);
  console.log(formState.email);

  setUser('1', formState.email)
  router.push({ name: 'index' })
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const loading = ref(false)

</script>

<template>
  <AuthPage>
    <div class=" text-center p-6">
      <h4 class=" font-bold text-5">登录</h4>
      <p class=" text-bluegray">请输入帐号密码进行登录！</p>
    </div>

    <Form :model="formState" name="normal_login" class="login-form px-6 " @finish="onFinish"
      @finishFailed="onFinishFailed" layout="vertical">
      <FormItem has-feedback label="邮箱" name="email" :rules="[{ required: true, message: '请输入邮箱' }]">
        <Input v-model:value="formState.email"></Input>
      </FormItem>
      <FormItem has-feedback label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
        <InputPassword v-model:value="formState.password" />
      </FormItem>
      <router-link class=" float-right mb-2 " to="/signup">注册账号</router-link>
      <Button class="w-100%" :loading="loading" type="primary" html-type="submit">登录</Button>
    </Form>
  </AuthPage>
</template>

<style lang="css" scoped></style>