<script setup lang='ts'>
import CenterBox from '@/components/CenterBox.vue';
import { Form, FormItem, Input, InputPassword, Button, Row, Col } from 'ant-design-vue'
import AuthPage from '@/components/AuthPage.vue';
import { reactive, ref, } from 'vue';
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
const router = useRouter()
const formState = reactive({
  email: '',
  password: '',
  username: '',
  password2: '',
  code: ''
})
const { setUser } = useUserStore()
const onFinish = (values: any) => {
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
    <div class="text-center p-6">
      <h4 class="font-bold text-5">注册</h4>
      <p class="text-bluegray">请填写正确的信息，方便找回密码！</p>
    </div>

    <Form :model="formState" name="normal_login" class="login-form px-6" @finish="onFinish" @finishFailed="onFinishFailed"
      layout="vertical">
      <FormItem has-feedback label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
        <Input v-model:value="formState.email" placeholder="仅用于显示昵称"></Input>
      </FormItem>
      <FormItem has-feedback label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
        <InputPassword v-model:value="formState.password" />
      </FormItem>
      <FormItem has-feedback label="确认密码" name="password2" :rules="[{ required: true, message: '请输入密码' }]">
        <InputPassword v-model:value="formState.password2" />
      </FormItem>
      <Row :gutter="16">
        <Col :span="12">
        <FormItem has-feedback label="邮箱" name="email" :rules="[{ required: true, message: '请输入用户名' }]">
          <Input v-model:value="formState.email" placeholder="用于登录或找回密码"></Input>
        </FormItem>
        </Col>
        <Col :span="12">
        <FormItem has-feedback label="验证码" name="code" :rules="[{ required: true, message: '请输入  验证码' }]">
          <div class="flex">
            <Input class="rounded-r-0" v-model:value="formState.email" placeholder=""></Input>
            <Button class=" rounded-l-0 bg-dark color-amber">获取</Button>
          </div>
        </FormItem>
        </Col>
      </Row>
      <router-link class="float-right mb-2 " to="/login">前往登录</router-link>
      <Button class="w-100%" :loading="loading" type="primary" html-type="submit">登录</Button>
    </Form>
  </AuthPage>
</template> 