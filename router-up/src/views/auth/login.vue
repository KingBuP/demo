<script setup lang="ts">
import v from "@/plugins/validate";
import userApi from "@/apis/userApi";
import utils from "@/utils";
const { useForm, useField } = v;
const router = useRouter();

// 使用yup 验证
const schema = v.yup.object({
  account: v.yup.string().required().email().label("邮箱"),
  password: v.yup.string().required().min(6, "密码不能少于6位").label("密码"),
});

const { handleSubmit, errors, values } = useForm({
  initialValues: {
    account: "admin@qq.com",
    password: "damin888",
  },
  validationSchema: schema,
});

useField<string>("account");
useField<string>("password");

const onSubmit = handleSubmit(async (values: any) => {
  utils.user.login(values);
});
</script>

<template>
  <form class="for" @submit="onSubmit">
    <div
      class="w-[720px] translate-y-28 md:translate-y-0 bg-white grid md:grid-cols-2 rounded-md shadow-lg overflow-hidden"
    >
      <div class="p-6 flex flex-col">
        <h1 class="text-center text-gray-900 text-xl md:py-6">会员登录</h1>
        <div class="flex-1 flex flex-col items-center">
          <div class="mt-14 flex flex-col w-full">
            <FormHdInput
              placeholder="请输入邮箱或手机号"
              v-model="values.account"
            />
            <!-- v-model="values.account" -->
            <FormError :error="errors.account" />
            <FormHdInput
              placeholder="请输入登录密码"
              class="mt-5"
              v-model="values.password"
            />
            <FormError :error="errors.password" />
          </div>

          <FormHdButton class="mt-9" />
          <div class="flex justify-center mt-4">
            <a href="javascript:;">
              <i-tencent-qq theme="outline" size="24" fill="#333" />
            </a>
            <a href="javascript:;" class="mx-6">
              <i-weibo theme="outline" size="24" fill="#333" />
            </a>
            <a href="javascript:;">
              <i-wechat theme="outline" size="24" fill="#333" />
            </a>
          </div>
        </div>
        <div class="mt-6 flex space-x-5 justify-center">
          <FormHdLink>网站首页</FormHdLink>
          <FormHdLink>会员注册</FormHdLink>
          <FormHdLink>找回密码</FormHdLink>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img
          src="/images/login.jpg"
          class="w-full object-cover absolute h-full left-0 top-0"
        />
      </div>
    </div>
  </form>
</template>

<style lang="scss">
.for {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5 md:p-0;
}
</style>
