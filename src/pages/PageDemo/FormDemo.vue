<template>
  <el-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    label-width="120px"
    class="demo-dynamic"
  >
    <el-row v-for="domain in persons" :key="domain.key">
      <el-col :span="8">
        <el-form-item
          :label="domain.name"
          :prop="domain.key"
          :rules="rules[domain.key]"
        >
          <el-input v-model="dynamicValidateForm[domain.key]"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')"
        >提交</el-button
      >
      <el-button @click="addPerson">新增人员</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        phone: '13055559999',
        sex: '1',
      },
      persons: [
        {
          name: '手机号',
          value: '13055559999',
          key: 'phone',
        },
        {
          name: '性别',
          value: '1',
          key: 'sex',
        },
      ],
      rules: {
        sex: [
          {
            required: true,
            message: '请输入姓别',
            trigger: 'blur',
          },
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号码',
            trigger: 'blur',
          },
          {
            pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
            message: '请输入正确格式的手机号码',
            trigger: 'blur',
          },
        ],
        idCard: [
          {
            required: true,
            message: '请输入身份证号码',
            trigger: 'blur',
          },
          {
            pattern:
              /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/,
            message: '请输入正确格式的身份证号码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('this.dynamicValidateForm', this.dynamicValidateForm)
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    addPerson() {
      this.dynamicValidateForm.persons.push({
        name: '',
        iphone: '',
        idCard: '',
      })
    },
  },
}
</script>

