<template>
  <!-- 注册内容 -->
  <div class="register">
    <h3>
      注册新用户
      <span class="go">我有账号，去 <router-link to="login">登录</router-link>
      </span>
    </h3>
    <div class="content">
      <label>手机号:</label>
      <input type="text" placeholder="请输入你的手机号" v-model="phone" />
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>验证码:</label>
      <input type="text" placeholder="请输入验证码" v-model="code" />
      <button style="width:100px;height:38px" @click="getCode()">获取验证码</button>
      <!-- <img
        ref="code"
        src="http://182.92.128.115/api/user/passport/code"
        alt="code"
      /> -->
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>登录密码:</label>
      <input type="password" placeholder="请输入你的登录密码" v-model="password" />
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>确认密码:</label>
      <input type="password" placeholder="请输入确认密码" v-model="password1" />
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="controls">
      <input name="m1" type="checkbox" v-model="agree" />
      <span>同意协议并注册《尚品汇用户协议》</span>
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="btn">
      <button @click="userRegister">完成注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data () {
    return {
      // 收集表单数据
      phone: '',
      code: '',
      password: '',
      password1: '',
      // 是否同意协议
      agree: true
    }
  },
  methods: {
    // 获取验证码
    async getCode () {
      // 简单判断一下，手机号必须输入了
      try {
        const { phone } = this
        phone && await this.$store.dispatch('getCode', phone)
        console.log(this, this.$store.state.user)
        this.code = this.$store.state.user.code
      } catch (error) {
        console.log(error)
      }

    },
    async userRegister () {
      try {
        const { code, phone, password } = this
        code && phone && password && await this.$store.dispatch('userRegister', { code, phone, password })
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }

    }
  }
};
</script>

<style scoped lang='less'>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid rgb(223, 223, 223);
  margin: 0 auto;

  h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;

    span {
      font-size: 14px;
      float: right;

      a {
        color: #e1251b;
      }
    }
  }

  div:nth-of-type(1) {
    margin-top: 40px;
  }

  .content {
    padding-left: 390px;
    margin-bottom: 18px;
    position: relative;

    label {
      font-size: 14px;
      width: 96px;
      text-align: right;
      display: inline-block;
    }

    input {
      width: 270px;
      height: 38px;
      padding-left: 8px;
      box-sizing: border-box;
      margin-left: 5px;
      outline: none;
      border: 1px solid #999;
    }

    img {
      vertical-align: sub;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 495px;
      color: red;
    }
  }

  .controls {
    text-align: center;
    position: relative;

    input {
      vertical-align: middle;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 495px;
      color: red;
    }
  }

  .btn {
    text-align: center;
    line-height: 36px;
    margin: 17px 0 0 55px;

    button {
      outline: none;
      width: 270px;
      height: 36px;
      background: #e1251b;
      color: #fff !important;
      display: inline-block;
      font-size: 16px;
    }
  }
}

.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;

  ul {
    li {
      display: inline-block;
      border-right: 1px solid #e4e4e4;
      padding: 0 20px;
      margin: 15px 0;
    }
  }
}
</style>